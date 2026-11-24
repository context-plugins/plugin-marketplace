using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscLinkedinGetTagsError : ApiError
{
    private readonly Optional<ApiV1MiscLinkedinMentionsTags400Error1> _apiV1MiscLinkedinMentionsTags400Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags401Error1> _apiV1MiscLinkedinMentionsTags401Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags403Error1> _apiV1MiscLinkedinMentionsTags403Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags404Error1> _apiV1MiscLinkedinMentionsTags404Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags429Error1> _apiV1MiscLinkedinMentionsTags429Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags500Error1> _apiV1MiscLinkedinMentionsTags500Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags502Error1> _apiV1MiscLinkedinMentionsTags502Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags503Error1> _apiV1MiscLinkedinMentionsTags503Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsTags504Error1> _apiV1MiscLinkedinMentionsTags504Error1Value;

    private MiscLinkedinGetTagsError(Optional<ApiV1MiscLinkedinMentionsTags400Error1> apiV1MiscLinkedinMentionsTags400Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags401Error1> apiV1MiscLinkedinMentionsTags401Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags403Error1> apiV1MiscLinkedinMentionsTags403Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags404Error1> apiV1MiscLinkedinMentionsTags404Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags429Error1> apiV1MiscLinkedinMentionsTags429Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags500Error1> apiV1MiscLinkedinMentionsTags500Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags502Error1> apiV1MiscLinkedinMentionsTags502Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags503Error1> apiV1MiscLinkedinMentionsTags503Error1Value,
        Optional<ApiV1MiscLinkedinMentionsTags504Error1> apiV1MiscLinkedinMentionsTags504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscLinkedinMentionsTags400Error1Value = apiV1MiscLinkedinMentionsTags400Error1Value;
        _apiV1MiscLinkedinMentionsTags401Error1Value = apiV1MiscLinkedinMentionsTags401Error1Value;
        _apiV1MiscLinkedinMentionsTags403Error1Value = apiV1MiscLinkedinMentionsTags403Error1Value;
        _apiV1MiscLinkedinMentionsTags404Error1Value = apiV1MiscLinkedinMentionsTags404Error1Value;
        _apiV1MiscLinkedinMentionsTags429Error1Value = apiV1MiscLinkedinMentionsTags429Error1Value;
        _apiV1MiscLinkedinMentionsTags500Error1Value = apiV1MiscLinkedinMentionsTags500Error1Value;
        _apiV1MiscLinkedinMentionsTags502Error1Value = apiV1MiscLinkedinMentionsTags502Error1Value;
        _apiV1MiscLinkedinMentionsTags503Error1Value = apiV1MiscLinkedinMentionsTags503Error1Value;
        _apiV1MiscLinkedinMentionsTags504Error1Value = apiV1MiscLinkedinMentionsTags504Error1Value;
    }

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags400Error1(ApiV1MiscLinkedinMentionsTags400Error1 value) =>
        new(
            Optional<ApiV1MiscLinkedinMentionsTags400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags401Error1(ApiV1MiscLinkedinMentionsTags401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscLinkedinMentionsTags401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags403Error1(ApiV1MiscLinkedinMentionsTags403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags404Error1(ApiV1MiscLinkedinMentionsTags404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags429Error1(ApiV1MiscLinkedinMentionsTags429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags500Error1(ApiV1MiscLinkedinMentionsTags500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags502Error1(ApiV1MiscLinkedinMentionsTags502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags503Error1(ApiV1MiscLinkedinMentionsTags503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags503Error1>.Some(value),
            default,
            default);

    private static MiscLinkedinGetTagsError AsApiV1MiscLinkedinMentionsTags504Error1(ApiV1MiscLinkedinMentionsTags504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsTags504Error1>.Some(value),
            default);

    private static MiscLinkedinGetTagsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscLinkedinMentionsTags400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags400Error1? value) =>
        _apiV1MiscLinkedinMentionsTags400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags401Error1? value) =>
        _apiV1MiscLinkedinMentionsTags401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags403Error1? value) =>
        _apiV1MiscLinkedinMentionsTags403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags404Error1? value) =>
        _apiV1MiscLinkedinMentionsTags404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags429Error1? value) =>
        _apiV1MiscLinkedinMentionsTags429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags500Error1? value) =>
        _apiV1MiscLinkedinMentionsTags500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags502Error1? value) =>
        _apiV1MiscLinkedinMentionsTags502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags503Error1? value) =>
        _apiV1MiscLinkedinMentionsTags503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsTags504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags504Error1? value) =>
        _apiV1MiscLinkedinMentionsTags504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscLinkedinMentionsTags400Error1, TResult> onApiV1MiscLinkedinMentionsTags400Error1,
        Func<ApiV1MiscLinkedinMentionsTags401Error1, TResult> onApiV1MiscLinkedinMentionsTags401Error1,
        Func<ApiV1MiscLinkedinMentionsTags403Error1, TResult> onApiV1MiscLinkedinMentionsTags403Error1,
        Func<ApiV1MiscLinkedinMentionsTags404Error1, TResult> onApiV1MiscLinkedinMentionsTags404Error1,
        Func<ApiV1MiscLinkedinMentionsTags429Error1, TResult> onApiV1MiscLinkedinMentionsTags429Error1,
        Func<ApiV1MiscLinkedinMentionsTags500Error1, TResult> onApiV1MiscLinkedinMentionsTags500Error1,
        Func<ApiV1MiscLinkedinMentionsTags502Error1, TResult> onApiV1MiscLinkedinMentionsTags502Error1,
        Func<ApiV1MiscLinkedinMentionsTags503Error1, TResult> onApiV1MiscLinkedinMentionsTags503Error1,
        Func<ApiV1MiscLinkedinMentionsTags504Error1, TResult> onApiV1MiscLinkedinMentionsTags504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscLinkedinMentionsTags400Error1(
                out var apiV1MiscLinkedinMentionsTags400Error1Value) => onApiV1MiscLinkedinMentionsTags400Error1(
                apiV1MiscLinkedinMentionsTags400Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags401Error1(
                out var apiV1MiscLinkedinMentionsTags401Error1Value) => onApiV1MiscLinkedinMentionsTags401Error1(
                apiV1MiscLinkedinMentionsTags401Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags403Error1(
                out var apiV1MiscLinkedinMentionsTags403Error1Value) => onApiV1MiscLinkedinMentionsTags403Error1(
                apiV1MiscLinkedinMentionsTags403Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags404Error1(
                out var apiV1MiscLinkedinMentionsTags404Error1Value) => onApiV1MiscLinkedinMentionsTags404Error1(
                apiV1MiscLinkedinMentionsTags404Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags429Error1(
                out var apiV1MiscLinkedinMentionsTags429Error1Value) => onApiV1MiscLinkedinMentionsTags429Error1(
                apiV1MiscLinkedinMentionsTags429Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags500Error1(
                out var apiV1MiscLinkedinMentionsTags500Error1Value) => onApiV1MiscLinkedinMentionsTags500Error1(
                apiV1MiscLinkedinMentionsTags500Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags502Error1(
                out var apiV1MiscLinkedinMentionsTags502Error1Value) => onApiV1MiscLinkedinMentionsTags502Error1(
                apiV1MiscLinkedinMentionsTags502Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags503Error1(
                out var apiV1MiscLinkedinMentionsTags503Error1Value) => onApiV1MiscLinkedinMentionsTags503Error1(
                apiV1MiscLinkedinMentionsTags503Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsTags504Error1(
                out var apiV1MiscLinkedinMentionsTags504Error1Value) => onApiV1MiscLinkedinMentionsTags504Error1(
                apiV1MiscLinkedinMentionsTags504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscLinkedinGetTagsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscLinkedinMentionsTags400Error1> onApiV1MiscLinkedinMentionsTags400Error1,
        Action<ApiV1MiscLinkedinMentionsTags401Error1> onApiV1MiscLinkedinMentionsTags401Error1,
        Action<ApiV1MiscLinkedinMentionsTags403Error1> onApiV1MiscLinkedinMentionsTags403Error1,
        Action<ApiV1MiscLinkedinMentionsTags404Error1> onApiV1MiscLinkedinMentionsTags404Error1,
        Action<ApiV1MiscLinkedinMentionsTags429Error1> onApiV1MiscLinkedinMentionsTags429Error1,
        Action<ApiV1MiscLinkedinMentionsTags500Error1> onApiV1MiscLinkedinMentionsTags500Error1,
        Action<ApiV1MiscLinkedinMentionsTags502Error1> onApiV1MiscLinkedinMentionsTags502Error1,
        Action<ApiV1MiscLinkedinMentionsTags503Error1> onApiV1MiscLinkedinMentionsTags503Error1,
        Action<ApiV1MiscLinkedinMentionsTags504Error1> onApiV1MiscLinkedinMentionsTags504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscLinkedinMentionsTags400Error1(
            out var apiV1MiscLinkedinMentionsTags400Error1Value)) onApiV1MiscLinkedinMentionsTags400Error1(
            apiV1MiscLinkedinMentionsTags400Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags401Error1(
            out var apiV1MiscLinkedinMentionsTags401Error1Value)) onApiV1MiscLinkedinMentionsTags401Error1(
            apiV1MiscLinkedinMentionsTags401Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags403Error1(
            out var apiV1MiscLinkedinMentionsTags403Error1Value)) onApiV1MiscLinkedinMentionsTags403Error1(
            apiV1MiscLinkedinMentionsTags403Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags404Error1(
            out var apiV1MiscLinkedinMentionsTags404Error1Value)) onApiV1MiscLinkedinMentionsTags404Error1(
            apiV1MiscLinkedinMentionsTags404Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags429Error1(
            out var apiV1MiscLinkedinMentionsTags429Error1Value)) onApiV1MiscLinkedinMentionsTags429Error1(
            apiV1MiscLinkedinMentionsTags429Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags500Error1(
            out var apiV1MiscLinkedinMentionsTags500Error1Value)) onApiV1MiscLinkedinMentionsTags500Error1(
            apiV1MiscLinkedinMentionsTags500Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags502Error1(
            out var apiV1MiscLinkedinMentionsTags502Error1Value)) onApiV1MiscLinkedinMentionsTags502Error1(
            apiV1MiscLinkedinMentionsTags502Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags503Error1(
            out var apiV1MiscLinkedinMentionsTags503Error1Value)) onApiV1MiscLinkedinMentionsTags503Error1(
            apiV1MiscLinkedinMentionsTags503Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsTags504Error1(
            out var apiV1MiscLinkedinMentionsTags504Error1Value)) onApiV1MiscLinkedinMentionsTags504Error1(
            apiV1MiscLinkedinMentionsTags504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscLinkedinGetTagsError)} holds no value.");
    }

    private static Task<MiscLinkedinGetTagsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscLinkedinMentionsTags400Error1>().As(AsApiV1MiscLinkedinMentionsTags400Error1),
            401 => response.Json<ApiV1MiscLinkedinMentionsTags401Error1>().As(AsApiV1MiscLinkedinMentionsTags401Error1),
            403 => response.Json<ApiV1MiscLinkedinMentionsTags403Error1>().As(AsApiV1MiscLinkedinMentionsTags403Error1),
            404 => response.Json<ApiV1MiscLinkedinMentionsTags404Error1>().As(AsApiV1MiscLinkedinMentionsTags404Error1),
            429 => response.Json<ApiV1MiscLinkedinMentionsTags429Error1>().As(AsApiV1MiscLinkedinMentionsTags429Error1),
            500 => response.Json<ApiV1MiscLinkedinMentionsTags500Error1>().As(AsApiV1MiscLinkedinMentionsTags500Error1),
            502 => response.Json<ApiV1MiscLinkedinMentionsTags502Error1>().As(AsApiV1MiscLinkedinMentionsTags502Error1),
            503 => response.Json<ApiV1MiscLinkedinMentionsTags503Error1>().As(AsApiV1MiscLinkedinMentionsTags503Error1),
            504 => response.Json<ApiV1MiscLinkedinMentionsTags504Error1>().As(AsApiV1MiscLinkedinMentionsTags504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscLinkedinGetTagsError> Response { get; } = new(Create);
}
