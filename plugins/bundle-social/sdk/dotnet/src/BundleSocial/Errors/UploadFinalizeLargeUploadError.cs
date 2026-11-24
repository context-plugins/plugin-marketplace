using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class UploadFinalizeLargeUploadError : ApiError
{
    private readonly Optional<ApiV1UploadFinalize400Error1> _apiV1UploadFinalize400Error1Value;

    private readonly Optional<ApiV1UploadFinalize401Error1> _apiV1UploadFinalize401Error1Value;

    private readonly Optional<ApiV1UploadFinalize403Error1> _apiV1UploadFinalize403Error1Value;

    private readonly Optional<ApiV1UploadFinalize404Error1> _apiV1UploadFinalize404Error1Value;

    private readonly Optional<ApiV1UploadFinalize429Error1> _apiV1UploadFinalize429Error1Value;

    private readonly Optional<ApiV1UploadFinalize500Error1> _apiV1UploadFinalize500Error1Value;

    private readonly Optional<ApiV1UploadFinalize502Error1> _apiV1UploadFinalize502Error1Value;

    private readonly Optional<ApiV1UploadFinalize503Error1> _apiV1UploadFinalize503Error1Value;

    private readonly Optional<ApiV1UploadFinalize504Error1> _apiV1UploadFinalize504Error1Value;

    private UploadFinalizeLargeUploadError(Optional<ApiV1UploadFinalize400Error1> apiV1UploadFinalize400Error1Value,
        Optional<ApiV1UploadFinalize401Error1> apiV1UploadFinalize401Error1Value,
        Optional<ApiV1UploadFinalize403Error1> apiV1UploadFinalize403Error1Value,
        Optional<ApiV1UploadFinalize404Error1> apiV1UploadFinalize404Error1Value,
        Optional<ApiV1UploadFinalize429Error1> apiV1UploadFinalize429Error1Value,
        Optional<ApiV1UploadFinalize500Error1> apiV1UploadFinalize500Error1Value,
        Optional<ApiV1UploadFinalize502Error1> apiV1UploadFinalize502Error1Value,
        Optional<ApiV1UploadFinalize503Error1> apiV1UploadFinalize503Error1Value,
        Optional<ApiV1UploadFinalize504Error1> apiV1UploadFinalize504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1UploadFinalize400Error1Value = apiV1UploadFinalize400Error1Value;
        _apiV1UploadFinalize401Error1Value = apiV1UploadFinalize401Error1Value;
        _apiV1UploadFinalize403Error1Value = apiV1UploadFinalize403Error1Value;
        _apiV1UploadFinalize404Error1Value = apiV1UploadFinalize404Error1Value;
        _apiV1UploadFinalize429Error1Value = apiV1UploadFinalize429Error1Value;
        _apiV1UploadFinalize500Error1Value = apiV1UploadFinalize500Error1Value;
        _apiV1UploadFinalize502Error1Value = apiV1UploadFinalize502Error1Value;
        _apiV1UploadFinalize503Error1Value = apiV1UploadFinalize503Error1Value;
        _apiV1UploadFinalize504Error1Value = apiV1UploadFinalize504Error1Value;
    }

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize400Error1(ApiV1UploadFinalize400Error1 value) =>
        new(
            Optional<ApiV1UploadFinalize400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize401Error1(ApiV1UploadFinalize401Error1 value) =>
        new(
            default,
            Optional<ApiV1UploadFinalize401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize403Error1(ApiV1UploadFinalize403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1UploadFinalize403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize404Error1(ApiV1UploadFinalize404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize429Error1(ApiV1UploadFinalize429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize500Error1(ApiV1UploadFinalize500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize502Error1(ApiV1UploadFinalize502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize502Error1>.Some(value),
            default,
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize503Error1(ApiV1UploadFinalize503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize503Error1>.Some(value),
            default,
            default);

    private static UploadFinalizeLargeUploadError AsApiV1UploadFinalize504Error1(ApiV1UploadFinalize504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1UploadFinalize504Error1>.Some(value),
            default);

    private static UploadFinalizeLargeUploadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1UploadFinalize400Error1([NotNullWhen(true)] out ApiV1UploadFinalize400Error1? value) =>
        _apiV1UploadFinalize400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize401Error1([NotNullWhen(true)] out ApiV1UploadFinalize401Error1? value) =>
        _apiV1UploadFinalize401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize403Error1([NotNullWhen(true)] out ApiV1UploadFinalize403Error1? value) =>
        _apiV1UploadFinalize403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize404Error1([NotNullWhen(true)] out ApiV1UploadFinalize404Error1? value) =>
        _apiV1UploadFinalize404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize429Error1([NotNullWhen(true)] out ApiV1UploadFinalize429Error1? value) =>
        _apiV1UploadFinalize429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize500Error1([NotNullWhen(true)] out ApiV1UploadFinalize500Error1? value) =>
        _apiV1UploadFinalize500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize502Error1([NotNullWhen(true)] out ApiV1UploadFinalize502Error1? value) =>
        _apiV1UploadFinalize502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize503Error1([NotNullWhen(true)] out ApiV1UploadFinalize503Error1? value) =>
        _apiV1UploadFinalize503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1UploadFinalize504Error1([NotNullWhen(true)] out ApiV1UploadFinalize504Error1? value) =>
        _apiV1UploadFinalize504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1UploadFinalize400Error1, TResult> onApiV1UploadFinalize400Error1,
        Func<ApiV1UploadFinalize401Error1, TResult> onApiV1UploadFinalize401Error1,
        Func<ApiV1UploadFinalize403Error1, TResult> onApiV1UploadFinalize403Error1,
        Func<ApiV1UploadFinalize404Error1, TResult> onApiV1UploadFinalize404Error1,
        Func<ApiV1UploadFinalize429Error1, TResult> onApiV1UploadFinalize429Error1,
        Func<ApiV1UploadFinalize500Error1, TResult> onApiV1UploadFinalize500Error1,
        Func<ApiV1UploadFinalize502Error1, TResult> onApiV1UploadFinalize502Error1,
        Func<ApiV1UploadFinalize503Error1, TResult> onApiV1UploadFinalize503Error1,
        Func<ApiV1UploadFinalize504Error1, TResult> onApiV1UploadFinalize504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1UploadFinalize400Error1(
                out var apiV1UploadFinalize400Error1Value) => onApiV1UploadFinalize400Error1(
                apiV1UploadFinalize400Error1Value),
            _ when TryGetApiV1UploadFinalize401Error1(
                out var apiV1UploadFinalize401Error1Value) => onApiV1UploadFinalize401Error1(
                apiV1UploadFinalize401Error1Value),
            _ when TryGetApiV1UploadFinalize403Error1(
                out var apiV1UploadFinalize403Error1Value) => onApiV1UploadFinalize403Error1(
                apiV1UploadFinalize403Error1Value),
            _ when TryGetApiV1UploadFinalize404Error1(
                out var apiV1UploadFinalize404Error1Value) => onApiV1UploadFinalize404Error1(
                apiV1UploadFinalize404Error1Value),
            _ when TryGetApiV1UploadFinalize429Error1(
                out var apiV1UploadFinalize429Error1Value) => onApiV1UploadFinalize429Error1(
                apiV1UploadFinalize429Error1Value),
            _ when TryGetApiV1UploadFinalize500Error1(
                out var apiV1UploadFinalize500Error1Value) => onApiV1UploadFinalize500Error1(
                apiV1UploadFinalize500Error1Value),
            _ when TryGetApiV1UploadFinalize502Error1(
                out var apiV1UploadFinalize502Error1Value) => onApiV1UploadFinalize502Error1(
                apiV1UploadFinalize502Error1Value),
            _ when TryGetApiV1UploadFinalize503Error1(
                out var apiV1UploadFinalize503Error1Value) => onApiV1UploadFinalize503Error1(
                apiV1UploadFinalize503Error1Value),
            _ when TryGetApiV1UploadFinalize504Error1(
                out var apiV1UploadFinalize504Error1Value) => onApiV1UploadFinalize504Error1(
                apiV1UploadFinalize504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadFinalizeLargeUploadError)} holds no value.")
        };

    public void Match(Action<ApiV1UploadFinalize400Error1> onApiV1UploadFinalize400Error1,
        Action<ApiV1UploadFinalize401Error1> onApiV1UploadFinalize401Error1,
        Action<ApiV1UploadFinalize403Error1> onApiV1UploadFinalize403Error1,
        Action<ApiV1UploadFinalize404Error1> onApiV1UploadFinalize404Error1,
        Action<ApiV1UploadFinalize429Error1> onApiV1UploadFinalize429Error1,
        Action<ApiV1UploadFinalize500Error1> onApiV1UploadFinalize500Error1,
        Action<ApiV1UploadFinalize502Error1> onApiV1UploadFinalize502Error1,
        Action<ApiV1UploadFinalize503Error1> onApiV1UploadFinalize503Error1,
        Action<ApiV1UploadFinalize504Error1> onApiV1UploadFinalize504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1UploadFinalize400Error1(
            out var apiV1UploadFinalize400Error1Value)) onApiV1UploadFinalize400Error1(
            apiV1UploadFinalize400Error1Value);
        else if (TryGetApiV1UploadFinalize401Error1(
            out var apiV1UploadFinalize401Error1Value)) onApiV1UploadFinalize401Error1(
            apiV1UploadFinalize401Error1Value);
        else if (TryGetApiV1UploadFinalize403Error1(
            out var apiV1UploadFinalize403Error1Value)) onApiV1UploadFinalize403Error1(
            apiV1UploadFinalize403Error1Value);
        else if (TryGetApiV1UploadFinalize404Error1(
            out var apiV1UploadFinalize404Error1Value)) onApiV1UploadFinalize404Error1(
            apiV1UploadFinalize404Error1Value);
        else if (TryGetApiV1UploadFinalize429Error1(
            out var apiV1UploadFinalize429Error1Value)) onApiV1UploadFinalize429Error1(
            apiV1UploadFinalize429Error1Value);
        else if (TryGetApiV1UploadFinalize500Error1(
            out var apiV1UploadFinalize500Error1Value)) onApiV1UploadFinalize500Error1(
            apiV1UploadFinalize500Error1Value);
        else if (TryGetApiV1UploadFinalize502Error1(
            out var apiV1UploadFinalize502Error1Value)) onApiV1UploadFinalize502Error1(
            apiV1UploadFinalize502Error1Value);
        else if (TryGetApiV1UploadFinalize503Error1(
            out var apiV1UploadFinalize503Error1Value)) onApiV1UploadFinalize503Error1(
            apiV1UploadFinalize503Error1Value);
        else if (TryGetApiV1UploadFinalize504Error1(
            out var apiV1UploadFinalize504Error1Value)) onApiV1UploadFinalize504Error1(
            apiV1UploadFinalize504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadFinalizeLargeUploadError)} holds no value.");
    }

    private static Task<UploadFinalizeLargeUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1UploadFinalize400Error1>().As(AsApiV1UploadFinalize400Error1),
            401 => response.Json<ApiV1UploadFinalize401Error1>().As(AsApiV1UploadFinalize401Error1),
            403 => response.Json<ApiV1UploadFinalize403Error1>().As(AsApiV1UploadFinalize403Error1),
            404 => response.Json<ApiV1UploadFinalize404Error1>().As(AsApiV1UploadFinalize404Error1),
            429 => response.Json<ApiV1UploadFinalize429Error1>().As(AsApiV1UploadFinalize429Error1),
            500 => response.Json<ApiV1UploadFinalize500Error1>().As(AsApiV1UploadFinalize500Error1),
            502 => response.Json<ApiV1UploadFinalize502Error1>().As(AsApiV1UploadFinalize502Error1),
            503 => response.Json<ApiV1UploadFinalize503Error1>().As(AsApiV1UploadFinalize503Error1),
            504 => response.Json<ApiV1UploadFinalize504Error1>().As(AsApiV1UploadFinalize504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadFinalizeLargeUploadError> Response { get; } = new(Create);
}
