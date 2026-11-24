using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationGetProviderSettingsError : ApiError
{
    private readonly Optional<ApiV1AutomationProviderSettings400Error1> _apiV1AutomationProviderSettings400Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings401Error1> _apiV1AutomationProviderSettings401Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings403Error1> _apiV1AutomationProviderSettings403Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings404Error1> _apiV1AutomationProviderSettings404Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings429Error1> _apiV1AutomationProviderSettings429Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings500Error1> _apiV1AutomationProviderSettings500Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings502Error1> _apiV1AutomationProviderSettings502Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings503Error1> _apiV1AutomationProviderSettings503Error1Value;

    private readonly Optional<ApiV1AutomationProviderSettings504Error1> _apiV1AutomationProviderSettings504Error1Value;

    private AutomationGetProviderSettingsError(Optional<ApiV1AutomationProviderSettings400Error1> apiV1AutomationProviderSettings400Error1Value,
        Optional<ApiV1AutomationProviderSettings401Error1> apiV1AutomationProviderSettings401Error1Value,
        Optional<ApiV1AutomationProviderSettings403Error1> apiV1AutomationProviderSettings403Error1Value,
        Optional<ApiV1AutomationProviderSettings404Error1> apiV1AutomationProviderSettings404Error1Value,
        Optional<ApiV1AutomationProviderSettings429Error1> apiV1AutomationProviderSettings429Error1Value,
        Optional<ApiV1AutomationProviderSettings500Error1> apiV1AutomationProviderSettings500Error1Value,
        Optional<ApiV1AutomationProviderSettings502Error1> apiV1AutomationProviderSettings502Error1Value,
        Optional<ApiV1AutomationProviderSettings503Error1> apiV1AutomationProviderSettings503Error1Value,
        Optional<ApiV1AutomationProviderSettings504Error1> apiV1AutomationProviderSettings504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationProviderSettings400Error1Value = apiV1AutomationProviderSettings400Error1Value;
        _apiV1AutomationProviderSettings401Error1Value = apiV1AutomationProviderSettings401Error1Value;
        _apiV1AutomationProviderSettings403Error1Value = apiV1AutomationProviderSettings403Error1Value;
        _apiV1AutomationProviderSettings404Error1Value = apiV1AutomationProviderSettings404Error1Value;
        _apiV1AutomationProviderSettings429Error1Value = apiV1AutomationProviderSettings429Error1Value;
        _apiV1AutomationProviderSettings500Error1Value = apiV1AutomationProviderSettings500Error1Value;
        _apiV1AutomationProviderSettings502Error1Value = apiV1AutomationProviderSettings502Error1Value;
        _apiV1AutomationProviderSettings503Error1Value = apiV1AutomationProviderSettings503Error1Value;
        _apiV1AutomationProviderSettings504Error1Value = apiV1AutomationProviderSettings504Error1Value;
    }

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings400Error1(ApiV1AutomationProviderSettings400Error1 value) =>
        new(
            Optional<ApiV1AutomationProviderSettings400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings401Error1(ApiV1AutomationProviderSettings401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationProviderSettings401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings403Error1(ApiV1AutomationProviderSettings403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationProviderSettings403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings404Error1(ApiV1AutomationProviderSettings404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings429Error1(ApiV1AutomationProviderSettings429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings500Error1(ApiV1AutomationProviderSettings500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings502Error1(ApiV1AutomationProviderSettings502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings503Error1(ApiV1AutomationProviderSettings503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings503Error1>.Some(value),
            default,
            default);

    private static AutomationGetProviderSettingsError AsApiV1AutomationProviderSettings504Error1(ApiV1AutomationProviderSettings504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationProviderSettings504Error1>.Some(value),
            default);

    private static AutomationGetProviderSettingsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationProviderSettings400Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings400Error1? value) =>
        _apiV1AutomationProviderSettings400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings401Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings401Error1? value) =>
        _apiV1AutomationProviderSettings401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings403Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings403Error1? value) =>
        _apiV1AutomationProviderSettings403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings404Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings404Error1? value) =>
        _apiV1AutomationProviderSettings404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings429Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings429Error1? value) =>
        _apiV1AutomationProviderSettings429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings500Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings500Error1? value) =>
        _apiV1AutomationProviderSettings500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings502Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings502Error1? value) =>
        _apiV1AutomationProviderSettings502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings503Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings503Error1? value) =>
        _apiV1AutomationProviderSettings503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationProviderSettings504Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings504Error1? value) =>
        _apiV1AutomationProviderSettings504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationProviderSettings400Error1, TResult> onApiV1AutomationProviderSettings400Error1,
        Func<ApiV1AutomationProviderSettings401Error1, TResult> onApiV1AutomationProviderSettings401Error1,
        Func<ApiV1AutomationProviderSettings403Error1, TResult> onApiV1AutomationProviderSettings403Error1,
        Func<ApiV1AutomationProviderSettings404Error1, TResult> onApiV1AutomationProviderSettings404Error1,
        Func<ApiV1AutomationProviderSettings429Error1, TResult> onApiV1AutomationProviderSettings429Error1,
        Func<ApiV1AutomationProviderSettings500Error1, TResult> onApiV1AutomationProviderSettings500Error1,
        Func<ApiV1AutomationProviderSettings502Error1, TResult> onApiV1AutomationProviderSettings502Error1,
        Func<ApiV1AutomationProviderSettings503Error1, TResult> onApiV1AutomationProviderSettings503Error1,
        Func<ApiV1AutomationProviderSettings504Error1, TResult> onApiV1AutomationProviderSettings504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationProviderSettings400Error1(
                out var apiV1AutomationProviderSettings400Error1Value) => onApiV1AutomationProviderSettings400Error1(
                apiV1AutomationProviderSettings400Error1Value),
            _ when TryGetApiV1AutomationProviderSettings401Error1(
                out var apiV1AutomationProviderSettings401Error1Value) => onApiV1AutomationProviderSettings401Error1(
                apiV1AutomationProviderSettings401Error1Value),
            _ when TryGetApiV1AutomationProviderSettings403Error1(
                out var apiV1AutomationProviderSettings403Error1Value) => onApiV1AutomationProviderSettings403Error1(
                apiV1AutomationProviderSettings403Error1Value),
            _ when TryGetApiV1AutomationProviderSettings404Error1(
                out var apiV1AutomationProviderSettings404Error1Value) => onApiV1AutomationProviderSettings404Error1(
                apiV1AutomationProviderSettings404Error1Value),
            _ when TryGetApiV1AutomationProviderSettings429Error1(
                out var apiV1AutomationProviderSettings429Error1Value) => onApiV1AutomationProviderSettings429Error1(
                apiV1AutomationProviderSettings429Error1Value),
            _ when TryGetApiV1AutomationProviderSettings500Error1(
                out var apiV1AutomationProviderSettings500Error1Value) => onApiV1AutomationProviderSettings500Error1(
                apiV1AutomationProviderSettings500Error1Value),
            _ when TryGetApiV1AutomationProviderSettings502Error1(
                out var apiV1AutomationProviderSettings502Error1Value) => onApiV1AutomationProviderSettings502Error1(
                apiV1AutomationProviderSettings502Error1Value),
            _ when TryGetApiV1AutomationProviderSettings503Error1(
                out var apiV1AutomationProviderSettings503Error1Value) => onApiV1AutomationProviderSettings503Error1(
                apiV1AutomationProviderSettings503Error1Value),
            _ when TryGetApiV1AutomationProviderSettings504Error1(
                out var apiV1AutomationProviderSettings504Error1Value) => onApiV1AutomationProviderSettings504Error1(
                apiV1AutomationProviderSettings504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationGetProviderSettingsError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationProviderSettings400Error1> onApiV1AutomationProviderSettings400Error1,
        Action<ApiV1AutomationProviderSettings401Error1> onApiV1AutomationProviderSettings401Error1,
        Action<ApiV1AutomationProviderSettings403Error1> onApiV1AutomationProviderSettings403Error1,
        Action<ApiV1AutomationProviderSettings404Error1> onApiV1AutomationProviderSettings404Error1,
        Action<ApiV1AutomationProviderSettings429Error1> onApiV1AutomationProviderSettings429Error1,
        Action<ApiV1AutomationProviderSettings500Error1> onApiV1AutomationProviderSettings500Error1,
        Action<ApiV1AutomationProviderSettings502Error1> onApiV1AutomationProviderSettings502Error1,
        Action<ApiV1AutomationProviderSettings503Error1> onApiV1AutomationProviderSettings503Error1,
        Action<ApiV1AutomationProviderSettings504Error1> onApiV1AutomationProviderSettings504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationProviderSettings400Error1(
            out var apiV1AutomationProviderSettings400Error1Value)) onApiV1AutomationProviderSettings400Error1(
            apiV1AutomationProviderSettings400Error1Value);
        else if (TryGetApiV1AutomationProviderSettings401Error1(
            out var apiV1AutomationProviderSettings401Error1Value)) onApiV1AutomationProviderSettings401Error1(
            apiV1AutomationProviderSettings401Error1Value);
        else if (TryGetApiV1AutomationProviderSettings403Error1(
            out var apiV1AutomationProviderSettings403Error1Value)) onApiV1AutomationProviderSettings403Error1(
            apiV1AutomationProviderSettings403Error1Value);
        else if (TryGetApiV1AutomationProviderSettings404Error1(
            out var apiV1AutomationProviderSettings404Error1Value)) onApiV1AutomationProviderSettings404Error1(
            apiV1AutomationProviderSettings404Error1Value);
        else if (TryGetApiV1AutomationProviderSettings429Error1(
            out var apiV1AutomationProviderSettings429Error1Value)) onApiV1AutomationProviderSettings429Error1(
            apiV1AutomationProviderSettings429Error1Value);
        else if (TryGetApiV1AutomationProviderSettings500Error1(
            out var apiV1AutomationProviderSettings500Error1Value)) onApiV1AutomationProviderSettings500Error1(
            apiV1AutomationProviderSettings500Error1Value);
        else if (TryGetApiV1AutomationProviderSettings502Error1(
            out var apiV1AutomationProviderSettings502Error1Value)) onApiV1AutomationProviderSettings502Error1(
            apiV1AutomationProviderSettings502Error1Value);
        else if (TryGetApiV1AutomationProviderSettings503Error1(
            out var apiV1AutomationProviderSettings503Error1Value)) onApiV1AutomationProviderSettings503Error1(
            apiV1AutomationProviderSettings503Error1Value);
        else if (TryGetApiV1AutomationProviderSettings504Error1(
            out var apiV1AutomationProviderSettings504Error1Value)) onApiV1AutomationProviderSettings504Error1(
            apiV1AutomationProviderSettings504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationGetProviderSettingsError)} holds no value.");
    }

    private static Task<AutomationGetProviderSettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationProviderSettings400Error1>().As(
                AsApiV1AutomationProviderSettings400Error1),
            401 => response.Json<ApiV1AutomationProviderSettings401Error1>().As(
                AsApiV1AutomationProviderSettings401Error1),
            403 => response.Json<ApiV1AutomationProviderSettings403Error1>().As(
                AsApiV1AutomationProviderSettings403Error1),
            404 => response.Json<ApiV1AutomationProviderSettings404Error1>().As(
                AsApiV1AutomationProviderSettings404Error1),
            429 => response.Json<ApiV1AutomationProviderSettings429Error1>().As(
                AsApiV1AutomationProviderSettings429Error1),
            500 => response.Json<ApiV1AutomationProviderSettings500Error1>().As(
                AsApiV1AutomationProviderSettings500Error1),
            502 => response.Json<ApiV1AutomationProviderSettings502Error1>().As(
                AsApiV1AutomationProviderSettings502Error1),
            503 => response.Json<ApiV1AutomationProviderSettings503Error1>().As(
                AsApiV1AutomationProviderSettings503Error1),
            504 => response.Json<ApiV1AutomationProviderSettings504Error1>().As(
                AsApiV1AutomationProviderSettings504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationGetProviderSettingsError> Response { get; } = new(Create);
}
