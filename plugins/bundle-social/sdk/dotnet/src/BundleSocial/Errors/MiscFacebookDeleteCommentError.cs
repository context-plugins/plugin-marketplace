using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookComment400Error1> _apiV1MiscFacebookComment400Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment401Error1> _apiV1MiscFacebookComment401Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment403Error1> _apiV1MiscFacebookComment403Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment404Error1> _apiV1MiscFacebookComment404Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment429Error1> _apiV1MiscFacebookComment429Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment500Error1> _apiV1MiscFacebookComment500Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment502Error1> _apiV1MiscFacebookComment502Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment503Error1> _apiV1MiscFacebookComment503Error1Value;

    private readonly Optional<ApiV1MiscFacebookComment504Error1> _apiV1MiscFacebookComment504Error1Value;

    private MiscFacebookDeleteCommentError(Optional<ApiV1MiscFacebookComment400Error1> apiV1MiscFacebookComment400Error1Value,
        Optional<ApiV1MiscFacebookComment401Error1> apiV1MiscFacebookComment401Error1Value,
        Optional<ApiV1MiscFacebookComment403Error1> apiV1MiscFacebookComment403Error1Value,
        Optional<ApiV1MiscFacebookComment404Error1> apiV1MiscFacebookComment404Error1Value,
        Optional<ApiV1MiscFacebookComment429Error1> apiV1MiscFacebookComment429Error1Value,
        Optional<ApiV1MiscFacebookComment500Error1> apiV1MiscFacebookComment500Error1Value,
        Optional<ApiV1MiscFacebookComment502Error1> apiV1MiscFacebookComment502Error1Value,
        Optional<ApiV1MiscFacebookComment503Error1> apiV1MiscFacebookComment503Error1Value,
        Optional<ApiV1MiscFacebookComment504Error1> apiV1MiscFacebookComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookComment400Error1Value = apiV1MiscFacebookComment400Error1Value;
        _apiV1MiscFacebookComment401Error1Value = apiV1MiscFacebookComment401Error1Value;
        _apiV1MiscFacebookComment403Error1Value = apiV1MiscFacebookComment403Error1Value;
        _apiV1MiscFacebookComment404Error1Value = apiV1MiscFacebookComment404Error1Value;
        _apiV1MiscFacebookComment429Error1Value = apiV1MiscFacebookComment429Error1Value;
        _apiV1MiscFacebookComment500Error1Value = apiV1MiscFacebookComment500Error1Value;
        _apiV1MiscFacebookComment502Error1Value = apiV1MiscFacebookComment502Error1Value;
        _apiV1MiscFacebookComment503Error1Value = apiV1MiscFacebookComment503Error1Value;
        _apiV1MiscFacebookComment504Error1Value = apiV1MiscFacebookComment504Error1Value;
    }

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment400Error1(ApiV1MiscFacebookComment400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment401Error1(ApiV1MiscFacebookComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment403Error1(ApiV1MiscFacebookComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment404Error1(ApiV1MiscFacebookComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment429Error1(ApiV1MiscFacebookComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment500Error1(ApiV1MiscFacebookComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment502Error1(ApiV1MiscFacebookComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment503Error1(ApiV1MiscFacebookComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookDeleteCommentError AsApiV1MiscFacebookComment504Error1(ApiV1MiscFacebookComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookComment504Error1>.Some(value),
            default);

    private static MiscFacebookDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookComment400Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment400Error1? value) =>
        _apiV1MiscFacebookComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment401Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment401Error1? value) =>
        _apiV1MiscFacebookComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment403Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment403Error1? value) =>
        _apiV1MiscFacebookComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment404Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment404Error1? value) =>
        _apiV1MiscFacebookComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment429Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment429Error1? value) =>
        _apiV1MiscFacebookComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment500Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment500Error1? value) =>
        _apiV1MiscFacebookComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment502Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment502Error1? value) =>
        _apiV1MiscFacebookComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment503Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment503Error1? value) =>
        _apiV1MiscFacebookComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookComment504Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment504Error1? value) =>
        _apiV1MiscFacebookComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookComment400Error1, TResult> onApiV1MiscFacebookComment400Error1,
        Func<ApiV1MiscFacebookComment401Error1, TResult> onApiV1MiscFacebookComment401Error1,
        Func<ApiV1MiscFacebookComment403Error1, TResult> onApiV1MiscFacebookComment403Error1,
        Func<ApiV1MiscFacebookComment404Error1, TResult> onApiV1MiscFacebookComment404Error1,
        Func<ApiV1MiscFacebookComment429Error1, TResult> onApiV1MiscFacebookComment429Error1,
        Func<ApiV1MiscFacebookComment500Error1, TResult> onApiV1MiscFacebookComment500Error1,
        Func<ApiV1MiscFacebookComment502Error1, TResult> onApiV1MiscFacebookComment502Error1,
        Func<ApiV1MiscFacebookComment503Error1, TResult> onApiV1MiscFacebookComment503Error1,
        Func<ApiV1MiscFacebookComment504Error1, TResult> onApiV1MiscFacebookComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookComment400Error1(
                out var apiV1MiscFacebookComment400Error1Value) => onApiV1MiscFacebookComment400Error1(
                apiV1MiscFacebookComment400Error1Value),
            _ when TryGetApiV1MiscFacebookComment401Error1(
                out var apiV1MiscFacebookComment401Error1Value) => onApiV1MiscFacebookComment401Error1(
                apiV1MiscFacebookComment401Error1Value),
            _ when TryGetApiV1MiscFacebookComment403Error1(
                out var apiV1MiscFacebookComment403Error1Value) => onApiV1MiscFacebookComment403Error1(
                apiV1MiscFacebookComment403Error1Value),
            _ when TryGetApiV1MiscFacebookComment404Error1(
                out var apiV1MiscFacebookComment404Error1Value) => onApiV1MiscFacebookComment404Error1(
                apiV1MiscFacebookComment404Error1Value),
            _ when TryGetApiV1MiscFacebookComment429Error1(
                out var apiV1MiscFacebookComment429Error1Value) => onApiV1MiscFacebookComment429Error1(
                apiV1MiscFacebookComment429Error1Value),
            _ when TryGetApiV1MiscFacebookComment500Error1(
                out var apiV1MiscFacebookComment500Error1Value) => onApiV1MiscFacebookComment500Error1(
                apiV1MiscFacebookComment500Error1Value),
            _ when TryGetApiV1MiscFacebookComment502Error1(
                out var apiV1MiscFacebookComment502Error1Value) => onApiV1MiscFacebookComment502Error1(
                apiV1MiscFacebookComment502Error1Value),
            _ when TryGetApiV1MiscFacebookComment503Error1(
                out var apiV1MiscFacebookComment503Error1Value) => onApiV1MiscFacebookComment503Error1(
                apiV1MiscFacebookComment503Error1Value),
            _ when TryGetApiV1MiscFacebookComment504Error1(
                out var apiV1MiscFacebookComment504Error1Value) => onApiV1MiscFacebookComment504Error1(
                apiV1MiscFacebookComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookComment400Error1> onApiV1MiscFacebookComment400Error1,
        Action<ApiV1MiscFacebookComment401Error1> onApiV1MiscFacebookComment401Error1,
        Action<ApiV1MiscFacebookComment403Error1> onApiV1MiscFacebookComment403Error1,
        Action<ApiV1MiscFacebookComment404Error1> onApiV1MiscFacebookComment404Error1,
        Action<ApiV1MiscFacebookComment429Error1> onApiV1MiscFacebookComment429Error1,
        Action<ApiV1MiscFacebookComment500Error1> onApiV1MiscFacebookComment500Error1,
        Action<ApiV1MiscFacebookComment502Error1> onApiV1MiscFacebookComment502Error1,
        Action<ApiV1MiscFacebookComment503Error1> onApiV1MiscFacebookComment503Error1,
        Action<ApiV1MiscFacebookComment504Error1> onApiV1MiscFacebookComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookComment400Error1(
            out var apiV1MiscFacebookComment400Error1Value)) onApiV1MiscFacebookComment400Error1(
            apiV1MiscFacebookComment400Error1Value);
        else if (TryGetApiV1MiscFacebookComment401Error1(
            out var apiV1MiscFacebookComment401Error1Value)) onApiV1MiscFacebookComment401Error1(
            apiV1MiscFacebookComment401Error1Value);
        else if (TryGetApiV1MiscFacebookComment403Error1(
            out var apiV1MiscFacebookComment403Error1Value)) onApiV1MiscFacebookComment403Error1(
            apiV1MiscFacebookComment403Error1Value);
        else if (TryGetApiV1MiscFacebookComment404Error1(
            out var apiV1MiscFacebookComment404Error1Value)) onApiV1MiscFacebookComment404Error1(
            apiV1MiscFacebookComment404Error1Value);
        else if (TryGetApiV1MiscFacebookComment429Error1(
            out var apiV1MiscFacebookComment429Error1Value)) onApiV1MiscFacebookComment429Error1(
            apiV1MiscFacebookComment429Error1Value);
        else if (TryGetApiV1MiscFacebookComment500Error1(
            out var apiV1MiscFacebookComment500Error1Value)) onApiV1MiscFacebookComment500Error1(
            apiV1MiscFacebookComment500Error1Value);
        else if (TryGetApiV1MiscFacebookComment502Error1(
            out var apiV1MiscFacebookComment502Error1Value)) onApiV1MiscFacebookComment502Error1(
            apiV1MiscFacebookComment502Error1Value);
        else if (TryGetApiV1MiscFacebookComment503Error1(
            out var apiV1MiscFacebookComment503Error1Value)) onApiV1MiscFacebookComment503Error1(
            apiV1MiscFacebookComment503Error1Value);
        else if (TryGetApiV1MiscFacebookComment504Error1(
            out var apiV1MiscFacebookComment504Error1Value)) onApiV1MiscFacebookComment504Error1(
            apiV1MiscFacebookComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookDeleteCommentError)} holds no value.");
    }

    private static Task<MiscFacebookDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookComment400Error1>().As(AsApiV1MiscFacebookComment400Error1),
            401 => response.Json<ApiV1MiscFacebookComment401Error1>().As(AsApiV1MiscFacebookComment401Error1),
            403 => response.Json<ApiV1MiscFacebookComment403Error1>().As(AsApiV1MiscFacebookComment403Error1),
            404 => response.Json<ApiV1MiscFacebookComment404Error1>().As(AsApiV1MiscFacebookComment404Error1),
            429 => response.Json<ApiV1MiscFacebookComment429Error1>().As(AsApiV1MiscFacebookComment429Error1),
            500 => response.Json<ApiV1MiscFacebookComment500Error1>().As(AsApiV1MiscFacebookComment500Error1),
            502 => response.Json<ApiV1MiscFacebookComment502Error1>().As(AsApiV1MiscFacebookComment502Error1),
            503 => response.Json<ApiV1MiscFacebookComment503Error1>().As(AsApiV1MiscFacebookComment503Error1),
            504 => response.Json<ApiV1MiscFacebookComment504Error1>().As(AsApiV1MiscFacebookComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookDeleteCommentError> Response { get; } = new(Create);
}
