using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessGetReviewByIdError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessReviews400Error1> _apiV1MiscGoogleBusinessReviews400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews401Error1> _apiV1MiscGoogleBusinessReviews401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews403Error1> _apiV1MiscGoogleBusinessReviews403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews404Error1> _apiV1MiscGoogleBusinessReviews404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews429Error1> _apiV1MiscGoogleBusinessReviews429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews500Error1> _apiV1MiscGoogleBusinessReviews500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews502Error1> _apiV1MiscGoogleBusinessReviews502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews503Error1> _apiV1MiscGoogleBusinessReviews503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessReviews504Error1> _apiV1MiscGoogleBusinessReviews504Error1Value;

    private MiscGoogleBusinessGetReviewByIdError(Optional<ApiV1MiscGoogleBusinessReviews400Error1> apiV1MiscGoogleBusinessReviews400Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews401Error1> apiV1MiscGoogleBusinessReviews401Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews403Error1> apiV1MiscGoogleBusinessReviews403Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews404Error1> apiV1MiscGoogleBusinessReviews404Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews429Error1> apiV1MiscGoogleBusinessReviews429Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews500Error1> apiV1MiscGoogleBusinessReviews500Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews502Error1> apiV1MiscGoogleBusinessReviews502Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews503Error1> apiV1MiscGoogleBusinessReviews503Error1Value,
        Optional<ApiV1MiscGoogleBusinessReviews504Error1> apiV1MiscGoogleBusinessReviews504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessReviews400Error1Value = apiV1MiscGoogleBusinessReviews400Error1Value;
        _apiV1MiscGoogleBusinessReviews401Error1Value = apiV1MiscGoogleBusinessReviews401Error1Value;
        _apiV1MiscGoogleBusinessReviews403Error1Value = apiV1MiscGoogleBusinessReviews403Error1Value;
        _apiV1MiscGoogleBusinessReviews404Error1Value = apiV1MiscGoogleBusinessReviews404Error1Value;
        _apiV1MiscGoogleBusinessReviews429Error1Value = apiV1MiscGoogleBusinessReviews429Error1Value;
        _apiV1MiscGoogleBusinessReviews500Error1Value = apiV1MiscGoogleBusinessReviews500Error1Value;
        _apiV1MiscGoogleBusinessReviews502Error1Value = apiV1MiscGoogleBusinessReviews502Error1Value;
        _apiV1MiscGoogleBusinessReviews503Error1Value = apiV1MiscGoogleBusinessReviews503Error1Value;
        _apiV1MiscGoogleBusinessReviews504Error1Value = apiV1MiscGoogleBusinessReviews504Error1Value;
    }

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews400Error1(ApiV1MiscGoogleBusinessReviews400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessReviews400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews401Error1(ApiV1MiscGoogleBusinessReviews401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessReviews401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews403Error1(ApiV1MiscGoogleBusinessReviews403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews404Error1(ApiV1MiscGoogleBusinessReviews404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews429Error1(ApiV1MiscGoogleBusinessReviews429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews500Error1(ApiV1MiscGoogleBusinessReviews500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews502Error1(ApiV1MiscGoogleBusinessReviews502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews503Error1(ApiV1MiscGoogleBusinessReviews503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsApiV1MiscGoogleBusinessReviews504Error1(ApiV1MiscGoogleBusinessReviews504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessReviews504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessGetReviewByIdError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessReviews400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews400Error1? value) =>
        _apiV1MiscGoogleBusinessReviews400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews401Error1? value) =>
        _apiV1MiscGoogleBusinessReviews401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews403Error1? value) =>
        _apiV1MiscGoogleBusinessReviews403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews404Error1? value) =>
        _apiV1MiscGoogleBusinessReviews404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews429Error1? value) =>
        _apiV1MiscGoogleBusinessReviews429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews500Error1? value) =>
        _apiV1MiscGoogleBusinessReviews500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews502Error1? value) =>
        _apiV1MiscGoogleBusinessReviews502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews503Error1? value) =>
        _apiV1MiscGoogleBusinessReviews503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessReviews504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews504Error1? value) =>
        _apiV1MiscGoogleBusinessReviews504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessReviews400Error1, TResult> onApiV1MiscGoogleBusinessReviews400Error1,
        Func<ApiV1MiscGoogleBusinessReviews401Error1, TResult> onApiV1MiscGoogleBusinessReviews401Error1,
        Func<ApiV1MiscGoogleBusinessReviews403Error1, TResult> onApiV1MiscGoogleBusinessReviews403Error1,
        Func<ApiV1MiscGoogleBusinessReviews404Error1, TResult> onApiV1MiscGoogleBusinessReviews404Error1,
        Func<ApiV1MiscGoogleBusinessReviews429Error1, TResult> onApiV1MiscGoogleBusinessReviews429Error1,
        Func<ApiV1MiscGoogleBusinessReviews500Error1, TResult> onApiV1MiscGoogleBusinessReviews500Error1,
        Func<ApiV1MiscGoogleBusinessReviews502Error1, TResult> onApiV1MiscGoogleBusinessReviews502Error1,
        Func<ApiV1MiscGoogleBusinessReviews503Error1, TResult> onApiV1MiscGoogleBusinessReviews503Error1,
        Func<ApiV1MiscGoogleBusinessReviews504Error1, TResult> onApiV1MiscGoogleBusinessReviews504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessReviews400Error1(
                out var apiV1MiscGoogleBusinessReviews400Error1Value) => onApiV1MiscGoogleBusinessReviews400Error1(
                apiV1MiscGoogleBusinessReviews400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews401Error1(
                out var apiV1MiscGoogleBusinessReviews401Error1Value) => onApiV1MiscGoogleBusinessReviews401Error1(
                apiV1MiscGoogleBusinessReviews401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews403Error1(
                out var apiV1MiscGoogleBusinessReviews403Error1Value) => onApiV1MiscGoogleBusinessReviews403Error1(
                apiV1MiscGoogleBusinessReviews403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews404Error1(
                out var apiV1MiscGoogleBusinessReviews404Error1Value) => onApiV1MiscGoogleBusinessReviews404Error1(
                apiV1MiscGoogleBusinessReviews404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews429Error1(
                out var apiV1MiscGoogleBusinessReviews429Error1Value) => onApiV1MiscGoogleBusinessReviews429Error1(
                apiV1MiscGoogleBusinessReviews429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews500Error1(
                out var apiV1MiscGoogleBusinessReviews500Error1Value) => onApiV1MiscGoogleBusinessReviews500Error1(
                apiV1MiscGoogleBusinessReviews500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews502Error1(
                out var apiV1MiscGoogleBusinessReviews502Error1Value) => onApiV1MiscGoogleBusinessReviews502Error1(
                apiV1MiscGoogleBusinessReviews502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews503Error1(
                out var apiV1MiscGoogleBusinessReviews503Error1Value) => onApiV1MiscGoogleBusinessReviews503Error1(
                apiV1MiscGoogleBusinessReviews503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessReviews504Error1(
                out var apiV1MiscGoogleBusinessReviews504Error1Value) => onApiV1MiscGoogleBusinessReviews504Error1(
                apiV1MiscGoogleBusinessReviews504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessGetReviewByIdError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessReviews400Error1> onApiV1MiscGoogleBusinessReviews400Error1,
        Action<ApiV1MiscGoogleBusinessReviews401Error1> onApiV1MiscGoogleBusinessReviews401Error1,
        Action<ApiV1MiscGoogleBusinessReviews403Error1> onApiV1MiscGoogleBusinessReviews403Error1,
        Action<ApiV1MiscGoogleBusinessReviews404Error1> onApiV1MiscGoogleBusinessReviews404Error1,
        Action<ApiV1MiscGoogleBusinessReviews429Error1> onApiV1MiscGoogleBusinessReviews429Error1,
        Action<ApiV1MiscGoogleBusinessReviews500Error1> onApiV1MiscGoogleBusinessReviews500Error1,
        Action<ApiV1MiscGoogleBusinessReviews502Error1> onApiV1MiscGoogleBusinessReviews502Error1,
        Action<ApiV1MiscGoogleBusinessReviews503Error1> onApiV1MiscGoogleBusinessReviews503Error1,
        Action<ApiV1MiscGoogleBusinessReviews504Error1> onApiV1MiscGoogleBusinessReviews504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessReviews400Error1(
            out var apiV1MiscGoogleBusinessReviews400Error1Value)) onApiV1MiscGoogleBusinessReviews400Error1(
            apiV1MiscGoogleBusinessReviews400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews401Error1(
            out var apiV1MiscGoogleBusinessReviews401Error1Value)) onApiV1MiscGoogleBusinessReviews401Error1(
            apiV1MiscGoogleBusinessReviews401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews403Error1(
            out var apiV1MiscGoogleBusinessReviews403Error1Value)) onApiV1MiscGoogleBusinessReviews403Error1(
            apiV1MiscGoogleBusinessReviews403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews404Error1(
            out var apiV1MiscGoogleBusinessReviews404Error1Value)) onApiV1MiscGoogleBusinessReviews404Error1(
            apiV1MiscGoogleBusinessReviews404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews429Error1(
            out var apiV1MiscGoogleBusinessReviews429Error1Value)) onApiV1MiscGoogleBusinessReviews429Error1(
            apiV1MiscGoogleBusinessReviews429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews500Error1(
            out var apiV1MiscGoogleBusinessReviews500Error1Value)) onApiV1MiscGoogleBusinessReviews500Error1(
            apiV1MiscGoogleBusinessReviews500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews502Error1(
            out var apiV1MiscGoogleBusinessReviews502Error1Value)) onApiV1MiscGoogleBusinessReviews502Error1(
            apiV1MiscGoogleBusinessReviews502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews503Error1(
            out var apiV1MiscGoogleBusinessReviews503Error1Value)) onApiV1MiscGoogleBusinessReviews503Error1(
            apiV1MiscGoogleBusinessReviews503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessReviews504Error1(
            out var apiV1MiscGoogleBusinessReviews504Error1Value)) onApiV1MiscGoogleBusinessReviews504Error1(
            apiV1MiscGoogleBusinessReviews504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessGetReviewByIdError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessGetReviewByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessReviews400Error1>().As(
                AsApiV1MiscGoogleBusinessReviews400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessReviews401Error1>().As(
                AsApiV1MiscGoogleBusinessReviews401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessReviews403Error1>().As(
                AsApiV1MiscGoogleBusinessReviews403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessReviews404Error1>().As(
                AsApiV1MiscGoogleBusinessReviews404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessReviews429Error1>().As(
                AsApiV1MiscGoogleBusinessReviews429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessReviews500Error1>().As(
                AsApiV1MiscGoogleBusinessReviews500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessReviews502Error1>().As(
                AsApiV1MiscGoogleBusinessReviews502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessReviews503Error1>().As(
                AsApiV1MiscGoogleBusinessReviews503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessReviews504Error1>().As(
                AsApiV1MiscGoogleBusinessReviews504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessGetReviewByIdError> Response { get; } = new(Create);
}
