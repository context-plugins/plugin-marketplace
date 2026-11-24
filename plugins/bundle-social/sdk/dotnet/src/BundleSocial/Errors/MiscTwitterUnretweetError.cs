using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTwitterUnretweetError : ApiError
{
    private readonly Optional<ApiV1MiscTwitterRetweet400Error1> _apiV1MiscTwitterRetweet400Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet401Error1> _apiV1MiscTwitterRetweet401Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet403Error1> _apiV1MiscTwitterRetweet403Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet404Error1> _apiV1MiscTwitterRetweet404Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet429Error1> _apiV1MiscTwitterRetweet429Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet500Error1> _apiV1MiscTwitterRetweet500Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet502Error1> _apiV1MiscTwitterRetweet502Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet503Error1> _apiV1MiscTwitterRetweet503Error1Value;

    private readonly Optional<ApiV1MiscTwitterRetweet504Error1> _apiV1MiscTwitterRetweet504Error1Value;

    private MiscTwitterUnretweetError(Optional<ApiV1MiscTwitterRetweet400Error1> apiV1MiscTwitterRetweet400Error1Value,
        Optional<ApiV1MiscTwitterRetweet401Error1> apiV1MiscTwitterRetweet401Error1Value,
        Optional<ApiV1MiscTwitterRetweet403Error1> apiV1MiscTwitterRetweet403Error1Value,
        Optional<ApiV1MiscTwitterRetweet404Error1> apiV1MiscTwitterRetweet404Error1Value,
        Optional<ApiV1MiscTwitterRetweet429Error1> apiV1MiscTwitterRetweet429Error1Value,
        Optional<ApiV1MiscTwitterRetweet500Error1> apiV1MiscTwitterRetweet500Error1Value,
        Optional<ApiV1MiscTwitterRetweet502Error1> apiV1MiscTwitterRetweet502Error1Value,
        Optional<ApiV1MiscTwitterRetweet503Error1> apiV1MiscTwitterRetweet503Error1Value,
        Optional<ApiV1MiscTwitterRetweet504Error1> apiV1MiscTwitterRetweet504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTwitterRetweet400Error1Value = apiV1MiscTwitterRetweet400Error1Value;
        _apiV1MiscTwitterRetweet401Error1Value = apiV1MiscTwitterRetweet401Error1Value;
        _apiV1MiscTwitterRetweet403Error1Value = apiV1MiscTwitterRetweet403Error1Value;
        _apiV1MiscTwitterRetweet404Error1Value = apiV1MiscTwitterRetweet404Error1Value;
        _apiV1MiscTwitterRetweet429Error1Value = apiV1MiscTwitterRetweet429Error1Value;
        _apiV1MiscTwitterRetweet500Error1Value = apiV1MiscTwitterRetweet500Error1Value;
        _apiV1MiscTwitterRetweet502Error1Value = apiV1MiscTwitterRetweet502Error1Value;
        _apiV1MiscTwitterRetweet503Error1Value = apiV1MiscTwitterRetweet503Error1Value;
        _apiV1MiscTwitterRetweet504Error1Value = apiV1MiscTwitterRetweet504Error1Value;
    }

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet400Error1(ApiV1MiscTwitterRetweet400Error1 value) =>
        new(
            Optional<ApiV1MiscTwitterRetweet400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet401Error1(ApiV1MiscTwitterRetweet401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTwitterRetweet401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet403Error1(ApiV1MiscTwitterRetweet403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet404Error1(ApiV1MiscTwitterRetweet404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet429Error1(ApiV1MiscTwitterRetweet429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet500Error1(ApiV1MiscTwitterRetweet500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet502Error1(ApiV1MiscTwitterRetweet502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet503Error1(ApiV1MiscTwitterRetweet503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet503Error1>.Some(value),
            default,
            default);

    private static MiscTwitterUnretweetError AsApiV1MiscTwitterRetweet504Error1(ApiV1MiscTwitterRetweet504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTwitterRetweet504Error1>.Some(value),
            default);

    private static MiscTwitterUnretweetError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTwitterRetweet400Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet400Error1? value) =>
        _apiV1MiscTwitterRetweet400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet401Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet401Error1? value) =>
        _apiV1MiscTwitterRetweet401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet403Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet403Error1? value) =>
        _apiV1MiscTwitterRetweet403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet404Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet404Error1? value) =>
        _apiV1MiscTwitterRetweet404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet429Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet429Error1? value) =>
        _apiV1MiscTwitterRetweet429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet500Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet500Error1? value) =>
        _apiV1MiscTwitterRetweet500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet502Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet502Error1? value) =>
        _apiV1MiscTwitterRetweet502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet503Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet503Error1? value) =>
        _apiV1MiscTwitterRetweet503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTwitterRetweet504Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet504Error1? value) =>
        _apiV1MiscTwitterRetweet504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTwitterRetweet400Error1, TResult> onApiV1MiscTwitterRetweet400Error1,
        Func<ApiV1MiscTwitterRetweet401Error1, TResult> onApiV1MiscTwitterRetweet401Error1,
        Func<ApiV1MiscTwitterRetweet403Error1, TResult> onApiV1MiscTwitterRetweet403Error1,
        Func<ApiV1MiscTwitterRetweet404Error1, TResult> onApiV1MiscTwitterRetweet404Error1,
        Func<ApiV1MiscTwitterRetweet429Error1, TResult> onApiV1MiscTwitterRetweet429Error1,
        Func<ApiV1MiscTwitterRetweet500Error1, TResult> onApiV1MiscTwitterRetweet500Error1,
        Func<ApiV1MiscTwitterRetweet502Error1, TResult> onApiV1MiscTwitterRetweet502Error1,
        Func<ApiV1MiscTwitterRetweet503Error1, TResult> onApiV1MiscTwitterRetweet503Error1,
        Func<ApiV1MiscTwitterRetweet504Error1, TResult> onApiV1MiscTwitterRetweet504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTwitterRetweet400Error1(
                out var apiV1MiscTwitterRetweet400Error1Value) => onApiV1MiscTwitterRetweet400Error1(
                apiV1MiscTwitterRetweet400Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet401Error1(
                out var apiV1MiscTwitterRetweet401Error1Value) => onApiV1MiscTwitterRetweet401Error1(
                apiV1MiscTwitterRetweet401Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet403Error1(
                out var apiV1MiscTwitterRetweet403Error1Value) => onApiV1MiscTwitterRetweet403Error1(
                apiV1MiscTwitterRetweet403Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet404Error1(
                out var apiV1MiscTwitterRetweet404Error1Value) => onApiV1MiscTwitterRetweet404Error1(
                apiV1MiscTwitterRetweet404Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet429Error1(
                out var apiV1MiscTwitterRetweet429Error1Value) => onApiV1MiscTwitterRetweet429Error1(
                apiV1MiscTwitterRetweet429Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet500Error1(
                out var apiV1MiscTwitterRetweet500Error1Value) => onApiV1MiscTwitterRetweet500Error1(
                apiV1MiscTwitterRetweet500Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet502Error1(
                out var apiV1MiscTwitterRetweet502Error1Value) => onApiV1MiscTwitterRetweet502Error1(
                apiV1MiscTwitterRetweet502Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet503Error1(
                out var apiV1MiscTwitterRetweet503Error1Value) => onApiV1MiscTwitterRetweet503Error1(
                apiV1MiscTwitterRetweet503Error1Value),
            _ when TryGetApiV1MiscTwitterRetweet504Error1(
                out var apiV1MiscTwitterRetweet504Error1Value) => onApiV1MiscTwitterRetweet504Error1(
                apiV1MiscTwitterRetweet504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTwitterUnretweetError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTwitterRetweet400Error1> onApiV1MiscTwitterRetweet400Error1,
        Action<ApiV1MiscTwitterRetweet401Error1> onApiV1MiscTwitterRetweet401Error1,
        Action<ApiV1MiscTwitterRetweet403Error1> onApiV1MiscTwitterRetweet403Error1,
        Action<ApiV1MiscTwitterRetweet404Error1> onApiV1MiscTwitterRetweet404Error1,
        Action<ApiV1MiscTwitterRetweet429Error1> onApiV1MiscTwitterRetweet429Error1,
        Action<ApiV1MiscTwitterRetweet500Error1> onApiV1MiscTwitterRetweet500Error1,
        Action<ApiV1MiscTwitterRetweet502Error1> onApiV1MiscTwitterRetweet502Error1,
        Action<ApiV1MiscTwitterRetweet503Error1> onApiV1MiscTwitterRetweet503Error1,
        Action<ApiV1MiscTwitterRetweet504Error1> onApiV1MiscTwitterRetweet504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTwitterRetweet400Error1(
            out var apiV1MiscTwitterRetweet400Error1Value)) onApiV1MiscTwitterRetweet400Error1(
            apiV1MiscTwitterRetweet400Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet401Error1(
            out var apiV1MiscTwitterRetweet401Error1Value)) onApiV1MiscTwitterRetweet401Error1(
            apiV1MiscTwitterRetweet401Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet403Error1(
            out var apiV1MiscTwitterRetweet403Error1Value)) onApiV1MiscTwitterRetweet403Error1(
            apiV1MiscTwitterRetweet403Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet404Error1(
            out var apiV1MiscTwitterRetweet404Error1Value)) onApiV1MiscTwitterRetweet404Error1(
            apiV1MiscTwitterRetweet404Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet429Error1(
            out var apiV1MiscTwitterRetweet429Error1Value)) onApiV1MiscTwitterRetweet429Error1(
            apiV1MiscTwitterRetweet429Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet500Error1(
            out var apiV1MiscTwitterRetweet500Error1Value)) onApiV1MiscTwitterRetweet500Error1(
            apiV1MiscTwitterRetweet500Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet502Error1(
            out var apiV1MiscTwitterRetweet502Error1Value)) onApiV1MiscTwitterRetweet502Error1(
            apiV1MiscTwitterRetweet502Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet503Error1(
            out var apiV1MiscTwitterRetweet503Error1Value)) onApiV1MiscTwitterRetweet503Error1(
            apiV1MiscTwitterRetweet503Error1Value);
        else if (TryGetApiV1MiscTwitterRetweet504Error1(
            out var apiV1MiscTwitterRetweet504Error1Value)) onApiV1MiscTwitterRetweet504Error1(
            apiV1MiscTwitterRetweet504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTwitterUnretweetError)} holds no value.");
    }

    private static Task<MiscTwitterUnretweetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTwitterRetweet400Error1>().As(AsApiV1MiscTwitterRetweet400Error1),
            401 => response.Json<ApiV1MiscTwitterRetweet401Error1>().As(AsApiV1MiscTwitterRetweet401Error1),
            403 => response.Json<ApiV1MiscTwitterRetweet403Error1>().As(AsApiV1MiscTwitterRetweet403Error1),
            404 => response.Json<ApiV1MiscTwitterRetweet404Error1>().As(AsApiV1MiscTwitterRetweet404Error1),
            429 => response.Json<ApiV1MiscTwitterRetweet429Error1>().As(AsApiV1MiscTwitterRetweet429Error1),
            500 => response.Json<ApiV1MiscTwitterRetweet500Error1>().As(AsApiV1MiscTwitterRetweet500Error1),
            502 => response.Json<ApiV1MiscTwitterRetweet502Error1>().As(AsApiV1MiscTwitterRetweet502Error1),
            503 => response.Json<ApiV1MiscTwitterRetweet503Error1>().As(AsApiV1MiscTwitterRetweet503Error1),
            504 => response.Json<ApiV1MiscTwitterRetweet504Error1>().As(AsApiV1MiscTwitterRetweet504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTwitterUnretweetError> Response { get; } = new(Create);
}
