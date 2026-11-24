using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscRedditEditCommentError : ApiError
{
    private readonly Optional<ApiV1MiscRedditComment400Error1> _apiV1MiscRedditComment400Error1Value;

    private readonly Optional<ApiV1MiscRedditComment401Error1> _apiV1MiscRedditComment401Error1Value;

    private readonly Optional<ApiV1MiscRedditComment403Error1> _apiV1MiscRedditComment403Error1Value;

    private readonly Optional<ApiV1MiscRedditComment404Error1> _apiV1MiscRedditComment404Error1Value;

    private readonly Optional<ApiV1MiscRedditComment429Error1> _apiV1MiscRedditComment429Error1Value;

    private readonly Optional<ApiV1MiscRedditComment500Error1> _apiV1MiscRedditComment500Error1Value;

    private readonly Optional<ApiV1MiscRedditComment502Error1> _apiV1MiscRedditComment502Error1Value;

    private readonly Optional<ApiV1MiscRedditComment503Error1> _apiV1MiscRedditComment503Error1Value;

    private readonly Optional<ApiV1MiscRedditComment504Error1> _apiV1MiscRedditComment504Error1Value;

    private MiscRedditEditCommentError(Optional<ApiV1MiscRedditComment400Error1> apiV1MiscRedditComment400Error1Value,
        Optional<ApiV1MiscRedditComment401Error1> apiV1MiscRedditComment401Error1Value,
        Optional<ApiV1MiscRedditComment403Error1> apiV1MiscRedditComment403Error1Value,
        Optional<ApiV1MiscRedditComment404Error1> apiV1MiscRedditComment404Error1Value,
        Optional<ApiV1MiscRedditComment429Error1> apiV1MiscRedditComment429Error1Value,
        Optional<ApiV1MiscRedditComment500Error1> apiV1MiscRedditComment500Error1Value,
        Optional<ApiV1MiscRedditComment502Error1> apiV1MiscRedditComment502Error1Value,
        Optional<ApiV1MiscRedditComment503Error1> apiV1MiscRedditComment503Error1Value,
        Optional<ApiV1MiscRedditComment504Error1> apiV1MiscRedditComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscRedditComment400Error1Value = apiV1MiscRedditComment400Error1Value;
        _apiV1MiscRedditComment401Error1Value = apiV1MiscRedditComment401Error1Value;
        _apiV1MiscRedditComment403Error1Value = apiV1MiscRedditComment403Error1Value;
        _apiV1MiscRedditComment404Error1Value = apiV1MiscRedditComment404Error1Value;
        _apiV1MiscRedditComment429Error1Value = apiV1MiscRedditComment429Error1Value;
        _apiV1MiscRedditComment500Error1Value = apiV1MiscRedditComment500Error1Value;
        _apiV1MiscRedditComment502Error1Value = apiV1MiscRedditComment502Error1Value;
        _apiV1MiscRedditComment503Error1Value = apiV1MiscRedditComment503Error1Value;
        _apiV1MiscRedditComment504Error1Value = apiV1MiscRedditComment504Error1Value;
    }

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment400Error1(ApiV1MiscRedditComment400Error1 value) =>
        new(
            Optional<ApiV1MiscRedditComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment401Error1(ApiV1MiscRedditComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscRedditComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment403Error1(ApiV1MiscRedditComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscRedditComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment404Error1(ApiV1MiscRedditComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment429Error1(ApiV1MiscRedditComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment500Error1(ApiV1MiscRedditComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment502Error1(ApiV1MiscRedditComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment503Error1(ApiV1MiscRedditComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment503Error1>.Some(value),
            default,
            default);

    private static MiscRedditEditCommentError AsApiV1MiscRedditComment504Error1(ApiV1MiscRedditComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditComment504Error1>.Some(value),
            default);

    private static MiscRedditEditCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscRedditComment400Error1([NotNullWhen(true)] out ApiV1MiscRedditComment400Error1? value) =>
        _apiV1MiscRedditComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment401Error1([NotNullWhen(true)] out ApiV1MiscRedditComment401Error1? value) =>
        _apiV1MiscRedditComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment403Error1([NotNullWhen(true)] out ApiV1MiscRedditComment403Error1? value) =>
        _apiV1MiscRedditComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment404Error1([NotNullWhen(true)] out ApiV1MiscRedditComment404Error1? value) =>
        _apiV1MiscRedditComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment429Error1([NotNullWhen(true)] out ApiV1MiscRedditComment429Error1? value) =>
        _apiV1MiscRedditComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment500Error1([NotNullWhen(true)] out ApiV1MiscRedditComment500Error1? value) =>
        _apiV1MiscRedditComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment502Error1([NotNullWhen(true)] out ApiV1MiscRedditComment502Error1? value) =>
        _apiV1MiscRedditComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment503Error1([NotNullWhen(true)] out ApiV1MiscRedditComment503Error1? value) =>
        _apiV1MiscRedditComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditComment504Error1([NotNullWhen(true)] out ApiV1MiscRedditComment504Error1? value) =>
        _apiV1MiscRedditComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscRedditComment400Error1, TResult> onApiV1MiscRedditComment400Error1,
        Func<ApiV1MiscRedditComment401Error1, TResult> onApiV1MiscRedditComment401Error1,
        Func<ApiV1MiscRedditComment403Error1, TResult> onApiV1MiscRedditComment403Error1,
        Func<ApiV1MiscRedditComment404Error1, TResult> onApiV1MiscRedditComment404Error1,
        Func<ApiV1MiscRedditComment429Error1, TResult> onApiV1MiscRedditComment429Error1,
        Func<ApiV1MiscRedditComment500Error1, TResult> onApiV1MiscRedditComment500Error1,
        Func<ApiV1MiscRedditComment502Error1, TResult> onApiV1MiscRedditComment502Error1,
        Func<ApiV1MiscRedditComment503Error1, TResult> onApiV1MiscRedditComment503Error1,
        Func<ApiV1MiscRedditComment504Error1, TResult> onApiV1MiscRedditComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscRedditComment400Error1(
                out var apiV1MiscRedditComment400Error1Value) => onApiV1MiscRedditComment400Error1(
                apiV1MiscRedditComment400Error1Value),
            _ when TryGetApiV1MiscRedditComment401Error1(
                out var apiV1MiscRedditComment401Error1Value) => onApiV1MiscRedditComment401Error1(
                apiV1MiscRedditComment401Error1Value),
            _ when TryGetApiV1MiscRedditComment403Error1(
                out var apiV1MiscRedditComment403Error1Value) => onApiV1MiscRedditComment403Error1(
                apiV1MiscRedditComment403Error1Value),
            _ when TryGetApiV1MiscRedditComment404Error1(
                out var apiV1MiscRedditComment404Error1Value) => onApiV1MiscRedditComment404Error1(
                apiV1MiscRedditComment404Error1Value),
            _ when TryGetApiV1MiscRedditComment429Error1(
                out var apiV1MiscRedditComment429Error1Value) => onApiV1MiscRedditComment429Error1(
                apiV1MiscRedditComment429Error1Value),
            _ when TryGetApiV1MiscRedditComment500Error1(
                out var apiV1MiscRedditComment500Error1Value) => onApiV1MiscRedditComment500Error1(
                apiV1MiscRedditComment500Error1Value),
            _ when TryGetApiV1MiscRedditComment502Error1(
                out var apiV1MiscRedditComment502Error1Value) => onApiV1MiscRedditComment502Error1(
                apiV1MiscRedditComment502Error1Value),
            _ when TryGetApiV1MiscRedditComment503Error1(
                out var apiV1MiscRedditComment503Error1Value) => onApiV1MiscRedditComment503Error1(
                apiV1MiscRedditComment503Error1Value),
            _ when TryGetApiV1MiscRedditComment504Error1(
                out var apiV1MiscRedditComment504Error1Value) => onApiV1MiscRedditComment504Error1(
                apiV1MiscRedditComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscRedditEditCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscRedditComment400Error1> onApiV1MiscRedditComment400Error1,
        Action<ApiV1MiscRedditComment401Error1> onApiV1MiscRedditComment401Error1,
        Action<ApiV1MiscRedditComment403Error1> onApiV1MiscRedditComment403Error1,
        Action<ApiV1MiscRedditComment404Error1> onApiV1MiscRedditComment404Error1,
        Action<ApiV1MiscRedditComment429Error1> onApiV1MiscRedditComment429Error1,
        Action<ApiV1MiscRedditComment500Error1> onApiV1MiscRedditComment500Error1,
        Action<ApiV1MiscRedditComment502Error1> onApiV1MiscRedditComment502Error1,
        Action<ApiV1MiscRedditComment503Error1> onApiV1MiscRedditComment503Error1,
        Action<ApiV1MiscRedditComment504Error1> onApiV1MiscRedditComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscRedditComment400Error1(
            out var apiV1MiscRedditComment400Error1Value)) onApiV1MiscRedditComment400Error1(
            apiV1MiscRedditComment400Error1Value);
        else if (TryGetApiV1MiscRedditComment401Error1(
            out var apiV1MiscRedditComment401Error1Value)) onApiV1MiscRedditComment401Error1(
            apiV1MiscRedditComment401Error1Value);
        else if (TryGetApiV1MiscRedditComment403Error1(
            out var apiV1MiscRedditComment403Error1Value)) onApiV1MiscRedditComment403Error1(
            apiV1MiscRedditComment403Error1Value);
        else if (TryGetApiV1MiscRedditComment404Error1(
            out var apiV1MiscRedditComment404Error1Value)) onApiV1MiscRedditComment404Error1(
            apiV1MiscRedditComment404Error1Value);
        else if (TryGetApiV1MiscRedditComment429Error1(
            out var apiV1MiscRedditComment429Error1Value)) onApiV1MiscRedditComment429Error1(
            apiV1MiscRedditComment429Error1Value);
        else if (TryGetApiV1MiscRedditComment500Error1(
            out var apiV1MiscRedditComment500Error1Value)) onApiV1MiscRedditComment500Error1(
            apiV1MiscRedditComment500Error1Value);
        else if (TryGetApiV1MiscRedditComment502Error1(
            out var apiV1MiscRedditComment502Error1Value)) onApiV1MiscRedditComment502Error1(
            apiV1MiscRedditComment502Error1Value);
        else if (TryGetApiV1MiscRedditComment503Error1(
            out var apiV1MiscRedditComment503Error1Value)) onApiV1MiscRedditComment503Error1(
            apiV1MiscRedditComment503Error1Value);
        else if (TryGetApiV1MiscRedditComment504Error1(
            out var apiV1MiscRedditComment504Error1Value)) onApiV1MiscRedditComment504Error1(
            apiV1MiscRedditComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscRedditEditCommentError)} holds no value.");
    }

    private static Task<MiscRedditEditCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscRedditComment400Error1>().As(AsApiV1MiscRedditComment400Error1),
            401 => response.Json<ApiV1MiscRedditComment401Error1>().As(AsApiV1MiscRedditComment401Error1),
            403 => response.Json<ApiV1MiscRedditComment403Error1>().As(AsApiV1MiscRedditComment403Error1),
            404 => response.Json<ApiV1MiscRedditComment404Error1>().As(AsApiV1MiscRedditComment404Error1),
            429 => response.Json<ApiV1MiscRedditComment429Error1>().As(AsApiV1MiscRedditComment429Error1),
            500 => response.Json<ApiV1MiscRedditComment500Error1>().As(AsApiV1MiscRedditComment500Error1),
            502 => response.Json<ApiV1MiscRedditComment502Error1>().As(AsApiV1MiscRedditComment502Error1),
            503 => response.Json<ApiV1MiscRedditComment503Error1>().As(AsApiV1MiscRedditComment503Error1),
            504 => response.Json<ApiV1MiscRedditComment504Error1>().As(AsApiV1MiscRedditComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscRedditEditCommentError> Response { get; } = new(Create);
}
