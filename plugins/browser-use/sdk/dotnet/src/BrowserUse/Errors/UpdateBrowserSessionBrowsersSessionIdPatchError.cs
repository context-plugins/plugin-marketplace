using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class UpdateBrowserSessionBrowsersSessionIdPatchError : ApiError
{
    private readonly Optional<SessionNotFoundError> _sessionNotFoundErrorValue;

    private readonly Optional<ValidationError> _validationErrorValue;

    private UpdateBrowserSessionBrowsersSessionIdPatchError(Optional<SessionNotFoundError> sessionNotFoundErrorValue,
        Optional<ValidationError> validationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _sessionNotFoundErrorValue = sessionNotFoundErrorValue;
        _validationErrorValue = validationErrorValue;
    }

    private static UpdateBrowserSessionBrowsersSessionIdPatchError AsSessionNotFoundError(SessionNotFoundError value) =>
        new(Optional<SessionNotFoundError>.Some(value), default, default);

    private static UpdateBrowserSessionBrowsersSessionIdPatchError AsValidationError(ValidationError value) =>
        new(default, Optional<ValidationError>.Some(value), default);

    private static UpdateBrowserSessionBrowsersSessionIdPatchError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetSessionNotFoundError([NotNullWhen(true)] out SessionNotFoundError? value) =>
        _sessionNotFoundErrorValue.TryGetValue(out value);

    public bool TryGetValidationError([NotNullWhen(true)] out ValidationError? value) =>
        _validationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<SessionNotFoundError, TResult> onSessionNotFoundError,
        Func<ValidationError, TResult> onValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSessionNotFoundError(out var sessionNotFoundErrorValue) => onSessionNotFoundError(
                sessionNotFoundErrorValue),
            _ when TryGetValidationError(out var validationErrorValue) => onValidationError(validationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(UpdateBrowserSessionBrowsersSessionIdPatchError)} holds no value.")
        };

    public void Match(Action<SessionNotFoundError> onSessionNotFoundError,
        Action<ValidationError> onValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetSessionNotFoundError(out var sessionNotFoundErrorValue)) onSessionNotFoundError(
            sessionNotFoundErrorValue);
        else if (TryGetValidationError(out var validationErrorValue)) onValidationError(validationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(UpdateBrowserSessionBrowsersSessionIdPatchError)} holds no value.");
    }

    private static Task<UpdateBrowserSessionBrowsersSessionIdPatchError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<SessionNotFoundError>().As(AsSessionNotFoundError),
            422 => response.Json<ValidationError>().As(AsValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateBrowserSessionBrowsersSessionIdPatchError> Response { get; } = new(Create);
}
