using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core.ErrorResponse;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Errors;

public sealed class SearchInsightsError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private SearchInsightsError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static SearchInsightsError AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default);

    private static SearchInsightsError AsInternalServerException(InternalServerException value) =>
        new(default, Optional<InternalServerException>.Some(value), default, default, default);

    private static SearchInsightsError AsThrottlingException(ThrottlingException value) =>
        new(default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static SearchInsightsError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static SearchInsightsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchInsightsError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<InternalServerException> onInternalServerException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchInsightsError)} holds no value.");
    }

    private static Task<SearchInsightsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchInsightsError> Response { get; } = new(Create);
}
