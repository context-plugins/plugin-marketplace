using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CommentImportGetByIdError : ApiError
{
    private readonly Optional<ApiV1CommentImport400Error1> _apiV1CommentImport400Error1Value;

    private readonly Optional<ApiV1CommentImport401Error1> _apiV1CommentImport401Error1Value;

    private readonly Optional<ApiV1CommentImport403Error1> _apiV1CommentImport403Error1Value;

    private readonly Optional<ApiV1CommentImport404Error1> _apiV1CommentImport404Error1Value;

    private readonly Optional<ApiV1CommentImport429Error1> _apiV1CommentImport429Error1Value;

    private readonly Optional<ApiV1CommentImport500Error1> _apiV1CommentImport500Error1Value;

    private readonly Optional<ApiV1CommentImport502Error1> _apiV1CommentImport502Error1Value;

    private readonly Optional<ApiV1CommentImport503Error1> _apiV1CommentImport503Error1Value;

    private readonly Optional<ApiV1CommentImport504Error1> _apiV1CommentImport504Error1Value;

    private CommentImportGetByIdError(Optional<ApiV1CommentImport400Error1> apiV1CommentImport400Error1Value,
        Optional<ApiV1CommentImport401Error1> apiV1CommentImport401Error1Value,
        Optional<ApiV1CommentImport403Error1> apiV1CommentImport403Error1Value,
        Optional<ApiV1CommentImport404Error1> apiV1CommentImport404Error1Value,
        Optional<ApiV1CommentImport429Error1> apiV1CommentImport429Error1Value,
        Optional<ApiV1CommentImport500Error1> apiV1CommentImport500Error1Value,
        Optional<ApiV1CommentImport502Error1> apiV1CommentImport502Error1Value,
        Optional<ApiV1CommentImport503Error1> apiV1CommentImport503Error1Value,
        Optional<ApiV1CommentImport504Error1> apiV1CommentImport504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CommentImport400Error1Value = apiV1CommentImport400Error1Value;
        _apiV1CommentImport401Error1Value = apiV1CommentImport401Error1Value;
        _apiV1CommentImport403Error1Value = apiV1CommentImport403Error1Value;
        _apiV1CommentImport404Error1Value = apiV1CommentImport404Error1Value;
        _apiV1CommentImport429Error1Value = apiV1CommentImport429Error1Value;
        _apiV1CommentImport500Error1Value = apiV1CommentImport500Error1Value;
        _apiV1CommentImport502Error1Value = apiV1CommentImport502Error1Value;
        _apiV1CommentImport503Error1Value = apiV1CommentImport503Error1Value;
        _apiV1CommentImport504Error1Value = apiV1CommentImport504Error1Value;
    }

    private static CommentImportGetByIdError AsApiV1CommentImport400Error1(ApiV1CommentImport400Error1 value) =>
        new(
            Optional<ApiV1CommentImport400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport401Error1(ApiV1CommentImport401Error1 value) =>
        new(
            default,
            Optional<ApiV1CommentImport401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport403Error1(ApiV1CommentImport403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1CommentImport403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport404Error1(ApiV1CommentImport404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1CommentImport404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport429Error1(ApiV1CommentImport429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImport429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport500Error1(ApiV1CommentImport500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImport500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport502Error1(ApiV1CommentImport502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImport502Error1>.Some(value),
            default,
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport503Error1(ApiV1CommentImport503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImport503Error1>.Some(value),
            default,
            default);

    private static CommentImportGetByIdError AsApiV1CommentImport504Error1(ApiV1CommentImport504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImport504Error1>.Some(value),
            default);

    private static CommentImportGetByIdError AsFallback(RawError value) =>
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

    public bool TryGetApiV1CommentImport400Error1([NotNullWhen(true)] out ApiV1CommentImport400Error1? value) =>
        _apiV1CommentImport400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport401Error1([NotNullWhen(true)] out ApiV1CommentImport401Error1? value) =>
        _apiV1CommentImport401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport403Error1([NotNullWhen(true)] out ApiV1CommentImport403Error1? value) =>
        _apiV1CommentImport403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport404Error1([NotNullWhen(true)] out ApiV1CommentImport404Error1? value) =>
        _apiV1CommentImport404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport429Error1([NotNullWhen(true)] out ApiV1CommentImport429Error1? value) =>
        _apiV1CommentImport429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport500Error1([NotNullWhen(true)] out ApiV1CommentImport500Error1? value) =>
        _apiV1CommentImport500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport502Error1([NotNullWhen(true)] out ApiV1CommentImport502Error1? value) =>
        _apiV1CommentImport502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport503Error1([NotNullWhen(true)] out ApiV1CommentImport503Error1? value) =>
        _apiV1CommentImport503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImport504Error1([NotNullWhen(true)] out ApiV1CommentImport504Error1? value) =>
        _apiV1CommentImport504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CommentImport400Error1, TResult> onApiV1CommentImport400Error1,
        Func<ApiV1CommentImport401Error1, TResult> onApiV1CommentImport401Error1,
        Func<ApiV1CommentImport403Error1, TResult> onApiV1CommentImport403Error1,
        Func<ApiV1CommentImport404Error1, TResult> onApiV1CommentImport404Error1,
        Func<ApiV1CommentImport429Error1, TResult> onApiV1CommentImport429Error1,
        Func<ApiV1CommentImport500Error1, TResult> onApiV1CommentImport500Error1,
        Func<ApiV1CommentImport502Error1, TResult> onApiV1CommentImport502Error1,
        Func<ApiV1CommentImport503Error1, TResult> onApiV1CommentImport503Error1,
        Func<ApiV1CommentImport504Error1, TResult> onApiV1CommentImport504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CommentImport400Error1(
                out var apiV1CommentImport400Error1Value) => onApiV1CommentImport400Error1(
                apiV1CommentImport400Error1Value),
            _ when TryGetApiV1CommentImport401Error1(
                out var apiV1CommentImport401Error1Value) => onApiV1CommentImport401Error1(
                apiV1CommentImport401Error1Value),
            _ when TryGetApiV1CommentImport403Error1(
                out var apiV1CommentImport403Error1Value) => onApiV1CommentImport403Error1(
                apiV1CommentImport403Error1Value),
            _ when TryGetApiV1CommentImport404Error1(
                out var apiV1CommentImport404Error1Value) => onApiV1CommentImport404Error1(
                apiV1CommentImport404Error1Value),
            _ when TryGetApiV1CommentImport429Error1(
                out var apiV1CommentImport429Error1Value) => onApiV1CommentImport429Error1(
                apiV1CommentImport429Error1Value),
            _ when TryGetApiV1CommentImport500Error1(
                out var apiV1CommentImport500Error1Value) => onApiV1CommentImport500Error1(
                apiV1CommentImport500Error1Value),
            _ when TryGetApiV1CommentImport502Error1(
                out var apiV1CommentImport502Error1Value) => onApiV1CommentImport502Error1(
                apiV1CommentImport502Error1Value),
            _ when TryGetApiV1CommentImport503Error1(
                out var apiV1CommentImport503Error1Value) => onApiV1CommentImport503Error1(
                apiV1CommentImport503Error1Value),
            _ when TryGetApiV1CommentImport504Error1(
                out var apiV1CommentImport504Error1Value) => onApiV1CommentImport504Error1(
                apiV1CommentImport504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CommentImportGetByIdError)} holds no value.")
        };

    public void Match(Action<ApiV1CommentImport400Error1> onApiV1CommentImport400Error1,
        Action<ApiV1CommentImport401Error1> onApiV1CommentImport401Error1,
        Action<ApiV1CommentImport403Error1> onApiV1CommentImport403Error1,
        Action<ApiV1CommentImport404Error1> onApiV1CommentImport404Error1,
        Action<ApiV1CommentImport429Error1> onApiV1CommentImport429Error1,
        Action<ApiV1CommentImport500Error1> onApiV1CommentImport500Error1,
        Action<ApiV1CommentImport502Error1> onApiV1CommentImport502Error1,
        Action<ApiV1CommentImport503Error1> onApiV1CommentImport503Error1,
        Action<ApiV1CommentImport504Error1> onApiV1CommentImport504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CommentImport400Error1(out var apiV1CommentImport400Error1Value)) onApiV1CommentImport400Error1(
            apiV1CommentImport400Error1Value);
        else if (TryGetApiV1CommentImport401Error1(
            out var apiV1CommentImport401Error1Value)) onApiV1CommentImport401Error1(apiV1CommentImport401Error1Value);
        else if (TryGetApiV1CommentImport403Error1(
            out var apiV1CommentImport403Error1Value)) onApiV1CommentImport403Error1(apiV1CommentImport403Error1Value);
        else if (TryGetApiV1CommentImport404Error1(
            out var apiV1CommentImport404Error1Value)) onApiV1CommentImport404Error1(apiV1CommentImport404Error1Value);
        else if (TryGetApiV1CommentImport429Error1(
            out var apiV1CommentImport429Error1Value)) onApiV1CommentImport429Error1(apiV1CommentImport429Error1Value);
        else if (TryGetApiV1CommentImport500Error1(
            out var apiV1CommentImport500Error1Value)) onApiV1CommentImport500Error1(apiV1CommentImport500Error1Value);
        else if (TryGetApiV1CommentImport502Error1(
            out var apiV1CommentImport502Error1Value)) onApiV1CommentImport502Error1(apiV1CommentImport502Error1Value);
        else if (TryGetApiV1CommentImport503Error1(
            out var apiV1CommentImport503Error1Value)) onApiV1CommentImport503Error1(apiV1CommentImport503Error1Value);
        else if (TryGetApiV1CommentImport504Error1(
            out var apiV1CommentImport504Error1Value)) onApiV1CommentImport504Error1(apiV1CommentImport504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CommentImportGetByIdError)} holds no value.");
    }

    private static Task<CommentImportGetByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1CommentImport400Error1>().As(AsApiV1CommentImport400Error1),
            401 => response.Json<ApiV1CommentImport401Error1>().As(AsApiV1CommentImport401Error1),
            403 => response.Json<ApiV1CommentImport403Error1>().As(AsApiV1CommentImport403Error1),
            404 => response.Json<ApiV1CommentImport404Error1>().As(AsApiV1CommentImport404Error1),
            429 => response.Json<ApiV1CommentImport429Error1>().As(AsApiV1CommentImport429Error1),
            500 => response.Json<ApiV1CommentImport500Error1>().As(AsApiV1CommentImport500Error1),
            502 => response.Json<ApiV1CommentImport502Error1>().As(AsApiV1CommentImport502Error1),
            503 => response.Json<ApiV1CommentImport503Error1>().As(AsApiV1CommentImport503Error1),
            504 => response.Json<ApiV1CommentImport504Error1>().As(AsApiV1CommentImport504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CommentImportGetByIdError> Response { get; } = new(Create);
}
