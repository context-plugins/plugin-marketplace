using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationTestFlowError : ApiError
{
    private readonly Optional<ApiV1AutomationsTest400Error1> _apiV1AutomationsTest400Error1Value;

    private readonly Optional<ApiV1AutomationsTest401Error1> _apiV1AutomationsTest401Error1Value;

    private readonly Optional<ApiV1AutomationsTest403Error1> _apiV1AutomationsTest403Error1Value;

    private readonly Optional<ApiV1AutomationsTest404Error1> _apiV1AutomationsTest404Error1Value;

    private readonly Optional<ApiV1AutomationsTest429Error1> _apiV1AutomationsTest429Error1Value;

    private readonly Optional<ApiV1AutomationsTest500Error1> _apiV1AutomationsTest500Error1Value;

    private readonly Optional<ApiV1AutomationsTest502Error1> _apiV1AutomationsTest502Error1Value;

    private readonly Optional<ApiV1AutomationsTest503Error1> _apiV1AutomationsTest503Error1Value;

    private readonly Optional<ApiV1AutomationsTest504Error1> _apiV1AutomationsTest504Error1Value;

    private AutomationTestFlowError(Optional<ApiV1AutomationsTest400Error1> apiV1AutomationsTest400Error1Value,
        Optional<ApiV1AutomationsTest401Error1> apiV1AutomationsTest401Error1Value,
        Optional<ApiV1AutomationsTest403Error1> apiV1AutomationsTest403Error1Value,
        Optional<ApiV1AutomationsTest404Error1> apiV1AutomationsTest404Error1Value,
        Optional<ApiV1AutomationsTest429Error1> apiV1AutomationsTest429Error1Value,
        Optional<ApiV1AutomationsTest500Error1> apiV1AutomationsTest500Error1Value,
        Optional<ApiV1AutomationsTest502Error1> apiV1AutomationsTest502Error1Value,
        Optional<ApiV1AutomationsTest503Error1> apiV1AutomationsTest503Error1Value,
        Optional<ApiV1AutomationsTest504Error1> apiV1AutomationsTest504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationsTest400Error1Value = apiV1AutomationsTest400Error1Value;
        _apiV1AutomationsTest401Error1Value = apiV1AutomationsTest401Error1Value;
        _apiV1AutomationsTest403Error1Value = apiV1AutomationsTest403Error1Value;
        _apiV1AutomationsTest404Error1Value = apiV1AutomationsTest404Error1Value;
        _apiV1AutomationsTest429Error1Value = apiV1AutomationsTest429Error1Value;
        _apiV1AutomationsTest500Error1Value = apiV1AutomationsTest500Error1Value;
        _apiV1AutomationsTest502Error1Value = apiV1AutomationsTest502Error1Value;
        _apiV1AutomationsTest503Error1Value = apiV1AutomationsTest503Error1Value;
        _apiV1AutomationsTest504Error1Value = apiV1AutomationsTest504Error1Value;
    }

    private static AutomationTestFlowError AsApiV1AutomationsTest400Error1(ApiV1AutomationsTest400Error1 value) =>
        new(
            Optional<ApiV1AutomationsTest400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest401Error1(ApiV1AutomationsTest401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationsTest401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest403Error1(ApiV1AutomationsTest403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationsTest403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest404Error1(ApiV1AutomationsTest404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest429Error1(ApiV1AutomationsTest429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest500Error1(ApiV1AutomationsTest500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest502Error1(ApiV1AutomationsTest502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest503Error1(ApiV1AutomationsTest503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest503Error1>.Some(value),
            default,
            default);

    private static AutomationTestFlowError AsApiV1AutomationsTest504Error1(ApiV1AutomationsTest504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationsTest504Error1>.Some(value),
            default);

    private static AutomationTestFlowError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationsTest400Error1([NotNullWhen(true)] out ApiV1AutomationsTest400Error1? value) =>
        _apiV1AutomationsTest400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest401Error1([NotNullWhen(true)] out ApiV1AutomationsTest401Error1? value) =>
        _apiV1AutomationsTest401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest403Error1([NotNullWhen(true)] out ApiV1AutomationsTest403Error1? value) =>
        _apiV1AutomationsTest403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest404Error1([NotNullWhen(true)] out ApiV1AutomationsTest404Error1? value) =>
        _apiV1AutomationsTest404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest429Error1([NotNullWhen(true)] out ApiV1AutomationsTest429Error1? value) =>
        _apiV1AutomationsTest429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest500Error1([NotNullWhen(true)] out ApiV1AutomationsTest500Error1? value) =>
        _apiV1AutomationsTest500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest502Error1([NotNullWhen(true)] out ApiV1AutomationsTest502Error1? value) =>
        _apiV1AutomationsTest502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest503Error1([NotNullWhen(true)] out ApiV1AutomationsTest503Error1? value) =>
        _apiV1AutomationsTest503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationsTest504Error1([NotNullWhen(true)] out ApiV1AutomationsTest504Error1? value) =>
        _apiV1AutomationsTest504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationsTest400Error1, TResult> onApiV1AutomationsTest400Error1,
        Func<ApiV1AutomationsTest401Error1, TResult> onApiV1AutomationsTest401Error1,
        Func<ApiV1AutomationsTest403Error1, TResult> onApiV1AutomationsTest403Error1,
        Func<ApiV1AutomationsTest404Error1, TResult> onApiV1AutomationsTest404Error1,
        Func<ApiV1AutomationsTest429Error1, TResult> onApiV1AutomationsTest429Error1,
        Func<ApiV1AutomationsTest500Error1, TResult> onApiV1AutomationsTest500Error1,
        Func<ApiV1AutomationsTest502Error1, TResult> onApiV1AutomationsTest502Error1,
        Func<ApiV1AutomationsTest503Error1, TResult> onApiV1AutomationsTest503Error1,
        Func<ApiV1AutomationsTest504Error1, TResult> onApiV1AutomationsTest504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationsTest400Error1(
                out var apiV1AutomationsTest400Error1Value) => onApiV1AutomationsTest400Error1(
                apiV1AutomationsTest400Error1Value),
            _ when TryGetApiV1AutomationsTest401Error1(
                out var apiV1AutomationsTest401Error1Value) => onApiV1AutomationsTest401Error1(
                apiV1AutomationsTest401Error1Value),
            _ when TryGetApiV1AutomationsTest403Error1(
                out var apiV1AutomationsTest403Error1Value) => onApiV1AutomationsTest403Error1(
                apiV1AutomationsTest403Error1Value),
            _ when TryGetApiV1AutomationsTest404Error1(
                out var apiV1AutomationsTest404Error1Value) => onApiV1AutomationsTest404Error1(
                apiV1AutomationsTest404Error1Value),
            _ when TryGetApiV1AutomationsTest429Error1(
                out var apiV1AutomationsTest429Error1Value) => onApiV1AutomationsTest429Error1(
                apiV1AutomationsTest429Error1Value),
            _ when TryGetApiV1AutomationsTest500Error1(
                out var apiV1AutomationsTest500Error1Value) => onApiV1AutomationsTest500Error1(
                apiV1AutomationsTest500Error1Value),
            _ when TryGetApiV1AutomationsTest502Error1(
                out var apiV1AutomationsTest502Error1Value) => onApiV1AutomationsTest502Error1(
                apiV1AutomationsTest502Error1Value),
            _ when TryGetApiV1AutomationsTest503Error1(
                out var apiV1AutomationsTest503Error1Value) => onApiV1AutomationsTest503Error1(
                apiV1AutomationsTest503Error1Value),
            _ when TryGetApiV1AutomationsTest504Error1(
                out var apiV1AutomationsTest504Error1Value) => onApiV1AutomationsTest504Error1(
                apiV1AutomationsTest504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationTestFlowError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationsTest400Error1> onApiV1AutomationsTest400Error1,
        Action<ApiV1AutomationsTest401Error1> onApiV1AutomationsTest401Error1,
        Action<ApiV1AutomationsTest403Error1> onApiV1AutomationsTest403Error1,
        Action<ApiV1AutomationsTest404Error1> onApiV1AutomationsTest404Error1,
        Action<ApiV1AutomationsTest429Error1> onApiV1AutomationsTest429Error1,
        Action<ApiV1AutomationsTest500Error1> onApiV1AutomationsTest500Error1,
        Action<ApiV1AutomationsTest502Error1> onApiV1AutomationsTest502Error1,
        Action<ApiV1AutomationsTest503Error1> onApiV1AutomationsTest503Error1,
        Action<ApiV1AutomationsTest504Error1> onApiV1AutomationsTest504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationsTest400Error1(
            out var apiV1AutomationsTest400Error1Value)) onApiV1AutomationsTest400Error1(
            apiV1AutomationsTest400Error1Value);
        else if (TryGetApiV1AutomationsTest401Error1(
            out var apiV1AutomationsTest401Error1Value)) onApiV1AutomationsTest401Error1(
            apiV1AutomationsTest401Error1Value);
        else if (TryGetApiV1AutomationsTest403Error1(
            out var apiV1AutomationsTest403Error1Value)) onApiV1AutomationsTest403Error1(
            apiV1AutomationsTest403Error1Value);
        else if (TryGetApiV1AutomationsTest404Error1(
            out var apiV1AutomationsTest404Error1Value)) onApiV1AutomationsTest404Error1(
            apiV1AutomationsTest404Error1Value);
        else if (TryGetApiV1AutomationsTest429Error1(
            out var apiV1AutomationsTest429Error1Value)) onApiV1AutomationsTest429Error1(
            apiV1AutomationsTest429Error1Value);
        else if (TryGetApiV1AutomationsTest500Error1(
            out var apiV1AutomationsTest500Error1Value)) onApiV1AutomationsTest500Error1(
            apiV1AutomationsTest500Error1Value);
        else if (TryGetApiV1AutomationsTest502Error1(
            out var apiV1AutomationsTest502Error1Value)) onApiV1AutomationsTest502Error1(
            apiV1AutomationsTest502Error1Value);
        else if (TryGetApiV1AutomationsTest503Error1(
            out var apiV1AutomationsTest503Error1Value)) onApiV1AutomationsTest503Error1(
            apiV1AutomationsTest503Error1Value);
        else if (TryGetApiV1AutomationsTest504Error1(
            out var apiV1AutomationsTest504Error1Value)) onApiV1AutomationsTest504Error1(
            apiV1AutomationsTest504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationTestFlowError)} holds no value.");
    }

    private static Task<AutomationTestFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationsTest400Error1>().As(AsApiV1AutomationsTest400Error1),
            401 => response.Json<ApiV1AutomationsTest401Error1>().As(AsApiV1AutomationsTest401Error1),
            403 => response.Json<ApiV1AutomationsTest403Error1>().As(AsApiV1AutomationsTest403Error1),
            404 => response.Json<ApiV1AutomationsTest404Error1>().As(AsApiV1AutomationsTest404Error1),
            429 => response.Json<ApiV1AutomationsTest429Error1>().As(AsApiV1AutomationsTest429Error1),
            500 => response.Json<ApiV1AutomationsTest500Error1>().As(AsApiV1AutomationsTest500Error1),
            502 => response.Json<ApiV1AutomationsTest502Error1>().As(AsApiV1AutomationsTest502Error1),
            503 => response.Json<ApiV1AutomationsTest503Error1>().As(AsApiV1AutomationsTest503Error1),
            504 => response.Json<ApiV1AutomationsTest504Error1>().As(AsApiV1AutomationsTest504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationTestFlowError> Response { get; } = new(Create);
}
