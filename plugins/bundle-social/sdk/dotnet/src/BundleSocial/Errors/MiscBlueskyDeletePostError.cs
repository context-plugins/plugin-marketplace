using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscBlueskyDeletePostError : ApiError
{
    private readonly Optional<ApiV1MiscBlueskyPost400Error1> _apiV1MiscBlueskyPost400Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost401Error1> _apiV1MiscBlueskyPost401Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost403Error1> _apiV1MiscBlueskyPost403Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost404Error1> _apiV1MiscBlueskyPost404Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost429Error1> _apiV1MiscBlueskyPost429Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost500Error1> _apiV1MiscBlueskyPost500Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost502Error1> _apiV1MiscBlueskyPost502Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost503Error1> _apiV1MiscBlueskyPost503Error1Value;

    private readonly Optional<ApiV1MiscBlueskyPost504Error1> _apiV1MiscBlueskyPost504Error1Value;

    private MiscBlueskyDeletePostError(Optional<ApiV1MiscBlueskyPost400Error1> apiV1MiscBlueskyPost400Error1Value,
        Optional<ApiV1MiscBlueskyPost401Error1> apiV1MiscBlueskyPost401Error1Value,
        Optional<ApiV1MiscBlueskyPost403Error1> apiV1MiscBlueskyPost403Error1Value,
        Optional<ApiV1MiscBlueskyPost404Error1> apiV1MiscBlueskyPost404Error1Value,
        Optional<ApiV1MiscBlueskyPost429Error1> apiV1MiscBlueskyPost429Error1Value,
        Optional<ApiV1MiscBlueskyPost500Error1> apiV1MiscBlueskyPost500Error1Value,
        Optional<ApiV1MiscBlueskyPost502Error1> apiV1MiscBlueskyPost502Error1Value,
        Optional<ApiV1MiscBlueskyPost503Error1> apiV1MiscBlueskyPost503Error1Value,
        Optional<ApiV1MiscBlueskyPost504Error1> apiV1MiscBlueskyPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscBlueskyPost400Error1Value = apiV1MiscBlueskyPost400Error1Value;
        _apiV1MiscBlueskyPost401Error1Value = apiV1MiscBlueskyPost401Error1Value;
        _apiV1MiscBlueskyPost403Error1Value = apiV1MiscBlueskyPost403Error1Value;
        _apiV1MiscBlueskyPost404Error1Value = apiV1MiscBlueskyPost404Error1Value;
        _apiV1MiscBlueskyPost429Error1Value = apiV1MiscBlueskyPost429Error1Value;
        _apiV1MiscBlueskyPost500Error1Value = apiV1MiscBlueskyPost500Error1Value;
        _apiV1MiscBlueskyPost502Error1Value = apiV1MiscBlueskyPost502Error1Value;
        _apiV1MiscBlueskyPost503Error1Value = apiV1MiscBlueskyPost503Error1Value;
        _apiV1MiscBlueskyPost504Error1Value = apiV1MiscBlueskyPost504Error1Value;
    }

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost400Error1(ApiV1MiscBlueskyPost400Error1 value) =>
        new(
            Optional<ApiV1MiscBlueskyPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost401Error1(ApiV1MiscBlueskyPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscBlueskyPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost403Error1(ApiV1MiscBlueskyPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscBlueskyPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost404Error1(ApiV1MiscBlueskyPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost429Error1(ApiV1MiscBlueskyPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost500Error1(ApiV1MiscBlueskyPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost502Error1(ApiV1MiscBlueskyPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost503Error1(ApiV1MiscBlueskyPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost503Error1>.Some(value),
            default,
            default);

    private static MiscBlueskyDeletePostError AsApiV1MiscBlueskyPost504Error1(ApiV1MiscBlueskyPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyPost504Error1>.Some(value),
            default);

    private static MiscBlueskyDeletePostError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscBlueskyPost400Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost400Error1? value) =>
        _apiV1MiscBlueskyPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost401Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost401Error1? value) =>
        _apiV1MiscBlueskyPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost403Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost403Error1? value) =>
        _apiV1MiscBlueskyPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost404Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost404Error1? value) =>
        _apiV1MiscBlueskyPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost429Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost429Error1? value) =>
        _apiV1MiscBlueskyPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost500Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost500Error1? value) =>
        _apiV1MiscBlueskyPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost502Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost502Error1? value) =>
        _apiV1MiscBlueskyPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost503Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost503Error1? value) =>
        _apiV1MiscBlueskyPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyPost504Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost504Error1? value) =>
        _apiV1MiscBlueskyPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscBlueskyPost400Error1, TResult> onApiV1MiscBlueskyPost400Error1,
        Func<ApiV1MiscBlueskyPost401Error1, TResult> onApiV1MiscBlueskyPost401Error1,
        Func<ApiV1MiscBlueskyPost403Error1, TResult> onApiV1MiscBlueskyPost403Error1,
        Func<ApiV1MiscBlueskyPost404Error1, TResult> onApiV1MiscBlueskyPost404Error1,
        Func<ApiV1MiscBlueskyPost429Error1, TResult> onApiV1MiscBlueskyPost429Error1,
        Func<ApiV1MiscBlueskyPost500Error1, TResult> onApiV1MiscBlueskyPost500Error1,
        Func<ApiV1MiscBlueskyPost502Error1, TResult> onApiV1MiscBlueskyPost502Error1,
        Func<ApiV1MiscBlueskyPost503Error1, TResult> onApiV1MiscBlueskyPost503Error1,
        Func<ApiV1MiscBlueskyPost504Error1, TResult> onApiV1MiscBlueskyPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscBlueskyPost400Error1(
                out var apiV1MiscBlueskyPost400Error1Value) => onApiV1MiscBlueskyPost400Error1(
                apiV1MiscBlueskyPost400Error1Value),
            _ when TryGetApiV1MiscBlueskyPost401Error1(
                out var apiV1MiscBlueskyPost401Error1Value) => onApiV1MiscBlueskyPost401Error1(
                apiV1MiscBlueskyPost401Error1Value),
            _ when TryGetApiV1MiscBlueskyPost403Error1(
                out var apiV1MiscBlueskyPost403Error1Value) => onApiV1MiscBlueskyPost403Error1(
                apiV1MiscBlueskyPost403Error1Value),
            _ when TryGetApiV1MiscBlueskyPost404Error1(
                out var apiV1MiscBlueskyPost404Error1Value) => onApiV1MiscBlueskyPost404Error1(
                apiV1MiscBlueskyPost404Error1Value),
            _ when TryGetApiV1MiscBlueskyPost429Error1(
                out var apiV1MiscBlueskyPost429Error1Value) => onApiV1MiscBlueskyPost429Error1(
                apiV1MiscBlueskyPost429Error1Value),
            _ when TryGetApiV1MiscBlueskyPost500Error1(
                out var apiV1MiscBlueskyPost500Error1Value) => onApiV1MiscBlueskyPost500Error1(
                apiV1MiscBlueskyPost500Error1Value),
            _ when TryGetApiV1MiscBlueskyPost502Error1(
                out var apiV1MiscBlueskyPost502Error1Value) => onApiV1MiscBlueskyPost502Error1(
                apiV1MiscBlueskyPost502Error1Value),
            _ when TryGetApiV1MiscBlueskyPost503Error1(
                out var apiV1MiscBlueskyPost503Error1Value) => onApiV1MiscBlueskyPost503Error1(
                apiV1MiscBlueskyPost503Error1Value),
            _ when TryGetApiV1MiscBlueskyPost504Error1(
                out var apiV1MiscBlueskyPost504Error1Value) => onApiV1MiscBlueskyPost504Error1(
                apiV1MiscBlueskyPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscBlueskyDeletePostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscBlueskyPost400Error1> onApiV1MiscBlueskyPost400Error1,
        Action<ApiV1MiscBlueskyPost401Error1> onApiV1MiscBlueskyPost401Error1,
        Action<ApiV1MiscBlueskyPost403Error1> onApiV1MiscBlueskyPost403Error1,
        Action<ApiV1MiscBlueskyPost404Error1> onApiV1MiscBlueskyPost404Error1,
        Action<ApiV1MiscBlueskyPost429Error1> onApiV1MiscBlueskyPost429Error1,
        Action<ApiV1MiscBlueskyPost500Error1> onApiV1MiscBlueskyPost500Error1,
        Action<ApiV1MiscBlueskyPost502Error1> onApiV1MiscBlueskyPost502Error1,
        Action<ApiV1MiscBlueskyPost503Error1> onApiV1MiscBlueskyPost503Error1,
        Action<ApiV1MiscBlueskyPost504Error1> onApiV1MiscBlueskyPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscBlueskyPost400Error1(
            out var apiV1MiscBlueskyPost400Error1Value)) onApiV1MiscBlueskyPost400Error1(
            apiV1MiscBlueskyPost400Error1Value);
        else if (TryGetApiV1MiscBlueskyPost401Error1(
            out var apiV1MiscBlueskyPost401Error1Value)) onApiV1MiscBlueskyPost401Error1(
            apiV1MiscBlueskyPost401Error1Value);
        else if (TryGetApiV1MiscBlueskyPost403Error1(
            out var apiV1MiscBlueskyPost403Error1Value)) onApiV1MiscBlueskyPost403Error1(
            apiV1MiscBlueskyPost403Error1Value);
        else if (TryGetApiV1MiscBlueskyPost404Error1(
            out var apiV1MiscBlueskyPost404Error1Value)) onApiV1MiscBlueskyPost404Error1(
            apiV1MiscBlueskyPost404Error1Value);
        else if (TryGetApiV1MiscBlueskyPost429Error1(
            out var apiV1MiscBlueskyPost429Error1Value)) onApiV1MiscBlueskyPost429Error1(
            apiV1MiscBlueskyPost429Error1Value);
        else if (TryGetApiV1MiscBlueskyPost500Error1(
            out var apiV1MiscBlueskyPost500Error1Value)) onApiV1MiscBlueskyPost500Error1(
            apiV1MiscBlueskyPost500Error1Value);
        else if (TryGetApiV1MiscBlueskyPost502Error1(
            out var apiV1MiscBlueskyPost502Error1Value)) onApiV1MiscBlueskyPost502Error1(
            apiV1MiscBlueskyPost502Error1Value);
        else if (TryGetApiV1MiscBlueskyPost503Error1(
            out var apiV1MiscBlueskyPost503Error1Value)) onApiV1MiscBlueskyPost503Error1(
            apiV1MiscBlueskyPost503Error1Value);
        else if (TryGetApiV1MiscBlueskyPost504Error1(
            out var apiV1MiscBlueskyPost504Error1Value)) onApiV1MiscBlueskyPost504Error1(
            apiV1MiscBlueskyPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscBlueskyDeletePostError)} holds no value.");
    }

    private static Task<MiscBlueskyDeletePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscBlueskyPost400Error1>().As(AsApiV1MiscBlueskyPost400Error1),
            401 => response.Json<ApiV1MiscBlueskyPost401Error1>().As(AsApiV1MiscBlueskyPost401Error1),
            403 => response.Json<ApiV1MiscBlueskyPost403Error1>().As(AsApiV1MiscBlueskyPost403Error1),
            404 => response.Json<ApiV1MiscBlueskyPost404Error1>().As(AsApiV1MiscBlueskyPost404Error1),
            429 => response.Json<ApiV1MiscBlueskyPost429Error1>().As(AsApiV1MiscBlueskyPost429Error1),
            500 => response.Json<ApiV1MiscBlueskyPost500Error1>().As(AsApiV1MiscBlueskyPost500Error1),
            502 => response.Json<ApiV1MiscBlueskyPost502Error1>().As(AsApiV1MiscBlueskyPost502Error1),
            503 => response.Json<ApiV1MiscBlueskyPost503Error1>().As(AsApiV1MiscBlueskyPost503Error1),
            504 => response.Json<ApiV1MiscBlueskyPost504Error1>().As(AsApiV1MiscBlueskyPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscBlueskyDeletePostError> Response { get; } = new(Create);
}
