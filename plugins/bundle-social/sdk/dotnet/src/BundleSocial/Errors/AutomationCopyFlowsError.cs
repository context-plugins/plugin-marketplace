using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationCopyFlowsError : ApiError
{
    private readonly Optional<ApiV1AutomationsCopy400Error1> _apiV1AutomationsCopy400Error1Value;

    private readonly Optional<ApiV1AutomationsCopy401Error1> _apiV1AutomationsCopy401Error1Value;

    private readonly Optional<ApiV1AutomationsCopy403Error1> _apiV1AutomationsCopy403Error1Value;

    private readonly Optional<ApiV1AutomationsCopy404Error1> _apiV1AutomationsCopy404Error1Value;

    private readonly Optional<ApiV1AutomationsCopy429Error1> _apiV1AutomationsCopy429Error1Value;

    private readonly Optional<ApiV1AutomationsCopy500Error1> _apiV1AutomationsCopy500Error1Value;

    private readonly Optional<ApiV1AutomationsCopy502Error1> _apiV1AutomationsCopy502Error1Value;

    private readonly Optional<ApiV1AutomationsCopy503Error1> _apiV1AutomationsCopy503Error1Value;

    private readonly Optional<ApiV1AutomationsCopy504Error1> _apiV1AutomationsCopy504Error1Value;

    private AutomationCopyFlowsError(Optional<ApiV1AutomationsCopy400Error1> apiV1AutomationsCopy400Error1Value,
        Optional<ApiV1AutomationsCopy401Error1> apiV1AutomationsCopy401Error1Value,
        Optional<ApiV1AutomationsCopy403Error1> apiV1AutomationsCopy403Error1Value,
        Optional<ApiV1AutomationsCopy404Error1> apiV1AutomationsCopy404Error1Value,
        Optional<ApiV1AutomationsCopy429Error1> apiV1AutomationsCopy429Error1Value,
        Optional<ApiV1AutomationsCopy500Error1> apiV1AutomationsCopy500Error1Value,
        Optional<ApiV1AutomationsCopy502Error1> apiV1AutomationsCopy502Error1Value,
        Optional<ApiV1AutomationsCopy503Error1> apiV1AutomationsCopy503Error1Value,
        Optional<ApiV1AutomationsCopy504Error1> apiV1AutomationsCopy504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsCopy400Error1Value = apiV1AutomationsCopy400Error1Value;
        _apiV1AutomationsCopy401Error1Value = apiV1AutomationsCopy401Error1Value;
        _apiV1AutomationsCopy403Error1Value = apiV1AutomationsCopy403Error1Value;
        _apiV1AutomationsCopy404Error1Value = apiV1AutomationsCopy404Error1Value;
        _apiV1AutomationsCopy429Error1Value = apiV1AutomationsCopy429Error1Value;
        _apiV1AutomationsCopy500Error1Value = apiV1AutomationsCopy500Error1Value;
        _apiV1AutomationsCopy502Error1Value = apiV1AutomationsCopy502Error1Value;
        _apiV1AutomationsCopy503Error1Value = apiV1AutomationsCopy503Error1Value;
        _apiV1AutomationsCopy504Error1Value = apiV1AutomationsCopy504Error1Value;
    }

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy400Error1(ApiV1AutomationsCopy400Error1 value) =>
        new(
            Optional<ApiV1AutomationsCopy400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy401Error1(ApiV1AutomationsCopy401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsCopy401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy403Error1(ApiV1AutomationsCopy403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsCopy403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy404Error1(ApiV1AutomationsCopy404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy429Error1(ApiV1AutomationsCopy429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy500Error1(ApiV1AutomationsCopy500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy502Error1(ApiV1AutomationsCopy502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy503Error1(ApiV1AutomationsCopy503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy503Error1>.Some(value),
            default,
            default);

    private static AutomationCopyFlowsError AsApiV1AutomationsCopy504Error1(ApiV1AutomationsCopy504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsCopy504Error1>.Some(value),
            default);

    private static AutomationCopyFlowsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsCopy400Error1([NotNullWhen(true)] out ApiV1AutomationsCopy400Error1? value) =>
        _apiV1AutomationsCopy400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy401Error1([NotNullWhen(true)] out ApiV1AutomationsCopy401Error1? value) =>
        _apiV1AutomationsCopy401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy403Error1([NotNullWhen(true)] out ApiV1AutomationsCopy403Error1? value) =>
        _apiV1AutomationsCopy403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy404Error1([NotNullWhen(true)] out ApiV1AutomationsCopy404Error1? value) =>
        _apiV1AutomationsCopy404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy429Error1([NotNullWhen(true)] out ApiV1AutomationsCopy429Error1? value) =>
        _apiV1AutomationsCopy429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy500Error1([NotNullWhen(true)] out ApiV1AutomationsCopy500Error1? value) =>
        _apiV1AutomationsCopy500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy502Error1([NotNullWhen(true)] out ApiV1AutomationsCopy502Error1? value) =>
        _apiV1AutomationsCopy502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy503Error1([NotNullWhen(true)] out ApiV1AutomationsCopy503Error1? value) =>
        _apiV1AutomationsCopy503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsCopy504Error1([NotNullWhen(true)] out ApiV1AutomationsCopy504Error1? value) =>
        _apiV1AutomationsCopy504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsCopy400Error1, TResult> onApiV1AutomationsCopy400Error1,
        Func<ApiV1AutomationsCopy401Error1, TResult> onApiV1AutomationsCopy401Error1,
        Func<ApiV1AutomationsCopy403Error1, TResult> onApiV1AutomationsCopy403Error1,
        Func<ApiV1AutomationsCopy404Error1, TResult> onApiV1AutomationsCopy404Error1,
        Func<ApiV1AutomationsCopy429Error1, TResult> onApiV1AutomationsCopy429Error1,
        Func<ApiV1AutomationsCopy500Error1, TResult> onApiV1AutomationsCopy500Error1,
        Func<ApiV1AutomationsCopy502Error1, TResult> onApiV1AutomationsCopy502Error1,
        Func<ApiV1AutomationsCopy503Error1, TResult> onApiV1AutomationsCopy503Error1,
        Func<ApiV1AutomationsCopy504Error1, TResult> onApiV1AutomationsCopy504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsCopy400Error1(
                out var apiV1AutomationsCopy400Error1Value) => onApiV1AutomationsCopy400Error1(
                apiV1AutomationsCopy400Error1Value),
            _ when TryGetApiV1AutomationsCopy401Error1(
                out var apiV1AutomationsCopy401Error1Value) => onApiV1AutomationsCopy401Error1(
                apiV1AutomationsCopy401Error1Value),
            _ when TryGetApiV1AutomationsCopy403Error1(
                out var apiV1AutomationsCopy403Error1Value) => onApiV1AutomationsCopy403Error1(
                apiV1AutomationsCopy403Error1Value),
            _ when TryGetApiV1AutomationsCopy404Error1(
                out var apiV1AutomationsCopy404Error1Value) => onApiV1AutomationsCopy404Error1(
                apiV1AutomationsCopy404Error1Value),
            _ when TryGetApiV1AutomationsCopy429Error1(
                out var apiV1AutomationsCopy429Error1Value) => onApiV1AutomationsCopy429Error1(
                apiV1AutomationsCopy429Error1Value),
            _ when TryGetApiV1AutomationsCopy500Error1(
                out var apiV1AutomationsCopy500Error1Value) => onApiV1AutomationsCopy500Error1(
                apiV1AutomationsCopy500Error1Value),
            _ when TryGetApiV1AutomationsCopy502Error1(
                out var apiV1AutomationsCopy502Error1Value) => onApiV1AutomationsCopy502Error1(
                apiV1AutomationsCopy502Error1Value),
            _ when TryGetApiV1AutomationsCopy503Error1(
                out var apiV1AutomationsCopy503Error1Value) => onApiV1AutomationsCopy503Error1(
                apiV1AutomationsCopy503Error1Value),
            _ when TryGetApiV1AutomationsCopy504Error1(
                out var apiV1AutomationsCopy504Error1Value) => onApiV1AutomationsCopy504Error1(
                apiV1AutomationsCopy504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationCopyFlowsError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsCopy400Error1> onApiV1AutomationsCopy400Error1,
        Action<ApiV1AutomationsCopy401Error1> onApiV1AutomationsCopy401Error1,
        Action<ApiV1AutomationsCopy403Error1> onApiV1AutomationsCopy403Error1,
        Action<ApiV1AutomationsCopy404Error1> onApiV1AutomationsCopy404Error1,
        Action<ApiV1AutomationsCopy429Error1> onApiV1AutomationsCopy429Error1,
        Action<ApiV1AutomationsCopy500Error1> onApiV1AutomationsCopy500Error1,
        Action<ApiV1AutomationsCopy502Error1> onApiV1AutomationsCopy502Error1,
        Action<ApiV1AutomationsCopy503Error1> onApiV1AutomationsCopy503Error1,
        Action<ApiV1AutomationsCopy504Error1> onApiV1AutomationsCopy504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsCopy400Error1(
            out var apiV1AutomationsCopy400Error1Value)) onApiV1AutomationsCopy400Error1(
            apiV1AutomationsCopy400Error1Value);
        else if (TryGetApiV1AutomationsCopy401Error1(
            out var apiV1AutomationsCopy401Error1Value)) onApiV1AutomationsCopy401Error1(
            apiV1AutomationsCopy401Error1Value);
        else if (TryGetApiV1AutomationsCopy403Error1(
            out var apiV1AutomationsCopy403Error1Value)) onApiV1AutomationsCopy403Error1(
            apiV1AutomationsCopy403Error1Value);
        else if (TryGetApiV1AutomationsCopy404Error1(
            out var apiV1AutomationsCopy404Error1Value)) onApiV1AutomationsCopy404Error1(
            apiV1AutomationsCopy404Error1Value);
        else if (TryGetApiV1AutomationsCopy429Error1(
            out var apiV1AutomationsCopy429Error1Value)) onApiV1AutomationsCopy429Error1(
            apiV1AutomationsCopy429Error1Value);
        else if (TryGetApiV1AutomationsCopy500Error1(
            out var apiV1AutomationsCopy500Error1Value)) onApiV1AutomationsCopy500Error1(
            apiV1AutomationsCopy500Error1Value);
        else if (TryGetApiV1AutomationsCopy502Error1(
            out var apiV1AutomationsCopy502Error1Value)) onApiV1AutomationsCopy502Error1(
            apiV1AutomationsCopy502Error1Value);
        else if (TryGetApiV1AutomationsCopy503Error1(
            out var apiV1AutomationsCopy503Error1Value)) onApiV1AutomationsCopy503Error1(
            apiV1AutomationsCopy503Error1Value);
        else if (TryGetApiV1AutomationsCopy504Error1(
            out var apiV1AutomationsCopy504Error1Value)) onApiV1AutomationsCopy504Error1(
            apiV1AutomationsCopy504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationCopyFlowsError)} holds no value.");
    }

    private static Task<AutomationCopyFlowsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsCopy400Error1>().As(AsApiV1AutomationsCopy400Error1),
            401 => response.Json<ApiV1AutomationsCopy401Error1>().As(AsApiV1AutomationsCopy401Error1),
            403 => response.Json<ApiV1AutomationsCopy403Error1>().As(AsApiV1AutomationsCopy403Error1),
            404 => response.Json<ApiV1AutomationsCopy404Error1>().As(AsApiV1AutomationsCopy404Error1),
            429 => response.Json<ApiV1AutomationsCopy429Error1>().As(AsApiV1AutomationsCopy429Error1),
            500 => response.Json<ApiV1AutomationsCopy500Error1>().As(AsApiV1AutomationsCopy500Error1),
            502 => response.Json<ApiV1AutomationsCopy502Error1>().As(AsApiV1AutomationsCopy502Error1),
            503 => response.Json<ApiV1AutomationsCopy503Error1>().As(AsApiV1AutomationsCopy503Error1),
            504 => response.Json<ApiV1AutomationsCopy504Error1>().As(AsApiV1AutomationsCopy504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationCopyFlowsError> Response { get; } = new(Create);
}
