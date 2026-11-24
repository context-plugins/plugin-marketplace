using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class CreateGraphqlApiError : ApiError
{
    private readonly Optional<ApiLimitExceededException> _apiLimitExceededExceptionValue;

    private readonly Optional<ConcurrentModificationException> _concurrentModificationExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private CreateGraphqlApiError(Optional<ApiLimitExceededException> apiLimitExceededExceptionValue,
        Optional<ConcurrentModificationException> concurrentModificationExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiLimitExceededExceptionValue = apiLimitExceededExceptionValue;
        _concurrentModificationExceptionValue = concurrentModificationExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static CreateGraphqlApiError AsApiLimitExceededException(ApiLimitExceededException value) =>
        new(Optional<ApiLimitExceededException>.Some(value), default, default, default, default, default);

    private static CreateGraphqlApiError AsConcurrentModificationException(ConcurrentModificationException value) =>
        new(default, Optional<ConcurrentModificationException>.Some(value), default, default, default, default);

    private static CreateGraphqlApiError AsInternalFailureException(InternalFailureException value) =>
        new(default, default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static CreateGraphqlApiError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, default, Optional<LimitExceededException>.Some(value), default, default);

    private static CreateGraphqlApiError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static CreateGraphqlApiError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiLimitExceededException([NotNullWhen(true)] out ApiLimitExceededException? value) =>
        _apiLimitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value) =>
        _concurrentModificationExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiLimitExceededException, TResult> onApiLimitExceededException,
        Func<ConcurrentModificationException, TResult> onConcurrentModificationException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiLimitExceededException(
                out var apiLimitExceededExceptionValue) => onApiLimitExceededException(apiLimitExceededExceptionValue),
            _ when TryGetConcurrentModificationException(
                out var concurrentModificationExceptionValue) => onConcurrentModificationException(
                concurrentModificationExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateGraphqlApiError)} holds no value.")
        };

    public void Match(Action<ApiLimitExceededException> onApiLimitExceededException,
        Action<ConcurrentModificationException> onConcurrentModificationException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetApiLimitExceededException(out var apiLimitExceededExceptionValue)) onApiLimitExceededException(
            apiLimitExceededExceptionValue);
        else if (TryGetConcurrentModificationException(
            out var concurrentModificationExceptionValue)) onConcurrentModificationException(
            concurrentModificationExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateGraphqlApiError)} holds no value.");
    }

    private static Task<CreateGraphqlApiError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiLimitExceededException>().As(AsApiLimitExceededException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            409 => response.Json<ConcurrentModificationException>().As(AsConcurrentModificationException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateGraphqlApiError> Response { get; } = new(Create);
}
