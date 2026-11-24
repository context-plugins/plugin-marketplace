using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetStatesError : ApiError
{
    private readonly Optional<AuthenticationErrorCloroDevCountriesApi> _authenticationErrorCloroDevCountriesApiValue;

    private readonly Optional<InternalErrorCloroDevCountriesApi> _internalErrorCloroDevCountriesApiValue;

    private readonly Optional<RateLimitErrorCloroDevStatesApi> _rateLimitErrorCloroDevStatesApiValue;

    private readonly Optional<ValidationErrorCloroDevCountriesApi> _validationErrorCloroDevCountriesApiValue;

    private GetStatesError(Optional<AuthenticationErrorCloroDevCountriesApi> authenticationErrorCloroDevCountriesApiValue,
        Optional<InternalErrorCloroDevCountriesApi> internalErrorCloroDevCountriesApiValue,
        Optional<RateLimitErrorCloroDevStatesApi> rateLimitErrorCloroDevStatesApiValue,
        Optional<ValidationErrorCloroDevCountriesApi> validationErrorCloroDevCountriesApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorCloroDevCountriesApiValue = authenticationErrorCloroDevCountriesApiValue;
        _internalErrorCloroDevCountriesApiValue = internalErrorCloroDevCountriesApiValue;
        _rateLimitErrorCloroDevStatesApiValue = rateLimitErrorCloroDevStatesApiValue;
        _validationErrorCloroDevCountriesApiValue = validationErrorCloroDevCountriesApiValue;
    }

    private static GetStatesError AsAuthenticationErrorCloroDevCountriesApi(AuthenticationErrorCloroDevCountriesApi value) =>
        new(Optional<AuthenticationErrorCloroDevCountriesApi>.Some(value), default, default, default, default);

    private static GetStatesError AsInternalErrorCloroDevCountriesApi(InternalErrorCloroDevCountriesApi value) =>
        new(default, Optional<InternalErrorCloroDevCountriesApi>.Some(value), default, default, default);

    private static GetStatesError AsRateLimitErrorCloroDevStatesApi(RateLimitErrorCloroDevStatesApi value) =>
        new(default, default, Optional<RateLimitErrorCloroDevStatesApi>.Some(value), default, default);

    private static GetStatesError AsValidationErrorCloroDevCountriesApi(ValidationErrorCloroDevCountriesApi value) =>
        new(default, default, default, Optional<ValidationErrorCloroDevCountriesApi>.Some(value), default);

    private static GetStatesError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationErrorCloroDevCountriesApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCountriesApi? value) =>
        _authenticationErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetInternalErrorCloroDevCountriesApi([NotNullWhen(true)] out InternalErrorCloroDevCountriesApi? value) =>
        _internalErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetRateLimitErrorCloroDevStatesApi([NotNullWhen(true)] out RateLimitErrorCloroDevStatesApi? value) =>
        _rateLimitErrorCloroDevStatesApiValue.TryGetValue(out value);

    public bool TryGetValidationErrorCloroDevCountriesApi([NotNullWhen(true)] out ValidationErrorCloroDevCountriesApi? value) =>
        _validationErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationErrorCloroDevCountriesApi, TResult> onAuthenticationErrorCloroDevCountriesApi,
        Func<InternalErrorCloroDevCountriesApi, TResult> onInternalErrorCloroDevCountriesApi,
        Func<RateLimitErrorCloroDevStatesApi, TResult> onRateLimitErrorCloroDevStatesApi,
        Func<ValidationErrorCloroDevCountriesApi, TResult> onValidationErrorCloroDevCountriesApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationErrorCloroDevCountriesApi(
                out var authenticationErrorCloroDevCountriesApiValue) => onAuthenticationErrorCloroDevCountriesApi(
                authenticationErrorCloroDevCountriesApiValue),
            _ when TryGetInternalErrorCloroDevCountriesApi(
                out var internalErrorCloroDevCountriesApiValue) => onInternalErrorCloroDevCountriesApi(
                internalErrorCloroDevCountriesApiValue),
            _ when TryGetRateLimitErrorCloroDevStatesApi(
                out var rateLimitErrorCloroDevStatesApiValue) => onRateLimitErrorCloroDevStatesApi(
                rateLimitErrorCloroDevStatesApiValue),
            _ when TryGetValidationErrorCloroDevCountriesApi(
                out var validationErrorCloroDevCountriesApiValue) => onValidationErrorCloroDevCountriesApi(
                validationErrorCloroDevCountriesApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetStatesError)} holds no value.")
        };

    public void Match(Action<AuthenticationErrorCloroDevCountriesApi> onAuthenticationErrorCloroDevCountriesApi,
        Action<InternalErrorCloroDevCountriesApi> onInternalErrorCloroDevCountriesApi,
        Action<RateLimitErrorCloroDevStatesApi> onRateLimitErrorCloroDevStatesApi,
        Action<ValidationErrorCloroDevCountriesApi> onValidationErrorCloroDevCountriesApi,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationErrorCloroDevCountriesApi(
            out var authenticationErrorCloroDevCountriesApiValue)) onAuthenticationErrorCloroDevCountriesApi(
            authenticationErrorCloroDevCountriesApiValue);
        else if (TryGetInternalErrorCloroDevCountriesApi(
            out var internalErrorCloroDevCountriesApiValue)) onInternalErrorCloroDevCountriesApi(
            internalErrorCloroDevCountriesApiValue);
        else if (TryGetRateLimitErrorCloroDevStatesApi(
            out var rateLimitErrorCloroDevStatesApiValue)) onRateLimitErrorCloroDevStatesApi(
            rateLimitErrorCloroDevStatesApiValue);
        else if (TryGetValidationErrorCloroDevCountriesApi(
            out var validationErrorCloroDevCountriesApiValue)) onValidationErrorCloroDevCountriesApi(
            validationErrorCloroDevCountriesApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetStatesError)} holds no value.");
    }

    private static Task<GetStatesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationErrorCloroDevCountriesApi>().As(AsValidationErrorCloroDevCountriesApi),
            401 => response.Json<AuthenticationErrorCloroDevCountriesApi>().As(
                AsAuthenticationErrorCloroDevCountriesApi),
            429 => response.Json<RateLimitErrorCloroDevStatesApi>().As(AsRateLimitErrorCloroDevStatesApi),
            500 => response.Json<InternalErrorCloroDevCountriesApi>().As(AsInternalErrorCloroDevCountriesApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetStatesError> Response { get; } = new(Create);
}
