using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscRedditGetPostRequirementsError : ApiError
{
    private readonly Optional<ApiV1MiscRedditPostRequirements400Error1> _apiV1MiscRedditPostRequirements400Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements401Error1> _apiV1MiscRedditPostRequirements401Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements403Error1> _apiV1MiscRedditPostRequirements403Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements404Error1> _apiV1MiscRedditPostRequirements404Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements429Error1> _apiV1MiscRedditPostRequirements429Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements500Error1> _apiV1MiscRedditPostRequirements500Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements502Error1> _apiV1MiscRedditPostRequirements502Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements503Error1> _apiV1MiscRedditPostRequirements503Error1Value;

    private readonly Optional<ApiV1MiscRedditPostRequirements504Error1> _apiV1MiscRedditPostRequirements504Error1Value;

    private MiscRedditGetPostRequirementsError(Optional<ApiV1MiscRedditPostRequirements400Error1> apiV1MiscRedditPostRequirements400Error1Value,
        Optional<ApiV1MiscRedditPostRequirements401Error1> apiV1MiscRedditPostRequirements401Error1Value,
        Optional<ApiV1MiscRedditPostRequirements403Error1> apiV1MiscRedditPostRequirements403Error1Value,
        Optional<ApiV1MiscRedditPostRequirements404Error1> apiV1MiscRedditPostRequirements404Error1Value,
        Optional<ApiV1MiscRedditPostRequirements429Error1> apiV1MiscRedditPostRequirements429Error1Value,
        Optional<ApiV1MiscRedditPostRequirements500Error1> apiV1MiscRedditPostRequirements500Error1Value,
        Optional<ApiV1MiscRedditPostRequirements502Error1> apiV1MiscRedditPostRequirements502Error1Value,
        Optional<ApiV1MiscRedditPostRequirements503Error1> apiV1MiscRedditPostRequirements503Error1Value,
        Optional<ApiV1MiscRedditPostRequirements504Error1> apiV1MiscRedditPostRequirements504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscRedditPostRequirements400Error1Value = apiV1MiscRedditPostRequirements400Error1Value;
        _apiV1MiscRedditPostRequirements401Error1Value = apiV1MiscRedditPostRequirements401Error1Value;
        _apiV1MiscRedditPostRequirements403Error1Value = apiV1MiscRedditPostRequirements403Error1Value;
        _apiV1MiscRedditPostRequirements404Error1Value = apiV1MiscRedditPostRequirements404Error1Value;
        _apiV1MiscRedditPostRequirements429Error1Value = apiV1MiscRedditPostRequirements429Error1Value;
        _apiV1MiscRedditPostRequirements500Error1Value = apiV1MiscRedditPostRequirements500Error1Value;
        _apiV1MiscRedditPostRequirements502Error1Value = apiV1MiscRedditPostRequirements502Error1Value;
        _apiV1MiscRedditPostRequirements503Error1Value = apiV1MiscRedditPostRequirements503Error1Value;
        _apiV1MiscRedditPostRequirements504Error1Value = apiV1MiscRedditPostRequirements504Error1Value;
    }

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements400Error1(ApiV1MiscRedditPostRequirements400Error1 value) =>
        new(
            Optional<ApiV1MiscRedditPostRequirements400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements401Error1(ApiV1MiscRedditPostRequirements401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscRedditPostRequirements401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements403Error1(ApiV1MiscRedditPostRequirements403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements404Error1(ApiV1MiscRedditPostRequirements404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements429Error1(ApiV1MiscRedditPostRequirements429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements500Error1(ApiV1MiscRedditPostRequirements500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements502Error1(ApiV1MiscRedditPostRequirements502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements503Error1(ApiV1MiscRedditPostRequirements503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements503Error1>.Some(value),
            default,
            default);

    private static MiscRedditGetPostRequirementsError AsApiV1MiscRedditPostRequirements504Error1(ApiV1MiscRedditPostRequirements504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditPostRequirements504Error1>.Some(value),
            default);

    private static MiscRedditGetPostRequirementsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscRedditPostRequirements400Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements400Error1? value) =>
        _apiV1MiscRedditPostRequirements400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements401Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements401Error1? value) =>
        _apiV1MiscRedditPostRequirements401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements403Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements403Error1? value) =>
        _apiV1MiscRedditPostRequirements403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements404Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements404Error1? value) =>
        _apiV1MiscRedditPostRequirements404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements429Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements429Error1? value) =>
        _apiV1MiscRedditPostRequirements429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements500Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements500Error1? value) =>
        _apiV1MiscRedditPostRequirements500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements502Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements502Error1? value) =>
        _apiV1MiscRedditPostRequirements502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements503Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements503Error1? value) =>
        _apiV1MiscRedditPostRequirements503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditPostRequirements504Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements504Error1? value) =>
        _apiV1MiscRedditPostRequirements504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscRedditPostRequirements400Error1, TResult> onApiV1MiscRedditPostRequirements400Error1,
        Func<ApiV1MiscRedditPostRequirements401Error1, TResult> onApiV1MiscRedditPostRequirements401Error1,
        Func<ApiV1MiscRedditPostRequirements403Error1, TResult> onApiV1MiscRedditPostRequirements403Error1,
        Func<ApiV1MiscRedditPostRequirements404Error1, TResult> onApiV1MiscRedditPostRequirements404Error1,
        Func<ApiV1MiscRedditPostRequirements429Error1, TResult> onApiV1MiscRedditPostRequirements429Error1,
        Func<ApiV1MiscRedditPostRequirements500Error1, TResult> onApiV1MiscRedditPostRequirements500Error1,
        Func<ApiV1MiscRedditPostRequirements502Error1, TResult> onApiV1MiscRedditPostRequirements502Error1,
        Func<ApiV1MiscRedditPostRequirements503Error1, TResult> onApiV1MiscRedditPostRequirements503Error1,
        Func<ApiV1MiscRedditPostRequirements504Error1, TResult> onApiV1MiscRedditPostRequirements504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscRedditPostRequirements400Error1(
                out var apiV1MiscRedditPostRequirements400Error1Value) => onApiV1MiscRedditPostRequirements400Error1(
                apiV1MiscRedditPostRequirements400Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements401Error1(
                out var apiV1MiscRedditPostRequirements401Error1Value) => onApiV1MiscRedditPostRequirements401Error1(
                apiV1MiscRedditPostRequirements401Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements403Error1(
                out var apiV1MiscRedditPostRequirements403Error1Value) => onApiV1MiscRedditPostRequirements403Error1(
                apiV1MiscRedditPostRequirements403Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements404Error1(
                out var apiV1MiscRedditPostRequirements404Error1Value) => onApiV1MiscRedditPostRequirements404Error1(
                apiV1MiscRedditPostRequirements404Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements429Error1(
                out var apiV1MiscRedditPostRequirements429Error1Value) => onApiV1MiscRedditPostRequirements429Error1(
                apiV1MiscRedditPostRequirements429Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements500Error1(
                out var apiV1MiscRedditPostRequirements500Error1Value) => onApiV1MiscRedditPostRequirements500Error1(
                apiV1MiscRedditPostRequirements500Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements502Error1(
                out var apiV1MiscRedditPostRequirements502Error1Value) => onApiV1MiscRedditPostRequirements502Error1(
                apiV1MiscRedditPostRequirements502Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements503Error1(
                out var apiV1MiscRedditPostRequirements503Error1Value) => onApiV1MiscRedditPostRequirements503Error1(
                apiV1MiscRedditPostRequirements503Error1Value),
            _ when TryGetApiV1MiscRedditPostRequirements504Error1(
                out var apiV1MiscRedditPostRequirements504Error1Value) => onApiV1MiscRedditPostRequirements504Error1(
                apiV1MiscRedditPostRequirements504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscRedditGetPostRequirementsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscRedditPostRequirements400Error1> onApiV1MiscRedditPostRequirements400Error1,
        Action<ApiV1MiscRedditPostRequirements401Error1> onApiV1MiscRedditPostRequirements401Error1,
        Action<ApiV1MiscRedditPostRequirements403Error1> onApiV1MiscRedditPostRequirements403Error1,
        Action<ApiV1MiscRedditPostRequirements404Error1> onApiV1MiscRedditPostRequirements404Error1,
        Action<ApiV1MiscRedditPostRequirements429Error1> onApiV1MiscRedditPostRequirements429Error1,
        Action<ApiV1MiscRedditPostRequirements500Error1> onApiV1MiscRedditPostRequirements500Error1,
        Action<ApiV1MiscRedditPostRequirements502Error1> onApiV1MiscRedditPostRequirements502Error1,
        Action<ApiV1MiscRedditPostRequirements503Error1> onApiV1MiscRedditPostRequirements503Error1,
        Action<ApiV1MiscRedditPostRequirements504Error1> onApiV1MiscRedditPostRequirements504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscRedditPostRequirements400Error1(
            out var apiV1MiscRedditPostRequirements400Error1Value)) onApiV1MiscRedditPostRequirements400Error1(
            apiV1MiscRedditPostRequirements400Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements401Error1(
            out var apiV1MiscRedditPostRequirements401Error1Value)) onApiV1MiscRedditPostRequirements401Error1(
            apiV1MiscRedditPostRequirements401Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements403Error1(
            out var apiV1MiscRedditPostRequirements403Error1Value)) onApiV1MiscRedditPostRequirements403Error1(
            apiV1MiscRedditPostRequirements403Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements404Error1(
            out var apiV1MiscRedditPostRequirements404Error1Value)) onApiV1MiscRedditPostRequirements404Error1(
            apiV1MiscRedditPostRequirements404Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements429Error1(
            out var apiV1MiscRedditPostRequirements429Error1Value)) onApiV1MiscRedditPostRequirements429Error1(
            apiV1MiscRedditPostRequirements429Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements500Error1(
            out var apiV1MiscRedditPostRequirements500Error1Value)) onApiV1MiscRedditPostRequirements500Error1(
            apiV1MiscRedditPostRequirements500Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements502Error1(
            out var apiV1MiscRedditPostRequirements502Error1Value)) onApiV1MiscRedditPostRequirements502Error1(
            apiV1MiscRedditPostRequirements502Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements503Error1(
            out var apiV1MiscRedditPostRequirements503Error1Value)) onApiV1MiscRedditPostRequirements503Error1(
            apiV1MiscRedditPostRequirements503Error1Value);
        else if (TryGetApiV1MiscRedditPostRequirements504Error1(
            out var apiV1MiscRedditPostRequirements504Error1Value)) onApiV1MiscRedditPostRequirements504Error1(
            apiV1MiscRedditPostRequirements504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscRedditGetPostRequirementsError)} holds no value.");
    }

    private static Task<MiscRedditGetPostRequirementsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscRedditPostRequirements400Error1>().As(
                AsApiV1MiscRedditPostRequirements400Error1),
            401 => response.Json<ApiV1MiscRedditPostRequirements401Error1>().As(
                AsApiV1MiscRedditPostRequirements401Error1),
            403 => response.Json<ApiV1MiscRedditPostRequirements403Error1>().As(
                AsApiV1MiscRedditPostRequirements403Error1),
            404 => response.Json<ApiV1MiscRedditPostRequirements404Error1>().As(
                AsApiV1MiscRedditPostRequirements404Error1),
            429 => response.Json<ApiV1MiscRedditPostRequirements429Error1>().As(
                AsApiV1MiscRedditPostRequirements429Error1),
            500 => response.Json<ApiV1MiscRedditPostRequirements500Error1>().As(
                AsApiV1MiscRedditPostRequirements500Error1),
            502 => response.Json<ApiV1MiscRedditPostRequirements502Error1>().As(
                AsApiV1MiscRedditPostRequirements502Error1),
            503 => response.Json<ApiV1MiscRedditPostRequirements503Error1>().As(
                AsApiV1MiscRedditPostRequirements503Error1),
            504 => response.Json<ApiV1MiscRedditPostRequirements504Error1>().As(
                AsApiV1MiscRedditPostRequirements504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscRedditGetPostRequirementsError> Response { get; } = new(Create);
}
