using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class ListImportsError : ApiError
{
    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private ListImportsError(Optional<InternalServerException> internalServerExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerExceptionValue = internalServerExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static ListImportsError AsInternalServerException(InternalServerException value) =>
        new(Optional<InternalServerException>.Some(value), default, default, default);

    private static ListImportsError AsThrottlingException(ThrottlingException value) =>
        new(default, Optional<ThrottlingException>.Some(value), default, default);

    private static ListImportsError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static ListImportsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerException, TResult> onInternalServerException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListImportsError)} holds no value.")
        };

    public void Match(Action<InternalServerException> onInternalServerException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListImportsError)} holds no value.");
    }

    private static Task<ListImportsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListImportsError> Response { get; } = new(Create);
}
