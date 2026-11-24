using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessImportReviewsError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport400Error1> _apiV1MiscGoogleBusinessReviewsImport400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport401Error1> _apiV1MiscGoogleBusinessReviewsImport401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport403Error1> _apiV1MiscGoogleBusinessReviewsImport403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport404Error1> _apiV1MiscGoogleBusinessReviewsImport404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport409Error1> _apiV1MiscGoogleBusinessReviewsImport409Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport429Error1> _apiV1MiscGoogleBusinessReviewsImport429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport500Error1> _apiV1MiscGoogleBusinessReviewsImport500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport502Error1> _apiV1MiscGoogleBusinessReviewsImport502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport503Error1> _apiV1MiscGoogleBusinessReviewsImport503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviewsImport504Error1> _apiV1MiscGoogleBusinessReviewsImport504Error1Value;

    private MiscGoogleBusinessImportReviewsError(Optional<ApiV1MiscGoogleBusinessReviewsImport400Error1> apiV1MiscGoogleBusinessReviewsImport400Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport401Error1> apiV1MiscGoogleBusinessReviewsImport401Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport403Error1> apiV1MiscGoogleBusinessReviewsImport403Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport404Error1> apiV1MiscGoogleBusinessReviewsImport404Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport409Error1> apiV1MiscGoogleBusinessReviewsImport409Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport429Error1> apiV1MiscGoogleBusinessReviewsImport429Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport500Error1> apiV1MiscGoogleBusinessReviewsImport500Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport502Error1> apiV1MiscGoogleBusinessReviewsImport502Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport503Error1> apiV1MiscGoogleBusinessReviewsImport503Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviewsImport504Error1> apiV1MiscGoogleBusinessReviewsImport504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessReviewsImport400Error1Value = apiV1MiscGoogleBusinessReviewsImport400Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport401Error1Value = apiV1MiscGoogleBusinessReviewsImport401Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport403Error1Value = apiV1MiscGoogleBusinessReviewsImport403Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport404Error1Value = apiV1MiscGoogleBusinessReviewsImport404Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport409Error1Value = apiV1MiscGoogleBusinessReviewsImport409Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport429Error1Value = apiV1MiscGoogleBusinessReviewsImport429Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport500Error1Value = apiV1MiscGoogleBusinessReviewsImport500Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport502Error1Value = apiV1MiscGoogleBusinessReviewsImport502Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport503Error1Value = apiV1MiscGoogleBusinessReviewsImport503Error1Value;
        _apiV1MiscGoogleBusinessReviewsImport504Error1Value = apiV1MiscGoogleBusinessReviewsImport504Error1Value;
    }

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport400Error1(ApiV1MiscGoogleBusinessReviewsImport400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessReviewsImport400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport401Error1(ApiV1MiscGoogleBusinessReviewsImport401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport403Error1(ApiV1MiscGoogleBusinessReviewsImport403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport404Error1(ApiV1MiscGoogleBusinessReviewsImport404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport409Error1(ApiV1MiscGoogleBusinessReviewsImport409Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport409Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport429Error1(ApiV1MiscGoogleBusinessReviewsImport429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport500Error1(ApiV1MiscGoogleBusinessReviewsImport500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport502Error1(ApiV1MiscGoogleBusinessReviewsImport502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport503Error1(ApiV1MiscGoogleBusinessReviewsImport503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviewsImport503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessImportReviewsError AsApiV1MiscGoogleBusinessReviewsImport504Error1(ApiV1MiscGoogleBusinessReviewsImport504Error1 value) =>
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
            Optional<ApiV1MiscGoogleBusinessReviewsImport504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessImportReviewsError AsFallback(RawError value) =>
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
            default,
            Optional<RawError>.Some(value));

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport400Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport401Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport403Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport404Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport409Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport409Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport409Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport429Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport500Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport502Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport503Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviewsImport504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport504Error1? value) =>
        _apiV1MiscGoogleBusinessReviewsImport504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessReviewsImport400Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport400Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport401Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport401Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport403Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport403Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport404Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport404Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport409Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport409Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport429Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport429Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport500Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport500Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport502Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport502Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport503Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport503Error1,
        Func<ApiV1MiscGoogleBusinessReviewsImport504Error1, TResult> onApiV1MiscGoogleBusinessReviewsImport504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport400Error1(
                out var apiV1MiscGoogleBusinessReviewsImport400Error1Value) => onApiV1MiscGoogleBusinessReviewsImport400Error1(
                apiV1MiscGoogleBusinessReviewsImport400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport401Error1(
                out var apiV1MiscGoogleBusinessReviewsImport401Error1Value) => onApiV1MiscGoogleBusinessReviewsImport401Error1(
                apiV1MiscGoogleBusinessReviewsImport401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport403Error1(
                out var apiV1MiscGoogleBusinessReviewsImport403Error1Value) => onApiV1MiscGoogleBusinessReviewsImport403Error1(
                apiV1MiscGoogleBusinessReviewsImport403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport404Error1(
                out var apiV1MiscGoogleBusinessReviewsImport404Error1Value) => onApiV1MiscGoogleBusinessReviewsImport404Error1(
                apiV1MiscGoogleBusinessReviewsImport404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport409Error1(
                out var apiV1MiscGoogleBusinessReviewsImport409Error1Value) => onApiV1MiscGoogleBusinessReviewsImport409Error1(
                apiV1MiscGoogleBusinessReviewsImport409Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport429Error1(
                out var apiV1MiscGoogleBusinessReviewsImport429Error1Value) => onApiV1MiscGoogleBusinessReviewsImport429Error1(
                apiV1MiscGoogleBusinessReviewsImport429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport500Error1(
                out var apiV1MiscGoogleBusinessReviewsImport500Error1Value) => onApiV1MiscGoogleBusinessReviewsImport500Error1(
                apiV1MiscGoogleBusinessReviewsImport500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport502Error1(
                out var apiV1MiscGoogleBusinessReviewsImport502Error1Value) => onApiV1MiscGoogleBusinessReviewsImport502Error1(
                apiV1MiscGoogleBusinessReviewsImport502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport503Error1(
                out var apiV1MiscGoogleBusinessReviewsImport503Error1Value) => onApiV1MiscGoogleBusinessReviewsImport503Error1(
                apiV1MiscGoogleBusinessReviewsImport503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviewsImport504Error1(
                out var apiV1MiscGoogleBusinessReviewsImport504Error1Value) => onApiV1MiscGoogleBusinessReviewsImport504Error1(
                apiV1MiscGoogleBusinessReviewsImport504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessImportReviewsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessReviewsImport400Error1> onApiV1MiscGoogleBusinessReviewsImport400Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport401Error1> onApiV1MiscGoogleBusinessReviewsImport401Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport403Error1> onApiV1MiscGoogleBusinessReviewsImport403Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport404Error1> onApiV1MiscGoogleBusinessReviewsImport404Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport409Error1> onApiV1MiscGoogleBusinessReviewsImport409Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport429Error1> onApiV1MiscGoogleBusinessReviewsImport429Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport500Error1> onApiV1MiscGoogleBusinessReviewsImport500Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport502Error1> onApiV1MiscGoogleBusinessReviewsImport502Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport503Error1> onApiV1MiscGoogleBusinessReviewsImport503Error1,
        Action<ApiV1MiscGoogleBusinessReviewsImport504Error1> onApiV1MiscGoogleBusinessReviewsImport504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessReviewsImport400Error1(
            out var apiV1MiscGoogleBusinessReviewsImport400Error1Value)) onApiV1MiscGoogleBusinessReviewsImport400Error1(
            apiV1MiscGoogleBusinessReviewsImport400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport401Error1(
            out var apiV1MiscGoogleBusinessReviewsImport401Error1Value)) onApiV1MiscGoogleBusinessReviewsImport401Error1(
            apiV1MiscGoogleBusinessReviewsImport401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport403Error1(
            out var apiV1MiscGoogleBusinessReviewsImport403Error1Value)) onApiV1MiscGoogleBusinessReviewsImport403Error1(
            apiV1MiscGoogleBusinessReviewsImport403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport404Error1(
            out var apiV1MiscGoogleBusinessReviewsImport404Error1Value)) onApiV1MiscGoogleBusinessReviewsImport404Error1(
            apiV1MiscGoogleBusinessReviewsImport404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport409Error1(
            out var apiV1MiscGoogleBusinessReviewsImport409Error1Value)) onApiV1MiscGoogleBusinessReviewsImport409Error1(
            apiV1MiscGoogleBusinessReviewsImport409Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport429Error1(
            out var apiV1MiscGoogleBusinessReviewsImport429Error1Value)) onApiV1MiscGoogleBusinessReviewsImport429Error1(
            apiV1MiscGoogleBusinessReviewsImport429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport500Error1(
            out var apiV1MiscGoogleBusinessReviewsImport500Error1Value)) onApiV1MiscGoogleBusinessReviewsImport500Error1(
            apiV1MiscGoogleBusinessReviewsImport500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport502Error1(
            out var apiV1MiscGoogleBusinessReviewsImport502Error1Value)) onApiV1MiscGoogleBusinessReviewsImport502Error1(
            apiV1MiscGoogleBusinessReviewsImport502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport503Error1(
            out var apiV1MiscGoogleBusinessReviewsImport503Error1Value)) onApiV1MiscGoogleBusinessReviewsImport503Error1(
            apiV1MiscGoogleBusinessReviewsImport503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviewsImport504Error1(
            out var apiV1MiscGoogleBusinessReviewsImport504Error1Value)) onApiV1MiscGoogleBusinessReviewsImport504Error1(
            apiV1MiscGoogleBusinessReviewsImport504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessImportReviewsError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessImportReviewsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessReviewsImport400Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessReviewsImport401Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessReviewsImport403Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessReviewsImport404Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport404Error1),
            409 => response.Json<ApiV1MiscGoogleBusinessReviewsImport409Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport409Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessReviewsImport429Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessReviewsImport500Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessReviewsImport502Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessReviewsImport503Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessReviewsImport504Error1>().As(
                AsApiV1MiscGoogleBusinessReviewsImport504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessImportReviewsError> Response { get; } = new(Create);
}
