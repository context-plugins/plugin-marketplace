using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookGetTextFormatPresetsError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookTextFormatPresets400Error1> _apiV1MiscFacebookTextFormatPresets400Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets401Error1> _apiV1MiscFacebookTextFormatPresets401Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets403Error1> _apiV1MiscFacebookTextFormatPresets403Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets404Error1> _apiV1MiscFacebookTextFormatPresets404Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets429Error1> _apiV1MiscFacebookTextFormatPresets429Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets500Error1> _apiV1MiscFacebookTextFormatPresets500Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets502Error1> _apiV1MiscFacebookTextFormatPresets502Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets503Error1> _apiV1MiscFacebookTextFormatPresets503Error1Value;

    private readonly Optional<ApiV1MiscFacebookTextFormatPresets504Error1> _apiV1MiscFacebookTextFormatPresets504Error1Value;

    private MiscFacebookGetTextFormatPresetsError(Optional<ApiV1MiscFacebookTextFormatPresets400Error1> apiV1MiscFacebookTextFormatPresets400Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets401Error1> apiV1MiscFacebookTextFormatPresets401Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets403Error1> apiV1MiscFacebookTextFormatPresets403Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets404Error1> apiV1MiscFacebookTextFormatPresets404Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets429Error1> apiV1MiscFacebookTextFormatPresets429Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets500Error1> apiV1MiscFacebookTextFormatPresets500Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets502Error1> apiV1MiscFacebookTextFormatPresets502Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets503Error1> apiV1MiscFacebookTextFormatPresets503Error1Value,
        Optional<ApiV1MiscFacebookTextFormatPresets504Error1> apiV1MiscFacebookTextFormatPresets504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookTextFormatPresets400Error1Value = apiV1MiscFacebookTextFormatPresets400Error1Value;
        _apiV1MiscFacebookTextFormatPresets401Error1Value = apiV1MiscFacebookTextFormatPresets401Error1Value;
        _apiV1MiscFacebookTextFormatPresets403Error1Value = apiV1MiscFacebookTextFormatPresets403Error1Value;
        _apiV1MiscFacebookTextFormatPresets404Error1Value = apiV1MiscFacebookTextFormatPresets404Error1Value;
        _apiV1MiscFacebookTextFormatPresets429Error1Value = apiV1MiscFacebookTextFormatPresets429Error1Value;
        _apiV1MiscFacebookTextFormatPresets500Error1Value = apiV1MiscFacebookTextFormatPresets500Error1Value;
        _apiV1MiscFacebookTextFormatPresets502Error1Value = apiV1MiscFacebookTextFormatPresets502Error1Value;
        _apiV1MiscFacebookTextFormatPresets503Error1Value = apiV1MiscFacebookTextFormatPresets503Error1Value;
        _apiV1MiscFacebookTextFormatPresets504Error1Value = apiV1MiscFacebookTextFormatPresets504Error1Value;
    }

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets400Error1(ApiV1MiscFacebookTextFormatPresets400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookTextFormatPresets400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets401Error1(ApiV1MiscFacebookTextFormatPresets401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets403Error1(ApiV1MiscFacebookTextFormatPresets403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets404Error1(ApiV1MiscFacebookTextFormatPresets404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets429Error1(ApiV1MiscFacebookTextFormatPresets429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets500Error1(ApiV1MiscFacebookTextFormatPresets500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets502Error1(ApiV1MiscFacebookTextFormatPresets502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets503Error1(ApiV1MiscFacebookTextFormatPresets503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookGetTextFormatPresetsError AsApiV1MiscFacebookTextFormatPresets504Error1(ApiV1MiscFacebookTextFormatPresets504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookTextFormatPresets504Error1>.Some(value),
            default);

    private static MiscFacebookGetTextFormatPresetsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookTextFormatPresets400Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets400Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets401Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets401Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets403Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets403Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets404Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets404Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets429Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets429Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets500Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets500Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets502Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets502Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets503Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets503Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookTextFormatPresets504Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets504Error1? value) =>
        _apiV1MiscFacebookTextFormatPresets504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookTextFormatPresets400Error1, TResult> onApiV1MiscFacebookTextFormatPresets400Error1,
        Func<ApiV1MiscFacebookTextFormatPresets401Error1, TResult> onApiV1MiscFacebookTextFormatPresets401Error1,
        Func<ApiV1MiscFacebookTextFormatPresets403Error1, TResult> onApiV1MiscFacebookTextFormatPresets403Error1,
        Func<ApiV1MiscFacebookTextFormatPresets404Error1, TResult> onApiV1MiscFacebookTextFormatPresets404Error1,
        Func<ApiV1MiscFacebookTextFormatPresets429Error1, TResult> onApiV1MiscFacebookTextFormatPresets429Error1,
        Func<ApiV1MiscFacebookTextFormatPresets500Error1, TResult> onApiV1MiscFacebookTextFormatPresets500Error1,
        Func<ApiV1MiscFacebookTextFormatPresets502Error1, TResult> onApiV1MiscFacebookTextFormatPresets502Error1,
        Func<ApiV1MiscFacebookTextFormatPresets503Error1, TResult> onApiV1MiscFacebookTextFormatPresets503Error1,
        Func<ApiV1MiscFacebookTextFormatPresets504Error1, TResult> onApiV1MiscFacebookTextFormatPresets504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookTextFormatPresets400Error1(
                out var apiV1MiscFacebookTextFormatPresets400Error1Value) => onApiV1MiscFacebookTextFormatPresets400Error1(
                apiV1MiscFacebookTextFormatPresets400Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets401Error1(
                out var apiV1MiscFacebookTextFormatPresets401Error1Value) => onApiV1MiscFacebookTextFormatPresets401Error1(
                apiV1MiscFacebookTextFormatPresets401Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets403Error1(
                out var apiV1MiscFacebookTextFormatPresets403Error1Value) => onApiV1MiscFacebookTextFormatPresets403Error1(
                apiV1MiscFacebookTextFormatPresets403Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets404Error1(
                out var apiV1MiscFacebookTextFormatPresets404Error1Value) => onApiV1MiscFacebookTextFormatPresets404Error1(
                apiV1MiscFacebookTextFormatPresets404Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets429Error1(
                out var apiV1MiscFacebookTextFormatPresets429Error1Value) => onApiV1MiscFacebookTextFormatPresets429Error1(
                apiV1MiscFacebookTextFormatPresets429Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets500Error1(
                out var apiV1MiscFacebookTextFormatPresets500Error1Value) => onApiV1MiscFacebookTextFormatPresets500Error1(
                apiV1MiscFacebookTextFormatPresets500Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets502Error1(
                out var apiV1MiscFacebookTextFormatPresets502Error1Value) => onApiV1MiscFacebookTextFormatPresets502Error1(
                apiV1MiscFacebookTextFormatPresets502Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets503Error1(
                out var apiV1MiscFacebookTextFormatPresets503Error1Value) => onApiV1MiscFacebookTextFormatPresets503Error1(
                apiV1MiscFacebookTextFormatPresets503Error1Value),
            _ when TryGetApiV1MiscFacebookTextFormatPresets504Error1(
                out var apiV1MiscFacebookTextFormatPresets504Error1Value) => onApiV1MiscFacebookTextFormatPresets504Error1(
                apiV1MiscFacebookTextFormatPresets504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookGetTextFormatPresetsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookTextFormatPresets400Error1> onApiV1MiscFacebookTextFormatPresets400Error1,
        Action<ApiV1MiscFacebookTextFormatPresets401Error1> onApiV1MiscFacebookTextFormatPresets401Error1,
        Action<ApiV1MiscFacebookTextFormatPresets403Error1> onApiV1MiscFacebookTextFormatPresets403Error1,
        Action<ApiV1MiscFacebookTextFormatPresets404Error1> onApiV1MiscFacebookTextFormatPresets404Error1,
        Action<ApiV1MiscFacebookTextFormatPresets429Error1> onApiV1MiscFacebookTextFormatPresets429Error1,
        Action<ApiV1MiscFacebookTextFormatPresets500Error1> onApiV1MiscFacebookTextFormatPresets500Error1,
        Action<ApiV1MiscFacebookTextFormatPresets502Error1> onApiV1MiscFacebookTextFormatPresets502Error1,
        Action<ApiV1MiscFacebookTextFormatPresets503Error1> onApiV1MiscFacebookTextFormatPresets503Error1,
        Action<ApiV1MiscFacebookTextFormatPresets504Error1> onApiV1MiscFacebookTextFormatPresets504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookTextFormatPresets400Error1(
            out var apiV1MiscFacebookTextFormatPresets400Error1Value)) onApiV1MiscFacebookTextFormatPresets400Error1(
            apiV1MiscFacebookTextFormatPresets400Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets401Error1(
            out var apiV1MiscFacebookTextFormatPresets401Error1Value)) onApiV1MiscFacebookTextFormatPresets401Error1(
            apiV1MiscFacebookTextFormatPresets401Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets403Error1(
            out var apiV1MiscFacebookTextFormatPresets403Error1Value)) onApiV1MiscFacebookTextFormatPresets403Error1(
            apiV1MiscFacebookTextFormatPresets403Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets404Error1(
            out var apiV1MiscFacebookTextFormatPresets404Error1Value)) onApiV1MiscFacebookTextFormatPresets404Error1(
            apiV1MiscFacebookTextFormatPresets404Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets429Error1(
            out var apiV1MiscFacebookTextFormatPresets429Error1Value)) onApiV1MiscFacebookTextFormatPresets429Error1(
            apiV1MiscFacebookTextFormatPresets429Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets500Error1(
            out var apiV1MiscFacebookTextFormatPresets500Error1Value)) onApiV1MiscFacebookTextFormatPresets500Error1(
            apiV1MiscFacebookTextFormatPresets500Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets502Error1(
            out var apiV1MiscFacebookTextFormatPresets502Error1Value)) onApiV1MiscFacebookTextFormatPresets502Error1(
            apiV1MiscFacebookTextFormatPresets502Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets503Error1(
            out var apiV1MiscFacebookTextFormatPresets503Error1Value)) onApiV1MiscFacebookTextFormatPresets503Error1(
            apiV1MiscFacebookTextFormatPresets503Error1Value);
        else if (TryGetApiV1MiscFacebookTextFormatPresets504Error1(
            out var apiV1MiscFacebookTextFormatPresets504Error1Value)) onApiV1MiscFacebookTextFormatPresets504Error1(
            apiV1MiscFacebookTextFormatPresets504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookGetTextFormatPresetsError)} holds no value.");
    }

    private static Task<MiscFacebookGetTextFormatPresetsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookTextFormatPresets400Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets400Error1),
            401 => response.Json<ApiV1MiscFacebookTextFormatPresets401Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets401Error1),
            403 => response.Json<ApiV1MiscFacebookTextFormatPresets403Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets403Error1),
            404 => response.Json<ApiV1MiscFacebookTextFormatPresets404Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets404Error1),
            429 => response.Json<ApiV1MiscFacebookTextFormatPresets429Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets429Error1),
            500 => response.Json<ApiV1MiscFacebookTextFormatPresets500Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets500Error1),
            502 => response.Json<ApiV1MiscFacebookTextFormatPresets502Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets502Error1),
            503 => response.Json<ApiV1MiscFacebookTextFormatPresets503Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets503Error1),
            504 => response.Json<ApiV1MiscFacebookTextFormatPresets504Error1>().As(
                AsApiV1MiscFacebookTextFormatPresets504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookGetTextFormatPresetsError> Response { get; } = new(Create);
}
