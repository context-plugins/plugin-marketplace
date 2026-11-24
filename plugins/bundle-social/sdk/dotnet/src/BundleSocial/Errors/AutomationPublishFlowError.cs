using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationPublishFlowError : ApiError
{
    private readonly Optional<ApiV1AutomationsPublish400Error1> _apiV1AutomationsPublish400Error1Value;

    private readonly Optional<ApiV1AutomationsPublish401Error1> _apiV1AutomationsPublish401Error1Value;

    private readonly Optional<ApiV1AutomationsPublish403Error1> _apiV1AutomationsPublish403Error1Value;

    private readonly Optional<ApiV1AutomationsPublish404Error1> _apiV1AutomationsPublish404Error1Value;

    private readonly Optional<ApiV1AutomationsPublish429Error1> _apiV1AutomationsPublish429Error1Value;

    private readonly Optional<ApiV1AutomationsPublish500Error1> _apiV1AutomationsPublish500Error1Value;

    private readonly Optional<ApiV1AutomationsPublish502Error1> _apiV1AutomationsPublish502Error1Value;

    private readonly Optional<ApiV1AutomationsPublish503Error1> _apiV1AutomationsPublish503Error1Value;

    private readonly Optional<ApiV1AutomationsPublish504Error1> _apiV1AutomationsPublish504Error1Value;

    private AutomationPublishFlowError(Optional<ApiV1AutomationsPublish400Error1> apiV1AutomationsPublish400Error1Value,
        Optional<ApiV1AutomationsPublish401Error1> apiV1AutomationsPublish401Error1Value,
        Optional<ApiV1AutomationsPublish403Error1> apiV1AutomationsPublish403Error1Value,
        Optional<ApiV1AutomationsPublish404Error1> apiV1AutomationsPublish404Error1Value,
        Optional<ApiV1AutomationsPublish429Error1> apiV1AutomationsPublish429Error1Value,
        Optional<ApiV1AutomationsPublish500Error1> apiV1AutomationsPublish500Error1Value,
        Optional<ApiV1AutomationsPublish502Error1> apiV1AutomationsPublish502Error1Value,
        Optional<ApiV1AutomationsPublish503Error1> apiV1AutomationsPublish503Error1Value,
        Optional<ApiV1AutomationsPublish504Error1> apiV1AutomationsPublish504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsPublish400Error1Value = apiV1AutomationsPublish400Error1Value;
        _apiV1AutomationsPublish401Error1Value = apiV1AutomationsPublish401Error1Value;
        _apiV1AutomationsPublish403Error1Value = apiV1AutomationsPublish403Error1Value;
        _apiV1AutomationsPublish404Error1Value = apiV1AutomationsPublish404Error1Value;
        _apiV1AutomationsPublish429Error1Value = apiV1AutomationsPublish429Error1Value;
        _apiV1AutomationsPublish500Error1Value = apiV1AutomationsPublish500Error1Value;
        _apiV1AutomationsPublish502Error1Value = apiV1AutomationsPublish502Error1Value;
        _apiV1AutomationsPublish503Error1Value = apiV1AutomationsPublish503Error1Value;
        _apiV1AutomationsPublish504Error1Value = apiV1AutomationsPublish504Error1Value;
    }

    private static AutomationPublishFlowError AsApiV1AutomationsPublish400Error1(ApiV1AutomationsPublish400Error1 value) =>
        new(
            Optional<ApiV1AutomationsPublish400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish401Error1(ApiV1AutomationsPublish401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsPublish401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish403Error1(ApiV1AutomationsPublish403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsPublish403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish404Error1(ApiV1AutomationsPublish404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish429Error1(ApiV1AutomationsPublish429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish500Error1(ApiV1AutomationsPublish500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish502Error1(ApiV1AutomationsPublish502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish503Error1(ApiV1AutomationsPublish503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish503Error1>.Some(value),
            default,
            default);

    private static AutomationPublishFlowError AsApiV1AutomationsPublish504Error1(ApiV1AutomationsPublish504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsPublish504Error1>.Some(value),
            default);

    private static AutomationPublishFlowError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsPublish400Error1([NotNullWhen(true)] out ApiV1AutomationsPublish400Error1? value) =>
        _apiV1AutomationsPublish400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish401Error1([NotNullWhen(true)] out ApiV1AutomationsPublish401Error1? value) =>
        _apiV1AutomationsPublish401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish403Error1([NotNullWhen(true)] out ApiV1AutomationsPublish403Error1? value) =>
        _apiV1AutomationsPublish403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish404Error1([NotNullWhen(true)] out ApiV1AutomationsPublish404Error1? value) =>
        _apiV1AutomationsPublish404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish429Error1([NotNullWhen(true)] out ApiV1AutomationsPublish429Error1? value) =>
        _apiV1AutomationsPublish429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish500Error1([NotNullWhen(true)] out ApiV1AutomationsPublish500Error1? value) =>
        _apiV1AutomationsPublish500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish502Error1([NotNullWhen(true)] out ApiV1AutomationsPublish502Error1? value) =>
        _apiV1AutomationsPublish502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish503Error1([NotNullWhen(true)] out ApiV1AutomationsPublish503Error1? value) =>
        _apiV1AutomationsPublish503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsPublish504Error1([NotNullWhen(true)] out ApiV1AutomationsPublish504Error1? value) =>
        _apiV1AutomationsPublish504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsPublish400Error1, TResult> onApiV1AutomationsPublish400Error1,
        Func<ApiV1AutomationsPublish401Error1, TResult> onApiV1AutomationsPublish401Error1,
        Func<ApiV1AutomationsPublish403Error1, TResult> onApiV1AutomationsPublish403Error1,
        Func<ApiV1AutomationsPublish404Error1, TResult> onApiV1AutomationsPublish404Error1,
        Func<ApiV1AutomationsPublish429Error1, TResult> onApiV1AutomationsPublish429Error1,
        Func<ApiV1AutomationsPublish500Error1, TResult> onApiV1AutomationsPublish500Error1,
        Func<ApiV1AutomationsPublish502Error1, TResult> onApiV1AutomationsPublish502Error1,
        Func<ApiV1AutomationsPublish503Error1, TResult> onApiV1AutomationsPublish503Error1,
        Func<ApiV1AutomationsPublish504Error1, TResult> onApiV1AutomationsPublish504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsPublish400Error1(
                out var apiV1AutomationsPublish400Error1Value) => onApiV1AutomationsPublish400Error1(
                apiV1AutomationsPublish400Error1Value),
            _ when TryGetApiV1AutomationsPublish401Error1(
                out var apiV1AutomationsPublish401Error1Value) => onApiV1AutomationsPublish401Error1(
                apiV1AutomationsPublish401Error1Value),
            _ when TryGetApiV1AutomationsPublish403Error1(
                out var apiV1AutomationsPublish403Error1Value) => onApiV1AutomationsPublish403Error1(
                apiV1AutomationsPublish403Error1Value),
            _ when TryGetApiV1AutomationsPublish404Error1(
                out var apiV1AutomationsPublish404Error1Value) => onApiV1AutomationsPublish404Error1(
                apiV1AutomationsPublish404Error1Value),
            _ when TryGetApiV1AutomationsPublish429Error1(
                out var apiV1AutomationsPublish429Error1Value) => onApiV1AutomationsPublish429Error1(
                apiV1AutomationsPublish429Error1Value),
            _ when TryGetApiV1AutomationsPublish500Error1(
                out var apiV1AutomationsPublish500Error1Value) => onApiV1AutomationsPublish500Error1(
                apiV1AutomationsPublish500Error1Value),
            _ when TryGetApiV1AutomationsPublish502Error1(
                out var apiV1AutomationsPublish502Error1Value) => onApiV1AutomationsPublish502Error1(
                apiV1AutomationsPublish502Error1Value),
            _ when TryGetApiV1AutomationsPublish503Error1(
                out var apiV1AutomationsPublish503Error1Value) => onApiV1AutomationsPublish503Error1(
                apiV1AutomationsPublish503Error1Value),
            _ when TryGetApiV1AutomationsPublish504Error1(
                out var apiV1AutomationsPublish504Error1Value) => onApiV1AutomationsPublish504Error1(
                apiV1AutomationsPublish504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationPublishFlowError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsPublish400Error1> onApiV1AutomationsPublish400Error1,
        Action<ApiV1AutomationsPublish401Error1> onApiV1AutomationsPublish401Error1,
        Action<ApiV1AutomationsPublish403Error1> onApiV1AutomationsPublish403Error1,
        Action<ApiV1AutomationsPublish404Error1> onApiV1AutomationsPublish404Error1,
        Action<ApiV1AutomationsPublish429Error1> onApiV1AutomationsPublish429Error1,
        Action<ApiV1AutomationsPublish500Error1> onApiV1AutomationsPublish500Error1,
        Action<ApiV1AutomationsPublish502Error1> onApiV1AutomationsPublish502Error1,
        Action<ApiV1AutomationsPublish503Error1> onApiV1AutomationsPublish503Error1,
        Action<ApiV1AutomationsPublish504Error1> onApiV1AutomationsPublish504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsPublish400Error1(
            out var apiV1AutomationsPublish400Error1Value)) onApiV1AutomationsPublish400Error1(
            apiV1AutomationsPublish400Error1Value);
        else if (TryGetApiV1AutomationsPublish401Error1(
            out var apiV1AutomationsPublish401Error1Value)) onApiV1AutomationsPublish401Error1(
            apiV1AutomationsPublish401Error1Value);
        else if (TryGetApiV1AutomationsPublish403Error1(
            out var apiV1AutomationsPublish403Error1Value)) onApiV1AutomationsPublish403Error1(
            apiV1AutomationsPublish403Error1Value);
        else if (TryGetApiV1AutomationsPublish404Error1(
            out var apiV1AutomationsPublish404Error1Value)) onApiV1AutomationsPublish404Error1(
            apiV1AutomationsPublish404Error1Value);
        else if (TryGetApiV1AutomationsPublish429Error1(
            out var apiV1AutomationsPublish429Error1Value)) onApiV1AutomationsPublish429Error1(
            apiV1AutomationsPublish429Error1Value);
        else if (TryGetApiV1AutomationsPublish500Error1(
            out var apiV1AutomationsPublish500Error1Value)) onApiV1AutomationsPublish500Error1(
            apiV1AutomationsPublish500Error1Value);
        else if (TryGetApiV1AutomationsPublish502Error1(
            out var apiV1AutomationsPublish502Error1Value)) onApiV1AutomationsPublish502Error1(
            apiV1AutomationsPublish502Error1Value);
        else if (TryGetApiV1AutomationsPublish503Error1(
            out var apiV1AutomationsPublish503Error1Value)) onApiV1AutomationsPublish503Error1(
            apiV1AutomationsPublish503Error1Value);
        else if (TryGetApiV1AutomationsPublish504Error1(
            out var apiV1AutomationsPublish504Error1Value)) onApiV1AutomationsPublish504Error1(
            apiV1AutomationsPublish504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationPublishFlowError)} holds no value.");
    }

    private static Task<AutomationPublishFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsPublish400Error1>().As(AsApiV1AutomationsPublish400Error1),
            401 => response.Json<ApiV1AutomationsPublish401Error1>().As(AsApiV1AutomationsPublish401Error1),
            403 => response.Json<ApiV1AutomationsPublish403Error1>().As(AsApiV1AutomationsPublish403Error1),
            404 => response.Json<ApiV1AutomationsPublish404Error1>().As(AsApiV1AutomationsPublish404Error1),
            429 => response.Json<ApiV1AutomationsPublish429Error1>().As(AsApiV1AutomationsPublish429Error1),
            500 => response.Json<ApiV1AutomationsPublish500Error1>().As(AsApiV1AutomationsPublish500Error1),
            502 => response.Json<ApiV1AutomationsPublish502Error1>().As(AsApiV1AutomationsPublish502Error1),
            503 => response.Json<ApiV1AutomationsPublish503Error1>().As(AsApiV1AutomationsPublish503Error1),
            504 => response.Json<ApiV1AutomationsPublish504Error1>().As(AsApiV1AutomationsPublish504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationPublishFlowError> Response { get; } = new(Create);
}
