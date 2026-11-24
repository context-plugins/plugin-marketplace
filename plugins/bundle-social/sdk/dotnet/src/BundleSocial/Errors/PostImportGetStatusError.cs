using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostImportGetStatusError : ApiError
{
    private readonly Optional<ApiV1PostHistoryImport400Error1> _apiV1PostHistoryImport400Error1Value;

    private readonly Optional<ApiV1PostHistoryImport401Error1> _apiV1PostHistoryImport401Error1Value;

    private readonly Optional<ApiV1PostHistoryImport403Error1> _apiV1PostHistoryImport403Error1Value;

    private readonly Optional<ApiV1PostHistoryImport404Error1> _apiV1PostHistoryImport404Error1Value;

    private readonly Optional<ApiV1PostHistoryImport429Error1> _apiV1PostHistoryImport429Error1Value;

    private readonly Optional<ApiV1PostHistoryImport500Error1> _apiV1PostHistoryImport500Error1Value;

    private readonly Optional<ApiV1PostHistoryImport502Error1> _apiV1PostHistoryImport502Error1Value;

    private readonly Optional<ApiV1PostHistoryImport503Error1> _apiV1PostHistoryImport503Error1Value;

    private readonly Optional<ApiV1PostHistoryImport504Error1> _apiV1PostHistoryImport504Error1Value;

    private PostImportGetStatusError(Optional<ApiV1PostHistoryImport400Error1> apiV1PostHistoryImport400Error1Value,
        Optional<ApiV1PostHistoryImport401Error1> apiV1PostHistoryImport401Error1Value,
        Optional<ApiV1PostHistoryImport403Error1> apiV1PostHistoryImport403Error1Value,
        Optional<ApiV1PostHistoryImport404Error1> apiV1PostHistoryImport404Error1Value,
        Optional<ApiV1PostHistoryImport429Error1> apiV1PostHistoryImport429Error1Value,
        Optional<ApiV1PostHistoryImport500Error1> apiV1PostHistoryImport500Error1Value,
        Optional<ApiV1PostHistoryImport502Error1> apiV1PostHistoryImport502Error1Value,
        Optional<ApiV1PostHistoryImport503Error1> apiV1PostHistoryImport503Error1Value,
        Optional<ApiV1PostHistoryImport504Error1> apiV1PostHistoryImport504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostHistoryImport400Error1Value = apiV1PostHistoryImport400Error1Value;
        _apiV1PostHistoryImport401Error1Value = apiV1PostHistoryImport401Error1Value;
        _apiV1PostHistoryImport403Error1Value = apiV1PostHistoryImport403Error1Value;
        _apiV1PostHistoryImport404Error1Value = apiV1PostHistoryImport404Error1Value;
        _apiV1PostHistoryImport429Error1Value = apiV1PostHistoryImport429Error1Value;
        _apiV1PostHistoryImport500Error1Value = apiV1PostHistoryImport500Error1Value;
        _apiV1PostHistoryImport502Error1Value = apiV1PostHistoryImport502Error1Value;
        _apiV1PostHistoryImport503Error1Value = apiV1PostHistoryImport503Error1Value;
        _apiV1PostHistoryImport504Error1Value = apiV1PostHistoryImport504Error1Value;
    }

    private static PostImportGetStatusError AsApiV1PostHistoryImport400Error1(ApiV1PostHistoryImport400Error1 value) =>
        new(
            Optional<ApiV1PostHistoryImport400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport401Error1(ApiV1PostHistoryImport401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostHistoryImport401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport403Error1(ApiV1PostHistoryImport403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostHistoryImport403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport404Error1(ApiV1PostHistoryImport404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport429Error1(ApiV1PostHistoryImport429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport500Error1(ApiV1PostHistoryImport500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport502Error1(ApiV1PostHistoryImport502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport502Error1>.Some(value),
            default,
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport503Error1(ApiV1PostHistoryImport503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport503Error1>.Some(value),
            default,
            default);

    private static PostImportGetStatusError AsApiV1PostHistoryImport504Error1(ApiV1PostHistoryImport504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImport504Error1>.Some(value),
            default);

    private static PostImportGetStatusError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostHistoryImport400Error1([NotNullWhen(true)] out ApiV1PostHistoryImport400Error1? value) =>
        _apiV1PostHistoryImport400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport401Error1([NotNullWhen(true)] out ApiV1PostHistoryImport401Error1? value) =>
        _apiV1PostHistoryImport401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport403Error1([NotNullWhen(true)] out ApiV1PostHistoryImport403Error1? value) =>
        _apiV1PostHistoryImport403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport404Error1([NotNullWhen(true)] out ApiV1PostHistoryImport404Error1? value) =>
        _apiV1PostHistoryImport404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport429Error1([NotNullWhen(true)] out ApiV1PostHistoryImport429Error1? value) =>
        _apiV1PostHistoryImport429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport500Error1([NotNullWhen(true)] out ApiV1PostHistoryImport500Error1? value) =>
        _apiV1PostHistoryImport500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport502Error1([NotNullWhen(true)] out ApiV1PostHistoryImport502Error1? value) =>
        _apiV1PostHistoryImport502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport503Error1([NotNullWhen(true)] out ApiV1PostHistoryImport503Error1? value) =>
        _apiV1PostHistoryImport503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImport504Error1([NotNullWhen(true)] out ApiV1PostHistoryImport504Error1? value) =>
        _apiV1PostHistoryImport504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostHistoryImport400Error1, TResult> onApiV1PostHistoryImport400Error1,
        Func<ApiV1PostHistoryImport401Error1, TResult> onApiV1PostHistoryImport401Error1,
        Func<ApiV1PostHistoryImport403Error1, TResult> onApiV1PostHistoryImport403Error1,
        Func<ApiV1PostHistoryImport404Error1, TResult> onApiV1PostHistoryImport404Error1,
        Func<ApiV1PostHistoryImport429Error1, TResult> onApiV1PostHistoryImport429Error1,
        Func<ApiV1PostHistoryImport500Error1, TResult> onApiV1PostHistoryImport500Error1,
        Func<ApiV1PostHistoryImport502Error1, TResult> onApiV1PostHistoryImport502Error1,
        Func<ApiV1PostHistoryImport503Error1, TResult> onApiV1PostHistoryImport503Error1,
        Func<ApiV1PostHistoryImport504Error1, TResult> onApiV1PostHistoryImport504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostHistoryImport400Error1(
                out var apiV1PostHistoryImport400Error1Value) => onApiV1PostHistoryImport400Error1(
                apiV1PostHistoryImport400Error1Value),
            _ when TryGetApiV1PostHistoryImport401Error1(
                out var apiV1PostHistoryImport401Error1Value) => onApiV1PostHistoryImport401Error1(
                apiV1PostHistoryImport401Error1Value),
            _ when TryGetApiV1PostHistoryImport403Error1(
                out var apiV1PostHistoryImport403Error1Value) => onApiV1PostHistoryImport403Error1(
                apiV1PostHistoryImport403Error1Value),
            _ when TryGetApiV1PostHistoryImport404Error1(
                out var apiV1PostHistoryImport404Error1Value) => onApiV1PostHistoryImport404Error1(
                apiV1PostHistoryImport404Error1Value),
            _ when TryGetApiV1PostHistoryImport429Error1(
                out var apiV1PostHistoryImport429Error1Value) => onApiV1PostHistoryImport429Error1(
                apiV1PostHistoryImport429Error1Value),
            _ when TryGetApiV1PostHistoryImport500Error1(
                out var apiV1PostHistoryImport500Error1Value) => onApiV1PostHistoryImport500Error1(
                apiV1PostHistoryImport500Error1Value),
            _ when TryGetApiV1PostHistoryImport502Error1(
                out var apiV1PostHistoryImport502Error1Value) => onApiV1PostHistoryImport502Error1(
                apiV1PostHistoryImport502Error1Value),
            _ when TryGetApiV1PostHistoryImport503Error1(
                out var apiV1PostHistoryImport503Error1Value) => onApiV1PostHistoryImport503Error1(
                apiV1PostHistoryImport503Error1Value),
            _ when TryGetApiV1PostHistoryImport504Error1(
                out var apiV1PostHistoryImport504Error1Value) => onApiV1PostHistoryImport504Error1(
                apiV1PostHistoryImport504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostImportGetStatusError)} holds no value.")
        };

    public void Match(Action<ApiV1PostHistoryImport400Error1> onApiV1PostHistoryImport400Error1,
        Action<ApiV1PostHistoryImport401Error1> onApiV1PostHistoryImport401Error1,
        Action<ApiV1PostHistoryImport403Error1> onApiV1PostHistoryImport403Error1,
        Action<ApiV1PostHistoryImport404Error1> onApiV1PostHistoryImport404Error1,
        Action<ApiV1PostHistoryImport429Error1> onApiV1PostHistoryImport429Error1,
        Action<ApiV1PostHistoryImport500Error1> onApiV1PostHistoryImport500Error1,
        Action<ApiV1PostHistoryImport502Error1> onApiV1PostHistoryImport502Error1,
        Action<ApiV1PostHistoryImport503Error1> onApiV1PostHistoryImport503Error1,
        Action<ApiV1PostHistoryImport504Error1> onApiV1PostHistoryImport504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostHistoryImport400Error1(
            out var apiV1PostHistoryImport400Error1Value)) onApiV1PostHistoryImport400Error1(
            apiV1PostHistoryImport400Error1Value);
        else if (TryGetApiV1PostHistoryImport401Error1(
            out var apiV1PostHistoryImport401Error1Value)) onApiV1PostHistoryImport401Error1(
            apiV1PostHistoryImport401Error1Value);
        else if (TryGetApiV1PostHistoryImport403Error1(
            out var apiV1PostHistoryImport403Error1Value)) onApiV1PostHistoryImport403Error1(
            apiV1PostHistoryImport403Error1Value);
        else if (TryGetApiV1PostHistoryImport404Error1(
            out var apiV1PostHistoryImport404Error1Value)) onApiV1PostHistoryImport404Error1(
            apiV1PostHistoryImport404Error1Value);
        else if (TryGetApiV1PostHistoryImport429Error1(
            out var apiV1PostHistoryImport429Error1Value)) onApiV1PostHistoryImport429Error1(
            apiV1PostHistoryImport429Error1Value);
        else if (TryGetApiV1PostHistoryImport500Error1(
            out var apiV1PostHistoryImport500Error1Value)) onApiV1PostHistoryImport500Error1(
            apiV1PostHistoryImport500Error1Value);
        else if (TryGetApiV1PostHistoryImport502Error1(
            out var apiV1PostHistoryImport502Error1Value)) onApiV1PostHistoryImport502Error1(
            apiV1PostHistoryImport502Error1Value);
        else if (TryGetApiV1PostHistoryImport503Error1(
            out var apiV1PostHistoryImport503Error1Value)) onApiV1PostHistoryImport503Error1(
            apiV1PostHistoryImport503Error1Value);
        else if (TryGetApiV1PostHistoryImport504Error1(
            out var apiV1PostHistoryImport504Error1Value)) onApiV1PostHistoryImport504Error1(
            apiV1PostHistoryImport504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostImportGetStatusError)} holds no value.");
    }

    private static Task<PostImportGetStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostHistoryImport400Error1>().As(AsApiV1PostHistoryImport400Error1),
            401 => response.Json<ApiV1PostHistoryImport401Error1>().As(AsApiV1PostHistoryImport401Error1),
            403 => response.Json<ApiV1PostHistoryImport403Error1>().As(AsApiV1PostHistoryImport403Error1),
            404 => response.Json<ApiV1PostHistoryImport404Error1>().As(AsApiV1PostHistoryImport404Error1),
            429 => response.Json<ApiV1PostHistoryImport429Error1>().As(AsApiV1PostHistoryImport429Error1),
            500 => response.Json<ApiV1PostHistoryImport500Error1>().As(AsApiV1PostHistoryImport500Error1),
            502 => response.Json<ApiV1PostHistoryImport502Error1>().As(AsApiV1PostHistoryImport502Error1),
            503 => response.Json<ApiV1PostHistoryImport503Error1>().As(AsApiV1PostHistoryImport503Error1),
            504 => response.Json<ApiV1PostHistoryImport504Error1>().As(AsApiV1PostHistoryImport504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostImportGetStatusError> Response { get; } = new(Create);
}
