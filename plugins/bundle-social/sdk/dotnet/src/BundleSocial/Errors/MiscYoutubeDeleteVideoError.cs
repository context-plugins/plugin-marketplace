using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeDeleteVideoError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubeVideo400Error1> _apiV1MiscYoutubeVideo400Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo401Error1> _apiV1MiscYoutubeVideo401Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo403Error1> _apiV1MiscYoutubeVideo403Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo404Error1> _apiV1MiscYoutubeVideo404Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo429Error1> _apiV1MiscYoutubeVideo429Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo500Error1> _apiV1MiscYoutubeVideo500Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo502Error1> _apiV1MiscYoutubeVideo502Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo503Error1> _apiV1MiscYoutubeVideo503Error1Value;

    private readonly Optional<ApiV1MiscYoutubeVideo504Error1> _apiV1MiscYoutubeVideo504Error1Value;

    private MiscYoutubeDeleteVideoError(Optional<ApiV1MiscYoutubeVideo400Error1> apiV1MiscYoutubeVideo400Error1Value,
        Optional<ApiV1MiscYoutubeVideo401Error1> apiV1MiscYoutubeVideo401Error1Value,
        Optional<ApiV1MiscYoutubeVideo403Error1> apiV1MiscYoutubeVideo403Error1Value,
        Optional<ApiV1MiscYoutubeVideo404Error1> apiV1MiscYoutubeVideo404Error1Value,
        Optional<ApiV1MiscYoutubeVideo429Error1> apiV1MiscYoutubeVideo429Error1Value,
        Optional<ApiV1MiscYoutubeVideo500Error1> apiV1MiscYoutubeVideo500Error1Value,
        Optional<ApiV1MiscYoutubeVideo502Error1> apiV1MiscYoutubeVideo502Error1Value,
        Optional<ApiV1MiscYoutubeVideo503Error1> apiV1MiscYoutubeVideo503Error1Value,
        Optional<ApiV1MiscYoutubeVideo504Error1> apiV1MiscYoutubeVideo504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubeVideo400Error1Value = apiV1MiscYoutubeVideo400Error1Value;
        _apiV1MiscYoutubeVideo401Error1Value = apiV1MiscYoutubeVideo401Error1Value;
        _apiV1MiscYoutubeVideo403Error1Value = apiV1MiscYoutubeVideo403Error1Value;
        _apiV1MiscYoutubeVideo404Error1Value = apiV1MiscYoutubeVideo404Error1Value;
        _apiV1MiscYoutubeVideo429Error1Value = apiV1MiscYoutubeVideo429Error1Value;
        _apiV1MiscYoutubeVideo500Error1Value = apiV1MiscYoutubeVideo500Error1Value;
        _apiV1MiscYoutubeVideo502Error1Value = apiV1MiscYoutubeVideo502Error1Value;
        _apiV1MiscYoutubeVideo503Error1Value = apiV1MiscYoutubeVideo503Error1Value;
        _apiV1MiscYoutubeVideo504Error1Value = apiV1MiscYoutubeVideo504Error1Value;
    }

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo400Error1(ApiV1MiscYoutubeVideo400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubeVideo400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo401Error1(ApiV1MiscYoutubeVideo401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubeVideo401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo403Error1(ApiV1MiscYoutubeVideo403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo404Error1(ApiV1MiscYoutubeVideo404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo429Error1(ApiV1MiscYoutubeVideo429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo500Error1(ApiV1MiscYoutubeVideo500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo502Error1(ApiV1MiscYoutubeVideo502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo503Error1(ApiV1MiscYoutubeVideo503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeDeleteVideoError AsApiV1MiscYoutubeVideo504Error1(ApiV1MiscYoutubeVideo504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeVideo504Error1>.Some(value),
            default);

    private static MiscYoutubeDeleteVideoError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubeVideo400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo400Error1? value) =>
        _apiV1MiscYoutubeVideo400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo401Error1? value) =>
        _apiV1MiscYoutubeVideo401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo403Error1? value) =>
        _apiV1MiscYoutubeVideo403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo404Error1? value) =>
        _apiV1MiscYoutubeVideo404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo429Error1? value) =>
        _apiV1MiscYoutubeVideo429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo500Error1? value) =>
        _apiV1MiscYoutubeVideo500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo502Error1? value) =>
        _apiV1MiscYoutubeVideo502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo503Error1? value) =>
        _apiV1MiscYoutubeVideo503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeVideo504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo504Error1? value) =>
        _apiV1MiscYoutubeVideo504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubeVideo400Error1, TResult> onApiV1MiscYoutubeVideo400Error1,
        Func<ApiV1MiscYoutubeVideo401Error1, TResult> onApiV1MiscYoutubeVideo401Error1,
        Func<ApiV1MiscYoutubeVideo403Error1, TResult> onApiV1MiscYoutubeVideo403Error1,
        Func<ApiV1MiscYoutubeVideo404Error1, TResult> onApiV1MiscYoutubeVideo404Error1,
        Func<ApiV1MiscYoutubeVideo429Error1, TResult> onApiV1MiscYoutubeVideo429Error1,
        Func<ApiV1MiscYoutubeVideo500Error1, TResult> onApiV1MiscYoutubeVideo500Error1,
        Func<ApiV1MiscYoutubeVideo502Error1, TResult> onApiV1MiscYoutubeVideo502Error1,
        Func<ApiV1MiscYoutubeVideo503Error1, TResult> onApiV1MiscYoutubeVideo503Error1,
        Func<ApiV1MiscYoutubeVideo504Error1, TResult> onApiV1MiscYoutubeVideo504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubeVideo400Error1(
                out var apiV1MiscYoutubeVideo400Error1Value) => onApiV1MiscYoutubeVideo400Error1(
                apiV1MiscYoutubeVideo400Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo401Error1(
                out var apiV1MiscYoutubeVideo401Error1Value) => onApiV1MiscYoutubeVideo401Error1(
                apiV1MiscYoutubeVideo401Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo403Error1(
                out var apiV1MiscYoutubeVideo403Error1Value) => onApiV1MiscYoutubeVideo403Error1(
                apiV1MiscYoutubeVideo403Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo404Error1(
                out var apiV1MiscYoutubeVideo404Error1Value) => onApiV1MiscYoutubeVideo404Error1(
                apiV1MiscYoutubeVideo404Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo429Error1(
                out var apiV1MiscYoutubeVideo429Error1Value) => onApiV1MiscYoutubeVideo429Error1(
                apiV1MiscYoutubeVideo429Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo500Error1(
                out var apiV1MiscYoutubeVideo500Error1Value) => onApiV1MiscYoutubeVideo500Error1(
                apiV1MiscYoutubeVideo500Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo502Error1(
                out var apiV1MiscYoutubeVideo502Error1Value) => onApiV1MiscYoutubeVideo502Error1(
                apiV1MiscYoutubeVideo502Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo503Error1(
                out var apiV1MiscYoutubeVideo503Error1Value) => onApiV1MiscYoutubeVideo503Error1(
                apiV1MiscYoutubeVideo503Error1Value),
            _ when TryGetApiV1MiscYoutubeVideo504Error1(
                out var apiV1MiscYoutubeVideo504Error1Value) => onApiV1MiscYoutubeVideo504Error1(
                apiV1MiscYoutubeVideo504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeDeleteVideoError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubeVideo400Error1> onApiV1MiscYoutubeVideo400Error1,
        Action<ApiV1MiscYoutubeVideo401Error1> onApiV1MiscYoutubeVideo401Error1,
        Action<ApiV1MiscYoutubeVideo403Error1> onApiV1MiscYoutubeVideo403Error1,
        Action<ApiV1MiscYoutubeVideo404Error1> onApiV1MiscYoutubeVideo404Error1,
        Action<ApiV1MiscYoutubeVideo429Error1> onApiV1MiscYoutubeVideo429Error1,
        Action<ApiV1MiscYoutubeVideo500Error1> onApiV1MiscYoutubeVideo500Error1,
        Action<ApiV1MiscYoutubeVideo502Error1> onApiV1MiscYoutubeVideo502Error1,
        Action<ApiV1MiscYoutubeVideo503Error1> onApiV1MiscYoutubeVideo503Error1,
        Action<ApiV1MiscYoutubeVideo504Error1> onApiV1MiscYoutubeVideo504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubeVideo400Error1(
            out var apiV1MiscYoutubeVideo400Error1Value)) onApiV1MiscYoutubeVideo400Error1(
            apiV1MiscYoutubeVideo400Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo401Error1(
            out var apiV1MiscYoutubeVideo401Error1Value)) onApiV1MiscYoutubeVideo401Error1(
            apiV1MiscYoutubeVideo401Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo403Error1(
            out var apiV1MiscYoutubeVideo403Error1Value)) onApiV1MiscYoutubeVideo403Error1(
            apiV1MiscYoutubeVideo403Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo404Error1(
            out var apiV1MiscYoutubeVideo404Error1Value)) onApiV1MiscYoutubeVideo404Error1(
            apiV1MiscYoutubeVideo404Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo429Error1(
            out var apiV1MiscYoutubeVideo429Error1Value)) onApiV1MiscYoutubeVideo429Error1(
            apiV1MiscYoutubeVideo429Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo500Error1(
            out var apiV1MiscYoutubeVideo500Error1Value)) onApiV1MiscYoutubeVideo500Error1(
            apiV1MiscYoutubeVideo500Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo502Error1(
            out var apiV1MiscYoutubeVideo502Error1Value)) onApiV1MiscYoutubeVideo502Error1(
            apiV1MiscYoutubeVideo502Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo503Error1(
            out var apiV1MiscYoutubeVideo503Error1Value)) onApiV1MiscYoutubeVideo503Error1(
            apiV1MiscYoutubeVideo503Error1Value);
        else if (TryGetApiV1MiscYoutubeVideo504Error1(
            out var apiV1MiscYoutubeVideo504Error1Value)) onApiV1MiscYoutubeVideo504Error1(
            apiV1MiscYoutubeVideo504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeDeleteVideoError)} holds no value.");
    }

    private static Task<MiscYoutubeDeleteVideoError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubeVideo400Error1>().As(AsApiV1MiscYoutubeVideo400Error1),
            401 => response.Json<ApiV1MiscYoutubeVideo401Error1>().As(AsApiV1MiscYoutubeVideo401Error1),
            403 => response.Json<ApiV1MiscYoutubeVideo403Error1>().As(AsApiV1MiscYoutubeVideo403Error1),
            404 => response.Json<ApiV1MiscYoutubeVideo404Error1>().As(AsApiV1MiscYoutubeVideo404Error1),
            429 => response.Json<ApiV1MiscYoutubeVideo429Error1>().As(AsApiV1MiscYoutubeVideo429Error1),
            500 => response.Json<ApiV1MiscYoutubeVideo500Error1>().As(AsApiV1MiscYoutubeVideo500Error1),
            502 => response.Json<ApiV1MiscYoutubeVideo502Error1>().As(AsApiV1MiscYoutubeVideo502Error1),
            503 => response.Json<ApiV1MiscYoutubeVideo503Error1>().As(AsApiV1MiscYoutubeVideo503Error1),
            504 => response.Json<ApiV1MiscYoutubeVideo504Error1>().As(AsApiV1MiscYoutubeVideo504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeDeleteVideoError> Response { get; } = new(Create);
}
