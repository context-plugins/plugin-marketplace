using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class CreateProfileProfilesPostError : ApiError
{
    private readonly Optional<InsufficientCreditsError> _insufficientCreditsErrorValue;

    private readonly Optional<ValidationError> _validationErrorValue;

    private CreateProfileProfilesPostError(Optional<InsufficientCreditsError> insufficientCreditsErrorValue,
        Optional<ValidationError> validationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _insufficientCreditsErrorValue = insufficientCreditsErrorValue;
        _validationErrorValue = validationErrorValue;
    }

    private static CreateProfileProfilesPostError AsInsufficientCreditsError(InsufficientCreditsError value) =>
        new(Optional<InsufficientCreditsError>.Some(value), default, default);

    private static CreateProfileProfilesPostError AsValidationError(ValidationError value) =>
        new(default, Optional<ValidationError>.Some(value), default);

    private static CreateProfileProfilesPostError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetInsufficientCreditsError([NotNullWhen(true)] out InsufficientCreditsError? value) =>
        _insufficientCreditsErrorValue.TryGetValue(out value);

    public bool TryGetValidationError([NotNullWhen(true)] out ValidationError? value) =>
        _validationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InsufficientCreditsError, TResult> onInsufficientCreditsError,
        Func<ValidationError, TResult> onValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInsufficientCreditsError(out var insufficientCreditsErrorValue) => onInsufficientCreditsError(
                insufficientCreditsErrorValue),
            _ when TryGetValidationError(out var validationErrorValue) => onValidationError(validationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateProfileProfilesPostError)} holds no value.")
        };

    public void Match(Action<InsufficientCreditsError> onInsufficientCreditsError,
        Action<ValidationError> onValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetInsufficientCreditsError(out var insufficientCreditsErrorValue)) onInsufficientCreditsError(
            insufficientCreditsErrorValue);
        else if (TryGetValidationError(out var validationErrorValue)) onValidationError(validationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateProfileProfilesPostError)} holds no value.");
    }

    private static Task<CreateProfileProfilesPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            402 => response.Json<InsufficientCreditsError>().As(AsInsufficientCreditsError),
            422 => response.Json<ValidationError>().As(AsValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateProfileProfilesPostError> Response { get; } = new(Create);
}
