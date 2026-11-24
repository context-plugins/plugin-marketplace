using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookReplyToRecommendationCommentError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply400Error1> _apiV1MiscFacebookRecommendationsCommentsReply400Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply401Error1> _apiV1MiscFacebookRecommendationsCommentsReply401Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply403Error1> _apiV1MiscFacebookRecommendationsCommentsReply403Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply404Error1> _apiV1MiscFacebookRecommendationsCommentsReply404Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply429Error1> _apiV1MiscFacebookRecommendationsCommentsReply429Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply500Error1> _apiV1MiscFacebookRecommendationsCommentsReply500Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply502Error1> _apiV1MiscFacebookRecommendationsCommentsReply502Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply503Error1> _apiV1MiscFacebookRecommendationsCommentsReply503Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendationsCommentsReply504Error1> _apiV1MiscFacebookRecommendationsCommentsReply504Error1Value;

    private MiscFacebookReplyToRecommendationCommentError(Optional<ApiV1MiscFacebookRecommendationsCommentsReply400Error1> apiV1MiscFacebookRecommendationsCommentsReply400Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply401Error1> apiV1MiscFacebookRecommendationsCommentsReply401Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply403Error1> apiV1MiscFacebookRecommendationsCommentsReply403Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply404Error1> apiV1MiscFacebookRecommendationsCommentsReply404Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply429Error1> apiV1MiscFacebookRecommendationsCommentsReply429Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply500Error1> apiV1MiscFacebookRecommendationsCommentsReply500Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply502Error1> apiV1MiscFacebookRecommendationsCommentsReply502Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply503Error1> apiV1MiscFacebookRecommendationsCommentsReply503Error1Value,
        Optional<ApiV1MiscFacebookRecommendationsCommentsReply504Error1> apiV1MiscFacebookRecommendationsCommentsReply504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookRecommendationsCommentsReply400Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply400Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply401Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply401Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply403Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply403Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply404Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply404Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply429Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply429Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply500Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply500Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply502Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply502Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply503Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply503Error1Value;
        _apiV1MiscFacebookRecommendationsCommentsReply504Error1Value =
            apiV1MiscFacebookRecommendationsCommentsReply504Error1Value;
    }

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply400Error1(ApiV1MiscFacebookRecommendationsCommentsReply400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply401Error1(ApiV1MiscFacebookRecommendationsCommentsReply401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply403Error1(ApiV1MiscFacebookRecommendationsCommentsReply403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply404Error1(ApiV1MiscFacebookRecommendationsCommentsReply404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply429Error1(ApiV1MiscFacebookRecommendationsCommentsReply429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply500Error1(ApiV1MiscFacebookRecommendationsCommentsReply500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply502Error1(ApiV1MiscFacebookRecommendationsCommentsReply502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply503Error1(ApiV1MiscFacebookRecommendationsCommentsReply503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsApiV1MiscFacebookRecommendationsCommentsReply504Error1(ApiV1MiscFacebookRecommendationsCommentsReply504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendationsCommentsReply504Error1>.Some(value),
            default);

    private static MiscFacebookReplyToRecommendationCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply400Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply401Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply403Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply404Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply429Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply500Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply502Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply503Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendationsCommentsReply504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply504Error1? value) =>
        _apiV1MiscFacebookRecommendationsCommentsReply504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookRecommendationsCommentsReply400Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply400Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply401Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply401Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply403Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply403Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply404Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply404Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply429Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply429Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply500Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply500Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply502Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply502Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply503Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply503Error1,
        Func<ApiV1MiscFacebookRecommendationsCommentsReply504Error1, TResult> onApiV1MiscFacebookRecommendationsCommentsReply504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply400Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply400Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply400Error1(
                apiV1MiscFacebookRecommendationsCommentsReply400Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply401Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply401Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply401Error1(
                apiV1MiscFacebookRecommendationsCommentsReply401Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply403Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply403Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply403Error1(
                apiV1MiscFacebookRecommendationsCommentsReply403Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply404Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply404Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply404Error1(
                apiV1MiscFacebookRecommendationsCommentsReply404Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply429Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply429Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply429Error1(
                apiV1MiscFacebookRecommendationsCommentsReply429Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply500Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply500Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply500Error1(
                apiV1MiscFacebookRecommendationsCommentsReply500Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply502Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply502Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply502Error1(
                apiV1MiscFacebookRecommendationsCommentsReply502Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply503Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply503Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply503Error1(
                apiV1MiscFacebookRecommendationsCommentsReply503Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendationsCommentsReply504Error1(
                out var apiV1MiscFacebookRecommendationsCommentsReply504Error1Value) => onApiV1MiscFacebookRecommendationsCommentsReply504Error1(
                apiV1MiscFacebookRecommendationsCommentsReply504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscFacebookReplyToRecommendationCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookRecommendationsCommentsReply400Error1> onApiV1MiscFacebookRecommendationsCommentsReply400Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply401Error1> onApiV1MiscFacebookRecommendationsCommentsReply401Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply403Error1> onApiV1MiscFacebookRecommendationsCommentsReply403Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply404Error1> onApiV1MiscFacebookRecommendationsCommentsReply404Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply429Error1> onApiV1MiscFacebookRecommendationsCommentsReply429Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply500Error1> onApiV1MiscFacebookRecommendationsCommentsReply500Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply502Error1> onApiV1MiscFacebookRecommendationsCommentsReply502Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply503Error1> onApiV1MiscFacebookRecommendationsCommentsReply503Error1,
        Action<ApiV1MiscFacebookRecommendationsCommentsReply504Error1> onApiV1MiscFacebookRecommendationsCommentsReply504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookRecommendationsCommentsReply400Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply400Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply400Error1(
            apiV1MiscFacebookRecommendationsCommentsReply400Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply401Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply401Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply401Error1(
            apiV1MiscFacebookRecommendationsCommentsReply401Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply403Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply403Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply403Error1(
            apiV1MiscFacebookRecommendationsCommentsReply403Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply404Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply404Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply404Error1(
            apiV1MiscFacebookRecommendationsCommentsReply404Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply429Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply429Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply429Error1(
            apiV1MiscFacebookRecommendationsCommentsReply429Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply500Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply500Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply500Error1(
            apiV1MiscFacebookRecommendationsCommentsReply500Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply502Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply502Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply502Error1(
            apiV1MiscFacebookRecommendationsCommentsReply502Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply503Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply503Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply503Error1(
            apiV1MiscFacebookRecommendationsCommentsReply503Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendationsCommentsReply504Error1(
            out var apiV1MiscFacebookRecommendationsCommentsReply504Error1Value)) onApiV1MiscFacebookRecommendationsCommentsReply504Error1(
            apiV1MiscFacebookRecommendationsCommentsReply504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscFacebookReplyToRecommendationCommentError)} holds no value.");
    }

    private static Task<MiscFacebookReplyToRecommendationCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply400Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply400Error1),
            401 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply401Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply401Error1),
            403 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply403Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply403Error1),
            404 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply404Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply404Error1),
            429 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply429Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply429Error1),
            500 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply500Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply500Error1),
            502 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply502Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply502Error1),
            503 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply503Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply503Error1),
            504 => response.Json<ApiV1MiscFacebookRecommendationsCommentsReply504Error1>().As(
                AsApiV1MiscFacebookRecommendationsCommentsReply504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookReplyToRecommendationCommentError> Response { get; } = new(Create);
}
