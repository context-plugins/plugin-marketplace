using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CommentImportActionFetchedCommentError : ApiError
{
    private readonly Optional<ApiV1CommentImportCommentsAction400Error1> _apiV1CommentImportCommentsAction400Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction401Error1> _apiV1CommentImportCommentsAction401Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction403Error1> _apiV1CommentImportCommentsAction403Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction404Error1> _apiV1CommentImportCommentsAction404Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction429Error1> _apiV1CommentImportCommentsAction429Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction500Error1> _apiV1CommentImportCommentsAction500Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction502Error1> _apiV1CommentImportCommentsAction502Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction503Error1> _apiV1CommentImportCommentsAction503Error1Value;

    private readonly Optional<ApiV1CommentImportCommentsAction504Error1> _apiV1CommentImportCommentsAction504Error1Value;

    private CommentImportActionFetchedCommentError(Optional<ApiV1CommentImportCommentsAction400Error1> apiV1CommentImportCommentsAction400Error1Value,
        Optional<ApiV1CommentImportCommentsAction401Error1> apiV1CommentImportCommentsAction401Error1Value,
        Optional<ApiV1CommentImportCommentsAction403Error1> apiV1CommentImportCommentsAction403Error1Value,
        Optional<ApiV1CommentImportCommentsAction404Error1> apiV1CommentImportCommentsAction404Error1Value,
        Optional<ApiV1CommentImportCommentsAction429Error1> apiV1CommentImportCommentsAction429Error1Value,
        Optional<ApiV1CommentImportCommentsAction500Error1> apiV1CommentImportCommentsAction500Error1Value,
        Optional<ApiV1CommentImportCommentsAction502Error1> apiV1CommentImportCommentsAction502Error1Value,
        Optional<ApiV1CommentImportCommentsAction503Error1> apiV1CommentImportCommentsAction503Error1Value,
        Optional<ApiV1CommentImportCommentsAction504Error1> apiV1CommentImportCommentsAction504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CommentImportCommentsAction400Error1Value = apiV1CommentImportCommentsAction400Error1Value;
        _apiV1CommentImportCommentsAction401Error1Value = apiV1CommentImportCommentsAction401Error1Value;
        _apiV1CommentImportCommentsAction403Error1Value = apiV1CommentImportCommentsAction403Error1Value;
        _apiV1CommentImportCommentsAction404Error1Value = apiV1CommentImportCommentsAction404Error1Value;
        _apiV1CommentImportCommentsAction429Error1Value = apiV1CommentImportCommentsAction429Error1Value;
        _apiV1CommentImportCommentsAction500Error1Value = apiV1CommentImportCommentsAction500Error1Value;
        _apiV1CommentImportCommentsAction502Error1Value = apiV1CommentImportCommentsAction502Error1Value;
        _apiV1CommentImportCommentsAction503Error1Value = apiV1CommentImportCommentsAction503Error1Value;
        _apiV1CommentImportCommentsAction504Error1Value = apiV1CommentImportCommentsAction504Error1Value;
    }

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction400Error1(ApiV1CommentImportCommentsAction400Error1 value) =>
        new(
            Optional<ApiV1CommentImportCommentsAction400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction401Error1(ApiV1CommentImportCommentsAction401Error1 value) =>
        new(
            default,
            Optional<ApiV1CommentImportCommentsAction401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction403Error1(ApiV1CommentImportCommentsAction403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction404Error1(ApiV1CommentImportCommentsAction404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction429Error1(ApiV1CommentImportCommentsAction429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction500Error1(ApiV1CommentImportCommentsAction500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction502Error1(ApiV1CommentImportCommentsAction502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction502Error1>.Some(value),
            default,
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction503Error1(ApiV1CommentImportCommentsAction503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction503Error1>.Some(value),
            default,
            default);

    private static CommentImportActionFetchedCommentError AsApiV1CommentImportCommentsAction504Error1(ApiV1CommentImportCommentsAction504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportCommentsAction504Error1>.Some(value),
            default);

    private static CommentImportActionFetchedCommentError AsFallback(RawError value) =>
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

    public bool TryGetApiV1CommentImportCommentsAction400Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction400Error1? value) =>
        _apiV1CommentImportCommentsAction400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction401Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction401Error1? value) =>
        _apiV1CommentImportCommentsAction401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction403Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction403Error1? value) =>
        _apiV1CommentImportCommentsAction403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction404Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction404Error1? value) =>
        _apiV1CommentImportCommentsAction404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction429Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction429Error1? value) =>
        _apiV1CommentImportCommentsAction429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction500Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction500Error1? value) =>
        _apiV1CommentImportCommentsAction500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction502Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction502Error1? value) =>
        _apiV1CommentImportCommentsAction502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction503Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction503Error1? value) =>
        _apiV1CommentImportCommentsAction503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportCommentsAction504Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction504Error1? value) =>
        _apiV1CommentImportCommentsAction504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CommentImportCommentsAction400Error1, TResult> onApiV1CommentImportCommentsAction400Error1,
        Func<ApiV1CommentImportCommentsAction401Error1, TResult> onApiV1CommentImportCommentsAction401Error1,
        Func<ApiV1CommentImportCommentsAction403Error1, TResult> onApiV1CommentImportCommentsAction403Error1,
        Func<ApiV1CommentImportCommentsAction404Error1, TResult> onApiV1CommentImportCommentsAction404Error1,
        Func<ApiV1CommentImportCommentsAction429Error1, TResult> onApiV1CommentImportCommentsAction429Error1,
        Func<ApiV1CommentImportCommentsAction500Error1, TResult> onApiV1CommentImportCommentsAction500Error1,
        Func<ApiV1CommentImportCommentsAction502Error1, TResult> onApiV1CommentImportCommentsAction502Error1,
        Func<ApiV1CommentImportCommentsAction503Error1, TResult> onApiV1CommentImportCommentsAction503Error1,
        Func<ApiV1CommentImportCommentsAction504Error1, TResult> onApiV1CommentImportCommentsAction504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CommentImportCommentsAction400Error1(
                out var apiV1CommentImportCommentsAction400Error1Value) => onApiV1CommentImportCommentsAction400Error1(
                apiV1CommentImportCommentsAction400Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction401Error1(
                out var apiV1CommentImportCommentsAction401Error1Value) => onApiV1CommentImportCommentsAction401Error1(
                apiV1CommentImportCommentsAction401Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction403Error1(
                out var apiV1CommentImportCommentsAction403Error1Value) => onApiV1CommentImportCommentsAction403Error1(
                apiV1CommentImportCommentsAction403Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction404Error1(
                out var apiV1CommentImportCommentsAction404Error1Value) => onApiV1CommentImportCommentsAction404Error1(
                apiV1CommentImportCommentsAction404Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction429Error1(
                out var apiV1CommentImportCommentsAction429Error1Value) => onApiV1CommentImportCommentsAction429Error1(
                apiV1CommentImportCommentsAction429Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction500Error1(
                out var apiV1CommentImportCommentsAction500Error1Value) => onApiV1CommentImportCommentsAction500Error1(
                apiV1CommentImportCommentsAction500Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction502Error1(
                out var apiV1CommentImportCommentsAction502Error1Value) => onApiV1CommentImportCommentsAction502Error1(
                apiV1CommentImportCommentsAction502Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction503Error1(
                out var apiV1CommentImportCommentsAction503Error1Value) => onApiV1CommentImportCommentsAction503Error1(
                apiV1CommentImportCommentsAction503Error1Value),
            _ when TryGetApiV1CommentImportCommentsAction504Error1(
                out var apiV1CommentImportCommentsAction504Error1Value) => onApiV1CommentImportCommentsAction504Error1(
                apiV1CommentImportCommentsAction504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(CommentImportActionFetchedCommentError)} holds no value.")
        };

    public void Match(Action<ApiV1CommentImportCommentsAction400Error1> onApiV1CommentImportCommentsAction400Error1,
        Action<ApiV1CommentImportCommentsAction401Error1> onApiV1CommentImportCommentsAction401Error1,
        Action<ApiV1CommentImportCommentsAction403Error1> onApiV1CommentImportCommentsAction403Error1,
        Action<ApiV1CommentImportCommentsAction404Error1> onApiV1CommentImportCommentsAction404Error1,
        Action<ApiV1CommentImportCommentsAction429Error1> onApiV1CommentImportCommentsAction429Error1,
        Action<ApiV1CommentImportCommentsAction500Error1> onApiV1CommentImportCommentsAction500Error1,
        Action<ApiV1CommentImportCommentsAction502Error1> onApiV1CommentImportCommentsAction502Error1,
        Action<ApiV1CommentImportCommentsAction503Error1> onApiV1CommentImportCommentsAction503Error1,
        Action<ApiV1CommentImportCommentsAction504Error1> onApiV1CommentImportCommentsAction504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CommentImportCommentsAction400Error1(
            out var apiV1CommentImportCommentsAction400Error1Value)) onApiV1CommentImportCommentsAction400Error1(
            apiV1CommentImportCommentsAction400Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction401Error1(
            out var apiV1CommentImportCommentsAction401Error1Value)) onApiV1CommentImportCommentsAction401Error1(
            apiV1CommentImportCommentsAction401Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction403Error1(
            out var apiV1CommentImportCommentsAction403Error1Value)) onApiV1CommentImportCommentsAction403Error1(
            apiV1CommentImportCommentsAction403Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction404Error1(
            out var apiV1CommentImportCommentsAction404Error1Value)) onApiV1CommentImportCommentsAction404Error1(
            apiV1CommentImportCommentsAction404Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction429Error1(
            out var apiV1CommentImportCommentsAction429Error1Value)) onApiV1CommentImportCommentsAction429Error1(
            apiV1CommentImportCommentsAction429Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction500Error1(
            out var apiV1CommentImportCommentsAction500Error1Value)) onApiV1CommentImportCommentsAction500Error1(
            apiV1CommentImportCommentsAction500Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction502Error1(
            out var apiV1CommentImportCommentsAction502Error1Value)) onApiV1CommentImportCommentsAction502Error1(
            apiV1CommentImportCommentsAction502Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction503Error1(
            out var apiV1CommentImportCommentsAction503Error1Value)) onApiV1CommentImportCommentsAction503Error1(
            apiV1CommentImportCommentsAction503Error1Value);
        else if (TryGetApiV1CommentImportCommentsAction504Error1(
            out var apiV1CommentImportCommentsAction504Error1Value)) onApiV1CommentImportCommentsAction504Error1(
            apiV1CommentImportCommentsAction504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CommentImportActionFetchedCommentError)} holds no value.");
    }

    private static Task<CommentImportActionFetchedCommentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1CommentImportCommentsAction400Error1>().As(
                AsApiV1CommentImportCommentsAction400Error1),
            401 => response.Json<ApiV1CommentImportCommentsAction401Error1>().As(
                AsApiV1CommentImportCommentsAction401Error1),
            403 => response.Json<ApiV1CommentImportCommentsAction403Error1>().As(
                AsApiV1CommentImportCommentsAction403Error1),
            404 => response.Json<ApiV1CommentImportCommentsAction404Error1>().As(
                AsApiV1CommentImportCommentsAction404Error1),
            429 => response.Json<ApiV1CommentImportCommentsAction429Error1>().As(
                AsApiV1CommentImportCommentsAction429Error1),
            500 => response.Json<ApiV1CommentImportCommentsAction500Error1>().As(
                AsApiV1CommentImportCommentsAction500Error1),
            502 => response.Json<ApiV1CommentImportCommentsAction502Error1>().As(
                AsApiV1CommentImportCommentsAction502Error1),
            503 => response.Json<ApiV1CommentImportCommentsAction503Error1>().As(
                AsApiV1CommentImportCommentsAction503Error1),
            504 => response.Json<ApiV1CommentImportCommentsAction504Error1>().As(
                AsApiV1CommentImportCommentsAction504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CommentImportActionFetchedCommentError> Response { get; } = new(Create);
}
