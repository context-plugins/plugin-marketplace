using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookReplyToRecommendationError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookRecommendationsReply400Error1> _apiV1MiscFacebookRecommendationsReply400Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply401Error1> _apiV1MiscFacebookRecommendationsReply401Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply403Error1> _apiV1MiscFacebookRecommendationsReply403Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply404Error1> _apiV1MiscFacebookRecommendationsReply404Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply429Error1> _apiV1MiscFacebookRecommendationsReply429Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply500Error1> _apiV1MiscFacebookRecommendationsReply500Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply502Error1> _apiV1MiscFacebookRecommendationsReply502Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply503Error1> _apiV1MiscFacebookRecommendationsReply503Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsReply504Error1> _apiV1MiscFacebookRecommendationsReply504Error1Value;

    private MiscFacebookReplyToRecommendationError(Optional<ApiV1MiscFacebookRecommendationsReply400Error1> apiV1MiscFacebookRecommendationsReply400Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply401Error1> apiV1MiscFacebookRecommendationsReply401Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply403Error1> apiV1MiscFacebookRecommendationsReply403Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply404Error1> apiV1MiscFacebookRecommendationsReply404Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply429Error1> apiV1MiscFacebookRecommendationsReply429Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply500Error1> apiV1MiscFacebookRecommendationsReply500Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply502Error1> apiV1MiscFacebookRecommendationsReply502Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply503Error1> apiV1MiscFacebookRecommendationsReply503Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsReply504Error1> apiV1MiscFacebookRecommendationsReply504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookRecommendationsReply400Error1Value = apiV1MiscFacebookRecommendationsReply400Error1Value;
        _apiV1MiscFacebookRecommendationsReply401Error1Value = apiV1MiscFacebookRecommendationsReply401Error1Value;
        _apiV1MiscFacebookRecommendationsReply403Error1Value = apiV1MiscFacebookRecommendationsReply403Error1Value;
        _apiV1MiscFacebookRecommendationsReply404Error1Value = apiV1MiscFacebookRecommendationsReply404Error1Value;
        _apiV1MiscFacebookRecommendationsReply429Error1Value = apiV1MiscFacebookRecommendationsReply429Error1Value;
        _apiV1MiscFacebookRecommendationsReply500Error1Value = apiV1MiscFacebookRecommendationsReply500Error1Value;
        _apiV1MiscFacebookRecommendationsReply502Error1Value = apiV1MiscFacebookRecommendationsReply502Error1Value;
        _apiV1MiscFacebookRecommendationsReply503Error1Value = apiV1MiscFacebookRecommendationsReply503Error1Value;
        _apiV1MiscFacebookRecommendationsReply504Error1Value = apiV1MiscFacebookRecommendationsReply504Error1Value;
    }

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply400Error1(ApiV1MiscFacebookRecommendationsReply400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookRecommendationsReply400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply401Error1(ApiV1MiscFacebookRecommendationsReply401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply403Error1(ApiV1MiscFacebookRecommendationsReply403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply404Error1(ApiV1MiscFacebookRecommendationsReply404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply429Error1(ApiV1MiscFacebookRecommendationsReply429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply500Error1(ApiV1MiscFacebookRecommendationsReply500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply502Error1(ApiV1MiscFacebookRecommendationsReply502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply503Error1(ApiV1MiscFacebookRecommendationsReply503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookReplyToRecommendationError AsApiV1MiscFacebookRecommendationsReply504Error1(ApiV1MiscFacebookRecommendationsReply504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsReply504Error1>.Some(value),
            default);

    private static MiscFacebookReplyToRecommendationError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookRecommendationsReply400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply400Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply401Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply403Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply404Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply429Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply500Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply502Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply503Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsReply504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply504Error1? value) =>
        _apiV1MiscFacebookRecommendationsReply504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookRecommendationsReply400Error1, TResult> onApiV1MiscFacebookRecommendationsReply400Error1,
        Func<ApiV1MiscFacebookRecommendationsReply401Error1, TResult> onApiV1MiscFacebookRecommendationsReply401Error1,
        Func<ApiV1MiscFacebookRecommendationsReply403Error1, TResult> onApiV1MiscFacebookRecommendationsReply403Error1,
        Func<ApiV1MiscFacebookRecommendationsReply404Error1, TResult> onApiV1MiscFacebookRecommendationsReply404Error1,
        Func<ApiV1MiscFacebookRecommendationsReply429Error1, TResult> onApiV1MiscFacebookRecommendationsReply429Error1,
        Func<ApiV1MiscFacebookRecommendationsReply500Error1, TResult> onApiV1MiscFacebookRecommendationsReply500Error1,
        Func<ApiV1MiscFacebookRecommendationsReply502Error1, TResult> onApiV1MiscFacebookRecommendationsReply502Error1,
        Func<ApiV1MiscFacebookRecommendationsReply503Error1, TResult> onApiV1MiscFacebookRecommendationsReply503Error1,
        Func<ApiV1MiscFacebookRecommendationsReply504Error1, TResult> onApiV1MiscFacebookRecommendationsReply504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookRecommendationsReply400Error1(
                out var apiV1MiscFacebookRecommendationsReply400Error1Value) => onApiV1MiscFacebookRecommendationsReply400Error1(
                apiV1MiscFacebookRecommendationsReply400Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply401Error1(
                out var apiV1MiscFacebookRecommendationsReply401Error1Value) => onApiV1MiscFacebookRecommendationsReply401Error1(
                apiV1MiscFacebookRecommendationsReply401Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply403Error1(
                out var apiV1MiscFacebookRecommendationsReply403Error1Value) => onApiV1MiscFacebookRecommendationsReply403Error1(
                apiV1MiscFacebookRecommendationsReply403Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply404Error1(
                out var apiV1MiscFacebookRecommendationsReply404Error1Value) => onApiV1MiscFacebookRecommendationsReply404Error1(
                apiV1MiscFacebookRecommendationsReply404Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply429Error1(
                out var apiV1MiscFacebookRecommendationsReply429Error1Value) => onApiV1MiscFacebookRecommendationsReply429Error1(
                apiV1MiscFacebookRecommendationsReply429Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply500Error1(
                out var apiV1MiscFacebookRecommendationsReply500Error1Value) => onApiV1MiscFacebookRecommendationsReply500Error1(
                apiV1MiscFacebookRecommendationsReply500Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply502Error1(
                out var apiV1MiscFacebookRecommendationsReply502Error1Value) => onApiV1MiscFacebookRecommendationsReply502Error1(
                apiV1MiscFacebookRecommendationsReply502Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply503Error1(
                out var apiV1MiscFacebookRecommendationsReply503Error1Value) => onApiV1MiscFacebookRecommendationsReply503Error1(
                apiV1MiscFacebookRecommendationsReply503Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsReply504Error1(
                out var apiV1MiscFacebookRecommendationsReply504Error1Value) => onApiV1MiscFacebookRecommendationsReply504Error1(
                apiV1MiscFacebookRecommendationsReply504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscFacebookReplyToRecommendationError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookRecommendationsReply400Error1> onApiV1MiscFacebookRecommendationsReply400Error1,
        Action<ApiV1MiscFacebookRecommendationsReply401Error1> onApiV1MiscFacebookRecommendationsReply401Error1,
        Action<ApiV1MiscFacebookRecommendationsReply403Error1> onApiV1MiscFacebookRecommendationsReply403Error1,
        Action<ApiV1MiscFacebookRecommendationsReply404Error1> onApiV1MiscFacebookRecommendationsReply404Error1,
        Action<ApiV1MiscFacebookRecommendationsReply429Error1> onApiV1MiscFacebookRecommendationsReply429Error1,
        Action<ApiV1MiscFacebookRecommendationsReply500Error1> onApiV1MiscFacebookRecommendationsReply500Error1,
        Action<ApiV1MiscFacebookRecommendationsReply502Error1> onApiV1MiscFacebookRecommendationsReply502Error1,
        Action<ApiV1MiscFacebookRecommendationsReply503Error1> onApiV1MiscFacebookRecommendationsReply503Error1,
        Action<ApiV1MiscFacebookRecommendationsReply504Error1> onApiV1MiscFacebookRecommendationsReply504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookRecommendationsReply400Error1(
            out var apiV1MiscFacebookRecommendationsReply400Error1Value)) onApiV1MiscFacebookRecommendationsReply400Error1(
            apiV1MiscFacebookRecommendationsReply400Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply401Error1(
            out var apiV1MiscFacebookRecommendationsReply401Error1Value)) onApiV1MiscFacebookRecommendationsReply401Error1(
            apiV1MiscFacebookRecommendationsReply401Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply403Error1(
            out var apiV1MiscFacebookRecommendationsReply403Error1Value)) onApiV1MiscFacebookRecommendationsReply403Error1(
            apiV1MiscFacebookRecommendationsReply403Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply404Error1(
            out var apiV1MiscFacebookRecommendationsReply404Error1Value)) onApiV1MiscFacebookRecommendationsReply404Error1(
            apiV1MiscFacebookRecommendationsReply404Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply429Error1(
            out var apiV1MiscFacebookRecommendationsReply429Error1Value)) onApiV1MiscFacebookRecommendationsReply429Error1(
            apiV1MiscFacebookRecommendationsReply429Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply500Error1(
            out var apiV1MiscFacebookRecommendationsReply500Error1Value)) onApiV1MiscFacebookRecommendationsReply500Error1(
            apiV1MiscFacebookRecommendationsReply500Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply502Error1(
            out var apiV1MiscFacebookRecommendationsReply502Error1Value)) onApiV1MiscFacebookRecommendationsReply502Error1(
            apiV1MiscFacebookRecommendationsReply502Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply503Error1(
            out var apiV1MiscFacebookRecommendationsReply503Error1Value)) onApiV1MiscFacebookRecommendationsReply503Error1(
            apiV1MiscFacebookRecommendationsReply503Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsReply504Error1(
            out var apiV1MiscFacebookRecommendationsReply504Error1Value)) onApiV1MiscFacebookRecommendationsReply504Error1(
            apiV1MiscFacebookRecommendationsReply504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookReplyToRecommendationError)} holds no value.");
    }

    private static Task<MiscFacebookReplyToRecommendationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookRecommendationsReply400Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply400Error1),
            401 => response.Json<ApiV1MiscFacebookRecommendationsReply401Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply401Error1),
            403 => response.Json<ApiV1MiscFacebookRecommendationsReply403Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply403Error1),
            404 => response.Json<ApiV1MiscFacebookRecommendationsReply404Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply404Error1),
            429 => response.Json<ApiV1MiscFacebookRecommendationsReply429Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply429Error1),
            500 => response.Json<ApiV1MiscFacebookRecommendationsReply500Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply500Error1),
            502 => response.Json<ApiV1MiscFacebookRecommendationsReply502Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply502Error1),
            503 => response.Json<ApiV1MiscFacebookRecommendationsReply503Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply503Error1),
            504 => response.Json<ApiV1MiscFacebookRecommendationsReply504Error1>().As(
                AsApiV1MiscFacebookRecommendationsReply504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookReplyToRecommendationError> Response { get; } = new(Create);
}
