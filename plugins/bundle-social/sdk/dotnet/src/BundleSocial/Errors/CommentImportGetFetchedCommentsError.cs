using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CommentImportGetFetchedCommentsError : ApiError
{
    private readonly Optional<ApiV1CommentImportComments400Error1> _apiV1CommentImportComments400Error1Value;

    private readonly Optional<ApiV1CommentImportComments401Error1> _apiV1CommentImportComments401Error1Value;

    private readonly Optional<ApiV1CommentImportComments403Error1> _apiV1CommentImportComments403Error1Value;

    private readonly Optional<ApiV1CommentImportComments404Error1> _apiV1CommentImportComments404Error1Value;

    private readonly Optional<ApiV1CommentImportComments429Error1> _apiV1CommentImportComments429Error1Value;

    private readonly Optional<ApiV1CommentImportComments500Error1> _apiV1CommentImportComments500Error1Value;

    private readonly Optional<ApiV1CommentImportComments502Error1> _apiV1CommentImportComments502Error1Value;

    private readonly Optional<ApiV1CommentImportComments503Error1> _apiV1CommentImportComments503Error1Value;

    private readonly Optional<ApiV1CommentImportComments504Error1> _apiV1CommentImportComments504Error1Value;

    private CommentImportGetFetchedCommentsError(Optional<ApiV1CommentImportComments400Error1> apiV1CommentImportComments400Error1Value,
        Optional<ApiV1CommentImportComments401Error1> apiV1CommentImportComments401Error1Value,
        Optional<ApiV1CommentImportComments403Error1> apiV1CommentImportComments403Error1Value,
        Optional<ApiV1CommentImportComments404Error1> apiV1CommentImportComments404Error1Value,
        Optional<ApiV1CommentImportComments429Error1> apiV1CommentImportComments429Error1Value,
        Optional<ApiV1CommentImportComments500Error1> apiV1CommentImportComments500Error1Value,
        Optional<ApiV1CommentImportComments502Error1> apiV1CommentImportComments502Error1Value,
        Optional<ApiV1CommentImportComments503Error1> apiV1CommentImportComments503Error1Value,
        Optional<ApiV1CommentImportComments504Error1> apiV1CommentImportComments504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CommentImportComments400Error1Value = apiV1CommentImportComments400Error1Value;
        _apiV1CommentImportComments401Error1Value = apiV1CommentImportComments401Error1Value;
        _apiV1CommentImportComments403Error1Value = apiV1CommentImportComments403Error1Value;
        _apiV1CommentImportComments404Error1Value = apiV1CommentImportComments404Error1Value;
        _apiV1CommentImportComments429Error1Value = apiV1CommentImportComments429Error1Value;
        _apiV1CommentImportComments500Error1Value = apiV1CommentImportComments500Error1Value;
        _apiV1CommentImportComments502Error1Value = apiV1CommentImportComments502Error1Value;
        _apiV1CommentImportComments503Error1Value = apiV1CommentImportComments503Error1Value;
        _apiV1CommentImportComments504Error1Value = apiV1CommentImportComments504Error1Value;
    }

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments400Error1(ApiV1CommentImportComments400Error1 value) =>
        new(
            Optional<ApiV1CommentImportComments400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments401Error1(ApiV1CommentImportComments401Error1 value) =>
        new(
            default,
            Optional<ApiV1CommentImportComments401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments403Error1(ApiV1CommentImportComments403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1CommentImportComments403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments404Error1(ApiV1CommentImportComments404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments429Error1(ApiV1CommentImportComments429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments500Error1(ApiV1CommentImportComments500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments502Error1(ApiV1CommentImportComments502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments502Error1>.Some(value),
            default,
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments503Error1(ApiV1CommentImportComments503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments503Error1>.Some(value),
            default,
            default);

    private static CommentImportGetFetchedCommentsError AsApiV1CommentImportComments504Error1(ApiV1CommentImportComments504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1CommentImportComments504Error1>.Some(value),
            default);

    private static CommentImportGetFetchedCommentsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1CommentImportComments400Error1([NotNullWhen(true)] out ApiV1CommentImportComments400Error1? value) =>
        _apiV1CommentImportComments400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments401Error1([NotNullWhen(true)] out ApiV1CommentImportComments401Error1? value) =>
        _apiV1CommentImportComments401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments403Error1([NotNullWhen(true)] out ApiV1CommentImportComments403Error1? value) =>
        _apiV1CommentImportComments403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments404Error1([NotNullWhen(true)] out ApiV1CommentImportComments404Error1? value) =>
        _apiV1CommentImportComments404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments429Error1([NotNullWhen(true)] out ApiV1CommentImportComments429Error1? value) =>
        _apiV1CommentImportComments429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments500Error1([NotNullWhen(true)] out ApiV1CommentImportComments500Error1? value) =>
        _apiV1CommentImportComments500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments502Error1([NotNullWhen(true)] out ApiV1CommentImportComments502Error1? value) =>
        _apiV1CommentImportComments502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments503Error1([NotNullWhen(true)] out ApiV1CommentImportComments503Error1? value) =>
        _apiV1CommentImportComments503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1CommentImportComments504Error1([NotNullWhen(true)] out ApiV1CommentImportComments504Error1? value) =>
        _apiV1CommentImportComments504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CommentImportComments400Error1, TResult> onApiV1CommentImportComments400Error1,
        Func<ApiV1CommentImportComments401Error1, TResult> onApiV1CommentImportComments401Error1,
        Func<ApiV1CommentImportComments403Error1, TResult> onApiV1CommentImportComments403Error1,
        Func<ApiV1CommentImportComments404Error1, TResult> onApiV1CommentImportComments404Error1,
        Func<ApiV1CommentImportComments429Error1, TResult> onApiV1CommentImportComments429Error1,
        Func<ApiV1CommentImportComments500Error1, TResult> onApiV1CommentImportComments500Error1,
        Func<ApiV1CommentImportComments502Error1, TResult> onApiV1CommentImportComments502Error1,
        Func<ApiV1CommentImportComments503Error1, TResult> onApiV1CommentImportComments503Error1,
        Func<ApiV1CommentImportComments504Error1, TResult> onApiV1CommentImportComments504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CommentImportComments400Error1(
                out var apiV1CommentImportComments400Error1Value) => onApiV1CommentImportComments400Error1(
                apiV1CommentImportComments400Error1Value),
            _ when TryGetApiV1CommentImportComments401Error1(
                out var apiV1CommentImportComments401Error1Value) => onApiV1CommentImportComments401Error1(
                apiV1CommentImportComments401Error1Value),
            _ when TryGetApiV1CommentImportComments403Error1(
                out var apiV1CommentImportComments403Error1Value) => onApiV1CommentImportComments403Error1(
                apiV1CommentImportComments403Error1Value),
            _ when TryGetApiV1CommentImportComments404Error1(
                out var apiV1CommentImportComments404Error1Value) => onApiV1CommentImportComments404Error1(
                apiV1CommentImportComments404Error1Value),
            _ when TryGetApiV1CommentImportComments429Error1(
                out var apiV1CommentImportComments429Error1Value) => onApiV1CommentImportComments429Error1(
                apiV1CommentImportComments429Error1Value),
            _ when TryGetApiV1CommentImportComments500Error1(
                out var apiV1CommentImportComments500Error1Value) => onApiV1CommentImportComments500Error1(
                apiV1CommentImportComments500Error1Value),
            _ when TryGetApiV1CommentImportComments502Error1(
                out var apiV1CommentImportComments502Error1Value) => onApiV1CommentImportComments502Error1(
                apiV1CommentImportComments502Error1Value),
            _ when TryGetApiV1CommentImportComments503Error1(
                out var apiV1CommentImportComments503Error1Value) => onApiV1CommentImportComments503Error1(
                apiV1CommentImportComments503Error1Value),
            _ when TryGetApiV1CommentImportComments504Error1(
                out var apiV1CommentImportComments504Error1Value) => onApiV1CommentImportComments504Error1(
                apiV1CommentImportComments504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CommentImportGetFetchedCommentsError)} holds no value.")
        };

    public void Match(Action<ApiV1CommentImportComments400Error1> onApiV1CommentImportComments400Error1,
        Action<ApiV1CommentImportComments401Error1> onApiV1CommentImportComments401Error1,
        Action<ApiV1CommentImportComments403Error1> onApiV1CommentImportComments403Error1,
        Action<ApiV1CommentImportComments404Error1> onApiV1CommentImportComments404Error1,
        Action<ApiV1CommentImportComments429Error1> onApiV1CommentImportComments429Error1,
        Action<ApiV1CommentImportComments500Error1> onApiV1CommentImportComments500Error1,
        Action<ApiV1CommentImportComments502Error1> onApiV1CommentImportComments502Error1,
        Action<ApiV1CommentImportComments503Error1> onApiV1CommentImportComments503Error1,
        Action<ApiV1CommentImportComments504Error1> onApiV1CommentImportComments504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CommentImportComments400Error1(
            out var apiV1CommentImportComments400Error1Value)) onApiV1CommentImportComments400Error1(
            apiV1CommentImportComments400Error1Value);
        else if (TryGetApiV1CommentImportComments401Error1(
            out var apiV1CommentImportComments401Error1Value)) onApiV1CommentImportComments401Error1(
            apiV1CommentImportComments401Error1Value);
        else if (TryGetApiV1CommentImportComments403Error1(
            out var apiV1CommentImportComments403Error1Value)) onApiV1CommentImportComments403Error1(
            apiV1CommentImportComments403Error1Value);
        else if (TryGetApiV1CommentImportComments404Error1(
            out var apiV1CommentImportComments404Error1Value)) onApiV1CommentImportComments404Error1(
            apiV1CommentImportComments404Error1Value);
        else if (TryGetApiV1CommentImportComments429Error1(
            out var apiV1CommentImportComments429Error1Value)) onApiV1CommentImportComments429Error1(
            apiV1CommentImportComments429Error1Value);
        else if (TryGetApiV1CommentImportComments500Error1(
            out var apiV1CommentImportComments500Error1Value)) onApiV1CommentImportComments500Error1(
            apiV1CommentImportComments500Error1Value);
        else if (TryGetApiV1CommentImportComments502Error1(
            out var apiV1CommentImportComments502Error1Value)) onApiV1CommentImportComments502Error1(
            apiV1CommentImportComments502Error1Value);
        else if (TryGetApiV1CommentImportComments503Error1(
            out var apiV1CommentImportComments503Error1Value)) onApiV1CommentImportComments503Error1(
            apiV1CommentImportComments503Error1Value);
        else if (TryGetApiV1CommentImportComments504Error1(
            out var apiV1CommentImportComments504Error1Value)) onApiV1CommentImportComments504Error1(
            apiV1CommentImportComments504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CommentImportGetFetchedCommentsError)} holds no value.");
    }

    private static Task<CommentImportGetFetchedCommentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1CommentImportComments400Error1>().As(AsApiV1CommentImportComments400Error1),
            401 => response.Json<ApiV1CommentImportComments401Error1>().As(AsApiV1CommentImportComments401Error1),
            403 => response.Json<ApiV1CommentImportComments403Error1>().As(AsApiV1CommentImportComments403Error1),
            404 => response.Json<ApiV1CommentImportComments404Error1>().As(AsApiV1CommentImportComments404Error1),
            429 => response.Json<ApiV1CommentImportComments429Error1>().As(AsApiV1CommentImportComments429Error1),
            500 => response.Json<ApiV1CommentImportComments500Error1>().As(AsApiV1CommentImportComments500Error1),
            502 => response.Json<ApiV1CommentImportComments502Error1>().As(AsApiV1CommentImportComments502Error1),
            503 => response.Json<ApiV1CommentImportComments503Error1>().As(AsApiV1CommentImportComments503Error1),
            504 => response.Json<ApiV1CommentImportComments504Error1>().As(AsApiV1CommentImportComments504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CommentImportGetFetchedCommentsError> Response { get; } = new(Create);
}
