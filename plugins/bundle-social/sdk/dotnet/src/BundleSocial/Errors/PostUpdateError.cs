using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostUpdateError : ApiError
{
    private readonly Optional<ApiV1Post400Error1> _apiV1Post400Error1Value;

    private readonly Optional<ApiV1Post401Error1> _apiV1Post401Error1Value;

    private readonly Optional<ApiV1Post403Error1> _apiV1Post403Error1Value;

    private readonly Optional<ApiV1Post404Error1> _apiV1Post404Error1Value;

    private readonly Optional<ApiV1Post409Error1> _apiV1Post409Error1Value;

    private readonly Optional<ApiV1Post429Error1> _apiV1Post429Error1Value;

    private readonly Optional<ApiV1Post500Error1> _apiV1Post500Error1Value;

    private readonly Optional<ApiV1Post502Error1> _apiV1Post502Error1Value;

    private readonly Optional<ApiV1Post503Error1> _apiV1Post503Error1Value;

    private readonly Optional<ApiV1Post504Error1> _apiV1Post504Error1Value;

    private PostUpdateError(Optional<ApiV1Post400Error1> apiV1Post400Error1Value,
        Optional<ApiV1Post401Error1> apiV1Post401Error1Value,
        Optional<ApiV1Post403Error1> apiV1Post403Error1Value,
        Optional<ApiV1Post404Error1> apiV1Post404Error1Value,
        Optional<ApiV1Post409Error1> apiV1Post409Error1Value,
        Optional<ApiV1Post429Error1> apiV1Post429Error1Value,
        Optional<ApiV1Post500Error1> apiV1Post500Error1Value,
        Optional<ApiV1Post502Error1> apiV1Post502Error1Value,
        Optional<ApiV1Post503Error1> apiV1Post503Error1Value,
        Optional<ApiV1Post504Error1> apiV1Post504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Post400Error1Value = apiV1Post400Error1Value;
        _apiV1Post401Error1Value = apiV1Post401Error1Value;
        _apiV1Post403Error1Value = apiV1Post403Error1Value;
        _apiV1Post404Error1Value = apiV1Post404Error1Value;
        _apiV1Post409Error1Value = apiV1Post409Error1Value;
        _apiV1Post429Error1Value = apiV1Post429Error1Value;
        _apiV1Post500Error1Value = apiV1Post500Error1Value;
        _apiV1Post502Error1Value = apiV1Post502Error1Value;
        _apiV1Post503Error1Value = apiV1Post503Error1Value;
        _apiV1Post504Error1Value = apiV1Post504Error1Value;
    }

    private static PostUpdateError AsApiV1Post400Error1(ApiV1Post400Error1 value) =>
        new(
            Optional<ApiV1Post400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post401Error1(ApiV1Post401Error1 value) =>
        new(
            default,
            Optional<ApiV1Post401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post403Error1(ApiV1Post403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Post403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post404Error1(ApiV1Post404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Post404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post409Error1(ApiV1Post409Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Post409Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post429Error1(ApiV1Post429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Post429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post500Error1(ApiV1Post500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Post500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post502Error1(ApiV1Post502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Post502Error1>.Some(value),
            default,
            default,
            default);

    private static PostUpdateError AsApiV1Post503Error1(ApiV1Post503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Post503Error1>.Some(value),
            default,
            default);

    private static PostUpdateError AsApiV1Post504Error1(ApiV1Post504Error1 value) =>
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
            Optional<ApiV1Post504Error1>.Some(value),
            default);

    private static PostUpdateError AsFallback(RawError value) =>
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
            default,
            Optional<RawError>.Some(value));

    public bool TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value) =>
        _apiV1Post400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value) =>
        _apiV1Post401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value) =>
        _apiV1Post403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value) =>
        _apiV1Post404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post409Error1([NotNullWhen(true)] out ApiV1Post409Error1? value) =>
        _apiV1Post409Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value) =>
        _apiV1Post429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value) =>
        _apiV1Post500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value) =>
        _apiV1Post502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value) =>
        _apiV1Post503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value) =>
        _apiV1Post504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Post400Error1, TResult> onApiV1Post400Error1,
        Func<ApiV1Post401Error1, TResult> onApiV1Post401Error1,
        Func<ApiV1Post403Error1, TResult> onApiV1Post403Error1,
        Func<ApiV1Post404Error1, TResult> onApiV1Post404Error1,
        Func<ApiV1Post409Error1, TResult> onApiV1Post409Error1,
        Func<ApiV1Post429Error1, TResult> onApiV1Post429Error1,
        Func<ApiV1Post500Error1, TResult> onApiV1Post500Error1,
        Func<ApiV1Post502Error1, TResult> onApiV1Post502Error1,
        Func<ApiV1Post503Error1, TResult> onApiV1Post503Error1,
        Func<ApiV1Post504Error1, TResult> onApiV1Post504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Post400Error1(out var apiV1Post400Error1Value) => onApiV1Post400Error1(
                apiV1Post400Error1Value),
            _ when TryGetApiV1Post401Error1(out var apiV1Post401Error1Value) => onApiV1Post401Error1(
                apiV1Post401Error1Value),
            _ when TryGetApiV1Post403Error1(out var apiV1Post403Error1Value) => onApiV1Post403Error1(
                apiV1Post403Error1Value),
            _ when TryGetApiV1Post404Error1(out var apiV1Post404Error1Value) => onApiV1Post404Error1(
                apiV1Post404Error1Value),
            _ when TryGetApiV1Post409Error1(out var apiV1Post409Error1Value) => onApiV1Post409Error1(
                apiV1Post409Error1Value),
            _ when TryGetApiV1Post429Error1(out var apiV1Post429Error1Value) => onApiV1Post429Error1(
                apiV1Post429Error1Value),
            _ when TryGetApiV1Post500Error1(out var apiV1Post500Error1Value) => onApiV1Post500Error1(
                apiV1Post500Error1Value),
            _ when TryGetApiV1Post502Error1(out var apiV1Post502Error1Value) => onApiV1Post502Error1(
                apiV1Post502Error1Value),
            _ when TryGetApiV1Post503Error1(out var apiV1Post503Error1Value) => onApiV1Post503Error1(
                apiV1Post503Error1Value),
            _ when TryGetApiV1Post504Error1(out var apiV1Post504Error1Value) => onApiV1Post504Error1(
                apiV1Post504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostUpdateError)} holds no value.")
        };

    public void Match(Action<ApiV1Post400Error1> onApiV1Post400Error1,
        Action<ApiV1Post401Error1> onApiV1Post401Error1,
        Action<ApiV1Post403Error1> onApiV1Post403Error1,
        Action<ApiV1Post404Error1> onApiV1Post404Error1,
        Action<ApiV1Post409Error1> onApiV1Post409Error1,
        Action<ApiV1Post429Error1> onApiV1Post429Error1,
        Action<ApiV1Post500Error1> onApiV1Post500Error1,
        Action<ApiV1Post502Error1> onApiV1Post502Error1,
        Action<ApiV1Post503Error1> onApiV1Post503Error1,
        Action<ApiV1Post504Error1> onApiV1Post504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Post400Error1(out var apiV1Post400Error1Value)) onApiV1Post400Error1(apiV1Post400Error1Value);
        else if (TryGetApiV1Post401Error1(out var apiV1Post401Error1Value)) onApiV1Post401Error1(
            apiV1Post401Error1Value);
        else if (TryGetApiV1Post403Error1(out var apiV1Post403Error1Value)) onApiV1Post403Error1(
            apiV1Post403Error1Value);
        else if (TryGetApiV1Post404Error1(out var apiV1Post404Error1Value)) onApiV1Post404Error1(
            apiV1Post404Error1Value);
        else if (TryGetApiV1Post409Error1(out var apiV1Post409Error1Value)) onApiV1Post409Error1(
            apiV1Post409Error1Value);
        else if (TryGetApiV1Post429Error1(out var apiV1Post429Error1Value)) onApiV1Post429Error1(
            apiV1Post429Error1Value);
        else if (TryGetApiV1Post500Error1(out var apiV1Post500Error1Value)) onApiV1Post500Error1(
            apiV1Post500Error1Value);
        else if (TryGetApiV1Post502Error1(out var apiV1Post502Error1Value)) onApiV1Post502Error1(
            apiV1Post502Error1Value);
        else if (TryGetApiV1Post503Error1(out var apiV1Post503Error1Value)) onApiV1Post503Error1(
            apiV1Post503Error1Value);
        else if (TryGetApiV1Post504Error1(out var apiV1Post504Error1Value)) onApiV1Post504Error1(
            apiV1Post504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostUpdateError)} holds no value.");
    }

    private static Task<PostUpdateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Post400Error1>().As(AsApiV1Post400Error1),
            401 => response.Json<ApiV1Post401Error1>().As(AsApiV1Post401Error1),
            403 => response.Json<ApiV1Post403Error1>().As(AsApiV1Post403Error1),
            404 => response.Json<ApiV1Post404Error1>().As(AsApiV1Post404Error1),
            409 => response.Json<ApiV1Post409Error1>().As(AsApiV1Post409Error1),
            429 => response.Json<ApiV1Post429Error1>().As(AsApiV1Post429Error1),
            500 => response.Json<ApiV1Post500Error1>().As(AsApiV1Post500Error1),
            502 => response.Json<ApiV1Post502Error1>().As(AsApiV1Post502Error1),
            503 => response.Json<ApiV1Post503Error1>().As(AsApiV1Post503Error1),
            504 => response.Json<ApiV1Post504Error1>().As(AsApiV1Post504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostUpdateError> Response { get; } = new(Create);
}
