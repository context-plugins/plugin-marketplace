using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class GetResolverError : ApiError
{
    private readonly Optional<ConcurrentModificationException> _concurrentModificationExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private GetResolverError(Optional<ConcurrentModificationException> concurrentModificationExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _concurrentModificationExceptionValue = concurrentModificationExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static GetResolverError AsConcurrentModificationException(ConcurrentModificationException value) =>
        new(Optional<ConcurrentModificationException>.Some(value), default, default, default);

    private static GetResolverError AsNotFoundException(NotFoundException value) =>
        new(default, Optional<NotFoundException>.Some(value), default, default);

    private static GetResolverError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, Optional<UnauthorizedException>.Some(value), default);

    private static GetResolverError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value) =>
        _concurrentModificationExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ConcurrentModificationException, TResult> onConcurrentModificationException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetConcurrentModificationException(
                out var concurrentModificationExceptionValue) => onConcurrentModificationException(
                concurrentModificationExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetResolverError)} holds no value.")
        };

    public void Match(Action<ConcurrentModificationException> onConcurrentModificationException,
        Action<NotFoundException> onNotFoundException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetConcurrentModificationException(
            out var concurrentModificationExceptionValue)) onConcurrentModificationException(
            concurrentModificationExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetResolverError)} holds no value.");
    }

    private static Task<GetResolverError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            409 => response.Json<ConcurrentModificationException>().As(AsConcurrentModificationException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetResolverError> Response { get; } = new(Create);
}
