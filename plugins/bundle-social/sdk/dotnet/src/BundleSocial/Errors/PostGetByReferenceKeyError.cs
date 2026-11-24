using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostGetByReferenceKeyError : ApiError
{
    private readonly Optional<ApiV1PostReferenceKey400Error1> _apiV1PostReferenceKey400Error1Value;

    private readonly Optional<ApiV1PostReferenceKey401Error1> _apiV1PostReferenceKey401Error1Value;

    private readonly Optional<ApiV1PostReferenceKey403Error1> _apiV1PostReferenceKey403Error1Value;

    private readonly Optional<ApiV1PostReferenceKey404Error1> _apiV1PostReferenceKey404Error1Value;

    private readonly Optional<ApiV1PostReferenceKey429Error1> _apiV1PostReferenceKey429Error1Value;

    private readonly Optional<ApiV1PostReferenceKey500Error1> _apiV1PostReferenceKey500Error1Value;

    private readonly Optional<ApiV1PostReferenceKey502Error1> _apiV1PostReferenceKey502Error1Value;

    private readonly Optional<ApiV1PostReferenceKey503Error1> _apiV1PostReferenceKey503Error1Value;

    private readonly Optional<ApiV1PostReferenceKey504Error1> _apiV1PostReferenceKey504Error1Value;

    private PostGetByReferenceKeyError(Optional<ApiV1PostReferenceKey400Error1> apiV1PostReferenceKey400Error1Value,
        Optional<ApiV1PostReferenceKey401Error1> apiV1PostReferenceKey401Error1Value,
        Optional<ApiV1PostReferenceKey403Error1> apiV1PostReferenceKey403Error1Value,
        Optional<ApiV1PostReferenceKey404Error1> apiV1PostReferenceKey404Error1Value,
        Optional<ApiV1PostReferenceKey429Error1> apiV1PostReferenceKey429Error1Value,
        Optional<ApiV1PostReferenceKey500Error1> apiV1PostReferenceKey500Error1Value,
        Optional<ApiV1PostReferenceKey502Error1> apiV1PostReferenceKey502Error1Value,
        Optional<ApiV1PostReferenceKey503Error1> apiV1PostReferenceKey503Error1Value,
        Optional<ApiV1PostReferenceKey504Error1> apiV1PostReferenceKey504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostReferenceKey400Error1Value = apiV1PostReferenceKey400Error1Value;
        _apiV1PostReferenceKey401Error1Value = apiV1PostReferenceKey401Error1Value;
        _apiV1PostReferenceKey403Error1Value = apiV1PostReferenceKey403Error1Value;
        _apiV1PostReferenceKey404Error1Value = apiV1PostReferenceKey404Error1Value;
        _apiV1PostReferenceKey429Error1Value = apiV1PostReferenceKey429Error1Value;
        _apiV1PostReferenceKey500Error1Value = apiV1PostReferenceKey500Error1Value;
        _apiV1PostReferenceKey502Error1Value = apiV1PostReferenceKey502Error1Value;
        _apiV1PostReferenceKey503Error1Value = apiV1PostReferenceKey503Error1Value;
        _apiV1PostReferenceKey504Error1Value = apiV1PostReferenceKey504Error1Value;
    }

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey400Error1(ApiV1PostReferenceKey400Error1 value) =>
        new(
            Optional<ApiV1PostReferenceKey400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey401Error1(ApiV1PostReferenceKey401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostReferenceKey401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey403Error1(ApiV1PostReferenceKey403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostReferenceKey403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey404Error1(ApiV1PostReferenceKey404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey429Error1(ApiV1PostReferenceKey429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey500Error1(ApiV1PostReferenceKey500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey502Error1(ApiV1PostReferenceKey502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey502Error1>.Some(value),
            default,
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey503Error1(ApiV1PostReferenceKey503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey503Error1>.Some(value),
            default,
            default);

    private static PostGetByReferenceKeyError AsApiV1PostReferenceKey504Error1(ApiV1PostReferenceKey504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostReferenceKey504Error1>.Some(value),
            default);

    private static PostGetByReferenceKeyError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostReferenceKey400Error1([NotNullWhen(true)] out ApiV1PostReferenceKey400Error1? value) =>
        _apiV1PostReferenceKey400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey401Error1([NotNullWhen(true)] out ApiV1PostReferenceKey401Error1? value) =>
        _apiV1PostReferenceKey401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey403Error1([NotNullWhen(true)] out ApiV1PostReferenceKey403Error1? value) =>
        _apiV1PostReferenceKey403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey404Error1([NotNullWhen(true)] out ApiV1PostReferenceKey404Error1? value) =>
        _apiV1PostReferenceKey404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey429Error1([NotNullWhen(true)] out ApiV1PostReferenceKey429Error1? value) =>
        _apiV1PostReferenceKey429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey500Error1([NotNullWhen(true)] out ApiV1PostReferenceKey500Error1? value) =>
        _apiV1PostReferenceKey500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey502Error1([NotNullWhen(true)] out ApiV1PostReferenceKey502Error1? value) =>
        _apiV1PostReferenceKey502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey503Error1([NotNullWhen(true)] out ApiV1PostReferenceKey503Error1? value) =>
        _apiV1PostReferenceKey503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostReferenceKey504Error1([NotNullWhen(true)] out ApiV1PostReferenceKey504Error1? value) =>
        _apiV1PostReferenceKey504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostReferenceKey400Error1, TResult> onApiV1PostReferenceKey400Error1,
        Func<ApiV1PostReferenceKey401Error1, TResult> onApiV1PostReferenceKey401Error1,
        Func<ApiV1PostReferenceKey403Error1, TResult> onApiV1PostReferenceKey403Error1,
        Func<ApiV1PostReferenceKey404Error1, TResult> onApiV1PostReferenceKey404Error1,
        Func<ApiV1PostReferenceKey429Error1, TResult> onApiV1PostReferenceKey429Error1,
        Func<ApiV1PostReferenceKey500Error1, TResult> onApiV1PostReferenceKey500Error1,
        Func<ApiV1PostReferenceKey502Error1, TResult> onApiV1PostReferenceKey502Error1,
        Func<ApiV1PostReferenceKey503Error1, TResult> onApiV1PostReferenceKey503Error1,
        Func<ApiV1PostReferenceKey504Error1, TResult> onApiV1PostReferenceKey504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostReferenceKey400Error1(
                out var apiV1PostReferenceKey400Error1Value) => onApiV1PostReferenceKey400Error1(
                apiV1PostReferenceKey400Error1Value),
            _ when TryGetApiV1PostReferenceKey401Error1(
                out var apiV1PostReferenceKey401Error1Value) => onApiV1PostReferenceKey401Error1(
                apiV1PostReferenceKey401Error1Value),
            _ when TryGetApiV1PostReferenceKey403Error1(
                out var apiV1PostReferenceKey403Error1Value) => onApiV1PostReferenceKey403Error1(
                apiV1PostReferenceKey403Error1Value),
            _ when TryGetApiV1PostReferenceKey404Error1(
                out var apiV1PostReferenceKey404Error1Value) => onApiV1PostReferenceKey404Error1(
                apiV1PostReferenceKey404Error1Value),
            _ when TryGetApiV1PostReferenceKey429Error1(
                out var apiV1PostReferenceKey429Error1Value) => onApiV1PostReferenceKey429Error1(
                apiV1PostReferenceKey429Error1Value),
            _ when TryGetApiV1PostReferenceKey500Error1(
                out var apiV1PostReferenceKey500Error1Value) => onApiV1PostReferenceKey500Error1(
                apiV1PostReferenceKey500Error1Value),
            _ when TryGetApiV1PostReferenceKey502Error1(
                out var apiV1PostReferenceKey502Error1Value) => onApiV1PostReferenceKey502Error1(
                apiV1PostReferenceKey502Error1Value),
            _ when TryGetApiV1PostReferenceKey503Error1(
                out var apiV1PostReferenceKey503Error1Value) => onApiV1PostReferenceKey503Error1(
                apiV1PostReferenceKey503Error1Value),
            _ when TryGetApiV1PostReferenceKey504Error1(
                out var apiV1PostReferenceKey504Error1Value) => onApiV1PostReferenceKey504Error1(
                apiV1PostReferenceKey504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostGetByReferenceKeyError)} holds no value.")
        };

    public void Match(Action<ApiV1PostReferenceKey400Error1> onApiV1PostReferenceKey400Error1,
        Action<ApiV1PostReferenceKey401Error1> onApiV1PostReferenceKey401Error1,
        Action<ApiV1PostReferenceKey403Error1> onApiV1PostReferenceKey403Error1,
        Action<ApiV1PostReferenceKey404Error1> onApiV1PostReferenceKey404Error1,
        Action<ApiV1PostReferenceKey429Error1> onApiV1PostReferenceKey429Error1,
        Action<ApiV1PostReferenceKey500Error1> onApiV1PostReferenceKey500Error1,
        Action<ApiV1PostReferenceKey502Error1> onApiV1PostReferenceKey502Error1,
        Action<ApiV1PostReferenceKey503Error1> onApiV1PostReferenceKey503Error1,
        Action<ApiV1PostReferenceKey504Error1> onApiV1PostReferenceKey504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostReferenceKey400Error1(
            out var apiV1PostReferenceKey400Error1Value)) onApiV1PostReferenceKey400Error1(
            apiV1PostReferenceKey400Error1Value);
        else if (TryGetApiV1PostReferenceKey401Error1(
            out var apiV1PostReferenceKey401Error1Value)) onApiV1PostReferenceKey401Error1(
            apiV1PostReferenceKey401Error1Value);
        else if (TryGetApiV1PostReferenceKey403Error1(
            out var apiV1PostReferenceKey403Error1Value)) onApiV1PostReferenceKey403Error1(
            apiV1PostReferenceKey403Error1Value);
        else if (TryGetApiV1PostReferenceKey404Error1(
            out var apiV1PostReferenceKey404Error1Value)) onApiV1PostReferenceKey404Error1(
            apiV1PostReferenceKey404Error1Value);
        else if (TryGetApiV1PostReferenceKey429Error1(
            out var apiV1PostReferenceKey429Error1Value)) onApiV1PostReferenceKey429Error1(
            apiV1PostReferenceKey429Error1Value);
        else if (TryGetApiV1PostReferenceKey500Error1(
            out var apiV1PostReferenceKey500Error1Value)) onApiV1PostReferenceKey500Error1(
            apiV1PostReferenceKey500Error1Value);
        else if (TryGetApiV1PostReferenceKey502Error1(
            out var apiV1PostReferenceKey502Error1Value)) onApiV1PostReferenceKey502Error1(
            apiV1PostReferenceKey502Error1Value);
        else if (TryGetApiV1PostReferenceKey503Error1(
            out var apiV1PostReferenceKey503Error1Value)) onApiV1PostReferenceKey503Error1(
            apiV1PostReferenceKey503Error1Value);
        else if (TryGetApiV1PostReferenceKey504Error1(
            out var apiV1PostReferenceKey504Error1Value)) onApiV1PostReferenceKey504Error1(
            apiV1PostReferenceKey504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostGetByReferenceKeyError)} holds no value.");
    }

    private static Task<PostGetByReferenceKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostReferenceKey400Error1>().As(AsApiV1PostReferenceKey400Error1),
            401 => response.Json<ApiV1PostReferenceKey401Error1>().As(AsApiV1PostReferenceKey401Error1),
            403 => response.Json<ApiV1PostReferenceKey403Error1>().As(AsApiV1PostReferenceKey403Error1),
            404 => response.Json<ApiV1PostReferenceKey404Error1>().As(AsApiV1PostReferenceKey404Error1),
            429 => response.Json<ApiV1PostReferenceKey429Error1>().As(AsApiV1PostReferenceKey429Error1),
            500 => response.Json<ApiV1PostReferenceKey500Error1>().As(AsApiV1PostReferenceKey500Error1),
            502 => response.Json<ApiV1PostReferenceKey502Error1>().As(AsApiV1PostReferenceKey502Error1),
            503 => response.Json<ApiV1PostReferenceKey503Error1>().As(AsApiV1PostReferenceKey503Error1),
            504 => response.Json<ApiV1PostReferenceKey504Error1>().As(AsApiV1PostReferenceKey504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostGetByReferenceKeyError> Response { get; } = new(Create);
}
