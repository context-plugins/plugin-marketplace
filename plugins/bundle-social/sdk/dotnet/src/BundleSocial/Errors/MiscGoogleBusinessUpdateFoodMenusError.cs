using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessUpdateFoodMenusError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1> _apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1> _apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1> _apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1> _apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1> _apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1> _apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1> _apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1> _apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1> _apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value;

    private MiscGoogleBusinessUpdateFoodMenusError(Optional<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1> apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1> apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1> apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1> apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1> apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1> apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1> apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1> apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1> apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value;
        _apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value =
            apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value;
    }

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus400Error1(ApiV1MiscGoogleBusinessLocationFoodMenus400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus401Error1(ApiV1MiscGoogleBusinessLocationFoodMenus401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus403Error1(ApiV1MiscGoogleBusinessLocationFoodMenus403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus404Error1(ApiV1MiscGoogleBusinessLocationFoodMenus404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus429Error1(ApiV1MiscGoogleBusinessLocationFoodMenus429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus500Error1(ApiV1MiscGoogleBusinessLocationFoodMenus500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus502Error1(ApiV1MiscGoogleBusinessLocationFoodMenus502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus503Error1(ApiV1MiscGoogleBusinessLocationFoodMenus503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsApiV1MiscGoogleBusinessLocationFoodMenus504Error1(ApiV1MiscGoogleBusinessLocationFoodMenus504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessUpdateFoodMenusError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationFoodMenus504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus400Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus401Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus403Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus404Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus429Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus500Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus502Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus503Error1,
        Func<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1, TResult> onApiV1MiscGoogleBusinessLocationFoodMenus504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus400Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus401Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus401Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus403Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus403Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus404Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus404Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus429Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus429Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus500Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus500Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus502Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus502Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus503Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus503Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationFoodMenus504Error1(
                out var apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value) => onApiV1MiscGoogleBusinessLocationFoodMenus504Error1(
                apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessUpdateFoodMenusError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1> onApiV1MiscGoogleBusinessLocationFoodMenus400Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1> onApiV1MiscGoogleBusinessLocationFoodMenus401Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1> onApiV1MiscGoogleBusinessLocationFoodMenus403Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1> onApiV1MiscGoogleBusinessLocationFoodMenus404Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1> onApiV1MiscGoogleBusinessLocationFoodMenus429Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1> onApiV1MiscGoogleBusinessLocationFoodMenus500Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1> onApiV1MiscGoogleBusinessLocationFoodMenus502Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1> onApiV1MiscGoogleBusinessLocationFoodMenus503Error1,
        Action<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1> onApiV1MiscGoogleBusinessLocationFoodMenus504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus400Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus401Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus401Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus403Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus403Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus404Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus404Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus429Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus429Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus500Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus500Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus502Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus502Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus503Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus503Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationFoodMenus504Error1(
            out var apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value)) onApiV1MiscGoogleBusinessLocationFoodMenus504Error1(
            apiV1MiscGoogleBusinessLocationFoodMenus504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateFoodMenusError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessUpdateFoodMenusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationFoodMenus504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationFoodMenus504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessUpdateFoodMenusError> Response { get; } = new(Create);
}
