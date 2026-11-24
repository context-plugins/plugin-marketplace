using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscInstagramBusinessDiscoveryError : ApiError
{
    private readonly Optional<ApiV1MiscInstagramTags400Error1> _apiV1MiscInstagramTags400Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags401Error1> _apiV1MiscInstagramTags401Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags403Error1> _apiV1MiscInstagramTags403Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags404Error1> _apiV1MiscInstagramTags404Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags429Error1> _apiV1MiscInstagramTags429Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags500Error1> _apiV1MiscInstagramTags500Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags502Error1> _apiV1MiscInstagramTags502Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags503Error1> _apiV1MiscInstagramTags503Error1Value;

    private readonly Optional<ApiV1MiscInstagramTags504Error1> _apiV1MiscInstagramTags504Error1Value;

    private MiscInstagramBusinessDiscoveryError(Optional<ApiV1MiscInstagramTags400Error1> apiV1MiscInstagramTags400Error1Value,
        Optional<ApiV1MiscInstagramTags401Error1> apiV1MiscInstagramTags401Error1Value,
        Optional<ApiV1MiscInstagramTags403Error1> apiV1MiscInstagramTags403Error1Value,
        Optional<ApiV1MiscInstagramTags404Error1> apiV1MiscInstagramTags404Error1Value,
        Optional<ApiV1MiscInstagramTags429Error1> apiV1MiscInstagramTags429Error1Value,
        Optional<ApiV1MiscInstagramTags500Error1> apiV1MiscInstagramTags500Error1Value,
        Optional<ApiV1MiscInstagramTags502Error1> apiV1MiscInstagramTags502Error1Value,
        Optional<ApiV1MiscInstagramTags503Error1> apiV1MiscInstagramTags503Error1Value,
        Optional<ApiV1MiscInstagramTags504Error1> apiV1MiscInstagramTags504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscInstagramTags400Error1Value = apiV1MiscInstagramTags400Error1Value;
        _apiV1MiscInstagramTags401Error1Value = apiV1MiscInstagramTags401Error1Value;
        _apiV1MiscInstagramTags403Error1Value = apiV1MiscInstagramTags403Error1Value;
        _apiV1MiscInstagramTags404Error1Value = apiV1MiscInstagramTags404Error1Value;
        _apiV1MiscInstagramTags429Error1Value = apiV1MiscInstagramTags429Error1Value;
        _apiV1MiscInstagramTags500Error1Value = apiV1MiscInstagramTags500Error1Value;
        _apiV1MiscInstagramTags502Error1Value = apiV1MiscInstagramTags502Error1Value;
        _apiV1MiscInstagramTags503Error1Value = apiV1MiscInstagramTags503Error1Value;
        _apiV1MiscInstagramTags504Error1Value = apiV1MiscInstagramTags504Error1Value;
    }

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags400Error1(ApiV1MiscInstagramTags400Error1 value) =>
        new(
            Optional<ApiV1MiscInstagramTags400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags401Error1(ApiV1MiscInstagramTags401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscInstagramTags401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags403Error1(ApiV1MiscInstagramTags403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscInstagramTags403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags404Error1(ApiV1MiscInstagramTags404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags429Error1(ApiV1MiscInstagramTags429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags500Error1(ApiV1MiscInstagramTags500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags502Error1(ApiV1MiscInstagramTags502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags503Error1(ApiV1MiscInstagramTags503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags503Error1>.Some(value),
            default,
            default);

    private static MiscInstagramBusinessDiscoveryError AsApiV1MiscInstagramTags504Error1(ApiV1MiscInstagramTags504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramTags504Error1>.Some(value),
            default);

    private static MiscInstagramBusinessDiscoveryError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscInstagramTags400Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags400Error1? value) =>
        _apiV1MiscInstagramTags400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags401Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags401Error1? value) =>
        _apiV1MiscInstagramTags401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags403Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags403Error1? value) =>
        _apiV1MiscInstagramTags403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags404Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags404Error1? value) =>
        _apiV1MiscInstagramTags404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags429Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags429Error1? value) =>
        _apiV1MiscInstagramTags429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags500Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags500Error1? value) =>
        _apiV1MiscInstagramTags500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags502Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags502Error1? value) =>
        _apiV1MiscInstagramTags502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags503Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags503Error1? value) =>
        _apiV1MiscInstagramTags503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramTags504Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags504Error1? value) =>
        _apiV1MiscInstagramTags504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscInstagramTags400Error1, TResult> onApiV1MiscInstagramTags400Error1,
        Func<ApiV1MiscInstagramTags401Error1, TResult> onApiV1MiscInstagramTags401Error1,
        Func<ApiV1MiscInstagramTags403Error1, TResult> onApiV1MiscInstagramTags403Error1,
        Func<ApiV1MiscInstagramTags404Error1, TResult> onApiV1MiscInstagramTags404Error1,
        Func<ApiV1MiscInstagramTags429Error1, TResult> onApiV1MiscInstagramTags429Error1,
        Func<ApiV1MiscInstagramTags500Error1, TResult> onApiV1MiscInstagramTags500Error1,
        Func<ApiV1MiscInstagramTags502Error1, TResult> onApiV1MiscInstagramTags502Error1,
        Func<ApiV1MiscInstagramTags503Error1, TResult> onApiV1MiscInstagramTags503Error1,
        Func<ApiV1MiscInstagramTags504Error1, TResult> onApiV1MiscInstagramTags504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscInstagramTags400Error1(
                out var apiV1MiscInstagramTags400Error1Value) => onApiV1MiscInstagramTags400Error1(
                apiV1MiscInstagramTags400Error1Value),
            _ when TryGetApiV1MiscInstagramTags401Error1(
                out var apiV1MiscInstagramTags401Error1Value) => onApiV1MiscInstagramTags401Error1(
                apiV1MiscInstagramTags401Error1Value),
            _ when TryGetApiV1MiscInstagramTags403Error1(
                out var apiV1MiscInstagramTags403Error1Value) => onApiV1MiscInstagramTags403Error1(
                apiV1MiscInstagramTags403Error1Value),
            _ when TryGetApiV1MiscInstagramTags404Error1(
                out var apiV1MiscInstagramTags404Error1Value) => onApiV1MiscInstagramTags404Error1(
                apiV1MiscInstagramTags404Error1Value),
            _ when TryGetApiV1MiscInstagramTags429Error1(
                out var apiV1MiscInstagramTags429Error1Value) => onApiV1MiscInstagramTags429Error1(
                apiV1MiscInstagramTags429Error1Value),
            _ when TryGetApiV1MiscInstagramTags500Error1(
                out var apiV1MiscInstagramTags500Error1Value) => onApiV1MiscInstagramTags500Error1(
                apiV1MiscInstagramTags500Error1Value),
            _ when TryGetApiV1MiscInstagramTags502Error1(
                out var apiV1MiscInstagramTags502Error1Value) => onApiV1MiscInstagramTags502Error1(
                apiV1MiscInstagramTags502Error1Value),
            _ when TryGetApiV1MiscInstagramTags503Error1(
                out var apiV1MiscInstagramTags503Error1Value) => onApiV1MiscInstagramTags503Error1(
                apiV1MiscInstagramTags503Error1Value),
            _ when TryGetApiV1MiscInstagramTags504Error1(
                out var apiV1MiscInstagramTags504Error1Value) => onApiV1MiscInstagramTags504Error1(
                apiV1MiscInstagramTags504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscInstagramBusinessDiscoveryError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscInstagramTags400Error1> onApiV1MiscInstagramTags400Error1,
        Action<ApiV1MiscInstagramTags401Error1> onApiV1MiscInstagramTags401Error1,
        Action<ApiV1MiscInstagramTags403Error1> onApiV1MiscInstagramTags403Error1,
        Action<ApiV1MiscInstagramTags404Error1> onApiV1MiscInstagramTags404Error1,
        Action<ApiV1MiscInstagramTags429Error1> onApiV1MiscInstagramTags429Error1,
        Action<ApiV1MiscInstagramTags500Error1> onApiV1MiscInstagramTags500Error1,
        Action<ApiV1MiscInstagramTags502Error1> onApiV1MiscInstagramTags502Error1,
        Action<ApiV1MiscInstagramTags503Error1> onApiV1MiscInstagramTags503Error1,
        Action<ApiV1MiscInstagramTags504Error1> onApiV1MiscInstagramTags504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscInstagramTags400Error1(
            out var apiV1MiscInstagramTags400Error1Value)) onApiV1MiscInstagramTags400Error1(
            apiV1MiscInstagramTags400Error1Value);
        else if (TryGetApiV1MiscInstagramTags401Error1(
            out var apiV1MiscInstagramTags401Error1Value)) onApiV1MiscInstagramTags401Error1(
            apiV1MiscInstagramTags401Error1Value);
        else if (TryGetApiV1MiscInstagramTags403Error1(
            out var apiV1MiscInstagramTags403Error1Value)) onApiV1MiscInstagramTags403Error1(
            apiV1MiscInstagramTags403Error1Value);
        else if (TryGetApiV1MiscInstagramTags404Error1(
            out var apiV1MiscInstagramTags404Error1Value)) onApiV1MiscInstagramTags404Error1(
            apiV1MiscInstagramTags404Error1Value);
        else if (TryGetApiV1MiscInstagramTags429Error1(
            out var apiV1MiscInstagramTags429Error1Value)) onApiV1MiscInstagramTags429Error1(
            apiV1MiscInstagramTags429Error1Value);
        else if (TryGetApiV1MiscInstagramTags500Error1(
            out var apiV1MiscInstagramTags500Error1Value)) onApiV1MiscInstagramTags500Error1(
            apiV1MiscInstagramTags500Error1Value);
        else if (TryGetApiV1MiscInstagramTags502Error1(
            out var apiV1MiscInstagramTags502Error1Value)) onApiV1MiscInstagramTags502Error1(
            apiV1MiscInstagramTags502Error1Value);
        else if (TryGetApiV1MiscInstagramTags503Error1(
            out var apiV1MiscInstagramTags503Error1Value)) onApiV1MiscInstagramTags503Error1(
            apiV1MiscInstagramTags503Error1Value);
        else if (TryGetApiV1MiscInstagramTags504Error1(
            out var apiV1MiscInstagramTags504Error1Value)) onApiV1MiscInstagramTags504Error1(
            apiV1MiscInstagramTags504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscInstagramBusinessDiscoveryError)} holds no value.");
    }

    private static Task<MiscInstagramBusinessDiscoveryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscInstagramTags400Error1>().As(AsApiV1MiscInstagramTags400Error1),
            401 => response.Json<ApiV1MiscInstagramTags401Error1>().As(AsApiV1MiscInstagramTags401Error1),
            403 => response.Json<ApiV1MiscInstagramTags403Error1>().As(AsApiV1MiscInstagramTags403Error1),
            404 => response.Json<ApiV1MiscInstagramTags404Error1>().As(AsApiV1MiscInstagramTags404Error1),
            429 => response.Json<ApiV1MiscInstagramTags429Error1>().As(AsApiV1MiscInstagramTags429Error1),
            500 => response.Json<ApiV1MiscInstagramTags500Error1>().As(AsApiV1MiscInstagramTags500Error1),
            502 => response.Json<ApiV1MiscInstagramTags502Error1>().As(AsApiV1MiscInstagramTags502Error1),
            503 => response.Json<ApiV1MiscInstagramTags503Error1>().As(AsApiV1MiscInstagramTags503Error1),
            504 => response.Json<ApiV1MiscInstagramTags504Error1>().As(AsApiV1MiscInstagramTags504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscInstagramBusinessDiscoveryError> Response { get; } = new(Create);
}
