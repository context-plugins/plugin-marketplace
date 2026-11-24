using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookGetRecommendationImportStatusError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookRecommendationsImport400Error1> _apiV1MiscFacebookRecommendationsImport400Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport401Error1> _apiV1MiscFacebookRecommendationsImport401Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport403Error1> _apiV1MiscFacebookRecommendationsImport403Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport404Error1> _apiV1MiscFacebookRecommendationsImport404Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport429Error1> _apiV1MiscFacebookRecommendationsImport429Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport500Error1> _apiV1MiscFacebookRecommendationsImport500Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport502Error1> _apiV1MiscFacebookRecommendationsImport502Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport503Error1> _apiV1MiscFacebookRecommendationsImport503Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsImport504Error1> _apiV1MiscFacebookRecommendationsImport504Error1Value;

    private MiscFacebookGetRecommendationImportStatusError(Optional<ApiV1MiscFacebookRecommendationsImport400Error1> apiV1MiscFacebookRecommendationsImport400Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport401Error1> apiV1MiscFacebookRecommendationsImport401Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport403Error1> apiV1MiscFacebookRecommendationsImport403Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport404Error1> apiV1MiscFacebookRecommendationsImport404Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport429Error1> apiV1MiscFacebookRecommendationsImport429Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport500Error1> apiV1MiscFacebookRecommendationsImport500Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport502Error1> apiV1MiscFacebookRecommendationsImport502Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport503Error1> apiV1MiscFacebookRecommendationsImport503Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsImport504Error1> apiV1MiscFacebookRecommendationsImport504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookRecommendationsImport400Error1Value = apiV1MiscFacebookRecommendationsImport400Error1Value;
        _apiV1MiscFacebookRecommendationsImport401Error1Value = apiV1MiscFacebookRecommendationsImport401Error1Value;
        _apiV1MiscFacebookRecommendationsImport403Error1Value = apiV1MiscFacebookRecommendationsImport403Error1Value;
        _apiV1MiscFacebookRecommendationsImport404Error1Value = apiV1MiscFacebookRecommendationsImport404Error1Value;
        _apiV1MiscFacebookRecommendationsImport429Error1Value = apiV1MiscFacebookRecommendationsImport429Error1Value;
        _apiV1MiscFacebookRecommendationsImport500Error1Value = apiV1MiscFacebookRecommendationsImport500Error1Value;
        _apiV1MiscFacebookRecommendationsImport502Error1Value = apiV1MiscFacebookRecommendationsImport502Error1Value;
        _apiV1MiscFacebookRecommendationsImport503Error1Value = apiV1MiscFacebookRecommendationsImport503Error1Value;
        _apiV1MiscFacebookRecommendationsImport504Error1Value = apiV1MiscFacebookRecommendationsImport504Error1Value;
    }

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport400Error1(ApiV1MiscFacebookRecommendationsImport400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookRecommendationsImport400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport401Error1(ApiV1MiscFacebookRecommendationsImport401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport403Error1(ApiV1MiscFacebookRecommendationsImport403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport404Error1(ApiV1MiscFacebookRecommendationsImport404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport429Error1(ApiV1MiscFacebookRecommendationsImport429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport500Error1(ApiV1MiscFacebookRecommendationsImport500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport502Error1(ApiV1MiscFacebookRecommendationsImport502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport503Error1(ApiV1MiscFacebookRecommendationsImport503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsApiV1MiscFacebookRecommendationsImport504Error1(ApiV1MiscFacebookRecommendationsImport504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsImport504Error1>.Some(value),
            default);

    private static MiscFacebookGetRecommendationImportStatusError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookRecommendationsImport400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport400Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport401Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport403Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport404Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport429Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport500Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport502Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport503Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsImport504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport504Error1? value) =>
        _apiV1MiscFacebookRecommendationsImport504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookRecommendationsImport400Error1, TResult> onApiV1MiscFacebookRecommendationsImport400Error1,
        Func<ApiV1MiscFacebookRecommendationsImport401Error1, TResult> onApiV1MiscFacebookRecommendationsImport401Error1,
        Func<ApiV1MiscFacebookRecommendationsImport403Error1, TResult> onApiV1MiscFacebookRecommendationsImport403Error1,
        Func<ApiV1MiscFacebookRecommendationsImport404Error1, TResult> onApiV1MiscFacebookRecommendationsImport404Error1,
        Func<ApiV1MiscFacebookRecommendationsImport429Error1, TResult> onApiV1MiscFacebookRecommendationsImport429Error1,
        Func<ApiV1MiscFacebookRecommendationsImport500Error1, TResult> onApiV1MiscFacebookRecommendationsImport500Error1,
        Func<ApiV1MiscFacebookRecommendationsImport502Error1, TResult> onApiV1MiscFacebookRecommendationsImport502Error1,
        Func<ApiV1MiscFacebookRecommendationsImport503Error1, TResult> onApiV1MiscFacebookRecommendationsImport503Error1,
        Func<ApiV1MiscFacebookRecommendationsImport504Error1, TResult> onApiV1MiscFacebookRecommendationsImport504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookRecommendationsImport400Error1(
                out var apiV1MiscFacebookRecommendationsImport400Error1Value) => onApiV1MiscFacebookRecommendationsImport400Error1(
                apiV1MiscFacebookRecommendationsImport400Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport401Error1(
                out var apiV1MiscFacebookRecommendationsImport401Error1Value) => onApiV1MiscFacebookRecommendationsImport401Error1(
                apiV1MiscFacebookRecommendationsImport401Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport403Error1(
                out var apiV1MiscFacebookRecommendationsImport403Error1Value) => onApiV1MiscFacebookRecommendationsImport403Error1(
                apiV1MiscFacebookRecommendationsImport403Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport404Error1(
                out var apiV1MiscFacebookRecommendationsImport404Error1Value) => onApiV1MiscFacebookRecommendationsImport404Error1(
                apiV1MiscFacebookRecommendationsImport404Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport429Error1(
                out var apiV1MiscFacebookRecommendationsImport429Error1Value) => onApiV1MiscFacebookRecommendationsImport429Error1(
                apiV1MiscFacebookRecommendationsImport429Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport500Error1(
                out var apiV1MiscFacebookRecommendationsImport500Error1Value) => onApiV1MiscFacebookRecommendationsImport500Error1(
                apiV1MiscFacebookRecommendationsImport500Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport502Error1(
                out var apiV1MiscFacebookRecommendationsImport502Error1Value) => onApiV1MiscFacebookRecommendationsImport502Error1(
                apiV1MiscFacebookRecommendationsImport502Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport503Error1(
                out var apiV1MiscFacebookRecommendationsImport503Error1Value) => onApiV1MiscFacebookRecommendationsImport503Error1(
                apiV1MiscFacebookRecommendationsImport503Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsImport504Error1(
                out var apiV1MiscFacebookRecommendationsImport504Error1Value) => onApiV1MiscFacebookRecommendationsImport504Error1(
                apiV1MiscFacebookRecommendationsImport504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscFacebookGetRecommendationImportStatusError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookRecommendationsImport400Error1> onApiV1MiscFacebookRecommendationsImport400Error1,
        Action<ApiV1MiscFacebookRecommendationsImport401Error1> onApiV1MiscFacebookRecommendationsImport401Error1,
        Action<ApiV1MiscFacebookRecommendationsImport403Error1> onApiV1MiscFacebookRecommendationsImport403Error1,
        Action<ApiV1MiscFacebookRecommendationsImport404Error1> onApiV1MiscFacebookRecommendationsImport404Error1,
        Action<ApiV1MiscFacebookRecommendationsImport429Error1> onApiV1MiscFacebookRecommendationsImport429Error1,
        Action<ApiV1MiscFacebookRecommendationsImport500Error1> onApiV1MiscFacebookRecommendationsImport500Error1,
        Action<ApiV1MiscFacebookRecommendationsImport502Error1> onApiV1MiscFacebookRecommendationsImport502Error1,
        Action<ApiV1MiscFacebookRecommendationsImport503Error1> onApiV1MiscFacebookRecommendationsImport503Error1,
        Action<ApiV1MiscFacebookRecommendationsImport504Error1> onApiV1MiscFacebookRecommendationsImport504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookRecommendationsImport400Error1(
            out var apiV1MiscFacebookRecommendationsImport400Error1Value)) onApiV1MiscFacebookRecommendationsImport400Error1(
            apiV1MiscFacebookRecommendationsImport400Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport401Error1(
            out var apiV1MiscFacebookRecommendationsImport401Error1Value)) onApiV1MiscFacebookRecommendationsImport401Error1(
            apiV1MiscFacebookRecommendationsImport401Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport403Error1(
            out var apiV1MiscFacebookRecommendationsImport403Error1Value)) onApiV1MiscFacebookRecommendationsImport403Error1(
            apiV1MiscFacebookRecommendationsImport403Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport404Error1(
            out var apiV1MiscFacebookRecommendationsImport404Error1Value)) onApiV1MiscFacebookRecommendationsImport404Error1(
            apiV1MiscFacebookRecommendationsImport404Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport429Error1(
            out var apiV1MiscFacebookRecommendationsImport429Error1Value)) onApiV1MiscFacebookRecommendationsImport429Error1(
            apiV1MiscFacebookRecommendationsImport429Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport500Error1(
            out var apiV1MiscFacebookRecommendationsImport500Error1Value)) onApiV1MiscFacebookRecommendationsImport500Error1(
            apiV1MiscFacebookRecommendationsImport500Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport502Error1(
            out var apiV1MiscFacebookRecommendationsImport502Error1Value)) onApiV1MiscFacebookRecommendationsImport502Error1(
            apiV1MiscFacebookRecommendationsImport502Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport503Error1(
            out var apiV1MiscFacebookRecommendationsImport503Error1Value)) onApiV1MiscFacebookRecommendationsImport503Error1(
            apiV1MiscFacebookRecommendationsImport503Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsImport504Error1(
            out var apiV1MiscFacebookRecommendationsImport504Error1Value)) onApiV1MiscFacebookRecommendationsImport504Error1(
            apiV1MiscFacebookRecommendationsImport504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscFacebookGetRecommendationImportStatusError)} holds no value.");
    }

    private static Task<MiscFacebookGetRecommendationImportStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookRecommendationsImport400Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport400Error1),
            401 => response.Json<ApiV1MiscFacebookRecommendationsImport401Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport401Error1),
            403 => response.Json<ApiV1MiscFacebookRecommendationsImport403Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport403Error1),
            404 => response.Json<ApiV1MiscFacebookRecommendationsImport404Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport404Error1),
            429 => response.Json<ApiV1MiscFacebookRecommendationsImport429Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport429Error1),
            500 => response.Json<ApiV1MiscFacebookRecommendationsImport500Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport500Error1),
            502 => response.Json<ApiV1MiscFacebookRecommendationsImport502Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport502Error1),
            503 => response.Json<ApiV1MiscFacebookRecommendationsImport503Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport503Error1),
            504 => response.Json<ApiV1MiscFacebookRecommendationsImport504Error1>().As(
                AsApiV1MiscFacebookRecommendationsImport504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookGetRecommendationImportStatusError> Response { get; } = new(Create);
}
