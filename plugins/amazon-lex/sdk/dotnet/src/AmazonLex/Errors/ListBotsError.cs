using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class ListBotsError : ApiError
{
    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ServiceQuotaExceededException> _serviceQuotaExceededExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private ListBotsError(Optional<InternalServerException> internalServerExceptionValue,
        Optional<ServiceQuotaExceededException> serviceQuotaExceededExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerExceptionValue = internalServerExceptionValue;
        _serviceQuotaExceededExceptionValue = serviceQuotaExceededExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static ListBotsError AsInternalServerException(InternalServerException value) =>
        new(Optional<InternalServerException>.Some(value), default, default, default, default);

    private static ListBotsError AsServiceQuotaExceededException(ServiceQuotaExceededException value) =>
        new(default, Optional<ServiceQuotaExceededException>.Some(value), default, default, default);

    private static ListBotsError AsThrottlingException(ThrottlingException value) =>
        new(default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static ListBotsError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static ListBotsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value) =>
        _serviceQuotaExceededExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerException, TResult> onInternalServerException,
        Func<ServiceQuotaExceededException, TResult> onServiceQuotaExceededException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetServiceQuotaExceededException(
                out var serviceQuotaExceededExceptionValue) => onServiceQuotaExceededException(
                serviceQuotaExceededExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListBotsError)} holds no value.")
        };

    public void Match(Action<InternalServerException> onInternalServerException,
        Action<ServiceQuotaExceededException> onServiceQuotaExceededException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetServiceQuotaExceededException(
            out var serviceQuotaExceededExceptionValue)) onServiceQuotaExceededException(
            serviceQuotaExceededExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListBotsError)} holds no value.");
    }

    private static Task<ListBotsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            402 => response.Json<ServiceQuotaExceededException>().As(AsServiceQuotaExceededException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListBotsError> Response { get; } = new(Create);
}
