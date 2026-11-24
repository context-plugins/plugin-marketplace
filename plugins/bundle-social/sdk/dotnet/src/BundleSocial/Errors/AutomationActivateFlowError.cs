using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationActivateFlowError : ApiError
{
    private readonly Optional<ApiV1AutomationsActivate400Error1> _apiV1AutomationsActivate400Error1Value;

    private readonly Optional<ApiV1AutomationsActivate401Error1> _apiV1AutomationsActivate401Error1Value;

    private readonly Optional<ApiV1AutomationsActivate403Error1> _apiV1AutomationsActivate403Error1Value;

    private readonly Optional<ApiV1AutomationsActivate404Error1> _apiV1AutomationsActivate404Error1Value;

    private readonly Optional<ApiV1AutomationsActivate429Error1> _apiV1AutomationsActivate429Error1Value;

    private readonly Optional<ApiV1AutomationsActivate500Error1> _apiV1AutomationsActivate500Error1Value;

    private readonly Optional<ApiV1AutomationsActivate502Error1> _apiV1AutomationsActivate502Error1Value;

    private readonly Optional<ApiV1AutomationsActivate503Error1> _apiV1AutomationsActivate503Error1Value;

    private readonly Optional<ApiV1AutomationsActivate504Error1> _apiV1AutomationsActivate504Error1Value;

    private AutomationActivateFlowError(Optional<ApiV1AutomationsActivate400Error1> apiV1AutomationsActivate400Error1Value,
        Optional<ApiV1AutomationsActivate401Error1> apiV1AutomationsActivate401Error1Value,
        Optional<ApiV1AutomationsActivate403Error1> apiV1AutomationsActivate403Error1Value,
        Optional<ApiV1AutomationsActivate404Error1> apiV1AutomationsActivate404Error1Value,
        Optional<ApiV1AutomationsActivate429Error1> apiV1AutomationsActivate429Error1Value,
        Optional<ApiV1AutomationsActivate500Error1> apiV1AutomationsActivate500Error1Value,
        Optional<ApiV1AutomationsActivate502Error1> apiV1AutomationsActivate502Error1Value,
        Optional<ApiV1AutomationsActivate503Error1> apiV1AutomationsActivate503Error1Value,
        Optional<ApiV1AutomationsActivate504Error1> apiV1AutomationsActivate504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsActivate400Error1Value = apiV1AutomationsActivate400Error1Value;
        _apiV1AutomationsActivate401Error1Value = apiV1AutomationsActivate401Error1Value;
        _apiV1AutomationsActivate403Error1Value = apiV1AutomationsActivate403Error1Value;
        _apiV1AutomationsActivate404Error1Value = apiV1AutomationsActivate404Error1Value;
        _apiV1AutomationsActivate429Error1Value = apiV1AutomationsActivate429Error1Value;
        _apiV1AutomationsActivate500Error1Value = apiV1AutomationsActivate500Error1Value;
        _apiV1AutomationsActivate502Error1Value = apiV1AutomationsActivate502Error1Value;
        _apiV1AutomationsActivate503Error1Value = apiV1AutomationsActivate503Error1Value;
        _apiV1AutomationsActivate504Error1Value = apiV1AutomationsActivate504Error1Value;
    }

    private static AutomationActivateFlowError AsApiV1AutomationsActivate400Error1(ApiV1AutomationsActivate400Error1 value) =>
        new(
            Optional<ApiV1AutomationsActivate400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate401Error1(ApiV1AutomationsActivate401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsActivate401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate403Error1(ApiV1AutomationsActivate403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsActivate403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate404Error1(ApiV1AutomationsActivate404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate429Error1(ApiV1AutomationsActivate429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate500Error1(ApiV1AutomationsActivate500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate502Error1(ApiV1AutomationsActivate502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate503Error1(ApiV1AutomationsActivate503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate503Error1>.Some(value),
            default,
            default);

    private static AutomationActivateFlowError AsApiV1AutomationsActivate504Error1(ApiV1AutomationsActivate504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsActivate504Error1>.Some(value),
            default);

    private static AutomationActivateFlowError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsActivate400Error1([NotNullWhen(true)] out ApiV1AutomationsActivate400Error1? value) =>
        _apiV1AutomationsActivate400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate401Error1([NotNullWhen(true)] out ApiV1AutomationsActivate401Error1? value) =>
        _apiV1AutomationsActivate401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate403Error1([NotNullWhen(true)] out ApiV1AutomationsActivate403Error1? value) =>
        _apiV1AutomationsActivate403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate404Error1([NotNullWhen(true)] out ApiV1AutomationsActivate404Error1? value) =>
        _apiV1AutomationsActivate404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate429Error1([NotNullWhen(true)] out ApiV1AutomationsActivate429Error1? value) =>
        _apiV1AutomationsActivate429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate500Error1([NotNullWhen(true)] out ApiV1AutomationsActivate500Error1? value) =>
        _apiV1AutomationsActivate500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate502Error1([NotNullWhen(true)] out ApiV1AutomationsActivate502Error1? value) =>
        _apiV1AutomationsActivate502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate503Error1([NotNullWhen(true)] out ApiV1AutomationsActivate503Error1? value) =>
        _apiV1AutomationsActivate503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsActivate504Error1([NotNullWhen(true)] out ApiV1AutomationsActivate504Error1? value) =>
        _apiV1AutomationsActivate504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsActivate400Error1, TResult> onApiV1AutomationsActivate400Error1,
        Func<ApiV1AutomationsActivate401Error1, TResult> onApiV1AutomationsActivate401Error1,
        Func<ApiV1AutomationsActivate403Error1, TResult> onApiV1AutomationsActivate403Error1,
        Func<ApiV1AutomationsActivate404Error1, TResult> onApiV1AutomationsActivate404Error1,
        Func<ApiV1AutomationsActivate429Error1, TResult> onApiV1AutomationsActivate429Error1,
        Func<ApiV1AutomationsActivate500Error1, TResult> onApiV1AutomationsActivate500Error1,
        Func<ApiV1AutomationsActivate502Error1, TResult> onApiV1AutomationsActivate502Error1,
        Func<ApiV1AutomationsActivate503Error1, TResult> onApiV1AutomationsActivate503Error1,
        Func<ApiV1AutomationsActivate504Error1, TResult> onApiV1AutomationsActivate504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsActivate400Error1(
                out var apiV1AutomationsActivate400Error1Value) => onApiV1AutomationsActivate400Error1(
                apiV1AutomationsActivate400Error1Value),
            _ when TryGetApiV1AutomationsActivate401Error1(
                out var apiV1AutomationsActivate401Error1Value) => onApiV1AutomationsActivate401Error1(
                apiV1AutomationsActivate401Error1Value),
            _ when TryGetApiV1AutomationsActivate403Error1(
                out var apiV1AutomationsActivate403Error1Value) => onApiV1AutomationsActivate403Error1(
                apiV1AutomationsActivate403Error1Value),
            _ when TryGetApiV1AutomationsActivate404Error1(
                out var apiV1AutomationsActivate404Error1Value) => onApiV1AutomationsActivate404Error1(
                apiV1AutomationsActivate404Error1Value),
            _ when TryGetApiV1AutomationsActivate429Error1(
                out var apiV1AutomationsActivate429Error1Value) => onApiV1AutomationsActivate429Error1(
                apiV1AutomationsActivate429Error1Value),
            _ when TryGetApiV1AutomationsActivate500Error1(
                out var apiV1AutomationsActivate500Error1Value) => onApiV1AutomationsActivate500Error1(
                apiV1AutomationsActivate500Error1Value),
            _ when TryGetApiV1AutomationsActivate502Error1(
                out var apiV1AutomationsActivate502Error1Value) => onApiV1AutomationsActivate502Error1(
                apiV1AutomationsActivate502Error1Value),
            _ when TryGetApiV1AutomationsActivate503Error1(
                out var apiV1AutomationsActivate503Error1Value) => onApiV1AutomationsActivate503Error1(
                apiV1AutomationsActivate503Error1Value),
            _ when TryGetApiV1AutomationsActivate504Error1(
                out var apiV1AutomationsActivate504Error1Value) => onApiV1AutomationsActivate504Error1(
                apiV1AutomationsActivate504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationActivateFlowError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsActivate400Error1> onApiV1AutomationsActivate400Error1,
        Action<ApiV1AutomationsActivate401Error1> onApiV1AutomationsActivate401Error1,
        Action<ApiV1AutomationsActivate403Error1> onApiV1AutomationsActivate403Error1,
        Action<ApiV1AutomationsActivate404Error1> onApiV1AutomationsActivate404Error1,
        Action<ApiV1AutomationsActivate429Error1> onApiV1AutomationsActivate429Error1,
        Action<ApiV1AutomationsActivate500Error1> onApiV1AutomationsActivate500Error1,
        Action<ApiV1AutomationsActivate502Error1> onApiV1AutomationsActivate502Error1,
        Action<ApiV1AutomationsActivate503Error1> onApiV1AutomationsActivate503Error1,
        Action<ApiV1AutomationsActivate504Error1> onApiV1AutomationsActivate504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsActivate400Error1(
            out var apiV1AutomationsActivate400Error1Value)) onApiV1AutomationsActivate400Error1(
            apiV1AutomationsActivate400Error1Value);
        else if (TryGetApiV1AutomationsActivate401Error1(
            out var apiV1AutomationsActivate401Error1Value)) onApiV1AutomationsActivate401Error1(
            apiV1AutomationsActivate401Error1Value);
        else if (TryGetApiV1AutomationsActivate403Error1(
            out var apiV1AutomationsActivate403Error1Value)) onApiV1AutomationsActivate403Error1(
            apiV1AutomationsActivate403Error1Value);
        else if (TryGetApiV1AutomationsActivate404Error1(
            out var apiV1AutomationsActivate404Error1Value)) onApiV1AutomationsActivate404Error1(
            apiV1AutomationsActivate404Error1Value);
        else if (TryGetApiV1AutomationsActivate429Error1(
            out var apiV1AutomationsActivate429Error1Value)) onApiV1AutomationsActivate429Error1(
            apiV1AutomationsActivate429Error1Value);
        else if (TryGetApiV1AutomationsActivate500Error1(
            out var apiV1AutomationsActivate500Error1Value)) onApiV1AutomationsActivate500Error1(
            apiV1AutomationsActivate500Error1Value);
        else if (TryGetApiV1AutomationsActivate502Error1(
            out var apiV1AutomationsActivate502Error1Value)) onApiV1AutomationsActivate502Error1(
            apiV1AutomationsActivate502Error1Value);
        else if (TryGetApiV1AutomationsActivate503Error1(
            out var apiV1AutomationsActivate503Error1Value)) onApiV1AutomationsActivate503Error1(
            apiV1AutomationsActivate503Error1Value);
        else if (TryGetApiV1AutomationsActivate504Error1(
            out var apiV1AutomationsActivate504Error1Value)) onApiV1AutomationsActivate504Error1(
            apiV1AutomationsActivate504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationActivateFlowError)} holds no value.");
    }

    private static Task<AutomationActivateFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsActivate400Error1>().As(AsApiV1AutomationsActivate400Error1),
            401 => response.Json<ApiV1AutomationsActivate401Error1>().As(AsApiV1AutomationsActivate401Error1),
            403 => response.Json<ApiV1AutomationsActivate403Error1>().As(AsApiV1AutomationsActivate403Error1),
            404 => response.Json<ApiV1AutomationsActivate404Error1>().As(AsApiV1AutomationsActivate404Error1),
            429 => response.Json<ApiV1AutomationsActivate429Error1>().As(AsApiV1AutomationsActivate429Error1),
            500 => response.Json<ApiV1AutomationsActivate500Error1>().As(AsApiV1AutomationsActivate500Error1),
            502 => response.Json<ApiV1AutomationsActivate502Error1>().As(AsApiV1AutomationsActivate502Error1),
            503 => response.Json<ApiV1AutomationsActivate503Error1>().As(AsApiV1AutomationsActivate503Error1),
            504 => response.Json<ApiV1AutomationsActivate504Error1>().As(AsApiV1AutomationsActivate504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationActivateFlowError> Response { get; } = new(Create);
}
