using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsXRay.Core.ErrorResponse;
using AwsXRay.Core.Models;
using AwsXRay.Models;

namespace AwsXRay.Errors;

public sealed class PutTraceSegmentsError : ApiError
{
    private readonly Optional<InvalidRequestException> _invalidRequestExceptionValue;

    private readonly Optional<ThrottledException> _throttledExceptionValue;

    private PutTraceSegmentsError(Optional<InvalidRequestException> invalidRequestExceptionValue,
        Optional<ThrottledException> throttledExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _invalidRequestExceptionValue = invalidRequestExceptionValue;
        _throttledExceptionValue = throttledExceptionValue;
    }

    private static PutTraceSegmentsError AsInvalidRequestException(InvalidRequestException value) =>
        new(Optional<InvalidRequestException>.Some(value), default, default);

    private static PutTraceSegmentsError AsThrottledException(ThrottledException value) =>
        new(default, Optional<ThrottledException>.Some(value), default);

    private static PutTraceSegmentsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value) =>
        _invalidRequestExceptionValue.TryGetValue(out value);

    public bool TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value) =>
        _throttledExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InvalidRequestException, TResult> onInvalidRequestException,
        Func<ThrottledException, TResult> onThrottledException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInvalidRequestException(out var invalidRequestExceptionValue) => onInvalidRequestException(
                invalidRequestExceptionValue),
            _ when TryGetThrottledException(out var throttledExceptionValue) => onThrottledException(
                throttledExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PutTraceSegmentsError)} holds no value.")
        };

    public void Match(Action<InvalidRequestException> onInvalidRequestException,
        Action<ThrottledException> onThrottledException,
        Action<RawError> otherwise)
    {
        if (TryGetInvalidRequestException(out var invalidRequestExceptionValue)) onInvalidRequestException(
            invalidRequestExceptionValue);
        else if (TryGetThrottledException(out var throttledExceptionValue)) onThrottledException(
            throttledExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutTraceSegmentsError)} holds no value.");
    }

    private static Task<PutTraceSegmentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<InvalidRequestException>().As(AsInvalidRequestException),
            429 => response.Json<ThrottledException>().As(AsThrottledException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutTraceSegmentsError> Response { get; } = new(Create);
}
