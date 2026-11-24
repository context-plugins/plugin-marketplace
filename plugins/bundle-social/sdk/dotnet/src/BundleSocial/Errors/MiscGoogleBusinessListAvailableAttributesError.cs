using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessListAvailableAttributesError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1> _apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value;

    private MiscGoogleBusinessListAvailableAttributesError(Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1> apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value =
            apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value;
    }

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1(ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessListAvailableAttributesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1(
                out var apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value) => onApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1(
                apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessListAvailableAttributesError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1> onApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1(
            out var apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value)) onApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1(
            apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscGoogleBusinessListAvailableAttributesError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessListAvailableAttributesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessListAvailableAttributesError> Response { get; } = new(Create);
}
