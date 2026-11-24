using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscRedditDeletePostError : ApiError
{
    private readonly Optional<ApiV1MiscRedditPost400Error1> _apiV1MiscRedditPost400Error1Value;

    private readonly Optional<ApiV1MiscRedditPost401Error1> _apiV1MiscRedditPost401Error1Value;

    private readonly Optional<ApiV1MiscRedditPost403Error1> _apiV1MiscRedditPost403Error1Value;

    private readonly Optional<ApiV1MiscRedditPost404Error1> _apiV1MiscRedditPost404Error1Value;

    private readonly Optional<ApiV1MiscRedditPost429Error1> _apiV1MiscRedditPost429Error1Value;

    private readonly Optional<ApiV1MiscRedditPost500Error1> _apiV1MiscRedditPost500Error1Value;

    private readonly Optional<ApiV1MiscRedditPost502Error1> _apiV1MiscRedditPost502Error1Value;

    private readonly Optional<ApiV1MiscRedditPost503Error1> _apiV1MiscRedditPost503Error1Value;

    private readonly Optional<ApiV1MiscRedditPost504Error1> _apiV1MiscRedditPost504Error1Value;

    private MiscRedditDeletePostError(Optional<ApiV1MiscRedditPost400Error1> apiV1MiscRedditPost400Error1Value,
        Optional<ApiV1MiscRedditPost401Error1> apiV1MiscRedditPost401Error1Value,
        Optional<ApiV1MiscRedditPost403Error1> apiV1MiscRedditPost403Error1Value,
        Optional<ApiV1MiscRedditPost404Error1> apiV1MiscRedditPost404Error1Value,
        Optional<ApiV1MiscRedditPost429Error1> apiV1MiscRedditPost429Error1Value,
        Optional<ApiV1MiscRedditPost500Error1> apiV1MiscRedditPost500Error1Value,
        Optional<ApiV1MiscRedditPost502Error1> apiV1MiscRedditPost502Error1Value,
        Optional<ApiV1MiscRedditPost503Error1> apiV1MiscRedditPost503Error1Value,
        Optional<ApiV1MiscRedditPost504Error1> apiV1MiscRedditPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscRedditPost400Error1Value = apiV1MiscRedditPost400Error1Value;
        _apiV1MiscRedditPost401Error1Value = apiV1MiscRedditPost401Error1Value;
        _apiV1MiscRedditPost403Error1Value = apiV1MiscRedditPost403Error1Value;
        _apiV1MiscRedditPost404Error1Value = apiV1MiscRedditPost404Error1Value;
        _apiV1MiscRedditPost429Error1Value = apiV1MiscRedditPost429Error1Value;
        _apiV1MiscRedditPost500Error1Value = apiV1MiscRedditPost500Error1Value;
        _apiV1MiscRedditPost502Error1Value = apiV1MiscRedditPost502Error1Value;
        _apiV1MiscRedditPost503Error1Value = apiV1MiscRedditPost503Error1Value;
        _apiV1MiscRedditPost504Error1Value = apiV1MiscRedditPost504Error1Value;
    }

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost400Error1(ApiV1MiscRedditPost400Error1 value) =>
        new(
            Optional<ApiV1MiscRedditPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost401Error1(ApiV1MiscRedditPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscRedditPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost403Error1(ApiV1MiscRedditPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscRedditPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost404Error1(ApiV1MiscRedditPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost429Error1(ApiV1MiscRedditPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost500Error1(ApiV1MiscRedditPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost502Error1(ApiV1MiscRedditPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost503Error1(ApiV1MiscRedditPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost503Error1>.Some(value),
            default,
            default);

    private static MiscRedditDeletePostError AsApiV1MiscRedditPost504Error1(ApiV1MiscRedditPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPost504Error1>.Some(value),
            default);

    private static MiscRedditDeletePostError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscRedditPost400Error1([NotNullWhen(true)] out ApiV1MiscRedditPost400Error1? value) =>
        _apiV1MiscRedditPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost401Error1([NotNullWhen(true)] out ApiV1MiscRedditPost401Error1? value) =>
        _apiV1MiscRedditPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost403Error1([NotNullWhen(true)] out ApiV1MiscRedditPost403Error1? value) =>
        _apiV1MiscRedditPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost404Error1([NotNullWhen(true)] out ApiV1MiscRedditPost404Error1? value) =>
        _apiV1MiscRedditPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost429Error1([NotNullWhen(true)] out ApiV1MiscRedditPost429Error1? value) =>
        _apiV1MiscRedditPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost500Error1([NotNullWhen(true)] out ApiV1MiscRedditPost500Error1? value) =>
        _apiV1MiscRedditPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost502Error1([NotNullWhen(true)] out ApiV1MiscRedditPost502Error1? value) =>
        _apiV1MiscRedditPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost503Error1([NotNullWhen(true)] out ApiV1MiscRedditPost503Error1? value) =>
        _apiV1MiscRedditPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPost504Error1([NotNullWhen(true)] out ApiV1MiscRedditPost504Error1? value) =>
        _apiV1MiscRedditPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscRedditPost400Error1, TResult> onApiV1MiscRedditPost400Error1,
        Func<ApiV1MiscRedditPost401Error1, TResult> onApiV1MiscRedditPost401Error1,
        Func<ApiV1MiscRedditPost403Error1, TResult> onApiV1MiscRedditPost403Error1,
        Func<ApiV1MiscRedditPost404Error1, TResult> onApiV1MiscRedditPost404Error1,
        Func<ApiV1MiscRedditPost429Error1, TResult> onApiV1MiscRedditPost429Error1,
        Func<ApiV1MiscRedditPost500Error1, TResult> onApiV1MiscRedditPost500Error1,
        Func<ApiV1MiscRedditPost502Error1, TResult> onApiV1MiscRedditPost502Error1,
        Func<ApiV1MiscRedditPost503Error1, TResult> onApiV1MiscRedditPost503Error1,
        Func<ApiV1MiscRedditPost504Error1, TResult> onApiV1MiscRedditPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscRedditPost400Error1(
                out var apiV1MiscRedditPost400Error1Value) => onApiV1MiscRedditPost400Error1(
                apiV1MiscRedditPost400Error1Value),
            _ when TryGetApiV1MiscRedditPost401Error1(
                out var apiV1MiscRedditPost401Error1Value) => onApiV1MiscRedditPost401Error1(
                apiV1MiscRedditPost401Error1Value),
            _ when TryGetApiV1MiscRedditPost403Error1(
                out var apiV1MiscRedditPost403Error1Value) => onApiV1MiscRedditPost403Error1(
                apiV1MiscRedditPost403Error1Value),
            _ when TryGetApiV1MiscRedditPost404Error1(
                out var apiV1MiscRedditPost404Error1Value) => onApiV1MiscRedditPost404Error1(
                apiV1MiscRedditPost404Error1Value),
            _ when TryGetApiV1MiscRedditPost429Error1(
                out var apiV1MiscRedditPost429Error1Value) => onApiV1MiscRedditPost429Error1(
                apiV1MiscRedditPost429Error1Value),
            _ when TryGetApiV1MiscRedditPost500Error1(
                out var apiV1MiscRedditPost500Error1Value) => onApiV1MiscRedditPost500Error1(
                apiV1MiscRedditPost500Error1Value),
            _ when TryGetApiV1MiscRedditPost502Error1(
                out var apiV1MiscRedditPost502Error1Value) => onApiV1MiscRedditPost502Error1(
                apiV1MiscRedditPost502Error1Value),
            _ when TryGetApiV1MiscRedditPost503Error1(
                out var apiV1MiscRedditPost503Error1Value) => onApiV1MiscRedditPost503Error1(
                apiV1MiscRedditPost503Error1Value),
            _ when TryGetApiV1MiscRedditPost504Error1(
                out var apiV1MiscRedditPost504Error1Value) => onApiV1MiscRedditPost504Error1(
                apiV1MiscRedditPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscRedditDeletePostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscRedditPost400Error1> onApiV1MiscRedditPost400Error1,
        Action<ApiV1MiscRedditPost401Error1> onApiV1MiscRedditPost401Error1,
        Action<ApiV1MiscRedditPost403Error1> onApiV1MiscRedditPost403Error1,
        Action<ApiV1MiscRedditPost404Error1> onApiV1MiscRedditPost404Error1,
        Action<ApiV1MiscRedditPost429Error1> onApiV1MiscRedditPost429Error1,
        Action<ApiV1MiscRedditPost500Error1> onApiV1MiscRedditPost500Error1,
        Action<ApiV1MiscRedditPost502Error1> onApiV1MiscRedditPost502Error1,
        Action<ApiV1MiscRedditPost503Error1> onApiV1MiscRedditPost503Error1,
        Action<ApiV1MiscRedditPost504Error1> onApiV1MiscRedditPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscRedditPost400Error1(
            out var apiV1MiscRedditPost400Error1Value)) onApiV1MiscRedditPost400Error1(
            apiV1MiscRedditPost400Error1Value);
        else if (TryGetApiV1MiscRedditPost401Error1(
            out var apiV1MiscRedditPost401Error1Value)) onApiV1MiscRedditPost401Error1(
            apiV1MiscRedditPost401Error1Value);
        else if (TryGetApiV1MiscRedditPost403Error1(
            out var apiV1MiscRedditPost403Error1Value)) onApiV1MiscRedditPost403Error1(
            apiV1MiscRedditPost403Error1Value);
        else if (TryGetApiV1MiscRedditPost404Error1(
            out var apiV1MiscRedditPost404Error1Value)) onApiV1MiscRedditPost404Error1(
            apiV1MiscRedditPost404Error1Value);
        else if (TryGetApiV1MiscRedditPost429Error1(
            out var apiV1MiscRedditPost429Error1Value)) onApiV1MiscRedditPost429Error1(
            apiV1MiscRedditPost429Error1Value);
        else if (TryGetApiV1MiscRedditPost500Error1(
            out var apiV1MiscRedditPost500Error1Value)) onApiV1MiscRedditPost500Error1(
            apiV1MiscRedditPost500Error1Value);
        else if (TryGetApiV1MiscRedditPost502Error1(
            out var apiV1MiscRedditPost502Error1Value)) onApiV1MiscRedditPost502Error1(
            apiV1MiscRedditPost502Error1Value);
        else if (TryGetApiV1MiscRedditPost503Error1(
            out var apiV1MiscRedditPost503Error1Value)) onApiV1MiscRedditPost503Error1(
            apiV1MiscRedditPost503Error1Value);
        else if (TryGetApiV1MiscRedditPost504Error1(
            out var apiV1MiscRedditPost504Error1Value)) onApiV1MiscRedditPost504Error1(
            apiV1MiscRedditPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscRedditDeletePostError)} holds no value.");
    }

    private static Task<MiscRedditDeletePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscRedditPost400Error1>().As(AsApiV1MiscRedditPost400Error1),
            401 => response.Json<ApiV1MiscRedditPost401Error1>().As(AsApiV1MiscRedditPost401Error1),
            403 => response.Json<ApiV1MiscRedditPost403Error1>().As(AsApiV1MiscRedditPost403Error1),
            404 => response.Json<ApiV1MiscRedditPost404Error1>().As(AsApiV1MiscRedditPost404Error1),
            429 => response.Json<ApiV1MiscRedditPost429Error1>().As(AsApiV1MiscRedditPost429Error1),
            500 => response.Json<ApiV1MiscRedditPost500Error1>().As(AsApiV1MiscRedditPost500Error1),
            502 => response.Json<ApiV1MiscRedditPost502Error1>().As(AsApiV1MiscRedditPost502Error1),
            503 => response.Json<ApiV1MiscRedditPost503Error1>().As(AsApiV1MiscRedditPost503Error1),
            504 => response.Json<ApiV1MiscRedditPost504Error1>().As(AsApiV1MiscRedditPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscRedditDeletePostError> Response { get; } = new(Create);
}
