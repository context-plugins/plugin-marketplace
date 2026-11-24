using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostCsvGetByIdError : ApiError
{
    private readonly Optional<ApiV1PostCsvImport400Error1> _apiV1PostCsvImport400Error1Value;

    private readonly Optional<ApiV1PostCsvImport401Error1> _apiV1PostCsvImport401Error1Value;

    private readonly Optional<ApiV1PostCsvImport403Error1> _apiV1PostCsvImport403Error1Value;

    private readonly Optional<ApiV1PostCsvImport404Error1> _apiV1PostCsvImport404Error1Value;

    private readonly Optional<ApiV1PostCsvImport429Error1> _apiV1PostCsvImport429Error1Value;

    private readonly Optional<ApiV1PostCsvImport500Error1> _apiV1PostCsvImport500Error1Value;

    private readonly Optional<ApiV1PostCsvImport502Error1> _apiV1PostCsvImport502Error1Value;

    private readonly Optional<ApiV1PostCsvImport503Error1> _apiV1PostCsvImport503Error1Value;

    private readonly Optional<ApiV1PostCsvImport504Error1> _apiV1PostCsvImport504Error1Value;

    private PostCsvGetByIdError(Optional<ApiV1PostCsvImport400Error1> apiV1PostCsvImport400Error1Value,
        Optional<ApiV1PostCsvImport401Error1> apiV1PostCsvImport401Error1Value,
        Optional<ApiV1PostCsvImport403Error1> apiV1PostCsvImport403Error1Value,
        Optional<ApiV1PostCsvImport404Error1> apiV1PostCsvImport404Error1Value,
        Optional<ApiV1PostCsvImport429Error1> apiV1PostCsvImport429Error1Value,
        Optional<ApiV1PostCsvImport500Error1> apiV1PostCsvImport500Error1Value,
        Optional<ApiV1PostCsvImport502Error1> apiV1PostCsvImport502Error1Value,
        Optional<ApiV1PostCsvImport503Error1> apiV1PostCsvImport503Error1Value,
        Optional<ApiV1PostCsvImport504Error1> apiV1PostCsvImport504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostCsvImport400Error1Value = apiV1PostCsvImport400Error1Value;
        _apiV1PostCsvImport401Error1Value = apiV1PostCsvImport401Error1Value;
        _apiV1PostCsvImport403Error1Value = apiV1PostCsvImport403Error1Value;
        _apiV1PostCsvImport404Error1Value = apiV1PostCsvImport404Error1Value;
        _apiV1PostCsvImport429Error1Value = apiV1PostCsvImport429Error1Value;
        _apiV1PostCsvImport500Error1Value = apiV1PostCsvImport500Error1Value;
        _apiV1PostCsvImport502Error1Value = apiV1PostCsvImport502Error1Value;
        _apiV1PostCsvImport503Error1Value = apiV1PostCsvImport503Error1Value;
        _apiV1PostCsvImport504Error1Value = apiV1PostCsvImport504Error1Value;
    }

    private static PostCsvGetByIdError AsApiV1PostCsvImport400Error1(ApiV1PostCsvImport400Error1 value) =>
        new(
            Optional<ApiV1PostCsvImport400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport401Error1(ApiV1PostCsvImport401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostCsvImport401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport403Error1(ApiV1PostCsvImport403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostCsvImport403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport404Error1(ApiV1PostCsvImport404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport429Error1(ApiV1PostCsvImport429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport500Error1(ApiV1PostCsvImport500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport502Error1(ApiV1PostCsvImport502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport502Error1>.Some(value),
            default,
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport503Error1(ApiV1PostCsvImport503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport503Error1>.Some(value),
            default,
            default);

    private static PostCsvGetByIdError AsApiV1PostCsvImport504Error1(ApiV1PostCsvImport504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImport504Error1>.Some(value),
            default);

    private static PostCsvGetByIdError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostCsvImport400Error1([NotNullWhen(true)] out ApiV1PostCsvImport400Error1? value) =>
        _apiV1PostCsvImport400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport401Error1([NotNullWhen(true)] out ApiV1PostCsvImport401Error1? value) =>
        _apiV1PostCsvImport401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport403Error1([NotNullWhen(true)] out ApiV1PostCsvImport403Error1? value) =>
        _apiV1PostCsvImport403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport404Error1([NotNullWhen(true)] out ApiV1PostCsvImport404Error1? value) =>
        _apiV1PostCsvImport404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport429Error1([NotNullWhen(true)] out ApiV1PostCsvImport429Error1? value) =>
        _apiV1PostCsvImport429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport500Error1([NotNullWhen(true)] out ApiV1PostCsvImport500Error1? value) =>
        _apiV1PostCsvImport500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport502Error1([NotNullWhen(true)] out ApiV1PostCsvImport502Error1? value) =>
        _apiV1PostCsvImport502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport503Error1([NotNullWhen(true)] out ApiV1PostCsvImport503Error1? value) =>
        _apiV1PostCsvImport503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImport504Error1([NotNullWhen(true)] out ApiV1PostCsvImport504Error1? value) =>
        _apiV1PostCsvImport504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostCsvImport400Error1, TResult> onApiV1PostCsvImport400Error1,
        Func<ApiV1PostCsvImport401Error1, TResult> onApiV1PostCsvImport401Error1,
        Func<ApiV1PostCsvImport403Error1, TResult> onApiV1PostCsvImport403Error1,
        Func<ApiV1PostCsvImport404Error1, TResult> onApiV1PostCsvImport404Error1,
        Func<ApiV1PostCsvImport429Error1, TResult> onApiV1PostCsvImport429Error1,
        Func<ApiV1PostCsvImport500Error1, TResult> onApiV1PostCsvImport500Error1,
        Func<ApiV1PostCsvImport502Error1, TResult> onApiV1PostCsvImport502Error1,
        Func<ApiV1PostCsvImport503Error1, TResult> onApiV1PostCsvImport503Error1,
        Func<ApiV1PostCsvImport504Error1, TResult> onApiV1PostCsvImport504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostCsvImport400Error1(
                out var apiV1PostCsvImport400Error1Value) => onApiV1PostCsvImport400Error1(
                apiV1PostCsvImport400Error1Value),
            _ when TryGetApiV1PostCsvImport401Error1(
                out var apiV1PostCsvImport401Error1Value) => onApiV1PostCsvImport401Error1(
                apiV1PostCsvImport401Error1Value),
            _ when TryGetApiV1PostCsvImport403Error1(
                out var apiV1PostCsvImport403Error1Value) => onApiV1PostCsvImport403Error1(
                apiV1PostCsvImport403Error1Value),
            _ when TryGetApiV1PostCsvImport404Error1(
                out var apiV1PostCsvImport404Error1Value) => onApiV1PostCsvImport404Error1(
                apiV1PostCsvImport404Error1Value),
            _ when TryGetApiV1PostCsvImport429Error1(
                out var apiV1PostCsvImport429Error1Value) => onApiV1PostCsvImport429Error1(
                apiV1PostCsvImport429Error1Value),
            _ when TryGetApiV1PostCsvImport500Error1(
                out var apiV1PostCsvImport500Error1Value) => onApiV1PostCsvImport500Error1(
                apiV1PostCsvImport500Error1Value),
            _ when TryGetApiV1PostCsvImport502Error1(
                out var apiV1PostCsvImport502Error1Value) => onApiV1PostCsvImport502Error1(
                apiV1PostCsvImport502Error1Value),
            _ when TryGetApiV1PostCsvImport503Error1(
                out var apiV1PostCsvImport503Error1Value) => onApiV1PostCsvImport503Error1(
                apiV1PostCsvImport503Error1Value),
            _ when TryGetApiV1PostCsvImport504Error1(
                out var apiV1PostCsvImport504Error1Value) => onApiV1PostCsvImport504Error1(
                apiV1PostCsvImport504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostCsvGetByIdError)} holds no value.")
        };

    public void Match(Action<ApiV1PostCsvImport400Error1> onApiV1PostCsvImport400Error1,
        Action<ApiV1PostCsvImport401Error1> onApiV1PostCsvImport401Error1,
        Action<ApiV1PostCsvImport403Error1> onApiV1PostCsvImport403Error1,
        Action<ApiV1PostCsvImport404Error1> onApiV1PostCsvImport404Error1,
        Action<ApiV1PostCsvImport429Error1> onApiV1PostCsvImport429Error1,
        Action<ApiV1PostCsvImport500Error1> onApiV1PostCsvImport500Error1,
        Action<ApiV1PostCsvImport502Error1> onApiV1PostCsvImport502Error1,
        Action<ApiV1PostCsvImport503Error1> onApiV1PostCsvImport503Error1,
        Action<ApiV1PostCsvImport504Error1> onApiV1PostCsvImport504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostCsvImport400Error1(out var apiV1PostCsvImport400Error1Value)) onApiV1PostCsvImport400Error1(
            apiV1PostCsvImport400Error1Value);
        else if (TryGetApiV1PostCsvImport401Error1(
            out var apiV1PostCsvImport401Error1Value)) onApiV1PostCsvImport401Error1(apiV1PostCsvImport401Error1Value);
        else if (TryGetApiV1PostCsvImport403Error1(
            out var apiV1PostCsvImport403Error1Value)) onApiV1PostCsvImport403Error1(apiV1PostCsvImport403Error1Value);
        else if (TryGetApiV1PostCsvImport404Error1(
            out var apiV1PostCsvImport404Error1Value)) onApiV1PostCsvImport404Error1(apiV1PostCsvImport404Error1Value);
        else if (TryGetApiV1PostCsvImport429Error1(
            out var apiV1PostCsvImport429Error1Value)) onApiV1PostCsvImport429Error1(apiV1PostCsvImport429Error1Value);
        else if (TryGetApiV1PostCsvImport500Error1(
            out var apiV1PostCsvImport500Error1Value)) onApiV1PostCsvImport500Error1(apiV1PostCsvImport500Error1Value);
        else if (TryGetApiV1PostCsvImport502Error1(
            out var apiV1PostCsvImport502Error1Value)) onApiV1PostCsvImport502Error1(apiV1PostCsvImport502Error1Value);
        else if (TryGetApiV1PostCsvImport503Error1(
            out var apiV1PostCsvImport503Error1Value)) onApiV1PostCsvImport503Error1(apiV1PostCsvImport503Error1Value);
        else if (TryGetApiV1PostCsvImport504Error1(
            out var apiV1PostCsvImport504Error1Value)) onApiV1PostCsvImport504Error1(apiV1PostCsvImport504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostCsvGetByIdError)} holds no value.");
    }

    private static Task<PostCsvGetByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostCsvImport400Error1>().As(AsApiV1PostCsvImport400Error1),
            401 => response.Json<ApiV1PostCsvImport401Error1>().As(AsApiV1PostCsvImport401Error1),
            403 => response.Json<ApiV1PostCsvImport403Error1>().As(AsApiV1PostCsvImport403Error1),
            404 => response.Json<ApiV1PostCsvImport404Error1>().As(AsApiV1PostCsvImport404Error1),
            429 => response.Json<ApiV1PostCsvImport429Error1>().As(AsApiV1PostCsvImport429Error1),
            500 => response.Json<ApiV1PostCsvImport500Error1>().As(AsApiV1PostCsvImport500Error1),
            502 => response.Json<ApiV1PostCsvImport502Error1>().As(AsApiV1PostCsvImport502Error1),
            503 => response.Json<ApiV1PostCsvImport503Error1>().As(AsApiV1PostCsvImport503Error1),
            504 => response.Json<ApiV1PostCsvImport504Error1>().As(AsApiV1PostCsvImport504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostCsvGetByIdError> Response { get; } = new(Create);
}
