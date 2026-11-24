using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscLinkedinDeletePostError : ApiError
{
    private readonly Optional<ApiV1MiscLinkedinPost400Error1> _apiV1MiscLinkedinPost400Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost401Error1> _apiV1MiscLinkedinPost401Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost403Error1> _apiV1MiscLinkedinPost403Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost404Error1> _apiV1MiscLinkedinPost404Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost429Error1> _apiV1MiscLinkedinPost429Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost500Error1> _apiV1MiscLinkedinPost500Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost502Error1> _apiV1MiscLinkedinPost502Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost503Error1> _apiV1MiscLinkedinPost503Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPost504Error1> _apiV1MiscLinkedinPost504Error1Value;

    private MiscLinkedinDeletePostError(Optional<ApiV1MiscLinkedinPost400Error1> apiV1MiscLinkedinPost400Error1Value,
        Optional<ApiV1MiscLinkedinPost401Error1> apiV1MiscLinkedinPost401Error1Value,
        Optional<ApiV1MiscLinkedinPost403Error1> apiV1MiscLinkedinPost403Error1Value,
        Optional<ApiV1MiscLinkedinPost404Error1> apiV1MiscLinkedinPost404Error1Value,
        Optional<ApiV1MiscLinkedinPost429Error1> apiV1MiscLinkedinPost429Error1Value,
        Optional<ApiV1MiscLinkedinPost500Error1> apiV1MiscLinkedinPost500Error1Value,
        Optional<ApiV1MiscLinkedinPost502Error1> apiV1MiscLinkedinPost502Error1Value,
        Optional<ApiV1MiscLinkedinPost503Error1> apiV1MiscLinkedinPost503Error1Value,
        Optional<ApiV1MiscLinkedinPost504Error1> apiV1MiscLinkedinPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscLinkedinPost400Error1Value = apiV1MiscLinkedinPost400Error1Value;
        _apiV1MiscLinkedinPost401Error1Value = apiV1MiscLinkedinPost401Error1Value;
        _apiV1MiscLinkedinPost403Error1Value = apiV1MiscLinkedinPost403Error1Value;
        _apiV1MiscLinkedinPost404Error1Value = apiV1MiscLinkedinPost404Error1Value;
        _apiV1MiscLinkedinPost429Error1Value = apiV1MiscLinkedinPost429Error1Value;
        _apiV1MiscLinkedinPost500Error1Value = apiV1MiscLinkedinPost500Error1Value;
        _apiV1MiscLinkedinPost502Error1Value = apiV1MiscLinkedinPost502Error1Value;
        _apiV1MiscLinkedinPost503Error1Value = apiV1MiscLinkedinPost503Error1Value;
        _apiV1MiscLinkedinPost504Error1Value = apiV1MiscLinkedinPost504Error1Value;
    }

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost400Error1(ApiV1MiscLinkedinPost400Error1 value) =>
        new(
            Optional<ApiV1MiscLinkedinPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost401Error1(ApiV1MiscLinkedinPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscLinkedinPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost403Error1(ApiV1MiscLinkedinPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscLinkedinPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost404Error1(ApiV1MiscLinkedinPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost429Error1(ApiV1MiscLinkedinPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost500Error1(ApiV1MiscLinkedinPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost502Error1(ApiV1MiscLinkedinPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost503Error1(ApiV1MiscLinkedinPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost503Error1>.Some(value),
            default,
            default);

    private static MiscLinkedinDeletePostError AsApiV1MiscLinkedinPost504Error1(ApiV1MiscLinkedinPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPost504Error1>.Some(value),
            default);

    private static MiscLinkedinDeletePostError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscLinkedinPost400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost400Error1? value) =>
        _apiV1MiscLinkedinPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost401Error1? value) =>
        _apiV1MiscLinkedinPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost403Error1? value) =>
        _apiV1MiscLinkedinPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost404Error1? value) =>
        _apiV1MiscLinkedinPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost429Error1? value) =>
        _apiV1MiscLinkedinPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost500Error1? value) =>
        _apiV1MiscLinkedinPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost502Error1? value) =>
        _apiV1MiscLinkedinPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost503Error1? value) =>
        _apiV1MiscLinkedinPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPost504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost504Error1? value) =>
        _apiV1MiscLinkedinPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscLinkedinPost400Error1, TResult> onApiV1MiscLinkedinPost400Error1,
        Func<ApiV1MiscLinkedinPost401Error1, TResult> onApiV1MiscLinkedinPost401Error1,
        Func<ApiV1MiscLinkedinPost403Error1, TResult> onApiV1MiscLinkedinPost403Error1,
        Func<ApiV1MiscLinkedinPost404Error1, TResult> onApiV1MiscLinkedinPost404Error1,
        Func<ApiV1MiscLinkedinPost429Error1, TResult> onApiV1MiscLinkedinPost429Error1,
        Func<ApiV1MiscLinkedinPost500Error1, TResult> onApiV1MiscLinkedinPost500Error1,
        Func<ApiV1MiscLinkedinPost502Error1, TResult> onApiV1MiscLinkedinPost502Error1,
        Func<ApiV1MiscLinkedinPost503Error1, TResult> onApiV1MiscLinkedinPost503Error1,
        Func<ApiV1MiscLinkedinPost504Error1, TResult> onApiV1MiscLinkedinPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscLinkedinPost400Error1(
                out var apiV1MiscLinkedinPost400Error1Value) => onApiV1MiscLinkedinPost400Error1(
                apiV1MiscLinkedinPost400Error1Value),
            _ when TryGetApiV1MiscLinkedinPost401Error1(
                out var apiV1MiscLinkedinPost401Error1Value) => onApiV1MiscLinkedinPost401Error1(
                apiV1MiscLinkedinPost401Error1Value),
            _ when TryGetApiV1MiscLinkedinPost403Error1(
                out var apiV1MiscLinkedinPost403Error1Value) => onApiV1MiscLinkedinPost403Error1(
                apiV1MiscLinkedinPost403Error1Value),
            _ when TryGetApiV1MiscLinkedinPost404Error1(
                out var apiV1MiscLinkedinPost404Error1Value) => onApiV1MiscLinkedinPost404Error1(
                apiV1MiscLinkedinPost404Error1Value),
            _ when TryGetApiV1MiscLinkedinPost429Error1(
                out var apiV1MiscLinkedinPost429Error1Value) => onApiV1MiscLinkedinPost429Error1(
                apiV1MiscLinkedinPost429Error1Value),
            _ when TryGetApiV1MiscLinkedinPost500Error1(
                out var apiV1MiscLinkedinPost500Error1Value) => onApiV1MiscLinkedinPost500Error1(
                apiV1MiscLinkedinPost500Error1Value),
            _ when TryGetApiV1MiscLinkedinPost502Error1(
                out var apiV1MiscLinkedinPost502Error1Value) => onApiV1MiscLinkedinPost502Error1(
                apiV1MiscLinkedinPost502Error1Value),
            _ when TryGetApiV1MiscLinkedinPost503Error1(
                out var apiV1MiscLinkedinPost503Error1Value) => onApiV1MiscLinkedinPost503Error1(
                apiV1MiscLinkedinPost503Error1Value),
            _ when TryGetApiV1MiscLinkedinPost504Error1(
                out var apiV1MiscLinkedinPost504Error1Value) => onApiV1MiscLinkedinPost504Error1(
                apiV1MiscLinkedinPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscLinkedinDeletePostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscLinkedinPost400Error1> onApiV1MiscLinkedinPost400Error1,
        Action<ApiV1MiscLinkedinPost401Error1> onApiV1MiscLinkedinPost401Error1,
        Action<ApiV1MiscLinkedinPost403Error1> onApiV1MiscLinkedinPost403Error1,
        Action<ApiV1MiscLinkedinPost404Error1> onApiV1MiscLinkedinPost404Error1,
        Action<ApiV1MiscLinkedinPost429Error1> onApiV1MiscLinkedinPost429Error1,
        Action<ApiV1MiscLinkedinPost500Error1> onApiV1MiscLinkedinPost500Error1,
        Action<ApiV1MiscLinkedinPost502Error1> onApiV1MiscLinkedinPost502Error1,
        Action<ApiV1MiscLinkedinPost503Error1> onApiV1MiscLinkedinPost503Error1,
        Action<ApiV1MiscLinkedinPost504Error1> onApiV1MiscLinkedinPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscLinkedinPost400Error1(
            out var apiV1MiscLinkedinPost400Error1Value)) onApiV1MiscLinkedinPost400Error1(
            apiV1MiscLinkedinPost400Error1Value);
        else if (TryGetApiV1MiscLinkedinPost401Error1(
            out var apiV1MiscLinkedinPost401Error1Value)) onApiV1MiscLinkedinPost401Error1(
            apiV1MiscLinkedinPost401Error1Value);
        else if (TryGetApiV1MiscLinkedinPost403Error1(
            out var apiV1MiscLinkedinPost403Error1Value)) onApiV1MiscLinkedinPost403Error1(
            apiV1MiscLinkedinPost403Error1Value);
        else if (TryGetApiV1MiscLinkedinPost404Error1(
            out var apiV1MiscLinkedinPost404Error1Value)) onApiV1MiscLinkedinPost404Error1(
            apiV1MiscLinkedinPost404Error1Value);
        else if (TryGetApiV1MiscLinkedinPost429Error1(
            out var apiV1MiscLinkedinPost429Error1Value)) onApiV1MiscLinkedinPost429Error1(
            apiV1MiscLinkedinPost429Error1Value);
        else if (TryGetApiV1MiscLinkedinPost500Error1(
            out var apiV1MiscLinkedinPost500Error1Value)) onApiV1MiscLinkedinPost500Error1(
            apiV1MiscLinkedinPost500Error1Value);
        else if (TryGetApiV1MiscLinkedinPost502Error1(
            out var apiV1MiscLinkedinPost502Error1Value)) onApiV1MiscLinkedinPost502Error1(
            apiV1MiscLinkedinPost502Error1Value);
        else if (TryGetApiV1MiscLinkedinPost503Error1(
            out var apiV1MiscLinkedinPost503Error1Value)) onApiV1MiscLinkedinPost503Error1(
            apiV1MiscLinkedinPost503Error1Value);
        else if (TryGetApiV1MiscLinkedinPost504Error1(
            out var apiV1MiscLinkedinPost504Error1Value)) onApiV1MiscLinkedinPost504Error1(
            apiV1MiscLinkedinPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscLinkedinDeletePostError)} holds no value.");
    }

    private static Task<MiscLinkedinDeletePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscLinkedinPost400Error1>().As(AsApiV1MiscLinkedinPost400Error1),
            401 => response.Json<ApiV1MiscLinkedinPost401Error1>().As(AsApiV1MiscLinkedinPost401Error1),
            403 => response.Json<ApiV1MiscLinkedinPost403Error1>().As(AsApiV1MiscLinkedinPost403Error1),
            404 => response.Json<ApiV1MiscLinkedinPost404Error1>().As(AsApiV1MiscLinkedinPost404Error1),
            429 => response.Json<ApiV1MiscLinkedinPost429Error1>().As(AsApiV1MiscLinkedinPost429Error1),
            500 => response.Json<ApiV1MiscLinkedinPost500Error1>().As(AsApiV1MiscLinkedinPost500Error1),
            502 => response.Json<ApiV1MiscLinkedinPost502Error1>().As(AsApiV1MiscLinkedinPost502Error1),
            503 => response.Json<ApiV1MiscLinkedinPost503Error1>().As(AsApiV1MiscLinkedinPost503Error1),
            504 => response.Json<ApiV1MiscLinkedinPost504Error1>().As(AsApiV1MiscLinkedinPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscLinkedinDeletePostError> Response { get; } = new(Create);
}
