using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class GetBrowserSessionBrowsersSessionIdGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<SessionNotFoundError> _sessionNotFoundErrorValue;

    private GetBrowserSessionBrowsersSessionIdGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<SessionNotFoundError> sessionNotFoundErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _sessionNotFoundErrorValue = sessionNotFoundErrorValue;
    }

    private static GetBrowserSessionBrowsersSessionIdGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default);

    private static GetBrowserSessionBrowsersSessionIdGetError AsSessionNotFoundError(SessionNotFoundError value) =>
        new(default, Optional<SessionNotFoundError>.Some(value), default);

    private static GetBrowserSessionBrowsersSessionIdGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetSessionNotFoundError([NotNullWhen(true)] out SessionNotFoundError? value) =>
        _sessionNotFoundErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<SessionNotFoundError, TResult> onSessionNotFoundError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetSessionNotFoundError(out var sessionNotFoundErrorValue) => onSessionNotFoundError(
                sessionNotFoundErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetBrowserSessionBrowsersSessionIdGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<SessionNotFoundError> onSessionNotFoundError,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetSessionNotFoundError(out var sessionNotFoundErrorValue)) onSessionNotFoundError(
            sessionNotFoundErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetBrowserSessionBrowsersSessionIdGetError)} holds no value.");
    }

    private static Task<GetBrowserSessionBrowsersSessionIdGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<SessionNotFoundError>().As(AsSessionNotFoundError),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetBrowserSessionBrowsersSessionIdGetError> Response { get; } = new(Create);
}
