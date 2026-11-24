using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class GetUtterancesViewError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private GetUtterancesViewError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
    }

    private static GetUtterancesViewError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default);

    private static GetUtterancesViewError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default);

    private static GetUtterancesViewError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, Optional<LimitExceededException>.Some(value), default);

    private static GetUtterancesViewError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetUtterancesViewError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetUtterancesViewError)} holds no value.");
    }

    private static Task<GetUtterancesViewError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetUtterancesViewError> Response { get; } = new(Create);
}
