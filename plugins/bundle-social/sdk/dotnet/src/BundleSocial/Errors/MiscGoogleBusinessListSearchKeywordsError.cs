using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessListSearchKeywordsError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1> _apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value;

    private MiscGoogleBusinessListSearchKeywordsError(Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1> apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1> apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1> apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1> apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1> apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1> apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1> apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1> apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1> apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value;
        _apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value =
            apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value;
    }

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords401Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords403Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords404Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords429Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords500Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords502Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords503Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsApiV1MiscGoogleBusinessLocationSearchKeywords504Error1(ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessListSearchKeywordsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationSearchKeywords504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords400Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords401Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords403Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords404Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords429Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords500Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords502Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords503Error1,
        Func<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1, TResult> onApiV1MiscGoogleBusinessLocationSearchKeywords504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords401Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords401Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords403Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords403Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords404Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords404Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords429Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords429Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords500Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords500Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords502Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords502Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords503Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords503Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationSearchKeywords504Error1(
                out var apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value) => onApiV1MiscGoogleBusinessLocationSearchKeywords504Error1(
                apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessListSearchKeywordsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords400Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords401Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords403Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords404Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords429Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords500Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords502Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords503Error1,
        Action<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1> onApiV1MiscGoogleBusinessLocationSearchKeywords504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords401Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords401Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords403Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords403Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords404Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords404Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords429Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords429Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords500Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords500Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords502Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords502Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords503Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords503Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationSearchKeywords504Error1(
            out var apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value)) onApiV1MiscGoogleBusinessLocationSearchKeywords504Error1(
            apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(MiscGoogleBusinessListSearchKeywordsError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessListSearchKeywordsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationSearchKeywords504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessListSearchKeywordsError> Response { get; } = new(Create);
}
