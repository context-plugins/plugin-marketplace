using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class DeleteSlotError : ApiError
{
    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<PreconditionFailedException> _preconditionFailedExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private DeleteSlotError(Optional<ConflictException> conflictExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<PreconditionFailedException> preconditionFailedExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _conflictExceptionValue = conflictExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _preconditionFailedExceptionValue = preconditionFailedExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static DeleteSlotError AsConflictException(ConflictException value) =>
        new(Optional<ConflictException>.Some(value), default, default, default, default, default, default);

    private static DeleteSlotError AsInternalServerException(InternalServerException value) =>
        new(default, Optional<InternalServerException>.Some(value), default, default, default, default, default);

    private static DeleteSlotError AsPreconditionFailedException(PreconditionFailedException value) =>
        new(default, default, Optional<PreconditionFailedException>.Some(value), default, default, default, default);

    private static DeleteSlotError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(default, default, default, Optional<ServiceQuotaExceededException>.Some(value), default, default, default);

    private static DeleteSlotError AsThrottlingException(ThrottlingException value) =>
        new(default, default, default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static DeleteSlotError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, default, default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static DeleteSlotError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value) =>
        _preconditionFailedExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ConflictException, TResult> onConflictException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<PreconditionFailedException, TResult> onPreconditionFailedException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetPreconditionFailedException(
                out var preconditionFailedExceptionValue) => onPreconditionFailedException(
                preconditionFailedExceptionValue),
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteSlotError)} holds no value.")
        };

    public void Match(Action<ConflictException> onConflictException,
        Action<InternalServerException> onInternalServerException,
        Action<PreconditionFailedException> onPreconditionFailedException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetPreconditionFailedException(
            out var preconditionFailedExceptionValue)) onPreconditionFailedException(preconditionFailedExceptionValue);
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteSlotError)} holds no value.");
    }

    private static Task<DeleteSlotError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            412 => response.Json<PreconditionFailedException>().As(AsPreconditionFailedException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteSlotError> Response { get; } = new(Create);
}
