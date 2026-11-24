using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Logging;

namespace Divvy.Core.Logging;

internal static partial class SdkLog
{
    [LoggerMessage(EventId = 1000, EventName = "HttpRequest", Level = LogLevel.Information, Message = "HTTP {Method} {Url}")]
    public static partial void HttpRequest(ILogger logger, string method, string url);

    [LoggerMessage(EventId = 1001, EventName = "HttpResponse", Message = "HTTP {Method} {Url} → {StatusCode} ({ElapsedMs} ms)")]
    public static partial void HttpResponse(ILogger logger, LogLevel level, string method, string url, int statusCode, long elapsedMs);

    private static readonly EventId RequestHeadersEvent = new(1002, "RequestHeaders");
    private static readonly EventId ResponseHeadersEvent = new(1003, "ResponseHeaders");

    public static void RequestHeaders(ILogger logger, IReadOnlyList<(string Name, string Value)> headers) =>
        logger.Log(LogLevel.Debug, RequestHeadersEvent,
            new HeadersLogValue("→ request headers:", headers), null, static (state, _) => state.ToString());

    public static void ResponseHeaders(ILogger logger, IReadOnlyList<(string Name, string Value)> headers) =>
        logger.Log(LogLevel.Debug, ResponseHeadersEvent,
            new HeadersLogValue("← response headers:", headers), null, static (state, _) => state.ToString());

    [LoggerMessage(EventId = 1004, EventName = "RequestBody", Level = LogLevel.Trace, Message = "→ body ({ContentType}): {Body}")]
    public static partial void RequestBody(ILogger logger, string contentType, string body);

    [LoggerMessage(EventId = 1006, EventName = "HttpRetrying", Level = LogLevel.Warning, Message = "HTTP {Method} {Url} retrying in {Delay} (attempt {Attempt}/{MaxRetries}): {Reason}")]
    public static partial void HttpRetrying(ILogger logger, Exception? exception, string method, string url, TimeSpan delay, int attempt, int maxRetries, string reason);

    [LoggerMessage(EventId = 1007, EventName = "HttpFailed", Level = LogLevel.Error, Message = "HTTP {Method} {Url} failed after {ElapsedMs} ms")]
    public static partial void HttpFailed(ILogger logger, Exception exception, string method, string url, long elapsedMs);

    internal sealed class HeadersLogValue : IReadOnlyList<KeyValuePair<string, object?>>
    {
        private readonly string _prefix;
        private readonly IReadOnlyList<(string Name, string Value)> _headers;

        public HeadersLogValue(string prefix, IReadOnlyList<(string Name, string Value)> headers)
        {
            _prefix = prefix;
            _headers = headers;
        }

        public int Count => _headers.Count;

        public KeyValuePair<string, object?> this[int index] =>
            new(_headers[index].Name, _headers[index].Value);

        public IEnumerator<KeyValuePair<string, object?>> GetEnumerator()
        {
            for (var i = 0; i < _headers.Count; i++)
                yield return this[i];
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        public override string ToString()
        {
            var builder = new StringBuilder(_prefix);
            foreach (var (name, value) in _headers)
                builder.Append("\n  ").Append(name).Append(": ").Append(value);
            return builder.ToString();
        }
    }
}
