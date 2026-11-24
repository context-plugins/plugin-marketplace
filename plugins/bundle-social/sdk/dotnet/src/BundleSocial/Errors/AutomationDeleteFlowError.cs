using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationDeleteFlowError : ApiError
{
    private readonly Optional<ApiV1Automations400Error1> _apiV1Automations400Error1Value;

    private readonly Optional<ApiV1Automations401Error1> _apiV1Automations401Error1Value;

    private readonly Optional<ApiV1Automations403Error1> _apiV1Automations403Error1Value;

    private readonly Optional<ApiV1Automations404Error1> _apiV1Automations404Error1Value;

    private readonly Optional<ApiV1Automations429Error1> _apiV1Automations429Error1Value;

    private readonly Optional<ApiV1Automations500Error1> _apiV1Automations500Error1Value;

    private readonly Optional<ApiV1Automations502Error1> _apiV1Automations502Error1Value;

    private readonly Optional<ApiV1Automations503Error1> _apiV1Automations503Error1Value;

    private readonly Optional<ApiV1Automations504Error1> _apiV1Automations504Error1Value;

    private AutomationDeleteFlowError(Optional<ApiV1Automations400Error1> apiV1Automations400Error1Value,
        Optional<ApiV1Automations401Error1> apiV1Automations401Error1Value,
        Optional<ApiV1Automations403Error1> apiV1Automations403Error1Value,
        Optional<ApiV1Automations404Error1> apiV1Automations404Error1Value,
        Optional<ApiV1Automations429Error1> apiV1Automations429Error1Value,
        Optional<ApiV1Automations500Error1> apiV1Automations500Error1Value,
        Optional<ApiV1Automations502Error1> apiV1Automations502Error1Value,
        Optional<ApiV1Automations503Error1> apiV1Automations503Error1Value,
        Optional<ApiV1Automations504Error1> apiV1Automations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Automations400Error1Value = apiV1Automations400Error1Value;
        _apiV1Automations401Error1Value = apiV1Automations401Error1Value;
        _apiV1Automations403Error1Value = apiV1Automations403Error1Value;
        _apiV1Automations404Error1Value = apiV1Automations404Error1Value;
        _apiV1Automations429Error1Value = apiV1Automations429Error1Value;
        _apiV1Automations500Error1Value = apiV1Automations500Error1Value;
        _apiV1Automations502Error1Value = apiV1Automations502Error1Value;
        _apiV1Automations503Error1Value = apiV1Automations503Error1Value;
        _apiV1Automations504Error1Value = apiV1Automations504Error1Value;
    }

    private static AutomationDeleteFlowError AsApiV1Automations400Error1(ApiV1Automations400Error1 value) =>
        new(
            Optional<ApiV1Automations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations401Error1(ApiV1Automations401Error1 value) =>
        new(
            default,
            Optional<ApiV1Automations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations403Error1(ApiV1Automations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Automations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations404Error1(ApiV1Automations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Automations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations429Error1(ApiV1Automations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Automations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations500Error1(ApiV1Automations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Automations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations502Error1(ApiV1Automations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Automations502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations503Error1(ApiV1Automations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Automations503Error1>.Some(value),
            default,
            default);

    private static AutomationDeleteFlowError AsApiV1Automations504Error1(ApiV1Automations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Automations504Error1>.Some(value),
            default);

    private static AutomationDeleteFlowError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value) =>
        _apiV1Automations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value) =>
        _apiV1Automations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value) =>
        _apiV1Automations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value) =>
        _apiV1Automations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value) =>
        _apiV1Automations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value) =>
        _apiV1Automations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value) =>
        _apiV1Automations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value) =>
        _apiV1Automations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value) =>
        _apiV1Automations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Automations400Error1, TResult> onApiV1Automations400Error1,
        Func<ApiV1Automations401Error1, TResult> onApiV1Automations401Error1,
        Func<ApiV1Automations403Error1, TResult> onApiV1Automations403Error1,
        Func<ApiV1Automations404Error1, TResult> onApiV1Automations404Error1,
        Func<ApiV1Automations429Error1, TResult> onApiV1Automations429Error1,
        Func<ApiV1Automations500Error1, TResult> onApiV1Automations500Error1,
        Func<ApiV1Automations502Error1, TResult> onApiV1Automations502Error1,
        Func<ApiV1Automations503Error1, TResult> onApiV1Automations503Error1,
        Func<ApiV1Automations504Error1, TResult> onApiV1Automations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Automations400Error1(
                out var apiV1Automations400Error1Value) => onApiV1Automations400Error1(apiV1Automations400Error1Value),
            _ when TryGetApiV1Automations401Error1(
                out var apiV1Automations401Error1Value) => onApiV1Automations401Error1(apiV1Automations401Error1Value),
            _ when TryGetApiV1Automations403Error1(
                out var apiV1Automations403Error1Value) => onApiV1Automations403Error1(apiV1Automations403Error1Value),
            _ when TryGetApiV1Automations404Error1(
                out var apiV1Automations404Error1Value) => onApiV1Automations404Error1(apiV1Automations404Error1Value),
            _ when TryGetApiV1Automations429Error1(
                out var apiV1Automations429Error1Value) => onApiV1Automations429Error1(apiV1Automations429Error1Value),
            _ when TryGetApiV1Automations500Error1(
                out var apiV1Automations500Error1Value) => onApiV1Automations500Error1(apiV1Automations500Error1Value),
            _ when TryGetApiV1Automations502Error1(
                out var apiV1Automations502Error1Value) => onApiV1Automations502Error1(apiV1Automations502Error1Value),
            _ when TryGetApiV1Automations503Error1(
                out var apiV1Automations503Error1Value) => onApiV1Automations503Error1(apiV1Automations503Error1Value),
            _ when TryGetApiV1Automations504Error1(
                out var apiV1Automations504Error1Value) => onApiV1Automations504Error1(apiV1Automations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationDeleteFlowError)} holds no value.")
        };

    public void Match(Action<ApiV1Automations400Error1> onApiV1Automations400Error1,
        Action<ApiV1Automations401Error1> onApiV1Automations401Error1,
        Action<ApiV1Automations403Error1> onApiV1Automations403Error1,
        Action<ApiV1Automations404Error1> onApiV1Automations404Error1,
        Action<ApiV1Automations429Error1> onApiV1Automations429Error1,
        Action<ApiV1Automations500Error1> onApiV1Automations500Error1,
        Action<ApiV1Automations502Error1> onApiV1Automations502Error1,
        Action<ApiV1Automations503Error1> onApiV1Automations503Error1,
        Action<ApiV1Automations504Error1> onApiV1Automations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Automations400Error1(out var apiV1Automations400Error1Value)) onApiV1Automations400Error1(
            apiV1Automations400Error1Value);
        else if (TryGetApiV1Automations401Error1(out var apiV1Automations401Error1Value)) onApiV1Automations401Error1(
            apiV1Automations401Error1Value);
        else if (TryGetApiV1Automations403Error1(out var apiV1Automations403Error1Value)) onApiV1Automations403Error1(
            apiV1Automations403Error1Value);
        else if (TryGetApiV1Automations404Error1(out var apiV1Automations404Error1Value)) onApiV1Automations404Error1(
            apiV1Automations404Error1Value);
        else if (TryGetApiV1Automations429Error1(out var apiV1Automations429Error1Value)) onApiV1Automations429Error1(
            apiV1Automations429Error1Value);
        else if (TryGetApiV1Automations500Error1(out var apiV1Automations500Error1Value)) onApiV1Automations500Error1(
            apiV1Automations500Error1Value);
        else if (TryGetApiV1Automations502Error1(out var apiV1Automations502Error1Value)) onApiV1Automations502Error1(
            apiV1Automations502Error1Value);
        else if (TryGetApiV1Automations503Error1(out var apiV1Automations503Error1Value)) onApiV1Automations503Error1(
            apiV1Automations503Error1Value);
        else if (TryGetApiV1Automations504Error1(out var apiV1Automations504Error1Value)) onApiV1Automations504Error1(
            apiV1Automations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationDeleteFlowError)} holds no value.");
    }

    private static Task<AutomationDeleteFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Automations400Error1>().As(AsApiV1Automations400Error1),
            401 => response.Json<ApiV1Automations401Error1>().As(AsApiV1Automations401Error1),
            403 => response.Json<ApiV1Automations403Error1>().As(AsApiV1Automations403Error1),
            404 => response.Json<ApiV1Automations404Error1>().As(AsApiV1Automations404Error1),
            429 => response.Json<ApiV1Automations429Error1>().As(AsApiV1Automations429Error1),
            500 => response.Json<ApiV1Automations500Error1>().As(AsApiV1Automations500Error1),
            502 => response.Json<ApiV1Automations502Error1>().As(AsApiV1Automations502Error1),
            503 => response.Json<ApiV1Automations503Error1>().As(AsApiV1Automations503Error1),
            504 => response.Json<ApiV1Automations504Error1>().As(AsApiV1Automations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationDeleteFlowError> Response { get; } = new(Create);
}
