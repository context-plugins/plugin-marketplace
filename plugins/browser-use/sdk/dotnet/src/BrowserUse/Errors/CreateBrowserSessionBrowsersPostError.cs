using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class CreateBrowserSessionBrowsersPostError : ApiError
{
    private readonly Optional<ApiKeySpendLimitError> _apiKeySpendLimitErrorValue;

    private readonly Optional<ProfileNotFoundError> _profileNotFoundErrorValue;

    private readonly Optional<SessionTimeoutLimitExceededError> _sessionTimeoutLimitExceededErrorValue;

    private readonly Optional<TooManyConcurrentActiveSessionsError> _tooManyConcurrentActiveSessionsErrorValue;

    private readonly Optional<ValidationError> _validationErrorValue;

    private CreateBrowserSessionBrowsersPostError(Optional<ApiKeySpendLimitError> apiKeySpendLimitErrorValue,
        Optional<ProfileNotFoundError> profileNotFoundErrorValue,
        Optional<SessionTimeoutLimitExceededError> sessionTimeoutLimitExceededErrorValue,
        Optional<TooManyConcurrentActiveSessionsError> tooManyConcurrentActiveSessionsErrorValue,
        Optional<ValidationError> validationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiKeySpendLimitErrorValue = apiKeySpendLimitErrorValue;
        _profileNotFoundErrorValue = profileNotFoundErrorValue;
        _sessionTimeoutLimitExceededErrorValue = sessionTimeoutLimitExceededErrorValue;
        _tooManyConcurrentActiveSessionsErrorValue = tooManyConcurrentActiveSessionsErrorValue;
        _validationErrorValue = validationErrorValue;
    }

    private static CreateBrowserSessionBrowsersPostError AsApiKeySpendLimitError(ApiKeySpendLimitError value) =>
        new(Optional<ApiKeySpendLimitError>.Some(value), default, default, default, default, default);

    private static CreateBrowserSessionBrowsersPostError AsProfileNotFoundError(ProfileNotFoundError value) =>
        new(default, Optional<ProfileNotFoundError>.Some(value), default, default, default, default);

    private static CreateBrowserSessionBrowsersPostError AsSessionTimeoutLimitExceededError(SessionTimeoutLimitExceededError value) =>
        new(default, default, Optional<SessionTimeoutLimitExceededError>.Some(value), default, default, default);

    private static CreateBrowserSessionBrowsersPostError AsTooManyConcurrentActiveSessionsError(TooManyConcurrentActiveSessionsError value) =>
        new(default, default, default, Optional<TooManyConcurrentActiveSessionsError>.Some(value), default, default);

    private static CreateBrowserSessionBrowsersPostError AsValidationError(ValidationError value) =>
        new(default, default, default, default, Optional<ValidationError>.Some(value), default);

    private static CreateBrowserSessionBrowsersPostError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiKeySpendLimitError([NotNullWhen(true)] out ApiKeySpendLimitError? value) =>
        _apiKeySpendLimitErrorValue.TryGetValue(out value);

    public bool TryGetProfileNotFoundError([NotNullWhen(true)] out ProfileNotFoundError? value) =>
        _profileNotFoundErrorValue.TryGetValue(out value);

    public bool TryGetSessionTimeoutLimitExceededError([NotNullWhen(true)] out SessionTimeoutLimitExceededError? value) =>
        _sessionTimeoutLimitExceededErrorValue.TryGetValue(out value);

    public bool TryGetTooManyConcurrentActiveSessionsError([NotNullWhen(true)] out TooManyConcurrentActiveSessionsError? value) =>
        _tooManyConcurrentActiveSessionsErrorValue.TryGetValue(out value);

    public bool TryGetValidationError([NotNullWhen(true)] out ValidationError? value) =>
        _validationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiKeySpendLimitError, TResult> onApiKeySpendLimitError,
        Func<ProfileNotFoundError, TResult> onProfileNotFoundError,
        Func<SessionTimeoutLimitExceededError, TResult> onSessionTimeoutLimitExceededError,
        Func<TooManyConcurrentActiveSessionsError, TResult> onTooManyConcurrentActiveSessionsError,
        Func<ValidationError, TResult> onValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiKeySpendLimitError(out var apiKeySpendLimitErrorValue) => onApiKeySpendLimitError(
                apiKeySpendLimitErrorValue),
            _ when TryGetProfileNotFoundError(out var profileNotFoundErrorValue) => onProfileNotFoundError(
                profileNotFoundErrorValue),
            _ when TryGetSessionTimeoutLimitExceededError(
                out var sessionTimeoutLimitExceededErrorValue) => onSessionTimeoutLimitExceededError(
                sessionTimeoutLimitExceededErrorValue),
            _ when TryGetTooManyConcurrentActiveSessionsError(
                out var tooManyConcurrentActiveSessionsErrorValue) => onTooManyConcurrentActiveSessionsError(
                tooManyConcurrentActiveSessionsErrorValue),
            _ when TryGetValidationError(out var validationErrorValue) => onValidationError(validationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateBrowserSessionBrowsersPostError)} holds no value.")
        };

    public void Match(Action<ApiKeySpendLimitError> onApiKeySpendLimitError,
        Action<ProfileNotFoundError> onProfileNotFoundError,
        Action<SessionTimeoutLimitExceededError> onSessionTimeoutLimitExceededError,
        Action<TooManyConcurrentActiveSessionsError> onTooManyConcurrentActiveSessionsError,
        Action<ValidationError> onValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetApiKeySpendLimitError(out var apiKeySpendLimitErrorValue)) onApiKeySpendLimitError(
            apiKeySpendLimitErrorValue);
        else if (TryGetProfileNotFoundError(out var profileNotFoundErrorValue)) onProfileNotFoundError(
            profileNotFoundErrorValue);
        else if (TryGetSessionTimeoutLimitExceededError(
            out var sessionTimeoutLimitExceededErrorValue)) onSessionTimeoutLimitExceededError(
            sessionTimeoutLimitExceededErrorValue);
        else if (TryGetTooManyConcurrentActiveSessionsError(
            out var tooManyConcurrentActiveSessionsErrorValue)) onTooManyConcurrentActiveSessionsError(
            tooManyConcurrentActiveSessionsErrorValue);
        else if (TryGetValidationError(out var validationErrorValue)) onValidationError(validationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateBrowserSessionBrowsersPostError)} holds no value.");
    }

    private static Task<CreateBrowserSessionBrowsersPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            402 => response.Json<ApiKeySpendLimitError>().As(AsApiKeySpendLimitError),
            403 => response.Json<SessionTimeoutLimitExceededError>().As(AsSessionTimeoutLimitExceededError),
            404 => response.Json<ProfileNotFoundError>().As(AsProfileNotFoundError),
            422 => response.Json<ValidationError>().As(AsValidationError),
            429 => response.Json<TooManyConcurrentActiveSessionsError>().As(AsTooManyConcurrentActiveSessionsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateBrowserSessionBrowsersPostError> Response { get; } = new(Create);
}
