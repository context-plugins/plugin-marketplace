using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscMastodonEditCommentError : ApiError
{
    private readonly Optional<ApiV1MiscMastodonComment400Error1> _apiV1MiscMastodonComment400Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment401Error1> _apiV1MiscMastodonComment401Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment403Error1> _apiV1MiscMastodonComment403Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment404Error1> _apiV1MiscMastodonComment404Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment429Error1> _apiV1MiscMastodonComment429Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment500Error1> _apiV1MiscMastodonComment500Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment502Error1> _apiV1MiscMastodonComment502Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment503Error1> _apiV1MiscMastodonComment503Error1Value;

    private readonly Optional<ApiV1MiscMastodonComment504Error1> _apiV1MiscMastodonComment504Error1Value;

    private MiscMastodonEditCommentError(Optional<ApiV1MiscMastodonComment400Error1> apiV1MiscMastodonComment400Error1Value,
        Optional<ApiV1MiscMastodonComment401Error1> apiV1MiscMastodonComment401Error1Value,
        Optional<ApiV1MiscMastodonComment403Error1> apiV1MiscMastodonComment403Error1Value,
        Optional<ApiV1MiscMastodonComment404Error1> apiV1MiscMastodonComment404Error1Value,
        Optional<ApiV1MiscMastodonComment429Error1> apiV1MiscMastodonComment429Error1Value,
        Optional<ApiV1MiscMastodonComment500Error1> apiV1MiscMastodonComment500Error1Value,
        Optional<ApiV1MiscMastodonComment502Error1> apiV1MiscMastodonComment502Error1Value,
        Optional<ApiV1MiscMastodonComment503Error1> apiV1MiscMastodonComment503Error1Value,
        Optional<ApiV1MiscMastodonComment504Error1> apiV1MiscMastodonComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscMastodonComment400Error1Value = apiV1MiscMastodonComment400Error1Value;
        _apiV1MiscMastodonComment401Error1Value = apiV1MiscMastodonComment401Error1Value;
        _apiV1MiscMastodonComment403Error1Value = apiV1MiscMastodonComment403Error1Value;
        _apiV1MiscMastodonComment404Error1Value = apiV1MiscMastodonComment404Error1Value;
        _apiV1MiscMastodonComment429Error1Value = apiV1MiscMastodonComment429Error1Value;
        _apiV1MiscMastodonComment500Error1Value = apiV1MiscMastodonComment500Error1Value;
        _apiV1MiscMastodonComment502Error1Value = apiV1MiscMastodonComment502Error1Value;
        _apiV1MiscMastodonComment503Error1Value = apiV1MiscMastodonComment503Error1Value;
        _apiV1MiscMastodonComment504Error1Value = apiV1MiscMastodonComment504Error1Value;
    }

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment400Error1(ApiV1MiscMastodonComment400Error1 value) =>
        new(
            Optional<ApiV1MiscMastodonComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment401Error1(ApiV1MiscMastodonComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscMastodonComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment403Error1(ApiV1MiscMastodonComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscMastodonComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment404Error1(ApiV1MiscMastodonComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment429Error1(ApiV1MiscMastodonComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment500Error1(ApiV1MiscMastodonComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment502Error1(ApiV1MiscMastodonComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment503Error1(ApiV1MiscMastodonComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment503Error1>.Some(value),
            default,
            default);

    private static MiscMastodonEditCommentError AsApiV1MiscMastodonComment504Error1(ApiV1MiscMastodonComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonComment504Error1>.Some(value),
            default);

    private static MiscMastodonEditCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscMastodonComment400Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment400Error1? value) =>
        _apiV1MiscMastodonComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment401Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment401Error1? value) =>
        _apiV1MiscMastodonComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment403Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment403Error1? value) =>
        _apiV1MiscMastodonComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment404Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment404Error1? value) =>
        _apiV1MiscMastodonComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment429Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment429Error1? value) =>
        _apiV1MiscMastodonComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment500Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment500Error1? value) =>
        _apiV1MiscMastodonComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment502Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment502Error1? value) =>
        _apiV1MiscMastodonComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment503Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment503Error1? value) =>
        _apiV1MiscMastodonComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonComment504Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment504Error1? value) =>
        _apiV1MiscMastodonComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscMastodonComment400Error1, TResult> onApiV1MiscMastodonComment400Error1,
        Func<ApiV1MiscMastodonComment401Error1, TResult> onApiV1MiscMastodonComment401Error1,
        Func<ApiV1MiscMastodonComment403Error1, TResult> onApiV1MiscMastodonComment403Error1,
        Func<ApiV1MiscMastodonComment404Error1, TResult> onApiV1MiscMastodonComment404Error1,
        Func<ApiV1MiscMastodonComment429Error1, TResult> onApiV1MiscMastodonComment429Error1,
        Func<ApiV1MiscMastodonComment500Error1, TResult> onApiV1MiscMastodonComment500Error1,
        Func<ApiV1MiscMastodonComment502Error1, TResult> onApiV1MiscMastodonComment502Error1,
        Func<ApiV1MiscMastodonComment503Error1, TResult> onApiV1MiscMastodonComment503Error1,
        Func<ApiV1MiscMastodonComment504Error1, TResult> onApiV1MiscMastodonComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscMastodonComment400Error1(
                out var apiV1MiscMastodonComment400Error1Value) => onApiV1MiscMastodonComment400Error1(
                apiV1MiscMastodonComment400Error1Value),
            _ when TryGetApiV1MiscMastodonComment401Error1(
                out var apiV1MiscMastodonComment401Error1Value) => onApiV1MiscMastodonComment401Error1(
                apiV1MiscMastodonComment401Error1Value),
            _ when TryGetApiV1MiscMastodonComment403Error1(
                out var apiV1MiscMastodonComment403Error1Value) => onApiV1MiscMastodonComment403Error1(
                apiV1MiscMastodonComment403Error1Value),
            _ when TryGetApiV1MiscMastodonComment404Error1(
                out var apiV1MiscMastodonComment404Error1Value) => onApiV1MiscMastodonComment404Error1(
                apiV1MiscMastodonComment404Error1Value),
            _ when TryGetApiV1MiscMastodonComment429Error1(
                out var apiV1MiscMastodonComment429Error1Value) => onApiV1MiscMastodonComment429Error1(
                apiV1MiscMastodonComment429Error1Value),
            _ when TryGetApiV1MiscMastodonComment500Error1(
                out var apiV1MiscMastodonComment500Error1Value) => onApiV1MiscMastodonComment500Error1(
                apiV1MiscMastodonComment500Error1Value),
            _ when TryGetApiV1MiscMastodonComment502Error1(
                out var apiV1MiscMastodonComment502Error1Value) => onApiV1MiscMastodonComment502Error1(
                apiV1MiscMastodonComment502Error1Value),
            _ when TryGetApiV1MiscMastodonComment503Error1(
                out var apiV1MiscMastodonComment503Error1Value) => onApiV1MiscMastodonComment503Error1(
                apiV1MiscMastodonComment503Error1Value),
            _ when TryGetApiV1MiscMastodonComment504Error1(
                out var apiV1MiscMastodonComment504Error1Value) => onApiV1MiscMastodonComment504Error1(
                apiV1MiscMastodonComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscMastodonEditCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscMastodonComment400Error1> onApiV1MiscMastodonComment400Error1,
        Action<ApiV1MiscMastodonComment401Error1> onApiV1MiscMastodonComment401Error1,
        Action<ApiV1MiscMastodonComment403Error1> onApiV1MiscMastodonComment403Error1,
        Action<ApiV1MiscMastodonComment404Error1> onApiV1MiscMastodonComment404Error1,
        Action<ApiV1MiscMastodonComment429Error1> onApiV1MiscMastodonComment429Error1,
        Action<ApiV1MiscMastodonComment500Error1> onApiV1MiscMastodonComment500Error1,
        Action<ApiV1MiscMastodonComment502Error1> onApiV1MiscMastodonComment502Error1,
        Action<ApiV1MiscMastodonComment503Error1> onApiV1MiscMastodonComment503Error1,
        Action<ApiV1MiscMastodonComment504Error1> onApiV1MiscMastodonComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscMastodonComment400Error1(
            out var apiV1MiscMastodonComment400Error1Value)) onApiV1MiscMastodonComment400Error1(
            apiV1MiscMastodonComment400Error1Value);
        else if (TryGetApiV1MiscMastodonComment401Error1(
            out var apiV1MiscMastodonComment401Error1Value)) onApiV1MiscMastodonComment401Error1(
            apiV1MiscMastodonComment401Error1Value);
        else if (TryGetApiV1MiscMastodonComment403Error1(
            out var apiV1MiscMastodonComment403Error1Value)) onApiV1MiscMastodonComment403Error1(
            apiV1MiscMastodonComment403Error1Value);
        else if (TryGetApiV1MiscMastodonComment404Error1(
            out var apiV1MiscMastodonComment404Error1Value)) onApiV1MiscMastodonComment404Error1(
            apiV1MiscMastodonComment404Error1Value);
        else if (TryGetApiV1MiscMastodonComment429Error1(
            out var apiV1MiscMastodonComment429Error1Value)) onApiV1MiscMastodonComment429Error1(
            apiV1MiscMastodonComment429Error1Value);
        else if (TryGetApiV1MiscMastodonComment500Error1(
            out var apiV1MiscMastodonComment500Error1Value)) onApiV1MiscMastodonComment500Error1(
            apiV1MiscMastodonComment500Error1Value);
        else if (TryGetApiV1MiscMastodonComment502Error1(
            out var apiV1MiscMastodonComment502Error1Value)) onApiV1MiscMastodonComment502Error1(
            apiV1MiscMastodonComment502Error1Value);
        else if (TryGetApiV1MiscMastodonComment503Error1(
            out var apiV1MiscMastodonComment503Error1Value)) onApiV1MiscMastodonComment503Error1(
            apiV1MiscMastodonComment503Error1Value);
        else if (TryGetApiV1MiscMastodonComment504Error1(
            out var apiV1MiscMastodonComment504Error1Value)) onApiV1MiscMastodonComment504Error1(
            apiV1MiscMastodonComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscMastodonEditCommentError)} holds no value.");
    }

    private static Task<MiscMastodonEditCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscMastodonComment400Error1>().As(AsApiV1MiscMastodonComment400Error1),
            401 => response.Json<ApiV1MiscMastodonComment401Error1>().As(AsApiV1MiscMastodonComment401Error1),
            403 => response.Json<ApiV1MiscMastodonComment403Error1>().As(AsApiV1MiscMastodonComment403Error1),
            404 => response.Json<ApiV1MiscMastodonComment404Error1>().As(AsApiV1MiscMastodonComment404Error1),
            429 => response.Json<ApiV1MiscMastodonComment429Error1>().As(AsApiV1MiscMastodonComment429Error1),
            500 => response.Json<ApiV1MiscMastodonComment500Error1>().As(AsApiV1MiscMastodonComment500Error1),
            502 => response.Json<ApiV1MiscMastodonComment502Error1>().As(AsApiV1MiscMastodonComment502Error1),
            503 => response.Json<ApiV1MiscMastodonComment503Error1>().As(AsApiV1MiscMastodonComment503Error1),
            504 => response.Json<ApiV1MiscMastodonComment504Error1>().As(AsApiV1MiscMastodonComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscMastodonEditCommentError> Response { get; } = new(Create);
}
