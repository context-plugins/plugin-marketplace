using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsXRay.Core.ErrorResponse;
using AwsXRay.Core.Models;
using AwsXRay.Models;

namespace AwsXRay.Errors;

public sealed class ListTagsForResourceError : ApiError
{
    private readonly Optional<InvalidRequestException> _invalidRequestExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ThrottledException> _throttledExceptionValue;

    private ListTagsForResourceError(Optional<InvalidRequestException> invalidRequestExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ThrottledException> throttledExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _invalidRequestExceptionValue = invalidRequestExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _throttledExceptionValue = throttledExceptionValue;
    }

    private static ListTagsForResourceError AsInvalidRequestException(InvalidRequestException value) =>
        new(Optional<InvalidRequestException>.Some(value), default, default, default);

    private static ListTagsForResourceError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, Optional<ResourceNotFoundException>.Some(value), default, default);

    private static ListTagsForResourceError AsThrottledException(ThrottledException value) =>
        new(default, default, Optional<ThrottledException>.Some(value), default);

    private static ListTagsForResourceError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value) =>
        _invalidRequestExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value) =>
        _throttledExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InvalidRequestException, TResult> onInvalidRequestException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ThrottledException, TResult> onThrottledException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInvalidRequestException(out var invalidRequestExceptionValue) => onInvalidRequestException(
                invalidRequestExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetThrottledException(out var throttledExceptionValue) => onThrottledException(
                throttledExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListTagsForResourceError)} holds no value.")
        };

    public void Match(Action<InvalidRequestException> onInvalidRequestException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ThrottledException> onThrottledException,
        Action<RawError> otherwise)
    {
        if (TryGetInvalidRequestException(out var invalidRequestExceptionValue)) onInvalidRequestException(
            invalidRequestExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetThrottledException(out var throttledExceptionValue)) onThrottledException(
            throttledExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListTagsForResourceError)} holds no value.");
    }

    private static Task<ListTagsForResourceError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<InvalidRequestException>().As(AsInvalidRequestException),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            429 => response.Json<ThrottledException>().As(AsThrottledException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListTagsForResourceError> Response { get; } = new(Create);
}
