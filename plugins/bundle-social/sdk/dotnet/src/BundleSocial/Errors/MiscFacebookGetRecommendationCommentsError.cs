using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookGetRecommendationCommentsError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookRecommendationsComments400Error1> _apiV1MiscFacebookRecommendationsComments400Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments401Error1> _apiV1MiscFacebookRecommendationsComments401Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments403Error1> _apiV1MiscFacebookRecommendationsComments403Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments404Error1> _apiV1MiscFacebookRecommendationsComments404Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments429Error1> _apiV1MiscFacebookRecommendationsComments429Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments500Error1> _apiV1MiscFacebookRecommendationsComments500Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments502Error1> _apiV1MiscFacebookRecommendationsComments502Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments503Error1> _apiV1MiscFacebookRecommendationsComments503Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsComments504Error1> _apiV1MiscFacebookRecommendationsComments504Error1Value;

    private MiscFacebookGetRecommendationCommentsError(Optional<ApiV1MiscFacebookRecommendationsComments400Error1> apiV1MiscFacebookRecommendationsComments400Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments401Error1> apiV1MiscFacebookRecommendationsComments401Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments403Error1> apiV1MiscFacebookRecommendationsComments403Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments404Error1> apiV1MiscFacebookRecommendationsComments404Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments429Error1> apiV1MiscFacebookRecommendationsComments429Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments500Error1> apiV1MiscFacebookRecommendationsComments500Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments502Error1> apiV1MiscFacebookRecommendationsComments502Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments503Error1> apiV1MiscFacebookRecommendationsComments503Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsComments504Error1> apiV1MiscFacebookRecommendationsComments504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookRecommendationsComments400Error1Value =
            apiV1MiscFacebookRecommendationsComments400Error1Value;
        _apiV1MiscFacebookRecommendationsComments401Error1Value =
            apiV1MiscFacebookRecommendationsComments401Error1Value;
        _apiV1MiscFacebookRecommendationsComments403Error1Value =
            apiV1MiscFacebookRecommendationsComments403Error1Value;
        _apiV1MiscFacebookRecommendationsComments404Error1Value =
            apiV1MiscFacebookRecommendationsComments404Error1Value;
        _apiV1MiscFacebookRecommendationsComments429Error1Value =
            apiV1MiscFacebookRecommendationsComments429Error1Value;
        _apiV1MiscFacebookRecommendationsComments500Error1Value =
            apiV1MiscFacebookRecommendationsComments500Error1Value;
        _apiV1MiscFacebookRecommendationsComments502Error1Value =
            apiV1MiscFacebookRecommendationsComments502Error1Value;
        _apiV1MiscFacebookRecommendationsComments503Error1Value =
            apiV1MiscFacebookRecommendationsComments503Error1Value;
        _apiV1MiscFacebookRecommendationsComments504Error1Value =
            apiV1MiscFacebookRecommendationsComments504Error1Value;
    }

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments400Error1(ApiV1MiscFacebookRecommendationsComments400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookRecommendationsComments400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments401Error1(ApiV1MiscFacebookRecommendationsComments401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments403Error1(ApiV1MiscFacebookRecommendationsComments403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments404Error1(ApiV1MiscFacebookRecommendationsComments404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments429Error1(ApiV1MiscFacebookRecommendationsComments429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments500Error1(ApiV1MiscFacebookRecommendationsComments500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments502Error1(ApiV1MiscFacebookRecommendationsComments502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments503Error1(ApiV1MiscFacebookRecommendationsComments503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookGetRecommendationCommentsError AsApiV1MiscFacebookRecommendationsComments504Error1(ApiV1MiscFacebookRecommendationsComments504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsComments504Error1>.Some(value),
            default);

    private static MiscFacebookGetRecommendationCommentsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookRecommendationsComments400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments400Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments401Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments403Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments404Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments429Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments500Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments502Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments503Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsComments504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments504Error1? value) =>
        _apiV1MiscFacebookRecommendationsComments504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookRecommendationsComments400Error1, TResult> onApiV1MiscFacebookRecommendationsComments400Error1,
        Func<ApiV1MiscFacebookRecommendationsComments401Error1, TResult> onApiV1MiscFacebookRecommendationsComments401Error1,
        Func<ApiV1MiscFacebookRecommendationsComments403Error1, TResult> onApiV1MiscFacebookRecommendationsComments403Error1,
        Func<ApiV1MiscFacebookRecommendationsComments404Error1, TResult> onApiV1MiscFacebookRecommendationsComments404Error1,
        Func<ApiV1MiscFacebookRecommendationsComments429Error1, TResult> onApiV1MiscFacebookRecommendationsComments429Error1,
        Func<ApiV1MiscFacebookRecommendationsComments500Error1, TResult> onApiV1MiscFacebookRecommendationsComments500Error1,
        Func<ApiV1MiscFacebookRecommendationsComments502Error1, TResult> onApiV1MiscFacebookRecommendationsComments502Error1,
        Func<ApiV1MiscFacebookRecommendationsComments503Error1, TResult> onApiV1MiscFacebookRecommendationsComments503Error1,
        Func<ApiV1MiscFacebookRecommendationsComments504Error1, TResult> onApiV1MiscFacebookRecommendationsComments504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookRecommendationsComments400Error1(
                out var apiV1MiscFacebookRecommendationsComments400Error1Value) => onApiV1MiscFacebookRecommendationsComments400Error1(
                apiV1MiscFacebookRecommendationsComments400Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments401Error1(
                out var apiV1MiscFacebookRecommendationsComments401Error1Value) => onApiV1MiscFacebookRecommendationsComments401Error1(
                apiV1MiscFacebookRecommendationsComments401Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments403Error1(
                out var apiV1MiscFacebookRecommendationsComments403Error1Value) => onApiV1MiscFacebookRecommendationsComments403Error1(
                apiV1MiscFacebookRecommendationsComments403Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments404Error1(
                out var apiV1MiscFacebookRecommendationsComments404Error1Value) => onApiV1MiscFacebookRecommendationsComments404Error1(
                apiV1MiscFacebookRecommendationsComments404Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments429Error1(
                out var apiV1MiscFacebookRecommendationsComments429Error1Value) => onApiV1MiscFacebookRecommendationsComments429Error1(
                apiV1MiscFacebookRecommendationsComments429Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments500Error1(
                out var apiV1MiscFacebookRecommendationsComments500Error1Value) => onApiV1MiscFacebookRecommendationsComments500Error1(
                apiV1MiscFacebookRecommendationsComments500Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments502Error1(
                out var apiV1MiscFacebookRecommendationsComments502Error1Value) => onApiV1MiscFacebookRecommendationsComments502Error1(
                apiV1MiscFacebookRecommendationsComments502Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments503Error1(
                out var apiV1MiscFacebookRecommendationsComments503Error1Value) => onApiV1MiscFacebookRecommendationsComments503Error1(
                apiV1MiscFacebookRecommendationsComments503Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsComments504Error1(
                out var apiV1MiscFacebookRecommendationsComments504Error1Value) => onApiV1MiscFacebookRecommendationsComments504Error1(
                apiV1MiscFacebookRecommendationsComments504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscFacebookGetRecommendationCommentsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookRecommendationsComments400Error1> onApiV1MiscFacebookRecommendationsComments400Error1,
        Action<ApiV1MiscFacebookRecommendationsComments401Error1> onApiV1MiscFacebookRecommendationsComments401Error1,
        Action<ApiV1MiscFacebookRecommendationsComments403Error1> onApiV1MiscFacebookRecommendationsComments403Error1,
        Action<ApiV1MiscFacebookRecommendationsComments404Error1> onApiV1MiscFacebookRecommendationsComments404Error1,
        Action<ApiV1MiscFacebookRecommendationsComments429Error1> onApiV1MiscFacebookRecommendationsComments429Error1,
        Action<ApiV1MiscFacebookRecommendationsComments500Error1> onApiV1MiscFacebookRecommendationsComments500Error1,
        Action<ApiV1MiscFacebookRecommendationsComments502Error1> onApiV1MiscFacebookRecommendationsComments502Error1,
        Action<ApiV1MiscFacebookRecommendationsComments503Error1> onApiV1MiscFacebookRecommendationsComments503Error1,
        Action<ApiV1MiscFacebookRecommendationsComments504Error1> onApiV1MiscFacebookRecommendationsComments504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookRecommendationsComments400Error1(
            out var apiV1MiscFacebookRecommendationsComments400Error1Value)) onApiV1MiscFacebookRecommendationsComments400Error1(
            apiV1MiscFacebookRecommendationsComments400Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments401Error1(
            out var apiV1MiscFacebookRecommendationsComments401Error1Value)) onApiV1MiscFacebookRecommendationsComments401Error1(
            apiV1MiscFacebookRecommendationsComments401Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments403Error1(
            out var apiV1MiscFacebookRecommendationsComments403Error1Value)) onApiV1MiscFacebookRecommendationsComments403Error1(
            apiV1MiscFacebookRecommendationsComments403Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments404Error1(
            out var apiV1MiscFacebookRecommendationsComments404Error1Value)) onApiV1MiscFacebookRecommendationsComments404Error1(
            apiV1MiscFacebookRecommendationsComments404Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments429Error1(
            out var apiV1MiscFacebookRecommendationsComments429Error1Value)) onApiV1MiscFacebookRecommendationsComments429Error1(
            apiV1MiscFacebookRecommendationsComments429Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments500Error1(
            out var apiV1MiscFacebookRecommendationsComments500Error1Value)) onApiV1MiscFacebookRecommendationsComments500Error1(
            apiV1MiscFacebookRecommendationsComments500Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments502Error1(
            out var apiV1MiscFacebookRecommendationsComments502Error1Value)) onApiV1MiscFacebookRecommendationsComments502Error1(
            apiV1MiscFacebookRecommendationsComments502Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments503Error1(
            out var apiV1MiscFacebookRecommendationsComments503Error1Value)) onApiV1MiscFacebookRecommendationsComments503Error1(
            apiV1MiscFacebookRecommendationsComments503Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsComments504Error1(
            out var apiV1MiscFacebookRecommendationsComments504Error1Value)) onApiV1MiscFacebookRecommendationsComments504Error1(
            apiV1MiscFacebookRecommendationsComments504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscFacebookGetRecommendationCommentsError)} holds no value.");
    }

    private static Task<MiscFacebookGetRecommendationCommentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookRecommendationsComments400Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments400Error1),
            401 => response.Json<ApiV1MiscFacebookRecommendationsComments401Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments401Error1),
            403 => response.Json<ApiV1MiscFacebookRecommendationsComments403Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments403Error1),
            404 => response.Json<ApiV1MiscFacebookRecommendationsComments404Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments404Error1),
            429 => response.Json<ApiV1MiscFacebookRecommendationsComments429Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments429Error1),
            500 => response.Json<ApiV1MiscFacebookRecommendationsComments500Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments500Error1),
            502 => response.Json<ApiV1MiscFacebookRecommendationsComments502Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments502Error1),
            503 => response.Json<ApiV1MiscFacebookRecommendationsComments503Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments503Error1),
            504 => response.Json<ApiV1MiscFacebookRecommendationsComments504Error1>().As(
                AsApiV1MiscFacebookRecommendationsComments504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookGetRecommendationCommentsError> Response { get; } = new(Create);
}
