using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostGetReconnectSocialAccountCandidatesError : ApiError
{
    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates400Error1> _apiV1PostReconnectSocialAccountCandidates400Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates401Error1> _apiV1PostReconnectSocialAccountCandidates401Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates403Error1> _apiV1PostReconnectSocialAccountCandidates403Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates404Error1> _apiV1PostReconnectSocialAccountCandidates404Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates429Error1> _apiV1PostReconnectSocialAccountCandidates429Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates500Error1> _apiV1PostReconnectSocialAccountCandidates500Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates502Error1> _apiV1PostReconnectSocialAccountCandidates502Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates503Error1> _apiV1PostReconnectSocialAccountCandidates503Error1Value;

    private readonly Optional<ApiV1PostReconnectSocialAccountCandidates504Error1> _apiV1PostReconnectSocialAccountCandidates504Error1Value;

    private PostGetReconnectSocialAccountCandidatesError(Optional<ApiV1PostReconnectSocialAccountCandidates400Error1> apiV1PostReconnectSocialAccountCandidates400Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates401Error1> apiV1PostReconnectSocialAccountCandidates401Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates403Error1> apiV1PostReconnectSocialAccountCandidates403Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates404Error1> apiV1PostReconnectSocialAccountCandidates404Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates429Error1> apiV1PostReconnectSocialAccountCandidates429Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates500Error1> apiV1PostReconnectSocialAccountCandidates500Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates502Error1> apiV1PostReconnectSocialAccountCandidates502Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates503Error1> apiV1PostReconnectSocialAccountCandidates503Error1Value,
        Optional<ApiV1PostReconnectSocialAccountCandidates504Error1> apiV1PostReconnectSocialAccountCandidates504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostReconnectSocialAccountCandidates400Error1Value =
            apiV1PostReconnectSocialAccountCandidates400Error1Value;
        _apiV1PostReconnectSocialAccountCandidates401Error1Value =
            apiV1PostReconnectSocialAccountCandidates401Error1Value;
        _apiV1PostReconnectSocialAccountCandidates403Error1Value =
            apiV1PostReconnectSocialAccountCandidates403Error1Value;
        _apiV1PostReconnectSocialAccountCandidates404Error1Value =
            apiV1PostReconnectSocialAccountCandidates404Error1Value;
        _apiV1PostReconnectSocialAccountCandidates429Error1Value =
            apiV1PostReconnectSocialAccountCandidates429Error1Value;
        _apiV1PostReconnectSocialAccountCandidates500Error1Value =
            apiV1PostReconnectSocialAccountCandidates500Error1Value;
        _apiV1PostReconnectSocialAccountCandidates502Error1Value =
            apiV1PostReconnectSocialAccountCandidates502Error1Value;
        _apiV1PostReconnectSocialAccountCandidates503Error1Value =
            apiV1PostReconnectSocialAccountCandidates503Error1Value;
        _apiV1PostReconnectSocialAccountCandidates504Error1Value =
            apiV1PostReconnectSocialAccountCandidates504Error1Value;
    }

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates400Error1(ApiV1PostReconnectSocialAccountCandidates400Error1 value) =>
        new(
            Optional<ApiV1PostReconnectSocialAccountCandidates400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates401Error1(ApiV1PostReconnectSocialAccountCandidates401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates403Error1(ApiV1PostReconnectSocialAccountCandidates403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates404Error1(ApiV1PostReconnectSocialAccountCandidates404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates429Error1(ApiV1PostReconnectSocialAccountCandidates429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates500Error1(ApiV1PostReconnectSocialAccountCandidates500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates502Error1(ApiV1PostReconnectSocialAccountCandidates502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates502Error1>.Some(value),
            default,
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates503Error1(ApiV1PostReconnectSocialAccountCandidates503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates503Error1>.Some(value),
            default,
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsApiV1PostReconnectSocialAccountCandidates504Error1(ApiV1PostReconnectSocialAccountCandidates504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReconnectSocialAccountCandidates504Error1>.Some(value),
            default);

    private static PostGetReconnectSocialAccountCandidatesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostReconnectSocialAccountCandidates400Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates400Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates401Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates401Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates403Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates403Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates404Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates404Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates429Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates429Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates500Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates500Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates502Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates502Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates503Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates503Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReconnectSocialAccountCandidates504Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates504Error1? value) =>
        _apiV1PostReconnectSocialAccountCandidates504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostReconnectSocialAccountCandidates400Error1, TResult> onApiV1PostReconnectSocialAccountCandidates400Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates401Error1, TResult> onApiV1PostReconnectSocialAccountCandidates401Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates403Error1, TResult> onApiV1PostReconnectSocialAccountCandidates403Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates404Error1, TResult> onApiV1PostReconnectSocialAccountCandidates404Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates429Error1, TResult> onApiV1PostReconnectSocialAccountCandidates429Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates500Error1, TResult> onApiV1PostReconnectSocialAccountCandidates500Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates502Error1, TResult> onApiV1PostReconnectSocialAccountCandidates502Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates503Error1, TResult> onApiV1PostReconnectSocialAccountCandidates503Error1,
        Func<ApiV1PostReconnectSocialAccountCandidates504Error1, TResult> onApiV1PostReconnectSocialAccountCandidates504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostReconnectSocialAccountCandidates400Error1(
                out var apiV1PostReconnectSocialAccountCandidates400Error1Value) => onApiV1PostReconnectSocialAccountCandidates400Error1(
                apiV1PostReconnectSocialAccountCandidates400Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates401Error1(
                out var apiV1PostReconnectSocialAccountCandidates401Error1Value) => onApiV1PostReconnectSocialAccountCandidates401Error1(
                apiV1PostReconnectSocialAccountCandidates401Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates403Error1(
                out var apiV1PostReconnectSocialAccountCandidates403Error1Value) => onApiV1PostReconnectSocialAccountCandidates403Error1(
                apiV1PostReconnectSocialAccountCandidates403Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates404Error1(
                out var apiV1PostReconnectSocialAccountCandidates404Error1Value) => onApiV1PostReconnectSocialAccountCandidates404Error1(
                apiV1PostReconnectSocialAccountCandidates404Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates429Error1(
                out var apiV1PostReconnectSocialAccountCandidates429Error1Value) => onApiV1PostReconnectSocialAccountCandidates429Error1(
                apiV1PostReconnectSocialAccountCandidates429Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates500Error1(
                out var apiV1PostReconnectSocialAccountCandidates500Error1Value) => onApiV1PostReconnectSocialAccountCandidates500Error1(
                apiV1PostReconnectSocialAccountCandidates500Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates502Error1(
                out var apiV1PostReconnectSocialAccountCandidates502Error1Value) => onApiV1PostReconnectSocialAccountCandidates502Error1(
                apiV1PostReconnectSocialAccountCandidates502Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates503Error1(
                out var apiV1PostReconnectSocialAccountCandidates503Error1Value) => onApiV1PostReconnectSocialAccountCandidates503Error1(
                apiV1PostReconnectSocialAccountCandidates503Error1Value),
            _ when TryGetApiV1PostReconnectSocialAccountCandidates504Error1(
                out var apiV1PostReconnectSocialAccountCandidates504Error1Value) => onApiV1PostReconnectSocialAccountCandidates504Error1(
                apiV1PostReconnectSocialAccountCandidates504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostGetReconnectSocialAccountCandidatesError)} holds no value.")
        };

    public void Match(Action<ApiV1PostReconnectSocialAccountCandidates400Error1> onApiV1PostReconnectSocialAccountCandidates400Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates401Error1> onApiV1PostReconnectSocialAccountCandidates401Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates403Error1> onApiV1PostReconnectSocialAccountCandidates403Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates404Error1> onApiV1PostReconnectSocialAccountCandidates404Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates429Error1> onApiV1PostReconnectSocialAccountCandidates429Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates500Error1> onApiV1PostReconnectSocialAccountCandidates500Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates502Error1> onApiV1PostReconnectSocialAccountCandidates502Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates503Error1> onApiV1PostReconnectSocialAccountCandidates503Error1,
        Action<ApiV1PostReconnectSocialAccountCandidates504Error1> onApiV1PostReconnectSocialAccountCandidates504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostReconnectSocialAccountCandidates400Error1(
            out var apiV1PostReconnectSocialAccountCandidates400Error1Value)) onApiV1PostReconnectSocialAccountCandidates400Error1(
            apiV1PostReconnectSocialAccountCandidates400Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates401Error1(
            out var apiV1PostReconnectSocialAccountCandidates401Error1Value)) onApiV1PostReconnectSocialAccountCandidates401Error1(
            apiV1PostReconnectSocialAccountCandidates401Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates403Error1(
            out var apiV1PostReconnectSocialAccountCandidates403Error1Value)) onApiV1PostReconnectSocialAccountCandidates403Error1(
            apiV1PostReconnectSocialAccountCandidates403Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates404Error1(
            out var apiV1PostReconnectSocialAccountCandidates404Error1Value)) onApiV1PostReconnectSocialAccountCandidates404Error1(
            apiV1PostReconnectSocialAccountCandidates404Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates429Error1(
            out var apiV1PostReconnectSocialAccountCandidates429Error1Value)) onApiV1PostReconnectSocialAccountCandidates429Error1(
            apiV1PostReconnectSocialAccountCandidates429Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates500Error1(
            out var apiV1PostReconnectSocialAccountCandidates500Error1Value)) onApiV1PostReconnectSocialAccountCandidates500Error1(
            apiV1PostReconnectSocialAccountCandidates500Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates502Error1(
            out var apiV1PostReconnectSocialAccountCandidates502Error1Value)) onApiV1PostReconnectSocialAccountCandidates502Error1(
            apiV1PostReconnectSocialAccountCandidates502Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates503Error1(
            out var apiV1PostReconnectSocialAccountCandidates503Error1Value)) onApiV1PostReconnectSocialAccountCandidates503Error1(
            apiV1PostReconnectSocialAccountCandidates503Error1Value);
        else if (TryGetApiV1PostReconnectSocialAccountCandidates504Error1(
            out var apiV1PostReconnectSocialAccountCandidates504Error1Value)) onApiV1PostReconnectSocialAccountCandidates504Error1(
            apiV1PostReconnectSocialAccountCandidates504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PostGetReconnectSocialAccountCandidatesError)} holds no value.");
    }

    private static Task<PostGetReconnectSocialAccountCandidatesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostReconnectSocialAccountCandidates400Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates400Error1),
            401 => response.Json<ApiV1PostReconnectSocialAccountCandidates401Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates401Error1),
            403 => response.Json<ApiV1PostReconnectSocialAccountCandidates403Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates403Error1),
            404 => response.Json<ApiV1PostReconnectSocialAccountCandidates404Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates404Error1),
            429 => response.Json<ApiV1PostReconnectSocialAccountCandidates429Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates429Error1),
            500 => response.Json<ApiV1PostReconnectSocialAccountCandidates500Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates500Error1),
            502 => response.Json<ApiV1PostReconnectSocialAccountCandidates502Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates502Error1),
            503 => response.Json<ApiV1PostReconnectSocialAccountCandidates503Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates503Error1),
            504 => response.Json<ApiV1PostReconnectSocialAccountCandidates504Error1>().As(
                AsApiV1PostReconnectSocialAccountCandidates504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostGetReconnectSocialAccountCandidatesError> Response { get; } = new(Create);
}
