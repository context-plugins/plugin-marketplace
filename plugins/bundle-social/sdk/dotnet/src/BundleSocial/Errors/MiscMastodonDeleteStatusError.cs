using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscMastodonDeleteStatusError : ApiError
{
    private readonly Optional<ApiV1MiscMastodonStatus400Error1> _apiV1MiscMastodonStatus400Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus401Error1> _apiV1MiscMastodonStatus401Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus403Error1> _apiV1MiscMastodonStatus403Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus404Error1> _apiV1MiscMastodonStatus404Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus429Error1> _apiV1MiscMastodonStatus429Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus500Error1> _apiV1MiscMastodonStatus500Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus502Error1> _apiV1MiscMastodonStatus502Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus503Error1> _apiV1MiscMastodonStatus503Error1Value;

    private readonly Optional<ApiV1MiscMastodonStatus504Error1> _apiV1MiscMastodonStatus504Error1Value;

    private MiscMastodonDeleteStatusError(Optional<ApiV1MiscMastodonStatus400Error1> apiV1MiscMastodonStatus400Error1Value,
        Optional<ApiV1MiscMastodonStatus401Error1> apiV1MiscMastodonStatus401Error1Value,
        Optional<ApiV1MiscMastodonStatus403Error1> apiV1MiscMastodonStatus403Error1Value,
        Optional<ApiV1MiscMastodonStatus404Error1> apiV1MiscMastodonStatus404Error1Value,
        Optional<ApiV1MiscMastodonStatus429Error1> apiV1MiscMastodonStatus429Error1Value,
        Optional<ApiV1MiscMastodonStatus500Error1> apiV1MiscMastodonStatus500Error1Value,
        Optional<ApiV1MiscMastodonStatus502Error1> apiV1MiscMastodonStatus502Error1Value,
        Optional<ApiV1MiscMastodonStatus503Error1> apiV1MiscMastodonStatus503Error1Value,
        Optional<ApiV1MiscMastodonStatus504Error1> apiV1MiscMastodonStatus504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscMastodonStatus400Error1Value = apiV1MiscMastodonStatus400Error1Value;
        _apiV1MiscMastodonStatus401Error1Value = apiV1MiscMastodonStatus401Error1Value;
        _apiV1MiscMastodonStatus403Error1Value = apiV1MiscMastodonStatus403Error1Value;
        _apiV1MiscMastodonStatus404Error1Value = apiV1MiscMastodonStatus404Error1Value;
        _apiV1MiscMastodonStatus429Error1Value = apiV1MiscMastodonStatus429Error1Value;
        _apiV1MiscMastodonStatus500Error1Value = apiV1MiscMastodonStatus500Error1Value;
        _apiV1MiscMastodonStatus502Error1Value = apiV1MiscMastodonStatus502Error1Value;
        _apiV1MiscMastodonStatus503Error1Value = apiV1MiscMastodonStatus503Error1Value;
        _apiV1MiscMastodonStatus504Error1Value = apiV1MiscMastodonStatus504Error1Value;
    }

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus400Error1(ApiV1MiscMastodonStatus400Error1 value) =>
        new(
            Optional<ApiV1MiscMastodonStatus400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus401Error1(ApiV1MiscMastodonStatus401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscMastodonStatus401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus403Error1(ApiV1MiscMastodonStatus403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscMastodonStatus403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus404Error1(ApiV1MiscMastodonStatus404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus429Error1(ApiV1MiscMastodonStatus429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus500Error1(ApiV1MiscMastodonStatus500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus502Error1(ApiV1MiscMastodonStatus502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus503Error1(ApiV1MiscMastodonStatus503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus503Error1>.Some(value),
            default,
            default);

    private static MiscMastodonDeleteStatusError AsApiV1MiscMastodonStatus504Error1(ApiV1MiscMastodonStatus504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscMastodonStatus504Error1>.Some(value),
            default);

    private static MiscMastodonDeleteStatusError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscMastodonStatus400Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus400Error1? value) =>
        _apiV1MiscMastodonStatus400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus401Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus401Error1? value) =>
        _apiV1MiscMastodonStatus401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus403Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus403Error1? value) =>
        _apiV1MiscMastodonStatus403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus404Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus404Error1? value) =>
        _apiV1MiscMastodonStatus404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus429Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus429Error1? value) =>
        _apiV1MiscMastodonStatus429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus500Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus500Error1? value) =>
        _apiV1MiscMastodonStatus500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus502Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus502Error1? value) =>
        _apiV1MiscMastodonStatus502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus503Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus503Error1? value) =>
        _apiV1MiscMastodonStatus503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscMastodonStatus504Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus504Error1? value) =>
        _apiV1MiscMastodonStatus504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscMastodonStatus400Error1, TResult> onApiV1MiscMastodonStatus400Error1,
        Func<ApiV1MiscMastodonStatus401Error1, TResult> onApiV1MiscMastodonStatus401Error1,
        Func<ApiV1MiscMastodonStatus403Error1, TResult> onApiV1MiscMastodonStatus403Error1,
        Func<ApiV1MiscMastodonStatus404Error1, TResult> onApiV1MiscMastodonStatus404Error1,
        Func<ApiV1MiscMastodonStatus429Error1, TResult> onApiV1MiscMastodonStatus429Error1,
        Func<ApiV1MiscMastodonStatus500Error1, TResult> onApiV1MiscMastodonStatus500Error1,
        Func<ApiV1MiscMastodonStatus502Error1, TResult> onApiV1MiscMastodonStatus502Error1,
        Func<ApiV1MiscMastodonStatus503Error1, TResult> onApiV1MiscMastodonStatus503Error1,
        Func<ApiV1MiscMastodonStatus504Error1, TResult> onApiV1MiscMastodonStatus504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscMastodonStatus400Error1(
                out var apiV1MiscMastodonStatus400Error1Value) => onApiV1MiscMastodonStatus400Error1(
                apiV1MiscMastodonStatus400Error1Value),
            _ when TryGetApiV1MiscMastodonStatus401Error1(
                out var apiV1MiscMastodonStatus401Error1Value) => onApiV1MiscMastodonStatus401Error1(
                apiV1MiscMastodonStatus401Error1Value),
            _ when TryGetApiV1MiscMastodonStatus403Error1(
                out var apiV1MiscMastodonStatus403Error1Value) => onApiV1MiscMastodonStatus403Error1(
                apiV1MiscMastodonStatus403Error1Value),
            _ when TryGetApiV1MiscMastodonStatus404Error1(
                out var apiV1MiscMastodonStatus404Error1Value) => onApiV1MiscMastodonStatus404Error1(
                apiV1MiscMastodonStatus404Error1Value),
            _ when TryGetApiV1MiscMastodonStatus429Error1(
                out var apiV1MiscMastodonStatus429Error1Value) => onApiV1MiscMastodonStatus429Error1(
                apiV1MiscMastodonStatus429Error1Value),
            _ when TryGetApiV1MiscMastodonStatus500Error1(
                out var apiV1MiscMastodonStatus500Error1Value) => onApiV1MiscMastodonStatus500Error1(
                apiV1MiscMastodonStatus500Error1Value),
            _ when TryGetApiV1MiscMastodonStatus502Error1(
                out var apiV1MiscMastodonStatus502Error1Value) => onApiV1MiscMastodonStatus502Error1(
                apiV1MiscMastodonStatus502Error1Value),
            _ when TryGetApiV1MiscMastodonStatus503Error1(
                out var apiV1MiscMastodonStatus503Error1Value) => onApiV1MiscMastodonStatus503Error1(
                apiV1MiscMastodonStatus503Error1Value),
            _ when TryGetApiV1MiscMastodonStatus504Error1(
                out var apiV1MiscMastodonStatus504Error1Value) => onApiV1MiscMastodonStatus504Error1(
                apiV1MiscMastodonStatus504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscMastodonDeleteStatusError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscMastodonStatus400Error1> onApiV1MiscMastodonStatus400Error1,
        Action<ApiV1MiscMastodonStatus401Error1> onApiV1MiscMastodonStatus401Error1,
        Action<ApiV1MiscMastodonStatus403Error1> onApiV1MiscMastodonStatus403Error1,
        Action<ApiV1MiscMastodonStatus404Error1> onApiV1MiscMastodonStatus404Error1,
        Action<ApiV1MiscMastodonStatus429Error1> onApiV1MiscMastodonStatus429Error1,
        Action<ApiV1MiscMastodonStatus500Error1> onApiV1MiscMastodonStatus500Error1,
        Action<ApiV1MiscMastodonStatus502Error1> onApiV1MiscMastodonStatus502Error1,
        Action<ApiV1MiscMastodonStatus503Error1> onApiV1MiscMastodonStatus503Error1,
        Action<ApiV1MiscMastodonStatus504Error1> onApiV1MiscMastodonStatus504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscMastodonStatus400Error1(
            out var apiV1MiscMastodonStatus400Error1Value)) onApiV1MiscMastodonStatus400Error1(
            apiV1MiscMastodonStatus400Error1Value);
        else if (TryGetApiV1MiscMastodonStatus401Error1(
            out var apiV1MiscMastodonStatus401Error1Value)) onApiV1MiscMastodonStatus401Error1(
            apiV1MiscMastodonStatus401Error1Value);
        else if (TryGetApiV1MiscMastodonStatus403Error1(
            out var apiV1MiscMastodonStatus403Error1Value)) onApiV1MiscMastodonStatus403Error1(
            apiV1MiscMastodonStatus403Error1Value);
        else if (TryGetApiV1MiscMastodonStatus404Error1(
            out var apiV1MiscMastodonStatus404Error1Value)) onApiV1MiscMastodonStatus404Error1(
            apiV1MiscMastodonStatus404Error1Value);
        else if (TryGetApiV1MiscMastodonStatus429Error1(
            out var apiV1MiscMastodonStatus429Error1Value)) onApiV1MiscMastodonStatus429Error1(
            apiV1MiscMastodonStatus429Error1Value);
        else if (TryGetApiV1MiscMastodonStatus500Error1(
            out var apiV1MiscMastodonStatus500Error1Value)) onApiV1MiscMastodonStatus500Error1(
            apiV1MiscMastodonStatus500Error1Value);
        else if (TryGetApiV1MiscMastodonStatus502Error1(
            out var apiV1MiscMastodonStatus502Error1Value)) onApiV1MiscMastodonStatus502Error1(
            apiV1MiscMastodonStatus502Error1Value);
        else if (TryGetApiV1MiscMastodonStatus503Error1(
            out var apiV1MiscMastodonStatus503Error1Value)) onApiV1MiscMastodonStatus503Error1(
            apiV1MiscMastodonStatus503Error1Value);
        else if (TryGetApiV1MiscMastodonStatus504Error1(
            out var apiV1MiscMastodonStatus504Error1Value)) onApiV1MiscMastodonStatus504Error1(
            apiV1MiscMastodonStatus504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscMastodonDeleteStatusError)} holds no value.");
    }

    private static Task<MiscMastodonDeleteStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscMastodonStatus400Error1>().As(AsApiV1MiscMastodonStatus400Error1),
            401 => response.Json<ApiV1MiscMastodonStatus401Error1>().As(AsApiV1MiscMastodonStatus401Error1),
            403 => response.Json<ApiV1MiscMastodonStatus403Error1>().As(AsApiV1MiscMastodonStatus403Error1),
            404 => response.Json<ApiV1MiscMastodonStatus404Error1>().As(AsApiV1MiscMastodonStatus404Error1),
            429 => response.Json<ApiV1MiscMastodonStatus429Error1>().As(AsApiV1MiscMastodonStatus429Error1),
            500 => response.Json<ApiV1MiscMastodonStatus500Error1>().As(AsApiV1MiscMastodonStatus500Error1),
            502 => response.Json<ApiV1MiscMastodonStatus502Error1>().As(AsApiV1MiscMastodonStatus502Error1),
            503 => response.Json<ApiV1MiscMastodonStatus503Error1>().As(AsApiV1MiscMastodonStatus503Error1),
            504 => response.Json<ApiV1MiscMastodonStatus504Error1>().As(AsApiV1MiscMastodonStatus504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscMastodonDeleteStatusError> Response { get; } = new(Create);
}
