using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class UpdateGraphqlApi2Error : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConcurrentModificationException> _concurrentModificationExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private UpdateGraphqlApi2Error(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConcurrentModificationException> concurrentModificationExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _badRequestExceptionValue = badRequestExceptionValue;
        _concurrentModificationExceptionValue = concurrentModificationExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static UpdateGraphqlApi2Error AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default, default, default);

    private static UpdateGraphqlApi2Error AsBadRequestException(BadRequestException value) =>
        new(default, Optional<BadRequestException>.Some(value), default, default, default, default, default);

    private static UpdateGraphqlApi2Error AsConcurrentModificationException(ConcurrentModificationException value) =>
        new(
            default,
            default,
            Optional<ConcurrentModificationException>.Some(value),
            default,
            default,
            default,
            default);

    private static UpdateGraphqlApi2Error AsInternalFailureException(InternalFailureException value) =>
        new(default, default, default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static UpdateGraphqlApi2Error AsNotFoundException(NotFoundException value) =>
        new(default, default, default, default, Optional<NotFoundException>.Some(value), default, default);

    private static UpdateGraphqlApi2Error AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static UpdateGraphqlApi2Error AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value) =>
        _concurrentModificationExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<BadRequestException, TResult> onBadRequestException,
        Func<ConcurrentModificationException, TResult> onConcurrentModificationException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetConcurrentModificationException(
                out var concurrentModificationExceptionValue) => onConcurrentModificationException(
                concurrentModificationExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateGraphqlApi2Error)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<BadRequestException> onBadRequestException,
        Action<ConcurrentModificationException> onConcurrentModificationException,
        Action<InternalFailureException> onInternalFailureException,
        Action<NotFoundException> onNotFoundException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetConcurrentModificationException(
            out var concurrentModificationExceptionValue)) onConcurrentModificationException(
            concurrentModificationExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateGraphqlApi2Error)} holds no value.");
    }

    private static Task<UpdateGraphqlApi2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            409 => response.Json<ConcurrentModificationException>().As(AsConcurrentModificationException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateGraphqlApi2Error> Response { get; } = new(Create);
}
