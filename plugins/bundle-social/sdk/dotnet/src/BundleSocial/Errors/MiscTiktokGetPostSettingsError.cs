using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTiktokGetPostSettingsError : ApiError
{
    private readonly Optional<ApiV1MiscTiktokPostSettings400Error1> _apiV1MiscTiktokPostSettings400Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings401Error1> _apiV1MiscTiktokPostSettings401Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings403Error1> _apiV1MiscTiktokPostSettings403Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings404Error1> _apiV1MiscTiktokPostSettings404Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings429Error1> _apiV1MiscTiktokPostSettings429Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings500Error1> _apiV1MiscTiktokPostSettings500Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings502Error1> _apiV1MiscTiktokPostSettings502Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings503Error1> _apiV1MiscTiktokPostSettings503Error1Value;

    private readonly Optional<ApiV1MiscTiktokPostSettings504Error1> _apiV1MiscTiktokPostSettings504Error1Value;

    private MiscTiktokGetPostSettingsError(Optional<ApiV1MiscTiktokPostSettings400Error1> apiV1MiscTiktokPostSettings400Error1Value,
        Optional<ApiV1MiscTiktokPostSettings401Error1> apiV1MiscTiktokPostSettings401Error1Value,
        Optional<ApiV1MiscTiktokPostSettings403Error1> apiV1MiscTiktokPostSettings403Error1Value,
        Optional<ApiV1MiscTiktokPostSettings404Error1> apiV1MiscTiktokPostSettings404Error1Value,
        Optional<ApiV1MiscTiktokPostSettings429Error1> apiV1MiscTiktokPostSettings429Error1Value,
        Optional<ApiV1MiscTiktokPostSettings500Error1> apiV1MiscTiktokPostSettings500Error1Value,
        Optional<ApiV1MiscTiktokPostSettings502Error1> apiV1MiscTiktokPostSettings502Error1Value,
        Optional<ApiV1MiscTiktokPostSettings503Error1> apiV1MiscTiktokPostSettings503Error1Value,
        Optional<ApiV1MiscTiktokPostSettings504Error1> apiV1MiscTiktokPostSettings504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTiktokPostSettings400Error1Value = apiV1MiscTiktokPostSettings400Error1Value;
        _apiV1MiscTiktokPostSettings401Error1Value = apiV1MiscTiktokPostSettings401Error1Value;
        _apiV1MiscTiktokPostSettings403Error1Value = apiV1MiscTiktokPostSettings403Error1Value;
        _apiV1MiscTiktokPostSettings404Error1Value = apiV1MiscTiktokPostSettings404Error1Value;
        _apiV1MiscTiktokPostSettings429Error1Value = apiV1MiscTiktokPostSettings429Error1Value;
        _apiV1MiscTiktokPostSettings500Error1Value = apiV1MiscTiktokPostSettings500Error1Value;
        _apiV1MiscTiktokPostSettings502Error1Value = apiV1MiscTiktokPostSettings502Error1Value;
        _apiV1MiscTiktokPostSettings503Error1Value = apiV1MiscTiktokPostSettings503Error1Value;
        _apiV1MiscTiktokPostSettings504Error1Value = apiV1MiscTiktokPostSettings504Error1Value;
    }

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings400Error1(ApiV1MiscTiktokPostSettings400Error1 value) =>
        new(
            Optional<ApiV1MiscTiktokPostSettings400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings401Error1(ApiV1MiscTiktokPostSettings401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTiktokPostSettings401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings403Error1(ApiV1MiscTiktokPostSettings403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings404Error1(ApiV1MiscTiktokPostSettings404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings429Error1(ApiV1MiscTiktokPostSettings429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings500Error1(ApiV1MiscTiktokPostSettings500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings502Error1(ApiV1MiscTiktokPostSettings502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings503Error1(ApiV1MiscTiktokPostSettings503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings503Error1>.Some(value),
            default,
            default);

    private static MiscTiktokGetPostSettingsError AsApiV1MiscTiktokPostSettings504Error1(ApiV1MiscTiktokPostSettings504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokPostSettings504Error1>.Some(value),
            default);

    private static MiscTiktokGetPostSettingsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTiktokPostSettings400Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings400Error1? value) =>
        _apiV1MiscTiktokPostSettings400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings401Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings401Error1? value) =>
        _apiV1MiscTiktokPostSettings401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings403Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings403Error1? value) =>
        _apiV1MiscTiktokPostSettings403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings404Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings404Error1? value) =>
        _apiV1MiscTiktokPostSettings404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings429Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings429Error1? value) =>
        _apiV1MiscTiktokPostSettings429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings500Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings500Error1? value) =>
        _apiV1MiscTiktokPostSettings500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings502Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings502Error1? value) =>
        _apiV1MiscTiktokPostSettings502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings503Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings503Error1? value) =>
        _apiV1MiscTiktokPostSettings503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokPostSettings504Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings504Error1? value) =>
        _apiV1MiscTiktokPostSettings504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTiktokPostSettings400Error1, TResult> onApiV1MiscTiktokPostSettings400Error1,
        Func<ApiV1MiscTiktokPostSettings401Error1, TResult> onApiV1MiscTiktokPostSettings401Error1,
        Func<ApiV1MiscTiktokPostSettings403Error1, TResult> onApiV1MiscTiktokPostSettings403Error1,
        Func<ApiV1MiscTiktokPostSettings404Error1, TResult> onApiV1MiscTiktokPostSettings404Error1,
        Func<ApiV1MiscTiktokPostSettings429Error1, TResult> onApiV1MiscTiktokPostSettings429Error1,
        Func<ApiV1MiscTiktokPostSettings500Error1, TResult> onApiV1MiscTiktokPostSettings500Error1,
        Func<ApiV1MiscTiktokPostSettings502Error1, TResult> onApiV1MiscTiktokPostSettings502Error1,
        Func<ApiV1MiscTiktokPostSettings503Error1, TResult> onApiV1MiscTiktokPostSettings503Error1,
        Func<ApiV1MiscTiktokPostSettings504Error1, TResult> onApiV1MiscTiktokPostSettings504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTiktokPostSettings400Error1(
                out var apiV1MiscTiktokPostSettings400Error1Value) => onApiV1MiscTiktokPostSettings400Error1(
                apiV1MiscTiktokPostSettings400Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings401Error1(
                out var apiV1MiscTiktokPostSettings401Error1Value) => onApiV1MiscTiktokPostSettings401Error1(
                apiV1MiscTiktokPostSettings401Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings403Error1(
                out var apiV1MiscTiktokPostSettings403Error1Value) => onApiV1MiscTiktokPostSettings403Error1(
                apiV1MiscTiktokPostSettings403Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings404Error1(
                out var apiV1MiscTiktokPostSettings404Error1Value) => onApiV1MiscTiktokPostSettings404Error1(
                apiV1MiscTiktokPostSettings404Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings429Error1(
                out var apiV1MiscTiktokPostSettings429Error1Value) => onApiV1MiscTiktokPostSettings429Error1(
                apiV1MiscTiktokPostSettings429Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings500Error1(
                out var apiV1MiscTiktokPostSettings500Error1Value) => onApiV1MiscTiktokPostSettings500Error1(
                apiV1MiscTiktokPostSettings500Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings502Error1(
                out var apiV1MiscTiktokPostSettings502Error1Value) => onApiV1MiscTiktokPostSettings502Error1(
                apiV1MiscTiktokPostSettings502Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings503Error1(
                out var apiV1MiscTiktokPostSettings503Error1Value) => onApiV1MiscTiktokPostSettings503Error1(
                apiV1MiscTiktokPostSettings503Error1Value),
            _ when TryGetApiV1MiscTiktokPostSettings504Error1(
                out var apiV1MiscTiktokPostSettings504Error1Value) => onApiV1MiscTiktokPostSettings504Error1(
                apiV1MiscTiktokPostSettings504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTiktokGetPostSettingsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTiktokPostSettings400Error1> onApiV1MiscTiktokPostSettings400Error1,
        Action<ApiV1MiscTiktokPostSettings401Error1> onApiV1MiscTiktokPostSettings401Error1,
        Action<ApiV1MiscTiktokPostSettings403Error1> onApiV1MiscTiktokPostSettings403Error1,
        Action<ApiV1MiscTiktokPostSettings404Error1> onApiV1MiscTiktokPostSettings404Error1,
        Action<ApiV1MiscTiktokPostSettings429Error1> onApiV1MiscTiktokPostSettings429Error1,
        Action<ApiV1MiscTiktokPostSettings500Error1> onApiV1MiscTiktokPostSettings500Error1,
        Action<ApiV1MiscTiktokPostSettings502Error1> onApiV1MiscTiktokPostSettings502Error1,
        Action<ApiV1MiscTiktokPostSettings503Error1> onApiV1MiscTiktokPostSettings503Error1,
        Action<ApiV1MiscTiktokPostSettings504Error1> onApiV1MiscTiktokPostSettings504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTiktokPostSettings400Error1(
            out var apiV1MiscTiktokPostSettings400Error1Value)) onApiV1MiscTiktokPostSettings400Error1(
            apiV1MiscTiktokPostSettings400Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings401Error1(
            out var apiV1MiscTiktokPostSettings401Error1Value)) onApiV1MiscTiktokPostSettings401Error1(
            apiV1MiscTiktokPostSettings401Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings403Error1(
            out var apiV1MiscTiktokPostSettings403Error1Value)) onApiV1MiscTiktokPostSettings403Error1(
            apiV1MiscTiktokPostSettings403Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings404Error1(
            out var apiV1MiscTiktokPostSettings404Error1Value)) onApiV1MiscTiktokPostSettings404Error1(
            apiV1MiscTiktokPostSettings404Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings429Error1(
            out var apiV1MiscTiktokPostSettings429Error1Value)) onApiV1MiscTiktokPostSettings429Error1(
            apiV1MiscTiktokPostSettings429Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings500Error1(
            out var apiV1MiscTiktokPostSettings500Error1Value)) onApiV1MiscTiktokPostSettings500Error1(
            apiV1MiscTiktokPostSettings500Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings502Error1(
            out var apiV1MiscTiktokPostSettings502Error1Value)) onApiV1MiscTiktokPostSettings502Error1(
            apiV1MiscTiktokPostSettings502Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings503Error1(
            out var apiV1MiscTiktokPostSettings503Error1Value)) onApiV1MiscTiktokPostSettings503Error1(
            apiV1MiscTiktokPostSettings503Error1Value);
        else if (TryGetApiV1MiscTiktokPostSettings504Error1(
            out var apiV1MiscTiktokPostSettings504Error1Value)) onApiV1MiscTiktokPostSettings504Error1(
            apiV1MiscTiktokPostSettings504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTiktokGetPostSettingsError)} holds no value.");
    }

    private static Task<MiscTiktokGetPostSettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTiktokPostSettings400Error1>().As(AsApiV1MiscTiktokPostSettings400Error1),
            401 => response.Json<ApiV1MiscTiktokPostSettings401Error1>().As(AsApiV1MiscTiktokPostSettings401Error1),
            403 => response.Json<ApiV1MiscTiktokPostSettings403Error1>().As(AsApiV1MiscTiktokPostSettings403Error1),
            404 => response.Json<ApiV1MiscTiktokPostSettings404Error1>().As(AsApiV1MiscTiktokPostSettings404Error1),
            429 => response.Json<ApiV1MiscTiktokPostSettings429Error1>().As(AsApiV1MiscTiktokPostSettings429Error1),
            500 => response.Json<ApiV1MiscTiktokPostSettings500Error1>().As(AsApiV1MiscTiktokPostSettings500Error1),
            502 => response.Json<ApiV1MiscTiktokPostSettings502Error1>().As(AsApiV1MiscTiktokPostSettings502Error1),
            503 => response.Json<ApiV1MiscTiktokPostSettings503Error1>().As(AsApiV1MiscTiktokPostSettings503Error1),
            504 => response.Json<ApiV1MiscTiktokPostSettings504Error1>().As(AsApiV1MiscTiktokPostSettings504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTiktokGetPostSettingsError> Response { get; } = new(Create);
}
