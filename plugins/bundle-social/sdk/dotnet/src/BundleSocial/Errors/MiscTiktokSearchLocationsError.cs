using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscTiktokSearchLocationsError : ApiError
{
    private readonly Optional<ApiV1MiscTiktokLocations400Error1> _apiV1MiscTiktokLocations400Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations401Error1> _apiV1MiscTiktokLocations401Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations403Error1> _apiV1MiscTiktokLocations403Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations404Error1> _apiV1MiscTiktokLocations404Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations429Error1> _apiV1MiscTiktokLocations429Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations500Error1> _apiV1MiscTiktokLocations500Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations502Error1> _apiV1MiscTiktokLocations502Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations503Error1> _apiV1MiscTiktokLocations503Error1Value;

    private readonly Optional<ApiV1MiscTiktokLocations504Error1> _apiV1MiscTiktokLocations504Error1Value;

    private MiscTiktokSearchLocationsError(Optional<ApiV1MiscTiktokLocations400Error1> apiV1MiscTiktokLocations400Error1Value,
        Optional<ApiV1MiscTiktokLocations401Error1> apiV1MiscTiktokLocations401Error1Value,
        Optional<ApiV1MiscTiktokLocations403Error1> apiV1MiscTiktokLocations403Error1Value,
        Optional<ApiV1MiscTiktokLocations404Error1> apiV1MiscTiktokLocations404Error1Value,
        Optional<ApiV1MiscTiktokLocations429Error1> apiV1MiscTiktokLocations429Error1Value,
        Optional<ApiV1MiscTiktokLocations500Error1> apiV1MiscTiktokLocations500Error1Value,
        Optional<ApiV1MiscTiktokLocations502Error1> apiV1MiscTiktokLocations502Error1Value,
        Optional<ApiV1MiscTiktokLocations503Error1> apiV1MiscTiktokLocations503Error1Value,
        Optional<ApiV1MiscTiktokLocations504Error1> apiV1MiscTiktokLocations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscTiktokLocations400Error1Value = apiV1MiscTiktokLocations400Error1Value;
        _apiV1MiscTiktokLocations401Error1Value = apiV1MiscTiktokLocations401Error1Value;
        _apiV1MiscTiktokLocations403Error1Value = apiV1MiscTiktokLocations403Error1Value;
        _apiV1MiscTiktokLocations404Error1Value = apiV1MiscTiktokLocations404Error1Value;
        _apiV1MiscTiktokLocations429Error1Value = apiV1MiscTiktokLocations429Error1Value;
        _apiV1MiscTiktokLocations500Error1Value = apiV1MiscTiktokLocations500Error1Value;
        _apiV1MiscTiktokLocations502Error1Value = apiV1MiscTiktokLocations502Error1Value;
        _apiV1MiscTiktokLocations503Error1Value = apiV1MiscTiktokLocations503Error1Value;
        _apiV1MiscTiktokLocations504Error1Value = apiV1MiscTiktokLocations504Error1Value;
    }

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations400Error1(ApiV1MiscTiktokLocations400Error1 value) =>
        new(
            Optional<ApiV1MiscTiktokLocations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations401Error1(ApiV1MiscTiktokLocations401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscTiktokLocations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations403Error1(ApiV1MiscTiktokLocations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscTiktokLocations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations404Error1(ApiV1MiscTiktokLocations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations429Error1(ApiV1MiscTiktokLocations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations500Error1(ApiV1MiscTiktokLocations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations502Error1(ApiV1MiscTiktokLocations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations503Error1(ApiV1MiscTiktokLocations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations503Error1>.Some(value),
            default,
            default);

    private static MiscTiktokSearchLocationsError AsApiV1MiscTiktokLocations504Error1(ApiV1MiscTiktokLocations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscTiktokLocations504Error1>.Some(value),
            default);

    private static MiscTiktokSearchLocationsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscTiktokLocations400Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations400Error1? value) =>
        _apiV1MiscTiktokLocations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations401Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations401Error1? value) =>
        _apiV1MiscTiktokLocations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations403Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations403Error1? value) =>
        _apiV1MiscTiktokLocations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations404Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations404Error1? value) =>
        _apiV1MiscTiktokLocations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations429Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations429Error1? value) =>
        _apiV1MiscTiktokLocations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations500Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations500Error1? value) =>
        _apiV1MiscTiktokLocations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations502Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations502Error1? value) =>
        _apiV1MiscTiktokLocations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations503Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations503Error1? value) =>
        _apiV1MiscTiktokLocations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscTiktokLocations504Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations504Error1? value) =>
        _apiV1MiscTiktokLocations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscTiktokLocations400Error1, TResult> onApiV1MiscTiktokLocations400Error1,
        Func<ApiV1MiscTiktokLocations401Error1, TResult> onApiV1MiscTiktokLocations401Error1,
        Func<ApiV1MiscTiktokLocations403Error1, TResult> onApiV1MiscTiktokLocations403Error1,
        Func<ApiV1MiscTiktokLocations404Error1, TResult> onApiV1MiscTiktokLocations404Error1,
        Func<ApiV1MiscTiktokLocations429Error1, TResult> onApiV1MiscTiktokLocations429Error1,
        Func<ApiV1MiscTiktokLocations500Error1, TResult> onApiV1MiscTiktokLocations500Error1,
        Func<ApiV1MiscTiktokLocations502Error1, TResult> onApiV1MiscTiktokLocations502Error1,
        Func<ApiV1MiscTiktokLocations503Error1, TResult> onApiV1MiscTiktokLocations503Error1,
        Func<ApiV1MiscTiktokLocations504Error1, TResult> onApiV1MiscTiktokLocations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscTiktokLocations400Error1(
                out var apiV1MiscTiktokLocations400Error1Value) => onApiV1MiscTiktokLocations400Error1(
                apiV1MiscTiktokLocations400Error1Value),
            _ when TryGetApiV1MiscTiktokLocations401Error1(
                out var apiV1MiscTiktokLocations401Error1Value) => onApiV1MiscTiktokLocations401Error1(
                apiV1MiscTiktokLocations401Error1Value),
            _ when TryGetApiV1MiscTiktokLocations403Error1(
                out var apiV1MiscTiktokLocations403Error1Value) => onApiV1MiscTiktokLocations403Error1(
                apiV1MiscTiktokLocations403Error1Value),
            _ when TryGetApiV1MiscTiktokLocations404Error1(
                out var apiV1MiscTiktokLocations404Error1Value) => onApiV1MiscTiktokLocations404Error1(
                apiV1MiscTiktokLocations404Error1Value),
            _ when TryGetApiV1MiscTiktokLocations429Error1(
                out var apiV1MiscTiktokLocations429Error1Value) => onApiV1MiscTiktokLocations429Error1(
                apiV1MiscTiktokLocations429Error1Value),
            _ when TryGetApiV1MiscTiktokLocations500Error1(
                out var apiV1MiscTiktokLocations500Error1Value) => onApiV1MiscTiktokLocations500Error1(
                apiV1MiscTiktokLocations500Error1Value),
            _ when TryGetApiV1MiscTiktokLocations502Error1(
                out var apiV1MiscTiktokLocations502Error1Value) => onApiV1MiscTiktokLocations502Error1(
                apiV1MiscTiktokLocations502Error1Value),
            _ when TryGetApiV1MiscTiktokLocations503Error1(
                out var apiV1MiscTiktokLocations503Error1Value) => onApiV1MiscTiktokLocations503Error1(
                apiV1MiscTiktokLocations503Error1Value),
            _ when TryGetApiV1MiscTiktokLocations504Error1(
                out var apiV1MiscTiktokLocations504Error1Value) => onApiV1MiscTiktokLocations504Error1(
                apiV1MiscTiktokLocations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscTiktokSearchLocationsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscTiktokLocations400Error1> onApiV1MiscTiktokLocations400Error1,
        Action<ApiV1MiscTiktokLocations401Error1> onApiV1MiscTiktokLocations401Error1,
        Action<ApiV1MiscTiktokLocations403Error1> onApiV1MiscTiktokLocations403Error1,
        Action<ApiV1MiscTiktokLocations404Error1> onApiV1MiscTiktokLocations404Error1,
        Action<ApiV1MiscTiktokLocations429Error1> onApiV1MiscTiktokLocations429Error1,
        Action<ApiV1MiscTiktokLocations500Error1> onApiV1MiscTiktokLocations500Error1,
        Action<ApiV1MiscTiktokLocations502Error1> onApiV1MiscTiktokLocations502Error1,
        Action<ApiV1MiscTiktokLocations503Error1> onApiV1MiscTiktokLocations503Error1,
        Action<ApiV1MiscTiktokLocations504Error1> onApiV1MiscTiktokLocations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscTiktokLocations400Error1(
            out var apiV1MiscTiktokLocations400Error1Value)) onApiV1MiscTiktokLocations400Error1(
            apiV1MiscTiktokLocations400Error1Value);
        else if (TryGetApiV1MiscTiktokLocations401Error1(
            out var apiV1MiscTiktokLocations401Error1Value)) onApiV1MiscTiktokLocations401Error1(
            apiV1MiscTiktokLocations401Error1Value);
        else if (TryGetApiV1MiscTiktokLocations403Error1(
            out var apiV1MiscTiktokLocations403Error1Value)) onApiV1MiscTiktokLocations403Error1(
            apiV1MiscTiktokLocations403Error1Value);
        else if (TryGetApiV1MiscTiktokLocations404Error1(
            out var apiV1MiscTiktokLocations404Error1Value)) onApiV1MiscTiktokLocations404Error1(
            apiV1MiscTiktokLocations404Error1Value);
        else if (TryGetApiV1MiscTiktokLocations429Error1(
            out var apiV1MiscTiktokLocations429Error1Value)) onApiV1MiscTiktokLocations429Error1(
            apiV1MiscTiktokLocations429Error1Value);
        else if (TryGetApiV1MiscTiktokLocations500Error1(
            out var apiV1MiscTiktokLocations500Error1Value)) onApiV1MiscTiktokLocations500Error1(
            apiV1MiscTiktokLocations500Error1Value);
        else if (TryGetApiV1MiscTiktokLocations502Error1(
            out var apiV1MiscTiktokLocations502Error1Value)) onApiV1MiscTiktokLocations502Error1(
            apiV1MiscTiktokLocations502Error1Value);
        else if (TryGetApiV1MiscTiktokLocations503Error1(
            out var apiV1MiscTiktokLocations503Error1Value)) onApiV1MiscTiktokLocations503Error1(
            apiV1MiscTiktokLocations503Error1Value);
        else if (TryGetApiV1MiscTiktokLocations504Error1(
            out var apiV1MiscTiktokLocations504Error1Value)) onApiV1MiscTiktokLocations504Error1(
            apiV1MiscTiktokLocations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscTiktokSearchLocationsError)} holds no value.");
    }

    private static Task<MiscTiktokSearchLocationsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscTiktokLocations400Error1>().As(AsApiV1MiscTiktokLocations400Error1),
            401 => response.Json<ApiV1MiscTiktokLocations401Error1>().As(AsApiV1MiscTiktokLocations401Error1),
            403 => response.Json<ApiV1MiscTiktokLocations403Error1>().As(AsApiV1MiscTiktokLocations403Error1),
            404 => response.Json<ApiV1MiscTiktokLocations404Error1>().As(AsApiV1MiscTiktokLocations404Error1),
            429 => response.Json<ApiV1MiscTiktokLocations429Error1>().As(AsApiV1MiscTiktokLocations429Error1),
            500 => response.Json<ApiV1MiscTiktokLocations500Error1>().As(AsApiV1MiscTiktokLocations500Error1),
            502 => response.Json<ApiV1MiscTiktokLocations502Error1>().As(AsApiV1MiscTiktokLocations502Error1),
            503 => response.Json<ApiV1MiscTiktokLocations503Error1>().As(AsApiV1MiscTiktokLocations503Error1),
            504 => response.Json<ApiV1MiscTiktokLocations504Error1>().As(AsApiV1MiscTiktokLocations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscTiktokSearchLocationsError> Response { get; } = new(Create);
}
