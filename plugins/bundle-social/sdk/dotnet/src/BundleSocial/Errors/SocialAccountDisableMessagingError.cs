using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountDisableMessagingError : ApiError
{
    private readonly Optional<ApiV1SocialAccountMessagingDisable400Error1> _apiV1SocialAccountMessagingDisable400Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable401Error1> _apiV1SocialAccountMessagingDisable401Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable403Error1> _apiV1SocialAccountMessagingDisable403Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable404Error1> _apiV1SocialAccountMessagingDisable404Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable429Error1> _apiV1SocialAccountMessagingDisable429Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable500Error1> _apiV1SocialAccountMessagingDisable500Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable502Error1> _apiV1SocialAccountMessagingDisable502Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable503Error1> _apiV1SocialAccountMessagingDisable503Error1Value;

    private readonly Optional<ApiV1SocialAccountMessagingDisable504Error1> _apiV1SocialAccountMessagingDisable504Error1Value;

    private SocialAccountDisableMessagingError(Optional<ApiV1SocialAccountMessagingDisable400Error1> apiV1SocialAccountMessagingDisable400Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable401Error1> apiV1SocialAccountMessagingDisable401Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable403Error1> apiV1SocialAccountMessagingDisable403Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable404Error1> apiV1SocialAccountMessagingDisable404Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable429Error1> apiV1SocialAccountMessagingDisable429Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable500Error1> apiV1SocialAccountMessagingDisable500Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable502Error1> apiV1SocialAccountMessagingDisable502Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable503Error1> apiV1SocialAccountMessagingDisable503Error1Value,
        Optional<ApiV1SocialAccountMessagingDisable504Error1> apiV1SocialAccountMessagingDisable504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountMessagingDisable400Error1Value = apiV1SocialAccountMessagingDisable400Error1Value;
        _apiV1SocialAccountMessagingDisable401Error1Value = apiV1SocialAccountMessagingDisable401Error1Value;
        _apiV1SocialAccountMessagingDisable403Error1Value = apiV1SocialAccountMessagingDisable403Error1Value;
        _apiV1SocialAccountMessagingDisable404Error1Value = apiV1SocialAccountMessagingDisable404Error1Value;
        _apiV1SocialAccountMessagingDisable429Error1Value = apiV1SocialAccountMessagingDisable429Error1Value;
        _apiV1SocialAccountMessagingDisable500Error1Value = apiV1SocialAccountMessagingDisable500Error1Value;
        _apiV1SocialAccountMessagingDisable502Error1Value = apiV1SocialAccountMessagingDisable502Error1Value;
        _apiV1SocialAccountMessagingDisable503Error1Value = apiV1SocialAccountMessagingDisable503Error1Value;
        _apiV1SocialAccountMessagingDisable504Error1Value = apiV1SocialAccountMessagingDisable504Error1Value;
    }

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable400Error1(ApiV1SocialAccountMessagingDisable400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountMessagingDisable400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable401Error1(ApiV1SocialAccountMessagingDisable401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountMessagingDisable401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable403Error1(ApiV1SocialAccountMessagingDisable403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable404Error1(ApiV1SocialAccountMessagingDisable404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable429Error1(ApiV1SocialAccountMessagingDisable429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable500Error1(ApiV1SocialAccountMessagingDisable500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable502Error1(ApiV1SocialAccountMessagingDisable502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable503Error1(ApiV1SocialAccountMessagingDisable503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable503Error1>.Some(value),
            default,
            default);

    private static SocialAccountDisableMessagingError AsApiV1SocialAccountMessagingDisable504Error1(ApiV1SocialAccountMessagingDisable504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountMessagingDisable504Error1>.Some(value),
            default);

    private static SocialAccountDisableMessagingError AsFallback(RawError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RawError>.Some(value));

    public bool TryGetApiV1SocialAccountMessagingDisable400Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable400Error1? value) =>
        _apiV1SocialAccountMessagingDisable400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable401Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable401Error1? value) =>
        _apiV1SocialAccountMessagingDisable401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable403Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable403Error1? value) =>
        _apiV1SocialAccountMessagingDisable403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable404Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable404Error1? value) =>
        _apiV1SocialAccountMessagingDisable404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable429Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable429Error1? value) =>
        _apiV1SocialAccountMessagingDisable429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable500Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable500Error1? value) =>
        _apiV1SocialAccountMessagingDisable500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable502Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable502Error1? value) =>
        _apiV1SocialAccountMessagingDisable502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable503Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable503Error1? value) =>
        _apiV1SocialAccountMessagingDisable503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountMessagingDisable504Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable504Error1? value) =>
        _apiV1SocialAccountMessagingDisable504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountMessagingDisable400Error1, TResult> onApiV1SocialAccountMessagingDisable400Error1,
        Func<ApiV1SocialAccountMessagingDisable401Error1, TResult> onApiV1SocialAccountMessagingDisable401Error1,
        Func<ApiV1SocialAccountMessagingDisable403Error1, TResult> onApiV1SocialAccountMessagingDisable403Error1,
        Func<ApiV1SocialAccountMessagingDisable404Error1, TResult> onApiV1SocialAccountMessagingDisable404Error1,
        Func<ApiV1SocialAccountMessagingDisable429Error1, TResult> onApiV1SocialAccountMessagingDisable429Error1,
        Func<ApiV1SocialAccountMessagingDisable500Error1, TResult> onApiV1SocialAccountMessagingDisable500Error1,
        Func<ApiV1SocialAccountMessagingDisable502Error1, TResult> onApiV1SocialAccountMessagingDisable502Error1,
        Func<ApiV1SocialAccountMessagingDisable503Error1, TResult> onApiV1SocialAccountMessagingDisable503Error1,
        Func<ApiV1SocialAccountMessagingDisable504Error1, TResult> onApiV1SocialAccountMessagingDisable504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountMessagingDisable400Error1(
                out var apiV1SocialAccountMessagingDisable400Error1Value) => onApiV1SocialAccountMessagingDisable400Error1(
                apiV1SocialAccountMessagingDisable400Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable401Error1(
                out var apiV1SocialAccountMessagingDisable401Error1Value) => onApiV1SocialAccountMessagingDisable401Error1(
                apiV1SocialAccountMessagingDisable401Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable403Error1(
                out var apiV1SocialAccountMessagingDisable403Error1Value) => onApiV1SocialAccountMessagingDisable403Error1(
                apiV1SocialAccountMessagingDisable403Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable404Error1(
                out var apiV1SocialAccountMessagingDisable404Error1Value) => onApiV1SocialAccountMessagingDisable404Error1(
                apiV1SocialAccountMessagingDisable404Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable429Error1(
                out var apiV1SocialAccountMessagingDisable429Error1Value) => onApiV1SocialAccountMessagingDisable429Error1(
                apiV1SocialAccountMessagingDisable429Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable500Error1(
                out var apiV1SocialAccountMessagingDisable500Error1Value) => onApiV1SocialAccountMessagingDisable500Error1(
                apiV1SocialAccountMessagingDisable500Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable502Error1(
                out var apiV1SocialAccountMessagingDisable502Error1Value) => onApiV1SocialAccountMessagingDisable502Error1(
                apiV1SocialAccountMessagingDisable502Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable503Error1(
                out var apiV1SocialAccountMessagingDisable503Error1Value) => onApiV1SocialAccountMessagingDisable503Error1(
                apiV1SocialAccountMessagingDisable503Error1Value),
            _ when TryGetApiV1SocialAccountMessagingDisable504Error1(
                out var apiV1SocialAccountMessagingDisable504Error1Value) => onApiV1SocialAccountMessagingDisable504Error1(
                apiV1SocialAccountMessagingDisable504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountDisableMessagingError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountMessagingDisable400Error1> onApiV1SocialAccountMessagingDisable400Error1,
        Action<ApiV1SocialAccountMessagingDisable401Error1> onApiV1SocialAccountMessagingDisable401Error1,
        Action<ApiV1SocialAccountMessagingDisable403Error1> onApiV1SocialAccountMessagingDisable403Error1,
        Action<ApiV1SocialAccountMessagingDisable404Error1> onApiV1SocialAccountMessagingDisable404Error1,
        Action<ApiV1SocialAccountMessagingDisable429Error1> onApiV1SocialAccountMessagingDisable429Error1,
        Action<ApiV1SocialAccountMessagingDisable500Error1> onApiV1SocialAccountMessagingDisable500Error1,
        Action<ApiV1SocialAccountMessagingDisable502Error1> onApiV1SocialAccountMessagingDisable502Error1,
        Action<ApiV1SocialAccountMessagingDisable503Error1> onApiV1SocialAccountMessagingDisable503Error1,
        Action<ApiV1SocialAccountMessagingDisable504Error1> onApiV1SocialAccountMessagingDisable504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountMessagingDisable400Error1(
            out var apiV1SocialAccountMessagingDisable400Error1Value)) onApiV1SocialAccountMessagingDisable400Error1(
            apiV1SocialAccountMessagingDisable400Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable401Error1(
            out var apiV1SocialAccountMessagingDisable401Error1Value)) onApiV1SocialAccountMessagingDisable401Error1(
            apiV1SocialAccountMessagingDisable401Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable403Error1(
            out var apiV1SocialAccountMessagingDisable403Error1Value)) onApiV1SocialAccountMessagingDisable403Error1(
            apiV1SocialAccountMessagingDisable403Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable404Error1(
            out var apiV1SocialAccountMessagingDisable404Error1Value)) onApiV1SocialAccountMessagingDisable404Error1(
            apiV1SocialAccountMessagingDisable404Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable429Error1(
            out var apiV1SocialAccountMessagingDisable429Error1Value)) onApiV1SocialAccountMessagingDisable429Error1(
            apiV1SocialAccountMessagingDisable429Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable500Error1(
            out var apiV1SocialAccountMessagingDisable500Error1Value)) onApiV1SocialAccountMessagingDisable500Error1(
            apiV1SocialAccountMessagingDisable500Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable502Error1(
            out var apiV1SocialAccountMessagingDisable502Error1Value)) onApiV1SocialAccountMessagingDisable502Error1(
            apiV1SocialAccountMessagingDisable502Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable503Error1(
            out var apiV1SocialAccountMessagingDisable503Error1Value)) onApiV1SocialAccountMessagingDisable503Error1(
            apiV1SocialAccountMessagingDisable503Error1Value);
        else if (TryGetApiV1SocialAccountMessagingDisable504Error1(
            out var apiV1SocialAccountMessagingDisable504Error1Value)) onApiV1SocialAccountMessagingDisable504Error1(
            apiV1SocialAccountMessagingDisable504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountDisableMessagingError)} holds no value.");
    }

    private static Task<SocialAccountDisableMessagingError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountMessagingDisable400Error1>().As(
                AsApiV1SocialAccountMessagingDisable400Error1),
            401 => response.Json<ApiV1SocialAccountMessagingDisable401Error1>().As(
                AsApiV1SocialAccountMessagingDisable401Error1),
            403 => response.Json<ApiV1SocialAccountMessagingDisable403Error1>().As(
                AsApiV1SocialAccountMessagingDisable403Error1),
            404 => response.Json<ApiV1SocialAccountMessagingDisable404Error1>().As(
                AsApiV1SocialAccountMessagingDisable404Error1),
            429 => response.Json<ApiV1SocialAccountMessagingDisable429Error1>().As(
                AsApiV1SocialAccountMessagingDisable429Error1),
            500 => response.Json<ApiV1SocialAccountMessagingDisable500Error1>().As(
                AsApiV1SocialAccountMessagingDisable500Error1),
            502 => response.Json<ApiV1SocialAccountMessagingDisable502Error1>().As(
                AsApiV1SocialAccountMessagingDisable502Error1),
            503 => response.Json<ApiV1SocialAccountMessagingDisable503Error1>().As(
                AsApiV1SocialAccountMessagingDisable503Error1),
            504 => response.Json<ApiV1SocialAccountMessagingDisable504Error1>().As(
                AsApiV1SocialAccountMessagingDisable504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountDisableMessagingError> Response { get; } = new(Create);
}
