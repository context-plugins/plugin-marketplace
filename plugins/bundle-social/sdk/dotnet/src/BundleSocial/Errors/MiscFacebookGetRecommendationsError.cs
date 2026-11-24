using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscFacebookGetRecommendationsError : ApiError
{
    private readonly Optional<ApiV1MiscFacebookRecommendations400Error1> _apiV1MiscFacebookRecommendations400Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations401Error1> _apiV1MiscFacebookRecommendations401Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations403Error1> _apiV1MiscFacebookRecommendations403Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations404Error1> _apiV1MiscFacebookRecommendations404Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations429Error1> _apiV1MiscFacebookRecommendations429Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations500Error1> _apiV1MiscFacebookRecommendations500Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations502Error1> _apiV1MiscFacebookRecommendations502Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations503Error1> _apiV1MiscFacebookRecommendations503Error1Value;

    private readonly Optional<ApiV1MiscFacebookRecommendations504Error1> _apiV1MiscFacebookRecommendations504Error1Value;

    private MiscFacebookGetRecommendationsError(Optional<ApiV1MiscFacebookRecommendations400Error1> apiV1MiscFacebookRecommendations400Error1Value,
        Optional<ApiV1MiscFacebookRecommendations401Error1> apiV1MiscFacebookRecommendations401Error1Value,
        Optional<ApiV1MiscFacebookRecommendations403Error1> apiV1MiscFacebookRecommendations403Error1Value,
        Optional<ApiV1MiscFacebookRecommendations404Error1> apiV1MiscFacebookRecommendations404Error1Value,
        Optional<ApiV1MiscFacebookRecommendations429Error1> apiV1MiscFacebookRecommendations429Error1Value,
        Optional<ApiV1MiscFacebookRecommendations500Error1> apiV1MiscFacebookRecommendations500Error1Value,
        Optional<ApiV1MiscFacebookRecommendations502Error1> apiV1MiscFacebookRecommendations502Error1Value,
        Optional<ApiV1MiscFacebookRecommendations503Error1> apiV1MiscFacebookRecommendations503Error1Value,
        Optional<ApiV1MiscFacebookRecommendations504Error1> apiV1MiscFacebookRecommendations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscFacebookRecommendations400Error1Value = apiV1MiscFacebookRecommendations400Error1Value;
        _apiV1MiscFacebookRecommendations401Error1Value = apiV1MiscFacebookRecommendations401Error1Value;
        _apiV1MiscFacebookRecommendations403Error1Value = apiV1MiscFacebookRecommendations403Error1Value;
        _apiV1MiscFacebookRecommendations404Error1Value = apiV1MiscFacebookRecommendations404Error1Value;
        _apiV1MiscFacebookRecommendations429Error1Value = apiV1MiscFacebookRecommendations429Error1Value;
        _apiV1MiscFacebookRecommendations500Error1Value = apiV1MiscFacebookRecommendations500Error1Value;
        _apiV1MiscFacebookRecommendations502Error1Value = apiV1MiscFacebookRecommendations502Error1Value;
        _apiV1MiscFacebookRecommendations503Error1Value = apiV1MiscFacebookRecommendations503Error1Value;
        _apiV1MiscFacebookRecommendations504Error1Value = apiV1MiscFacebookRecommendations504Error1Value;
    }

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations400Error1(ApiV1MiscFacebookRecommendations400Error1 value) =>
        new(
            Optional<ApiV1MiscFacebookRecommendations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations401Error1(ApiV1MiscFacebookRecommendations401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscFacebookRecommendations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations403Error1(ApiV1MiscFacebookRecommendations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations404Error1(ApiV1MiscFacebookRecommendations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations429Error1(ApiV1MiscFacebookRecommendations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations500Error1(ApiV1MiscFacebookRecommendations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations502Error1(ApiV1MiscFacebookRecommendations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations503Error1(ApiV1MiscFacebookRecommendations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations503Error1>.Some(value),
            default,
            default);

    private static MiscFacebookGetRecommendationsError AsApiV1MiscFacebookRecommendations504Error1(ApiV1MiscFacebookRecommendations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscFacebookRecommendations504Error1>.Some(value),
            default);

    private static MiscFacebookGetRecommendationsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscFacebookRecommendations400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations400Error1? value) =>
        _apiV1MiscFacebookRecommendations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations401Error1? value) =>
        _apiV1MiscFacebookRecommendations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations403Error1? value) =>
        _apiV1MiscFacebookRecommendations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations404Error1? value) =>
        _apiV1MiscFacebookRecommendations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations429Error1? value) =>
        _apiV1MiscFacebookRecommendations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations500Error1? value) =>
        _apiV1MiscFacebookRecommendations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations502Error1? value) =>
        _apiV1MiscFacebookRecommendations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations503Error1? value) =>
        _apiV1MiscFacebookRecommendations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscFacebookRecommendations504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations504Error1? value) =>
        _apiV1MiscFacebookRecommendations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscFacebookRecommendations400Error1, TResult> onApiV1MiscFacebookRecommendations400Error1,
        Func<ApiV1MiscFacebookRecommendations401Error1, TResult> onApiV1MiscFacebookRecommendations401Error1,
        Func<ApiV1MiscFacebookRecommendations403Error1, TResult> onApiV1MiscFacebookRecommendations403Error1,
        Func<ApiV1MiscFacebookRecommendations404Error1, TResult> onApiV1MiscFacebookRecommendations404Error1,
        Func<ApiV1MiscFacebookRecommendations429Error1, TResult> onApiV1MiscFacebookRecommendations429Error1,
        Func<ApiV1MiscFacebookRecommendations500Error1, TResult> onApiV1MiscFacebookRecommendations500Error1,
        Func<ApiV1MiscFacebookRecommendations502Error1, TResult> onApiV1MiscFacebookRecommendations502Error1,
        Func<ApiV1MiscFacebookRecommendations503Error1, TResult> onApiV1MiscFacebookRecommendations503Error1,
        Func<ApiV1MiscFacebookRecommendations504Error1, TResult> onApiV1MiscFacebookRecommendations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscFacebookRecommendations400Error1(
                out var apiV1MiscFacebookRecommendations400Error1Value) => onApiV1MiscFacebookRecommendations400Error1(
                apiV1MiscFacebookRecommendations400Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations401Error1(
                out var apiV1MiscFacebookRecommendations401Error1Value) => onApiV1MiscFacebookRecommendations401Error1(
                apiV1MiscFacebookRecommendations401Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations403Error1(
                out var apiV1MiscFacebookRecommendations403Error1Value) => onApiV1MiscFacebookRecommendations403Error1(
                apiV1MiscFacebookRecommendations403Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations404Error1(
                out var apiV1MiscFacebookRecommendations404Error1Value) => onApiV1MiscFacebookRecommendations404Error1(
                apiV1MiscFacebookRecommendations404Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations429Error1(
                out var apiV1MiscFacebookRecommendations429Error1Value) => onApiV1MiscFacebookRecommendations429Error1(
                apiV1MiscFacebookRecommendations429Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations500Error1(
                out var apiV1MiscFacebookRecommendations500Error1Value) => onApiV1MiscFacebookRecommendations500Error1(
                apiV1MiscFacebookRecommendations500Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations502Error1(
                out var apiV1MiscFacebookRecommendations502Error1Value) => onApiV1MiscFacebookRecommendations502Error1(
                apiV1MiscFacebookRecommendations502Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations503Error1(
                out var apiV1MiscFacebookRecommendations503Error1Value) => onApiV1MiscFacebookRecommendations503Error1(
                apiV1MiscFacebookRecommendations503Error1Value),
            _ when TryGetApiV1MiscFacebookRecommendations504Error1(
                out var apiV1MiscFacebookRecommendations504Error1Value) => onApiV1MiscFacebookRecommendations504Error1(
                apiV1MiscFacebookRecommendations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscFacebookGetRecommendationsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscFacebookRecommendations400Error1> onApiV1MiscFacebookRecommendations400Error1,
        Action<ApiV1MiscFacebookRecommendations401Error1> onApiV1MiscFacebookRecommendations401Error1,
        Action<ApiV1MiscFacebookRecommendations403Error1> onApiV1MiscFacebookRecommendations403Error1,
        Action<ApiV1MiscFacebookRecommendations404Error1> onApiV1MiscFacebookRecommendations404Error1,
        Action<ApiV1MiscFacebookRecommendations429Error1> onApiV1MiscFacebookRecommendations429Error1,
        Action<ApiV1MiscFacebookRecommendations500Error1> onApiV1MiscFacebookRecommendations500Error1,
        Action<ApiV1MiscFacebookRecommendations502Error1> onApiV1MiscFacebookRecommendations502Error1,
        Action<ApiV1MiscFacebookRecommendations503Error1> onApiV1MiscFacebookRecommendations503Error1,
        Action<ApiV1MiscFacebookRecommendations504Error1> onApiV1MiscFacebookRecommendations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscFacebookRecommendations400Error1(
            out var apiV1MiscFacebookRecommendations400Error1Value)) onApiV1MiscFacebookRecommendations400Error1(
            apiV1MiscFacebookRecommendations400Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations401Error1(
            out var apiV1MiscFacebookRecommendations401Error1Value)) onApiV1MiscFacebookRecommendations401Error1(
            apiV1MiscFacebookRecommendations401Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations403Error1(
            out var apiV1MiscFacebookRecommendations403Error1Value)) onApiV1MiscFacebookRecommendations403Error1(
            apiV1MiscFacebookRecommendations403Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations404Error1(
            out var apiV1MiscFacebookRecommendations404Error1Value)) onApiV1MiscFacebookRecommendations404Error1(
            apiV1MiscFacebookRecommendations404Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations429Error1(
            out var apiV1MiscFacebookRecommendations429Error1Value)) onApiV1MiscFacebookRecommendations429Error1(
            apiV1MiscFacebookRecommendations429Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations500Error1(
            out var apiV1MiscFacebookRecommendations500Error1Value)) onApiV1MiscFacebookRecommendations500Error1(
            apiV1MiscFacebookRecommendations500Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations502Error1(
            out var apiV1MiscFacebookRecommendations502Error1Value)) onApiV1MiscFacebookRecommendations502Error1(
            apiV1MiscFacebookRecommendations502Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations503Error1(
            out var apiV1MiscFacebookRecommendations503Error1Value)) onApiV1MiscFacebookRecommendations503Error1(
            apiV1MiscFacebookRecommendations503Error1Value);
        else if (TryGetApiV1MiscFacebookRecommendations504Error1(
            out var apiV1MiscFacebookRecommendations504Error1Value)) onApiV1MiscFacebookRecommendations504Error1(
            apiV1MiscFacebookRecommendations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscFacebookGetRecommendationsError)} holds no value.");
    }

    private static Task<MiscFacebookGetRecommendationsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscFacebookRecommendations400Error1>().As(
                AsApiV1MiscFacebookRecommendations400Error1),
            401 => response.Json<ApiV1MiscFacebookRecommendations401Error1>().As(
                AsApiV1MiscFacebookRecommendations401Error1),
            403 => response.Json<ApiV1MiscFacebookRecommendations403Error1>().As(
                AsApiV1MiscFacebookRecommendations403Error1),
            404 => response.Json<ApiV1MiscFacebookRecommendations404Error1>().As(
                AsApiV1MiscFacebookRecommendations404Error1),
            429 => response.Json<ApiV1MiscFacebookRecommendations429Error1>().As(
                AsApiV1MiscFacebookRecommendations429Error1),
            500 => response.Json<ApiV1MiscFacebookRecommendations500Error1>().As(
                AsApiV1MiscFacebookRecommendations500Error1),
            502 => response.Json<ApiV1MiscFacebookRecommendations502Error1>().As(
                AsApiV1MiscFacebookRecommendations502Error1),
            503 => response.Json<ApiV1MiscFacebookRecommendations503Error1>().As(
                AsApiV1MiscFacebookRecommendations503Error1),
            504 => response.Json<ApiV1MiscFacebookRecommendations504Error1>().As(
                AsApiV1MiscFacebookRecommendations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscFacebookGetRecommendationsError> Response { get; } = new(Create);
}
