using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationGetFlowExecutionsError : ApiError
{
    private readonly Optional<ApiV1AutomationsExecutions400Error1> _apiV1AutomationsExecutions400Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions401Error1> _apiV1AutomationsExecutions401Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions403Error1> _apiV1AutomationsExecutions403Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions404Error1> _apiV1AutomationsExecutions404Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions429Error1> _apiV1AutomationsExecutions429Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions500Error1> _apiV1AutomationsExecutions500Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions502Error1> _apiV1AutomationsExecutions502Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions503Error1> _apiV1AutomationsExecutions503Error1Value;

    private readonly Optional<ApiV1AutomationsExecutions504Error1> _apiV1AutomationsExecutions504Error1Value;

    private AutomationGetFlowExecutionsError(Optional<ApiV1AutomationsExecutions400Error1> apiV1AutomationsExecutions400Error1Value,
        Optional<ApiV1AutomationsExecutions401Error1> apiV1AutomationsExecutions401Error1Value,
        Optional<ApiV1AutomationsExecutions403Error1> apiV1AutomationsExecutions403Error1Value,
        Optional<ApiV1AutomationsExecutions404Error1> apiV1AutomationsExecutions404Error1Value,
        Optional<ApiV1AutomationsExecutions429Error1> apiV1AutomationsExecutions429Error1Value,
        Optional<ApiV1AutomationsExecutions500Error1> apiV1AutomationsExecutions500Error1Value,
        Optional<ApiV1AutomationsExecutions502Error1> apiV1AutomationsExecutions502Error1Value,
        Optional<ApiV1AutomationsExecutions503Error1> apiV1AutomationsExecutions503Error1Value,
        Optional<ApiV1AutomationsExecutions504Error1> apiV1AutomationsExecutions504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsExecutions400Error1Value = apiV1AutomationsExecutions400Error1Value;
        _apiV1AutomationsExecutions401Error1Value = apiV1AutomationsExecutions401Error1Value;
        _apiV1AutomationsExecutions403Error1Value = apiV1AutomationsExecutions403Error1Value;
        _apiV1AutomationsExecutions404Error1Value = apiV1AutomationsExecutions404Error1Value;
        _apiV1AutomationsExecutions429Error1Value = apiV1AutomationsExecutions429Error1Value;
        _apiV1AutomationsExecutions500Error1Value = apiV1AutomationsExecutions500Error1Value;
        _apiV1AutomationsExecutions502Error1Value = apiV1AutomationsExecutions502Error1Value;
        _apiV1AutomationsExecutions503Error1Value = apiV1AutomationsExecutions503Error1Value;
        _apiV1AutomationsExecutions504Error1Value = apiV1AutomationsExecutions504Error1Value;
    }

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions400Error1(ApiV1AutomationsExecutions400Error1 value) =>
        new(
            Optional<ApiV1AutomationsExecutions400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions401Error1(ApiV1AutomationsExecutions401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsExecutions401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions403Error1(ApiV1AutomationsExecutions403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsExecutions403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions404Error1(ApiV1AutomationsExecutions404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions429Error1(ApiV1AutomationsExecutions429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions500Error1(ApiV1AutomationsExecutions500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions502Error1(ApiV1AutomationsExecutions502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions503Error1(ApiV1AutomationsExecutions503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions503Error1>.Some(value),
            default,
            default);

    private static AutomationGetFlowExecutionsError AsApiV1AutomationsExecutions504Error1(ApiV1AutomationsExecutions504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsExecutions504Error1>.Some(value),
            default);

    private static AutomationGetFlowExecutionsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsExecutions400Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions400Error1? value) =>
        _apiV1AutomationsExecutions400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions401Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions401Error1? value) =>
        _apiV1AutomationsExecutions401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions403Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions403Error1? value) =>
        _apiV1AutomationsExecutions403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions404Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions404Error1? value) =>
        _apiV1AutomationsExecutions404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions429Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions429Error1? value) =>
        _apiV1AutomationsExecutions429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions500Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions500Error1? value) =>
        _apiV1AutomationsExecutions500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions502Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions502Error1? value) =>
        _apiV1AutomationsExecutions502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions503Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions503Error1? value) =>
        _apiV1AutomationsExecutions503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsExecutions504Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions504Error1? value) =>
        _apiV1AutomationsExecutions504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsExecutions400Error1, TResult> onApiV1AutomationsExecutions400Error1,
        Func<ApiV1AutomationsExecutions401Error1, TResult> onApiV1AutomationsExecutions401Error1,
        Func<ApiV1AutomationsExecutions403Error1, TResult> onApiV1AutomationsExecutions403Error1,
        Func<ApiV1AutomationsExecutions404Error1, TResult> onApiV1AutomationsExecutions404Error1,
        Func<ApiV1AutomationsExecutions429Error1, TResult> onApiV1AutomationsExecutions429Error1,
        Func<ApiV1AutomationsExecutions500Error1, TResult> onApiV1AutomationsExecutions500Error1,
        Func<ApiV1AutomationsExecutions502Error1, TResult> onApiV1AutomationsExecutions502Error1,
        Func<ApiV1AutomationsExecutions503Error1, TResult> onApiV1AutomationsExecutions503Error1,
        Func<ApiV1AutomationsExecutions504Error1, TResult> onApiV1AutomationsExecutions504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsExecutions400Error1(
                out var apiV1AutomationsExecutions400Error1Value) => onApiV1AutomationsExecutions400Error1(
                apiV1AutomationsExecutions400Error1Value),
            _ when TryGetApiV1AutomationsExecutions401Error1(
                out var apiV1AutomationsExecutions401Error1Value) => onApiV1AutomationsExecutions401Error1(
                apiV1AutomationsExecutions401Error1Value),
            _ when TryGetApiV1AutomationsExecutions403Error1(
                out var apiV1AutomationsExecutions403Error1Value) => onApiV1AutomationsExecutions403Error1(
                apiV1AutomationsExecutions403Error1Value),
            _ when TryGetApiV1AutomationsExecutions404Error1(
                out var apiV1AutomationsExecutions404Error1Value) => onApiV1AutomationsExecutions404Error1(
                apiV1AutomationsExecutions404Error1Value),
            _ when TryGetApiV1AutomationsExecutions429Error1(
                out var apiV1AutomationsExecutions429Error1Value) => onApiV1AutomationsExecutions429Error1(
                apiV1AutomationsExecutions429Error1Value),
            _ when TryGetApiV1AutomationsExecutions500Error1(
                out var apiV1AutomationsExecutions500Error1Value) => onApiV1AutomationsExecutions500Error1(
                apiV1AutomationsExecutions500Error1Value),
            _ when TryGetApiV1AutomationsExecutions502Error1(
                out var apiV1AutomationsExecutions502Error1Value) => onApiV1AutomationsExecutions502Error1(
                apiV1AutomationsExecutions502Error1Value),
            _ when TryGetApiV1AutomationsExecutions503Error1(
                out var apiV1AutomationsExecutions503Error1Value) => onApiV1AutomationsExecutions503Error1(
                apiV1AutomationsExecutions503Error1Value),
            _ when TryGetApiV1AutomationsExecutions504Error1(
                out var apiV1AutomationsExecutions504Error1Value) => onApiV1AutomationsExecutions504Error1(
                apiV1AutomationsExecutions504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationGetFlowExecutionsError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsExecutions400Error1> onApiV1AutomationsExecutions400Error1,
        Action<ApiV1AutomationsExecutions401Error1> onApiV1AutomationsExecutions401Error1,
        Action<ApiV1AutomationsExecutions403Error1> onApiV1AutomationsExecutions403Error1,
        Action<ApiV1AutomationsExecutions404Error1> onApiV1AutomationsExecutions404Error1,
        Action<ApiV1AutomationsExecutions429Error1> onApiV1AutomationsExecutions429Error1,
        Action<ApiV1AutomationsExecutions500Error1> onApiV1AutomationsExecutions500Error1,
        Action<ApiV1AutomationsExecutions502Error1> onApiV1AutomationsExecutions502Error1,
        Action<ApiV1AutomationsExecutions503Error1> onApiV1AutomationsExecutions503Error1,
        Action<ApiV1AutomationsExecutions504Error1> onApiV1AutomationsExecutions504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsExecutions400Error1(
            out var apiV1AutomationsExecutions400Error1Value)) onApiV1AutomationsExecutions400Error1(
            apiV1AutomationsExecutions400Error1Value);
        else if (TryGetApiV1AutomationsExecutions401Error1(
            out var apiV1AutomationsExecutions401Error1Value)) onApiV1AutomationsExecutions401Error1(
            apiV1AutomationsExecutions401Error1Value);
        else if (TryGetApiV1AutomationsExecutions403Error1(
            out var apiV1AutomationsExecutions403Error1Value)) onApiV1AutomationsExecutions403Error1(
            apiV1AutomationsExecutions403Error1Value);
        else if (TryGetApiV1AutomationsExecutions404Error1(
            out var apiV1AutomationsExecutions404Error1Value)) onApiV1AutomationsExecutions404Error1(
            apiV1AutomationsExecutions404Error1Value);
        else if (TryGetApiV1AutomationsExecutions429Error1(
            out var apiV1AutomationsExecutions429Error1Value)) onApiV1AutomationsExecutions429Error1(
            apiV1AutomationsExecutions429Error1Value);
        else if (TryGetApiV1AutomationsExecutions500Error1(
            out var apiV1AutomationsExecutions500Error1Value)) onApiV1AutomationsExecutions500Error1(
            apiV1AutomationsExecutions500Error1Value);
        else if (TryGetApiV1AutomationsExecutions502Error1(
            out var apiV1AutomationsExecutions502Error1Value)) onApiV1AutomationsExecutions502Error1(
            apiV1AutomationsExecutions502Error1Value);
        else if (TryGetApiV1AutomationsExecutions503Error1(
            out var apiV1AutomationsExecutions503Error1Value)) onApiV1AutomationsExecutions503Error1(
            apiV1AutomationsExecutions503Error1Value);
        else if (TryGetApiV1AutomationsExecutions504Error1(
            out var apiV1AutomationsExecutions504Error1Value)) onApiV1AutomationsExecutions504Error1(
            apiV1AutomationsExecutions504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationGetFlowExecutionsError)} holds no value.");
    }

    private static Task<AutomationGetFlowExecutionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsExecutions400Error1>().As(AsApiV1AutomationsExecutions400Error1),
            401 => response.Json<ApiV1AutomationsExecutions401Error1>().As(AsApiV1AutomationsExecutions401Error1),
            403 => response.Json<ApiV1AutomationsExecutions403Error1>().As(AsApiV1AutomationsExecutions403Error1),
            404 => response.Json<ApiV1AutomationsExecutions404Error1>().As(AsApiV1AutomationsExecutions404Error1),
            429 => response.Json<ApiV1AutomationsExecutions429Error1>().As(AsApiV1AutomationsExecutions429Error1),
            500 => response.Json<ApiV1AutomationsExecutions500Error1>().As(AsApiV1AutomationsExecutions500Error1),
            502 => response.Json<ApiV1AutomationsExecutions502Error1>().As(AsApiV1AutomationsExecutions502Error1),
            503 => response.Json<ApiV1AutomationsExecutions503Error1>().As(AsApiV1AutomationsExecutions503Error1),
            504 => response.Json<ApiV1AutomationsExecutions504Error1>().As(AsApiV1AutomationsExecutions504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationGetFlowExecutionsError> Response { get; } = new(Create);
}
