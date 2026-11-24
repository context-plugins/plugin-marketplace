using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscRedditGetSubredditFlairsError : ApiError
{
    private readonly Optional<ApiV1MiscRedditSubredditFlairs400Error1> _apiV1MiscRedditSubredditFlairs400Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs401Error1> _apiV1MiscRedditSubredditFlairs401Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs403Error1> _apiV1MiscRedditSubredditFlairs403Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs404Error1> _apiV1MiscRedditSubredditFlairs404Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs429Error1> _apiV1MiscRedditSubredditFlairs429Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs500Error1> _apiV1MiscRedditSubredditFlairs500Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs502Error1> _apiV1MiscRedditSubredditFlairs502Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs503Error1> _apiV1MiscRedditSubredditFlairs503Error1Value;

    private readonly Optional<ApiV1MiscRedditSubredditFlairs504Error1> _apiV1MiscRedditSubredditFlairs504Error1Value;

    private MiscRedditGetSubredditFlairsError(Optional<ApiV1MiscRedditSubredditFlairs400Error1> apiV1MiscRedditSubredditFlairs400Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs401Error1> apiV1MiscRedditSubredditFlairs401Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs403Error1> apiV1MiscRedditSubredditFlairs403Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs404Error1> apiV1MiscRedditSubredditFlairs404Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs429Error1> apiV1MiscRedditSubredditFlairs429Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs500Error1> apiV1MiscRedditSubredditFlairs500Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs502Error1> apiV1MiscRedditSubredditFlairs502Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs503Error1> apiV1MiscRedditSubredditFlairs503Error1Value,
        Optional<ApiV1MiscRedditSubredditFlairs504Error1> apiV1MiscRedditSubredditFlairs504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscRedditSubredditFlairs400Error1Value = apiV1MiscRedditSubredditFlairs400Error1Value;
        _apiV1MiscRedditSubredditFlairs401Error1Value = apiV1MiscRedditSubredditFlairs401Error1Value;
        _apiV1MiscRedditSubredditFlairs403Error1Value = apiV1MiscRedditSubredditFlairs403Error1Value;
        _apiV1MiscRedditSubredditFlairs404Error1Value = apiV1MiscRedditSubredditFlairs404Error1Value;
        _apiV1MiscRedditSubredditFlairs429Error1Value = apiV1MiscRedditSubredditFlairs429Error1Value;
        _apiV1MiscRedditSubredditFlairs500Error1Value = apiV1MiscRedditSubredditFlairs500Error1Value;
        _apiV1MiscRedditSubredditFlairs502Error1Value = apiV1MiscRedditSubredditFlairs502Error1Value;
        _apiV1MiscRedditSubredditFlairs503Error1Value = apiV1MiscRedditSubredditFlairs503Error1Value;
        _apiV1MiscRedditSubredditFlairs504Error1Value = apiV1MiscRedditSubredditFlairs504Error1Value;
    }

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs400Error1(ApiV1MiscRedditSubredditFlairs400Error1 value) =>
        new(
            Optional<ApiV1MiscRedditSubredditFlairs400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs401Error1(ApiV1MiscRedditSubredditFlairs401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscRedditSubredditFlairs401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs403Error1(ApiV1MiscRedditSubredditFlairs403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs404Error1(ApiV1MiscRedditSubredditFlairs404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs429Error1(ApiV1MiscRedditSubredditFlairs429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs500Error1(ApiV1MiscRedditSubredditFlairs500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs502Error1(ApiV1MiscRedditSubredditFlairs502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs503Error1(ApiV1MiscRedditSubredditFlairs503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs503Error1>.Some(value),
            default,
            default);

    private static MiscRedditGetSubredditFlairsError AsApiV1MiscRedditSubredditFlairs504Error1(ApiV1MiscRedditSubredditFlairs504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscRedditSubredditFlairs504Error1>.Some(value),
            default);

    private static MiscRedditGetSubredditFlairsError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscRedditSubredditFlairs400Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs400Error1? value) =>
        _apiV1MiscRedditSubredditFlairs400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs401Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs401Error1? value) =>
        _apiV1MiscRedditSubredditFlairs401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs403Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs403Error1? value) =>
        _apiV1MiscRedditSubredditFlairs403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs404Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs404Error1? value) =>
        _apiV1MiscRedditSubredditFlairs404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs429Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs429Error1? value) =>
        _apiV1MiscRedditSubredditFlairs429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs500Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs500Error1? value) =>
        _apiV1MiscRedditSubredditFlairs500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs502Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs502Error1? value) =>
        _apiV1MiscRedditSubredditFlairs502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs503Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs503Error1? value) =>
        _apiV1MiscRedditSubredditFlairs503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscRedditSubredditFlairs504Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs504Error1? value) =>
        _apiV1MiscRedditSubredditFlairs504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscRedditSubredditFlairs400Error1, TResult> onApiV1MiscRedditSubredditFlairs400Error1,
        Func<ApiV1MiscRedditSubredditFlairs401Error1, TResult> onApiV1MiscRedditSubredditFlairs401Error1,
        Func<ApiV1MiscRedditSubredditFlairs403Error1, TResult> onApiV1MiscRedditSubredditFlairs403Error1,
        Func<ApiV1MiscRedditSubredditFlairs404Error1, TResult> onApiV1MiscRedditSubredditFlairs404Error1,
        Func<ApiV1MiscRedditSubredditFlairs429Error1, TResult> onApiV1MiscRedditSubredditFlairs429Error1,
        Func<ApiV1MiscRedditSubredditFlairs500Error1, TResult> onApiV1MiscRedditSubredditFlairs500Error1,
        Func<ApiV1MiscRedditSubredditFlairs502Error1, TResult> onApiV1MiscRedditSubredditFlairs502Error1,
        Func<ApiV1MiscRedditSubredditFlairs503Error1, TResult> onApiV1MiscRedditSubredditFlairs503Error1,
        Func<ApiV1MiscRedditSubredditFlairs504Error1, TResult> onApiV1MiscRedditSubredditFlairs504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscRedditSubredditFlairs400Error1(
                out var apiV1MiscRedditSubredditFlairs400Error1Value) => onApiV1MiscRedditSubredditFlairs400Error1(
                apiV1MiscRedditSubredditFlairs400Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs401Error1(
                out var apiV1MiscRedditSubredditFlairs401Error1Value) => onApiV1MiscRedditSubredditFlairs401Error1(
                apiV1MiscRedditSubredditFlairs401Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs403Error1(
                out var apiV1MiscRedditSubredditFlairs403Error1Value) => onApiV1MiscRedditSubredditFlairs403Error1(
                apiV1MiscRedditSubredditFlairs403Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs404Error1(
                out var apiV1MiscRedditSubredditFlairs404Error1Value) => onApiV1MiscRedditSubredditFlairs404Error1(
                apiV1MiscRedditSubredditFlairs404Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs429Error1(
                out var apiV1MiscRedditSubredditFlairs429Error1Value) => onApiV1MiscRedditSubredditFlairs429Error1(
                apiV1MiscRedditSubredditFlairs429Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs500Error1(
                out var apiV1MiscRedditSubredditFlairs500Error1Value) => onApiV1MiscRedditSubredditFlairs500Error1(
                apiV1MiscRedditSubredditFlairs500Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs502Error1(
                out var apiV1MiscRedditSubredditFlairs502Error1Value) => onApiV1MiscRedditSubredditFlairs502Error1(
                apiV1MiscRedditSubredditFlairs502Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs503Error1(
                out var apiV1MiscRedditSubredditFlairs503Error1Value) => onApiV1MiscRedditSubredditFlairs503Error1(
                apiV1MiscRedditSubredditFlairs503Error1Value),
            _ when TryGetApiV1MiscRedditSubredditFlairs504Error1(
                out var apiV1MiscRedditSubredditFlairs504Error1Value) => onApiV1MiscRedditSubredditFlairs504Error1(
                apiV1MiscRedditSubredditFlairs504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscRedditGetSubredditFlairsError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscRedditSubredditFlairs400Error1> onApiV1MiscRedditSubredditFlairs400Error1,
        Action<ApiV1MiscRedditSubredditFlairs401Error1> onApiV1MiscRedditSubredditFlairs401Error1,
        Action<ApiV1MiscRedditSubredditFlairs403Error1> onApiV1MiscRedditSubredditFlairs403Error1,
        Action<ApiV1MiscRedditSubredditFlairs404Error1> onApiV1MiscRedditSubredditFlairs404Error1,
        Action<ApiV1MiscRedditSubredditFlairs429Error1> onApiV1MiscRedditSubredditFlairs429Error1,
        Action<ApiV1MiscRedditSubredditFlairs500Error1> onApiV1MiscRedditSubredditFlairs500Error1,
        Action<ApiV1MiscRedditSubredditFlairs502Error1> onApiV1MiscRedditSubredditFlairs502Error1,
        Action<ApiV1MiscRedditSubredditFlairs503Error1> onApiV1MiscRedditSubredditFlairs503Error1,
        Action<ApiV1MiscRedditSubredditFlairs504Error1> onApiV1MiscRedditSubredditFlairs504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscRedditSubredditFlairs400Error1(
            out var apiV1MiscRedditSubredditFlairs400Error1Value)) onApiV1MiscRedditSubredditFlairs400Error1(
            apiV1MiscRedditSubredditFlairs400Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs401Error1(
            out var apiV1MiscRedditSubredditFlairs401Error1Value)) onApiV1MiscRedditSubredditFlairs401Error1(
            apiV1MiscRedditSubredditFlairs401Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs403Error1(
            out var apiV1MiscRedditSubredditFlairs403Error1Value)) onApiV1MiscRedditSubredditFlairs403Error1(
            apiV1MiscRedditSubredditFlairs403Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs404Error1(
            out var apiV1MiscRedditSubredditFlairs404Error1Value)) onApiV1MiscRedditSubredditFlairs404Error1(
            apiV1MiscRedditSubredditFlairs404Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs429Error1(
            out var apiV1MiscRedditSubredditFlairs429Error1Value)) onApiV1MiscRedditSubredditFlairs429Error1(
            apiV1MiscRedditSubredditFlairs429Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs500Error1(
            out var apiV1MiscRedditSubredditFlairs500Error1Value)) onApiV1MiscRedditSubredditFlairs500Error1(
            apiV1MiscRedditSubredditFlairs500Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs502Error1(
            out var apiV1MiscRedditSubredditFlairs502Error1Value)) onApiV1MiscRedditSubredditFlairs502Error1(
            apiV1MiscRedditSubredditFlairs502Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs503Error1(
            out var apiV1MiscRedditSubredditFlairs503Error1Value)) onApiV1MiscRedditSubredditFlairs503Error1(
            apiV1MiscRedditSubredditFlairs503Error1Value);
        else if (TryGetApiV1MiscRedditSubredditFlairs504Error1(
            out var apiV1MiscRedditSubredditFlairs504Error1Value)) onApiV1MiscRedditSubredditFlairs504Error1(
            apiV1MiscRedditSubredditFlairs504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscRedditGetSubredditFlairsError)} holds no value.");
    }

    private static Task<MiscRedditGetSubredditFlairsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscRedditSubredditFlairs400Error1>().As(
                AsApiV1MiscRedditSubredditFlairs400Error1),
            401 => response.Json<ApiV1MiscRedditSubredditFlairs401Error1>().As(
                AsApiV1MiscRedditSubredditFlairs401Error1),
            403 => response.Json<ApiV1MiscRedditSubredditFlairs403Error1>().As(
                AsApiV1MiscRedditSubredditFlairs403Error1),
            404 => response.Json<ApiV1MiscRedditSubredditFlairs404Error1>().As(
                AsApiV1MiscRedditSubredditFlairs404Error1),
            429 => response.Json<ApiV1MiscRedditSubredditFlairs429Error1>().As(
                AsApiV1MiscRedditSubredditFlairs429Error1),
            500 => response.Json<ApiV1MiscRedditSubredditFlairs500Error1>().As(
                AsApiV1MiscRedditSubredditFlairs500Error1),
            502 => response.Json<ApiV1MiscRedditSubredditFlairs502Error1>().As(
                AsApiV1MiscRedditSubredditFlairs502Error1),
            503 => response.Json<ApiV1MiscRedditSubredditFlairs503Error1>().As(
                AsApiV1MiscRedditSubredditFlairs503Error1),
            504 => response.Json<ApiV1MiscRedditSubredditFlairs504Error1>().As(
                AsApiV1MiscRedditSubredditFlairs504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscRedditGetSubredditFlairsError> Response { get; } = new(Create);
}
