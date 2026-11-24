using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CreditQuoteBillableUsageError : ApiError
{
    private readonly Optional<ApiV1BillingBillableUsageQuote400Error1> _apiV1BillingBillableUsageQuote400Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote401Error1> _apiV1BillingBillableUsageQuote401Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote403Error1> _apiV1BillingBillableUsageQuote403Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote404Error1> _apiV1BillingBillableUsageQuote404Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote429Error1> _apiV1BillingBillableUsageQuote429Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote500Error1> _apiV1BillingBillableUsageQuote500Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote502Error1> _apiV1BillingBillableUsageQuote502Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote503Error1> _apiV1BillingBillableUsageQuote503Error1Value;

    private readonly Optional<ApiV1BillingBillableUsageQuote504Error1> _apiV1BillingBillableUsageQuote504Error1Value;

    private CreditQuoteBillableUsageError(Optional<ApiV1BillingBillableUsageQuote400Error1> apiV1BillingBillableUsageQuote400Error1Value,
        Optional<ApiV1BillingBillableUsageQuote401Error1> apiV1BillingBillableUsageQuote401Error1Value,
        Optional<ApiV1BillingBillableUsageQuote403Error1> apiV1BillingBillableUsageQuote403Error1Value,
        Optional<ApiV1BillingBillableUsageQuote404Error1> apiV1BillingBillableUsageQuote404Error1Value,
        Optional<ApiV1BillingBillableUsageQuote429Error1> apiV1BillingBillableUsageQuote429Error1Value,
        Optional<ApiV1BillingBillableUsageQuote500Error1> apiV1BillingBillableUsageQuote500Error1Value,
        Optional<ApiV1BillingBillableUsageQuote502Error1> apiV1BillingBillableUsageQuote502Error1Value,
        Optional<ApiV1BillingBillableUsageQuote503Error1> apiV1BillingBillableUsageQuote503Error1Value,
        Optional<ApiV1BillingBillableUsageQuote504Error1> apiV1BillingBillableUsageQuote504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1BillingBillableUsageQuote400Error1Value = apiV1BillingBillableUsageQuote400Error1Value;
        _apiV1BillingBillableUsageQuote401Error1Value = apiV1BillingBillableUsageQuote401Error1Value;
        _apiV1BillingBillableUsageQuote403Error1Value = apiV1BillingBillableUsageQuote403Error1Value;
        _apiV1BillingBillableUsageQuote404Error1Value = apiV1BillingBillableUsageQuote404Error1Value;
        _apiV1BillingBillableUsageQuote429Error1Value = apiV1BillingBillableUsageQuote429Error1Value;
        _apiV1BillingBillableUsageQuote500Error1Value = apiV1BillingBillableUsageQuote500Error1Value;
        _apiV1BillingBillableUsageQuote502Error1Value = apiV1BillingBillableUsageQuote502Error1Value;
        _apiV1BillingBillableUsageQuote503Error1Value = apiV1BillingBillableUsageQuote503Error1Value;
        _apiV1BillingBillableUsageQuote504Error1Value = apiV1BillingBillableUsageQuote504Error1Value;
    }

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote400Error1(ApiV1BillingBillableUsageQuote400Error1 value) =>
        new(
            Optional<ApiV1BillingBillableUsageQuote400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote401Error1(ApiV1BillingBillableUsageQuote401Error1 value) =>
        new(
            default,
            Optional<ApiV1BillingBillableUsageQuote401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote403Error1(ApiV1BillingBillableUsageQuote403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote404Error1(ApiV1BillingBillableUsageQuote404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote429Error1(ApiV1BillingBillableUsageQuote429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote500Error1(ApiV1BillingBillableUsageQuote500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote502Error1(ApiV1BillingBillableUsageQuote502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote502Error1>.Some(value),
            default,
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote503Error1(ApiV1BillingBillableUsageQuote503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote503Error1>.Some(value),
            default,
            default);

    private static CreditQuoteBillableUsageError AsApiV1BillingBillableUsageQuote504Error1(ApiV1BillingBillableUsageQuote504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1BillingBillableUsageQuote504Error1>.Some(value),
            default);

    private static CreditQuoteBillableUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1BillingBillableUsageQuote400Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote400Error1? value) =>
        _apiV1BillingBillableUsageQuote400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote401Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote401Error1? value) =>
        _apiV1BillingBillableUsageQuote401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote403Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote403Error1? value) =>
        _apiV1BillingBillableUsageQuote403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote404Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote404Error1? value) =>
        _apiV1BillingBillableUsageQuote404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote429Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote429Error1? value) =>
        _apiV1BillingBillableUsageQuote429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote500Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote500Error1? value) =>
        _apiV1BillingBillableUsageQuote500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote502Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote502Error1? value) =>
        _apiV1BillingBillableUsageQuote502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote503Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote503Error1? value) =>
        _apiV1BillingBillableUsageQuote503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1BillingBillableUsageQuote504Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote504Error1? value) =>
        _apiV1BillingBillableUsageQuote504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1BillingBillableUsageQuote400Error1, TResult> onApiV1BillingBillableUsageQuote400Error1,
        Func<ApiV1BillingBillableUsageQuote401Error1, TResult> onApiV1BillingBillableUsageQuote401Error1,
        Func<ApiV1BillingBillableUsageQuote403Error1, TResult> onApiV1BillingBillableUsageQuote403Error1,
        Func<ApiV1BillingBillableUsageQuote404Error1, TResult> onApiV1BillingBillableUsageQuote404Error1,
        Func<ApiV1BillingBillableUsageQuote429Error1, TResult> onApiV1BillingBillableUsageQuote429Error1,
        Func<ApiV1BillingBillableUsageQuote500Error1, TResult> onApiV1BillingBillableUsageQuote500Error1,
        Func<ApiV1BillingBillableUsageQuote502Error1, TResult> onApiV1BillingBillableUsageQuote502Error1,
        Func<ApiV1BillingBillableUsageQuote503Error1, TResult> onApiV1BillingBillableUsageQuote503Error1,
        Func<ApiV1BillingBillableUsageQuote504Error1, TResult> onApiV1BillingBillableUsageQuote504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1BillingBillableUsageQuote400Error1(
                out var apiV1BillingBillableUsageQuote400Error1Value) => onApiV1BillingBillableUsageQuote400Error1(
                apiV1BillingBillableUsageQuote400Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote401Error1(
                out var apiV1BillingBillableUsageQuote401Error1Value) => onApiV1BillingBillableUsageQuote401Error1(
                apiV1BillingBillableUsageQuote401Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote403Error1(
                out var apiV1BillingBillableUsageQuote403Error1Value) => onApiV1BillingBillableUsageQuote403Error1(
                apiV1BillingBillableUsageQuote403Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote404Error1(
                out var apiV1BillingBillableUsageQuote404Error1Value) => onApiV1BillingBillableUsageQuote404Error1(
                apiV1BillingBillableUsageQuote404Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote429Error1(
                out var apiV1BillingBillableUsageQuote429Error1Value) => onApiV1BillingBillableUsageQuote429Error1(
                apiV1BillingBillableUsageQuote429Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote500Error1(
                out var apiV1BillingBillableUsageQuote500Error1Value) => onApiV1BillingBillableUsageQuote500Error1(
                apiV1BillingBillableUsageQuote500Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote502Error1(
                out var apiV1BillingBillableUsageQuote502Error1Value) => onApiV1BillingBillableUsageQuote502Error1(
                apiV1BillingBillableUsageQuote502Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote503Error1(
                out var apiV1BillingBillableUsageQuote503Error1Value) => onApiV1BillingBillableUsageQuote503Error1(
                apiV1BillingBillableUsageQuote503Error1Value),
            _ when TryGetApiV1BillingBillableUsageQuote504Error1(
                out var apiV1BillingBillableUsageQuote504Error1Value) => onApiV1BillingBillableUsageQuote504Error1(
                apiV1BillingBillableUsageQuote504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreditQuoteBillableUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1BillingBillableUsageQuote400Error1> onApiV1BillingBillableUsageQuote400Error1,
        Action<ApiV1BillingBillableUsageQuote401Error1> onApiV1BillingBillableUsageQuote401Error1,
        Action<ApiV1BillingBillableUsageQuote403Error1> onApiV1BillingBillableUsageQuote403Error1,
        Action<ApiV1BillingBillableUsageQuote404Error1> onApiV1BillingBillableUsageQuote404Error1,
        Action<ApiV1BillingBillableUsageQuote429Error1> onApiV1BillingBillableUsageQuote429Error1,
        Action<ApiV1BillingBillableUsageQuote500Error1> onApiV1BillingBillableUsageQuote500Error1,
        Action<ApiV1BillingBillableUsageQuote502Error1> onApiV1BillingBillableUsageQuote502Error1,
        Action<ApiV1BillingBillableUsageQuote503Error1> onApiV1BillingBillableUsageQuote503Error1,
        Action<ApiV1BillingBillableUsageQuote504Error1> onApiV1BillingBillableUsageQuote504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1BillingBillableUsageQuote400Error1(
            out var apiV1BillingBillableUsageQuote400Error1Value)) onApiV1BillingBillableUsageQuote400Error1(
            apiV1BillingBillableUsageQuote400Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote401Error1(
            out var apiV1BillingBillableUsageQuote401Error1Value)) onApiV1BillingBillableUsageQuote401Error1(
            apiV1BillingBillableUsageQuote401Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote403Error1(
            out var apiV1BillingBillableUsageQuote403Error1Value)) onApiV1BillingBillableUsageQuote403Error1(
            apiV1BillingBillableUsageQuote403Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote404Error1(
            out var apiV1BillingBillableUsageQuote404Error1Value)) onApiV1BillingBillableUsageQuote404Error1(
            apiV1BillingBillableUsageQuote404Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote429Error1(
            out var apiV1BillingBillableUsageQuote429Error1Value)) onApiV1BillingBillableUsageQuote429Error1(
            apiV1BillingBillableUsageQuote429Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote500Error1(
            out var apiV1BillingBillableUsageQuote500Error1Value)) onApiV1BillingBillableUsageQuote500Error1(
            apiV1BillingBillableUsageQuote500Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote502Error1(
            out var apiV1BillingBillableUsageQuote502Error1Value)) onApiV1BillingBillableUsageQuote502Error1(
            apiV1BillingBillableUsageQuote502Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote503Error1(
            out var apiV1BillingBillableUsageQuote503Error1Value)) onApiV1BillingBillableUsageQuote503Error1(
            apiV1BillingBillableUsageQuote503Error1Value);
        else if (TryGetApiV1BillingBillableUsageQuote504Error1(
            out var apiV1BillingBillableUsageQuote504Error1Value)) onApiV1BillingBillableUsageQuote504Error1(
            apiV1BillingBillableUsageQuote504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreditQuoteBillableUsageError)} holds no value.");
    }

    private static Task<CreditQuoteBillableUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1BillingBillableUsageQuote400Error1>().As(
                AsApiV1BillingBillableUsageQuote400Error1),
            401 => response.Json<ApiV1BillingBillableUsageQuote401Error1>().As(
                AsApiV1BillingBillableUsageQuote401Error1),
            403 => response.Json<ApiV1BillingBillableUsageQuote403Error1>().As(
                AsApiV1BillingBillableUsageQuote403Error1),
            404 => response.Json<ApiV1BillingBillableUsageQuote404Error1>().As(
                AsApiV1BillingBillableUsageQuote404Error1),
            429 => response.Json<ApiV1BillingBillableUsageQuote429Error1>().As(
                AsApiV1BillingBillableUsageQuote429Error1),
            500 => response.Json<ApiV1BillingBillableUsageQuote500Error1>().As(
                AsApiV1BillingBillableUsageQuote500Error1),
            502 => response.Json<ApiV1BillingBillableUsageQuote502Error1>().As(
                AsApiV1BillingBillableUsageQuote502Error1),
            503 => response.Json<ApiV1BillingBillableUsageQuote503Error1>().As(
                AsApiV1BillingBillableUsageQuote503Error1),
            504 => response.Json<ApiV1BillingBillableUsageQuote504Error1>().As(
                AsApiV1BillingBillableUsageQuote504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreditQuoteBillableUsageError> Response { get; } = new(Create);
}
