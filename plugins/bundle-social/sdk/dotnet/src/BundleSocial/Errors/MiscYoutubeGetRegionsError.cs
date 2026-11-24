using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscYoutubeGetRegionsError : ApiError
{
    private readonly Optional<ApiV1MiscYoutubeRegions400Error1> _apiV1MiscYoutubeRegions400Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions401Error1> _apiV1MiscYoutubeRegions401Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions403Error1> _apiV1MiscYoutubeRegions403Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions404Error1> _apiV1MiscYoutubeRegions404Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions429Error1> _apiV1MiscYoutubeRegions429Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions500Error1> _apiV1MiscYoutubeRegions500Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions502Error1> _apiV1MiscYoutubeRegions502Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions503Error1> _apiV1MiscYoutubeRegions503Error1Value;

    private readonly Optional<ApiV1MiscYoutubeRegions504Error1> _apiV1MiscYoutubeRegions504Error1Value;

    private MiscYoutubeGetRegionsError(Optional<ApiV1MiscYoutubeRegions400Error1> apiV1MiscYoutubeRegions400Error1Value,
        Optional<ApiV1MiscYoutubeRegions401Error1> apiV1MiscYoutubeRegions401Error1Value,
        Optional<ApiV1MiscYoutubeRegions403Error1> apiV1MiscYoutubeRegions403Error1Value,
        Optional<ApiV1MiscYoutubeRegions404Error1> apiV1MiscYoutubeRegions404Error1Value,
        Optional<ApiV1MiscYoutubeRegions429Error1> apiV1MiscYoutubeRegions429Error1Value,
        Optional<ApiV1MiscYoutubeRegions500Error1> apiV1MiscYoutubeRegions500Error1Value,
        Optional<ApiV1MiscYoutubeRegions502Error1> apiV1MiscYoutubeRegions502Error1Value,
        Optional<ApiV1MiscYoutubeRegions503Error1> apiV1MiscYoutubeRegions503Error1Value,
        Optional<ApiV1MiscYoutubeRegions504Error1> apiV1MiscYoutubeRegions504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscYoutubeRegions400Error1Value = apiV1MiscYoutubeRegions400Error1Value;
        _apiV1MiscYoutubeRegions401Error1Value = apiV1MiscYoutubeRegions401Error1Value;
        _apiV1MiscYoutubeRegions403Error1Value = apiV1MiscYoutubeRegions403Error1Value;
        _apiV1MiscYoutubeRegions404Error1Value = apiV1MiscYoutubeRegions404Error1Value;
        _apiV1MiscYoutubeRegions429Error1Value = apiV1MiscYoutubeRegions429Error1Value;
        _apiV1MiscYoutubeRegions500Error1Value = apiV1MiscYoutubeRegions500Error1Value;
        _apiV1MiscYoutubeRegions502Error1Value = apiV1MiscYoutubeRegions502Error1Value;
        _apiV1MiscYoutubeRegions503Error1Value = apiV1MiscYoutubeRegions503Error1Value;
        _apiV1MiscYoutubeRegions504Error1Value = apiV1MiscYoutubeRegions504Error1Value;
    }

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions400Error1(ApiV1MiscYoutubeRegions400Error1 value) =>
        new(
            Optional<ApiV1MiscYoutubeRegions400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions401Error1(ApiV1MiscYoutubeRegions401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscYoutubeRegions401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions403Error1(ApiV1MiscYoutubeRegions403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions404Error1(ApiV1MiscYoutubeRegions404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions429Error1(ApiV1MiscYoutubeRegions429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions500Error1(ApiV1MiscYoutubeRegions500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions502Error1(ApiV1MiscYoutubeRegions502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions503Error1(ApiV1MiscYoutubeRegions503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions503Error1>.Some(value),
            default,
            default);

    private static MiscYoutubeGetRegionsError AsApiV1MiscYoutubeRegions504Error1(ApiV1MiscYoutubeRegions504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscYoutubeRegions504Error1>.Some(value),
            default);

    private static MiscYoutubeGetRegionsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscYoutubeRegions400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions400Error1? value) =>
        _apiV1MiscYoutubeRegions400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions401Error1? value) =>
        _apiV1MiscYoutubeRegions401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions403Error1? value) =>
        _apiV1MiscYoutubeRegions403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions404Error1? value) =>
        _apiV1MiscYoutubeRegions404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions429Error1? value) =>
        _apiV1MiscYoutubeRegions429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions500Error1? value) =>
        _apiV1MiscYoutubeRegions500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions502Error1? value) =>
        _apiV1MiscYoutubeRegions502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions503Error1? value) =>
        _apiV1MiscYoutubeRegions503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscYoutubeRegions504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions504Error1? value) =>
        _apiV1MiscYoutubeRegions504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscYoutubeRegions400Error1, TResult> onApiV1MiscYoutubeRegions400Error1,
        Func<ApiV1MiscYoutubeRegions401Error1, TResult> onApiV1MiscYoutubeRegions401Error1,
        Func<ApiV1MiscYoutubeRegions403Error1, TResult> onApiV1MiscYoutubeRegions403Error1,
        Func<ApiV1MiscYoutubeRegions404Error1, TResult> onApiV1MiscYoutubeRegions404Error1,
        Func<ApiV1MiscYoutubeRegions429Error1, TResult> onApiV1MiscYoutubeRegions429Error1,
        Func<ApiV1MiscYoutubeRegions500Error1, TResult> onApiV1MiscYoutubeRegions500Error1,
        Func<ApiV1MiscYoutubeRegions502Error1, TResult> onApiV1MiscYoutubeRegions502Error1,
        Func<ApiV1MiscYoutubeRegions503Error1, TResult> onApiV1MiscYoutubeRegions503Error1,
        Func<ApiV1MiscYoutubeRegions504Error1, TResult> onApiV1MiscYoutubeRegions504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscYoutubeRegions400Error1(
                out var apiV1MiscYoutubeRegions400Error1Value) => onApiV1MiscYoutubeRegions400Error1(
                apiV1MiscYoutubeRegions400Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions401Error1(
                out var apiV1MiscYoutubeRegions401Error1Value) => onApiV1MiscYoutubeRegions401Error1(
                apiV1MiscYoutubeRegions401Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions403Error1(
                out var apiV1MiscYoutubeRegions403Error1Value) => onApiV1MiscYoutubeRegions403Error1(
                apiV1MiscYoutubeRegions403Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions404Error1(
                out var apiV1MiscYoutubeRegions404Error1Value) => onApiV1MiscYoutubeRegions404Error1(
                apiV1MiscYoutubeRegions404Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions429Error1(
                out var apiV1MiscYoutubeRegions429Error1Value) => onApiV1MiscYoutubeRegions429Error1(
                apiV1MiscYoutubeRegions429Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions500Error1(
                out var apiV1MiscYoutubeRegions500Error1Value) => onApiV1MiscYoutubeRegions500Error1(
                apiV1MiscYoutubeRegions500Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions502Error1(
                out var apiV1MiscYoutubeRegions502Error1Value) => onApiV1MiscYoutubeRegions502Error1(
                apiV1MiscYoutubeRegions502Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions503Error1(
                out var apiV1MiscYoutubeRegions503Error1Value) => onApiV1MiscYoutubeRegions503Error1(
                apiV1MiscYoutubeRegions503Error1Value),
            _ when TryGetApiV1MiscYoutubeRegions504Error1(
                out var apiV1MiscYoutubeRegions504Error1Value) => onApiV1MiscYoutubeRegions504Error1(
                apiV1MiscYoutubeRegions504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscYoutubeGetRegionsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscYoutubeRegions400Error1> onApiV1MiscYoutubeRegions400Error1,
        Action<ApiV1MiscYoutubeRegions401Error1> onApiV1MiscYoutubeRegions401Error1,
        Action<ApiV1MiscYoutubeRegions403Error1> onApiV1MiscYoutubeRegions403Error1,
        Action<ApiV1MiscYoutubeRegions404Error1> onApiV1MiscYoutubeRegions404Error1,
        Action<ApiV1MiscYoutubeRegions429Error1> onApiV1MiscYoutubeRegions429Error1,
        Action<ApiV1MiscYoutubeRegions500Error1> onApiV1MiscYoutubeRegions500Error1,
        Action<ApiV1MiscYoutubeRegions502Error1> onApiV1MiscYoutubeRegions502Error1,
        Action<ApiV1MiscYoutubeRegions503Error1> onApiV1MiscYoutubeRegions503Error1,
        Action<ApiV1MiscYoutubeRegions504Error1> onApiV1MiscYoutubeRegions504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscYoutubeRegions400Error1(
            out var apiV1MiscYoutubeRegions400Error1Value)) onApiV1MiscYoutubeRegions400Error1(
            apiV1MiscYoutubeRegions400Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions401Error1(
            out var apiV1MiscYoutubeRegions401Error1Value)) onApiV1MiscYoutubeRegions401Error1(
            apiV1MiscYoutubeRegions401Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions403Error1(
            out var apiV1MiscYoutubeRegions403Error1Value)) onApiV1MiscYoutubeRegions403Error1(
            apiV1MiscYoutubeRegions403Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions404Error1(
            out var apiV1MiscYoutubeRegions404Error1Value)) onApiV1MiscYoutubeRegions404Error1(
            apiV1MiscYoutubeRegions404Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions429Error1(
            out var apiV1MiscYoutubeRegions429Error1Value)) onApiV1MiscYoutubeRegions429Error1(
            apiV1MiscYoutubeRegions429Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions500Error1(
            out var apiV1MiscYoutubeRegions500Error1Value)) onApiV1MiscYoutubeRegions500Error1(
            apiV1MiscYoutubeRegions500Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions502Error1(
            out var apiV1MiscYoutubeRegions502Error1Value)) onApiV1MiscYoutubeRegions502Error1(
            apiV1MiscYoutubeRegions502Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions503Error1(
            out var apiV1MiscYoutubeRegions503Error1Value)) onApiV1MiscYoutubeRegions503Error1(
            apiV1MiscYoutubeRegions503Error1Value);
        else if (TryGetApiV1MiscYoutubeRegions504Error1(
            out var apiV1MiscYoutubeRegions504Error1Value)) onApiV1MiscYoutubeRegions504Error1(
            apiV1MiscYoutubeRegions504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscYoutubeGetRegionsError)} holds no value.");
    }

    private static Task<MiscYoutubeGetRegionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscYoutubeRegions400Error1>().As(AsApiV1MiscYoutubeRegions400Error1),
            401 => response.Json<ApiV1MiscYoutubeRegions401Error1>().As(AsApiV1MiscYoutubeRegions401Error1),
            403 => response.Json<ApiV1MiscYoutubeRegions403Error1>().As(AsApiV1MiscYoutubeRegions403Error1),
            404 => response.Json<ApiV1MiscYoutubeRegions404Error1>().As(AsApiV1MiscYoutubeRegions404Error1),
            429 => response.Json<ApiV1MiscYoutubeRegions429Error1>().As(AsApiV1MiscYoutubeRegions429Error1),
            500 => response.Json<ApiV1MiscYoutubeRegions500Error1>().As(AsApiV1MiscYoutubeRegions500Error1),
            502 => response.Json<ApiV1MiscYoutubeRegions502Error1>().As(AsApiV1MiscYoutubeRegions502Error1),
            503 => response.Json<ApiV1MiscYoutubeRegions503Error1>().As(AsApiV1MiscYoutubeRegions503Error1),
            504 => response.Json<ApiV1MiscYoutubeRegions504Error1>().As(AsApiV1MiscYoutubeRegions504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscYoutubeGetRegionsError> Response { get; } = new(Create);
}
