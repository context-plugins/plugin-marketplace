using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using FlowAccount.Core.Configuration;

namespace FlowAccount.Core.Logging;

internal sealed class HttpLogger
{
    private readonly ILogger _logger;
    private readonly Redaction _redaction;
    private readonly bool _logRequestHeaders;
    private readonly bool _logRequestBody;
    private readonly bool _logResponseHeaders;
    private readonly TimeProvider _clock;

    public HttpLogger(LoggingOptions options, string clientName, TimeProvider clock)
    {
        _redaction = new Redaction(options);
        _logRequestHeaders = options.LogRequestHeaders;
        _logRequestBody = options.LogRequestBody;
        _logResponseHeaders = options.LogResponseHeaders;
        _logger = (options.LoggerFactory ?? NullLoggerFactory.Instance).CreateLogger($"{clientName}.Http");
        _clock = clock;
    }

    public Scope Begin(HttpMethod method, Uri uri, RequestOptions? requestOptions)
    {
        var level = requestOptions?.LogLevel;

        var plan = new Plan(
            Line: On(LogLevel.Information, byDefault: true),
            Warning: On(LogLevel.Warning, byDefault: true),
            Error: On(LogLevel.Error, byDefault: true),
            RequestHeaders: On(LogLevel.Debug, _logRequestHeaders),
            RequestBody: On(LogLevel.Trace, _logRequestBody),
            ResponseHeaders: On(LogLevel.Debug, _logResponseHeaders));

        var url = plan.NeedsUrl ? _redaction.Url(uri) : string.Empty;
        return new Scope(_logger, _redaction, plan, method.Method, url, _clock);

        bool On(LogLevel emitAt, bool byDefault) =>
            _logger.IsEnabled(emitAt) && (level is null ? byDefault : level <= emitAt);
    }

    internal readonly record struct Plan(
        bool Line, bool Warning, bool Error,
        bool RequestHeaders, bool RequestBody, bool ResponseHeaders)
    {
        public bool NeedsUrl => Line || Warning || Error;
    }

    internal sealed class Scope
    {
        private readonly ILogger _logger;
        private readonly Redaction _redaction;
        private readonly Plan _plan;
        private readonly string _method;
        private readonly string _url;
        private readonly TimeProvider _clock;
        private readonly long _startedAt;
        private long _sentAt;

        internal Scope(ILogger logger, Redaction redaction, Plan plan, string method, string url, TimeProvider clock)
        {
            _logger = logger;
            _redaction = redaction;
            _plan = plan;
            _method = method;
            _url = url;
            _clock = clock;
            _startedAt = clock.GetTimestamp();
        }

        public async ValueTask RequestSending(HttpRequestMessage httpRequest)
        {
            if (_plan.Line)
                SdkLog.HttpRequest(_logger, _method, _url);

            if (_plan.RequestHeaders)
                SdkLog.RequestHeaders(_logger, _redaction.Headers(httpRequest.AllHeaders()));

            if (_plan.RequestBody && httpRequest.Content is { } content)
            {
                var contentType = content.Headers.ContentType?.ToString();
                if (_redaction.IsLoggable(contentType))
                {
                    await content.LoadIntoBufferAsync().ConfigureAwait(false);
                    var body = await content.ReadAsStringAsync().ConfigureAwait(false);
                    SdkLog.RequestBody(_logger, contentType!, _redaction.Body(contentType, body));
                }
            }

            _sentAt = _clock.GetTimestamp();
        }

        public void ResponseReceived(HttpResponseMessage response, bool success)
        {
            if (success ? _plan.Line : _plan.Warning)
                SdkLog.HttpResponse(_logger, success ? LogLevel.Information : LogLevel.Warning,
                    _method, _url, (int)response.StatusCode, (long)_clock.GetElapsedTime(_sentAt).TotalMilliseconds);

            if (_plan.ResponseHeaders)
                SdkLog.ResponseHeaders(_logger, _redaction.Headers(response.AllHeaders()));
        }

        public void Retrying(int attempt, int maxRetries, TimeSpan delay, RetryReason reason)
        {
            if (!_plan.Warning)
                return;

            var (text, exception) = Describe(reason);
            SdkLog.HttpRetrying(_logger, exception, _method, _url, delay, attempt, maxRetries, text);
        }

        public void Failed(Exception exception)
        {
            if (_plan.Error)
                SdkLog.HttpFailed(_logger, exception, _method, _url, (long)_clock.GetElapsedTime(_startedAt).TotalMilliseconds);
        }

        private static (string Text, Exception? Exception) Describe(RetryReason reason) =>
            reason switch
            {
                RetryReason.Status status => ($"{(int)status.StatusCode} {status.StatusCode}", null),
                RetryReason.Failure failure => (failure.Exception.GetType().Name, failure.Exception),
                _ => throw new NotSupportedException($"Unhandled retry reason: {reason.GetType().Name}"),
            };
    }

    internal sealed class Redaction
    {
        private readonly HashSet<string> _redactedKeys;
        private readonly HashSet<string> _redactedHeaders;
        private readonly HashSet<string> _unmaskHeaders;
        private readonly IReadOnlyCollection<string> _loggableContentTypes;
        private readonly string _placeholder;
        private readonly int _bodySizeLimit;

        public Redaction(LoggingOptions options)
        {
            _redactedKeys = new HashSet<string>(options.RedactedKeys, StringComparer.OrdinalIgnoreCase);
            _redactedHeaders = new HashSet<string>(options.RedactedHeaders, StringComparer.OrdinalIgnoreCase);
            _unmaskHeaders = new HashSet<string>(options.UnmaskHeaders, StringComparer.OrdinalIgnoreCase);
            _loggableContentTypes = options.LoggableContentTypes;
            _placeholder = options.RedactionPlaceholder;
            _bodySizeLimit = options.BodySizeLimit;
        }

