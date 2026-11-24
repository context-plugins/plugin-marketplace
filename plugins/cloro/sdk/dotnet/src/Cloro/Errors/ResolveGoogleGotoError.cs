using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class ResolveGoogleGotoError : ApiError
{
    private readonly Optional<AuthenticationErrorCloroDevMonitorApi> _authenticationErrorCloroDevMonitorApiValue;

    private readonly Optional<ExternalServiceError> _externalServiceErrorValue;

    private readonly Optional<InternalError> _internalErrorValue;

    private readonly Optional<RateLimitError> _rateLimitErrorValue;

    private readonly Optional<ValidationErrorCloroDevMonitorApi> _validationErrorCloroDevMonitorApiValue;

    private ResolveGoogleGotoError(Optional<AuthenticationErrorCloroDevMonitorApi> authenticationErrorCloroDevMonitorApiValue,
        Optional<ExternalServiceError> externalServiceErrorValue,
        Optional<InternalError> internalErrorValue,
        Optional<RateLimitError> rateLimitErrorValue,
        Optional<ValidationErrorCloroDevMonitorApi> validationErrorCloroDevMonitorApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorCloroDevMonitorApiValue = authenticationErrorCloroDevMonitorApiValue;
        _externalServiceErrorValue = externalServiceErrorValue;
        _internalErrorValue = internalErrorValue;
        _rateLimitErrorValue = rateLimitErrorValue;
        _validationErrorCloroDevMonitorApiValue = validationErrorCloroDevMonitorApiValue;
    }

    private static ResolveGoogleGotoError AsAuthenticationErrorCloroDevMonitorApi(AuthenticationErrorCloroDevMonitorApi value) =>
        new(Optional<AuthenticationErrorCloroDevMonitorApi>.Some(value), default, default, default, default, default);

    private static ResolveGoogleGotoError AsExternalServiceError(ExternalServiceError value) =>
        new(default, Optional<ExternalServiceError>.Some(value), default, default, default, default);

    private static ResolveGoogleGotoError AsInternalError(InternalError value) =>
        new(default, default, Optional<InternalError>.Some(value), default, default, default);

    private static ResolveGoogleGotoError AsRateLimitError(RateLimitError value) =>
        new(default, default, default, Optional<RateLimitError>.Some(value), default, default);

    private static ResolveGoogleGotoError AsValidationErrorCloroDevMonitorApi(ValidationErrorCloroDevMonitorApi value) =>
        new(default, default, default, default, Optional<ValidationErrorCloroDevMonitorApi>.Some(value), default);

    private static ResolveGoogleGotoError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value) =>
        _authenticationErrorCloroDevMonitorApiValue.TryGetValue(out value);

    public bool TryGetExternalServiceError([NotNullWhen(true)] out ExternalServiceError? value) =>
        _externalServiceErrorValue.TryGetValue(out value);

    public bool TryGetInternalError([NotNullWhen(true)] out InternalError? value) =>
        _internalErrorValue.TryGetValue(out value);

    public bool TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value) =>
        _rateLimitErrorValue.TryGetValue(out value);

    public bool TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value) =>
        _validationErrorCloroDevMonitorApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationErrorCloroDevMonitorApi, TResult> onAuthenticationErrorCloroDevMonitorApi,
        Func<ExternalServiceError, TResult> onExternalServiceError,
        Func<InternalError, TResult> onInternalError,
        Func<RateLimitError, TResult> onRateLimitError,
        Func<ValidationErrorCloroDevMonitorApi, TResult> onValidationErrorCloroDevMonitorApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationErrorCloroDevMonitorApi(
                out var authenticationErrorCloroDevMonitorApiValue) => onAuthenticationErrorCloroDevMonitorApi(
                authenticationErrorCloroDevMonitorApiValue),
            _ when TryGetExternalServiceError(out var externalServiceErrorValue) => onExternalServiceError(
                externalServiceErrorValue),
            _ when TryGetInternalError(out var internalErrorValue) => onInternalError(internalErrorValue),
            _ when TryGetRateLimitError(out var rateLimitErrorValue) => onRateLimitError(rateLimitErrorValue),
            _ when TryGetValidationErrorCloroDevMonitorApi(
                out var validationErrorCloroDevMonitorApiValue) => onValidationErrorCloroDevMonitorApi(
                validationErrorCloroDevMonitorApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ResolveGoogleGotoError)} holds no value.")
        };

    public void Match(Action<AuthenticationErrorCloroDevMonitorApi> onAuthenticationErrorCloroDevMonitorApi,
        Action<ExternalServiceError> onExternalServiceError,
        Action<InternalError> onInternalError,
        Action<RateLimitError> onRateLimitError,
        Action<ValidationErrorCloroDevMonitorApi> onValidationErrorCloroDevMonitorApi,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationErrorCloroDevMonitorApi(
            out var authenticationErrorCloroDevMonitorApiValue)) onAuthenticationErrorCloroDevMonitorApi(
            authenticationErrorCloroDevMonitorApiValue);
        else if (TryGetExternalServiceError(out var externalServiceErrorValue)) onExternalServiceError(
            externalServiceErrorValue);
        else if (TryGetInternalError(out var internalErrorValue)) onInternalError(internalErrorValue);
        else if (TryGetRateLimitError(out var rateLimitErrorValue)) onRateLimitError(rateLimitErrorValue);
        else if (TryGetValidationErrorCloroDevMonitorApi(
            out var validationErrorCloroDevMonitorApiValue)) onValidationErrorCloroDevMonitorApi(
            validationErrorCloroDevMonitorApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ResolveGoogleGotoError)} holds no value.");
    }

    private static Task<ResolveGoogleGotoError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationErrorCloroDevMonitorApi>().As(AsValidationErrorCloroDevMonitorApi),
            401 => response.Json<AuthenticationErrorCloroDevMonitorApi>().As(AsAuthenticationErrorCloroDevMonitorApi),
            429 => response.Json<RateLimitError>().As(AsRateLimitError),
            500 => response.Json<InternalError>().As(AsInternalError),
            502 => response.Json<ExternalServiceError>().As(AsExternalServiceError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ResolveGoogleGotoError> Response { get; } = new(Create);
}
