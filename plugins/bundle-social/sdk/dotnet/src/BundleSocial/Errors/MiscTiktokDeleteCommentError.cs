using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTiktokDeleteCommentError : ApiError
{
    private readonly Optional<ApiV1MiscTiktokComment400Error1> _apiV1MiscTiktokComment400Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment401Error1> _apiV1MiscTiktokComment401Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment403Error1> _apiV1MiscTiktokComment403Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment404Error1> _apiV1MiscTiktokComment404Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment429Error1> _apiV1MiscTiktokComment429Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment500Error1> _apiV1MiscTiktokComment500Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment502Error1> _apiV1MiscTiktokComment502Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment503Error1> _apiV1MiscTiktokComment503Error1Value;

    private readonly Optional<ApiV1MiscTiktokComment504Error1> _apiV1MiscTiktokComment504Error1Value;

    private MiscTiktokDeleteCommentError(Optional<ApiV1MiscTiktokComment400Error1> apiV1MiscTiktokComment400Error1Value,
        Optional<ApiV1MiscTiktokComment401Error1> apiV1MiscTiktokComment401Error1Value,
        Optional<ApiV1MiscTiktokComment403Error1> apiV1MiscTiktokComment403Error1Value,
        Optional<ApiV1MiscTiktokComment404Error1> apiV1MiscTiktokComment404Error1Value,
        Optional<ApiV1MiscTiktokComment429Error1> apiV1MiscTiktokComment429Error1Value,
        Optional<ApiV1MiscTiktokComment500Error1> apiV1MiscTiktokComment500Error1Value,
        Optional<ApiV1MiscTiktokComment502Error1> apiV1MiscTiktokComment502Error1Value,
        Optional<ApiV1MiscTiktokComment503Error1> apiV1MiscTiktokComment503Error1Value,
        Optional<ApiV1MiscTiktokComment504Error1> apiV1MiscTiktokComment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTiktokComment400Error1Value = apiV1MiscTiktokComment400Error1Value;
        _apiV1MiscTiktokComment401Error1Value = apiV1MiscTiktokComment401Error1Value;
        _apiV1MiscTiktokComment403Error1Value = apiV1MiscTiktokComment403Error1Value;
        _apiV1MiscTiktokComment404Error1Value = apiV1MiscTiktokComment404Error1Value;
        _apiV1MiscTiktokComment429Error1Value = apiV1MiscTiktokComment429Error1Value;
        _apiV1MiscTiktokComment500Error1Value = apiV1MiscTiktokComment500Error1Value;
        _apiV1MiscTiktokComment502Error1Value = apiV1MiscTiktokComment502Error1Value;
        _apiV1MiscTiktokComment503Error1Value = apiV1MiscTiktokComment503Error1Value;
        _apiV1MiscTiktokComment504Error1Value = apiV1MiscTiktokComment504Error1Value;
    }

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment400Error1(ApiV1MiscTiktokComment400Error1 value) =>
        new(
            Optional<ApiV1MiscTiktokComment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment401Error1(ApiV1MiscTiktokComment401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTiktokComment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment403Error1(ApiV1MiscTiktokComment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTiktokComment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment404Error1(ApiV1MiscTiktokComment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment429Error1(ApiV1MiscTiktokComment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment500Error1(ApiV1MiscTiktokComment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment502Error1(ApiV1MiscTiktokComment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment503Error1(ApiV1MiscTiktokComment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment503Error1>.Some(value),
            default,
            default);

    private static MiscTiktokDeleteCommentError AsApiV1MiscTiktokComment504Error1(ApiV1MiscTiktokComment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokComment504Error1>.Some(value),
            default);

    private static MiscTiktokDeleteCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTiktokComment400Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment400Error1? value) =>
        _apiV1MiscTiktokComment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment401Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment401Error1? value) =>
        _apiV1MiscTiktokComment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment403Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment403Error1? value) =>
        _apiV1MiscTiktokComment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment404Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment404Error1? value) =>
        _apiV1MiscTiktokComment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment429Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment429Error1? value) =>
        _apiV1MiscTiktokComment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment500Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment500Error1? value) =>
        _apiV1MiscTiktokComment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment502Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment502Error1? value) =>
        _apiV1MiscTiktokComment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment503Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment503Error1? value) =>
        _apiV1MiscTiktokComment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokComment504Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment504Error1? value) =>
        _apiV1MiscTiktokComment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTiktokComment400Error1, TResult> onApiV1MiscTiktokComment400Error1,
        Func<ApiV1MiscTiktokComment401Error1, TResult> onApiV1MiscTiktokComment401Error1,
        Func<ApiV1MiscTiktokComment403Error1, TResult> onApiV1MiscTiktokComment403Error1,
        Func<ApiV1MiscTiktokComment404Error1, TResult> onApiV1MiscTiktokComment404Error1,
        Func<ApiV1MiscTiktokComment429Error1, TResult> onApiV1MiscTiktokComment429Error1,
        Func<ApiV1MiscTiktokComment500Error1, TResult> onApiV1MiscTiktokComment500Error1,
        Func<ApiV1MiscTiktokComment502Error1, TResult> onApiV1MiscTiktokComment502Error1,
        Func<ApiV1MiscTiktokComment503Error1, TResult> onApiV1MiscTiktokComment503Error1,
        Func<ApiV1MiscTiktokComment504Error1, TResult> onApiV1MiscTiktokComment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTiktokComment400Error1(
                out var apiV1MiscTiktokComment400Error1Value) => onApiV1MiscTiktokComment400Error1(
                apiV1MiscTiktokComment400Error1Value),
            _ when TryGetApiV1MiscTiktokComment401Error1(
                out var apiV1MiscTiktokComment401Error1Value) => onApiV1MiscTiktokComment401Error1(
                apiV1MiscTiktokComment401Error1Value),
            _ when TryGetApiV1MiscTiktokComment403Error1(
                out var apiV1MiscTiktokComment403Error1Value) => onApiV1MiscTiktokComment403Error1(
                apiV1MiscTiktokComment403Error1Value),
            _ when TryGetApiV1MiscTiktokComment404Error1(
                out var apiV1MiscTiktokComment404Error1Value) => onApiV1MiscTiktokComment404Error1(
                apiV1MiscTiktokComment404Error1Value),
            _ when TryGetApiV1MiscTiktokComment429Error1(
                out var apiV1MiscTiktokComment429Error1Value) => onApiV1MiscTiktokComment429Error1(
                apiV1MiscTiktokComment429Error1Value),
            _ when TryGetApiV1MiscTiktokComment500Error1(
                out var apiV1MiscTiktokComment500Error1Value) => onApiV1MiscTiktokComment500Error1(
                apiV1MiscTiktokComment500Error1Value),
            _ when TryGetApiV1MiscTiktokComment502Error1(
                out var apiV1MiscTiktokComment502Error1Value) => onApiV1MiscTiktokComment502Error1(
                apiV1MiscTiktokComment502Error1Value),
            _ when TryGetApiV1MiscTiktokComment503Error1(
                out var apiV1MiscTiktokComment503Error1Value) => onApiV1MiscTiktokComment503Error1(
                apiV1MiscTiktokComment503Error1Value),
            _ when TryGetApiV1MiscTiktokComment504Error1(
                out var apiV1MiscTiktokComment504Error1Value) => onApiV1MiscTiktokComment504Error1(
                apiV1MiscTiktokComment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTiktokDeleteCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTiktokComment400Error1> onApiV1MiscTiktokComment400Error1,
        Action<ApiV1MiscTiktokComment401Error1> onApiV1MiscTiktokComment401Error1,
        Action<ApiV1MiscTiktokComment403Error1> onApiV1MiscTiktokComment403Error1,
        Action<ApiV1MiscTiktokComment404Error1> onApiV1MiscTiktokComment404Error1,
        Action<ApiV1MiscTiktokComment429Error1> onApiV1MiscTiktokComment429Error1,
        Action<ApiV1MiscTiktokComment500Error1> onApiV1MiscTiktokComment500Error1,
        Action<ApiV1MiscTiktokComment502Error1> onApiV1MiscTiktokComment502Error1,
        Action<ApiV1MiscTiktokComment503Error1> onApiV1MiscTiktokComment503Error1,
        Action<ApiV1MiscTiktokComment504Error1> onApiV1MiscTiktokComment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTiktokComment400Error1(
            out var apiV1MiscTiktokComment400Error1Value)) onApiV1MiscTiktokComment400Error1(
            apiV1MiscTiktokComment400Error1Value);
        else if (TryGetApiV1MiscTiktokComment401Error1(
            out var apiV1MiscTiktokComment401Error1Value)) onApiV1MiscTiktokComment401Error1(
            apiV1MiscTiktokComment401Error1Value);
        else if (TryGetApiV1MiscTiktokComment403Error1(
            out var apiV1MiscTiktokComment403Error1Value)) onApiV1MiscTiktokComment403Error1(
            apiV1MiscTiktokComment403Error1Value);
        else if (TryGetApiV1MiscTiktokComment404Error1(
            out var apiV1MiscTiktokComment404Error1Value)) onApiV1MiscTiktokComment404Error1(
            apiV1MiscTiktokComment404Error1Value);
        else if (TryGetApiV1MiscTiktokComment429Error1(
            out var apiV1MiscTiktokComment429Error1Value)) onApiV1MiscTiktokComment429Error1(
            apiV1MiscTiktokComment429Error1Value);
        else if (TryGetApiV1MiscTiktokComment500Error1(
            out var apiV1MiscTiktokComment500Error1Value)) onApiV1MiscTiktokComment500Error1(
            apiV1MiscTiktokComment500Error1Value);
        else if (TryGetApiV1MiscTiktokComment502Error1(
            out var apiV1MiscTiktokComment502Error1Value)) onApiV1MiscTiktokComment502Error1(
            apiV1MiscTiktokComment502Error1Value);
        else if (TryGetApiV1MiscTiktokComment503Error1(
            out var apiV1MiscTiktokComment503Error1Value)) onApiV1MiscTiktokComment503Error1(
            apiV1MiscTiktokComment503Error1Value);
        else if (TryGetApiV1MiscTiktokComment504Error1(
            out var apiV1MiscTiktokComment504Error1Value)) onApiV1MiscTiktokComment504Error1(
            apiV1MiscTiktokComment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTiktokDeleteCommentError)} holds no value.");
    }

    private static Task<MiscTiktokDeleteCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTiktokComment400Error1>().As(AsApiV1MiscTiktokComment400Error1),
            401 => response.Json<ApiV1MiscTiktokComment401Error1>().As(AsApiV1MiscTiktokComment401Error1),
            403 => response.Json<ApiV1MiscTiktokComment403Error1>().As(AsApiV1MiscTiktokComment403Error1),
            404 => response.Json<ApiV1MiscTiktokComment404Error1>().As(AsApiV1MiscTiktokComment404Error1),
            429 => response.Json<ApiV1MiscTiktokComment429Error1>().As(AsApiV1MiscTiktokComment429Error1),
            500 => response.Json<ApiV1MiscTiktokComment500Error1>().As(AsApiV1MiscTiktokComment500Error1),
            502 => response.Json<ApiV1MiscTiktokComment502Error1>().As(AsApiV1MiscTiktokComment502Error1),
            503 => response.Json<ApiV1MiscTiktokComment503Error1>().As(AsApiV1MiscTiktokComment503Error1),
            504 => response.Json<ApiV1MiscTiktokComment504Error1>().As(AsApiV1MiscTiktokComment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTiktokDeleteCommentError> Response { get; } = new(Create);
}
