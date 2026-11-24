using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookEditPostError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookPost400Error1> _apiV1MiscFacebookPost400Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost401Error1> _apiV1MiscFacebookPost401Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost403Error1> _apiV1MiscFacebookPost403Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost404Error1> _apiV1MiscFacebookPost404Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost429Error1> _apiV1MiscFacebookPost429Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost500Error1> _apiV1MiscFacebookPost500Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost502Error1> _apiV1MiscFacebookPost502Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost503Error1> _apiV1MiscFacebookPost503Error1Value;

    private readonly Optional<ApiV1MiscFacebookPost504Error1> _apiV1MiscFacebookPost504Error1Value;

    private MiscFacebookEditPostError(Optional<ApiV1MiscFacebookPost400Error1> apiV1MiscFacebookPost400Error1Value,
        Optional<ApiV1MiscFacebookPost401Error1> apiV1MiscFacebookPost401Error1Value,
        Optional<ApiV1MiscFacebookPost403Error1> apiV1MiscFacebookPost403Error1Value,
        Optional<ApiV1MiscFacebookPost404Error1> apiV1MiscFacebookPost404Error1Value,
        Optional<ApiV1MiscFacebookPost429Error1> apiV1MiscFacebookPost429Error1Value,
        Optional<ApiV1MiscFacebookPost500Error1> apiV1MiscFacebookPost500Error1Value,
        Optional<ApiV1MiscFacebookPost502Error1> apiV1MiscFacebookPost502Error1Value,
        Optional<ApiV1MiscFacebookPost503Error1> apiV1MiscFacebookPost503Error1Value,
        Optional<ApiV1MiscFacebookPost504Error1> apiV1MiscFacebookPost504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookPost400Error1Value = apiV1MiscFacebookPost400Error1Value;
        _apiV1MiscFacebookPost401Error1Value = apiV1MiscFacebookPost401Error1Value;
        _apiV1MiscFacebookPost403Error1Value = apiV1MiscFacebookPost403Error1Value;
        _apiV1MiscFacebookPost404Error1Value = apiV1MiscFacebookPost404Error1Value;
        _apiV1MiscFacebookPost429Error1Value = apiV1MiscFacebookPost429Error1Value;
        _apiV1MiscFacebookPost500Error1Value = apiV1MiscFacebookPost500Error1Value;
        _apiV1MiscFacebookPost502Error1Value = apiV1MiscFacebookPost502Error1Value;
        _apiV1MiscFacebookPost503Error1Value = apiV1MiscFacebookPost503Error1Value;
        _apiV1MiscFacebookPost504Error1Value = apiV1MiscFacebookPost504Error1Value;
    }

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost400Error1(ApiV1MiscFacebookPost400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookPost400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost401Error1(ApiV1MiscFacebookPost401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookPost401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost403Error1(ApiV1MiscFacebookPost403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookPost403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost404Error1(ApiV1MiscFacebookPost404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost429Error1(ApiV1MiscFacebookPost429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost500Error1(ApiV1MiscFacebookPost500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost502Error1(ApiV1MiscFacebookPost502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost503Error1(ApiV1MiscFacebookPost503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookEditPostError AsApiV1MiscFacebookPost504Error1(ApiV1MiscFacebookPost504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPost504Error1>.Some(value),
            default);

    private static MiscFacebookEditPostError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookPost400Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost400Error1? value) =>
        _apiV1MiscFacebookPost400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost401Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost401Error1? value) =>
        _apiV1MiscFacebookPost401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost403Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost403Error1? value) =>
        _apiV1MiscFacebookPost403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost404Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost404Error1? value) =>
        _apiV1MiscFacebookPost404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost429Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost429Error1? value) =>
        _apiV1MiscFacebookPost429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost500Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost500Error1? value) =>
        _apiV1MiscFacebookPost500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost502Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost502Error1? value) =>
        _apiV1MiscFacebookPost502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost503Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost503Error1? value) =>
        _apiV1MiscFacebookPost503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPost504Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost504Error1? value) =>
        _apiV1MiscFacebookPost504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookPost400Error1, TResult> onApiV1MiscFacebookPost400Error1,
        Func<ApiV1MiscFacebookPost401Error1, TResult> onApiV1MiscFacebookPost401Error1,
        Func<ApiV1MiscFacebookPost403Error1, TResult> onApiV1MiscFacebookPost403Error1,
        Func<ApiV1MiscFacebookPost404Error1, TResult> onApiV1MiscFacebookPost404Error1,
        Func<ApiV1MiscFacebookPost429Error1, TResult> onApiV1MiscFacebookPost429Error1,
        Func<ApiV1MiscFacebookPost500Error1, TResult> onApiV1MiscFacebookPost500Error1,
        Func<ApiV1MiscFacebookPost502Error1, TResult> onApiV1MiscFacebookPost502Error1,
        Func<ApiV1MiscFacebookPost503Error1, TResult> onApiV1MiscFacebookPost503Error1,
        Func<ApiV1MiscFacebookPost504Error1, TResult> onApiV1MiscFacebookPost504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookPost400Error1(
                out var apiV1MiscFacebookPost400Error1Value) => onApiV1MiscFacebookPost400Error1(
                apiV1MiscFacebookPost400Error1Value),
            _ when TryGetApiV1MiscFacebookPost401Error1(
                out var apiV1MiscFacebookPost401Error1Value) => onApiV1MiscFacebookPost401Error1(
                apiV1MiscFacebookPost401Error1Value),
            _ when TryGetApiV1MiscFacebookPost403Error1(
                out var apiV1MiscFacebookPost403Error1Value) => onApiV1MiscFacebookPost403Error1(
                apiV1MiscFacebookPost403Error1Value),
            _ when TryGetApiV1MiscFacebookPost404Error1(
                out var apiV1MiscFacebookPost404Error1Value) => onApiV1MiscFacebookPost404Error1(
                apiV1MiscFacebookPost404Error1Value),
            _ when TryGetApiV1MiscFacebookPost429Error1(
                out var apiV1MiscFacebookPost429Error1Value) => onApiV1MiscFacebookPost429Error1(
                apiV1MiscFacebookPost429Error1Value),
            _ when TryGetApiV1MiscFacebookPost500Error1(
                out var apiV1MiscFacebookPost500Error1Value) => onApiV1MiscFacebookPost500Error1(
                apiV1MiscFacebookPost500Error1Value),
            _ when TryGetApiV1MiscFacebookPost502Error1(
                out var apiV1MiscFacebookPost502Error1Value) => onApiV1MiscFacebookPost502Error1(
                apiV1MiscFacebookPost502Error1Value),
            _ when TryGetApiV1MiscFacebookPost503Error1(
                out var apiV1MiscFacebookPost503Error1Value) => onApiV1MiscFacebookPost503Error1(
                apiV1MiscFacebookPost503Error1Value),
            _ when TryGetApiV1MiscFacebookPost504Error1(
                out var apiV1MiscFacebookPost504Error1Value) => onApiV1MiscFacebookPost504Error1(
                apiV1MiscFacebookPost504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookEditPostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookPost400Error1> onApiV1MiscFacebookPost400Error1,
        Action<ApiV1MiscFacebookPost401Error1> onApiV1MiscFacebookPost401Error1,
        Action<ApiV1MiscFacebookPost403Error1> onApiV1MiscFacebookPost403Error1,
        Action<ApiV1MiscFacebookPost404Error1> onApiV1MiscFacebookPost404Error1,
        Action<ApiV1MiscFacebookPost429Error1> onApiV1MiscFacebookPost429Error1,
        Action<ApiV1MiscFacebookPost500Error1> onApiV1MiscFacebookPost500Error1,
        Action<ApiV1MiscFacebookPost502Error1> onApiV1MiscFacebookPost502Error1,
        Action<ApiV1MiscFacebookPost503Error1> onApiV1MiscFacebookPost503Error1,
        Action<ApiV1MiscFacebookPost504Error1> onApiV1MiscFacebookPost504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookPost400Error1(
            out var apiV1MiscFacebookPost400Error1Value)) onApiV1MiscFacebookPost400Error1(
            apiV1MiscFacebookPost400Error1Value);
        else if (TryGetApiV1MiscFacebookPost401Error1(
            out var apiV1MiscFacebookPost401Error1Value)) onApiV1MiscFacebookPost401Error1(
            apiV1MiscFacebookPost401Error1Value);
        else if (TryGetApiV1MiscFacebookPost403Error1(
            out var apiV1MiscFacebookPost403Error1Value)) onApiV1MiscFacebookPost403Error1(
            apiV1MiscFacebookPost403Error1Value);
        else if (TryGetApiV1MiscFacebookPost404Error1(
            out var apiV1MiscFacebookPost404Error1Value)) onApiV1MiscFacebookPost404Error1(
            apiV1MiscFacebookPost404Error1Value);
        else if (TryGetApiV1MiscFacebookPost429Error1(
            out var apiV1MiscFacebookPost429Error1Value)) onApiV1MiscFacebookPost429Error1(
            apiV1MiscFacebookPost429Error1Value);
        else if (TryGetApiV1MiscFacebookPost500Error1(
            out var apiV1MiscFacebookPost500Error1Value)) onApiV1MiscFacebookPost500Error1(
            apiV1MiscFacebookPost500Error1Value);
        else if (TryGetApiV1MiscFacebookPost502Error1(
            out var apiV1MiscFacebookPost502Error1Value)) onApiV1MiscFacebookPost502Error1(
            apiV1MiscFacebookPost502Error1Value);
        else if (TryGetApiV1MiscFacebookPost503Error1(
            out var apiV1MiscFacebookPost503Error1Value)) onApiV1MiscFacebookPost503Error1(
            apiV1MiscFacebookPost503Error1Value);
        else if (TryGetApiV1MiscFacebookPost504Error1(
            out var apiV1MiscFacebookPost504Error1Value)) onApiV1MiscFacebookPost504Error1(
            apiV1MiscFacebookPost504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookEditPostError)} holds no value.");
    }

    private static Task<MiscFacebookEditPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookPost400Error1>().As(AsApiV1MiscFacebookPost400Error1),
            401 => response.Json<ApiV1MiscFacebookPost401Error1>().As(AsApiV1MiscFacebookPost401Error1),
            403 => response.Json<ApiV1MiscFacebookPost403Error1>().As(AsApiV1MiscFacebookPost403Error1),
            404 => response.Json<ApiV1MiscFacebookPost404Error1>().As(AsApiV1MiscFacebookPost404Error1),
            429 => response.Json<ApiV1MiscFacebookPost429Error1>().As(AsApiV1MiscFacebookPost429Error1),
            500 => response.Json<ApiV1MiscFacebookPost500Error1>().As(AsApiV1MiscFacebookPost500Error1),
            502 => response.Json<ApiV1MiscFacebookPost502Error1>().As(AsApiV1MiscFacebookPost502Error1),
            503 => response.Json<ApiV1MiscFacebookPost503Error1>().As(AsApiV1MiscFacebookPost503Error1),
            504 => response.Json<ApiV1MiscFacebookPost504Error1>().As(AsApiV1MiscFacebookPost504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookEditPostError> Response { get; } = new(Create);
}
