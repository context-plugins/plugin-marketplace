using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessUpdateHoursError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours400Error1> _apiV1MiscGoogleBusinessLocationHours400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours401Error1> _apiV1MiscGoogleBusinessLocationHours401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours403Error1> _apiV1MiscGoogleBusinessLocationHours403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours404Error1> _apiV1MiscGoogleBusinessLocationHours404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours429Error1> _apiV1MiscGoogleBusinessLocationHours429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours500Error1> _apiV1MiscGoogleBusinessLocationHours500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours502Error1> _apiV1MiscGoogleBusinessLocationHours502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours503Error1> _apiV1MiscGoogleBusinessLocationHours503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationHours504Error1> _apiV1MiscGoogleBusinessLocationHours504Error1Value;

    private MiscGoogleBusinessUpdateHoursError(Optional<ApiV1MiscGoogleBusinessLocationHours400Error1> apiV1MiscGoogleBusinessLocationHours400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours401Error1> apiV1MiscGoogleBusinessLocationHours401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours403Error1> apiV1MiscGoogleBusinessLocationHours403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours404Error1> apiV1MiscGoogleBusinessLocationHours404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours429Error1> apiV1MiscGoogleBusinessLocationHours429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours500Error1> apiV1MiscGoogleBusinessLocationHours500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours502Error1> apiV1MiscGoogleBusinessLocationHours502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours503Error1> apiV1MiscGoogleBusinessLocationHours503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationHours504Error1> apiV1MiscGoogleBusinessLocationHours504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationHours400Error1Value = apiV1MiscGoogleBusinessLocationHours400Error1Value;
        _apiV1MiscGoogleBusinessLocationHours401Error1Value = apiV1MiscGoogleBusinessLocationHours401Error1Value;
        _apiV1MiscGoogleBusinessLocationHours403Error1Value = apiV1MiscGoogleBusinessLocationHours403Error1Value;
        _apiV1MiscGoogleBusinessLocationHours404Error1Value = apiV1MiscGoogleBusinessLocationHours404Error1Value;
        _apiV1MiscGoogleBusinessLocationHours429Error1Value = apiV1MiscGoogleBusinessLocationHours429Error1Value;
        _apiV1MiscGoogleBusinessLocationHours500Error1Value = apiV1MiscGoogleBusinessLocationHours500Error1Value;
        _apiV1MiscGoogleBusinessLocationHours502Error1Value = apiV1MiscGoogleBusinessLocationHours502Error1Value;
        _apiV1MiscGoogleBusinessLocationHours503Error1Value = apiV1MiscGoogleBusinessLocationHours503Error1Value;
        _apiV1MiscGoogleBusinessLocationHours504Error1Value = apiV1MiscGoogleBusinessLocationHours504Error1Value;
    }

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours400Error1(ApiV1MiscGoogleBusinessLocationHours400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationHours400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours401Error1(ApiV1MiscGoogleBusinessLocationHours401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours403Error1(ApiV1MiscGoogleBusinessLocationHours403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours404Error1(ApiV1MiscGoogleBusinessLocationHours404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours429Error1(ApiV1MiscGoogleBusinessLocationHours429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours500Error1(ApiV1MiscGoogleBusinessLocationHours500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours502Error1(ApiV1MiscGoogleBusinessLocationHours502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours503Error1(ApiV1MiscGoogleBusinessLocationHours503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessUpdateHoursError AsApiV1MiscGoogleBusinessLocationHours504Error1(ApiV1MiscGoogleBusinessLocationHours504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationHours504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessUpdateHoursError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationHours400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationHours504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationHours504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationHours400Error1, TResult> onApiV1MiscGoogleBusinessLocationHours400Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours401Error1, TResult> onApiV1MiscGoogleBusinessLocationHours401Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours403Error1, TResult> onApiV1MiscGoogleBusinessLocationHours403Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours404Error1, TResult> onApiV1MiscGoogleBusinessLocationHours404Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours429Error1, TResult> onApiV1MiscGoogleBusinessLocationHours429Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours500Error1, TResult> onApiV1MiscGoogleBusinessLocationHours500Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours502Error1, TResult> onApiV1MiscGoogleBusinessLocationHours502Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours503Error1, TResult> onApiV1MiscGoogleBusinessLocationHours503Error1,
        Func<ApiV1MiscGoogleBusinessLocationHours504Error1, TResult> onApiV1MiscGoogleBusinessLocationHours504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationHours400Error1(
                out var apiV1MiscGoogleBusinessLocationHours400Error1Value) => onApiV1MiscGoogleBusinessLocationHours400Error1(
                apiV1MiscGoogleBusinessLocationHours400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours401Error1(
                out var apiV1MiscGoogleBusinessLocationHours401Error1Value) => onApiV1MiscGoogleBusinessLocationHours401Error1(
                apiV1MiscGoogleBusinessLocationHours401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours403Error1(
                out var apiV1MiscGoogleBusinessLocationHours403Error1Value) => onApiV1MiscGoogleBusinessLocationHours403Error1(
                apiV1MiscGoogleBusinessLocationHours403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours404Error1(
                out var apiV1MiscGoogleBusinessLocationHours404Error1Value) => onApiV1MiscGoogleBusinessLocationHours404Error1(
                apiV1MiscGoogleBusinessLocationHours404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours429Error1(
                out var apiV1MiscGoogleBusinessLocationHours429Error1Value) => onApiV1MiscGoogleBusinessLocationHours429Error1(
                apiV1MiscGoogleBusinessLocationHours429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours500Error1(
                out var apiV1MiscGoogleBusinessLocationHours500Error1Value) => onApiV1MiscGoogleBusinessLocationHours500Error1(
                apiV1MiscGoogleBusinessLocationHours500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours502Error1(
                out var apiV1MiscGoogleBusinessLocationHours502Error1Value) => onApiV1MiscGoogleBusinessLocationHours502Error1(
                apiV1MiscGoogleBusinessLocationHours502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours503Error1(
                out var apiV1MiscGoogleBusinessLocationHours503Error1Value) => onApiV1MiscGoogleBusinessLocationHours503Error1(
                apiV1MiscGoogleBusinessLocationHours503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationHours504Error1(
                out var apiV1MiscGoogleBusinessLocationHours504Error1Value) => onApiV1MiscGoogleBusinessLocationHours504Error1(
                apiV1MiscGoogleBusinessLocationHours504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateHoursError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationHours400Error1> onApiV1MiscGoogleBusinessLocationHours400Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours401Error1> onApiV1MiscGoogleBusinessLocationHours401Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours403Error1> onApiV1MiscGoogleBusinessLocationHours403Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours404Error1> onApiV1MiscGoogleBusinessLocationHours404Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours429Error1> onApiV1MiscGoogleBusinessLocationHours429Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours500Error1> onApiV1MiscGoogleBusinessLocationHours500Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours502Error1> onApiV1MiscGoogleBusinessLocationHours502Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours503Error1> onApiV1MiscGoogleBusinessLocationHours503Error1,
        Action<ApiV1MiscGoogleBusinessLocationHours504Error1> onApiV1MiscGoogleBusinessLocationHours504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationHours400Error1(
            out var apiV1MiscGoogleBusinessLocationHours400Error1Value)) onApiV1MiscGoogleBusinessLocationHours400Error1(
            apiV1MiscGoogleBusinessLocationHours400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours401Error1(
            out var apiV1MiscGoogleBusinessLocationHours401Error1Value)) onApiV1MiscGoogleBusinessLocationHours401Error1(
            apiV1MiscGoogleBusinessLocationHours401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours403Error1(
            out var apiV1MiscGoogleBusinessLocationHours403Error1Value)) onApiV1MiscGoogleBusinessLocationHours403Error1(
            apiV1MiscGoogleBusinessLocationHours403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours404Error1(
            out var apiV1MiscGoogleBusinessLocationHours404Error1Value)) onApiV1MiscGoogleBusinessLocationHours404Error1(
            apiV1MiscGoogleBusinessLocationHours404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours429Error1(
            out var apiV1MiscGoogleBusinessLocationHours429Error1Value)) onApiV1MiscGoogleBusinessLocationHours429Error1(
            apiV1MiscGoogleBusinessLocationHours429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours500Error1(
            out var apiV1MiscGoogleBusinessLocationHours500Error1Value)) onApiV1MiscGoogleBusinessLocationHours500Error1(
            apiV1MiscGoogleBusinessLocationHours500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours502Error1(
            out var apiV1MiscGoogleBusinessLocationHours502Error1Value)) onApiV1MiscGoogleBusinessLocationHours502Error1(
            apiV1MiscGoogleBusinessLocationHours502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours503Error1(
            out var apiV1MiscGoogleBusinessLocationHours503Error1Value)) onApiV1MiscGoogleBusinessLocationHours503Error1(
            apiV1MiscGoogleBusinessLocationHours503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationHours504Error1(
            out var apiV1MiscGoogleBusinessLocationHours504Error1Value)) onApiV1MiscGoogleBusinessLocationHours504Error1(
            apiV1MiscGoogleBusinessLocationHours504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateHoursError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessUpdateHoursError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationHours400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationHours401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationHours403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationHours404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationHours429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationHours500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationHours502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationHours503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationHours504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationHours504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessUpdateHoursError> Response { get; } = new(Create);
}
