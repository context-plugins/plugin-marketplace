using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetCreditsError : ApiError
{
    private readonly Optional<AuthenticationErrorCloroDevCreditsApi> _authenticationErrorCloroDevCreditsApiValue;

    private readonly Optional<InternalErrorCloroDevCreditsApi> _internalErrorCloroDevCreditsApiValue;

    private readonly Optional<RateLimitErrorCloroDevCreditsApi> _rateLimitErrorCloroDevCreditsApiValue;

    private GetCreditsError(Optional<AuthenticationErrorCloroDevCreditsApi> authenticationErrorCloroDevCreditsApiValue,
        Optional<InternalErrorCloroDevCreditsApi> internalErrorCloroDevCreditsApiValue,
        Optional<RateLimitErrorCloroDevCreditsApi> rateLimitErrorCloroDevCreditsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorCloroDevCreditsApiValue = authenticationErrorCloroDevCreditsApiValue;
        _internalErrorCloroDevCreditsApiValue = internalErrorCloroDevCreditsApiValue;
        _rateLimitErrorCloroDevCreditsApiValue = rateLimitErrorCloroDevCreditsApiValue;
    }

    private static GetCreditsError AsAuthenticationErrorCloroDevCreditsApi(AuthenticationErrorCloroDevCreditsApi value) =>
        new(Optional<AuthenticationErrorCloroDevCreditsApi>.Some(value), default, default, default);

    private static GetCreditsError AsInternalErrorCloroDevCreditsApi(InternalErrorCloroDevCreditsApi value) =>
        new(default, Optional<InternalErrorCloroDevCreditsApi>.Some(value), default, default);

    private static GetCreditsError AsRateLimitErrorCloroDevCreditsApi(RateLimitErrorCloroDevCreditsApi value) =>
        new(default, default, Optional<RateLimitErrorCloroDevCreditsApi>.Some(value), default);

    private static GetCreditsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationErrorCloroDevCreditsApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCreditsApi? value) =>
        _authenticationErrorCloroDevCreditsApiValue.TryGetValue(out value);

    public bool TryGetInternalErrorCloroDevCreditsApi([NotNullWhen(true)] out InternalErrorCloroDevCreditsApi? value) =>
        _internalErrorCloroDevCreditsApiValue.TryGetValue(out value);

    public bool TryGetRateLimitErrorCloroDevCreditsApi([NotNullWhen(true)] out RateLimitErrorCloroDevCreditsApi? value) =>
        _rateLimitErrorCloroDevCreditsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationErrorCloroDevCreditsApi, TResult> onAuthenticationErrorCloroDevCreditsApi,
        Func<InternalErrorCloroDevCreditsApi, TResult> onInternalErrorCloroDevCreditsApi,
        Func<RateLimitErrorCloroDevCreditsApi, TResult> onRateLimitErrorCloroDevCreditsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationErrorCloroDevCreditsApi(
                out var authenticationErrorCloroDevCreditsApiValue) => onAuthenticationErrorCloroDevCreditsApi(
                authenticationErrorCloroDevCreditsApiValue),
            _ when TryGetInternalErrorCloroDevCreditsApi(
                out var internalErrorCloroDevCreditsApiValue) => onInternalErrorCloroDevCreditsApi(
                internalErrorCloroDevCreditsApiValue),
            _ when TryGetRateLimitErrorCloroDevCreditsApi(
                out var rateLimitErrorCloroDevCreditsApiValue) => onRateLimitErrorCloroDevCreditsApi(
                rateLimitErrorCloroDevCreditsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCreditsError)} holds no value.")
        };

    public void Match(Action<AuthenticationErrorCloroDevCreditsApi> onAuthenticationErrorCloroDevCreditsApi,
        Action<InternalErrorCloroDevCreditsApi> onInternalErrorCloroDevCreditsApi,
        Action<RateLimitErrorCloroDevCreditsApi> onRateLimitErrorCloroDevCreditsApi,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationErrorCloroDevCreditsApi(
            out var authenticationErrorCloroDevCreditsApiValue)) onAuthenticationErrorCloroDevCreditsApi(
            authenticationErrorCloroDevCreditsApiValue);
        else if (TryGetInternalErrorCloroDevCreditsApi(
            out var internalErrorCloroDevCreditsApiValue)) onInternalErrorCloroDevCreditsApi(
            internalErrorCloroDevCreditsApiValue);
        else if (TryGetRateLimitErrorCloroDevCreditsApi(
            out var rateLimitErrorCloroDevCreditsApiValue)) onRateLimitErrorCloroDevCreditsApi(
            rateLimitErrorCloroDevCreditsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCreditsError)} holds no value.");
    }

    private static Task<GetCreditsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<AuthenticationErrorCloroDevCreditsApi>().As(AsAuthenticationErrorCloroDevCreditsApi),
            429 => response.Json<RateLimitErrorCloroDevCreditsApi>().As(AsRateLimitErrorCloroDevCreditsApi),
            500 => response.Json<InternalErrorCloroDevCreditsApi>().As(AsInternalErrorCloroDevCreditsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCreditsError> Response { get; } = new(Create);
}
