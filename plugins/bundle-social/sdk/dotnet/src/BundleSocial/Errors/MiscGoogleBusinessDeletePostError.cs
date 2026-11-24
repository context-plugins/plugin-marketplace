using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessDeletePostError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessPost400Error1> _apiV1MiscGoogleBusinessPost400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost401Error1> _apiV1MiscGoogleBusinessPost401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost403Error1> _apiV1MiscGoogleBusinessPost403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost404Error1> _apiV1MiscGoogleBusinessPost404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost429Error1> _apiV1MiscGoogleBusinessPost429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost500Error1> _apiV1MiscGoogleBusinessPost500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost502Error1> _apiV1MiscGoogleBusinessPost502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost503Error1> _apiV1MiscGoogleBusinessPost503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessPost504Error1> _apiV1MiscGoogleBusinessPost504Error1Value;

    private MiscGoogleBusinessDeletePostError(Optional<ApiV1MiscGoogleBusinessPost400Error1> apiV1MiscGoogleBusinessPost400Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost401Error1> apiV1MiscGoogleBusinessPost401Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost403Error1> apiV1MiscGoogleBusinessPost403Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost404Error1> apiV1MiscGoogleBusinessPost404Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost429Error1> apiV1MiscGoogleBusinessPost429Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost500Error1> apiV1MiscGoogleBusinessPost500Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost502Error1> apiV1MiscGoogleBusinessPost502Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost503Error1> apiV1MiscGoogleBusinessPost503Error1Value,
        Optional<ApiV1MiscGoogleBusinessPost504Error1> apiV1MiscGoogleBusinessPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessPost400Error1Value = apiV1MiscGoogleBusinessPost400Error1Value;
        _apiV1MiscGoogleBusinessPost401Error1Value = apiV1MiscGoogleBusinessPost401Error1Value;
        _apiV1MiscGoogleBusinessPost403Error1Value = apiV1MiscGoogleBusinessPost403Error1Value;
        _apiV1MiscGoogleBusinessPost404Error1Value = apiV1MiscGoogleBusinessPost404Error1Value;
        _apiV1MiscGoogleBusinessPost429Error1Value = apiV1MiscGoogleBusinessPost429Error1Value;
        _apiV1MiscGoogleBusinessPost500Error1Value = apiV1MiscGoogleBusinessPost500Error1Value;
        _apiV1MiscGoogleBusinessPost502Error1Value = apiV1MiscGoogleBusinessPost502Error1Value;
        _apiV1MiscGoogleBusinessPost503Error1Value = apiV1MiscGoogleBusinessPost503Error1Value;
        _apiV1MiscGoogleBusinessPost504Error1Value = apiV1MiscGoogleBusinessPost504Error1Value;
    }

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost400Error1(ApiV1MiscGoogleBusinessPost400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost401Error1(ApiV1MiscGoogleBusinessPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost403Error1(ApiV1MiscGoogleBusinessPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost404Error1(ApiV1MiscGoogleBusinessPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost429Error1(ApiV1MiscGoogleBusinessPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost500Error1(ApiV1MiscGoogleBusinessPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost502Error1(ApiV1MiscGoogleBusinessPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost503Error1(ApiV1MiscGoogleBusinessPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessDeletePostError AsApiV1MiscGoogleBusinessPost504Error1(ApiV1MiscGoogleBusinessPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessPost504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessDeletePostError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessPost400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost400Error1? value) =>
        _apiV1MiscGoogleBusinessPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost401Error1? value) =>
        _apiV1MiscGoogleBusinessPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost403Error1? value) =>
        _apiV1MiscGoogleBusinessPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost404Error1? value) =>
        _apiV1MiscGoogleBusinessPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost429Error1? value) =>
        _apiV1MiscGoogleBusinessPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost500Error1? value) =>
        _apiV1MiscGoogleBusinessPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost502Error1? value) =>
        _apiV1MiscGoogleBusinessPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost503Error1? value) =>
        _apiV1MiscGoogleBusinessPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessPost504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost504Error1? value) =>
        _apiV1MiscGoogleBusinessPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessPost400Error1, TResult> onApiV1MiscGoogleBusinessPost400Error1,
        Func<ApiV1MiscGoogleBusinessPost401Error1, TResult> onApiV1MiscGoogleBusinessPost401Error1,
        Func<ApiV1MiscGoogleBusinessPost403Error1, TResult> onApiV1MiscGoogleBusinessPost403Error1,
        Func<ApiV1MiscGoogleBusinessPost404Error1, TResult> onApiV1MiscGoogleBusinessPost404Error1,
        Func<ApiV1MiscGoogleBusinessPost429Error1, TResult> onApiV1MiscGoogleBusinessPost429Error1,
        Func<ApiV1MiscGoogleBusinessPost500Error1, TResult> onApiV1MiscGoogleBusinessPost500Error1,
        Func<ApiV1MiscGoogleBusinessPost502Error1, TResult> onApiV1MiscGoogleBusinessPost502Error1,
        Func<ApiV1MiscGoogleBusinessPost503Error1, TResult> onApiV1MiscGoogleBusinessPost503Error1,
        Func<ApiV1MiscGoogleBusinessPost504Error1, TResult> onApiV1MiscGoogleBusinessPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessPost400Error1(
                out var apiV1MiscGoogleBusinessPost400Error1Value) => onApiV1MiscGoogleBusinessPost400Error1(
                apiV1MiscGoogleBusinessPost400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost401Error1(
                out var apiV1MiscGoogleBusinessPost401Error1Value) => onApiV1MiscGoogleBusinessPost401Error1(
                apiV1MiscGoogleBusinessPost401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost403Error1(
                out var apiV1MiscGoogleBusinessPost403Error1Value) => onApiV1MiscGoogleBusinessPost403Error1(
                apiV1MiscGoogleBusinessPost403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost404Error1(
                out var apiV1MiscGoogleBusinessPost404Error1Value) => onApiV1MiscGoogleBusinessPost404Error1(
                apiV1MiscGoogleBusinessPost404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost429Error1(
                out var apiV1MiscGoogleBusinessPost429Error1Value) => onApiV1MiscGoogleBusinessPost429Error1(
                apiV1MiscGoogleBusinessPost429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost500Error1(
                out var apiV1MiscGoogleBusinessPost500Error1Value) => onApiV1MiscGoogleBusinessPost500Error1(
                apiV1MiscGoogleBusinessPost500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost502Error1(
                out var apiV1MiscGoogleBusinessPost502Error1Value) => onApiV1MiscGoogleBusinessPost502Error1(
                apiV1MiscGoogleBusinessPost502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost503Error1(
                out var apiV1MiscGoogleBusinessPost503Error1Value) => onApiV1MiscGoogleBusinessPost503Error1(
                apiV1MiscGoogleBusinessPost503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessPost504Error1(
                out var apiV1MiscGoogleBusinessPost504Error1Value) => onApiV1MiscGoogleBusinessPost504Error1(
                apiV1MiscGoogleBusinessPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessDeletePostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessPost400Error1> onApiV1MiscGoogleBusinessPost400Error1,
        Action<ApiV1MiscGoogleBusinessPost401Error1> onApiV1MiscGoogleBusinessPost401Error1,
        Action<ApiV1MiscGoogleBusinessPost403Error1> onApiV1MiscGoogleBusinessPost403Error1,
        Action<ApiV1MiscGoogleBusinessPost404Error1> onApiV1MiscGoogleBusinessPost404Error1,
        Action<ApiV1MiscGoogleBusinessPost429Error1> onApiV1MiscGoogleBusinessPost429Error1,
        Action<ApiV1MiscGoogleBusinessPost500Error1> onApiV1MiscGoogleBusinessPost500Error1,
        Action<ApiV1MiscGoogleBusinessPost502Error1> onApiV1MiscGoogleBusinessPost502Error1,
        Action<ApiV1MiscGoogleBusinessPost503Error1> onApiV1MiscGoogleBusinessPost503Error1,
        Action<ApiV1MiscGoogleBusinessPost504Error1> onApiV1MiscGoogleBusinessPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessPost400Error1(
            out var apiV1MiscGoogleBusinessPost400Error1Value)) onApiV1MiscGoogleBusinessPost400Error1(
            apiV1MiscGoogleBusinessPost400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost401Error1(
            out var apiV1MiscGoogleBusinessPost401Error1Value)) onApiV1MiscGoogleBusinessPost401Error1(
            apiV1MiscGoogleBusinessPost401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost403Error1(
            out var apiV1MiscGoogleBusinessPost403Error1Value)) onApiV1MiscGoogleBusinessPost403Error1(
            apiV1MiscGoogleBusinessPost403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost404Error1(
            out var apiV1MiscGoogleBusinessPost404Error1Value)) onApiV1MiscGoogleBusinessPost404Error1(
            apiV1MiscGoogleBusinessPost404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost429Error1(
            out var apiV1MiscGoogleBusinessPost429Error1Value)) onApiV1MiscGoogleBusinessPost429Error1(
            apiV1MiscGoogleBusinessPost429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost500Error1(
            out var apiV1MiscGoogleBusinessPost500Error1Value)) onApiV1MiscGoogleBusinessPost500Error1(
            apiV1MiscGoogleBusinessPost500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost502Error1(
            out var apiV1MiscGoogleBusinessPost502Error1Value)) onApiV1MiscGoogleBusinessPost502Error1(
            apiV1MiscGoogleBusinessPost502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost503Error1(
            out var apiV1MiscGoogleBusinessPost503Error1Value)) onApiV1MiscGoogleBusinessPost503Error1(
            apiV1MiscGoogleBusinessPost503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessPost504Error1(
            out var apiV1MiscGoogleBusinessPost504Error1Value)) onApiV1MiscGoogleBusinessPost504Error1(
            apiV1MiscGoogleBusinessPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessDeletePostError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessDeletePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessPost400Error1>().As(AsApiV1MiscGoogleBusinessPost400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessPost401Error1>().As(AsApiV1MiscGoogleBusinessPost401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessPost403Error1>().As(AsApiV1MiscGoogleBusinessPost403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessPost404Error1>().As(AsApiV1MiscGoogleBusinessPost404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessPost429Error1>().As(AsApiV1MiscGoogleBusinessPost429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessPost500Error1>().As(AsApiV1MiscGoogleBusinessPost500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessPost502Error1>().As(AsApiV1MiscGoogleBusinessPost502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessPost503Error1>().As(AsApiV1MiscGoogleBusinessPost503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessPost504Error1>().As(AsApiV1MiscGoogleBusinessPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessDeletePostError> Response { get; } = new(Create);
}
