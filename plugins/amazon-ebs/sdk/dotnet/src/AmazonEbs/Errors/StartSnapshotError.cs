using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonEbs.Core.ErrorResponse;
using AmazonEbs.Core.Models;
using AmazonEbs.Models;

namespace AmazonEbs.Errors;

public sealed class StartSnapshotError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<ConcurrentLimitExceededException> _concurrentLimitExceededExceptionValue;

    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private StartSnapshotError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<ConcurrentLimitExceededException> concurrentLimitExceededExceptionValue,
        Optional<ConflictException> conflictExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _concurrentLimitExceededExceptionValue = concurrentLimitExceededExceptionValue;
        _conflictExceptionValue = conflictExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
    }

    private static StartSnapshotError AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default, default, default);

    private static StartSnapshotError AsConcurrentLimitExceededException(ConcurrentLimitExceededException value) =>
        new(
            default,
            Optional<ConcurrentLimitExceededException>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static StartSnapshotError AsConflictException(ConflictException value) =>
        new(default, default, Optional<ConflictException>.Some(value), default, default, default, default);

    private static StartSnapshotError AsInternalServerException(InternalServerException value) =>
        new(default, default, default, Optional<InternalServerException>.Some(value), default, default, default);

    private static StartSnapshotError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, default, default, default, Optional<ResourceNotFoundException>.Some(value), default, default);

    private static StartSnapshotError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(default, default, default, default, default, Optional<ServiceQuotaExceededException>.Some(value), default);

    private static StartSnapshotError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetConcurrentLimitExceededException([NotNullWhen(true)] out ConcurrentLimitExceededException? value) =>
        _concurrentLimitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<ConcurrentLimitExceededException, TResult> onConcurrentLimitExceededException,
        Func<ConflictException, TResult> onConflictException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetConcurrentLimitExceededException(
                out var concurrentLimitExceededExceptionValue) => onConcurrentLimitExceededException(
                concurrentLimitExceededExceptionValue),
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(StartSnapshotError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<ConcurrentLimitExceededException> onConcurrentLimitExceededException,
        Action<ConflictException> onConflictException,
        Action<InternalServerException> onInternalServerException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetConcurrentLimitExceededException(
            out var concurrentLimitExceededExceptionValue)) onConcurrentLimitExceededException(
            concurrentLimitExceededExceptionValue);
        else if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StartSnapshotError)} holds no value.");
    }

    private static Task<StartSnapshotError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ConcurrentLimitExceededException>().As(AsConcurrentLimitExceededException),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StartSnapshotError> Response { get; } = new(Create);
}
