using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CreditGetCreditBalanceError : ApiError
{
    private readonly Optional<ApiV1BillingCreditsBalance400Error1> _apiV1BillingCreditsBalance400Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance401Error1> _apiV1BillingCreditsBalance401Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance403Error1> _apiV1BillingCreditsBalance403Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance404Error1> _apiV1BillingCreditsBalance404Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance429Error1> _apiV1BillingCreditsBalance429Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance500Error1> _apiV1BillingCreditsBalance500Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance502Error1> _apiV1BillingCreditsBalance502Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance503Error1> _apiV1BillingCreditsBalance503Error1Value;

    private readonly Optional<ApiV1BillingCreditsBalance504Error1> _apiV1BillingCreditsBalance504Error1Value;

    private CreditGetCreditBalanceError(Optional<ApiV1BillingCreditsBalance400Error1> apiV1BillingCreditsBalance400Error1Value,
        Optional<ApiV1BillingCreditsBalance401Error1> apiV1BillingCreditsBalance401Error1Value,
        Optional<ApiV1BillingCreditsBalance403Error1> apiV1BillingCreditsBalance403Error1Value,
        Optional<ApiV1BillingCreditsBalance404Error1> apiV1BillingCreditsBalance404Error1Value,
        Optional<ApiV1BillingCreditsBalance429Error1> apiV1BillingCreditsBalance429Error1Value,
        Optional<ApiV1BillingCreditsBalance500Error1> apiV1BillingCreditsBalance500Error1Value,
        Optional<ApiV1BillingCreditsBalance502Error1> apiV1BillingCreditsBalance502Error1Value,
        Optional<ApiV1BillingCreditsBalance503Error1> apiV1BillingCreditsBalance503Error1Value,
        Optional<ApiV1BillingCreditsBalance504Error1> apiV1BillingCreditsBalance504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1BillingCreditsBalance400Error1Value = apiV1BillingCreditsBalance400Error1Value;
        _apiV1BillingCreditsBalance401Error1Value = apiV1BillingCreditsBalance401Error1Value;
        _apiV1BillingCreditsBalance403Error1Value = apiV1BillingCreditsBalance403Error1Value;
        _apiV1BillingCreditsBalance404Error1Value = apiV1BillingCreditsBalance404Error1Value;
        _apiV1BillingCreditsBalance429Error1Value = apiV1BillingCreditsBalance429Error1Value;
        _apiV1BillingCreditsBalance500Error1Value = apiV1BillingCreditsBalance500Error1Value;
        _apiV1BillingCreditsBalance502Error1Value = apiV1BillingCreditsBalance502Error1Value;
        _apiV1BillingCreditsBalance503Error1Value = apiV1BillingCreditsBalance503Error1Value;
        _apiV1BillingCreditsBalance504Error1Value = apiV1BillingCreditsBalance504Error1Value;
    }

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance400Error1(ApiV1BillingCreditsBalance400Error1 value) =>
        new(
            Optional<ApiV1BillingCreditsBalance400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance401Error1(ApiV1BillingCreditsBalance401Error1 value) =>
        new(
            default,
            Optional<ApiV1BillingCreditsBalance401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance403Error1(ApiV1BillingCreditsBalance403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1BillingCreditsBalance403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance404Error1(ApiV1BillingCreditsBalance404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance429Error1(ApiV1BillingCreditsBalance429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance500Error1(ApiV1BillingCreditsBalance500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance502Error1(ApiV1BillingCreditsBalance502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance502Error1>.Some(value),
            default,
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance503Error1(ApiV1BillingCreditsBalance503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance503Error1>.Some(value),
            default,
            default);

    private static CreditGetCreditBalanceError AsApiV1BillingCreditsBalance504Error1(ApiV1BillingCreditsBalance504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingCreditsBalance504Error1>.Some(value),
            default);

    private static CreditGetCreditBalanceError AsFallback(RawError value) =>
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

    public bool TryGetApiV1BillingCreditsBalance400Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance400Error1? value) =>
        _apiV1BillingCreditsBalance400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance401Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance401Error1? value) =>
        _apiV1BillingCreditsBalance401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance403Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance403Error1? value) =>
        _apiV1BillingCreditsBalance403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance404Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance404Error1? value) =>
        _apiV1BillingCreditsBalance404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance429Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance429Error1? value) =>
        _apiV1BillingCreditsBalance429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance500Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance500Error1? value) =>
        _apiV1BillingCreditsBalance500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance502Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance502Error1? value) =>
        _apiV1BillingCreditsBalance502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance503Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance503Error1? value) =>
        _apiV1BillingCreditsBalance503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingCreditsBalance504Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance504Error1? value) =>
        _apiV1BillingCreditsBalance504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1BillingCreditsBalance400Error1, TResult> onApiV1BillingCreditsBalance400Error1,
        Func<ApiV1BillingCreditsBalance401Error1, TResult> onApiV1BillingCreditsBalance401Error1,
        Func<ApiV1BillingCreditsBalance403Error1, TResult> onApiV1BillingCreditsBalance403Error1,
        Func<ApiV1BillingCreditsBalance404Error1, TResult> onApiV1BillingCreditsBalance404Error1,
        Func<ApiV1BillingCreditsBalance429Error1, TResult> onApiV1BillingCreditsBalance429Error1,
        Func<ApiV1BillingCreditsBalance500Error1, TResult> onApiV1BillingCreditsBalance500Error1,
        Func<ApiV1BillingCreditsBalance502Error1, TResult> onApiV1BillingCreditsBalance502Error1,
        Func<ApiV1BillingCreditsBalance503Error1, TResult> onApiV1BillingCreditsBalance503Error1,
        Func<ApiV1BillingCreditsBalance504Error1, TResult> onApiV1BillingCreditsBalance504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1BillingCreditsBalance400Error1(
                out var apiV1BillingCreditsBalance400Error1Value) => onApiV1BillingCreditsBalance400Error1(
                apiV1BillingCreditsBalance400Error1Value),
            _ when TryGetApiV1BillingCreditsBalance401Error1(
                out var apiV1BillingCreditsBalance401Error1Value) => onApiV1BillingCreditsBalance401Error1(
                apiV1BillingCreditsBalance401Error1Value),
            _ when TryGetApiV1BillingCreditsBalance403Error1(
                out var apiV1BillingCreditsBalance403Error1Value) => onApiV1BillingCreditsBalance403Error1(
                apiV1BillingCreditsBalance403Error1Value),
            _ when TryGetApiV1BillingCreditsBalance404Error1(
                out var apiV1BillingCreditsBalance404Error1Value) => onApiV1BillingCreditsBalance404Error1(
                apiV1BillingCreditsBalance404Error1Value),
            _ when TryGetApiV1BillingCreditsBalance429Error1(
                out var apiV1BillingCreditsBalance429Error1Value) => onApiV1BillingCreditsBalance429Error1(
                apiV1BillingCreditsBalance429Error1Value),
            _ when TryGetApiV1BillingCreditsBalance500Error1(
                out var apiV1BillingCreditsBalance500Error1Value) => onApiV1BillingCreditsBalance500Error1(
                apiV1BillingCreditsBalance500Error1Value),
            _ when TryGetApiV1BillingCreditsBalance502Error1(
                out var apiV1BillingCreditsBalance502Error1Value) => onApiV1BillingCreditsBalance502Error1(
                apiV1BillingCreditsBalance502Error1Value),
            _ when TryGetApiV1BillingCreditsBalance503Error1(
                out var apiV1BillingCreditsBalance503Error1Value) => onApiV1BillingCreditsBalance503Error1(
                apiV1BillingCreditsBalance503Error1Value),
            _ when TryGetApiV1BillingCreditsBalance504Error1(
                out var apiV1BillingCreditsBalance504Error1Value) => onApiV1BillingCreditsBalance504Error1(
                apiV1BillingCreditsBalance504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreditGetCreditBalanceError)} holds no value.")
        };

    public void Match(Action<ApiV1BillingCreditsBalance400Error1> onApiV1BillingCreditsBalance400Error1,
        Action<ApiV1BillingCreditsBalance401Error1> onApiV1BillingCreditsBalance401Error1,
        Action<ApiV1BillingCreditsBalance403Error1> onApiV1BillingCreditsBalance403Error1,
        Action<ApiV1BillingCreditsBalance404Error1> onApiV1BillingCreditsBalance404Error1,
        Action<ApiV1BillingCreditsBalance429Error1> onApiV1BillingCreditsBalance429Error1,
        Action<ApiV1BillingCreditsBalance500Error1> onApiV1BillingCreditsBalance500Error1,
        Action<ApiV1BillingCreditsBalance502Error1> onApiV1BillingCreditsBalance502Error1,
        Action<ApiV1BillingCreditsBalance503Error1> onApiV1BillingCreditsBalance503Error1,
        Action<ApiV1BillingCreditsBalance504Error1> onApiV1BillingCreditsBalance504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1BillingCreditsBalance400Error1(
            out var apiV1BillingCreditsBalance400Error1Value)) onApiV1BillingCreditsBalance400Error1(
            apiV1BillingCreditsBalance400Error1Value);
        else if (TryGetApiV1BillingCreditsBalance401Error1(
            out var apiV1BillingCreditsBalance401Error1Value)) onApiV1BillingCreditsBalance401Error1(
            apiV1BillingCreditsBalance401Error1Value);
        else if (TryGetApiV1BillingCreditsBalance403Error1(
            out var apiV1BillingCreditsBalance403Error1Value)) onApiV1BillingCreditsBalance403Error1(
            apiV1BillingCreditsBalance403Error1Value);
        else if (TryGetApiV1BillingCreditsBalance404Error1(
            out var apiV1BillingCreditsBalance404Error1Value)) onApiV1BillingCreditsBalance404Error1(
            apiV1BillingCreditsBalance404Error1Value);
        else if (TryGetApiV1BillingCreditsBalance429Error1(
            out var apiV1BillingCreditsBalance429Error1Value)) onApiV1BillingCreditsBalance429Error1(
            apiV1BillingCreditsBalance429Error1Value);
        else if (TryGetApiV1BillingCreditsBalance500Error1(
            out var apiV1BillingCreditsBalance500Error1Value)) onApiV1BillingCreditsBalance500Error1(
            apiV1BillingCreditsBalance500Error1Value);
        else if (TryGetApiV1BillingCreditsBalance502Error1(
            out var apiV1BillingCreditsBalance502Error1Value)) onApiV1BillingCreditsBalance502Error1(
            apiV1BillingCreditsBalance502Error1Value);
        else if (TryGetApiV1BillingCreditsBalance503Error1(
            out var apiV1BillingCreditsBalance503Error1Value)) onApiV1BillingCreditsBalance503Error1(
            apiV1BillingCreditsBalance503Error1Value);
        else if (TryGetApiV1BillingCreditsBalance504Error1(
            out var apiV1BillingCreditsBalance504Error1Value)) onApiV1BillingCreditsBalance504Error1(
            apiV1BillingCreditsBalance504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreditGetCreditBalanceError)} holds no value.");
    }

    private static Task<CreditGetCreditBalanceError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1BillingCreditsBalance400Error1>().As(AsApiV1BillingCreditsBalance400Error1),
            401 => response.Json<ApiV1BillingCreditsBalance401Error1>().As(AsApiV1BillingCreditsBalance401Error1),
            403 => response.Json<ApiV1BillingCreditsBalance403Error1>().As(AsApiV1BillingCreditsBalance403Error1),
            404 => response.Json<ApiV1BillingCreditsBalance404Error1>().As(AsApiV1BillingCreditsBalance404Error1),
            429 => response.Json<ApiV1BillingCreditsBalance429Error1>().As(AsApiV1BillingCreditsBalance429Error1),
            500 => response.Json<ApiV1BillingCreditsBalance500Error1>().As(AsApiV1BillingCreditsBalance500Error1),
            502 => response.Json<ApiV1BillingCreditsBalance502Error1>().As(AsApiV1BillingCreditsBalance502Error1),
            503 => response.Json<ApiV1BillingCreditsBalance503Error1>().As(AsApiV1BillingCreditsBalance503Error1),
            504 => response.Json<ApiV1BillingCreditsBalance504Error1>().As(AsApiV1BillingCreditsBalance504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreditGetCreditBalanceError> Response { get; } = new(Create);
}
