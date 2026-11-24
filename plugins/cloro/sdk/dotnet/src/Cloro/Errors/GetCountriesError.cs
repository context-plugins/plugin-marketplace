using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetCountriesError : ApiError
{
    private readonly Optional<AuthenticationErrorCloroDevCountriesApi> _authenticationErrorCloroDevCountriesApiValue;

    private readonly Optional<InternalErrorCloroDevCountriesApi> _internalErrorCloroDevCountriesApiValue;

    private readonly Optional<NotFoundErrorCloroDevCountriesApi> _notFoundErrorCloroDevCountriesApiValue;

    private readonly Optional<RateLimitErrorCloroDevCountriesApi> _rateLimitErrorCloroDevCountriesApiValue;

    private readonly Optional<ValidationErrorCloroDevCountriesApi> _validationErrorCloroDevCountriesApiValue;

    private GetCountriesError(Optional<AuthenticationErrorCloroDevCountriesApi> authenticationErrorCloroDevCountriesApiValue,
        Optional<InternalErrorCloroDevCountriesApi> internalErrorCloroDevCountriesApiValue,
        Optional<NotFoundErrorCloroDevCountriesApi> notFoundErrorCloroDevCountriesApiValue,
        Optional<RateLimitErrorCloroDevCountriesApi> rateLimitErrorCloroDevCountriesApiValue,
        Optional<ValidationErrorCloroDevCountriesApi> validationErrorCloroDevCountriesApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorCloroDevCountriesApiValue = authenticationErrorCloroDevCountriesApiValue;
        _internalErrorCloroDevCountriesApiValue = internalErrorCloroDevCountriesApiValue;
        _notFoundErrorCloroDevCountriesApiValue = notFoundErrorCloroDevCountriesApiValue;
        _rateLimitErrorCloroDevCountriesApiValue = rateLimitErrorCloroDevCountriesApiValue;
        _validationErrorCloroDevCountriesApiValue = validationErrorCloroDevCountriesApiValue;
    }

    private static GetCountriesError AsAuthenticationErrorCloroDevCountriesApi(AuthenticationErrorCloroDevCountriesApi value) =>
        new(Optional<AuthenticationErrorCloroDevCountriesApi>.Some(value), default, default, default, default, default);

    private static GetCountriesError AsInternalErrorCloroDevCountriesApi(InternalErrorCloroDevCountriesApi value) =>
        new(default, Optional<InternalErrorCloroDevCountriesApi>.Some(value), default, default, default, default);

    private static GetCountriesError AsNotFoundErrorCloroDevCountriesApi(NotFoundErrorCloroDevCountriesApi value) =>
        new(default, default, Optional<NotFoundErrorCloroDevCountriesApi>.Some(value), default, default, default);

    private static GetCountriesError AsRateLimitErrorCloroDevCountriesApi(RateLimitErrorCloroDevCountriesApi value) =>
        new(default, default, default, Optional<RateLimitErrorCloroDevCountriesApi>.Some(value), default, default);

    private static GetCountriesError AsValidationErrorCloroDevCountriesApi(ValidationErrorCloroDevCountriesApi value) =>
        new(default, default, default, default, Optional<ValidationErrorCloroDevCountriesApi>.Some(value), default);

    private static GetCountriesError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationErrorCloroDevCountriesApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCountriesApi? value) =>
        _authenticationErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetInternalErrorCloroDevCountriesApi([NotNullWhen(true)] out InternalErrorCloroDevCountriesApi? value) =>
        _internalErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorCloroDevCountriesApi([NotNullWhen(true)] out NotFoundErrorCloroDevCountriesApi? value) =>
        _notFoundErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetRateLimitErrorCloroDevCountriesApi([NotNullWhen(true)] out RateLimitErrorCloroDevCountriesApi? value) =>
        _rateLimitErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public bool TryGetValidationErrorCloroDevCountriesApi([NotNullWhen(true)] out ValidationErrorCloroDevCountriesApi? value) =>
        _validationErrorCloroDevCountriesApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationErrorCloroDevCountriesApi, TResult> onAuthenticationErrorCloroDevCountriesApi,
        Func<InternalErrorCloroDevCountriesApi, TResult> onInternalErrorCloroDevCountriesApi,
        Func<NotFoundErrorCloroDevCountriesApi, TResult> onNotFoundErrorCloroDevCountriesApi,
        Func<RateLimitErrorCloroDevCountriesApi, TResult> onRateLimitErrorCloroDevCountriesApi,
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
            _ when TryGetNotFoundErrorCloroDevCountriesApi(
                out var notFoundErrorCloroDevCountriesApiValue) => onNotFoundErrorCloroDevCountriesApi(
                notFoundErrorCloroDevCountriesApiValue),
            _ when TryGetRateLimitErrorCloroDevCountriesApi(
                out var rateLimitErrorCloroDevCountriesApiValue) => onRateLimitErrorCloroDevCountriesApi(
                rateLimitErrorCloroDevCountriesApiValue),
            _ when TryGetValidationErrorCloroDevCountriesApi(
                out var validationErrorCloroDevCountriesApiValue) => onValidationErrorCloroDevCountriesApi(
                validationErrorCloroDevCountriesApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCountriesError)} holds no value.")
        };

    public void Match(Action<AuthenticationErrorCloroDevCountriesApi> onAuthenticationErrorCloroDevCountriesApi,
        Action<InternalErrorCloroDevCountriesApi> onInternalErrorCloroDevCountriesApi,
        Action<NotFoundErrorCloroDevCountriesApi> onNotFoundErrorCloroDevCountriesApi,
        Action<RateLimitErrorCloroDevCountriesApi> onRateLimitErrorCloroDevCountriesApi,
        Action<ValidationErrorCloroDevCountriesApi> onValidationErrorCloroDevCountriesApi,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationErrorCloroDevCountriesApi(
            out var authenticationErrorCloroDevCountriesApiValue)) onAuthenticationErrorCloroDevCountriesApi(
            authenticationErrorCloroDevCountriesApiValue);
        else if (TryGetInternalErrorCloroDevCountriesApi(
            out var internalErrorCloroDevCountriesApiValue)) onInternalErrorCloroDevCountriesApi(
            internalErrorCloroDevCountriesApiValue);
        else if (TryGetNotFoundErrorCloroDevCountriesApi(
            out var notFoundErrorCloroDevCountriesApiValue)) onNotFoundErrorCloroDevCountriesApi(
            notFoundErrorCloroDevCountriesApiValue);
        else if (TryGetRateLimitErrorCloroDevCountriesApi(
            out var rateLimitErrorCloroDevCountriesApiValue)) onRateLimitErrorCloroDevCountriesApi(
            rateLimitErrorCloroDevCountriesApiValue);
        else if (TryGetValidationErrorCloroDevCountriesApi(
            out var validationErrorCloroDevCountriesApiValue)) onValidationErrorCloroDevCountriesApi(
            validationErrorCloroDevCountriesApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCountriesError)} holds no value.");
    }

    private static Task<GetCountriesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationErrorCloroDevCountriesApi>().As(AsValidationErrorCloroDevCountriesApi),
            401 => response.Json<AuthenticationErrorCloroDevCountriesApi>().As(
                AsAuthenticationErrorCloroDevCountriesApi),
            404 => response.Json<NotFoundErrorCloroDevCountriesApi>().As(AsNotFoundErrorCloroDevCountriesApi),
            429 => response.Json<RateLimitErrorCloroDevCountriesApi>().As(AsRateLimitErrorCloroDevCountriesApi),
            500 => response.Json<InternalErrorCloroDevCountriesApi>().As(AsInternalErrorCloroDevCountriesApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCountriesError> Response { get; } = new(Create);
}
