using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTwitterDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscTwitterComment400Error1> _apiV1MiscTwitterComment400Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment401Error1> _apiV1MiscTwitterComment401Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment403Error1> _apiV1MiscTwitterComment403Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment404Error1> _apiV1MiscTwitterComment404Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment429Error1> _apiV1MiscTwitterComment429Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment500Error1> _apiV1MiscTwitterComment500Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment502Error1> _apiV1MiscTwitterComment502Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment503Error1> _apiV1MiscTwitterComment503Error1Value;

    private readonly Optional<ApiV1MiscTwitterComment504Error1> _apiV1MiscTwitterComment504Error1Value;

    private MiscTwitterDeleteCommentError(Optional<ApiV1MiscTwitterComment400Error1> apiV1MiscTwitterComment400Error1Value,
        Optional<ApiV1MiscTwitterComment401Error1> apiV1MiscTwitterComment401Error1Value,
        Optional<ApiV1MiscTwitterComment403Error1> apiV1MiscTwitterComment403Error1Value,
        Optional<ApiV1MiscTwitterComment404Error1> apiV1MiscTwitterComment404Error1Value,
        Optional<ApiV1MiscTwitterComment429Error1> apiV1MiscTwitterComment429Error1Value,
        Optional<ApiV1MiscTwitterComment500Error1> apiV1MiscTwitterComment500Error1Value,
        Optional<ApiV1MiscTwitterComment502Error1> apiV1MiscTwitterComment502Error1Value,
        Optional<ApiV1MiscTwitterComment503Error1> apiV1MiscTwitterComment503Error1Value,
        Optional<ApiV1MiscTwitterComment504Error1> apiV1MiscTwitterComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTwitterComment400Error1Value = apiV1MiscTwitterComment400Error1Value;
        _apiV1MiscTwitterComment401Error1Value = apiV1MiscTwitterComment401Error1Value;
        _apiV1MiscTwitterComment403Error1Value = apiV1MiscTwitterComment403Error1Value;
        _apiV1MiscTwitterComment404Error1Value = apiV1MiscTwitterComment404Error1Value;
        _apiV1MiscTwitterComment429Error1Value = apiV1MiscTwitterComment429Error1Value;
        _apiV1MiscTwitterComment500Error1Value = apiV1MiscTwitterComment500Error1Value;
        _apiV1MiscTwitterComment502Error1Value = apiV1MiscTwitterComment502Error1Value;
        _apiV1MiscTwitterComment503Error1Value = apiV1MiscTwitterComment503Error1Value;
        _apiV1MiscTwitterComment504Error1Value = apiV1MiscTwitterComment504Error1Value;
    }

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment400Error1(ApiV1MiscTwitterComment400Error1 value) =>
        new(
            Optional<ApiV1MiscTwitterComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment401Error1(ApiV1MiscTwitterComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTwitterComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment403Error1(ApiV1MiscTwitterComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTwitterComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment404Error1(ApiV1MiscTwitterComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment429Error1(ApiV1MiscTwitterComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment500Error1(ApiV1MiscTwitterComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment502Error1(ApiV1MiscTwitterComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment503Error1(ApiV1MiscTwitterComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment503Error1>.Some(value),
            default,
            default);

    private static MiscTwitterDeleteCommentError AsApiV1MiscTwitterComment504Error1(ApiV1MiscTwitterComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterComment504Error1>.Some(value),
            default);

    private static MiscTwitterDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTwitterComment400Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment400Error1? value) =>
        _apiV1MiscTwitterComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment401Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment401Error1? value) =>
        _apiV1MiscTwitterComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment403Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment403Error1? value) =>
        _apiV1MiscTwitterComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment404Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment404Error1? value) =>
        _apiV1MiscTwitterComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment429Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment429Error1? value) =>
        _apiV1MiscTwitterComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment500Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment500Error1? value) =>
        _apiV1MiscTwitterComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment502Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment502Error1? value) =>
        _apiV1MiscTwitterComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment503Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment503Error1? value) =>
        _apiV1MiscTwitterComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterComment504Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment504Error1? value) =>
        _apiV1MiscTwitterComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTwitterComment400Error1, TResult> onApiV1MiscTwitterComment400Error1,
        Func<ApiV1MiscTwitterComment401Error1, TResult> onApiV1MiscTwitterComment401Error1,
        Func<ApiV1MiscTwitterComment403Error1, TResult> onApiV1MiscTwitterComment403Error1,
        Func<ApiV1MiscTwitterComment404Error1, TResult> onApiV1MiscTwitterComment404Error1,
        Func<ApiV1MiscTwitterComment429Error1, TResult> onApiV1MiscTwitterComment429Error1,
        Func<ApiV1MiscTwitterComment500Error1, TResult> onApiV1MiscTwitterComment500Error1,
        Func<ApiV1MiscTwitterComment502Error1, TResult> onApiV1MiscTwitterComment502Error1,
        Func<ApiV1MiscTwitterComment503Error1, TResult> onApiV1MiscTwitterComment503Error1,
        Func<ApiV1MiscTwitterComment504Error1, TResult> onApiV1MiscTwitterComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTwitterComment400Error1(
                out var apiV1MiscTwitterComment400Error1Value) => onApiV1MiscTwitterComment400Error1(
                apiV1MiscTwitterComment400Error1Value),
            _ when TryGetApiV1MiscTwitterComment401Error1(
                out var apiV1MiscTwitterComment401Error1Value) => onApiV1MiscTwitterComment401Error1(
                apiV1MiscTwitterComment401Error1Value),
            _ when TryGetApiV1MiscTwitterComment403Error1(
                out var apiV1MiscTwitterComment403Error1Value) => onApiV1MiscTwitterComment403Error1(
                apiV1MiscTwitterComment403Error1Value),
            _ when TryGetApiV1MiscTwitterComment404Error1(
                out var apiV1MiscTwitterComment404Error1Value) => onApiV1MiscTwitterComment404Error1(
                apiV1MiscTwitterComment404Error1Value),
            _ when TryGetApiV1MiscTwitterComment429Error1(
                out var apiV1MiscTwitterComment429Error1Value) => onApiV1MiscTwitterComment429Error1(
                apiV1MiscTwitterComment429Error1Value),
            _ when TryGetApiV1MiscTwitterComment500Error1(
                out var apiV1MiscTwitterComment500Error1Value) => onApiV1MiscTwitterComment500Error1(
                apiV1MiscTwitterComment500Error1Value),
            _ when TryGetApiV1MiscTwitterComment502Error1(
                out var apiV1MiscTwitterComment502Error1Value) => onApiV1MiscTwitterComment502Error1(
                apiV1MiscTwitterComment502Error1Value),
            _ when TryGetApiV1MiscTwitterComment503Error1(
                out var apiV1MiscTwitterComment503Error1Value) => onApiV1MiscTwitterComment503Error1(
                apiV1MiscTwitterComment503Error1Value),
            _ when TryGetApiV1MiscTwitterComment504Error1(
                out var apiV1MiscTwitterComment504Error1Value) => onApiV1MiscTwitterComment504Error1(
                apiV1MiscTwitterComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTwitterDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTwitterComment400Error1> onApiV1MiscTwitterComment400Error1,
        Action<ApiV1MiscTwitterComment401Error1> onApiV1MiscTwitterComment401Error1,
        Action<ApiV1MiscTwitterComment403Error1> onApiV1MiscTwitterComment403Error1,
        Action<ApiV1MiscTwitterComment404Error1> onApiV1MiscTwitterComment404Error1,
        Action<ApiV1MiscTwitterComment429Error1> onApiV1MiscTwitterComment429Error1,
        Action<ApiV1MiscTwitterComment500Error1> onApiV1MiscTwitterComment500Error1,
        Action<ApiV1MiscTwitterComment502Error1> onApiV1MiscTwitterComment502Error1,
        Action<ApiV1MiscTwitterComment503Error1> onApiV1MiscTwitterComment503Error1,
        Action<ApiV1MiscTwitterComment504Error1> onApiV1MiscTwitterComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTwitterComment400Error1(
            out var apiV1MiscTwitterComment400Error1Value)) onApiV1MiscTwitterComment400Error1(
            apiV1MiscTwitterComment400Error1Value);
        else if (TryGetApiV1MiscTwitterComment401Error1(
            out var apiV1MiscTwitterComment401Error1Value)) onApiV1MiscTwitterComment401Error1(
            apiV1MiscTwitterComment401Error1Value);
        else if (TryGetApiV1MiscTwitterComment403Error1(
            out var apiV1MiscTwitterComment403Error1Value)) onApiV1MiscTwitterComment403Error1(
            apiV1MiscTwitterComment403Error1Value);
        else if (TryGetApiV1MiscTwitterComment404Error1(
            out var apiV1MiscTwitterComment404Error1Value)) onApiV1MiscTwitterComment404Error1(
            apiV1MiscTwitterComment404Error1Value);
        else if (TryGetApiV1MiscTwitterComment429Error1(
            out var apiV1MiscTwitterComment429Error1Value)) onApiV1MiscTwitterComment429Error1(
            apiV1MiscTwitterComment429Error1Value);
        else if (TryGetApiV1MiscTwitterComment500Error1(
            out var apiV1MiscTwitterComment500Error1Value)) onApiV1MiscTwitterComment500Error1(
            apiV1MiscTwitterComment500Error1Value);
        else if (TryGetApiV1MiscTwitterComment502Error1(
            out var apiV1MiscTwitterComment502Error1Value)) onApiV1MiscTwitterComment502Error1(
            apiV1MiscTwitterComment502Error1Value);
        else if (TryGetApiV1MiscTwitterComment503Error1(
            out var apiV1MiscTwitterComment503Error1Value)) onApiV1MiscTwitterComment503Error1(
            apiV1MiscTwitterComment503Error1Value);
        else if (TryGetApiV1MiscTwitterComment504Error1(
            out var apiV1MiscTwitterComment504Error1Value)) onApiV1MiscTwitterComment504Error1(
            apiV1MiscTwitterComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTwitterDeleteCommentError)} holds no value.");
    }

    private static Task<MiscTwitterDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTwitterComment400Error1>().As(AsApiV1MiscTwitterComment400Error1),
            401 => response.Json<ApiV1MiscTwitterComment401Error1>().As(AsApiV1MiscTwitterComment401Error1),
            403 => response.Json<ApiV1MiscTwitterComment403Error1>().As(AsApiV1MiscTwitterComment403Error1),
            404 => response.Json<ApiV1MiscTwitterComment404Error1>().As(AsApiV1MiscTwitterComment404Error1),
            429 => response.Json<ApiV1MiscTwitterComment429Error1>().As(AsApiV1MiscTwitterComment429Error1),
            500 => response.Json<ApiV1MiscTwitterComment500Error1>().As(AsApiV1MiscTwitterComment500Error1),
            502 => response.Json<ApiV1MiscTwitterComment502Error1>().As(AsApiV1MiscTwitterComment502Error1),
            503 => response.Json<ApiV1MiscTwitterComment503Error1>().As(AsApiV1MiscTwitterComment503Error1),
            504 => response.Json<ApiV1MiscTwitterComment504Error1>().As(AsApiV1MiscTwitterComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTwitterDeleteCommentError> Response { get; } = new(Create);
}
