using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscPinterestEditPinError : ApiError
{
    private readonly Optional<ApiV1MiscPinterestPin400Error1> _apiV1MiscPinterestPin400Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin401Error1> _apiV1MiscPinterestPin401Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin403Error1> _apiV1MiscPinterestPin403Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin404Error1> _apiV1MiscPinterestPin404Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin429Error1> _apiV1MiscPinterestPin429Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin500Error1> _apiV1MiscPinterestPin500Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin502Error1> _apiV1MiscPinterestPin502Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin503Error1> _apiV1MiscPinterestPin503Error1Value;

    private readonly Optional<ApiV1MiscPinterestPin504Error1> _apiV1MiscPinterestPin504Error1Value;

    private MiscPinterestEditPinError(Optional<ApiV1MiscPinterestPin400Error1> apiV1MiscPinterestPin400Error1Value,
        Optional<ApiV1MiscPinterestPin401Error1> apiV1MiscPinterestPin401Error1Value,
        Optional<ApiV1MiscPinterestPin403Error1> apiV1MiscPinterestPin403Error1Value,
        Optional<ApiV1MiscPinterestPin404Error1> apiV1MiscPinterestPin404Error1Value,
        Optional<ApiV1MiscPinterestPin429Error1> apiV1MiscPinterestPin429Error1Value,
        Optional<ApiV1MiscPinterestPin500Error1> apiV1MiscPinterestPin500Error1Value,
        Optional<ApiV1MiscPinterestPin502Error1> apiV1MiscPinterestPin502Error1Value,
        Optional<ApiV1MiscPinterestPin503Error1> apiV1MiscPinterestPin503Error1Value,
        Optional<ApiV1MiscPinterestPin504Error1> apiV1MiscPinterestPin504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscPinterestPin400Error1Value = apiV1MiscPinterestPin400Error1Value;
        _apiV1MiscPinterestPin401Error1Value = apiV1MiscPinterestPin401Error1Value;
        _apiV1MiscPinterestPin403Error1Value = apiV1MiscPinterestPin403Error1Value;
        _apiV1MiscPinterestPin404Error1Value = apiV1MiscPinterestPin404Error1Value;
        _apiV1MiscPinterestPin429Error1Value = apiV1MiscPinterestPin429Error1Value;
        _apiV1MiscPinterestPin500Error1Value = apiV1MiscPinterestPin500Error1Value;
        _apiV1MiscPinterestPin502Error1Value = apiV1MiscPinterestPin502Error1Value;
        _apiV1MiscPinterestPin503Error1Value = apiV1MiscPinterestPin503Error1Value;
        _apiV1MiscPinterestPin504Error1Value = apiV1MiscPinterestPin504Error1Value;
    }

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin400Error1(ApiV1MiscPinterestPin400Error1 value) =>
        new(
            Optional<ApiV1MiscPinterestPin400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin401Error1(ApiV1MiscPinterestPin401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscPinterestPin401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin403Error1(ApiV1MiscPinterestPin403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscPinterestPin403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin404Error1(ApiV1MiscPinterestPin404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin429Error1(ApiV1MiscPinterestPin429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin500Error1(ApiV1MiscPinterestPin500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin502Error1(ApiV1MiscPinterestPin502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin503Error1(ApiV1MiscPinterestPin503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin503Error1>.Some(value),
            default,
            default);

    private static MiscPinterestEditPinError AsApiV1MiscPinterestPin504Error1(ApiV1MiscPinterestPin504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscPinterestPin504Error1>.Some(value),
            default);

    private static MiscPinterestEditPinError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscPinterestPin400Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin400Error1? value) =>
        _apiV1MiscPinterestPin400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin401Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin401Error1? value) =>
        _apiV1MiscPinterestPin401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin403Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin403Error1? value) =>
        _apiV1MiscPinterestPin403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin404Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin404Error1? value) =>
        _apiV1MiscPinterestPin404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin429Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin429Error1? value) =>
        _apiV1MiscPinterestPin429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin500Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin500Error1? value) =>
        _apiV1MiscPinterestPin500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin502Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin502Error1? value) =>
        _apiV1MiscPinterestPin502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin503Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin503Error1? value) =>
        _apiV1MiscPinterestPin503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscPinterestPin504Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin504Error1? value) =>
        _apiV1MiscPinterestPin504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscPinterestPin400Error1, TResult> onApiV1MiscPinterestPin400Error1,
        Func<ApiV1MiscPinterestPin401Error1, TResult> onApiV1MiscPinterestPin401Error1,
        Func<ApiV1MiscPinterestPin403Error1, TResult> onApiV1MiscPinterestPin403Error1,
        Func<ApiV1MiscPinterestPin404Error1, TResult> onApiV1MiscPinterestPin404Error1,
        Func<ApiV1MiscPinterestPin429Error1, TResult> onApiV1MiscPinterestPin429Error1,
        Func<ApiV1MiscPinterestPin500Error1, TResult> onApiV1MiscPinterestPin500Error1,
        Func<ApiV1MiscPinterestPin502Error1, TResult> onApiV1MiscPinterestPin502Error1,
        Func<ApiV1MiscPinterestPin503Error1, TResult> onApiV1MiscPinterestPin503Error1,
        Func<ApiV1MiscPinterestPin504Error1, TResult> onApiV1MiscPinterestPin504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscPinterestPin400Error1(
                out var apiV1MiscPinterestPin400Error1Value) => onApiV1MiscPinterestPin400Error1(
                apiV1MiscPinterestPin400Error1Value),
            _ when TryGetApiV1MiscPinterestPin401Error1(
                out var apiV1MiscPinterestPin401Error1Value) => onApiV1MiscPinterestPin401Error1(
                apiV1MiscPinterestPin401Error1Value),
            _ when TryGetApiV1MiscPinterestPin403Error1(
                out var apiV1MiscPinterestPin403Error1Value) => onApiV1MiscPinterestPin403Error1(
                apiV1MiscPinterestPin403Error1Value),
            _ when TryGetApiV1MiscPinterestPin404Error1(
                out var apiV1MiscPinterestPin404Error1Value) => onApiV1MiscPinterestPin404Error1(
                apiV1MiscPinterestPin404Error1Value),
            _ when TryGetApiV1MiscPinterestPin429Error1(
                out var apiV1MiscPinterestPin429Error1Value) => onApiV1MiscPinterestPin429Error1(
                apiV1MiscPinterestPin429Error1Value),
            _ when TryGetApiV1MiscPinterestPin500Error1(
                out var apiV1MiscPinterestPin500Error1Value) => onApiV1MiscPinterestPin500Error1(
                apiV1MiscPinterestPin500Error1Value),
            _ when TryGetApiV1MiscPinterestPin502Error1(
                out var apiV1MiscPinterestPin502Error1Value) => onApiV1MiscPinterestPin502Error1(
                apiV1MiscPinterestPin502Error1Value),
            _ when TryGetApiV1MiscPinterestPin503Error1(
                out var apiV1MiscPinterestPin503Error1Value) => onApiV1MiscPinterestPin503Error1(
                apiV1MiscPinterestPin503Error1Value),
            _ when TryGetApiV1MiscPinterestPin504Error1(
                out var apiV1MiscPinterestPin504Error1Value) => onApiV1MiscPinterestPin504Error1(
                apiV1MiscPinterestPin504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscPinterestEditPinError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscPinterestPin400Error1> onApiV1MiscPinterestPin400Error1,
        Action<ApiV1MiscPinterestPin401Error1> onApiV1MiscPinterestPin401Error1,
        Action<ApiV1MiscPinterestPin403Error1> onApiV1MiscPinterestPin403Error1,
        Action<ApiV1MiscPinterestPin404Error1> onApiV1MiscPinterestPin404Error1,
        Action<ApiV1MiscPinterestPin429Error1> onApiV1MiscPinterestPin429Error1,
        Action<ApiV1MiscPinterestPin500Error1> onApiV1MiscPinterestPin500Error1,
        Action<ApiV1MiscPinterestPin502Error1> onApiV1MiscPinterestPin502Error1,
        Action<ApiV1MiscPinterestPin503Error1> onApiV1MiscPinterestPin503Error1,
        Action<ApiV1MiscPinterestPin504Error1> onApiV1MiscPinterestPin504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscPinterestPin400Error1(
            out var apiV1MiscPinterestPin400Error1Value)) onApiV1MiscPinterestPin400Error1(
            apiV1MiscPinterestPin400Error1Value);
        else if (TryGetApiV1MiscPinterestPin401Error1(
            out var apiV1MiscPinterestPin401Error1Value)) onApiV1MiscPinterestPin401Error1(
            apiV1MiscPinterestPin401Error1Value);
        else if (TryGetApiV1MiscPinterestPin403Error1(
            out var apiV1MiscPinterestPin403Error1Value)) onApiV1MiscPinterestPin403Error1(
            apiV1MiscPinterestPin403Error1Value);
        else if (TryGetApiV1MiscPinterestPin404Error1(
            out var apiV1MiscPinterestPin404Error1Value)) onApiV1MiscPinterestPin404Error1(
            apiV1MiscPinterestPin404Error1Value);
        else if (TryGetApiV1MiscPinterestPin429Error1(
            out var apiV1MiscPinterestPin429Error1Value)) onApiV1MiscPinterestPin429Error1(
            apiV1MiscPinterestPin429Error1Value);
        else if (TryGetApiV1MiscPinterestPin500Error1(
            out var apiV1MiscPinterestPin500Error1Value)) onApiV1MiscPinterestPin500Error1(
            apiV1MiscPinterestPin500Error1Value);
        else if (TryGetApiV1MiscPinterestPin502Error1(
            out var apiV1MiscPinterestPin502Error1Value)) onApiV1MiscPinterestPin502Error1(
            apiV1MiscPinterestPin502Error1Value);
        else if (TryGetApiV1MiscPinterestPin503Error1(
            out var apiV1MiscPinterestPin503Error1Value)) onApiV1MiscPinterestPin503Error1(
            apiV1MiscPinterestPin503Error1Value);
        else if (TryGetApiV1MiscPinterestPin504Error1(
            out var apiV1MiscPinterestPin504Error1Value)) onApiV1MiscPinterestPin504Error1(
            apiV1MiscPinterestPin504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscPinterestEditPinError)} holds no value.");
    }

    private static Task<MiscPinterestEditPinError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscPinterestPin400Error1>().As(AsApiV1MiscPinterestPin400Error1),
            401 => response.Json<ApiV1MiscPinterestPin401Error1>().As(AsApiV1MiscPinterestPin401Error1),
            403 => response.Json<ApiV1MiscPinterestPin403Error1>().As(AsApiV1MiscPinterestPin403Error1),
            404 => response.Json<ApiV1MiscPinterestPin404Error1>().As(AsApiV1MiscPinterestPin404Error1),
            429 => response.Json<ApiV1MiscPinterestPin429Error1>().As(AsApiV1MiscPinterestPin429Error1),
            500 => response.Json<ApiV1MiscPinterestPin500Error1>().As(AsApiV1MiscPinterestPin500Error1),
            502 => response.Json<ApiV1MiscPinterestPin502Error1>().As(AsApiV1MiscPinterestPin502Error1),
            503 => response.Json<ApiV1MiscPinterestPin503Error1>().As(AsApiV1MiscPinterestPin503Error1),
            504 => response.Json<ApiV1MiscPinterestPin504Error1>().As(AsApiV1MiscPinterestPin504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscPinterestEditPinError> Response { get; } = new(Create);
}
