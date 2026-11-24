using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookSearchPagesError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookPages400Error1> _apiV1MiscFacebookPages400Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages401Error1> _apiV1MiscFacebookPages401Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages403Error1> _apiV1MiscFacebookPages403Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages404Error1> _apiV1MiscFacebookPages404Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages429Error1> _apiV1MiscFacebookPages429Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages500Error1> _apiV1MiscFacebookPages500Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages502Error1> _apiV1MiscFacebookPages502Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages503Error1> _apiV1MiscFacebookPages503Error1Value;

    private readonly Optional<ApiV1MiscFacebookPages504Error1> _apiV1MiscFacebookPages504Error1Value;

    private MiscFacebookSearchPagesError(Optional<ApiV1MiscFacebookPages400Error1> apiV1MiscFacebookPages400Error1Value,
        Optional<ApiV1MiscFacebookPages401Error1> apiV1MiscFacebookPages401Error1Value,
        Optional<ApiV1MiscFacebookPages403Error1> apiV1MiscFacebookPages403Error1Value,
        Optional<ApiV1MiscFacebookPages404Error1> apiV1MiscFacebookPages404Error1Value,
        Optional<ApiV1MiscFacebookPages429Error1> apiV1MiscFacebookPages429Error1Value,
        Optional<ApiV1MiscFacebookPages500Error1> apiV1MiscFacebookPages500Error1Value,
        Optional<ApiV1MiscFacebookPages502Error1> apiV1MiscFacebookPages502Error1Value,
        Optional<ApiV1MiscFacebookPages503Error1> apiV1MiscFacebookPages503Error1Value,
        Optional<ApiV1MiscFacebookPages504Error1> apiV1MiscFacebookPages504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookPages400Error1Value = apiV1MiscFacebookPages400Error1Value;
        _apiV1MiscFacebookPages401Error1Value = apiV1MiscFacebookPages401Error1Value;
        _apiV1MiscFacebookPages403Error1Value = apiV1MiscFacebookPages403Error1Value;
        _apiV1MiscFacebookPages404Error1Value = apiV1MiscFacebookPages404Error1Value;
        _apiV1MiscFacebookPages429Error1Value = apiV1MiscFacebookPages429Error1Value;
        _apiV1MiscFacebookPages500Error1Value = apiV1MiscFacebookPages500Error1Value;
        _apiV1MiscFacebookPages502Error1Value = apiV1MiscFacebookPages502Error1Value;
        _apiV1MiscFacebookPages503Error1Value = apiV1MiscFacebookPages503Error1Value;
        _apiV1MiscFacebookPages504Error1Value = apiV1MiscFacebookPages504Error1Value;
    }

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages400Error1(ApiV1MiscFacebookPages400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookPages400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages401Error1(ApiV1MiscFacebookPages401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookPages401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages403Error1(ApiV1MiscFacebookPages403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookPages403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages404Error1(ApiV1MiscFacebookPages404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages429Error1(ApiV1MiscFacebookPages429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages500Error1(ApiV1MiscFacebookPages500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages502Error1(ApiV1MiscFacebookPages502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages503Error1(ApiV1MiscFacebookPages503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookSearchPagesError AsApiV1MiscFacebookPages504Error1(ApiV1MiscFacebookPages504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookPages504Error1>.Some(value),
            default);

    private static MiscFacebookSearchPagesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookPages400Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages400Error1? value) =>
        _apiV1MiscFacebookPages400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages401Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages401Error1? value) =>
        _apiV1MiscFacebookPages401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages403Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages403Error1? value) =>
        _apiV1MiscFacebookPages403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages404Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages404Error1? value) =>
        _apiV1MiscFacebookPages404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages429Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages429Error1? value) =>
        _apiV1MiscFacebookPages429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages500Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages500Error1? value) =>
        _apiV1MiscFacebookPages500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages502Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages502Error1? value) =>
        _apiV1MiscFacebookPages502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages503Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages503Error1? value) =>
        _apiV1MiscFacebookPages503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookPages504Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages504Error1? value) =>
        _apiV1MiscFacebookPages504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookPages400Error1, TResult> onApiV1MiscFacebookPages400Error1,
        Func<ApiV1MiscFacebookPages401Error1, TResult> onApiV1MiscFacebookPages401Error1,
        Func<ApiV1MiscFacebookPages403Error1, TResult> onApiV1MiscFacebookPages403Error1,
        Func<ApiV1MiscFacebookPages404Error1, TResult> onApiV1MiscFacebookPages404Error1,
        Func<ApiV1MiscFacebookPages429Error1, TResult> onApiV1MiscFacebookPages429Error1,
        Func<ApiV1MiscFacebookPages500Error1, TResult> onApiV1MiscFacebookPages500Error1,
        Func<ApiV1MiscFacebookPages502Error1, TResult> onApiV1MiscFacebookPages502Error1,
        Func<ApiV1MiscFacebookPages503Error1, TResult> onApiV1MiscFacebookPages503Error1,
        Func<ApiV1MiscFacebookPages504Error1, TResult> onApiV1MiscFacebookPages504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookPages400Error1(
                out var apiV1MiscFacebookPages400Error1Value) => onApiV1MiscFacebookPages400Error1(
                apiV1MiscFacebookPages400Error1Value),
            _ when TryGetApiV1MiscFacebookPages401Error1(
                out var apiV1MiscFacebookPages401Error1Value) => onApiV1MiscFacebookPages401Error1(
                apiV1MiscFacebookPages401Error1Value),
            _ when TryGetApiV1MiscFacebookPages403Error1(
                out var apiV1MiscFacebookPages403Error1Value) => onApiV1MiscFacebookPages403Error1(
                apiV1MiscFacebookPages403Error1Value),
            _ when TryGetApiV1MiscFacebookPages404Error1(
                out var apiV1MiscFacebookPages404Error1Value) => onApiV1MiscFacebookPages404Error1(
                apiV1MiscFacebookPages404Error1Value),
            _ when TryGetApiV1MiscFacebookPages429Error1(
                out var apiV1MiscFacebookPages429Error1Value) => onApiV1MiscFacebookPages429Error1(
                apiV1MiscFacebookPages429Error1Value),
            _ when TryGetApiV1MiscFacebookPages500Error1(
                out var apiV1MiscFacebookPages500Error1Value) => onApiV1MiscFacebookPages500Error1(
                apiV1MiscFacebookPages500Error1Value),
            _ when TryGetApiV1MiscFacebookPages502Error1(
                out var apiV1MiscFacebookPages502Error1Value) => onApiV1MiscFacebookPages502Error1(
                apiV1MiscFacebookPages502Error1Value),
            _ when TryGetApiV1MiscFacebookPages503Error1(
                out var apiV1MiscFacebookPages503Error1Value) => onApiV1MiscFacebookPages503Error1(
                apiV1MiscFacebookPages503Error1Value),
            _ when TryGetApiV1MiscFacebookPages504Error1(
                out var apiV1MiscFacebookPages504Error1Value) => onApiV1MiscFacebookPages504Error1(
                apiV1MiscFacebookPages504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookSearchPagesError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookPages400Error1> onApiV1MiscFacebookPages400Error1,
        Action<ApiV1MiscFacebookPages401Error1> onApiV1MiscFacebookPages401Error1,
        Action<ApiV1MiscFacebookPages403Error1> onApiV1MiscFacebookPages403Error1,
        Action<ApiV1MiscFacebookPages404Error1> onApiV1MiscFacebookPages404Error1,
        Action<ApiV1MiscFacebookPages429Error1> onApiV1MiscFacebookPages429Error1,
        Action<ApiV1MiscFacebookPages500Error1> onApiV1MiscFacebookPages500Error1,
        Action<ApiV1MiscFacebookPages502Error1> onApiV1MiscFacebookPages502Error1,
        Action<ApiV1MiscFacebookPages503Error1> onApiV1MiscFacebookPages503Error1,
        Action<ApiV1MiscFacebookPages504Error1> onApiV1MiscFacebookPages504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookPages400Error1(
            out var apiV1MiscFacebookPages400Error1Value)) onApiV1MiscFacebookPages400Error1(
            apiV1MiscFacebookPages400Error1Value);
        else if (TryGetApiV1MiscFacebookPages401Error1(
            out var apiV1MiscFacebookPages401Error1Value)) onApiV1MiscFacebookPages401Error1(
            apiV1MiscFacebookPages401Error1Value);
        else if (TryGetApiV1MiscFacebookPages403Error1(
            out var apiV1MiscFacebookPages403Error1Value)) onApiV1MiscFacebookPages403Error1(
            apiV1MiscFacebookPages403Error1Value);
        else if (TryGetApiV1MiscFacebookPages404Error1(
            out var apiV1MiscFacebookPages404Error1Value)) onApiV1MiscFacebookPages404Error1(
            apiV1MiscFacebookPages404Error1Value);
        else if (TryGetApiV1MiscFacebookPages429Error1(
            out var apiV1MiscFacebookPages429Error1Value)) onApiV1MiscFacebookPages429Error1(
            apiV1MiscFacebookPages429Error1Value);
        else if (TryGetApiV1MiscFacebookPages500Error1(
            out var apiV1MiscFacebookPages500Error1Value)) onApiV1MiscFacebookPages500Error1(
            apiV1MiscFacebookPages500Error1Value);
        else if (TryGetApiV1MiscFacebookPages502Error1(
            out var apiV1MiscFacebookPages502Error1Value)) onApiV1MiscFacebookPages502Error1(
            apiV1MiscFacebookPages502Error1Value);
        else if (TryGetApiV1MiscFacebookPages503Error1(
            out var apiV1MiscFacebookPages503Error1Value)) onApiV1MiscFacebookPages503Error1(
            apiV1MiscFacebookPages503Error1Value);
        else if (TryGetApiV1MiscFacebookPages504Error1(
            out var apiV1MiscFacebookPages504Error1Value)) onApiV1MiscFacebookPages504Error1(
            apiV1MiscFacebookPages504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookSearchPagesError)} holds no value.");
    }

    private static Task<MiscFacebookSearchPagesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookPages400Error1>().As(AsApiV1MiscFacebookPages400Error1),
            401 => response.Json<ApiV1MiscFacebookPages401Error1>().As(AsApiV1MiscFacebookPages401Error1),
            403 => response.Json<ApiV1MiscFacebookPages403Error1>().As(AsApiV1MiscFacebookPages403Error1),
            404 => response.Json<ApiV1MiscFacebookPages404Error1>().As(AsApiV1MiscFacebookPages404Error1),
            429 => response.Json<ApiV1MiscFacebookPages429Error1>().As(AsApiV1MiscFacebookPages429Error1),
            500 => response.Json<ApiV1MiscFacebookPages500Error1>().As(AsApiV1MiscFacebookPages500Error1),
            502 => response.Json<ApiV1MiscFacebookPages502Error1>().As(AsApiV1MiscFacebookPages502Error1),
            503 => response.Json<ApiV1MiscFacebookPages503Error1>().As(AsApiV1MiscFacebookPages503Error1),
            504 => response.Json<ApiV1MiscFacebookPages504Error1>().As(AsApiV1MiscFacebookPages504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookSearchPagesError> Response { get; } = new(Create);
}
