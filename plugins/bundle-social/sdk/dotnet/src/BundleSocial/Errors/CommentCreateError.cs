using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class CommentCreateError : ApiError
{
    private readonly Optional<ApiV1Comment400Error1> _apiV1Comment400Error1Value;

    private readonly Optional<ApiV1Comment401Error1> _apiV1Comment401Error1Value;

    private readonly Optional<ApiV1Comment403Error1> _apiV1Comment403Error1Value;

    private readonly Optional<ApiV1Comment404Error1> _apiV1Comment404Error1Value;

    private readonly Optional<ApiV1Comment429Error1> _apiV1Comment429Error1Value;

    private readonly Optional<ApiV1Comment500Error1> _apiV1Comment500Error1Value;

    private readonly Optional<ApiV1Comment502Error1> _apiV1Comment502Error1Value;

    private readonly Optional<ApiV1Comment503Error1> _apiV1Comment503Error1Value;

    private readonly Optional<ApiV1Comment504Error1> _apiV1Comment504Error1Value;

    private CommentCreateError(Optional<ApiV1Comment400Error1> apiV1Comment400Error1Value,
        Optional<ApiV1Comment401Error1> apiV1Comment401Error1Value,
        Optional<ApiV1Comment403Error1> apiV1Comment403Error1Value,
        Optional<ApiV1Comment404Error1> apiV1Comment404Error1Value,
        Optional<ApiV1Comment429Error1> apiV1Comment429Error1Value,
        Optional<ApiV1Comment500Error1> apiV1Comment500Error1Value,
        Optional<ApiV1Comment502Error1> apiV1Comment502Error1Value,
        Optional<ApiV1Comment503Error1> apiV1Comment503Error1Value,
        Optional<ApiV1Comment504Error1> apiV1Comment504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Comment400Error1Value = apiV1Comment400Error1Value;
        _apiV1Comment401Error1Value = apiV1Comment401Error1Value;
        _apiV1Comment403Error1Value = apiV1Comment403Error1Value;
        _apiV1Comment404Error1Value = apiV1Comment404Error1Value;
        _apiV1Comment429Error1Value = apiV1Comment429Error1Value;
        _apiV1Comment500Error1Value = apiV1Comment500Error1Value;
        _apiV1Comment502Error1Value = apiV1Comment502Error1Value;
        _apiV1Comment503Error1Value = apiV1Comment503Error1Value;
        _apiV1Comment504Error1Value = apiV1Comment504Error1Value;
    }

    private static CommentCreateError AsApiV1Comment400Error1(ApiV1Comment400Error1 value) =>
        new(
            Optional<ApiV1Comment400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment401Error1(ApiV1Comment401Error1 value) =>
        new(
            default,
            Optional<ApiV1Comment401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment403Error1(ApiV1Comment403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Comment403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment404Error1(ApiV1Comment404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Comment404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment429Error1(ApiV1Comment429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Comment429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment500Error1(ApiV1Comment500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Comment500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment502Error1(ApiV1Comment502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Comment502Error1>.Some(value),
            default,
            default,
            default);

    private static CommentCreateError AsApiV1Comment503Error1(ApiV1Comment503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Comment503Error1>.Some(value),
            default,
            default);

    private static CommentCreateError AsApiV1Comment504Error1(ApiV1Comment504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Comment504Error1>.Some(value),
            default);

    private static CommentCreateError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value) =>
        _apiV1Comment400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value) =>
        _apiV1Comment401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value) =>
        _apiV1Comment403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value) =>
        _apiV1Comment404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value) =>
        _apiV1Comment429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value) =>
        _apiV1Comment500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value) =>
        _apiV1Comment502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value) =>
        _apiV1Comment503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value) =>
        _apiV1Comment504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Comment400Error1, TResult> onApiV1Comment400Error1,
        Func<ApiV1Comment401Error1, TResult> onApiV1Comment401Error1,
        Func<ApiV1Comment403Error1, TResult> onApiV1Comment403Error1,
        Func<ApiV1Comment404Error1, TResult> onApiV1Comment404Error1,
        Func<ApiV1Comment429Error1, TResult> onApiV1Comment429Error1,
        Func<ApiV1Comment500Error1, TResult> onApiV1Comment500Error1,
        Func<ApiV1Comment502Error1, TResult> onApiV1Comment502Error1,
        Func<ApiV1Comment503Error1, TResult> onApiV1Comment503Error1,
        Func<ApiV1Comment504Error1, TResult> onApiV1Comment504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Comment400Error1(out var apiV1Comment400Error1Value) => onApiV1Comment400Error1(
                apiV1Comment400Error1Value),
            _ when TryGetApiV1Comment401Error1(out var apiV1Comment401Error1Value) => onApiV1Comment401Error1(
                apiV1Comment401Error1Value),
            _ when TryGetApiV1Comment403Error1(out var apiV1Comment403Error1Value) => onApiV1Comment403Error1(
                apiV1Comment403Error1Value),
            _ when TryGetApiV1Comment404Error1(out var apiV1Comment404Error1Value) => onApiV1Comment404Error1(
                apiV1Comment404Error1Value),
            _ when TryGetApiV1Comment429Error1(out var apiV1Comment429Error1Value) => onApiV1Comment429Error1(
                apiV1Comment429Error1Value),
            _ when TryGetApiV1Comment500Error1(out var apiV1Comment500Error1Value) => onApiV1Comment500Error1(
                apiV1Comment500Error1Value),
            _ when TryGetApiV1Comment502Error1(out var apiV1Comment502Error1Value) => onApiV1Comment502Error1(
                apiV1Comment502Error1Value),
            _ when TryGetApiV1Comment503Error1(out var apiV1Comment503Error1Value) => onApiV1Comment503Error1(
                apiV1Comment503Error1Value),
            _ when TryGetApiV1Comment504Error1(out var apiV1Comment504Error1Value) => onApiV1Comment504Error1(
                apiV1Comment504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CommentCreateError)} holds no value.")
        };

    public void Match(Action<ApiV1Comment400Error1> onApiV1Comment400Error1,
        Action<ApiV1Comment401Error1> onApiV1Comment401Error1,
        Action<ApiV1Comment403Error1> onApiV1Comment403Error1,
        Action<ApiV1Comment404Error1> onApiV1Comment404Error1,
        Action<ApiV1Comment429Error1> onApiV1Comment429Error1,
        Action<ApiV1Comment500Error1> onApiV1Comment500Error1,
        Action<ApiV1Comment502Error1> onApiV1Comment502Error1,
        Action<ApiV1Comment503Error1> onApiV1Comment503Error1,
        Action<ApiV1Comment504Error1> onApiV1Comment504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Comment400Error1(out var apiV1Comment400Error1Value)) onApiV1Comment400Error1(
            apiV1Comment400Error1Value);
        else if (TryGetApiV1Comment401Error1(out var apiV1Comment401Error1Value)) onApiV1Comment401Error1(
            apiV1Comment401Error1Value);
        else if (TryGetApiV1Comment403Error1(out var apiV1Comment403Error1Value)) onApiV1Comment403Error1(
            apiV1Comment403Error1Value);
        else if (TryGetApiV1Comment404Error1(out var apiV1Comment404Error1Value)) onApiV1Comment404Error1(
            apiV1Comment404Error1Value);
        else if (TryGetApiV1Comment429Error1(out var apiV1Comment429Error1Value)) onApiV1Comment429Error1(
            apiV1Comment429Error1Value);
        else if (TryGetApiV1Comment500Error1(out var apiV1Comment500Error1Value)) onApiV1Comment500Error1(
            apiV1Comment500Error1Value);
        else if (TryGetApiV1Comment502Error1(out var apiV1Comment502Error1Value)) onApiV1Comment502Error1(
            apiV1Comment502Error1Value);
        else if (TryGetApiV1Comment503Error1(out var apiV1Comment503Error1Value)) onApiV1Comment503Error1(
            apiV1Comment503Error1Value);
        else if (TryGetApiV1Comment504Error1(out var apiV1Comment504Error1Value)) onApiV1Comment504Error1(
            apiV1Comment504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CommentCreateError)} holds no value.");
    }

    private static Task<CommentCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Comment400Error1>().As(AsApiV1Comment400Error1),
            401 => response.Json<ApiV1Comment401Error1>().As(AsApiV1Comment401Error1),
            403 => response.Json<ApiV1Comment403Error1>().As(AsApiV1Comment403Error1),
            404 => response.Json<ApiV1Comment404Error1>().As(AsApiV1Comment404Error1),
            429 => response.Json<ApiV1Comment429Error1>().As(AsApiV1Comment429Error1),
            500 => response.Json<ApiV1Comment500Error1>().As(AsApiV1Comment500Error1),
            502 => response.Json<ApiV1Comment502Error1>().As(AsApiV1Comment502Error1),
            503 => response.Json<ApiV1Comment503Error1>().As(AsApiV1Comment503Error1),
            504 => response.Json<ApiV1Comment504Error1>().As(AsApiV1Comment504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CommentCreateError> Response { get; } = new(Create);
}
