using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubeComment400Error1> _apiV1MiscYoutubeComment400Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment401Error1> _apiV1MiscYoutubeComment401Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment403Error1> _apiV1MiscYoutubeComment403Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment404Error1> _apiV1MiscYoutubeComment404Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment429Error1> _apiV1MiscYoutubeComment429Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment500Error1> _apiV1MiscYoutubeComment500Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment502Error1> _apiV1MiscYoutubeComment502Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment503Error1> _apiV1MiscYoutubeComment503Error1Value;

    private readonly Optional<ApiV1MiscYoutubeComment504Error1> _apiV1MiscYoutubeComment504Error1Value;

    private MiscYoutubeDeleteCommentError(Optional<ApiV1MiscYoutubeComment400Error1> apiV1MiscYoutubeComment400Error1Value,
        Optional<ApiV1MiscYoutubeComment401Error1> apiV1MiscYoutubeComment401Error1Value,
        Optional<ApiV1MiscYoutubeComment403Error1> apiV1MiscYoutubeComment403Error1Value,
        Optional<ApiV1MiscYoutubeComment404Error1> apiV1MiscYoutubeComment404Error1Value,
        Optional<ApiV1MiscYoutubeComment429Error1> apiV1MiscYoutubeComment429Error1Value,
        Optional<ApiV1MiscYoutubeComment500Error1> apiV1MiscYoutubeComment500Error1Value,
        Optional<ApiV1MiscYoutubeComment502Error1> apiV1MiscYoutubeComment502Error1Value,
        Optional<ApiV1MiscYoutubeComment503Error1> apiV1MiscYoutubeComment503Error1Value,
        Optional<ApiV1MiscYoutubeComment504Error1> apiV1MiscYoutubeComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubeComment400Error1Value = apiV1MiscYoutubeComment400Error1Value;
        _apiV1MiscYoutubeComment401Error1Value = apiV1MiscYoutubeComment401Error1Value;
        _apiV1MiscYoutubeComment403Error1Value = apiV1MiscYoutubeComment403Error1Value;
        _apiV1MiscYoutubeComment404Error1Value = apiV1MiscYoutubeComment404Error1Value;
        _apiV1MiscYoutubeComment429Error1Value = apiV1MiscYoutubeComment429Error1Value;
        _apiV1MiscYoutubeComment500Error1Value = apiV1MiscYoutubeComment500Error1Value;
        _apiV1MiscYoutubeComment502Error1Value = apiV1MiscYoutubeComment502Error1Value;
        _apiV1MiscYoutubeComment503Error1Value = apiV1MiscYoutubeComment503Error1Value;
        _apiV1MiscYoutubeComment504Error1Value = apiV1MiscYoutubeComment504Error1Value;
    }

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment400Error1(ApiV1MiscYoutubeComment400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubeComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment401Error1(ApiV1MiscYoutubeComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubeComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment403Error1(ApiV1MiscYoutubeComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubeComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment404Error1(ApiV1MiscYoutubeComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment429Error1(ApiV1MiscYoutubeComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment500Error1(ApiV1MiscYoutubeComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment502Error1(ApiV1MiscYoutubeComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment503Error1(ApiV1MiscYoutubeComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeDeleteCommentError AsApiV1MiscYoutubeComment504Error1(ApiV1MiscYoutubeComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeComment504Error1>.Some(value),
            default);

    private static MiscYoutubeDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubeComment400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment400Error1? value) =>
        _apiV1MiscYoutubeComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment401Error1? value) =>
        _apiV1MiscYoutubeComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment403Error1? value) =>
        _apiV1MiscYoutubeComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment404Error1? value) =>
        _apiV1MiscYoutubeComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment429Error1? value) =>
        _apiV1MiscYoutubeComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment500Error1? value) =>
        _apiV1MiscYoutubeComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment502Error1? value) =>
        _apiV1MiscYoutubeComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment503Error1? value) =>
        _apiV1MiscYoutubeComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeComment504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment504Error1? value) =>
        _apiV1MiscYoutubeComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubeComment400Error1, TResult> onApiV1MiscYoutubeComment400Error1,
        Func<ApiV1MiscYoutubeComment401Error1, TResult> onApiV1MiscYoutubeComment401Error1,
        Func<ApiV1MiscYoutubeComment403Error1, TResult> onApiV1MiscYoutubeComment403Error1,
        Func<ApiV1MiscYoutubeComment404Error1, TResult> onApiV1MiscYoutubeComment404Error1,
        Func<ApiV1MiscYoutubeComment429Error1, TResult> onApiV1MiscYoutubeComment429Error1,
        Func<ApiV1MiscYoutubeComment500Error1, TResult> onApiV1MiscYoutubeComment500Error1,
        Func<ApiV1MiscYoutubeComment502Error1, TResult> onApiV1MiscYoutubeComment502Error1,
        Func<ApiV1MiscYoutubeComment503Error1, TResult> onApiV1MiscYoutubeComment503Error1,
        Func<ApiV1MiscYoutubeComment504Error1, TResult> onApiV1MiscYoutubeComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubeComment400Error1(
                out var apiV1MiscYoutubeComment400Error1Value) => onApiV1MiscYoutubeComment400Error1(
                apiV1MiscYoutubeComment400Error1Value),
            _ when TryGetApiV1MiscYoutubeComment401Error1(
                out var apiV1MiscYoutubeComment401Error1Value) => onApiV1MiscYoutubeComment401Error1(
                apiV1MiscYoutubeComment401Error1Value),
            _ when TryGetApiV1MiscYoutubeComment403Error1(
                out var apiV1MiscYoutubeComment403Error1Value) => onApiV1MiscYoutubeComment403Error1(
                apiV1MiscYoutubeComment403Error1Value),
            _ when TryGetApiV1MiscYoutubeComment404Error1(
                out var apiV1MiscYoutubeComment404Error1Value) => onApiV1MiscYoutubeComment404Error1(
                apiV1MiscYoutubeComment404Error1Value),
            _ when TryGetApiV1MiscYoutubeComment429Error1(
                out var apiV1MiscYoutubeComment429Error1Value) => onApiV1MiscYoutubeComment429Error1(
                apiV1MiscYoutubeComment429Error1Value),
            _ when TryGetApiV1MiscYoutubeComment500Error1(
                out var apiV1MiscYoutubeComment500Error1Value) => onApiV1MiscYoutubeComment500Error1(
                apiV1MiscYoutubeComment500Error1Value),
            _ when TryGetApiV1MiscYoutubeComment502Error1(
                out var apiV1MiscYoutubeComment502Error1Value) => onApiV1MiscYoutubeComment502Error1(
                apiV1MiscYoutubeComment502Error1Value),
            _ when TryGetApiV1MiscYoutubeComment503Error1(
                out var apiV1MiscYoutubeComment503Error1Value) => onApiV1MiscYoutubeComment503Error1(
                apiV1MiscYoutubeComment503Error1Value),
            _ when TryGetApiV1MiscYoutubeComment504Error1(
                out var apiV1MiscYoutubeComment504Error1Value) => onApiV1MiscYoutubeComment504Error1(
                apiV1MiscYoutubeComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubeComment400Error1> onApiV1MiscYoutubeComment400Error1,
        Action<ApiV1MiscYoutubeComment401Error1> onApiV1MiscYoutubeComment401Error1,
        Action<ApiV1MiscYoutubeComment403Error1> onApiV1MiscYoutubeComment403Error1,
        Action<ApiV1MiscYoutubeComment404Error1> onApiV1MiscYoutubeComment404Error1,
        Action<ApiV1MiscYoutubeComment429Error1> onApiV1MiscYoutubeComment429Error1,
        Action<ApiV1MiscYoutubeComment500Error1> onApiV1MiscYoutubeComment500Error1,
        Action<ApiV1MiscYoutubeComment502Error1> onApiV1MiscYoutubeComment502Error1,
        Action<ApiV1MiscYoutubeComment503Error1> onApiV1MiscYoutubeComment503Error1,
        Action<ApiV1MiscYoutubeComment504Error1> onApiV1MiscYoutubeComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubeComment400Error1(
            out var apiV1MiscYoutubeComment400Error1Value)) onApiV1MiscYoutubeComment400Error1(
            apiV1MiscYoutubeComment400Error1Value);
        else if (TryGetApiV1MiscYoutubeComment401Error1(
            out var apiV1MiscYoutubeComment401Error1Value)) onApiV1MiscYoutubeComment401Error1(
            apiV1MiscYoutubeComment401Error1Value);
        else if (TryGetApiV1MiscYoutubeComment403Error1(
            out var apiV1MiscYoutubeComment403Error1Value)) onApiV1MiscYoutubeComment403Error1(
            apiV1MiscYoutubeComment403Error1Value);
        else if (TryGetApiV1MiscYoutubeComment404Error1(
            out var apiV1MiscYoutubeComment404Error1Value)) onApiV1MiscYoutubeComment404Error1(
            apiV1MiscYoutubeComment404Error1Value);
        else if (TryGetApiV1MiscYoutubeComment429Error1(
            out var apiV1MiscYoutubeComment429Error1Value)) onApiV1MiscYoutubeComment429Error1(
            apiV1MiscYoutubeComment429Error1Value);
        else if (TryGetApiV1MiscYoutubeComment500Error1(
            out var apiV1MiscYoutubeComment500Error1Value)) onApiV1MiscYoutubeComment500Error1(
            apiV1MiscYoutubeComment500Error1Value);
        else if (TryGetApiV1MiscYoutubeComment502Error1(
            out var apiV1MiscYoutubeComment502Error1Value)) onApiV1MiscYoutubeComment502Error1(
            apiV1MiscYoutubeComment502Error1Value);
        else if (TryGetApiV1MiscYoutubeComment503Error1(
            out var apiV1MiscYoutubeComment503Error1Value)) onApiV1MiscYoutubeComment503Error1(
            apiV1MiscYoutubeComment503Error1Value);
        else if (TryGetApiV1MiscYoutubeComment504Error1(
            out var apiV1MiscYoutubeComment504Error1Value)) onApiV1MiscYoutubeComment504Error1(
            apiV1MiscYoutubeComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeDeleteCommentError)} holds no value.");
    }

    private static Task<MiscYoutubeDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubeComment400Error1>().As(AsApiV1MiscYoutubeComment400Error1),
            401 => response.Json<ApiV1MiscYoutubeComment401Error1>().As(AsApiV1MiscYoutubeComment401Error1),
            403 => response.Json<ApiV1MiscYoutubeComment403Error1>().As(AsApiV1MiscYoutubeComment403Error1),
            404 => response.Json<ApiV1MiscYoutubeComment404Error1>().As(AsApiV1MiscYoutubeComment404Error1),
            429 => response.Json<ApiV1MiscYoutubeComment429Error1>().As(AsApiV1MiscYoutubeComment429Error1),
            500 => response.Json<ApiV1MiscYoutubeComment500Error1>().As(AsApiV1MiscYoutubeComment500Error1),
            502 => response.Json<ApiV1MiscYoutubeComment502Error1>().As(AsApiV1MiscYoutubeComment502Error1),
            503 => response.Json<ApiV1MiscYoutubeComment503Error1>().As(AsApiV1MiscYoutubeComment503Error1),
            504 => response.Json<ApiV1MiscYoutubeComment504Error1>().As(AsApiV1MiscYoutubeComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeDeleteCommentError> Response { get; } = new(Create);
}
