using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class CreateApiError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConcurrentModificationException> _concurrentModificationExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private CreateApiError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConcurrentModificationException> concurrentModificationExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _concurrentModificationExceptionValue = concurrentModificationExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static CreateApiError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default, default);

    private static CreateApiError AsConcurrentModificationException(ConcurrentModificationException value) =>
        new(default, Optional<ConcurrentModificationException>.Some(value), default, default, default, default);

    private static CreateApiError AsInternalFailureException(InternalFailureException value) =>
        new(default, default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static CreateApiError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(default, default, default, Optional<ServiceQuotaExceededException>.Some(value), default, default);

    private static CreateApiError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static CreateApiError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value) =>
        _concurrentModificationExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<ConcurrentModificationException, TResult> onConcurrentModificationException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
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
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateApiError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<ConcurrentModificationException> onConcurrentModificationException,
        Action<InternalFailureException> onInternalFailureException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
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
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateApiError)} holds no value.");
    }

    private static Task<CreateApiError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            409 => response.Json<ConcurrentModificationException>().As(AsConcurrentModificationException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateApiError> Response { get; } = new(Create);
}
