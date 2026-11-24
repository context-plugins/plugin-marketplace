using System;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Net;
using System.Net.Http.Headers;
using Rendex.Core.Exceptions;

namespace Rendex.Core.Models;

/// <summary>
///     Represents either a successful response of type <typeparamref name="TResponse" />
///     or a typed error of type <typeparamref name="TError" />.
/// </summary>
public readonly struct ApiResult<TResponse, TError>
{
    private readonly Optional<TResponse> _response;
    private readonly Optional<TError> _error;
    private readonly CallContext _callContext;

    public HttpStatusCode StatusCode { get; }

    public HttpResponseHeaders Headers { get; }

    public MediaTypeHeaderValue? ContentType { get; }

    private ApiResult(
        CallContext call,
        Optional<TResponse> response,
        Optional<TError> error,
        HttpStatusCode statusCode,
        HttpResponseHeaders headers,
        MediaTypeHeaderValue? contentType)
    {
        _callContext = call;
        _response = response;
        _error = error;
        StatusCode = statusCode;
        Headers = headers;
        ContentType = contentType;
    }

    /// <summary>Create a success result.</summary>
    internal static ApiResult<TResponse, TError> Success(
        CallContext call,
        TResponse response,
        HttpStatusCode statusCode,
        HttpResponseHeaders headers,
        MediaTypeHeaderValue? contentType) =>
        new(call, Optional<TResponse>.Some(response), default, statusCode, headers, contentType);

    /// <summary>Create a failure result with a typed error.</summary>
    internal static ApiResult<TResponse, TError> Failure(
        CallContext call,
        TError error,
        HttpStatusCode statusCode,
        HttpResponseHeaders headers,
        MediaTypeHeaderValue? contentType) =>
        new(call, default, Optional<TError>.Some(error), statusCode, headers, contentType);

    /// <summary>Try to get a response (true when success).</summary>
    public bool TryGetResponse([MaybeNullWhen(false)] out TResponse response) =>
        _response.TryGetValue(out response);

    /// <summary>Try to get the API error (true when failure).</summary>
    public bool TryGetError([MaybeNullWhen(false)] out TError error) =>
        _error.TryGetValue(out error);

    /// <summary>Pattern-match style handler.</summary>
    public TResult Match<TResult>(Func<TResponse, TResult> onSuccess, Func<TError, TResult> onFailure)
    {
        if (onSuccess is null) throw new ArgumentNullException(nameof(onSuccess));
        if (onFailure is null) throw new ArgumentNullException(nameof(onFailure));

        if (_response.TryGetValue(out var response))
            return onSuccess(response);
        if (_error.TryGetValue(out var error))
            return onFailure(error);

        throw new InvalidOperationException("ApiResult is neither success nor failure.");
    }

    /// <summary>Action-based pattern match.</summary>
    public void Match(Action<TResponse> onSuccess, Action<TError> onFailure)
    {
        if (onSuccess is null) throw new ArgumentNullException(nameof(onSuccess));
        if (onFailure is null) throw new ArgumentNullException(nameof(onFailure));

        if (_response.TryGetValue(out var response))
            onSuccess(response);
        else if (_error.TryGetValue(out var error))
            onFailure(error);
        else
            throw new InvalidOperationException("ApiResult is neither success nor failure.");
    }

    public void Deconstruct(out bool isSuccess,
        [NotNullWhen(true)] out TResponse? response,
        [NotNullWhen(false)] out TError? error)
    {
        isSuccess = _response.TryGetValue(out response);
        if (isSuccess)
        {
            error = default;
            return;
        }

        _error.TryGetValue(out error);
    }

    public TResponse GetResponseOrThrow()
    {
        if (TryGetResponse(out var success))
            return success;

        if (TryGetError(out var error))
        {
            var number = ((int)StatusCode).ToString(CultureInfo.InvariantCulture);
            var name = StatusCode.ToString();
            var status = name == number ? number : $"{number} ({name})";
            throw new ApiException<TError>($"{_callContext} returned {status}.")
            {
                Error = error,
                Method = _callContext.Method,
                RequestUri = _callContext.RequestUri,
                StatusCode = StatusCode,
                Headers = Headers,
                ContentType = ContentType,
            };
        }

        throw new InvalidOperationException("ApiResult is neither success nor failure.");
    }

    public override string ToString() => Match(
        r => $"Success({r})",
        error => $"Failure({error})"
    );
}
