using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetGoogleProductError : ApiError
{
    private readonly Optional<AuthenticationErrorCloroDevMonitorApi> _authenticationErrorCloroDevMonitorApiValue;

    private readonly Optional<CanceledError> _canceledErrorValue;

    private readonly Optional<ConcurrentLimitError> _concurrentLimitErrorValue;

    private readonly Optional<ExternalServiceError> _externalServiceErrorValue;

    private readonly Optional<ForbiddenErrorCloroDevMonitorApi> _forbiddenErrorCloroDevMonitorApiValue;

    private readonly Optional<InternalError> _internalErrorValue;

    private readonly Optional<NotFoundError> _notFoundErrorValue;

    private readonly Optional<ValidationErrorCloroDevMonitorApi> _validationErrorCloroDevMonitorApiValue;

    private GetGoogleProductError(Optional<AuthenticationErrorCloroDevMonitorApi> authenticationErrorCloroDevMonitorApiValue,
        Optional<CanceledError> canceledErrorValue,
        Optional<ConcurrentLimitError> concurrentLimitErrorValue,
        Optional<ExternalServiceError> externalServiceErrorValue,
        Optional<ForbiddenErrorCloroDevMonitorApi> forbiddenErrorCloroDevMonitorApiValue,
        Optional<InternalError> internalErrorValue,
        Optional<NotFoundError> notFoundErrorValue,
        Optional<ValidationErrorCloroDevMonitorApi> validationErrorCloroDevMonitorApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorCloroDevMonitorApiValue = authenticationErrorCloroDevMonitorApiValue;
        _canceledErrorValue = canceledErrorValue;
        _concurrentLimitErrorValue = concurrentLimitErrorValue;
        _externalServiceErrorValue = externalServiceErrorValue;
        _forbiddenErrorCloroDevMonitorApiValue = forbiddenErrorCloroDevMonitorApiValue;
        _internalErrorValue = internalErrorValue;
        _notFoundErrorValue = notFoundErrorValue;
        _validationErrorCloroDevMonitorApiValue = validationErrorCloroDevMonitorApiValue;
    }

    private static GetGoogleProductError AsAuthenticationErrorCloroDevMonitorApi(AuthenticationErrorCloroDevMonitorApi value) =>
        new(
            Optional<AuthenticationErrorCloroDevMonitorApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetGoogleProductError AsCanceledError(CanceledError value) =>
        new(
            default,
            Optional<CanceledError>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetGoogleProductError AsConcurrentLimitError(ConcurrentLimitError value) =>
        new(
            default,
            default,
            Optional<ConcurrentLimitError>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetGoogleProductError AsExternalServiceError(ExternalServiceError value) =>
        new(
            default,
            default,
            default,
            Optional<ExternalServiceError>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static GetGoogleProductError AsForbiddenErrorCloroDevMonitorApi(ForbiddenErrorCloroDevMonitorApi value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ForbiddenErrorCloroDevMonitorApi>.Some(value),
            default,
            default,
            default,
            default);

    private static GetGoogleProductError AsInternalError(InternalError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<InternalError>.Some(value),
            default,
            default,
            default);

    private static GetGoogleProductError AsNotFoundError(NotFoundError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<NotFoundError>.Some(value),
            default,
            default);

    private static GetGoogleProductError AsValidationErrorCloroDevMonitorApi(ValidationErrorCloroDevMonitorApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ValidationErrorCloroDevMonitorApi>.Some(value),
            default);

    private static GetGoogleProductError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value) =>
        _authenticationErrorCloroDevMonitorApiValue.TryGetValue(out value);

    public bool TryGetCanceledError([NotNullWhen(true)] out CanceledError? value) =>
        _canceledErrorValue.TryGetValue(out value);

    public bool TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value) =>
        _concurrentLimitErrorValue.TryGetValue(out value);

    public bool TryGetExternalServiceError([NotNullWhen(true)] out ExternalServiceError? value) =>
        _externalServiceErrorValue.TryGetValue(out value);

    public bool TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value) =>
        _forbiddenErrorCloroDevMonitorApiValue.TryGetValue(out value);

    public bool TryGetInternalError([NotNullWhen(true)] out InternalError? value) =>
        _internalErrorValue.TryGetValue(out value);

    public bool TryGetNotFoundError([NotNullWhen(true)] out NotFoundError? value) =>
        _notFoundErrorValue.TryGetValue(out value);

    public bool TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value) =>
        _validationErrorCloroDevMonitorApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationErrorCloroDevMonitorApi, TResult> onAuthenticationErrorCloroDevMonitorApi,
        Func<CanceledError, TResult> onCanceledError,
        Func<ConcurrentLimitError, TResult> onConcurrentLimitError,
        Func<ExternalServiceError, TResult> onExternalServiceError,
        Func<ForbiddenErrorCloroDevMonitorApi, TResult> onForbiddenErrorCloroDevMonitorApi,
        Func<InternalError, TResult> onInternalError,
        Func<NotFoundError, TResult> onNotFoundError,
        Func<ValidationErrorCloroDevMonitorApi, TResult> onValidationErrorCloroDevMonitorApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationErrorCloroDevMonitorApi(
                out var authenticationErrorCloroDevMonitorApiValue) => onAuthenticationErrorCloroDevMonitorApi(
                authenticationErrorCloroDevMonitorApiValue),
            _ when TryGetCanceledError(out var canceledErrorValue) => onCanceledError(canceledErrorValue),
            _ when TryGetConcurrentLimitError(out var concurrentLimitErrorValue) => onConcurrentLimitError(
                concurrentLimitErrorValue),
            _ when TryGetExternalServiceError(out var externalServiceErrorValue) => onExternalServiceError(
                externalServiceErrorValue),
            _ when TryGetForbiddenErrorCloroDevMonitorApi(
                out var forbiddenErrorCloroDevMonitorApiValue) => onForbiddenErrorCloroDevMonitorApi(
                forbiddenErrorCloroDevMonitorApiValue),
            _ when TryGetInternalError(out var internalErrorValue) => onInternalError(internalErrorValue),
            _ when TryGetNotFoundError(out var notFoundErrorValue) => onNotFoundError(notFoundErrorValue),
            _ when TryGetValidationErrorCloroDevMonitorApi(
                out var validationErrorCloroDevMonitorApiValue) => onValidationErrorCloroDevMonitorApi(
                validationErrorCloroDevMonitorApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetGoogleProductError)} holds no value.")
        };

    public void Match(Action<AuthenticationErrorCloroDevMonitorApi> onAuthenticationErrorCloroDevMonitorApi,
        Action<CanceledError> onCanceledError,
        Action<ConcurrentLimitError> onConcurrentLimitError,
        Action<ExternalServiceError> onExternalServiceError,
        Action<ForbiddenErrorCloroDevMonitorApi> onForbiddenErrorCloroDevMonitorApi,
        Action<InternalError> onInternalError,
        Action<NotFoundError> onNotFoundError,
        Action<ValidationErrorCloroDevMonitorApi> onValidationErrorCloroDevMonitorApi,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationErrorCloroDevMonitorApi(
            out var authenticationErrorCloroDevMonitorApiValue)) onAuthenticationErrorCloroDevMonitorApi(
            authenticationErrorCloroDevMonitorApiValue);
        else if (TryGetCanceledError(out var canceledErrorValue)) onCanceledError(canceledErrorValue);
        else if (TryGetConcurrentLimitError(out var concurrentLimitErrorValue)) onConcurrentLimitError(
            concurrentLimitErrorValue);
        else if (TryGetExternalServiceError(out var externalServiceErrorValue)) onExternalServiceError(
            externalServiceErrorValue);
        else if (TryGetForbiddenErrorCloroDevMonitorApi(
            out var forbiddenErrorCloroDevMonitorApiValue)) onForbiddenErrorCloroDevMonitorApi(
            forbiddenErrorCloroDevMonitorApiValue);
        else if (TryGetInternalError(out var internalErrorValue)) onInternalError(internalErrorValue);
        else if (TryGetNotFoundError(out var notFoundErrorValue)) onNotFoundError(notFoundErrorValue);
        else if (TryGetValidationErrorCloroDevMonitorApi(
            out var validationErrorCloroDevMonitorApiValue)) onValidationErrorCloroDevMonitorApi(
            validationErrorCloroDevMonitorApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetGoogleProductError)} holds no value.");
    }

    private static Task<GetGoogleProductError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationErrorCloroDevMonitorApi>().As(AsValidationErrorCloroDevMonitorApi),
            401 => response.Json<AuthenticationErrorCloroDevMonitorApi>().As(AsAuthenticationErrorCloroDevMonitorApi),
            403 => response.Json<ForbiddenErrorCloroDevMonitorApi>().As(AsForbiddenErrorCloroDevMonitorApi),
            404 or 410 => response.Json<NotFoundError>().As(AsNotFoundError),
            429 => response.Json<ConcurrentLimitError>().As(AsConcurrentLimitError),
            499 => response.Json<CanceledError>().As(AsCanceledError),
            500 => response.Json<InternalError>().As(AsInternalError),
            502 => response.Json<ExternalServiceError>().As(AsExternalServiceError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetGoogleProductError> Response { get; } = new(Create);
}
