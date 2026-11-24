using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadSignMultipartPartsError : ApiError
{
    private readonly Optional<ApiV1UploadMultipartSign400Error1> _apiV1UploadMultipartSign400Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign401Error1> _apiV1UploadMultipartSign401Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign403Error1> _apiV1UploadMultipartSign403Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign404Error1> _apiV1UploadMultipartSign404Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign429Error1> _apiV1UploadMultipartSign429Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign500Error1> _apiV1UploadMultipartSign500Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign502Error1> _apiV1UploadMultipartSign502Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign503Error1> _apiV1UploadMultipartSign503Error1Value;

    private readonly Optional<ApiV1UploadMultipartSign504Error1> _apiV1UploadMultipartSign504Error1Value;

    private UploadSignMultipartPartsError(Optional<ApiV1UploadMultipartSign400Error1> apiV1UploadMultipartSign400Error1Value,
        Optional<ApiV1UploadMultipartSign401Error1> apiV1UploadMultipartSign401Error1Value,
        Optional<ApiV1UploadMultipartSign403Error1> apiV1UploadMultipartSign403Error1Value,
        Optional<ApiV1UploadMultipartSign404Error1> apiV1UploadMultipartSign404Error1Value,
        Optional<ApiV1UploadMultipartSign429Error1> apiV1UploadMultipartSign429Error1Value,
        Optional<ApiV1UploadMultipartSign500Error1> apiV1UploadMultipartSign500Error1Value,
        Optional<ApiV1UploadMultipartSign502Error1> apiV1UploadMultipartSign502Error1Value,
        Optional<ApiV1UploadMultipartSign503Error1> apiV1UploadMultipartSign503Error1Value,
        Optional<ApiV1UploadMultipartSign504Error1> apiV1UploadMultipartSign504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadMultipartSign400Error1Value = apiV1UploadMultipartSign400Error1Value;
        _apiV1UploadMultipartSign401Error1Value = apiV1UploadMultipartSign401Error1Value;
        _apiV1UploadMultipartSign403Error1Value = apiV1UploadMultipartSign403Error1Value;
        _apiV1UploadMultipartSign404Error1Value = apiV1UploadMultipartSign404Error1Value;
        _apiV1UploadMultipartSign429Error1Value = apiV1UploadMultipartSign429Error1Value;
        _apiV1UploadMultipartSign500Error1Value = apiV1UploadMultipartSign500Error1Value;
        _apiV1UploadMultipartSign502Error1Value = apiV1UploadMultipartSign502Error1Value;
        _apiV1UploadMultipartSign503Error1Value = apiV1UploadMultipartSign503Error1Value;
        _apiV1UploadMultipartSign504Error1Value = apiV1UploadMultipartSign504Error1Value;
    }

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign400Error1(ApiV1UploadMultipartSign400Error1 value) =>
        new(
            Optional<ApiV1UploadMultipartSign400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign401Error1(ApiV1UploadMultipartSign401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadMultipartSign401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign403Error1(ApiV1UploadMultipartSign403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadMultipartSign403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign404Error1(ApiV1UploadMultipartSign404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign429Error1(ApiV1UploadMultipartSign429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign500Error1(ApiV1UploadMultipartSign500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign502Error1(ApiV1UploadMultipartSign502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign503Error1(ApiV1UploadMultipartSign503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign503Error1>.Some(value),
            default,
            default);

    private static UploadSignMultipartPartsError AsApiV1UploadMultipartSign504Error1(ApiV1UploadMultipartSign504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadMultipartSign504Error1>.Some(value),
            default);

    private static UploadSignMultipartPartsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadMultipartSign400Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign400Error1? value) =>
        _apiV1UploadMultipartSign400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign401Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign401Error1? value) =>
        _apiV1UploadMultipartSign401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign403Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign403Error1? value) =>
        _apiV1UploadMultipartSign403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign404Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign404Error1? value) =>
        _apiV1UploadMultipartSign404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign429Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign429Error1? value) =>
        _apiV1UploadMultipartSign429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign500Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign500Error1? value) =>
        _apiV1UploadMultipartSign500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign502Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign502Error1? value) =>
        _apiV1UploadMultipartSign502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign503Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign503Error1? value) =>
        _apiV1UploadMultipartSign503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadMultipartSign504Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign504Error1? value) =>
        _apiV1UploadMultipartSign504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadMultipartSign400Error1, TResult> onApiV1UploadMultipartSign400Error1,
        Func<ApiV1UploadMultipartSign401Error1, TResult> onApiV1UploadMultipartSign401Error1,
        Func<ApiV1UploadMultipartSign403Error1, TResult> onApiV1UploadMultipartSign403Error1,
        Func<ApiV1UploadMultipartSign404Error1, TResult> onApiV1UploadMultipartSign404Error1,
        Func<ApiV1UploadMultipartSign429Error1, TResult> onApiV1UploadMultipartSign429Error1,
        Func<ApiV1UploadMultipartSign500Error1, TResult> onApiV1UploadMultipartSign500Error1,
        Func<ApiV1UploadMultipartSign502Error1, TResult> onApiV1UploadMultipartSign502Error1,
        Func<ApiV1UploadMultipartSign503Error1, TResult> onApiV1UploadMultipartSign503Error1,
        Func<ApiV1UploadMultipartSign504Error1, TResult> onApiV1UploadMultipartSign504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadMultipartSign400Error1(
                out var apiV1UploadMultipartSign400Error1Value) => onApiV1UploadMultipartSign400Error1(
                apiV1UploadMultipartSign400Error1Value),
            _ when TryGetApiV1UploadMultipartSign401Error1(
                out var apiV1UploadMultipartSign401Error1Value) => onApiV1UploadMultipartSign401Error1(
                apiV1UploadMultipartSign401Error1Value),
            _ when TryGetApiV1UploadMultipartSign403Error1(
                out var apiV1UploadMultipartSign403Error1Value) => onApiV1UploadMultipartSign403Error1(
                apiV1UploadMultipartSign403Error1Value),
            _ when TryGetApiV1UploadMultipartSign404Error1(
                out var apiV1UploadMultipartSign404Error1Value) => onApiV1UploadMultipartSign404Error1(
                apiV1UploadMultipartSign404Error1Value),
            _ when TryGetApiV1UploadMultipartSign429Error1(
                out var apiV1UploadMultipartSign429Error1Value) => onApiV1UploadMultipartSign429Error1(
                apiV1UploadMultipartSign429Error1Value),
            _ when TryGetApiV1UploadMultipartSign500Error1(
                out var apiV1UploadMultipartSign500Error1Value) => onApiV1UploadMultipartSign500Error1(
                apiV1UploadMultipartSign500Error1Value),
            _ when TryGetApiV1UploadMultipartSign502Error1(
                out var apiV1UploadMultipartSign502Error1Value) => onApiV1UploadMultipartSign502Error1(
                apiV1UploadMultipartSign502Error1Value),
            _ when TryGetApiV1UploadMultipartSign503Error1(
                out var apiV1UploadMultipartSign503Error1Value) => onApiV1UploadMultipartSign503Error1(
                apiV1UploadMultipartSign503Error1Value),
            _ when TryGetApiV1UploadMultipartSign504Error1(
                out var apiV1UploadMultipartSign504Error1Value) => onApiV1UploadMultipartSign504Error1(
                apiV1UploadMultipartSign504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadSignMultipartPartsError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadMultipartSign400Error1> onApiV1UploadMultipartSign400Error1,
        Action<ApiV1UploadMultipartSign401Error1> onApiV1UploadMultipartSign401Error1,
        Action<ApiV1UploadMultipartSign403Error1> onApiV1UploadMultipartSign403Error1,
        Action<ApiV1UploadMultipartSign404Error1> onApiV1UploadMultipartSign404Error1,
        Action<ApiV1UploadMultipartSign429Error1> onApiV1UploadMultipartSign429Error1,
        Action<ApiV1UploadMultipartSign500Error1> onApiV1UploadMultipartSign500Error1,
        Action<ApiV1UploadMultipartSign502Error1> onApiV1UploadMultipartSign502Error1,
        Action<ApiV1UploadMultipartSign503Error1> onApiV1UploadMultipartSign503Error1,
        Action<ApiV1UploadMultipartSign504Error1> onApiV1UploadMultipartSign504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadMultipartSign400Error1(
            out var apiV1UploadMultipartSign400Error1Value)) onApiV1UploadMultipartSign400Error1(
            apiV1UploadMultipartSign400Error1Value);
        else if (TryGetApiV1UploadMultipartSign401Error1(
            out var apiV1UploadMultipartSign401Error1Value)) onApiV1UploadMultipartSign401Error1(
            apiV1UploadMultipartSign401Error1Value);
        else if (TryGetApiV1UploadMultipartSign403Error1(
            out var apiV1UploadMultipartSign403Error1Value)) onApiV1UploadMultipartSign403Error1(
            apiV1UploadMultipartSign403Error1Value);
        else if (TryGetApiV1UploadMultipartSign404Error1(
            out var apiV1UploadMultipartSign404Error1Value)) onApiV1UploadMultipartSign404Error1(
            apiV1UploadMultipartSign404Error1Value);
        else if (TryGetApiV1UploadMultipartSign429Error1(
            out var apiV1UploadMultipartSign429Error1Value)) onApiV1UploadMultipartSign429Error1(
            apiV1UploadMultipartSign429Error1Value);
        else if (TryGetApiV1UploadMultipartSign500Error1(
            out var apiV1UploadMultipartSign500Error1Value)) onApiV1UploadMultipartSign500Error1(
            apiV1UploadMultipartSign500Error1Value);
        else if (TryGetApiV1UploadMultipartSign502Error1(
            out var apiV1UploadMultipartSign502Error1Value)) onApiV1UploadMultipartSign502Error1(
            apiV1UploadMultipartSign502Error1Value);
        else if (TryGetApiV1UploadMultipartSign503Error1(
            out var apiV1UploadMultipartSign503Error1Value)) onApiV1UploadMultipartSign503Error1(
            apiV1UploadMultipartSign503Error1Value);
        else if (TryGetApiV1UploadMultipartSign504Error1(
            out var apiV1UploadMultipartSign504Error1Value)) onApiV1UploadMultipartSign504Error1(
            apiV1UploadMultipartSign504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadSignMultipartPartsError)} holds no value.");
    }

    private static Task<UploadSignMultipartPartsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadMultipartSign400Error1>().As(AsApiV1UploadMultipartSign400Error1),
            401 => response.Json<ApiV1UploadMultipartSign401Error1>().As(AsApiV1UploadMultipartSign401Error1),
            403 => response.Json<ApiV1UploadMultipartSign403Error1>().As(AsApiV1UploadMultipartSign403Error1),
            404 => response.Json<ApiV1UploadMultipartSign404Error1>().As(AsApiV1UploadMultipartSign404Error1),
            429 => response.Json<ApiV1UploadMultipartSign429Error1>().As(AsApiV1UploadMultipartSign429Error1),
            500 => response.Json<ApiV1UploadMultipartSign500Error1>().As(AsApiV1UploadMultipartSign500Error1),
            502 => response.Json<ApiV1UploadMultipartSign502Error1>().As(AsApiV1UploadMultipartSign502Error1),
            503 => response.Json<ApiV1UploadMultipartSign503Error1>().As(AsApiV1UploadMultipartSign503Error1),
            504 => response.Json<ApiV1UploadMultipartSign504Error1>().As(AsApiV1UploadMultipartSign504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadSignMultipartPartsError> Response { get; } = new(Create);
}
