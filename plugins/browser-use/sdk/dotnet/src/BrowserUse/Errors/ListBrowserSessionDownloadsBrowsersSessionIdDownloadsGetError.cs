using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<SessionNotFoundError> _sessionNotFoundErrorValue;

    private ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<SessionNotFoundError> sessionNotFoundErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _sessionNotFoundErrorValue = sessionNotFoundErrorValue;
    }

    private static ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default);

    private static ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError AsSessionNotFoundError(SessionNotFoundError value) =>
        new(default, Optional<SessionNotFoundError>.Some(value), default);

    private static ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError AsFallback(RawError value) =>
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
                $"{nameof(ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError)} holds no value.")
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
            $"{nameof(ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError)} holds no value.");
    }

    private static Task<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<SessionNotFoundError>().As(AsSessionNotFoundError),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError> Response { get; } = new(
        Create);
}
