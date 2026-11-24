using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationPauseFlowError : ApiError
{
    private readonly Optional<ApiV1AutomationsPause400Error1> _apiV1AutomationsPause400Error1Value;

    private readonly Optional<ApiV1AutomationsPause401Error1> _apiV1AutomationsPause401Error1Value;

    private readonly Optional<ApiV1AutomationsPause403Error1> _apiV1AutomationsPause403Error1Value;

    private readonly Optional<ApiV1AutomationsPause404Error1> _apiV1AutomationsPause404Error1Value;

    private readonly Optional<ApiV1AutomationsPause429Error1> _apiV1AutomationsPause429Error1Value;

    private readonly Optional<ApiV1AutomationsPause500Error1> _apiV1AutomationsPause500Error1Value;

    private readonly Optional<ApiV1AutomationsPause502Error1> _apiV1AutomationsPause502Error1Value;

    private readonly Optional<ApiV1AutomationsPause503Error1> _apiV1AutomationsPause503Error1Value;

    private readonly Optional<ApiV1AutomationsPause504Error1> _apiV1AutomationsPause504Error1Value;

    private AutomationPauseFlowError(Optional<ApiV1AutomationsPause400Error1> apiV1AutomationsPause400Error1Value,
        Optional<ApiV1AutomationsPause401Error1> apiV1AutomationsPause401Error1Value,
        Optional<ApiV1AutomationsPause403Error1> apiV1AutomationsPause403Error1Value,
        Optional<ApiV1AutomationsPause404Error1> apiV1AutomationsPause404Error1Value,
        Optional<ApiV1AutomationsPause429Error1> apiV1AutomationsPause429Error1Value,
        Optional<ApiV1AutomationsPause500Error1> apiV1AutomationsPause500Error1Value,
        Optional<ApiV1AutomationsPause502Error1> apiV1AutomationsPause502Error1Value,
        Optional<ApiV1AutomationsPause503Error1> apiV1AutomationsPause503Error1Value,
        Optional<ApiV1AutomationsPause504Error1> apiV1AutomationsPause504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsPause400Error1Value = apiV1AutomationsPause400Error1Value;
        _apiV1AutomationsPause401Error1Value = apiV1AutomationsPause401Error1Value;
        _apiV1AutomationsPause403Error1Value = apiV1AutomationsPause403Error1Value;
        _apiV1AutomationsPause404Error1Value = apiV1AutomationsPause404Error1Value;
        _apiV1AutomationsPause429Error1Value = apiV1AutomationsPause429Error1Value;
        _apiV1AutomationsPause500Error1Value = apiV1AutomationsPause500Error1Value;
        _apiV1AutomationsPause502Error1Value = apiV1AutomationsPause502Error1Value;
        _apiV1AutomationsPause503Error1Value = apiV1AutomationsPause503Error1Value;
        _apiV1AutomationsPause504Error1Value = apiV1AutomationsPause504Error1Value;
    }

    private static AutomationPauseFlowError AsApiV1AutomationsPause400Error1(ApiV1AutomationsPause400Error1 value) =>
        new(
            Optional<ApiV1AutomationsPause400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause401Error1(ApiV1AutomationsPause401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsPause401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause403Error1(ApiV1AutomationsPause403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsPause403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause404Error1(ApiV1AutomationsPause404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause429Error1(ApiV1AutomationsPause429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause500Error1(ApiV1AutomationsPause500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause502Error1(ApiV1AutomationsPause502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause503Error1(ApiV1AutomationsPause503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause503Error1>.Some(value),
            default,
            default);

    private static AutomationPauseFlowError AsApiV1AutomationsPause504Error1(ApiV1AutomationsPause504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPause504Error1>.Some(value),
            default);

    private static AutomationPauseFlowError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsPause400Error1([NotNullWhen(true)] out ApiV1AutomationsPause400Error1? value) =>
        _apiV1AutomationsPause400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause401Error1([NotNullWhen(true)] out ApiV1AutomationsPause401Error1? value) =>
        _apiV1AutomationsPause401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause403Error1([NotNullWhen(true)] out ApiV1AutomationsPause403Error1? value) =>
        _apiV1AutomationsPause403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause404Error1([NotNullWhen(true)] out ApiV1AutomationsPause404Error1? value) =>
        _apiV1AutomationsPause404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause429Error1([NotNullWhen(true)] out ApiV1AutomationsPause429Error1? value) =>
        _apiV1AutomationsPause429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause500Error1([NotNullWhen(true)] out ApiV1AutomationsPause500Error1? value) =>
        _apiV1AutomationsPause500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause502Error1([NotNullWhen(true)] out ApiV1AutomationsPause502Error1? value) =>
        _apiV1AutomationsPause502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause503Error1([NotNullWhen(true)] out ApiV1AutomationsPause503Error1? value) =>
        _apiV1AutomationsPause503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPause504Error1([NotNullWhen(true)] out ApiV1AutomationsPause504Error1? value) =>
        _apiV1AutomationsPause504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsPause400Error1, TResult> onApiV1AutomationsPause400Error1,
        Func<ApiV1AutomationsPause401Error1, TResult> onApiV1AutomationsPause401Error1,
        Func<ApiV1AutomationsPause403Error1, TResult> onApiV1AutomationsPause403Error1,
        Func<ApiV1AutomationsPause404Error1, TResult> onApiV1AutomationsPause404Error1,
        Func<ApiV1AutomationsPause429Error1, TResult> onApiV1AutomationsPause429Error1,
        Func<ApiV1AutomationsPause500Error1, TResult> onApiV1AutomationsPause500Error1,
        Func<ApiV1AutomationsPause502Error1, TResult> onApiV1AutomationsPause502Error1,
        Func<ApiV1AutomationsPause503Error1, TResult> onApiV1AutomationsPause503Error1,
        Func<ApiV1AutomationsPause504Error1, TResult> onApiV1AutomationsPause504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsPause400Error1(
                out var apiV1AutomationsPause400Error1Value) => onApiV1AutomationsPause400Error1(
                apiV1AutomationsPause400Error1Value),
            _ when TryGetApiV1AutomationsPause401Error1(
                out var apiV1AutomationsPause401Error1Value) => onApiV1AutomationsPause401Error1(
                apiV1AutomationsPause401Error1Value),
            _ when TryGetApiV1AutomationsPause403Error1(
                out var apiV1AutomationsPause403Error1Value) => onApiV1AutomationsPause403Error1(
                apiV1AutomationsPause403Error1Value),
            _ when TryGetApiV1AutomationsPause404Error1(
                out var apiV1AutomationsPause404Error1Value) => onApiV1AutomationsPause404Error1(
                apiV1AutomationsPause404Error1Value),
            _ when TryGetApiV1AutomationsPause429Error1(
                out var apiV1AutomationsPause429Error1Value) => onApiV1AutomationsPause429Error1(
                apiV1AutomationsPause429Error1Value),
            _ when TryGetApiV1AutomationsPause500Error1(
                out var apiV1AutomationsPause500Error1Value) => onApiV1AutomationsPause500Error1(
                apiV1AutomationsPause500Error1Value),
            _ when TryGetApiV1AutomationsPause502Error1(
                out var apiV1AutomationsPause502Error1Value) => onApiV1AutomationsPause502Error1(
                apiV1AutomationsPause502Error1Value),
            _ when TryGetApiV1AutomationsPause503Error1(
                out var apiV1AutomationsPause503Error1Value) => onApiV1AutomationsPause503Error1(
                apiV1AutomationsPause503Error1Value),
            _ when TryGetApiV1AutomationsPause504Error1(
                out var apiV1AutomationsPause504Error1Value) => onApiV1AutomationsPause504Error1(
                apiV1AutomationsPause504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationPauseFlowError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsPause400Error1> onApiV1AutomationsPause400Error1,
        Action<ApiV1AutomationsPause401Error1> onApiV1AutomationsPause401Error1,
        Action<ApiV1AutomationsPause403Error1> onApiV1AutomationsPause403Error1,
        Action<ApiV1AutomationsPause404Error1> onApiV1AutomationsPause404Error1,
        Action<ApiV1AutomationsPause429Error1> onApiV1AutomationsPause429Error1,
        Action<ApiV1AutomationsPause500Error1> onApiV1AutomationsPause500Error1,
        Action<ApiV1AutomationsPause502Error1> onApiV1AutomationsPause502Error1,
        Action<ApiV1AutomationsPause503Error1> onApiV1AutomationsPause503Error1,
        Action<ApiV1AutomationsPause504Error1> onApiV1AutomationsPause504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsPause400Error1(
            out var apiV1AutomationsPause400Error1Value)) onApiV1AutomationsPause400Error1(
            apiV1AutomationsPause400Error1Value);
        else if (TryGetApiV1AutomationsPause401Error1(
            out var apiV1AutomationsPause401Error1Value)) onApiV1AutomationsPause401Error1(
            apiV1AutomationsPause401Error1Value);
        else if (TryGetApiV1AutomationsPause403Error1(
            out var apiV1AutomationsPause403Error1Value)) onApiV1AutomationsPause403Error1(
            apiV1AutomationsPause403Error1Value);
        else if (TryGetApiV1AutomationsPause404Error1(
            out var apiV1AutomationsPause404Error1Value)) onApiV1AutomationsPause404Error1(
            apiV1AutomationsPause404Error1Value);
        else if (TryGetApiV1AutomationsPause429Error1(
            out var apiV1AutomationsPause429Error1Value)) onApiV1AutomationsPause429Error1(
            apiV1AutomationsPause429Error1Value);
        else if (TryGetApiV1AutomationsPause500Error1(
            out var apiV1AutomationsPause500Error1Value)) onApiV1AutomationsPause500Error1(
            apiV1AutomationsPause500Error1Value);
        else if (TryGetApiV1AutomationsPause502Error1(
            out var apiV1AutomationsPause502Error1Value)) onApiV1AutomationsPause502Error1(
            apiV1AutomationsPause502Error1Value);
        else if (TryGetApiV1AutomationsPause503Error1(
            out var apiV1AutomationsPause503Error1Value)) onApiV1AutomationsPause503Error1(
            apiV1AutomationsPause503Error1Value);
        else if (TryGetApiV1AutomationsPause504Error1(
            out var apiV1AutomationsPause504Error1Value)) onApiV1AutomationsPause504Error1(
            apiV1AutomationsPause504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationPauseFlowError)} holds no value.");
    }

    private static Task<AutomationPauseFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsPause400Error1>().As(AsApiV1AutomationsPause400Error1),
            401 => response.Json<ApiV1AutomationsPause401Error1>().As(AsApiV1AutomationsPause401Error1),
            403 => response.Json<ApiV1AutomationsPause403Error1>().As(AsApiV1AutomationsPause403Error1),
            404 => response.Json<ApiV1AutomationsPause404Error1>().As(AsApiV1AutomationsPause404Error1),
            429 => response.Json<ApiV1AutomationsPause429Error1>().As(AsApiV1AutomationsPause429Error1),
            500 => response.Json<ApiV1AutomationsPause500Error1>().As(AsApiV1AutomationsPause500Error1),
            502 => response.Json<ApiV1AutomationsPause502Error1>().As(AsApiV1AutomationsPause502Error1),
            503 => response.Json<ApiV1AutomationsPause503Error1>().As(AsApiV1AutomationsPause503Error1),
            504 => response.Json<ApiV1AutomationsPause504Error1>().As(AsApiV1AutomationsPause504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationPauseFlowError> Response { get; } = new(Create);
}
