using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessCreatePlaceActionLinkError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1> _apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value;

    private MiscGoogleBusinessCreatePlaceActionLinkError(Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1> apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value;
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value =
            apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value;
    }

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1(ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessCreatePlaceActionLinkError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1,
        Func<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1, TResult> onApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1(
                out var apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value) => onApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1(
                apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessCreatePlaceActionLinkError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1,
        Action<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1> onApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1(
            out var apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value)) onApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1(
            apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscGoogleBusinessCreatePlaceActionLinkError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessCreatePlaceActionLinkError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessCreatePlaceActionLinkError> Response { get; } = new(Create);
}
