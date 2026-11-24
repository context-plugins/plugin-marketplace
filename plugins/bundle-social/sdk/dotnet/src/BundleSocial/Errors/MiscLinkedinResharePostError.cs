using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscLinkedinResharePostError : ApiError
{
    private readonly Optional<ApiV1MiscLinkedinPostReshare400Error1> _apiV1MiscLinkedinPostReshare400Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare401Error1> _apiV1MiscLinkedinPostReshare401Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare403Error1> _apiV1MiscLinkedinPostReshare403Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare404Error1> _apiV1MiscLinkedinPostReshare404Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare422Error1> _apiV1MiscLinkedinPostReshare422Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare429Error1> _apiV1MiscLinkedinPostReshare429Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare500Error1> _apiV1MiscLinkedinPostReshare500Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare502Error1> _apiV1MiscLinkedinPostReshare502Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare503Error1> _apiV1MiscLinkedinPostReshare503Error1Value;

    private readonly Optional<ApiV1MiscLinkedinPostReshare504Error1> _apiV1MiscLinkedinPostReshare504Error1Value;

    private MiscLinkedinResharePostError(Optional<ApiV1MiscLinkedinPostReshare400Error1> apiV1MiscLinkedinPostReshare400Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare401Error1> apiV1MiscLinkedinPostReshare401Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare403Error1> apiV1MiscLinkedinPostReshare403Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare404Error1> apiV1MiscLinkedinPostReshare404Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare422Error1> apiV1MiscLinkedinPostReshare422Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare429Error1> apiV1MiscLinkedinPostReshare429Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare500Error1> apiV1MiscLinkedinPostReshare500Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare502Error1> apiV1MiscLinkedinPostReshare502Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare503Error1> apiV1MiscLinkedinPostReshare503Error1Value,
        Optional<ApiV1MiscLinkedinPostReshare504Error1> apiV1MiscLinkedinPostReshare504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscLinkedinPostReshare400Error1Value = apiV1MiscLinkedinPostReshare400Error1Value;
        _apiV1MiscLinkedinPostReshare401Error1Value = apiV1MiscLinkedinPostReshare401Error1Value;
        _apiV1MiscLinkedinPostReshare403Error1Value = apiV1MiscLinkedinPostReshare403Error1Value;
        _apiV1MiscLinkedinPostReshare404Error1Value = apiV1MiscLinkedinPostReshare404Error1Value;
        _apiV1MiscLinkedinPostReshare422Error1Value = apiV1MiscLinkedinPostReshare422Error1Value;
        _apiV1MiscLinkedinPostReshare429Error1Value = apiV1MiscLinkedinPostReshare429Error1Value;
        _apiV1MiscLinkedinPostReshare500Error1Value = apiV1MiscLinkedinPostReshare500Error1Value;
        _apiV1MiscLinkedinPostReshare502Error1Value = apiV1MiscLinkedinPostReshare502Error1Value;
        _apiV1MiscLinkedinPostReshare503Error1Value = apiV1MiscLinkedinPostReshare503Error1Value;
        _apiV1MiscLinkedinPostReshare504Error1Value = apiV1MiscLinkedinPostReshare504Error1Value;
    }

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare400Error1(ApiV1MiscLinkedinPostReshare400Error1 value) =>
        new(
            Optional<ApiV1MiscLinkedinPostReshare400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare401Error1(ApiV1MiscLinkedinPostReshare401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscLinkedinPostReshare401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare403Error1(ApiV1MiscLinkedinPostReshare403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare404Error1(ApiV1MiscLinkedinPostReshare404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare422Error1(ApiV1MiscLinkedinPostReshare422Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare422Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare429Error1(ApiV1MiscLinkedinPostReshare429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare500Error1(ApiV1MiscLinkedinPostReshare500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare502Error1(ApiV1MiscLinkedinPostReshare502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare503Error1(ApiV1MiscLinkedinPostReshare503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscLinkedinPostReshare503Error1>.Some(value),
            default,
            default);

    private static MiscLinkedinResharePostError AsApiV1MiscLinkedinPostReshare504Error1(ApiV1MiscLinkedinPostReshare504Error1 value) =>
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
            Optional<ApiV1MiscLinkedinPostReshare504Error1>.Some(value),
            default);

    private static MiscLinkedinResharePostError AsFallback(RawError value) =>
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
            default,
            Optional<RawError>.Some(value));

    public bool TryGetApiV1MiscLinkedinPostReshare400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare400Error1? value) =>
        _apiV1MiscLinkedinPostReshare400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare401Error1? value) =>
        _apiV1MiscLinkedinPostReshare401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare403Error1? value) =>
        _apiV1MiscLinkedinPostReshare403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare404Error1? value) =>
        _apiV1MiscLinkedinPostReshare404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare422Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare422Error1? value) =>
        _apiV1MiscLinkedinPostReshare422Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare429Error1? value) =>
        _apiV1MiscLinkedinPostReshare429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare500Error1? value) =>
        _apiV1MiscLinkedinPostReshare500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare502Error1? value) =>
        _apiV1MiscLinkedinPostReshare502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare503Error1? value) =>
        _apiV1MiscLinkedinPostReshare503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscLinkedinPostReshare504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare504Error1? value) =>
        _apiV1MiscLinkedinPostReshare504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscLinkedinPostReshare400Error1, TResult> onApiV1MiscLinkedinPostReshare400Error1,
        Func<ApiV1MiscLinkedinPostReshare401Error1, TResult> onApiV1MiscLinkedinPostReshare401Error1,
        Func<ApiV1MiscLinkedinPostReshare403Error1, TResult> onApiV1MiscLinkedinPostReshare403Error1,
        Func<ApiV1MiscLinkedinPostReshare404Error1, TResult> onApiV1MiscLinkedinPostReshare404Error1,
        Func<ApiV1MiscLinkedinPostReshare422Error1, TResult> onApiV1MiscLinkedinPostReshare422Error1,
        Func<ApiV1MiscLinkedinPostReshare429Error1, TResult> onApiV1MiscLinkedinPostReshare429Error1,
        Func<ApiV1MiscLinkedinPostReshare500Error1, TResult> onApiV1MiscLinkedinPostReshare500Error1,
        Func<ApiV1MiscLinkedinPostReshare502Error1, TResult> onApiV1MiscLinkedinPostReshare502Error1,
        Func<ApiV1MiscLinkedinPostReshare503Error1, TResult> onApiV1MiscLinkedinPostReshare503Error1,
        Func<ApiV1MiscLinkedinPostReshare504Error1, TResult> onApiV1MiscLinkedinPostReshare504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscLinkedinPostReshare400Error1(
                out var apiV1MiscLinkedinPostReshare400Error1Value) => onApiV1MiscLinkedinPostReshare400Error1(
                apiV1MiscLinkedinPostReshare400Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare401Error1(
                out var apiV1MiscLinkedinPostReshare401Error1Value) => onApiV1MiscLinkedinPostReshare401Error1(
                apiV1MiscLinkedinPostReshare401Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare403Error1(
                out var apiV1MiscLinkedinPostReshare403Error1Value) => onApiV1MiscLinkedinPostReshare403Error1(
                apiV1MiscLinkedinPostReshare403Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare404Error1(
                out var apiV1MiscLinkedinPostReshare404Error1Value) => onApiV1MiscLinkedinPostReshare404Error1(
                apiV1MiscLinkedinPostReshare404Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare422Error1(
                out var apiV1MiscLinkedinPostReshare422Error1Value) => onApiV1MiscLinkedinPostReshare422Error1(
                apiV1MiscLinkedinPostReshare422Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare429Error1(
                out var apiV1MiscLinkedinPostReshare429Error1Value) => onApiV1MiscLinkedinPostReshare429Error1(
                apiV1MiscLinkedinPostReshare429Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare500Error1(
                out var apiV1MiscLinkedinPostReshare500Error1Value) => onApiV1MiscLinkedinPostReshare500Error1(
                apiV1MiscLinkedinPostReshare500Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare502Error1(
                out var apiV1MiscLinkedinPostReshare502Error1Value) => onApiV1MiscLinkedinPostReshare502Error1(
                apiV1MiscLinkedinPostReshare502Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare503Error1(
                out var apiV1MiscLinkedinPostReshare503Error1Value) => onApiV1MiscLinkedinPostReshare503Error1(
                apiV1MiscLinkedinPostReshare503Error1Value),
            _ when TryGetApiV1MiscLinkedinPostReshare504Error1(
                out var apiV1MiscLinkedinPostReshare504Error1Value) => onApiV1MiscLinkedinPostReshare504Error1(
                apiV1MiscLinkedinPostReshare504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscLinkedinResharePostError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscLinkedinPostReshare400Error1> onApiV1MiscLinkedinPostReshare400Error1,
        Action<ApiV1MiscLinkedinPostReshare401Error1> onApiV1MiscLinkedinPostReshare401Error1,
        Action<ApiV1MiscLinkedinPostReshare403Error1> onApiV1MiscLinkedinPostReshare403Error1,
        Action<ApiV1MiscLinkedinPostReshare404Error1> onApiV1MiscLinkedinPostReshare404Error1,
        Action<ApiV1MiscLinkedinPostReshare422Error1> onApiV1MiscLinkedinPostReshare422Error1,
        Action<ApiV1MiscLinkedinPostReshare429Error1> onApiV1MiscLinkedinPostReshare429Error1,
        Action<ApiV1MiscLinkedinPostReshare500Error1> onApiV1MiscLinkedinPostReshare500Error1,
        Action<ApiV1MiscLinkedinPostReshare502Error1> onApiV1MiscLinkedinPostReshare502Error1,
        Action<ApiV1MiscLinkedinPostReshare503Error1> onApiV1MiscLinkedinPostReshare503Error1,
        Action<ApiV1MiscLinkedinPostReshare504Error1> onApiV1MiscLinkedinPostReshare504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscLinkedinPostReshare400Error1(
            out var apiV1MiscLinkedinPostReshare400Error1Value)) onApiV1MiscLinkedinPostReshare400Error1(
            apiV1MiscLinkedinPostReshare400Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare401Error1(
            out var apiV1MiscLinkedinPostReshare401Error1Value)) onApiV1MiscLinkedinPostReshare401Error1(
            apiV1MiscLinkedinPostReshare401Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare403Error1(
            out var apiV1MiscLinkedinPostReshare403Error1Value)) onApiV1MiscLinkedinPostReshare403Error1(
            apiV1MiscLinkedinPostReshare403Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare404Error1(
            out var apiV1MiscLinkedinPostReshare404Error1Value)) onApiV1MiscLinkedinPostReshare404Error1(
            apiV1MiscLinkedinPostReshare404Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare422Error1(
            out var apiV1MiscLinkedinPostReshare422Error1Value)) onApiV1MiscLinkedinPostReshare422Error1(
            apiV1MiscLinkedinPostReshare422Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare429Error1(
            out var apiV1MiscLinkedinPostReshare429Error1Value)) onApiV1MiscLinkedinPostReshare429Error1(
            apiV1MiscLinkedinPostReshare429Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare500Error1(
            out var apiV1MiscLinkedinPostReshare500Error1Value)) onApiV1MiscLinkedinPostReshare500Error1(
            apiV1MiscLinkedinPostReshare500Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare502Error1(
            out var apiV1MiscLinkedinPostReshare502Error1Value)) onApiV1MiscLinkedinPostReshare502Error1(
            apiV1MiscLinkedinPostReshare502Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare503Error1(
            out var apiV1MiscLinkedinPostReshare503Error1Value)) onApiV1MiscLinkedinPostReshare503Error1(
            apiV1MiscLinkedinPostReshare503Error1Value);
        else if (TryGetApiV1MiscLinkedinPostReshare504Error1(
            out var apiV1MiscLinkedinPostReshare504Error1Value)) onApiV1MiscLinkedinPostReshare504Error1(
            apiV1MiscLinkedinPostReshare504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscLinkedinResharePostError)} holds no value.");
    }

    private static Task<MiscLinkedinResharePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscLinkedinPostReshare400Error1>().As(AsApiV1MiscLinkedinPostReshare400Error1),
            401 => response.Json<ApiV1MiscLinkedinPostReshare401Error1>().As(AsApiV1MiscLinkedinPostReshare401Error1),
            403 => response.Json<ApiV1MiscLinkedinPostReshare403Error1>().As(AsApiV1MiscLinkedinPostReshare403Error1),
            404 => response.Json<ApiV1MiscLinkedinPostReshare404Error1>().As(AsApiV1MiscLinkedinPostReshare404Error1),
            422 => response.Json<ApiV1MiscLinkedinPostReshare422Error1>().As(AsApiV1MiscLinkedinPostReshare422Error1),
            429 => response.Json<ApiV1MiscLinkedinPostReshare429Error1>().As(AsApiV1MiscLinkedinPostReshare429Error1),
            500 => response.Json<ApiV1MiscLinkedinPostReshare500Error1>().As(AsApiV1MiscLinkedinPostReshare500Error1),
            502 => response.Json<ApiV1MiscLinkedinPostReshare502Error1>().As(AsApiV1MiscLinkedinPostReshare502Error1),
            503 => response.Json<ApiV1MiscLinkedinPostReshare503Error1>().As(AsApiV1MiscLinkedinPostReshare503Error1),
            504 => response.Json<ApiV1MiscLinkedinPostReshare504Error1>().As(AsApiV1MiscLinkedinPostReshare504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscLinkedinResharePostError> Response { get; } = new(Create);
}