        public string Url(Uri uri)
        {
            var query = uri.GetComponents(UriComponents.Query, UriFormat.UriEscaped);
            var fragment = uri.GetComponents(UriComponents.Fragment, UriFormat.UriEscaped);
            return uri.GetComponents(UriComponents.SchemeAndServer, UriFormat.UriEscaped)
                + uri.AbsolutePath
                + (query is not [] ? "?" + MaskPairs(query, maskUnknownKeys: true) : string.Empty)
                + (fragment is not [] ? "#" + fragment : string.Empty);
        }

        public string Header(string name, string value) =>
            _unmaskHeaders.Contains(name) ? value
            : _redactedHeaders.Contains(name) ? _placeholder
            : KnownSafe.Headers.Contains(name) ? value
            : _placeholder;

        public IReadOnlyList<(string Name, string Value)> Headers(
            IEnumerable<(string Name, IEnumerable<string> Values)> headers) =>
            [.. headers.Select(h => (h.Name, Header(h.Name, string.Join(", ", h.Values))))];

        public bool IsLoggable(string? contentType)
        {
            var mediaType = MediaTypeOf(contentType);
            return mediaType is not [] && _loggableContentTypes.Any(prefix =>
                mediaType.StartsWith(prefix, StringComparison.OrdinalIgnoreCase));
        }

        public string Body(string? contentType, string body)
        {
            if (body is [])
                return body;

            var isForm = string.Equals(
                MediaTypeOf(contentType), "application/x-www-form-urlencoded", StringComparison.OrdinalIgnoreCase);
            return Truncate(isForm ? MaskPairs(body, maskUnknownKeys: false) : body);
        }

        private string MaskPairs(string pairs, bool maskUnknownKeys)
        {
            var parts = pairs.Split('&');
            for (var i = 0; i < parts.Length; i++)
            {
                var eq = parts[i].IndexOf('=');
                if (eq < 0)
                    continue;

                var key = Uri.UnescapeDataString(parts[i][..eq]);
                if (_redactedKeys.Contains(key) || (maskUnknownKeys && !KnownSafe.QueryKeys.Contains(key)))
                    parts[i] = parts[i][..eq] + "=" + _placeholder;
            }

            return string.Join("&", parts);
        }

        private string Truncate(string body)
        {
            var totalBytes = Encoding.UTF8.GetByteCount(body);
            if (totalBytes <= _bodySizeLimit)
                return body;

            var bytesUsed = 0;
            var charsKept = 0;
            while (charsKept < body.Length)
            {
                var isPair = char.IsHighSurrogate(body[charsKept])
                    && charsKept + 1 < body.Length && char.IsLowSurrogate(body[charsKept + 1]);
                var charBytes = isPair ? 4 : body[charsKept] < 0x80 ? 1 : body[charsKept] < 0x800 ? 2 : 3;
                if (bytesUsed + charBytes > _bodySizeLimit)
                    break;
                bytesUsed += charBytes;
                charsKept += isPair ? 2 : 1;
            }

            return $"{body[..charsKept]} …({totalBytes} bytes total)";
        }

        private static string MediaTypeOf(string? contentType)
        {
            if (contentType is null or "")
                return string.Empty;

            var semicolon = contentType.IndexOf(';');
            return (semicolon >= 0 ? contentType[..semicolon] : contentType).Trim();
        }
    }

    internal static class KnownSafe
    {
        public static readonly HashSet<string> Headers = new(StringComparer.OrdinalIgnoreCase)
        {
            "Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Ranges",
            "Age", "Allow", "Cache-Control", "Connection", "Content-Disposition",
            "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5",
            "Content-Range", "Content-Type", "Date", "ETag", "Expect", "Expires",
            "Host", "Idempotency-Key", "If-Match", "If-Modified-Since", "If-None-Match",
            "If-Range", "If-Unmodified-Since", "Keep-Alive", "Last-Modified", "Max-Forwards",
            "Origin", "Pragma", "Range", "RateLimit-Limit", "RateLimit-Policy",
            "RateLimit-Remaining", "RateLimit-Reset", "Request-Id", "Retry-After", "Server",
            "TE", "Trailer", "Transfer-Encoding", "Upgrade", "User-Agent", "Vary", "Via",
            "Warning", "WWW-Authenticate", "traceparent", "tracestate",
            "X-Correlation-Id", "X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset",
            "X-Request-Id", "X-APIMatic-Lang", "X-APIMatic-Package-Version",
            "X-APIMatic-Gen-Version", "X-APIMatic-OS", "X-APIMatic-Runtime",
        };

        public static readonly HashSet<string> QueryKeys = new(StringComparer.OrdinalIgnoreCase)
        {
            "cursor", "dates", "datetime", "limit", "offset", "page", "since", "size", "strings",
        };
    }
}

file static class HttpMessageExtensions
{
    extension(HttpRequestMessage request)
    {
        public IEnumerable<(string Name, IEnumerable<string> Values)> AllHeaders() =>
            Combine(request.Headers, request.Content?.Headers);
    }

    extension(HttpResponseMessage response)
    {
        public IEnumerable<(string Name, IEnumerable<string> Values)> AllHeaders() =>
            Combine(response.Headers, response.Content?.Headers);
    }

    private static IEnumerable<(string Name, IEnumerable<string> Values)> Combine(
        HttpHeaders headers, HttpHeaders? contentHeaders)
    {
        foreach (var header in headers)
            yield return (header.Key, header.Value);

        if (contentHeaders is null)
            yield break;

        foreach (var header in contentHeaders)
            yield return (header.Key, header.Value);
    }
}
