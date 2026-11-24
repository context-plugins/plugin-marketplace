using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessUpdateLocationError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocation400Error1> _apiV1MiscGoogleBusinessLocation400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation401Error1> _apiV1MiscGoogleBusinessLocation401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation403Error1> _apiV1MiscGoogleBusinessLocation403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation404Error1> _apiV1MiscGoogleBusinessLocation404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation429Error1> _apiV1MiscGoogleBusinessLocation429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation500Error1> _apiV1MiscGoogleBusinessLocation500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation502Error1> _apiV1MiscGoogleBusinessLocation502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation503Error1> _apiV1MiscGoogleBusinessLocation503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocation504Error1> _apiV1MiscGoogleBusinessLocation504Error1Value;

    private MiscGoogleBusinessUpdateLocationError(Optional<ApiV1MiscGoogleBusinessLocation400Error1> apiV1MiscGoogleBusinessLocation400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation401Error1> apiV1MiscGoogleBusinessLocation401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation403Error1> apiV1MiscGoogleBusinessLocation403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation404Error1> apiV1MiscGoogleBusinessLocation404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation429Error1> apiV1MiscGoogleBusinessLocation429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation500Error1> apiV1MiscGoogleBusinessLocation500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation502Error1> apiV1MiscGoogleBusinessLocation502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation503Error1> apiV1MiscGoogleBusinessLocation503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocation504Error1> apiV1MiscGoogleBusinessLocation504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocation400Error1Value = apiV1MiscGoogleBusinessLocation400Error1Value;
        _apiV1MiscGoogleBusinessLocation401Error1Value = apiV1MiscGoogleBusinessLocation401Error1Value;
        _apiV1MiscGoogleBusinessLocation403Error1Value = apiV1MiscGoogleBusinessLocation403Error1Value;
        _apiV1MiscGoogleBusinessLocation404Error1Value = apiV1MiscGoogleBusinessLocation404Error1Value;
        _apiV1MiscGoogleBusinessLocation429Error1Value = apiV1MiscGoogleBusinessLocation429Error1Value;
        _apiV1MiscGoogleBusinessLocation500Error1Value = apiV1MiscGoogleBusinessLocation500Error1Value;
        _apiV1MiscGoogleBusinessLocation502Error1Value = apiV1MiscGoogleBusinessLocation502Error1Value;
        _apiV1MiscGoogleBusinessLocation503Error1Value = apiV1MiscGoogleBusinessLocation503Error1Value;
        _apiV1MiscGoogleBusinessLocation504Error1Value = apiV1MiscGoogleBusinessLocation504Error1Value;
    }

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation400Error1(ApiV1MiscGoogleBusinessLocation400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocation400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation401Error1(ApiV1MiscGoogleBusinessLocation401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocation401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation403Error1(ApiV1MiscGoogleBusinessLocation403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation404Error1(ApiV1MiscGoogleBusinessLocation404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation429Error1(ApiV1MiscGoogleBusinessLocation429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation500Error1(ApiV1MiscGoogleBusinessLocation500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation502Error1(ApiV1MiscGoogleBusinessLocation502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation503Error1(ApiV1MiscGoogleBusinessLocation503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessUpdateLocationError AsApiV1MiscGoogleBusinessLocation504Error1(ApiV1MiscGoogleBusinessLocation504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocation504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessUpdateLocationError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocation400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation400Error1? value) =>
        _apiV1MiscGoogleBusinessLocation400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation401Error1? value) =>
        _apiV1MiscGoogleBusinessLocation401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation403Error1? value) =>
        _apiV1MiscGoogleBusinessLocation403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation404Error1? value) =>
        _apiV1MiscGoogleBusinessLocation404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation429Error1? value) =>
        _apiV1MiscGoogleBusinessLocation429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation500Error1? value) =>
        _apiV1MiscGoogleBusinessLocation500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation502Error1? value) =>
        _apiV1MiscGoogleBusinessLocation502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation503Error1? value) =>
        _apiV1MiscGoogleBusinessLocation503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocation504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation504Error1? value) =>
        _apiV1MiscGoogleBusinessLocation504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocation400Error1, TResult> onApiV1MiscGoogleBusinessLocation400Error1,
        Func<ApiV1MiscGoogleBusinessLocation401Error1, TResult> onApiV1MiscGoogleBusinessLocation401Error1,
        Func<ApiV1MiscGoogleBusinessLocation403Error1, TResult> onApiV1MiscGoogleBusinessLocation403Error1,
        Func<ApiV1MiscGoogleBusinessLocation404Error1, TResult> onApiV1MiscGoogleBusinessLocation404Error1,
        Func<ApiV1MiscGoogleBusinessLocation429Error1, TResult> onApiV1MiscGoogleBusinessLocation429Error1,
        Func<ApiV1MiscGoogleBusinessLocation500Error1, TResult> onApiV1MiscGoogleBusinessLocation500Error1,
        Func<ApiV1MiscGoogleBusinessLocation502Error1, TResult> onApiV1MiscGoogleBusinessLocation502Error1,
        Func<ApiV1MiscGoogleBusinessLocation503Error1, TResult> onApiV1MiscGoogleBusinessLocation503Error1,
        Func<ApiV1MiscGoogleBusinessLocation504Error1, TResult> onApiV1MiscGoogleBusinessLocation504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocation400Error1(
                out var apiV1MiscGoogleBusinessLocation400Error1Value) => onApiV1MiscGoogleBusinessLocation400Error1(
                apiV1MiscGoogleBusinessLocation400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation401Error1(
                out var apiV1MiscGoogleBusinessLocation401Error1Value) => onApiV1MiscGoogleBusinessLocation401Error1(
                apiV1MiscGoogleBusinessLocation401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation403Error1(
                out var apiV1MiscGoogleBusinessLocation403Error1Value) => onApiV1MiscGoogleBusinessLocation403Error1(
                apiV1MiscGoogleBusinessLocation403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation404Error1(
                out var apiV1MiscGoogleBusinessLocation404Error1Value) => onApiV1MiscGoogleBusinessLocation404Error1(
                apiV1MiscGoogleBusinessLocation404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation429Error1(
                out var apiV1MiscGoogleBusinessLocation429Error1Value) => onApiV1MiscGoogleBusinessLocation429Error1(
                apiV1MiscGoogleBusinessLocation429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation500Error1(
                out var apiV1MiscGoogleBusinessLocation500Error1Value) => onApiV1MiscGoogleBusinessLocation500Error1(
                apiV1MiscGoogleBusinessLocation500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation502Error1(
                out var apiV1MiscGoogleBusinessLocation502Error1Value) => onApiV1MiscGoogleBusinessLocation502Error1(
                apiV1MiscGoogleBusinessLocation502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation503Error1(
                out var apiV1MiscGoogleBusinessLocation503Error1Value) => onApiV1MiscGoogleBusinessLocation503Error1(
                apiV1MiscGoogleBusinessLocation503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocation504Error1(
                out var apiV1MiscGoogleBusinessLocation504Error1Value) => onApiV1MiscGoogleBusinessLocation504Error1(
                apiV1MiscGoogleBusinessLocation504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateLocationError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocation400Error1> onApiV1MiscGoogleBusinessLocation400Error1,
        Action<ApiV1MiscGoogleBusinessLocation401Error1> onApiV1MiscGoogleBusinessLocation401Error1,
        Action<ApiV1MiscGoogleBusinessLocation403Error1> onApiV1MiscGoogleBusinessLocation403Error1,
        Action<ApiV1MiscGoogleBusinessLocation404Error1> onApiV1MiscGoogleBusinessLocation404Error1,
        Action<ApiV1MiscGoogleBusinessLocation429Error1> onApiV1MiscGoogleBusinessLocation429Error1,
        Action<ApiV1MiscGoogleBusinessLocation500Error1> onApiV1MiscGoogleBusinessLocation500Error1,
        Action<ApiV1MiscGoogleBusinessLocation502Error1> onApiV1MiscGoogleBusinessLocation502Error1,
        Action<ApiV1MiscGoogleBusinessLocation503Error1> onApiV1MiscGoogleBusinessLocation503Error1,
        Action<ApiV1MiscGoogleBusinessLocation504Error1> onApiV1MiscGoogleBusinessLocation504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocation400Error1(
            out var apiV1MiscGoogleBusinessLocation400Error1Value)) onApiV1MiscGoogleBusinessLocation400Error1(
            apiV1MiscGoogleBusinessLocation400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation401Error1(
            out var apiV1MiscGoogleBusinessLocation401Error1Value)) onApiV1MiscGoogleBusinessLocation401Error1(
            apiV1MiscGoogleBusinessLocation401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation403Error1(
            out var apiV1MiscGoogleBusinessLocation403Error1Value)) onApiV1MiscGoogleBusinessLocation403Error1(
            apiV1MiscGoogleBusinessLocation403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation404Error1(
            out var apiV1MiscGoogleBusinessLocation404Error1Value)) onApiV1MiscGoogleBusinessLocation404Error1(
            apiV1MiscGoogleBusinessLocation404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation429Error1(
            out var apiV1MiscGoogleBusinessLocation429Error1Value)) onApiV1MiscGoogleBusinessLocation429Error1(
            apiV1MiscGoogleBusinessLocation429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation500Error1(
            out var apiV1MiscGoogleBusinessLocation500Error1Value)) onApiV1MiscGoogleBusinessLocation500Error1(
            apiV1MiscGoogleBusinessLocation500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation502Error1(
            out var apiV1MiscGoogleBusinessLocation502Error1Value)) onApiV1MiscGoogleBusinessLocation502Error1(
            apiV1MiscGoogleBusinessLocation502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation503Error1(
            out var apiV1MiscGoogleBusinessLocation503Error1Value)) onApiV1MiscGoogleBusinessLocation503Error1(
            apiV1MiscGoogleBusinessLocation503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocation504Error1(
            out var apiV1MiscGoogleBusinessLocation504Error1Value)) onApiV1MiscGoogleBusinessLocation504Error1(
            apiV1MiscGoogleBusinessLocation504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateLocationError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessUpdateLocationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocation400Error1>().As(
                AsApiV1MiscGoogleBusinessLocation400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocation401Error1>().As(
                AsApiV1MiscGoogleBusinessLocation401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocation403Error1>().As(
                AsApiV1MiscGoogleBusinessLocation403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocation404Error1>().As(
                AsApiV1MiscGoogleBusinessLocation404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocation429Error1>().As(
                AsApiV1MiscGoogleBusinessLocation429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocation500Error1>().As(
                AsApiV1MiscGoogleBusinessLocation500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocation502Error1>().As(
                AsApiV1MiscGoogleBusinessLocation502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocation503Error1>().As(
                AsApiV1MiscGoogleBusinessLocation503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocation504Error1>().As(
                AsApiV1MiscGoogleBusinessLocation504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessUpdateLocationError> Response { get; } = new(Create);
}
