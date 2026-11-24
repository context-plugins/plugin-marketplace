using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AnalyticsGetPostAnalyticsError : ApiError
{
    private readonly Optional<ApiV1AnalyticsPost400Error1> _apiV1AnalyticsPost400Error1Value;

    private readonly Optional<ApiV1AnalyticsPost401Error1> _apiV1AnalyticsPost401Error1Value;

    private readonly Optional<ApiV1AnalyticsPost403Error1> _apiV1AnalyticsPost403Error1Value;

    private readonly Optional<ApiV1AnalyticsPost404Error1> _apiV1AnalyticsPost404Error1Value;

    private readonly Optional<ApiV1AnalyticsPost429Error1> _apiV1AnalyticsPost429Error1Value;

    private readonly Optional<ApiV1AnalyticsPost500Error1> _apiV1AnalyticsPost500Error1Value;

    private readonly Optional<ApiV1AnalyticsPost502Error1> _apiV1AnalyticsPost502Error1Value;

    private readonly Optional<ApiV1AnalyticsPost503Error1> _apiV1AnalyticsPost503Error1Value;

    private readonly Optional<ApiV1AnalyticsPost504Error1> _apiV1AnalyticsPost504Error1Value;

    private AnalyticsGetPostAnalyticsError(Optional<ApiV1AnalyticsPost400Error1> apiV1AnalyticsPost400Error1Value,
        Optional<ApiV1AnalyticsPost401Error1> apiV1AnalyticsPost401Error1Value,
        Optional<ApiV1AnalyticsPost403Error1> apiV1AnalyticsPost403Error1Value,
        Optional<ApiV1AnalyticsPost404Error1> apiV1AnalyticsPost404Error1Value,
        Optional<ApiV1AnalyticsPost429Error1> apiV1AnalyticsPost429Error1Value,
        Optional<ApiV1AnalyticsPost500Error1> apiV1AnalyticsPost500Error1Value,
        Optional<ApiV1AnalyticsPost502Error1> apiV1AnalyticsPost502Error1Value,
        Optional<ApiV1AnalyticsPost503Error1> apiV1AnalyticsPost503Error1Value,
        Optional<ApiV1AnalyticsPost504Error1> apiV1AnalyticsPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AnalyticsPost400Error1Value = apiV1AnalyticsPost400Error1Value;
        _apiV1AnalyticsPost401Error1Value = apiV1AnalyticsPost401Error1Value;
        _apiV1AnalyticsPost403Error1Value = apiV1AnalyticsPost403Error1Value;
        _apiV1AnalyticsPost404Error1Value = apiV1AnalyticsPost404Error1Value;
        _apiV1AnalyticsPost429Error1Value = apiV1AnalyticsPost429Error1Value;
        _apiV1AnalyticsPost500Error1Value = apiV1AnalyticsPost500Error1Value;
        _apiV1AnalyticsPost502Error1Value = apiV1AnalyticsPost502Error1Value;
        _apiV1AnalyticsPost503Error1Value = apiV1AnalyticsPost503Error1Value;
        _apiV1AnalyticsPost504Error1Value = apiV1AnalyticsPost504Error1Value;
    }

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost400Error1(ApiV1AnalyticsPost400Error1 value) =>
        new(
            Optional<ApiV1AnalyticsPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost401Error1(ApiV1AnalyticsPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1AnalyticsPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost403Error1(ApiV1AnalyticsPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AnalyticsPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost404Error1(ApiV1AnalyticsPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost429Error1(ApiV1AnalyticsPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost500Error1(ApiV1AnalyticsPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost502Error1(ApiV1AnalyticsPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost502Error1>.Some(value),
            default,
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost503Error1(ApiV1AnalyticsPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost503Error1>.Some(value),
            default,
            default);

    private static AnalyticsGetPostAnalyticsError AsApiV1AnalyticsPost504Error1(ApiV1AnalyticsPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AnalyticsPost504Error1>.Some(value),
            default);

    private static AnalyticsGetPostAnalyticsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AnalyticsPost400Error1([NotNullWhen(true)] out ApiV1AnalyticsPost400Error1? value) =>
        _apiV1AnalyticsPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost401Error1([NotNullWhen(true)] out ApiV1AnalyticsPost401Error1? value) =>
        _apiV1AnalyticsPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost403Error1([NotNullWhen(true)] out ApiV1AnalyticsPost403Error1? value) =>
        _apiV1AnalyticsPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost404Error1([NotNullWhen(true)] out ApiV1AnalyticsPost404Error1? value) =>
        _apiV1AnalyticsPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost429Error1([NotNullWhen(true)] out ApiV1AnalyticsPost429Error1? value) =>
        _apiV1AnalyticsPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost500Error1([NotNullWhen(true)] out ApiV1AnalyticsPost500Error1? value) =>
        _apiV1AnalyticsPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost502Error1([NotNullWhen(true)] out ApiV1AnalyticsPost502Error1? value) =>
        _apiV1AnalyticsPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost503Error1([NotNullWhen(true)] out ApiV1AnalyticsPost503Error1? value) =>
        _apiV1AnalyticsPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AnalyticsPost504Error1([NotNullWhen(true)] out ApiV1AnalyticsPost504Error1? value) =>
        _apiV1AnalyticsPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AnalyticsPost400Error1, TResult> onApiV1AnalyticsPost400Error1,
        Func<ApiV1AnalyticsPost401Error1, TResult> onApiV1AnalyticsPost401Error1,
        Func<ApiV1AnalyticsPost403Error1, TResult> onApiV1AnalyticsPost403Error1,
        Func<ApiV1AnalyticsPost404Error1, TResult> onApiV1AnalyticsPost404Error1,
        Func<ApiV1AnalyticsPost429Error1, TResult> onApiV1AnalyticsPost429Error1,
        Func<ApiV1AnalyticsPost500Error1, TResult> onApiV1AnalyticsPost500Error1,
        Func<ApiV1AnalyticsPost502Error1, TResult> onApiV1AnalyticsPost502Error1,
        Func<ApiV1AnalyticsPost503Error1, TResult> onApiV1AnalyticsPost503Error1,
        Func<ApiV1AnalyticsPost504Error1, TResult> onApiV1AnalyticsPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AnalyticsPost400Error1(
                out var apiV1AnalyticsPost400Error1Value) => onApiV1AnalyticsPost400Error1(
                apiV1AnalyticsPost400Error1Value),
            _ when TryGetApiV1AnalyticsPost401Error1(
                out var apiV1AnalyticsPost401Error1Value) => onApiV1AnalyticsPost401Error1(
                apiV1AnalyticsPost401Error1Value),
            _ when TryGetApiV1AnalyticsPost403Error1(
                out var apiV1AnalyticsPost403Error1Value) => onApiV1AnalyticsPost403Error1(
                apiV1AnalyticsPost403Error1Value),
            _ when TryGetApiV1AnalyticsPost404Error1(
                out var apiV1AnalyticsPost404Error1Value) => onApiV1AnalyticsPost404Error1(
                apiV1AnalyticsPost404Error1Value),
            _ when TryGetApiV1AnalyticsPost429Error1(
                out var apiV1AnalyticsPost429Error1Value) => onApiV1AnalyticsPost429Error1(
                apiV1AnalyticsPost429Error1Value),
            _ when TryGetApiV1AnalyticsPost500Error1(
                out var apiV1AnalyticsPost500Error1Value) => onApiV1AnalyticsPost500Error1(
                apiV1AnalyticsPost500Error1Value),
            _ when TryGetApiV1AnalyticsPost502Error1(
                out var apiV1AnalyticsPost502Error1Value) => onApiV1AnalyticsPost502Error1(
                apiV1AnalyticsPost502Error1Value),
            _ when TryGetApiV1AnalyticsPost503Error1(
                out var apiV1AnalyticsPost503Error1Value) => onApiV1AnalyticsPost503Error1(
                apiV1AnalyticsPost503Error1Value),
            _ when TryGetApiV1AnalyticsPost504Error1(
                out var apiV1AnalyticsPost504Error1Value) => onApiV1AnalyticsPost504Error1(
                apiV1AnalyticsPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AnalyticsGetPostAnalyticsError)} holds no value.")
        };

    public void Match(Action<ApiV1AnalyticsPost400Error1> onApiV1AnalyticsPost400Error1,
        Action<ApiV1AnalyticsPost401Error1> onApiV1AnalyticsPost401Error1,
        Action<ApiV1AnalyticsPost403Error1> onApiV1AnalyticsPost403Error1,
        Action<ApiV1AnalyticsPost404Error1> onApiV1AnalyticsPost404Error1,
        Action<ApiV1AnalyticsPost429Error1> onApiV1AnalyticsPost429Error1,
        Action<ApiV1AnalyticsPost500Error1> onApiV1AnalyticsPost500Error1,
        Action<ApiV1AnalyticsPost502Error1> onApiV1AnalyticsPost502Error1,
        Action<ApiV1AnalyticsPost503Error1> onApiV1AnalyticsPost503Error1,
        Action<ApiV1AnalyticsPost504Error1> onApiV1AnalyticsPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AnalyticsPost400Error1(out var apiV1AnalyticsPost400Error1Value)) onApiV1AnalyticsPost400Error1(
            apiV1AnalyticsPost400Error1Value);
        else if (TryGetApiV1AnalyticsPost401Error1(
            out var apiV1AnalyticsPost401Error1Value)) onApiV1AnalyticsPost401Error1(apiV1AnalyticsPost401Error1Value);
        else if (TryGetApiV1AnalyticsPost403Error1(
            out var apiV1AnalyticsPost403Error1Value)) onApiV1AnalyticsPost403Error1(apiV1AnalyticsPost403Error1Value);
        else if (TryGetApiV1AnalyticsPost404Error1(
            out var apiV1AnalyticsPost404Error1Value)) onApiV1AnalyticsPost404Error1(apiV1AnalyticsPost404Error1Value);
        else if (TryGetApiV1AnalyticsPost429Error1(
            out var apiV1AnalyticsPost429Error1Value)) onApiV1AnalyticsPost429Error1(apiV1AnalyticsPost429Error1Value);
        else if (TryGetApiV1AnalyticsPost500Error1(
            out var apiV1AnalyticsPost500Error1Value)) onApiV1AnalyticsPost500Error1(apiV1AnalyticsPost500Error1Value);
        else if (TryGetApiV1AnalyticsPost502Error1(
            out var apiV1AnalyticsPost502Error1Value)) onApiV1AnalyticsPost502Error1(apiV1AnalyticsPost502Error1Value);
        else if (TryGetApiV1AnalyticsPost503Error1(
            out var apiV1AnalyticsPost503Error1Value)) onApiV1AnalyticsPost503Error1(apiV1AnalyticsPost503Error1Value);
        else if (TryGetApiV1AnalyticsPost504Error1(
            out var apiV1AnalyticsPost504Error1Value)) onApiV1AnalyticsPost504Error1(apiV1AnalyticsPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AnalyticsGetPostAnalyticsError)} holds no value.");
    }

    private static Task<AnalyticsGetPostAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AnalyticsPost400Error1>().As(AsApiV1AnalyticsPost400Error1),
            401 => response.Json<ApiV1AnalyticsPost401Error1>().As(AsApiV1AnalyticsPost401Error1),
            403 => response.Json<ApiV1AnalyticsPost403Error1>().As(AsApiV1AnalyticsPost403Error1),
            404 => response.Json<ApiV1AnalyticsPost404Error1>().As(AsApiV1AnalyticsPost404Error1),
            429 => response.Json<ApiV1AnalyticsPost429Error1>().As(AsApiV1AnalyticsPost429Error1),
            500 => response.Json<ApiV1AnalyticsPost500Error1>().As(AsApiV1AnalyticsPost500Error1),
            502 => response.Json<ApiV1AnalyticsPost502Error1>().As(AsApiV1AnalyticsPost502Error1),
            503 => response.Json<ApiV1AnalyticsPost503Error1>().As(AsApiV1AnalyticsPost503Error1),
            504 => response.Json<ApiV1AnalyticsPost504Error1>().As(AsApiV1AnalyticsPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsGetPostAnalyticsError> Response { get; } = new(Create);
}
