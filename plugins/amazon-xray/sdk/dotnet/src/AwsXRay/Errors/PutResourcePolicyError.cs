using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsXRay.Core.ErrorResponse;
using AwsXRay.Core.Models;
using AwsXRay.Models;

namespace AwsXRay.Errors;

public sealed class PutResourcePolicyError : ApiError
{
    private readonly Optional<InvalidPolicyRevisionIdException> _invalidPolicyRevisionIdExceptionValue;

    private readonly Optional<ThrottledException> _throttledExceptionValue;

    private PutResourcePolicyError(Optional<InvalidPolicyRevisionIdException> invalidPolicyRevisionIdExceptionValue,
        Optional<ThrottledException> throttledExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _invalidPolicyRevisionIdExceptionValue = invalidPolicyRevisionIdExceptionValue;
        _throttledExceptionValue = throttledExceptionValue;
    }

    private static PutResourcePolicyError AsInvalidPolicyRevisionIdException(InvalidPolicyRevisionIdException value) =>
        new(Optional<InvalidPolicyRevisionIdException>.Some(value), default, default);

    private static PutResourcePolicyError AsThrottledException(ThrottledException value) =>
        new(default, Optional<ThrottledException>.Some(value), default);

    private static PutResourcePolicyError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetInvalidPolicyRevisionIdException([NotNullWhen(true)] out InvalidPolicyRevisionIdException? value) =>
        _invalidPolicyRevisionIdExceptionValue.TryGetValue(out value);

    public bool TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value) =>
        _throttledExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InvalidPolicyRevisionIdException, TResult> onInvalidPolicyRevisionIdException,
        Func<ThrottledException, TResult> onThrottledException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInvalidPolicyRevisionIdException(
                out var invalidPolicyRevisionIdExceptionValue) => onInvalidPolicyRevisionIdException(
                invalidPolicyRevisionIdExceptionValue),
            _ when TryGetThrottledException(out var throttledExceptionValue) => onThrottledException(
                throttledExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PutResourcePolicyError)} holds no value.")
        };

    public void Match(Action<InvalidPolicyRevisionIdException> onInvalidPolicyRevisionIdException,
        Action<ThrottledException> onThrottledException,
        Action<RawError> otherwise)
    {
        if (TryGetInvalidPolicyRevisionIdException(
            out var invalidPolicyRevisionIdExceptionValue)) onInvalidPolicyRevisionIdException(
            invalidPolicyRevisionIdExceptionValue);
        else if (TryGetThrottledException(out var throttledExceptionValue)) onThrottledException(
            throttledExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutResourcePolicyError)} holds no value.");
    }

    private static Task<PutResourcePolicyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<InvalidPolicyRevisionIdException>().As(AsInvalidPolicyRevisionIdException),
            429 => response.Json<ThrottledException>().As(AsThrottledException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutResourcePolicyError> Response { get; } = new(Create);
}
