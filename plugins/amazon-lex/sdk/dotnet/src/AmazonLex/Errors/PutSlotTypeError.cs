using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class PutSlotTypeError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<PreconditionFailedException> _preconditionFailedExceptionValue;

    private PutSlotTypeError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConflictException> conflictExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<PreconditionFailedException> preconditionFailedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _conflictExceptionValue = conflictExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _preconditionFailedExceptionValue = preconditionFailedExceptionValue;
    }

    private static PutSlotTypeError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default, default);

    private static PutSlotTypeError AsConflictException(ConflictException value) =>
        new(default, Optional<ConflictException>.Some(value), default, default, default, default);

    private static PutSlotTypeError AsInternalFailureException(InternalFailureException value) =>
        new(default, default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static PutSlotTypeError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, default, Optional<LimitExceededException>.Some(value), default, default);

    private static PutSlotTypeError AsPreconditionFailedException(PreconditionFailedException value) =>
        new(default, default, default, default, Optional<PreconditionFailedException>.Some(value), default);

    private static PutSlotTypeError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value) =>
        _preconditionFailedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<ConflictException, TResult> onConflictException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<PreconditionFailedException, TResult> onPreconditionFailedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetPreconditionFailedException(
                out var preconditionFailedExceptionValue) => onPreconditionFailedException(
                preconditionFailedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PutSlotTypeError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<ConflictException> onConflictException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<PreconditionFailedException> onPreconditionFailedException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetPreconditionFailedException(
            out var preconditionFailedExceptionValue)) onPreconditionFailedException(preconditionFailedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutSlotTypeError)} holds no value.");
    }

    private static Task<PutSlotTypeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            412 => response.Json<PreconditionFailedException>().As(AsPreconditionFailedException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutSlotTypeError> Response { get; } = new(Create);
}
