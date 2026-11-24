using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core.ErrorResponse;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Errors;

public sealed class AddNotificationChannelError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private AddNotificationChannelError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<ConflictException> conflictExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _conflictExceptionValue = conflictExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static AddNotificationChannelError AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default, default, default, default);

    private static AddNotificationChannelError AsConflictException(ConflictException value) =>
        new(default, Optional<ConflictException>.Some(value), default, default, default, default, default, default);

    private static AddNotificationChannelError AsInternalServerException(InternalServerException value) =>
        new(
            default,
            default,
            Optional<InternalServerException>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AddNotificationChannelError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(
            default,
            default,
            default,
            Optional<ResourceNotFoundException>.Some(value),
            default,
            default,
            default,
            default);

    private static AddNotificationChannelError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ServiceQuotaExceededException>.Some(value),
            default,
            default,
            default);

    private static AddNotificationChannelError AsThrottlingException(ThrottlingException value) =>
        new(default, default, default, default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static AddNotificationChannelError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ValidationExceptionModel>.Some(value),
            default);

    private static AddNotificationChannelError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<ConflictException, TResult> onConflictException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AddNotificationChannelError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<ConflictException> onConflictException,
        Action<InternalServerException> onInternalServerException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AddNotificationChannelError)} holds no value.");
    }

    private static Task<AddNotificationChannelError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AddNotificationChannelError> Response { get; } = new(Create);
}
