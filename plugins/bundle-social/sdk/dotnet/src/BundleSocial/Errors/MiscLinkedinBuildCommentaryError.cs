using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscLinkedinBuildCommentaryError : ApiError
{
    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder400Error1> _apiV1MiscLinkedinMentionsBuilder400Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder401Error1> _apiV1MiscLinkedinMentionsBuilder401Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder403Error1> _apiV1MiscLinkedinMentionsBuilder403Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder404Error1> _apiV1MiscLinkedinMentionsBuilder404Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder429Error1> _apiV1MiscLinkedinMentionsBuilder429Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder500Error1> _apiV1MiscLinkedinMentionsBuilder500Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder502Error1> _apiV1MiscLinkedinMentionsBuilder502Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder503Error1> _apiV1MiscLinkedinMentionsBuilder503Error1Value;

    private readonly Optional<ApiV1MiscLinkedinMentionsBuilder504Error1> _apiV1MiscLinkedinMentionsBuilder504Error1Value;

    private MiscLinkedinBuildCommentaryError(Optional<ApiV1MiscLinkedinMentionsBuilder400Error1> apiV1MiscLinkedinMentionsBuilder400Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder401Error1> apiV1MiscLinkedinMentionsBuilder401Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder403Error1> apiV1MiscLinkedinMentionsBuilder403Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder404Error1> apiV1MiscLinkedinMentionsBuilder404Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder429Error1> apiV1MiscLinkedinMentionsBuilder429Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder500Error1> apiV1MiscLinkedinMentionsBuilder500Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder502Error1> apiV1MiscLinkedinMentionsBuilder502Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder503Error1> apiV1MiscLinkedinMentionsBuilder503Error1Value,
        Optional<ApiV1MiscLinkedinMentionsBuilder504Error1> apiV1MiscLinkedinMentionsBuilder504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscLinkedinMentionsBuilder400Error1Value = apiV1MiscLinkedinMentionsBuilder400Error1Value;
        _apiV1MiscLinkedinMentionsBuilder401Error1Value = apiV1MiscLinkedinMentionsBuilder401Error1Value;
        _apiV1MiscLinkedinMentionsBuilder403Error1Value = apiV1MiscLinkedinMentionsBuilder403Error1Value;
        _apiV1MiscLinkedinMentionsBuilder404Error1Value = apiV1MiscLinkedinMentionsBuilder404Error1Value;
        _apiV1MiscLinkedinMentionsBuilder429Error1Value = apiV1MiscLinkedinMentionsBuilder429Error1Value;
        _apiV1MiscLinkedinMentionsBuilder500Error1Value = apiV1MiscLinkedinMentionsBuilder500Error1Value;
        _apiV1MiscLinkedinMentionsBuilder502Error1Value = apiV1MiscLinkedinMentionsBuilder502Error1Value;
        _apiV1MiscLinkedinMentionsBuilder503Error1Value = apiV1MiscLinkedinMentionsBuilder503Error1Value;
        _apiV1MiscLinkedinMentionsBuilder504Error1Value = apiV1MiscLinkedinMentionsBuilder504Error1Value;
    }

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder400Error1(ApiV1MiscLinkedinMentionsBuilder400Error1 value) =>
        new(
            Optional<ApiV1MiscLinkedinMentionsBuilder400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder401Error1(ApiV1MiscLinkedinMentionsBuilder401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder403Error1(ApiV1MiscLinkedinMentionsBuilder403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder404Error1(ApiV1MiscLinkedinMentionsBuilder404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder429Error1(ApiV1MiscLinkedinMentionsBuilder429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder500Error1(ApiV1MiscLinkedinMentionsBuilder500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder502Error1(ApiV1MiscLinkedinMentionsBuilder502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder503Error1(ApiV1MiscLinkedinMentionsBuilder503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder503Error1>.Some(value),
            default,
            default);

    private static MiscLinkedinBuildCommentaryError AsApiV1MiscLinkedinMentionsBuilder504Error1(ApiV1MiscLinkedinMentionsBuilder504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinMentionsBuilder504Error1>.Some(value),
            default);

    private static MiscLinkedinBuildCommentaryError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscLinkedinMentionsBuilder400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder400Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder401Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder403Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder404Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder429Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder500Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder502Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder503Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinMentionsBuilder504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder504Error1? value) =>
        _apiV1MiscLinkedinMentionsBuilder504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscLinkedinMentionsBuilder400Error1, TResult> onApiV1MiscLinkedinMentionsBuilder400Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder401Error1, TResult> onApiV1MiscLinkedinMentionsBuilder401Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder403Error1, TResult> onApiV1MiscLinkedinMentionsBuilder403Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder404Error1, TResult> onApiV1MiscLinkedinMentionsBuilder404Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder429Error1, TResult> onApiV1MiscLinkedinMentionsBuilder429Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder500Error1, TResult> onApiV1MiscLinkedinMentionsBuilder500Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder502Error1, TResult> onApiV1MiscLinkedinMentionsBuilder502Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder503Error1, TResult> onApiV1MiscLinkedinMentionsBuilder503Error1,
        Func<ApiV1MiscLinkedinMentionsBuilder504Error1, TResult> onApiV1MiscLinkedinMentionsBuilder504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscLinkedinMentionsBuilder400Error1(
                out var apiV1MiscLinkedinMentionsBuilder400Error1Value) => onApiV1MiscLinkedinMentionsBuilder400Error1(
                apiV1MiscLinkedinMentionsBuilder400Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder401Error1(
                out var apiV1MiscLinkedinMentionsBuilder401Error1Value) => onApiV1MiscLinkedinMentionsBuilder401Error1(
                apiV1MiscLinkedinMentionsBuilder401Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder403Error1(
                out var apiV1MiscLinkedinMentionsBuilder403Error1Value) => onApiV1MiscLinkedinMentionsBuilder403Error1(
                apiV1MiscLinkedinMentionsBuilder403Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder404Error1(
                out var apiV1MiscLinkedinMentionsBuilder404Error1Value) => onApiV1MiscLinkedinMentionsBuilder404Error1(
                apiV1MiscLinkedinMentionsBuilder404Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder429Error1(
                out var apiV1MiscLinkedinMentionsBuilder429Error1Value) => onApiV1MiscLinkedinMentionsBuilder429Error1(
                apiV1MiscLinkedinMentionsBuilder429Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder500Error1(
                out var apiV1MiscLinkedinMentionsBuilder500Error1Value) => onApiV1MiscLinkedinMentionsBuilder500Error1(
                apiV1MiscLinkedinMentionsBuilder500Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder502Error1(
                out var apiV1MiscLinkedinMentionsBuilder502Error1Value) => onApiV1MiscLinkedinMentionsBuilder502Error1(
                apiV1MiscLinkedinMentionsBuilder502Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder503Error1(
                out var apiV1MiscLinkedinMentionsBuilder503Error1Value) => onApiV1MiscLinkedinMentionsBuilder503Error1(
                apiV1MiscLinkedinMentionsBuilder503Error1Value),
            _ when TryGetApiV1MiscLinkedinMentionsBuilder504Error1(
                out var apiV1MiscLinkedinMentionsBuilder504Error1Value) => onApiV1MiscLinkedinMentionsBuilder504Error1(
                apiV1MiscLinkedinMentionsBuilder504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscLinkedinBuildCommentaryError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscLinkedinMentionsBuilder400Error1> onApiV1MiscLinkedinMentionsBuilder400Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder401Error1> onApiV1MiscLinkedinMentionsBuilder401Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder403Error1> onApiV1MiscLinkedinMentionsBuilder403Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder404Error1> onApiV1MiscLinkedinMentionsBuilder404Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder429Error1> onApiV1MiscLinkedinMentionsBuilder429Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder500Error1> onApiV1MiscLinkedinMentionsBuilder500Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder502Error1> onApiV1MiscLinkedinMentionsBuilder502Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder503Error1> onApiV1MiscLinkedinMentionsBuilder503Error1,
        Action<ApiV1MiscLinkedinMentionsBuilder504Error1> onApiV1MiscLinkedinMentionsBuilder504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscLinkedinMentionsBuilder400Error1(
            out var apiV1MiscLinkedinMentionsBuilder400Error1Value)) onApiV1MiscLinkedinMentionsBuilder400Error1(
            apiV1MiscLinkedinMentionsBuilder400Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder401Error1(
            out var apiV1MiscLinkedinMentionsBuilder401Error1Value)) onApiV1MiscLinkedinMentionsBuilder401Error1(
            apiV1MiscLinkedinMentionsBuilder401Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder403Error1(
            out var apiV1MiscLinkedinMentionsBuilder403Error1Value)) onApiV1MiscLinkedinMentionsBuilder403Error1(
            apiV1MiscLinkedinMentionsBuilder403Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder404Error1(
            out var apiV1MiscLinkedinMentionsBuilder404Error1Value)) onApiV1MiscLinkedinMentionsBuilder404Error1(
            apiV1MiscLinkedinMentionsBuilder404Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder429Error1(
            out var apiV1MiscLinkedinMentionsBuilder429Error1Value)) onApiV1MiscLinkedinMentionsBuilder429Error1(
            apiV1MiscLinkedinMentionsBuilder429Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder500Error1(
            out var apiV1MiscLinkedinMentionsBuilder500Error1Value)) onApiV1MiscLinkedinMentionsBuilder500Error1(
            apiV1MiscLinkedinMentionsBuilder500Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder502Error1(
            out var apiV1MiscLinkedinMentionsBuilder502Error1Value)) onApiV1MiscLinkedinMentionsBuilder502Error1(
            apiV1MiscLinkedinMentionsBuilder502Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder503Error1(
            out var apiV1MiscLinkedinMentionsBuilder503Error1Value)) onApiV1MiscLinkedinMentionsBuilder503Error1(
            apiV1MiscLinkedinMentionsBuilder503Error1Value);
        else if (TryGetApiV1MiscLinkedinMentionsBuilder504Error1(
            out var apiV1MiscLinkedinMentionsBuilder504Error1Value)) onApiV1MiscLinkedinMentionsBuilder504Error1(
            apiV1MiscLinkedinMentionsBuilder504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscLinkedinBuildCommentaryError)} holds no value.");
    }

    private static Task<MiscLinkedinBuildCommentaryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscLinkedinMentionsBuilder400Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder400Error1),
            401 => response.Json<ApiV1MiscLinkedinMentionsBuilder401Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder401Error1),
            403 => response.Json<ApiV1MiscLinkedinMentionsBuilder403Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder403Error1),
            404 => response.Json<ApiV1MiscLinkedinMentionsBuilder404Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder404Error1),
            429 => response.Json<ApiV1MiscLinkedinMentionsBuilder429Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder429Error1),
            500 => response.Json<ApiV1MiscLinkedinMentionsBuilder500Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder500Error1),
            502 => response.Json<ApiV1MiscLinkedinMentionsBuilder502Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder502Error1),
            503 => response.Json<ApiV1MiscLinkedinMentionsBuilder503Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder503Error1),
            504 => response.Json<ApiV1MiscLinkedinMentionsBuilder504Error1>().As(
                AsApiV1MiscLinkedinMentionsBuilder504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscLinkedinBuildCommentaryError> Response { get; } = new(Create);
}
