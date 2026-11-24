using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscInstagramSearchLocationsError : ApiError
{
    private readonly Optional<ApiV1MiscInstagramLocations400Error1> _apiV1MiscInstagramLocations400Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations401Error1> _apiV1MiscInstagramLocations401Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations403Error1> _apiV1MiscInstagramLocations403Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations404Error1> _apiV1MiscInstagramLocations404Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations429Error1> _apiV1MiscInstagramLocations429Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations500Error1> _apiV1MiscInstagramLocations500Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations502Error1> _apiV1MiscInstagramLocations502Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations503Error1> _apiV1MiscInstagramLocations503Error1Value;

    private readonly Optional<ApiV1MiscInstagramLocations504Error1> _apiV1MiscInstagramLocations504Error1Value;

    private MiscInstagramSearchLocationsError(Optional<ApiV1MiscInstagramLocations400Error1> apiV1MiscInstagramLocations400Error1Value,
        Optional<ApiV1MiscInstagramLocations401Error1> apiV1MiscInstagramLocations401Error1Value,
        Optional<ApiV1MiscInstagramLocations403Error1> apiV1MiscInstagramLocations403Error1Value,
        Optional<ApiV1MiscInstagramLocations404Error1> apiV1MiscInstagramLocations404Error1Value,
        Optional<ApiV1MiscInstagramLocations429Error1> apiV1MiscInstagramLocations429Error1Value,
        Optional<ApiV1MiscInstagramLocations500Error1> apiV1MiscInstagramLocations500Error1Value,
        Optional<ApiV1MiscInstagramLocations502Error1> apiV1MiscInstagramLocations502Error1Value,
        Optional<ApiV1MiscInstagramLocations503Error1> apiV1MiscInstagramLocations503Error1Value,
        Optional<ApiV1MiscInstagramLocations504Error1> apiV1MiscInstagramLocations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscInstagramLocations400Error1Value = apiV1MiscInstagramLocations400Error1Value;
        _apiV1MiscInstagramLocations401Error1Value = apiV1MiscInstagramLocations401Error1Value;
        _apiV1MiscInstagramLocations403Error1Value = apiV1MiscInstagramLocations403Error1Value;
        _apiV1MiscInstagramLocations404Error1Value = apiV1MiscInstagramLocations404Error1Value;
        _apiV1MiscInstagramLocations429Error1Value = apiV1MiscInstagramLocations429Error1Value;
        _apiV1MiscInstagramLocations500Error1Value = apiV1MiscInstagramLocations500Error1Value;
        _apiV1MiscInstagramLocations502Error1Value = apiV1MiscInstagramLocations502Error1Value;
        _apiV1MiscInstagramLocations503Error1Value = apiV1MiscInstagramLocations503Error1Value;
        _apiV1MiscInstagramLocations504Error1Value = apiV1MiscInstagramLocations504Error1Value;
    }

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations400Error1(ApiV1MiscInstagramLocations400Error1 value) =>
        new(
            Optional<ApiV1MiscInstagramLocations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations401Error1(ApiV1MiscInstagramLocations401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscInstagramLocations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations403Error1(ApiV1MiscInstagramLocations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscInstagramLocations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations404Error1(ApiV1MiscInstagramLocations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations429Error1(ApiV1MiscInstagramLocations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations500Error1(ApiV1MiscInstagramLocations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations502Error1(ApiV1MiscInstagramLocations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations503Error1(ApiV1MiscInstagramLocations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations503Error1>.Some(value),
            default,
            default);

    private static MiscInstagramSearchLocationsError AsApiV1MiscInstagramLocations504Error1(ApiV1MiscInstagramLocations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscInstagramLocations504Error1>.Some(value),
            default);

    private static MiscInstagramSearchLocationsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscInstagramLocations400Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations400Error1? value) =>
        _apiV1MiscInstagramLocations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations401Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations401Error1? value) =>
        _apiV1MiscInstagramLocations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations403Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations403Error1? value) =>
        _apiV1MiscInstagramLocations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations404Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations404Error1? value) =>
        _apiV1MiscInstagramLocations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations429Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations429Error1? value) =>
        _apiV1MiscInstagramLocations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations500Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations500Error1? value) =>
        _apiV1MiscInstagramLocations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations502Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations502Error1? value) =>
        _apiV1MiscInstagramLocations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations503Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations503Error1? value) =>
        _apiV1MiscInstagramLocations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscInstagramLocations504Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations504Error1? value) =>
        _apiV1MiscInstagramLocations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscInstagramLocations400Error1, TResult> onApiV1MiscInstagramLocations400Error1,
        Func<ApiV1MiscInstagramLocations401Error1, TResult> onApiV1MiscInstagramLocations401Error1,
        Func<ApiV1MiscInstagramLocations403Error1, TResult> onApiV1MiscInstagramLocations403Error1,
        Func<ApiV1MiscInstagramLocations404Error1, TResult> onApiV1MiscInstagramLocations404Error1,
        Func<ApiV1MiscInstagramLocations429Error1, TResult> onApiV1MiscInstagramLocations429Error1,
        Func<ApiV1MiscInstagramLocations500Error1, TResult> onApiV1MiscInstagramLocations500Error1,
        Func<ApiV1MiscInstagramLocations502Error1, TResult> onApiV1MiscInstagramLocations502Error1,
        Func<ApiV1MiscInstagramLocations503Error1, TResult> onApiV1MiscInstagramLocations503Error1,
        Func<ApiV1MiscInstagramLocations504Error1, TResult> onApiV1MiscInstagramLocations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscInstagramLocations400Error1(
                out var apiV1MiscInstagramLocations400Error1Value) => onApiV1MiscInstagramLocations400Error1(
                apiV1MiscInstagramLocations400Error1Value),
            _ when TryGetApiV1MiscInstagramLocations401Error1(
                out var apiV1MiscInstagramLocations401Error1Value) => onApiV1MiscInstagramLocations401Error1(
                apiV1MiscInstagramLocations401Error1Value),
            _ when TryGetApiV1MiscInstagramLocations403Error1(
                out var apiV1MiscInstagramLocations403Error1Value) => onApiV1MiscInstagramLocations403Error1(
                apiV1MiscInstagramLocations403Error1Value),
            _ when TryGetApiV1MiscInstagramLocations404Error1(
                out var apiV1MiscInstagramLocations404Error1Value) => onApiV1MiscInstagramLocations404Error1(
                apiV1MiscInstagramLocations404Error1Value),
            _ when TryGetApiV1MiscInstagramLocations429Error1(
                out var apiV1MiscInstagramLocations429Error1Value) => onApiV1MiscInstagramLocations429Error1(
                apiV1MiscInstagramLocations429Error1Value),
            _ when TryGetApiV1MiscInstagramLocations500Error1(
                out var apiV1MiscInstagramLocations500Error1Value) => onApiV1MiscInstagramLocations500Error1(
                apiV1MiscInstagramLocations500Error1Value),
            _ when TryGetApiV1MiscInstagramLocations502Error1(
                out var apiV1MiscInstagramLocations502Error1Value) => onApiV1MiscInstagramLocations502Error1(
                apiV1MiscInstagramLocations502Error1Value),
            _ when TryGetApiV1MiscInstagramLocations503Error1(
                out var apiV1MiscInstagramLocations503Error1Value) => onApiV1MiscInstagramLocations503Error1(
                apiV1MiscInstagramLocations503Error1Value),
            _ when TryGetApiV1MiscInstagramLocations504Error1(
                out var apiV1MiscInstagramLocations504Error1Value) => onApiV1MiscInstagramLocations504Error1(
                apiV1MiscInstagramLocations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscInstagramSearchLocationsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscInstagramLocations400Error1> onApiV1MiscInstagramLocations400Error1,
        Action<ApiV1MiscInstagramLocations401Error1> onApiV1MiscInstagramLocations401Error1,
        Action<ApiV1MiscInstagramLocations403Error1> onApiV1MiscInstagramLocations403Error1,
        Action<ApiV1MiscInstagramLocations404Error1> onApiV1MiscInstagramLocations404Error1,
        Action<ApiV1MiscInstagramLocations429Error1> onApiV1MiscInstagramLocations429Error1,
        Action<ApiV1MiscInstagramLocations500Error1> onApiV1MiscInstagramLocations500Error1,
        Action<ApiV1MiscInstagramLocations502Error1> onApiV1MiscInstagramLocations502Error1,
        Action<ApiV1MiscInstagramLocations503Error1> onApiV1MiscInstagramLocations503Error1,
        Action<ApiV1MiscInstagramLocations504Error1> onApiV1MiscInstagramLocations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscInstagramLocations400Error1(
            out var apiV1MiscInstagramLocations400Error1Value)) onApiV1MiscInstagramLocations400Error1(
            apiV1MiscInstagramLocations400Error1Value);
        else if (TryGetApiV1MiscInstagramLocations401Error1(
            out var apiV1MiscInstagramLocations401Error1Value)) onApiV1MiscInstagramLocations401Error1(
            apiV1MiscInstagramLocations401Error1Value);
        else if (TryGetApiV1MiscInstagramLocations403Error1(
            out var apiV1MiscInstagramLocations403Error1Value)) onApiV1MiscInstagramLocations403Error1(
            apiV1MiscInstagramLocations403Error1Value);
        else if (TryGetApiV1MiscInstagramLocations404Error1(
            out var apiV1MiscInstagramLocations404Error1Value)) onApiV1MiscInstagramLocations404Error1(
            apiV1MiscInstagramLocations404Error1Value);
        else if (TryGetApiV1MiscInstagramLocations429Error1(
            out var apiV1MiscInstagramLocations429Error1Value)) onApiV1MiscInstagramLocations429Error1(
            apiV1MiscInstagramLocations429Error1Value);
        else if (TryGetApiV1MiscInstagramLocations500Error1(
            out var apiV1MiscInstagramLocations500Error1Value)) onApiV1MiscInstagramLocations500Error1(
            apiV1MiscInstagramLocations500Error1Value);
        else if (TryGetApiV1MiscInstagramLocations502Error1(
            out var apiV1MiscInstagramLocations502Error1Value)) onApiV1MiscInstagramLocations502Error1(
            apiV1MiscInstagramLocations502Error1Value);
        else if (TryGetApiV1MiscInstagramLocations503Error1(
            out var apiV1MiscInstagramLocations503Error1Value)) onApiV1MiscInstagramLocations503Error1(
            apiV1MiscInstagramLocations503Error1Value);
        else if (TryGetApiV1MiscInstagramLocations504Error1(
            out var apiV1MiscInstagramLocations504Error1Value)) onApiV1MiscInstagramLocations504Error1(
            apiV1MiscInstagramLocations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscInstagramSearchLocationsError)} holds no value.");
    }

    private static Task<MiscInstagramSearchLocationsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscInstagramLocations400Error1>().As(AsApiV1MiscInstagramLocations400Error1),
            401 => response.Json<ApiV1MiscInstagramLocations401Error1>().As(AsApiV1MiscInstagramLocations401Error1),
            403 => response.Json<ApiV1MiscInstagramLocations403Error1>().As(AsApiV1MiscInstagramLocations403Error1),
            404 => response.Json<ApiV1MiscInstagramLocations404Error1>().As(AsApiV1MiscInstagramLocations404Error1),
            429 => response.Json<ApiV1MiscInstagramLocations429Error1>().As(AsApiV1MiscInstagramLocations429Error1),
            500 => response.Json<ApiV1MiscInstagramLocations500Error1>().As(AsApiV1MiscInstagramLocations500Error1),
            502 => response.Json<ApiV1MiscInstagramLocations502Error1>().As(AsApiV1MiscInstagramLocations502Error1),
            503 => response.Json<ApiV1MiscInstagramLocations503Error1>().As(AsApiV1MiscInstagramLocations503Error1),
            504 => response.Json<ApiV1MiscInstagramLocations504Error1>().As(AsApiV1MiscInstagramLocations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscInstagramSearchLocationsError> Response { get; } = new(Create);
}
