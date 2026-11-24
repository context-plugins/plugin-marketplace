using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationGetExecutionError : ApiError
{
    private readonly Optional<ApiV1AutomationExecutions400Error1> _apiV1AutomationExecutions400Error1Value;

    private readonly Optional<ApiV1AutomationExecutions401Error1> _apiV1AutomationExecutions401Error1Value;

    private readonly Optional<ApiV1AutomationExecutions403Error1> _apiV1AutomationExecutions403Error1Value;

    private readonly Optional<ApiV1AutomationExecutions404Error1> _apiV1AutomationExecutions404Error1Value;

    private readonly Optional<ApiV1AutomationExecutions429Error1> _apiV1AutomationExecutions429Error1Value;

    private readonly Optional<ApiV1AutomationExecutions500Error1> _apiV1AutomationExecutions500Error1Value;

    private readonly Optional<ApiV1AutomationExecutions502Error1> _apiV1AutomationExecutions502Error1Value;

    private readonly Optional<ApiV1AutomationExecutions503Error1> _apiV1AutomationExecutions503Error1Value;

    private readonly Optional<ApiV1AutomationExecutions504Error1> _apiV1AutomationExecutions504Error1Value;

    private AutomationGetExecutionError(Optional<ApiV1AutomationExecutions400Error1> apiV1AutomationExecutions400Error1Value,
        Optional<ApiV1AutomationExecutions401Error1> apiV1AutomationExecutions401Error1Value,
        Optional<ApiV1AutomationExecutions403Error1> apiV1AutomationExecutions403Error1Value,
        Optional<ApiV1AutomationExecutions404Error1> apiV1AutomationExecutions404Error1Value,
        Optional<ApiV1AutomationExecutions429Error1> apiV1AutomationExecutions429Error1Value,
        Optional<ApiV1AutomationExecutions500Error1> apiV1AutomationExecutions500Error1Value,
        Optional<ApiV1AutomationExecutions502Error1> apiV1AutomationExecutions502Error1Value,
        Optional<ApiV1AutomationExecutions503Error1> apiV1AutomationExecutions503Error1Value,
        Optional<ApiV1AutomationExecutions504Error1> apiV1AutomationExecutions504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationExecutions400Error1Value = apiV1AutomationExecutions400Error1Value;
        _apiV1AutomationExecutions401Error1Value = apiV1AutomationExecutions401Error1Value;
        _apiV1AutomationExecutions403Error1Value = apiV1AutomationExecutions403Error1Value;
        _apiV1AutomationExecutions404Error1Value = apiV1AutomationExecutions404Error1Value;
        _apiV1AutomationExecutions429Error1Value = apiV1AutomationExecutions429Error1Value;
        _apiV1AutomationExecutions500Error1Value = apiV1AutomationExecutions500Error1Value;
        _apiV1AutomationExecutions502Error1Value = apiV1AutomationExecutions502Error1Value;
        _apiV1AutomationExecutions503Error1Value = apiV1AutomationExecutions503Error1Value;
        _apiV1AutomationExecutions504Error1Value = apiV1AutomationExecutions504Error1Value;
    }

    private static AutomationGetExecutionError AsApiV1AutomationExecutions400Error1(ApiV1AutomationExecutions400Error1 value) =>
        new(
            Optional<ApiV1AutomationExecutions400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions401Error1(ApiV1AutomationExecutions401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationExecutions401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions403Error1(ApiV1AutomationExecutions403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationExecutions403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions404Error1(ApiV1AutomationExecutions404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions429Error1(ApiV1AutomationExecutions429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions500Error1(ApiV1AutomationExecutions500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions502Error1(ApiV1AutomationExecutions502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions503Error1(ApiV1AutomationExecutions503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions503Error1>.Some(value),
            default,
            default);

    private static AutomationGetExecutionError AsApiV1AutomationExecutions504Error1(ApiV1AutomationExecutions504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationExecutions504Error1>.Some(value),
            default);

    private static AutomationGetExecutionError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationExecutions400Error1([NotNullWhen(true)] out ApiV1AutomationExecutions400Error1? value) =>
        _apiV1AutomationExecutions400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions401Error1([NotNullWhen(true)] out ApiV1AutomationExecutions401Error1? value) =>
        _apiV1AutomationExecutions401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions403Error1([NotNullWhen(true)] out ApiV1AutomationExecutions403Error1? value) =>
        _apiV1AutomationExecutions403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions404Error1([NotNullWhen(true)] out ApiV1AutomationExecutions404Error1? value) =>
        _apiV1AutomationExecutions404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions429Error1([NotNullWhen(true)] out ApiV1AutomationExecutions429Error1? value) =>
        _apiV1AutomationExecutions429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions500Error1([NotNullWhen(true)] out ApiV1AutomationExecutions500Error1? value) =>
        _apiV1AutomationExecutions500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions502Error1([NotNullWhen(true)] out ApiV1AutomationExecutions502Error1? value) =>
        _apiV1AutomationExecutions502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions503Error1([NotNullWhen(true)] out ApiV1AutomationExecutions503Error1? value) =>
        _apiV1AutomationExecutions503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationExecutions504Error1([NotNullWhen(true)] out ApiV1AutomationExecutions504Error1? value) =>
        _apiV1AutomationExecutions504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationExecutions400Error1, TResult> onApiV1AutomationExecutions400Error1,
        Func<ApiV1AutomationExecutions401Error1, TResult> onApiV1AutomationExecutions401Error1,
        Func<ApiV1AutomationExecutions403Error1, TResult> onApiV1AutomationExecutions403Error1,
        Func<ApiV1AutomationExecutions404Error1, TResult> onApiV1AutomationExecutions404Error1,
        Func<ApiV1AutomationExecutions429Error1, TResult> onApiV1AutomationExecutions429Error1,
        Func<ApiV1AutomationExecutions500Error1, TResult> onApiV1AutomationExecutions500Error1,
        Func<ApiV1AutomationExecutions502Error1, TResult> onApiV1AutomationExecutions502Error1,
        Func<ApiV1AutomationExecutions503Error1, TResult> onApiV1AutomationExecutions503Error1,
        Func<ApiV1AutomationExecutions504Error1, TResult> onApiV1AutomationExecutions504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationExecutions400Error1(
                out var apiV1AutomationExecutions400Error1Value) => onApiV1AutomationExecutions400Error1(
                apiV1AutomationExecutions400Error1Value),
            _ when TryGetApiV1AutomationExecutions401Error1(
                out var apiV1AutomationExecutions401Error1Value) => onApiV1AutomationExecutions401Error1(
                apiV1AutomationExecutions401Error1Value),
            _ when TryGetApiV1AutomationExecutions403Error1(
                out var apiV1AutomationExecutions403Error1Value) => onApiV1AutomationExecutions403Error1(
                apiV1AutomationExecutions403Error1Value),
            _ when TryGetApiV1AutomationExecutions404Error1(
                out var apiV1AutomationExecutions404Error1Value) => onApiV1AutomationExecutions404Error1(
                apiV1AutomationExecutions404Error1Value),
            _ when TryGetApiV1AutomationExecutions429Error1(
                out var apiV1AutomationExecutions429Error1Value) => onApiV1AutomationExecutions429Error1(
                apiV1AutomationExecutions429Error1Value),
            _ when TryGetApiV1AutomationExecutions500Error1(
                out var apiV1AutomationExecutions500Error1Value) => onApiV1AutomationExecutions500Error1(
                apiV1AutomationExecutions500Error1Value),
            _ when TryGetApiV1AutomationExecutions502Error1(
                out var apiV1AutomationExecutions502Error1Value) => onApiV1AutomationExecutions502Error1(
                apiV1AutomationExecutions502Error1Value),
            _ when TryGetApiV1AutomationExecutions503Error1(
                out var apiV1AutomationExecutions503Error1Value) => onApiV1AutomationExecutions503Error1(
                apiV1AutomationExecutions503Error1Value),
            _ when TryGetApiV1AutomationExecutions504Error1(
                out var apiV1AutomationExecutions504Error1Value) => onApiV1AutomationExecutions504Error1(
                apiV1AutomationExecutions504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationGetExecutionError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationExecutions400Error1> onApiV1AutomationExecutions400Error1,
        Action<ApiV1AutomationExecutions401Error1> onApiV1AutomationExecutions401Error1,
        Action<ApiV1AutomationExecutions403Error1> onApiV1AutomationExecutions403Error1,
        Action<ApiV1AutomationExecutions404Error1> onApiV1AutomationExecutions404Error1,
        Action<ApiV1AutomationExecutions429Error1> onApiV1AutomationExecutions429Error1,
        Action<ApiV1AutomationExecutions500Error1> onApiV1AutomationExecutions500Error1,
        Action<ApiV1AutomationExecutions502Error1> onApiV1AutomationExecutions502Error1,
        Action<ApiV1AutomationExecutions503Error1> onApiV1AutomationExecutions503Error1,
        Action<ApiV1AutomationExecutions504Error1> onApiV1AutomationExecutions504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationExecutions400Error1(
            out var apiV1AutomationExecutions400Error1Value)) onApiV1AutomationExecutions400Error1(
            apiV1AutomationExecutions400Error1Value);
        else if (TryGetApiV1AutomationExecutions401Error1(
            out var apiV1AutomationExecutions401Error1Value)) onApiV1AutomationExecutions401Error1(
            apiV1AutomationExecutions401Error1Value);
        else if (TryGetApiV1AutomationExecutions403Error1(
            out var apiV1AutomationExecutions403Error1Value)) onApiV1AutomationExecutions403Error1(
            apiV1AutomationExecutions403Error1Value);
        else if (TryGetApiV1AutomationExecutions404Error1(
            out var apiV1AutomationExecutions404Error1Value)) onApiV1AutomationExecutions404Error1(
            apiV1AutomationExecutions404Error1Value);
        else if (TryGetApiV1AutomationExecutions429Error1(
            out var apiV1AutomationExecutions429Error1Value)) onApiV1AutomationExecutions429Error1(
            apiV1AutomationExecutions429Error1Value);
        else if (TryGetApiV1AutomationExecutions500Error1(
            out var apiV1AutomationExecutions500Error1Value)) onApiV1AutomationExecutions500Error1(
            apiV1AutomationExecutions500Error1Value);
        else if (TryGetApiV1AutomationExecutions502Error1(
            out var apiV1AutomationExecutions502Error1Value)) onApiV1AutomationExecutions502Error1(
            apiV1AutomationExecutions502Error1Value);
        else if (TryGetApiV1AutomationExecutions503Error1(
            out var apiV1AutomationExecutions503Error1Value)) onApiV1AutomationExecutions503Error1(
            apiV1AutomationExecutions503Error1Value);
        else if (TryGetApiV1AutomationExecutions504Error1(
            out var apiV1AutomationExecutions504Error1Value)) onApiV1AutomationExecutions504Error1(
            apiV1AutomationExecutions504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationGetExecutionError)} holds no value.");
    }

    private static Task<AutomationGetExecutionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationExecutions400Error1>().As(AsApiV1AutomationExecutions400Error1),
            401 => response.Json<ApiV1AutomationExecutions401Error1>().As(AsApiV1AutomationExecutions401Error1),
            403 => response.Json<ApiV1AutomationExecutions403Error1>().As(AsApiV1AutomationExecutions403Error1),
            404 => response.Json<ApiV1AutomationExecutions404Error1>().As(AsApiV1AutomationExecutions404Error1),
            429 => response.Json<ApiV1AutomationExecutions429Error1>().As(AsApiV1AutomationExecutions429Error1),
            500 => response.Json<ApiV1AutomationExecutions500Error1>().As(AsApiV1AutomationExecutions500Error1),
            502 => response.Json<ApiV1AutomationExecutions502Error1>().As(AsApiV1AutomationExecutions502Error1),
            503 => response.Json<ApiV1AutomationExecutions503Error1>().As(AsApiV1AutomationExecutions503Error1),
            504 => response.Json<ApiV1AutomationExecutions504Error1>().As(AsApiV1AutomationExecutions504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationGetExecutionError> Response { get; } = new(Create);
}
