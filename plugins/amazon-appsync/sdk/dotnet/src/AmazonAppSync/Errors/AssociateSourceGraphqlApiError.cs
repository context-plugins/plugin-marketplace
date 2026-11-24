using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class AssociateSourceGraphqlApiError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConcurrentModificationException> _concurrentModificationExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private AssociateSourceGraphqlApiError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConcurrentModificationException> concurrentModificationExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _concurrentModificationExceptionValue = concurrentModificationExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static AssociateSourceGraphqlApiError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default, default, default);

    private static AssociateSourceGraphqlApiError AsConcurrentModificationException(ConcurrentModificationException value) =>
        new(
            default,
            Optional<ConcurrentModificationException>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AssociateSourceGraphqlApiError AsInternalFailureException(InternalFailureException value) =>
        new(default, default, Optional<InternalFailureException>.Some(value), default, default, default, default);

    private static AssociateSourceGraphqlApiError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, default, Optional<LimitExceededException>.Some(value), default, default, default);

    private static AssociateSourceGraphqlApiError AsNotFoundException(NotFoundException value) =>
        new(default, default, default, default, Optional<NotFoundException>.Some(value), default, default);

    private static AssociateSourceGraphqlApiError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static AssociateSourceGraphqlApiError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value) =>
        _concurrentModificationExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<ConcurrentModificationException, TResult> onConcurrentModificationException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetConcurrentModificationException(
                out var concurrentModificationExceptionValue) => onConcurrentModificationException(
                concurrentModificationExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AssociateSourceGraphqlApiError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<ConcurrentModificationException> onConcurrentModificationException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<NotFoundException> onNotFoundException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetConcurrentModificationException(
            out var concurrentModificationExceptionValue)) onConcurrentModificationException(
            concurrentModificationExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AssociateSourceGraphqlApiError)} holds no value.");
    }

    private static Task<AssociateSourceGraphqlApiError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            409 => response.Json<ConcurrentModificationException>().As(AsConcurrentModificationException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AssociateSourceGraphqlApiError> Response { get; } = new(Create);
}
