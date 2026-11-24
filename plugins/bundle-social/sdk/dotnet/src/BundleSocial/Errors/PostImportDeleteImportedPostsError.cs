using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostImportDeleteImportedPostsError : ApiError
{
    private readonly Optional<ApiV1PostHistoryImportPosts400Error1> _apiV1PostHistoryImportPosts400Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts401Error1> _apiV1PostHistoryImportPosts401Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts403Error1> _apiV1PostHistoryImportPosts403Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts404Error1> _apiV1PostHistoryImportPosts404Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts429Error1> _apiV1PostHistoryImportPosts429Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts500Error1> _apiV1PostHistoryImportPosts500Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts502Error1> _apiV1PostHistoryImportPosts502Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts503Error1> _apiV1PostHistoryImportPosts503Error1Value;

    private readonly Optional<ApiV1PostHistoryImportPosts504Error1> _apiV1PostHistoryImportPosts504Error1Value;

    private PostImportDeleteImportedPostsError(Optional<ApiV1PostHistoryImportPosts400Error1> apiV1PostHistoryImportPosts400Error1Value,
        Optional<ApiV1PostHistoryImportPosts401Error1> apiV1PostHistoryImportPosts401Error1Value,
        Optional<ApiV1PostHistoryImportPosts403Error1> apiV1PostHistoryImportPosts403Error1Value,
        Optional<ApiV1PostHistoryImportPosts404Error1> apiV1PostHistoryImportPosts404Error1Value,
        Optional<ApiV1PostHistoryImportPosts429Error1> apiV1PostHistoryImportPosts429Error1Value,
        Optional<ApiV1PostHistoryImportPosts500Error1> apiV1PostHistoryImportPosts500Error1Value,
        Optional<ApiV1PostHistoryImportPosts502Error1> apiV1PostHistoryImportPosts502Error1Value,
        Optional<ApiV1PostHistoryImportPosts503Error1> apiV1PostHistoryImportPosts503Error1Value,
        Optional<ApiV1PostHistoryImportPosts504Error1> apiV1PostHistoryImportPosts504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostHistoryImportPosts400Error1Value = apiV1PostHistoryImportPosts400Error1Value;
        _apiV1PostHistoryImportPosts401Error1Value = apiV1PostHistoryImportPosts401Error1Value;
        _apiV1PostHistoryImportPosts403Error1Value = apiV1PostHistoryImportPosts403Error1Value;
        _apiV1PostHistoryImportPosts404Error1Value = apiV1PostHistoryImportPosts404Error1Value;
        _apiV1PostHistoryImportPosts429Error1Value = apiV1PostHistoryImportPosts429Error1Value;
        _apiV1PostHistoryImportPosts500Error1Value = apiV1PostHistoryImportPosts500Error1Value;
        _apiV1PostHistoryImportPosts502Error1Value = apiV1PostHistoryImportPosts502Error1Value;
        _apiV1PostHistoryImportPosts503Error1Value = apiV1PostHistoryImportPosts503Error1Value;
        _apiV1PostHistoryImportPosts504Error1Value = apiV1PostHistoryImportPosts504Error1Value;
    }

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts400Error1(ApiV1PostHistoryImportPosts400Error1 value) =>
        new(
            Optional<ApiV1PostHistoryImportPosts400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts401Error1(ApiV1PostHistoryImportPosts401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostHistoryImportPosts401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts403Error1(ApiV1PostHistoryImportPosts403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts404Error1(ApiV1PostHistoryImportPosts404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts429Error1(ApiV1PostHistoryImportPosts429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts500Error1(ApiV1PostHistoryImportPosts500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts502Error1(ApiV1PostHistoryImportPosts502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts502Error1>.Some(value),
            default,
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts503Error1(ApiV1PostHistoryImportPosts503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts503Error1>.Some(value),
            default,
            default);

    private static PostImportDeleteImportedPostsError AsApiV1PostHistoryImportPosts504Error1(ApiV1PostHistoryImportPosts504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostHistoryImportPosts504Error1>.Some(value),
            default);

    private static PostImportDeleteImportedPostsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostHistoryImportPosts400Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts400Error1? value) =>
        _apiV1PostHistoryImportPosts400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts401Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts401Error1? value) =>
        _apiV1PostHistoryImportPosts401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts403Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts403Error1? value) =>
        _apiV1PostHistoryImportPosts403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts404Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts404Error1? value) =>
        _apiV1PostHistoryImportPosts404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts429Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts429Error1? value) =>
        _apiV1PostHistoryImportPosts429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts500Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts500Error1? value) =>
        _apiV1PostHistoryImportPosts500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts502Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts502Error1? value) =>
        _apiV1PostHistoryImportPosts502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts503Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts503Error1? value) =>
        _apiV1PostHistoryImportPosts503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostHistoryImportPosts504Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts504Error1? value) =>
        _apiV1PostHistoryImportPosts504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostHistoryImportPosts400Error1, TResult> onApiV1PostHistoryImportPosts400Error1,
        Func<ApiV1PostHistoryImportPosts401Error1, TResult> onApiV1PostHistoryImportPosts401Error1,
        Func<ApiV1PostHistoryImportPosts403Error1, TResult> onApiV1PostHistoryImportPosts403Error1,
        Func<ApiV1PostHistoryImportPosts404Error1, TResult> onApiV1PostHistoryImportPosts404Error1,
        Func<ApiV1PostHistoryImportPosts429Error1, TResult> onApiV1PostHistoryImportPosts429Error1,
        Func<ApiV1PostHistoryImportPosts500Error1, TResult> onApiV1PostHistoryImportPosts500Error1,
        Func<ApiV1PostHistoryImportPosts502Error1, TResult> onApiV1PostHistoryImportPosts502Error1,
        Func<ApiV1PostHistoryImportPosts503Error1, TResult> onApiV1PostHistoryImportPosts503Error1,
        Func<ApiV1PostHistoryImportPosts504Error1, TResult> onApiV1PostHistoryImportPosts504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostHistoryImportPosts400Error1(
                out var apiV1PostHistoryImportPosts400Error1Value) => onApiV1PostHistoryImportPosts400Error1(
                apiV1PostHistoryImportPosts400Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts401Error1(
                out var apiV1PostHistoryImportPosts401Error1Value) => onApiV1PostHistoryImportPosts401Error1(
                apiV1PostHistoryImportPosts401Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts403Error1(
                out var apiV1PostHistoryImportPosts403Error1Value) => onApiV1PostHistoryImportPosts403Error1(
                apiV1PostHistoryImportPosts403Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts404Error1(
                out var apiV1PostHistoryImportPosts404Error1Value) => onApiV1PostHistoryImportPosts404Error1(
                apiV1PostHistoryImportPosts404Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts429Error1(
                out var apiV1PostHistoryImportPosts429Error1Value) => onApiV1PostHistoryImportPosts429Error1(
                apiV1PostHistoryImportPosts429Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts500Error1(
                out var apiV1PostHistoryImportPosts500Error1Value) => onApiV1PostHistoryImportPosts500Error1(
                apiV1PostHistoryImportPosts500Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts502Error1(
                out var apiV1PostHistoryImportPosts502Error1Value) => onApiV1PostHistoryImportPosts502Error1(
                apiV1PostHistoryImportPosts502Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts503Error1(
                out var apiV1PostHistoryImportPosts503Error1Value) => onApiV1PostHistoryImportPosts503Error1(
                apiV1PostHistoryImportPosts503Error1Value),
            _ when TryGetApiV1PostHistoryImportPosts504Error1(
                out var apiV1PostHistoryImportPosts504Error1Value) => onApiV1PostHistoryImportPosts504Error1(
                apiV1PostHistoryImportPosts504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostImportDeleteImportedPostsError)} holds no value.")
        };

    public void Match(Action<ApiV1PostHistoryImportPosts400Error1> onApiV1PostHistoryImportPosts400Error1,
        Action<ApiV1PostHistoryImportPosts401Error1> onApiV1PostHistoryImportPosts401Error1,
        Action<ApiV1PostHistoryImportPosts403Error1> onApiV1PostHistoryImportPosts403Error1,
        Action<ApiV1PostHistoryImportPosts404Error1> onApiV1PostHistoryImportPosts404Error1,
        Action<ApiV1PostHistoryImportPosts429Error1> onApiV1PostHistoryImportPosts429Error1,
        Action<ApiV1PostHistoryImportPosts500Error1> onApiV1PostHistoryImportPosts500Error1,
        Action<ApiV1PostHistoryImportPosts502Error1> onApiV1PostHistoryImportPosts502Error1,
        Action<ApiV1PostHistoryImportPosts503Error1> onApiV1PostHistoryImportPosts503Error1,
        Action<ApiV1PostHistoryImportPosts504Error1> onApiV1PostHistoryImportPosts504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostHistoryImportPosts400Error1(
            out var apiV1PostHistoryImportPosts400Error1Value)) onApiV1PostHistoryImportPosts400Error1(
            apiV1PostHistoryImportPosts400Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts401Error1(
            out var apiV1PostHistoryImportPosts401Error1Value)) onApiV1PostHistoryImportPosts401Error1(
            apiV1PostHistoryImportPosts401Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts403Error1(
            out var apiV1PostHistoryImportPosts403Error1Value)) onApiV1PostHistoryImportPosts403Error1(
            apiV1PostHistoryImportPosts403Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts404Error1(
            out var apiV1PostHistoryImportPosts404Error1Value)) onApiV1PostHistoryImportPosts404Error1(
            apiV1PostHistoryImportPosts404Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts429Error1(
            out var apiV1PostHistoryImportPosts429Error1Value)) onApiV1PostHistoryImportPosts429Error1(
            apiV1PostHistoryImportPosts429Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts500Error1(
            out var apiV1PostHistoryImportPosts500Error1Value)) onApiV1PostHistoryImportPosts500Error1(
            apiV1PostHistoryImportPosts500Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts502Error1(
            out var apiV1PostHistoryImportPosts502Error1Value)) onApiV1PostHistoryImportPosts502Error1(
            apiV1PostHistoryImportPosts502Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts503Error1(
            out var apiV1PostHistoryImportPosts503Error1Value)) onApiV1PostHistoryImportPosts503Error1(
            apiV1PostHistoryImportPosts503Error1Value);
        else if (TryGetApiV1PostHistoryImportPosts504Error1(
            out var apiV1PostHistoryImportPosts504Error1Value)) onApiV1PostHistoryImportPosts504Error1(
            apiV1PostHistoryImportPosts504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostImportDeleteImportedPostsError)} holds no value.");
    }

    private static Task<PostImportDeleteImportedPostsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostHistoryImportPosts400Error1>().As(AsApiV1PostHistoryImportPosts400Error1),
            401 => response.Json<ApiV1PostHistoryImportPosts401Error1>().As(AsApiV1PostHistoryImportPosts401Error1),
            403 => response.Json<ApiV1PostHistoryImportPosts403Error1>().As(AsApiV1PostHistoryImportPosts403Error1),
            404 => response.Json<ApiV1PostHistoryImportPosts404Error1>().As(AsApiV1PostHistoryImportPosts404Error1),
            429 => response.Json<ApiV1PostHistoryImportPosts429Error1>().As(AsApiV1PostHistoryImportPosts429Error1),
            500 => response.Json<ApiV1PostHistoryImportPosts500Error1>().As(AsApiV1PostHistoryImportPosts500Error1),
            502 => response.Json<ApiV1PostHistoryImportPosts502Error1>().As(AsApiV1PostHistoryImportPosts502Error1),
            503 => response.Json<ApiV1PostHistoryImportPosts503Error1>().As(AsApiV1PostHistoryImportPosts503Error1),
            504 => response.Json<ApiV1PostHistoryImportPosts504Error1>().As(AsApiV1PostHistoryImportPosts504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostImportDeleteImportedPostsError> Response { get; } = new(Create);
}
