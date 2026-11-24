using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscInstagramDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscInstagramComment400Error1> _apiV1MiscInstagramComment400Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment401Error1> _apiV1MiscInstagramComment401Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment403Error1> _apiV1MiscInstagramComment403Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment404Error1> _apiV1MiscInstagramComment404Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment429Error1> _apiV1MiscInstagramComment429Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment500Error1> _apiV1MiscInstagramComment500Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment502Error1> _apiV1MiscInstagramComment502Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment503Error1> _apiV1MiscInstagramComment503Error1Value;

    private readonly Optional<ApiV1MiscInstagramComment504Error1> _apiV1MiscInstagramComment504Error1Value;

    private MiscInstagramDeleteCommentError(Optional<ApiV1MiscInstagramComment400Error1> apiV1MiscInstagramComment400Error1Value,
        Optional<ApiV1MiscInstagramComment401Error1> apiV1MiscInstagramComment401Error1Value,
        Optional<ApiV1MiscInstagramComment403Error1> apiV1MiscInstagramComment403Error1Value,
        Optional<ApiV1MiscInstagramComment404Error1> apiV1MiscInstagramComment404Error1Value,
        Optional<ApiV1MiscInstagramComment429Error1> apiV1MiscInstagramComment429Error1Value,
        Optional<ApiV1MiscInstagramComment500Error1> apiV1MiscInstagramComment500Error1Value,
        Optional<ApiV1MiscInstagramComment502Error1> apiV1MiscInstagramComment502Error1Value,
        Optional<ApiV1MiscInstagramComment503Error1> apiV1MiscInstagramComment503Error1Value,
        Optional<ApiV1MiscInstagramComment504Error1> apiV1MiscInstagramComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscInstagramComment400Error1Value = apiV1MiscInstagramComment400Error1Value;
        _apiV1MiscInstagramComment401Error1Value = apiV1MiscInstagramComment401Error1Value;
        _apiV1MiscInstagramComment403Error1Value = apiV1MiscInstagramComment403Error1Value;
        _apiV1MiscInstagramComment404Error1Value = apiV1MiscInstagramComment404Error1Value;
        _apiV1MiscInstagramComment429Error1Value = apiV1MiscInstagramComment429Error1Value;
        _apiV1MiscInstagramComment500Error1Value = apiV1MiscInstagramComment500Error1Value;
        _apiV1MiscInstagramComment502Error1Value = apiV1MiscInstagramComment502Error1Value;
        _apiV1MiscInstagramComment503Error1Value = apiV1MiscInstagramComment503Error1Value;
        _apiV1MiscInstagramComment504Error1Value = apiV1MiscInstagramComment504Error1Value;
    }

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment400Error1(ApiV1MiscInstagramComment400Error1 value) =>
        new(
            Optional<ApiV1MiscInstagramComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment401Error1(ApiV1MiscInstagramComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscInstagramComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment403Error1(ApiV1MiscInstagramComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscInstagramComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment404Error1(ApiV1MiscInstagramComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment429Error1(ApiV1MiscInstagramComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment500Error1(ApiV1MiscInstagramComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment502Error1(ApiV1MiscInstagramComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment503Error1(ApiV1MiscInstagramComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment503Error1>.Some(value),
            default,
            default);

    private static MiscInstagramDeleteCommentError AsApiV1MiscInstagramComment504Error1(ApiV1MiscInstagramComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramComment504Error1>.Some(value),
            default);

    private static MiscInstagramDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscInstagramComment400Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment400Error1? value) =>
        _apiV1MiscInstagramComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment401Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment401Error1? value) =>
        _apiV1MiscInstagramComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment403Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment403Error1? value) =>
        _apiV1MiscInstagramComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment404Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment404Error1? value) =>
        _apiV1MiscInstagramComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment429Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment429Error1? value) =>
        _apiV1MiscInstagramComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment500Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment500Error1? value) =>
        _apiV1MiscInstagramComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment502Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment502Error1? value) =>
        _apiV1MiscInstagramComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment503Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment503Error1? value) =>
        _apiV1MiscInstagramComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramComment504Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment504Error1? value) =>
        _apiV1MiscInstagramComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscInstagramComment400Error1, TResult> onApiV1MiscInstagramComment400Error1,
        Func<ApiV1MiscInstagramComment401Error1, TResult> onApiV1MiscInstagramComment401Error1,
        Func<ApiV1MiscInstagramComment403Error1, TResult> onApiV1MiscInstagramComment403Error1,
        Func<ApiV1MiscInstagramComment404Error1, TResult> onApiV1MiscInstagramComment404Error1,
        Func<ApiV1MiscInstagramComment429Error1, TResult> onApiV1MiscInstagramComment429Error1,
        Func<ApiV1MiscInstagramComment500Error1, TResult> onApiV1MiscInstagramComment500Error1,
        Func<ApiV1MiscInstagramComment502Error1, TResult> onApiV1MiscInstagramComment502Error1,
        Func<ApiV1MiscInstagramComment503Error1, TResult> onApiV1MiscInstagramComment503Error1,
        Func<ApiV1MiscInstagramComment504Error1, TResult> onApiV1MiscInstagramComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscInstagramComment400Error1(
                out var apiV1MiscInstagramComment400Error1Value) => onApiV1MiscInstagramComment400Error1(
                apiV1MiscInstagramComment400Error1Value),
            _ when TryGetApiV1MiscInstagramComment401Error1(
                out var apiV1MiscInstagramComment401Error1Value) => onApiV1MiscInstagramComment401Error1(
                apiV1MiscInstagramComment401Error1Value),
            _ when TryGetApiV1MiscInstagramComment403Error1(
                out var apiV1MiscInstagramComment403Error1Value) => onApiV1MiscInstagramComment403Error1(
                apiV1MiscInstagramComment403Error1Value),
            _ when TryGetApiV1MiscInstagramComment404Error1(
                out var apiV1MiscInstagramComment404Error1Value) => onApiV1MiscInstagramComment404Error1(
                apiV1MiscInstagramComment404Error1Value),
            _ when TryGetApiV1MiscInstagramComment429Error1(
                out var apiV1MiscInstagramComment429Error1Value) => onApiV1MiscInstagramComment429Error1(
                apiV1MiscInstagramComment429Error1Value),
            _ when TryGetApiV1MiscInstagramComment500Error1(
                out var apiV1MiscInstagramComment500Error1Value) => onApiV1MiscInstagramComment500Error1(
                apiV1MiscInstagramComment500Error1Value),
            _ when TryGetApiV1MiscInstagramComment502Error1(
                out var apiV1MiscInstagramComment502Error1Value) => onApiV1MiscInstagramComment502Error1(
                apiV1MiscInstagramComment502Error1Value),
            _ when TryGetApiV1MiscInstagramComment503Error1(
                out var apiV1MiscInstagramComment503Error1Value) => onApiV1MiscInstagramComment503Error1(
                apiV1MiscInstagramComment503Error1Value),
            _ when TryGetApiV1MiscInstagramComment504Error1(
                out var apiV1MiscInstagramComment504Error1Value) => onApiV1MiscInstagramComment504Error1(
                apiV1MiscInstagramComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscInstagramDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscInstagramComment400Error1> onApiV1MiscInstagramComment400Error1,
        Action<ApiV1MiscInstagramComment401Error1> onApiV1MiscInstagramComment401Error1,
        Action<ApiV1MiscInstagramComment403Error1> onApiV1MiscInstagramComment403Error1,
        Action<ApiV1MiscInstagramComment404Error1> onApiV1MiscInstagramComment404Error1,
        Action<ApiV1MiscInstagramComment429Error1> onApiV1MiscInstagramComment429Error1,
        Action<ApiV1MiscInstagramComment500Error1> onApiV1MiscInstagramComment500Error1,
        Action<ApiV1MiscInstagramComment502Error1> onApiV1MiscInstagramComment502Error1,
        Action<ApiV1MiscInstagramComment503Error1> onApiV1MiscInstagramComment503Error1,
        Action<ApiV1MiscInstagramComment504Error1> onApiV1MiscInstagramComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscInstagramComment400Error1(
            out var apiV1MiscInstagramComment400Error1Value)) onApiV1MiscInstagramComment400Error1(
            apiV1MiscInstagramComment400Error1Value);
        else if (TryGetApiV1MiscInstagramComment401Error1(
            out var apiV1MiscInstagramComment401Error1Value)) onApiV1MiscInstagramComment401Error1(
            apiV1MiscInstagramComment401Error1Value);
        else if (TryGetApiV1MiscInstagramComment403Error1(
            out var apiV1MiscInstagramComment403Error1Value)) onApiV1MiscInstagramComment403Error1(
            apiV1MiscInstagramComment403Error1Value);
        else if (TryGetApiV1MiscInstagramComment404Error1(
            out var apiV1MiscInstagramComment404Error1Value)) onApiV1MiscInstagramComment404Error1(
            apiV1MiscInstagramComment404Error1Value);
        else if (TryGetApiV1MiscInstagramComment429Error1(
            out var apiV1MiscInstagramComment429Error1Value)) onApiV1MiscInstagramComment429Error1(
            apiV1MiscInstagramComment429Error1Value);
        else if (TryGetApiV1MiscInstagramComment500Error1(
            out var apiV1MiscInstagramComment500Error1Value)) onApiV1MiscInstagramComment500Error1(
            apiV1MiscInstagramComment500Error1Value);
        else if (TryGetApiV1MiscInstagramComment502Error1(
            out var apiV1MiscInstagramComment502Error1Value)) onApiV1MiscInstagramComment502Error1(
            apiV1MiscInstagramComment502Error1Value);
        else if (TryGetApiV1MiscInstagramComment503Error1(
            out var apiV1MiscInstagramComment503Error1Value)) onApiV1MiscInstagramComment503Error1(
            apiV1MiscInstagramComment503Error1Value);
        else if (TryGetApiV1MiscInstagramComment504Error1(
            out var apiV1MiscInstagramComment504Error1Value)) onApiV1MiscInstagramComment504Error1(
            apiV1MiscInstagramComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscInstagramDeleteCommentError)} holds no value.");
    }

    private static Task<MiscInstagramDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscInstagramComment400Error1>().As(AsApiV1MiscInstagramComment400Error1),
            401 => response.Json<ApiV1MiscInstagramComment401Error1>().As(AsApiV1MiscInstagramComment401Error1),
            403 => response.Json<ApiV1MiscInstagramComment403Error1>().As(AsApiV1MiscInstagramComment403Error1),
            404 => response.Json<ApiV1MiscInstagramComment404Error1>().As(AsApiV1MiscInstagramComment404Error1),
            429 => response.Json<ApiV1MiscInstagramComment429Error1>().As(AsApiV1MiscInstagramComment429Error1),
            500 => response.Json<ApiV1MiscInstagramComment500Error1>().As(AsApiV1MiscInstagramComment500Error1),
            502 => response.Json<ApiV1MiscInstagramComment502Error1>().As(AsApiV1MiscInstagramComment502Error1),
            503 => response.Json<ApiV1MiscInstagramComment503Error1>().As(AsApiV1MiscInstagramComment503Error1),
            504 => response.Json<ApiV1MiscInstagramComment504Error1>().As(AsApiV1MiscInstagramComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscInstagramDeleteCommentError> Response { get; } = new(Create);
}
