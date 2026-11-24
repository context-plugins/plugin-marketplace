using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonEbs.Core.ErrorResponse;
using AmazonEbs.Core.Models;
using AmazonEbs.Models;

namespace AmazonEbs.Errors;

public sealed class ListChangedBlocksError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<RequestThrottledException> _requestThrottledExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private ListChangedBlocksError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<RequestThrottledException> requestThrottledExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _requestThrottledExceptionValue = requestThrottledExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
    }

    private static ListChangedBlocksError AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default, default);

    private static ListChangedBlocksError AsInternalServerException(InternalServerException value) =>
        new(default, Optional<InternalServerException>.Some(value), default, default, default, default);

    private static ListChangedBlocksError AsRequestThrottledException(RequestThrottledException value) =>
        new(default, default, Optional<RequestThrottledException>.Some(value), default, default, default);

    private static ListChangedBlocksError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, default, default, Optional<ResourceNotFoundException>.Some(value), default, default);

    private static ListChangedBlocksError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(default, default, default, default, Optional<ServiceQuotaExceededException>.Some(value), default);

    private static ListChangedBlocksError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value) =>
        _requestThrottledExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<RequestThrottledException, TResult> onRequestThrottledException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetRequestThrottledException(
                out var requestThrottledExceptionValue) => onRequestThrottledException(requestThrottledExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListChangedBlocksError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<InternalServerException> onInternalServerException,
        Action<RequestThrottledException> onRequestThrottledException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetRequestThrottledException(out var requestThrottledExceptionValue)) onRequestThrottledException(
            requestThrottledExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListChangedBlocksError)} holds no value.");
    }

    private static Task<ListChangedBlocksError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<RequestThrottledException>().As(AsRequestThrottledException),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListChangedBlocksError> Response { get; } = new(Create);
}
