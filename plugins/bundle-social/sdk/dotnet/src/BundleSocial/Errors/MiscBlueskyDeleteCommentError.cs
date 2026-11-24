using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscBlueskyDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscBlueskyComment400Error1> _apiV1MiscBlueskyComment400Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment401Error1> _apiV1MiscBlueskyComment401Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment403Error1> _apiV1MiscBlueskyComment403Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment404Error1> _apiV1MiscBlueskyComment404Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment429Error1> _apiV1MiscBlueskyComment429Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment500Error1> _apiV1MiscBlueskyComment500Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment502Error1> _apiV1MiscBlueskyComment502Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment503Error1> _apiV1MiscBlueskyComment503Error1Value;

    private readonly Optional<ApiV1MiscBlueskyComment504Error1> _apiV1MiscBlueskyComment504Error1Value;

    private MiscBlueskyDeleteCommentError(Optional<ApiV1MiscBlueskyComment400Error1> apiV1MiscBlueskyComment400Error1Value,
        Optional<ApiV1MiscBlueskyComment401Error1> apiV1MiscBlueskyComment401Error1Value,
        Optional<ApiV1MiscBlueskyComment403Error1> apiV1MiscBlueskyComment403Error1Value,
        Optional<ApiV1MiscBlueskyComment404Error1> apiV1MiscBlueskyComment404Error1Value,
        Optional<ApiV1MiscBlueskyComment429Error1> apiV1MiscBlueskyComment429Error1Value,
        Optional<ApiV1MiscBlueskyComment500Error1> apiV1MiscBlueskyComment500Error1Value,
        Optional<ApiV1MiscBlueskyComment502Error1> apiV1MiscBlueskyComment502Error1Value,
        Optional<ApiV1MiscBlueskyComment503Error1> apiV1MiscBlueskyComment503Error1Value,
        Optional<ApiV1MiscBlueskyComment504Error1> apiV1MiscBlueskyComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscBlueskyComment400Error1Value = apiV1MiscBlueskyComment400Error1Value;
        _apiV1MiscBlueskyComment401Error1Value = apiV1MiscBlueskyComment401Error1Value;
        _apiV1MiscBlueskyComment403Error1Value = apiV1MiscBlueskyComment403Error1Value;
        _apiV1MiscBlueskyComment404Error1Value = apiV1MiscBlueskyComment404Error1Value;
        _apiV1MiscBlueskyComment429Error1Value = apiV1MiscBlueskyComment429Error1Value;
        _apiV1MiscBlueskyComment500Error1Value = apiV1MiscBlueskyComment500Error1Value;
        _apiV1MiscBlueskyComment502Error1Value = apiV1MiscBlueskyComment502Error1Value;
        _apiV1MiscBlueskyComment503Error1Value = apiV1MiscBlueskyComment503Error1Value;
        _apiV1MiscBlueskyComment504Error1Value = apiV1MiscBlueskyComment504Error1Value;
    }

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment400Error1(ApiV1MiscBlueskyComment400Error1 value) =>
        new(
            Optional<ApiV1MiscBlueskyComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment401Error1(ApiV1MiscBlueskyComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscBlueskyComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment403Error1(ApiV1MiscBlueskyComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscBlueskyComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment404Error1(ApiV1MiscBlueskyComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment429Error1(ApiV1MiscBlueskyComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment500Error1(ApiV1MiscBlueskyComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment502Error1(ApiV1MiscBlueskyComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment503Error1(ApiV1MiscBlueskyComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment503Error1>.Some(value),
            default,
            default);

    private static MiscBlueskyDeleteCommentError AsApiV1MiscBlueskyComment504Error1(ApiV1MiscBlueskyComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscBlueskyComment504Error1>.Some(value),
            default);

    private static MiscBlueskyDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscBlueskyComment400Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment400Error1? value) =>
        _apiV1MiscBlueskyComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment401Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment401Error1? value) =>
        _apiV1MiscBlueskyComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment403Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment403Error1? value) =>
        _apiV1MiscBlueskyComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment404Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment404Error1? value) =>
        _apiV1MiscBlueskyComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment429Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment429Error1? value) =>
        _apiV1MiscBlueskyComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment500Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment500Error1? value) =>
        _apiV1MiscBlueskyComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment502Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment502Error1? value) =>
        _apiV1MiscBlueskyComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment503Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment503Error1? value) =>
        _apiV1MiscBlueskyComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscBlueskyComment504Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment504Error1? value) =>
        _apiV1MiscBlueskyComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscBlueskyComment400Error1, TResult> onApiV1MiscBlueskyComment400Error1,
        Func<ApiV1MiscBlueskyComment401Error1, TResult> onApiV1MiscBlueskyComment401Error1,
        Func<ApiV1MiscBlueskyComment403Error1, TResult> onApiV1MiscBlueskyComment403Error1,
        Func<ApiV1MiscBlueskyComment404Error1, TResult> onApiV1MiscBlueskyComment404Error1,
        Func<ApiV1MiscBlueskyComment429Error1, TResult> onApiV1MiscBlueskyComment429Error1,
        Func<ApiV1MiscBlueskyComment500Error1, TResult> onApiV1MiscBlueskyComment500Error1,
        Func<ApiV1MiscBlueskyComment502Error1, TResult> onApiV1MiscBlueskyComment502Error1,
        Func<ApiV1MiscBlueskyComment503Error1, TResult> onApiV1MiscBlueskyComment503Error1,
        Func<ApiV1MiscBlueskyComment504Error1, TResult> onApiV1MiscBlueskyComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscBlueskyComment400Error1(
                out var apiV1MiscBlueskyComment400Error1Value) => onApiV1MiscBlueskyComment400Error1(
                apiV1MiscBlueskyComment400Error1Value),
            _ when TryGetApiV1MiscBlueskyComment401Error1(
                out var apiV1MiscBlueskyComment401Error1Value) => onApiV1MiscBlueskyComment401Error1(
                apiV1MiscBlueskyComment401Error1Value),
            _ when TryGetApiV1MiscBlueskyComment403Error1(
                out var apiV1MiscBlueskyComment403Error1Value) => onApiV1MiscBlueskyComment403Error1(
                apiV1MiscBlueskyComment403Error1Value),
            _ when TryGetApiV1MiscBlueskyComment404Error1(
                out var apiV1MiscBlueskyComment404Error1Value) => onApiV1MiscBlueskyComment404Error1(
                apiV1MiscBlueskyComment404Error1Value),
            _ when TryGetApiV1MiscBlueskyComment429Error1(
                out var apiV1MiscBlueskyComment429Error1Value) => onApiV1MiscBlueskyComment429Error1(
                apiV1MiscBlueskyComment429Error1Value),
            _ when TryGetApiV1MiscBlueskyComment500Error1(
                out var apiV1MiscBlueskyComment500Error1Value) => onApiV1MiscBlueskyComment500Error1(
                apiV1MiscBlueskyComment500Error1Value),
            _ when TryGetApiV1MiscBlueskyComment502Error1(
                out var apiV1MiscBlueskyComment502Error1Value) => onApiV1MiscBlueskyComment502Error1(
                apiV1MiscBlueskyComment502Error1Value),
            _ when TryGetApiV1MiscBlueskyComment503Error1(
                out var apiV1MiscBlueskyComment503Error1Value) => onApiV1MiscBlueskyComment503Error1(
                apiV1MiscBlueskyComment503Error1Value),
            _ when TryGetApiV1MiscBlueskyComment504Error1(
                out var apiV1MiscBlueskyComment504Error1Value) => onApiV1MiscBlueskyComment504Error1(
                apiV1MiscBlueskyComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscBlueskyDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscBlueskyComment400Error1> onApiV1MiscBlueskyComment400Error1,
        Action<ApiV1MiscBlueskyComment401Error1> onApiV1MiscBlueskyComment401Error1,
        Action<ApiV1MiscBlueskyComment403Error1> onApiV1MiscBlueskyComment403Error1,
        Action<ApiV1MiscBlueskyComment404Error1> onApiV1MiscBlueskyComment404Error1,
        Action<ApiV1MiscBlueskyComment429Error1> onApiV1MiscBlueskyComment429Error1,
        Action<ApiV1MiscBlueskyComment500Error1> onApiV1MiscBlueskyComment500Error1,
        Action<ApiV1MiscBlueskyComment502Error1> onApiV1MiscBlueskyComment502Error1,
        Action<ApiV1MiscBlueskyComment503Error1> onApiV1MiscBlueskyComment503Error1,
        Action<ApiV1MiscBlueskyComment504Error1> onApiV1MiscBlueskyComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscBlueskyComment400Error1(
            out var apiV1MiscBlueskyComment400Error1Value)) onApiV1MiscBlueskyComment400Error1(
            apiV1MiscBlueskyComment400Error1Value);
        else if (TryGetApiV1MiscBlueskyComment401Error1(
            out var apiV1MiscBlueskyComment401Error1Value)) onApiV1MiscBlueskyComment401Error1(
            apiV1MiscBlueskyComment401Error1Value);
        else if (TryGetApiV1MiscBlueskyComment403Error1(
            out var apiV1MiscBlueskyComment403Error1Value)) onApiV1MiscBlueskyComment403Error1(
            apiV1MiscBlueskyComment403Error1Value);
        else if (TryGetApiV1MiscBlueskyComment404Error1(
            out var apiV1MiscBlueskyComment404Error1Value)) onApiV1MiscBlueskyComment404Error1(
            apiV1MiscBlueskyComment404Error1Value);
        else if (TryGetApiV1MiscBlueskyComment429Error1(
            out var apiV1MiscBlueskyComment429Error1Value)) onApiV1MiscBlueskyComment429Error1(
            apiV1MiscBlueskyComment429Error1Value);
        else if (TryGetApiV1MiscBlueskyComment500Error1(
            out var apiV1MiscBlueskyComment500Error1Value)) onApiV1MiscBlueskyComment500Error1(
            apiV1MiscBlueskyComment500Error1Value);
        else if (TryGetApiV1MiscBlueskyComment502Error1(
            out var apiV1MiscBlueskyComment502Error1Value)) onApiV1MiscBlueskyComment502Error1(
            apiV1MiscBlueskyComment502Error1Value);
        else if (TryGetApiV1MiscBlueskyComment503Error1(
            out var apiV1MiscBlueskyComment503Error1Value)) onApiV1MiscBlueskyComment503Error1(
            apiV1MiscBlueskyComment503Error1Value);
        else if (TryGetApiV1MiscBlueskyComment504Error1(
            out var apiV1MiscBlueskyComment504Error1Value)) onApiV1MiscBlueskyComment504Error1(
            apiV1MiscBlueskyComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscBlueskyDeleteCommentError)} holds no value.");
    }

    private static Task<MiscBlueskyDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscBlueskyComment400Error1>().As(AsApiV1MiscBlueskyComment400Error1),
            401 => response.Json<ApiV1MiscBlueskyComment401Error1>().As(AsApiV1MiscBlueskyComment401Error1),
            403 => response.Json<ApiV1MiscBlueskyComment403Error1>().As(AsApiV1MiscBlueskyComment403Error1),
            404 => response.Json<ApiV1MiscBlueskyComment404Error1>().As(AsApiV1MiscBlueskyComment404Error1),
            429 => response.Json<ApiV1MiscBlueskyComment429Error1>().As(AsApiV1MiscBlueskyComment429Error1),
            500 => response.Json<ApiV1MiscBlueskyComment500Error1>().As(AsApiV1MiscBlueskyComment500Error1),
            502 => response.Json<ApiV1MiscBlueskyComment502Error1>().As(AsApiV1MiscBlueskyComment502Error1),
            503 => response.Json<ApiV1MiscBlueskyComment503Error1>().As(AsApiV1MiscBlueskyComment503Error1),
            504 => response.Json<ApiV1MiscBlueskyComment504Error1>().As(AsApiV1MiscBlueskyComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscBlueskyDeleteCommentError> Response { get; } = new(Create);
}
