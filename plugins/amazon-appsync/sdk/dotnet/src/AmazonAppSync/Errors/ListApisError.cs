using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class ListApisError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private ListApisError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static ListApisError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default);

    private static ListApisError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default);

    private static ListApisError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, Optional<UnauthorizedException>.Some(value), default);

    private static ListApisError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListApisError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<InternalFailureException> onInternalFailureException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListApisError)} holds no value.");
    }

    private static Task<ListApisError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListApisError> Response { get; } = new(Create);
}
