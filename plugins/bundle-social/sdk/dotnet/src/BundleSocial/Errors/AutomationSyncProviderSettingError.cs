using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationSyncProviderSettingError : ApiError
{
    private readonly Optional<ApiV1AutomationProviderSettingsSync400Error1> _apiV1AutomationProviderSettingsSync400Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync401Error1> _apiV1AutomationProviderSettingsSync401Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync403Error1> _apiV1AutomationProviderSettingsSync403Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync404Error1> _apiV1AutomationProviderSettingsSync404Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync429Error1> _apiV1AutomationProviderSettingsSync429Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync500Error1> _apiV1AutomationProviderSettingsSync500Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync502Error1> _apiV1AutomationProviderSettingsSync502Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync503Error1> _apiV1AutomationProviderSettingsSync503Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettingsSync504Error1> _apiV1AutomationProviderSettingsSync504Error1Value;

    private AutomationSyncProviderSettingError(Optional<ApiV1AutomationProviderSettingsSync400Error1> apiV1AutomationProviderSettingsSync400Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync401Error1> apiV1AutomationProviderSettingsSync401Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync403Error1> apiV1AutomationProviderSettingsSync403Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync404Error1> apiV1AutomationProviderSettingsSync404Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync429Error1> apiV1AutomationProviderSettingsSync429Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync500Error1> apiV1AutomationProviderSettingsSync500Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync502Error1> apiV1AutomationProviderSettingsSync502Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync503Error1> apiV1AutomationProviderSettingsSync503Error1Value,
        Optional<ApiV1AutomationProviderSettingsSync504Error1> apiV1AutomationProviderSettingsSync504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationProviderSettingsSync400Error1Value = apiV1AutomationProviderSettingsSync400Error1Value;
        _apiV1AutomationProviderSettingsSync401Error1Value = apiV1AutomationProviderSettingsSync401Error1Value;
        _apiV1AutomationProviderSettingsSync403Error1Value = apiV1AutomationProviderSettingsSync403Error1Value;
        _apiV1AutomationProviderSettingsSync404Error1Value = apiV1AutomationProviderSettingsSync404Error1Value;
        _apiV1AutomationProviderSettingsSync429Error1Value = apiV1AutomationProviderSettingsSync429Error1Value;
        _apiV1AutomationProviderSettingsSync500Error1Value = apiV1AutomationProviderSettingsSync500Error1Value;
        _apiV1AutomationProviderSettingsSync502Error1Value = apiV1AutomationProviderSettingsSync502Error1Value;
        _apiV1AutomationProviderSettingsSync503Error1Value = apiV1AutomationProviderSettingsSync503Error1Value;
        _apiV1AutomationProviderSettingsSync504Error1Value = apiV1AutomationProviderSettingsSync504Error1Value;
    }

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync400Error1(ApiV1AutomationProviderSettingsSync400Error1 value) =>
        new(
            Optional<ApiV1AutomationProviderSettingsSync400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync401Error1(ApiV1AutomationProviderSettingsSync401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationProviderSettingsSync401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync403Error1(ApiV1AutomationProviderSettingsSync403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync404Error1(ApiV1AutomationProviderSettingsSync404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync429Error1(ApiV1AutomationProviderSettingsSync429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync500Error1(ApiV1AutomationProviderSettingsSync500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync502Error1(ApiV1AutomationProviderSettingsSync502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync503Error1(ApiV1AutomationProviderSettingsSync503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync503Error1>.Some(value),
            default,
            default);

    private static AutomationSyncProviderSettingError AsApiV1AutomationProviderSettingsSync504Error1(ApiV1AutomationProviderSettingsSync504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettingsSync504Error1>.Some(value),
            default);

    private static AutomationSyncProviderSettingError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationProviderSettingsSync400Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync400Error1? value) =>
        _apiV1AutomationProviderSettingsSync400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync401Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync401Error1? value) =>
        _apiV1AutomationProviderSettingsSync401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync403Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync403Error1? value) =>
        _apiV1AutomationProviderSettingsSync403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync404Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync404Error1? value) =>
        _apiV1AutomationProviderSettingsSync404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync429Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync429Error1? value) =>
        _apiV1AutomationProviderSettingsSync429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync500Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync500Error1? value) =>
        _apiV1AutomationProviderSettingsSync500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync502Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync502Error1? value) =>
        _apiV1AutomationProviderSettingsSync502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync503Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync503Error1? value) =>
        _apiV1AutomationProviderSettingsSync503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettingsSync504Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync504Error1? value) =>
        _apiV1AutomationProviderSettingsSync504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationProviderSettingsSync400Error1, TResult> onApiV1AutomationProviderSettingsSync400Error1,
        Func<ApiV1AutomationProviderSettingsSync401Error1, TResult> onApiV1AutomationProviderSettingsSync401Error1,
        Func<ApiV1AutomationProviderSettingsSync403Error1, TResult> onApiV1AutomationProviderSettingsSync403Error1,
        Func<ApiV1AutomationProviderSettingsSync404Error1, TResult> onApiV1AutomationProviderSettingsSync404Error1,
        Func<ApiV1AutomationProviderSettingsSync429Error1, TResult> onApiV1AutomationProviderSettingsSync429Error1,
        Func<ApiV1AutomationProviderSettingsSync500Error1, TResult> onApiV1AutomationProviderSettingsSync500Error1,
        Func<ApiV1AutomationProviderSettingsSync502Error1, TResult> onApiV1AutomationProviderSettingsSync502Error1,
        Func<ApiV1AutomationProviderSettingsSync503Error1, TResult> onApiV1AutomationProviderSettingsSync503Error1,
        Func<ApiV1AutomationProviderSettingsSync504Error1, TResult> onApiV1AutomationProviderSettingsSync504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationProviderSettingsSync400Error1(
                out var apiV1AutomationProviderSettingsSync400Error1Value) => onApiV1AutomationProviderSettingsSync400Error1(
                apiV1AutomationProviderSettingsSync400Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync401Error1(
                out var apiV1AutomationProviderSettingsSync401Error1Value) => onApiV1AutomationProviderSettingsSync401Error1(
                apiV1AutomationProviderSettingsSync401Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync403Error1(
                out var apiV1AutomationProviderSettingsSync403Error1Value) => onApiV1AutomationProviderSettingsSync403Error1(
                apiV1AutomationProviderSettingsSync403Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync404Error1(
                out var apiV1AutomationProviderSettingsSync404Error1Value) => onApiV1AutomationProviderSettingsSync404Error1(
                apiV1AutomationProviderSettingsSync404Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync429Error1(
                out var apiV1AutomationProviderSettingsSync429Error1Value) => onApiV1AutomationProviderSettingsSync429Error1(
                apiV1AutomationProviderSettingsSync429Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync500Error1(
                out var apiV1AutomationProviderSettingsSync500Error1Value) => onApiV1AutomationProviderSettingsSync500Error1(
                apiV1AutomationProviderSettingsSync500Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync502Error1(
                out var apiV1AutomationProviderSettingsSync502Error1Value) => onApiV1AutomationProviderSettingsSync502Error1(
                apiV1AutomationProviderSettingsSync502Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync503Error1(
                out var apiV1AutomationProviderSettingsSync503Error1Value) => onApiV1AutomationProviderSettingsSync503Error1(
                apiV1AutomationProviderSettingsSync503Error1Value),
            _ when TryGetApiV1AutomationProviderSettingsSync504Error1(
                out var apiV1AutomationProviderSettingsSync504Error1Value) => onApiV1AutomationProviderSettingsSync504Error1(
                apiV1AutomationProviderSettingsSync504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationSyncProviderSettingError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationProviderSettingsSync400Error1> onApiV1AutomationProviderSettingsSync400Error1,
        Action<ApiV1AutomationProviderSettingsSync401Error1> onApiV1AutomationProviderSettingsSync401Error1,
        Action<ApiV1AutomationProviderSettingsSync403Error1> onApiV1AutomationProviderSettingsSync403Error1,
        Action<ApiV1AutomationProviderSettingsSync404Error1> onApiV1AutomationProviderSettingsSync404Error1,
        Action<ApiV1AutomationProviderSettingsSync429Error1> onApiV1AutomationProviderSettingsSync429Error1,
        Action<ApiV1AutomationProviderSettingsSync500Error1> onApiV1AutomationProviderSettingsSync500Error1,
        Action<ApiV1AutomationProviderSettingsSync502Error1> onApiV1AutomationProviderSettingsSync502Error1,
        Action<ApiV1AutomationProviderSettingsSync503Error1> onApiV1AutomationProviderSettingsSync503Error1,
        Action<ApiV1AutomationProviderSettingsSync504Error1> onApiV1AutomationProviderSettingsSync504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationProviderSettingsSync400Error1(
            out var apiV1AutomationProviderSettingsSync400Error1Value)) onApiV1AutomationProviderSettingsSync400Error1(
            apiV1AutomationProviderSettingsSync400Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync401Error1(
            out var apiV1AutomationProviderSettingsSync401Error1Value)) onApiV1AutomationProviderSettingsSync401Error1(
            apiV1AutomationProviderSettingsSync401Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync403Error1(
            out var apiV1AutomationProviderSettingsSync403Error1Value)) onApiV1AutomationProviderSettingsSync403Error1(
            apiV1AutomationProviderSettingsSync403Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync404Error1(
            out var apiV1AutomationProviderSettingsSync404Error1Value)) onApiV1AutomationProviderSettingsSync404Error1(
            apiV1AutomationProviderSettingsSync404Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync429Error1(
            out var apiV1AutomationProviderSettingsSync429Error1Value)) onApiV1AutomationProviderSettingsSync429Error1(
            apiV1AutomationProviderSettingsSync429Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync500Error1(
            out var apiV1AutomationProviderSettingsSync500Error1Value)) onApiV1AutomationProviderSettingsSync500Error1(
            apiV1AutomationProviderSettingsSync500Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync502Error1(
            out var apiV1AutomationProviderSettingsSync502Error1Value)) onApiV1AutomationProviderSettingsSync502Error1(
            apiV1AutomationProviderSettingsSync502Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync503Error1(
            out var apiV1AutomationProviderSettingsSync503Error1Value)) onApiV1AutomationProviderSettingsSync503Error1(
            apiV1AutomationProviderSettingsSync503Error1Value);
        else if (TryGetApiV1AutomationProviderSettingsSync504Error1(
            out var apiV1AutomationProviderSettingsSync504Error1Value)) onApiV1AutomationProviderSettingsSync504Error1(
            apiV1AutomationProviderSettingsSync504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationSyncProviderSettingError)} holds no value.");
    }

    private static Task<AutomationSyncProviderSettingError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationProviderSettingsSync400Error1>().As(
                AsApiV1AutomationProviderSettingsSync400Error1),
            401 => response.Json<ApiV1AutomationProviderSettingsSync401Error1>().As(
                AsApiV1AutomationProviderSettingsSync401Error1),
            403 => response.Json<ApiV1AutomationProviderSettingsSync403Error1>().As(
                AsApiV1AutomationProviderSettingsSync403Error1),
            404 => response.Json<ApiV1AutomationProviderSettingsSync404Error1>().As(
                AsApiV1AutomationProviderSettingsSync404Error1),
            429 => response.Json<ApiV1AutomationProviderSettingsSync429Error1>().As(
                AsApiV1AutomationProviderSettingsSync429Error1),
            500 => response.Json<ApiV1AutomationProviderSettingsSync500Error1>().As(
                AsApiV1AutomationProviderSettingsSync500Error1),
            502 => response.Json<ApiV1AutomationProviderSettingsSync502Error1>().As(
                AsApiV1AutomationProviderSettingsSync502Error1),
            503 => response.Json<ApiV1AutomationProviderSettingsSync503Error1>().As(
                AsApiV1AutomationProviderSettingsSync503Error1),
            504 => response.Json<ApiV1AutomationProviderSettingsSync504Error1>().As(
                AsApiV1AutomationProviderSettingsSync504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationSyncProviderSettingError> Response { get; } = new(Create);
}
