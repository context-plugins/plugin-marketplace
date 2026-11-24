using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostCsvGetRowsError : ApiError
{
    private readonly Optional<ApiV1PostCsvImportRows400Error1> _apiV1PostCsvImportRows400Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows401Error1> _apiV1PostCsvImportRows401Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows403Error1> _apiV1PostCsvImportRows403Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows404Error1> _apiV1PostCsvImportRows404Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows429Error1> _apiV1PostCsvImportRows429Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows500Error1> _apiV1PostCsvImportRows500Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows502Error1> _apiV1PostCsvImportRows502Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows503Error1> _apiV1PostCsvImportRows503Error1Value;

    private readonly Optional<ApiV1PostCsvImportRows504Error1> _apiV1PostCsvImportRows504Error1Value;

    private PostCsvGetRowsError(Optional<ApiV1PostCsvImportRows400Error1> apiV1PostCsvImportRows400Error1Value,
        Optional<ApiV1PostCsvImportRows401Error1> apiV1PostCsvImportRows401Error1Value,
        Optional<ApiV1PostCsvImportRows403Error1> apiV1PostCsvImportRows403Error1Value,
        Optional<ApiV1PostCsvImportRows404Error1> apiV1PostCsvImportRows404Error1Value,
        Optional<ApiV1PostCsvImportRows429Error1> apiV1PostCsvImportRows429Error1Value,
        Optional<ApiV1PostCsvImportRows500Error1> apiV1PostCsvImportRows500Error1Value,
        Optional<ApiV1PostCsvImportRows502Error1> apiV1PostCsvImportRows502Error1Value,
        Optional<ApiV1PostCsvImportRows503Error1> apiV1PostCsvImportRows503Error1Value,
        Optional<ApiV1PostCsvImportRows504Error1> apiV1PostCsvImportRows504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostCsvImportRows400Error1Value = apiV1PostCsvImportRows400Error1Value;
        _apiV1PostCsvImportRows401Error1Value = apiV1PostCsvImportRows401Error1Value;
        _apiV1PostCsvImportRows403Error1Value = apiV1PostCsvImportRows403Error1Value;
        _apiV1PostCsvImportRows404Error1Value = apiV1PostCsvImportRows404Error1Value;
        _apiV1PostCsvImportRows429Error1Value = apiV1PostCsvImportRows429Error1Value;
        _apiV1PostCsvImportRows500Error1Value = apiV1PostCsvImportRows500Error1Value;
        _apiV1PostCsvImportRows502Error1Value = apiV1PostCsvImportRows502Error1Value;
        _apiV1PostCsvImportRows503Error1Value = apiV1PostCsvImportRows503Error1Value;
        _apiV1PostCsvImportRows504Error1Value = apiV1PostCsvImportRows504Error1Value;
    }

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows400Error1(ApiV1PostCsvImportRows400Error1 value) =>
        new(
            Optional<ApiV1PostCsvImportRows400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows401Error1(ApiV1PostCsvImportRows401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostCsvImportRows401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows403Error1(ApiV1PostCsvImportRows403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostCsvImportRows403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows404Error1(ApiV1PostCsvImportRows404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows429Error1(ApiV1PostCsvImportRows429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows500Error1(ApiV1PostCsvImportRows500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows502Error1(ApiV1PostCsvImportRows502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows502Error1>.Some(value),
            default,
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows503Error1(ApiV1PostCsvImportRows503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows503Error1>.Some(value),
            default,
            default);

    private static PostCsvGetRowsError AsApiV1PostCsvImportRows504Error1(ApiV1PostCsvImportRows504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportRows504Error1>.Some(value),
            default);

    private static PostCsvGetRowsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostCsvImportRows400Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows400Error1? value) =>
        _apiV1PostCsvImportRows400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows401Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows401Error1? value) =>
        _apiV1PostCsvImportRows401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows403Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows403Error1? value) =>
        _apiV1PostCsvImportRows403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows404Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows404Error1? value) =>
        _apiV1PostCsvImportRows404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows429Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows429Error1? value) =>
        _apiV1PostCsvImportRows429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows500Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows500Error1? value) =>
        _apiV1PostCsvImportRows500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows502Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows502Error1? value) =>
        _apiV1PostCsvImportRows502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows503Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows503Error1? value) =>
        _apiV1PostCsvImportRows503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportRows504Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows504Error1? value) =>
        _apiV1PostCsvImportRows504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostCsvImportRows400Error1, TResult> onApiV1PostCsvImportRows400Error1,
        Func<ApiV1PostCsvImportRows401Error1, TResult> onApiV1PostCsvImportRows401Error1,
        Func<ApiV1PostCsvImportRows403Error1, TResult> onApiV1PostCsvImportRows403Error1,
        Func<ApiV1PostCsvImportRows404Error1, TResult> onApiV1PostCsvImportRows404Error1,
        Func<ApiV1PostCsvImportRows429Error1, TResult> onApiV1PostCsvImportRows429Error1,
        Func<ApiV1PostCsvImportRows500Error1, TResult> onApiV1PostCsvImportRows500Error1,
        Func<ApiV1PostCsvImportRows502Error1, TResult> onApiV1PostCsvImportRows502Error1,
        Func<ApiV1PostCsvImportRows503Error1, TResult> onApiV1PostCsvImportRows503Error1,
        Func<ApiV1PostCsvImportRows504Error1, TResult> onApiV1PostCsvImportRows504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostCsvImportRows400Error1(
                out var apiV1PostCsvImportRows400Error1Value) => onApiV1PostCsvImportRows400Error1(
                apiV1PostCsvImportRows400Error1Value),
            _ when TryGetApiV1PostCsvImportRows401Error1(
                out var apiV1PostCsvImportRows401Error1Value) => onApiV1PostCsvImportRows401Error1(
                apiV1PostCsvImportRows401Error1Value),
            _ when TryGetApiV1PostCsvImportRows403Error1(
                out var apiV1PostCsvImportRows403Error1Value) => onApiV1PostCsvImportRows403Error1(
                apiV1PostCsvImportRows403Error1Value),
            _ when TryGetApiV1PostCsvImportRows404Error1(
                out var apiV1PostCsvImportRows404Error1Value) => onApiV1PostCsvImportRows404Error1(
                apiV1PostCsvImportRows404Error1Value),
            _ when TryGetApiV1PostCsvImportRows429Error1(
                out var apiV1PostCsvImportRows429Error1Value) => onApiV1PostCsvImportRows429Error1(
                apiV1PostCsvImportRows429Error1Value),
            _ when TryGetApiV1PostCsvImportRows500Error1(
                out var apiV1PostCsvImportRows500Error1Value) => onApiV1PostCsvImportRows500Error1(
                apiV1PostCsvImportRows500Error1Value),
            _ when TryGetApiV1PostCsvImportRows502Error1(
                out var apiV1PostCsvImportRows502Error1Value) => onApiV1PostCsvImportRows502Error1(
                apiV1PostCsvImportRows502Error1Value),
            _ when TryGetApiV1PostCsvImportRows503Error1(
                out var apiV1PostCsvImportRows503Error1Value) => onApiV1PostCsvImportRows503Error1(
                apiV1PostCsvImportRows503Error1Value),
            _ when TryGetApiV1PostCsvImportRows504Error1(
                out var apiV1PostCsvImportRows504Error1Value) => onApiV1PostCsvImportRows504Error1(
                apiV1PostCsvImportRows504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostCsvGetRowsError)} holds no value.")
        };

    public void Match(Action<ApiV1PostCsvImportRows400Error1> onApiV1PostCsvImportRows400Error1,
        Action<ApiV1PostCsvImportRows401Error1> onApiV1PostCsvImportRows401Error1,
        Action<ApiV1PostCsvImportRows403Error1> onApiV1PostCsvImportRows403Error1,
        Action<ApiV1PostCsvImportRows404Error1> onApiV1PostCsvImportRows404Error1,
        Action<ApiV1PostCsvImportRows429Error1> onApiV1PostCsvImportRows429Error1,
        Action<ApiV1PostCsvImportRows500Error1> onApiV1PostCsvImportRows500Error1,
        Action<ApiV1PostCsvImportRows502Error1> onApiV1PostCsvImportRows502Error1,
        Action<ApiV1PostCsvImportRows503Error1> onApiV1PostCsvImportRows503Error1,
        Action<ApiV1PostCsvImportRows504Error1> onApiV1PostCsvImportRows504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostCsvImportRows400Error1(
            out var apiV1PostCsvImportRows400Error1Value)) onApiV1PostCsvImportRows400Error1(
            apiV1PostCsvImportRows400Error1Value);
        else if (TryGetApiV1PostCsvImportRows401Error1(
            out var apiV1PostCsvImportRows401Error1Value)) onApiV1PostCsvImportRows401Error1(
            apiV1PostCsvImportRows401Error1Value);
        else if (TryGetApiV1PostCsvImportRows403Error1(
            out var apiV1PostCsvImportRows403Error1Value)) onApiV1PostCsvImportRows403Error1(
            apiV1PostCsvImportRows403Error1Value);
        else if (TryGetApiV1PostCsvImportRows404Error1(
            out var apiV1PostCsvImportRows404Error1Value)) onApiV1PostCsvImportRows404Error1(
            apiV1PostCsvImportRows404Error1Value);
        else if (TryGetApiV1PostCsvImportRows429Error1(
            out var apiV1PostCsvImportRows429Error1Value)) onApiV1PostCsvImportRows429Error1(
            apiV1PostCsvImportRows429Error1Value);
        else if (TryGetApiV1PostCsvImportRows500Error1(
            out var apiV1PostCsvImportRows500Error1Value)) onApiV1PostCsvImportRows500Error1(
            apiV1PostCsvImportRows500Error1Value);
        else if (TryGetApiV1PostCsvImportRows502Error1(
            out var apiV1PostCsvImportRows502Error1Value)) onApiV1PostCsvImportRows502Error1(
            apiV1PostCsvImportRows502Error1Value);
        else if (TryGetApiV1PostCsvImportRows503Error1(
            out var apiV1PostCsvImportRows503Error1Value)) onApiV1PostCsvImportRows503Error1(
            apiV1PostCsvImportRows503Error1Value);
        else if (TryGetApiV1PostCsvImportRows504Error1(
            out var apiV1PostCsvImportRows504Error1Value)) onApiV1PostCsvImportRows504Error1(
            apiV1PostCsvImportRows504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostCsvGetRowsError)} holds no value.");
    }

    private static Task<PostCsvGetRowsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostCsvImportRows400Error1>().As(AsApiV1PostCsvImportRows400Error1),
            401 => response.Json<ApiV1PostCsvImportRows401Error1>().As(AsApiV1PostCsvImportRows401Error1),
            403 => response.Json<ApiV1PostCsvImportRows403Error1>().As(AsApiV1PostCsvImportRows403Error1),
            404 => response.Json<ApiV1PostCsvImportRows404Error1>().As(AsApiV1PostCsvImportRows404Error1),
            429 => response.Json<ApiV1PostCsvImportRows429Error1>().As(AsApiV1PostCsvImportRows429Error1),
            500 => response.Json<ApiV1PostCsvImportRows500Error1>().As(AsApiV1PostCsvImportRows500Error1),
            502 => response.Json<ApiV1PostCsvImportRows502Error1>().As(AsApiV1PostCsvImportRows502Error1),
            503 => response.Json<ApiV1PostCsvImportRows503Error1>().As(AsApiV1PostCsvImportRows503Error1),
            504 => response.Json<ApiV1PostCsvImportRows504Error1>().As(AsApiV1PostCsvImportRows504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostCsvGetRowsError> Response { get; } = new(Create);
}
