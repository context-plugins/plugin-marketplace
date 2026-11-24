using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscLinkedinDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscLinkedinComment400Error1> _apiV1MiscLinkedinComment400Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment401Error1> _apiV1MiscLinkedinComment401Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment403Error1> _apiV1MiscLinkedinComment403Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment404Error1> _apiV1MiscLinkedinComment404Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment429Error1> _apiV1MiscLinkedinComment429Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment500Error1> _apiV1MiscLinkedinComment500Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment502Error1> _apiV1MiscLinkedinComment502Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment503Error1> _apiV1MiscLinkedinComment503Error1Value;

    private readonly Optional<ApiV1MiscLinkedinComment504Error1> _apiV1MiscLinkedinComment504Error1Value;

    private MiscLinkedinDeleteCommentError(Optional<ApiV1MiscLinkedinComment400Error1> apiV1MiscLinkedinComment400Error1Value,
        Optional<ApiV1MiscLinkedinComment401Error1> apiV1MiscLinkedinComment401Error1Value,
        Optional<ApiV1MiscLinkedinComment403Error1> apiV1MiscLinkedinComment403Error1Value,
        Optional<ApiV1MiscLinkedinComment404Error1> apiV1MiscLinkedinComment404Error1Value,
        Optional<ApiV1MiscLinkedinComment429Error1> apiV1MiscLinkedinComment429Error1Value,
        Optional<ApiV1MiscLinkedinComment500Error1> apiV1MiscLinkedinComment500Error1Value,
        Optional<ApiV1MiscLinkedinComment502Error1> apiV1MiscLinkedinComment502Error1Value,
        Optional<ApiV1MiscLinkedinComment503Error1> apiV1MiscLinkedinComment503Error1Value,
        Optional<ApiV1MiscLinkedinComment504Error1> apiV1MiscLinkedinComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscLinkedinComment400Error1Value = apiV1MiscLinkedinComment400Error1Value;
        _apiV1MiscLinkedinComment401Error1Value = apiV1MiscLinkedinComment401Error1Value;
        _apiV1MiscLinkedinComment403Error1Value = apiV1MiscLinkedinComment403Error1Value;
        _apiV1MiscLinkedinComment404Error1Value = apiV1MiscLinkedinComment404Error1Value;
        _apiV1MiscLinkedinComment429Error1Value = apiV1MiscLinkedinComment429Error1Value;
        _apiV1MiscLinkedinComment500Error1Value = apiV1MiscLinkedinComment500Error1Value;
        _apiV1MiscLinkedinComment502Error1Value = apiV1MiscLinkedinComment502Error1Value;
        _apiV1MiscLinkedinComment503Error1Value = apiV1MiscLinkedinComment503Error1Value;
        _apiV1MiscLinkedinComment504Error1Value = apiV1MiscLinkedinComment504Error1Value;
    }

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment400Error1(ApiV1MiscLinkedinComment400Error1 value) =>
        new(
            Optional<ApiV1MiscLinkedinComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment401Error1(ApiV1MiscLinkedinComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscLinkedinComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment403Error1(ApiV1MiscLinkedinComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscLinkedinComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment404Error1(ApiV1MiscLinkedinComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment429Error1(ApiV1MiscLinkedinComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment500Error1(ApiV1MiscLinkedinComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment502Error1(ApiV1MiscLinkedinComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment503Error1(ApiV1MiscLinkedinComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment503Error1>.Some(value),
            default,
            default);

    private static MiscLinkedinDeleteCommentError AsApiV1MiscLinkedinComment504Error1(ApiV1MiscLinkedinComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinComment504Error1>.Some(value),
            default);

    private static MiscLinkedinDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscLinkedinComment400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment400Error1? value) =>
        _apiV1MiscLinkedinComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment401Error1? value) =>
        _apiV1MiscLinkedinComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment403Error1? value) =>
        _apiV1MiscLinkedinComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment404Error1? value) =>
        _apiV1MiscLinkedinComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment429Error1? value) =>
        _apiV1MiscLinkedinComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment500Error1? value) =>
        _apiV1MiscLinkedinComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment502Error1? value) =>
        _apiV1MiscLinkedinComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment503Error1? value) =>
        _apiV1MiscLinkedinComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinComment504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment504Error1? value) =>
        _apiV1MiscLinkedinComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscLinkedinComment400Error1, TResult> onApiV1MiscLinkedinComment400Error1,
        Func<ApiV1MiscLinkedinComment401Error1, TResult> onApiV1MiscLinkedinComment401Error1,
        Func<ApiV1MiscLinkedinComment403Error1, TResult> onApiV1MiscLinkedinComment403Error1,
        Func<ApiV1MiscLinkedinComment404Error1, TResult> onApiV1MiscLinkedinComment404Error1,
        Func<ApiV1MiscLinkedinComment429Error1, TResult> onApiV1MiscLinkedinComment429Error1,
        Func<ApiV1MiscLinkedinComment500Error1, TResult> onApiV1MiscLinkedinComment500Error1,
        Func<ApiV1MiscLinkedinComment502Error1, TResult> onApiV1MiscLinkedinComment502Error1,
        Func<ApiV1MiscLinkedinComment503Error1, TResult> onApiV1MiscLinkedinComment503Error1,
        Func<ApiV1MiscLinkedinComment504Error1, TResult> onApiV1MiscLinkedinComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscLinkedinComment400Error1(
                out var apiV1MiscLinkedinComment400Error1Value) => onApiV1MiscLinkedinComment400Error1(
                apiV1MiscLinkedinComment400Error1Value),
            _ when TryGetApiV1MiscLinkedinComment401Error1(
                out var apiV1MiscLinkedinComment401Error1Value) => onApiV1MiscLinkedinComment401Error1(
                apiV1MiscLinkedinComment401Error1Value),
            _ when TryGetApiV1MiscLinkedinComment403Error1(
                out var apiV1MiscLinkedinComment403Error1Value) => onApiV1MiscLinkedinComment403Error1(
                apiV1MiscLinkedinComment403Error1Value),
            _ when TryGetApiV1MiscLinkedinComment404Error1(
                out var apiV1MiscLinkedinComment404Error1Value) => onApiV1MiscLinkedinComment404Error1(
                apiV1MiscLinkedinComment404Error1Value),
            _ when TryGetApiV1MiscLinkedinComment429Error1(
                out var apiV1MiscLinkedinComment429Error1Value) => onApiV1MiscLinkedinComment429Error1(
                apiV1MiscLinkedinComment429Error1Value),
            _ when TryGetApiV1MiscLinkedinComment500Error1(
                out var apiV1MiscLinkedinComment500Error1Value) => onApiV1MiscLinkedinComment500Error1(
                apiV1MiscLinkedinComment500Error1Value),
            _ when TryGetApiV1MiscLinkedinComment502Error1(
                out var apiV1MiscLinkedinComment502Error1Value) => onApiV1MiscLinkedinComment502Error1(
                apiV1MiscLinkedinComment502Error1Value),
            _ when TryGetApiV1MiscLinkedinComment503Error1(
                out var apiV1MiscLinkedinComment503Error1Value) => onApiV1MiscLinkedinComment503Error1(
                apiV1MiscLinkedinComment503Error1Value),
            _ when TryGetApiV1MiscLinkedinComment504Error1(
                out var apiV1MiscLinkedinComment504Error1Value) => onApiV1MiscLinkedinComment504Error1(
                apiV1MiscLinkedinComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscLinkedinDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscLinkedinComment400Error1> onApiV1MiscLinkedinComment400Error1,
        Action<ApiV1MiscLinkedinComment401Error1> onApiV1MiscLinkedinComment401Error1,
        Action<ApiV1MiscLinkedinComment403Error1> onApiV1MiscLinkedinComment403Error1,
        Action<ApiV1MiscLinkedinComment404Error1> onApiV1MiscLinkedinComment404Error1,
        Action<ApiV1MiscLinkedinComment429Error1> onApiV1MiscLinkedinComment429Error1,
        Action<ApiV1MiscLinkedinComment500Error1> onApiV1MiscLinkedinComment500Error1,
        Action<ApiV1MiscLinkedinComment502Error1> onApiV1MiscLinkedinComment502Error1,
        Action<ApiV1MiscLinkedinComment503Error1> onApiV1MiscLinkedinComment503Error1,
        Action<ApiV1MiscLinkedinComment504Error1> onApiV1MiscLinkedinComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscLinkedinComment400Error1(
            out var apiV1MiscLinkedinComment400Error1Value)) onApiV1MiscLinkedinComment400Error1(
            apiV1MiscLinkedinComment400Error1Value);
        else if (TryGetApiV1MiscLinkedinComment401Error1(
            out var apiV1MiscLinkedinComment401Error1Value)) onApiV1MiscLinkedinComment401Error1(
            apiV1MiscLinkedinComment401Error1Value);
        else if (TryGetApiV1MiscLinkedinComment403Error1(
            out var apiV1MiscLinkedinComment403Error1Value)) onApiV1MiscLinkedinComment403Error1(
            apiV1MiscLinkedinComment403Error1Value);
        else if (TryGetApiV1MiscLinkedinComment404Error1(
            out var apiV1MiscLinkedinComment404Error1Value)) onApiV1MiscLinkedinComment404Error1(
            apiV1MiscLinkedinComment404Error1Value);
        else if (TryGetApiV1MiscLinkedinComment429Error1(
            out var apiV1MiscLinkedinComment429Error1Value)) onApiV1MiscLinkedinComment429Error1(
            apiV1MiscLinkedinComment429Error1Value);
        else if (TryGetApiV1MiscLinkedinComment500Error1(
            out var apiV1MiscLinkedinComment500Error1Value)) onApiV1MiscLinkedinComment500Error1(
            apiV1MiscLinkedinComment500Error1Value);
        else if (TryGetApiV1MiscLinkedinComment502Error1(
            out var apiV1MiscLinkedinComment502Error1Value)) onApiV1MiscLinkedinComment502Error1(
            apiV1MiscLinkedinComment502Error1Value);
        else if (TryGetApiV1MiscLinkedinComment503Error1(
            out var apiV1MiscLinkedinComment503Error1Value)) onApiV1MiscLinkedinComment503Error1(
            apiV1MiscLinkedinComment503Error1Value);
        else if (TryGetApiV1MiscLinkedinComment504Error1(
            out var apiV1MiscLinkedinComment504Error1Value)) onApiV1MiscLinkedinComment504Error1(
            apiV1MiscLinkedinComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscLinkedinDeleteCommentError)} holds no value.");
    }

    private static Task<MiscLinkedinDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscLinkedinComment400Error1>().As(AsApiV1MiscLinkedinComment400Error1),
            401 => response.Json<ApiV1MiscLinkedinComment401Error1>().As(AsApiV1MiscLinkedinComment401Error1),
            403 => response.Json<ApiV1MiscLinkedinComment403Error1>().As(AsApiV1MiscLinkedinComment403Error1),
            404 => response.Json<ApiV1MiscLinkedinComment404Error1>().As(AsApiV1MiscLinkedinComment404Error1),
            429 => response.Json<ApiV1MiscLinkedinComment429Error1>().As(AsApiV1MiscLinkedinComment429Error1),
            500 => response.Json<ApiV1MiscLinkedinComment500Error1>().As(AsApiV1MiscLinkedinComment500Error1),
            502 => response.Json<ApiV1MiscLinkedinComment502Error1>().As(AsApiV1MiscLinkedinComment502Error1),
            503 => response.Json<ApiV1MiscLinkedinComment503Error1>().As(AsApiV1MiscLinkedinComment503Error1),
            504 => response.Json<ApiV1MiscLinkedinComment504Error1>().As(AsApiV1MiscLinkedinComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscLinkedinDeleteCommentError> Response { get; } = new(Create);
}
