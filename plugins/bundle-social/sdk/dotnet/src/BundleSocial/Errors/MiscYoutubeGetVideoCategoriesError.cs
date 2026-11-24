using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeGetVideoCategoriesError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubeVideoCategories400Error1> _apiV1MiscYoutubeVideoCategories400Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories401Error1> _apiV1MiscYoutubeVideoCategories401Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories403Error1> _apiV1MiscYoutubeVideoCategories403Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories404Error1> _apiV1MiscYoutubeVideoCategories404Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories429Error1> _apiV1MiscYoutubeVideoCategories429Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories500Error1> _apiV1MiscYoutubeVideoCategories500Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories502Error1> _apiV1MiscYoutubeVideoCategories502Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories503Error1> _apiV1MiscYoutubeVideoCategories503Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideoCategories504Error1> _apiV1MiscYoutubeVideoCategories504Error1Value;

    private MiscYoutubeGetVideoCategoriesError(Optional<ApiV1MiscYoutubeVideoCategories400Error1> apiV1MiscYoutubeVideoCategories400Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories401Error1> apiV1MiscYoutubeVideoCategories401Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories403Error1> apiV1MiscYoutubeVideoCategories403Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories404Error1> apiV1MiscYoutubeVideoCategories404Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories429Error1> apiV1MiscYoutubeVideoCategories429Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories500Error1> apiV1MiscYoutubeVideoCategories500Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories502Error1> apiV1MiscYoutubeVideoCategories502Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories503Error1> apiV1MiscYoutubeVideoCategories503Error1Value,
        Optional<ApiV1MiscYoutubeVideoCategories504Error1> apiV1MiscYoutubeVideoCategories504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubeVideoCategories400Error1Value = apiV1MiscYoutubeVideoCategories400Error1Value;
        _apiV1MiscYoutubeVideoCategories401Error1Value = apiV1MiscYoutubeVideoCategories401Error1Value;
        _apiV1MiscYoutubeVideoCategories403Error1Value = apiV1MiscYoutubeVideoCategories403Error1Value;
        _apiV1MiscYoutubeVideoCategories404Error1Value = apiV1MiscYoutubeVideoCategories404Error1Value;
        _apiV1MiscYoutubeVideoCategories429Error1Value = apiV1MiscYoutubeVideoCategories429Error1Value;
        _apiV1MiscYoutubeVideoCategories500Error1Value = apiV1MiscYoutubeVideoCategories500Error1Value;
        _apiV1MiscYoutubeVideoCategories502Error1Value = apiV1MiscYoutubeVideoCategories502Error1Value;
        _apiV1MiscYoutubeVideoCategories503Error1Value = apiV1MiscYoutubeVideoCategories503Error1Value;
        _apiV1MiscYoutubeVideoCategories504Error1Value = apiV1MiscYoutubeVideoCategories504Error1Value;
    }

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories400Error1(ApiV1MiscYoutubeVideoCategories400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubeVideoCategories400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories401Error1(ApiV1MiscYoutubeVideoCategories401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubeVideoCategories401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories403Error1(ApiV1MiscYoutubeVideoCategories403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories404Error1(ApiV1MiscYoutubeVideoCategories404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories429Error1(ApiV1MiscYoutubeVideoCategories429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories500Error1(ApiV1MiscYoutubeVideoCategories500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories502Error1(ApiV1MiscYoutubeVideoCategories502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories503Error1(ApiV1MiscYoutubeVideoCategories503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeGetVideoCategoriesError AsApiV1MiscYoutubeVideoCategories504Error1(ApiV1MiscYoutubeVideoCategories504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideoCategories504Error1>.Some(value),
            default);

    private static MiscYoutubeGetVideoCategoriesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubeVideoCategories400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories400Error1? value) =>
        _apiV1MiscYoutubeVideoCategories400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories401Error1? value) =>
        _apiV1MiscYoutubeVideoCategories401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories403Error1? value) =>
        _apiV1MiscYoutubeVideoCategories403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories404Error1? value) =>
        _apiV1MiscYoutubeVideoCategories404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories429Error1? value) =>
        _apiV1MiscYoutubeVideoCategories429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories500Error1? value) =>
        _apiV1MiscYoutubeVideoCategories500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories502Error1? value) =>
        _apiV1MiscYoutubeVideoCategories502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories503Error1? value) =>
        _apiV1MiscYoutubeVideoCategories503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideoCategories504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories504Error1? value) =>
        _apiV1MiscYoutubeVideoCategories504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubeVideoCategories400Error1, TResult> onApiV1MiscYoutubeVideoCategories400Error1,
        Func<ApiV1MiscYoutubeVideoCategories401Error1, TResult> onApiV1MiscYoutubeVideoCategories401Error1,
        Func<ApiV1MiscYoutubeVideoCategories403Error1, TResult> onApiV1MiscYoutubeVideoCategories403Error1,
        Func<ApiV1MiscYoutubeVideoCategories404Error1, TResult> onApiV1MiscYoutubeVideoCategories404Error1,
        Func<ApiV1MiscYoutubeVideoCategories429Error1, TResult> onApiV1MiscYoutubeVideoCategories429Error1,
        Func<ApiV1MiscYoutubeVideoCategories500Error1, TResult> onApiV1MiscYoutubeVideoCategories500Error1,
        Func<ApiV1MiscYoutubeVideoCategories502Error1, TResult> onApiV1MiscYoutubeVideoCategories502Error1,
        Func<ApiV1MiscYoutubeVideoCategories503Error1, TResult> onApiV1MiscYoutubeVideoCategories503Error1,
        Func<ApiV1MiscYoutubeVideoCategories504Error1, TResult> onApiV1MiscYoutubeVideoCategories504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubeVideoCategories400Error1(
                out var apiV1MiscYoutubeVideoCategories400Error1Value) => onApiV1MiscYoutubeVideoCategories400Error1(
                apiV1MiscYoutubeVideoCategories400Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories401Error1(
                out var apiV1MiscYoutubeVideoCategories401Error1Value) => onApiV1MiscYoutubeVideoCategories401Error1(
                apiV1MiscYoutubeVideoCategories401Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories403Error1(
                out var apiV1MiscYoutubeVideoCategories403Error1Value) => onApiV1MiscYoutubeVideoCategories403Error1(
                apiV1MiscYoutubeVideoCategories403Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories404Error1(
                out var apiV1MiscYoutubeVideoCategories404Error1Value) => onApiV1MiscYoutubeVideoCategories404Error1(
                apiV1MiscYoutubeVideoCategories404Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories429Error1(
                out var apiV1MiscYoutubeVideoCategories429Error1Value) => onApiV1MiscYoutubeVideoCategories429Error1(
                apiV1MiscYoutubeVideoCategories429Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories500Error1(
                out var apiV1MiscYoutubeVideoCategories500Error1Value) => onApiV1MiscYoutubeVideoCategories500Error1(
                apiV1MiscYoutubeVideoCategories500Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories502Error1(
                out var apiV1MiscYoutubeVideoCategories502Error1Value) => onApiV1MiscYoutubeVideoCategories502Error1(
                apiV1MiscYoutubeVideoCategories502Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories503Error1(
                out var apiV1MiscYoutubeVideoCategories503Error1Value) => onApiV1MiscYoutubeVideoCategories503Error1(
                apiV1MiscYoutubeVideoCategories503Error1Value),
            _ when TryGetApiV1MiscYoutubeVideoCategories504Error1(
                out var apiV1MiscYoutubeVideoCategories504Error1Value) => onApiV1MiscYoutubeVideoCategories504Error1(
                apiV1MiscYoutubeVideoCategories504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeGetVideoCategoriesError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubeVideoCategories400Error1> onApiV1MiscYoutubeVideoCategories400Error1,
        Action<ApiV1MiscYoutubeVideoCategories401Error1> onApiV1MiscYoutubeVideoCategories401Error1,
        Action<ApiV1MiscYoutubeVideoCategories403Error1> onApiV1MiscYoutubeVideoCategories403Error1,
        Action<ApiV1MiscYoutubeVideoCategories404Error1> onApiV1MiscYoutubeVideoCategories404Error1,
        Action<ApiV1MiscYoutubeVideoCategories429Error1> onApiV1MiscYoutubeVideoCategories429Error1,
        Action<ApiV1MiscYoutubeVideoCategories500Error1> onApiV1MiscYoutubeVideoCategories500Error1,
        Action<ApiV1MiscYoutubeVideoCategories502Error1> onApiV1MiscYoutubeVideoCategories502Error1,
        Action<ApiV1MiscYoutubeVideoCategories503Error1> onApiV1MiscYoutubeVideoCategories503Error1,
        Action<ApiV1MiscYoutubeVideoCategories504Error1> onApiV1MiscYoutubeVideoCategories504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubeVideoCategories400Error1(
            out var apiV1MiscYoutubeVideoCategories400Error1Value)) onApiV1MiscYoutubeVideoCategories400Error1(
            apiV1MiscYoutubeVideoCategories400Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories401Error1(
            out var apiV1MiscYoutubeVideoCategories401Error1Value)) onApiV1MiscYoutubeVideoCategories401Error1(
            apiV1MiscYoutubeVideoCategories401Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories403Error1(
            out var apiV1MiscYoutubeVideoCategories403Error1Value)) onApiV1MiscYoutubeVideoCategories403Error1(
            apiV1MiscYoutubeVideoCategories403Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories404Error1(
            out var apiV1MiscYoutubeVideoCategories404Error1Value)) onApiV1MiscYoutubeVideoCategories404Error1(
            apiV1MiscYoutubeVideoCategories404Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories429Error1(
            out var apiV1MiscYoutubeVideoCategories429Error1Value)) onApiV1MiscYoutubeVideoCategories429Error1(
            apiV1MiscYoutubeVideoCategories429Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories500Error1(
            out var apiV1MiscYoutubeVideoCategories500Error1Value)) onApiV1MiscYoutubeVideoCategories500Error1(
            apiV1MiscYoutubeVideoCategories500Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories502Error1(
            out var apiV1MiscYoutubeVideoCategories502Error1Value)) onApiV1MiscYoutubeVideoCategories502Error1(
            apiV1MiscYoutubeVideoCategories502Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories503Error1(
            out var apiV1MiscYoutubeVideoCategories503Error1Value)) onApiV1MiscYoutubeVideoCategories503Error1(
            apiV1MiscYoutubeVideoCategories503Error1Value);
        else if (TryGetApiV1MiscYoutubeVideoCategories504Error1(
            out var apiV1MiscYoutubeVideoCategories504Error1Value)) onApiV1MiscYoutubeVideoCategories504Error1(
            apiV1MiscYoutubeVideoCategories504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeGetVideoCategoriesError)} holds no value.");
    }

    private static Task<MiscYoutubeGetVideoCategoriesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubeVideoCategories400Error1>().As(
                AsApiV1MiscYoutubeVideoCategories400Error1),
            401 => response.Json<ApiV1MiscYoutubeVideoCategories401Error1>().As(
                AsApiV1MiscYoutubeVideoCategories401Error1),
            403 => response.Json<ApiV1MiscYoutubeVideoCategories403Error1>().As(
                AsApiV1MiscYoutubeVideoCategories403Error1),
            404 => response.Json<ApiV1MiscYoutubeVideoCategories404Error1>().As(
                AsApiV1MiscYoutubeVideoCategories404Error1),
            429 => response.Json<ApiV1MiscYoutubeVideoCategories429Error1>().As(
                AsApiV1MiscYoutubeVideoCategories429Error1),
            500 => response.Json<ApiV1MiscYoutubeVideoCategories500Error1>().As(
                AsApiV1MiscYoutubeVideoCategories500Error1),
            502 => response.Json<ApiV1MiscYoutubeVideoCategories502Error1>().As(
                AsApiV1MiscYoutubeVideoCategories502Error1),
            503 => response.Json<ApiV1MiscYoutubeVideoCategories503Error1>().As(
                AsApiV1MiscYoutubeVideoCategories503Error1),
            504 => response.Json<ApiV1MiscYoutubeVideoCategories504Error1>().As(
                AsApiV1MiscYoutubeVideoCategories504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeGetVideoCategoriesError> Response { get; } = new(Create);
}
