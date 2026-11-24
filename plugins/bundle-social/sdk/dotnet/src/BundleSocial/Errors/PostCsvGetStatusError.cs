using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class PostCsvGetStatusError : ApiError
{
    private readonly Optional<ApiV1PostCsvImportStatus400Error1> _apiV1PostCsvImportStatus400Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus401Error1> _apiV1PostCsvImportStatus401Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus403Error1> _apiV1PostCsvImportStatus403Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus404Error1> _apiV1PostCsvImportStatus404Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus429Error1> _apiV1PostCsvImportStatus429Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus500Error1> _apiV1PostCsvImportStatus500Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus502Error1> _apiV1PostCsvImportStatus502Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus503Error1> _apiV1PostCsvImportStatus503Error1Value;

    private readonly Optional<ApiV1PostCsvImportStatus504Error1> _apiV1PostCsvImportStatus504Error1Value;

    private PostCsvGetStatusError(Optional<ApiV1PostCsvImportStatus400Error1> apiV1PostCsvImportStatus400Error1Value,
        Optional<ApiV1PostCsvImportStatus401Error1> apiV1PostCsvImportStatus401Error1Value,
        Optional<ApiV1PostCsvImportStatus403Error1> apiV1PostCsvImportStatus403Error1Value,
        Optional<ApiV1PostCsvImportStatus404Error1> apiV1PostCsvImportStatus404Error1Value,
        Optional<ApiV1PostCsvImportStatus429Error1> apiV1PostCsvImportStatus429Error1Value,
        Optional<ApiV1PostCsvImportStatus500Error1> apiV1PostCsvImportStatus500Error1Value,
        Optional<ApiV1PostCsvImportStatus502Error1> apiV1PostCsvImportStatus502Error1Value,
        Optional<ApiV1PostCsvImportStatus503Error1> apiV1PostCsvImportStatus503Error1Value,
        Optional<ApiV1PostCsvImportStatus504Error1> apiV1PostCsvImportStatus504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PostCsvImportStatus400Error1Value = apiV1PostCsvImportStatus400Error1Value;
        _apiV1PostCsvImportStatus401Error1Value = apiV1PostCsvImportStatus401Error1Value;
        _apiV1PostCsvImportStatus403Error1Value = apiV1PostCsvImportStatus403Error1Value;
        _apiV1PostCsvImportStatus404Error1Value = apiV1PostCsvImportStatus404Error1Value;
        _apiV1PostCsvImportStatus429Error1Value = apiV1PostCsvImportStatus429Error1Value;
        _apiV1PostCsvImportStatus500Error1Value = apiV1PostCsvImportStatus500Error1Value;
        _apiV1PostCsvImportStatus502Error1Value = apiV1PostCsvImportStatus502Error1Value;
        _apiV1PostCsvImportStatus503Error1Value = apiV1PostCsvImportStatus503Error1Value;
        _apiV1PostCsvImportStatus504Error1Value = apiV1PostCsvImportStatus504Error1Value;
    }

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus400Error1(ApiV1PostCsvImportStatus400Error1 value) =>
        new(
            Optional<ApiV1PostCsvImportStatus400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus401Error1(ApiV1PostCsvImportStatus401Error1 value) =>
        new(
            default,
            Optional<ApiV1PostCsvImportStatus401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus403Error1(ApiV1PostCsvImportStatus403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1PostCsvImportStatus403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus404Error1(ApiV1PostCsvImportStatus404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus429Error1(ApiV1PostCsvImportStatus429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus500Error1(ApiV1PostCsvImportStatus500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus502Error1(ApiV1PostCsvImportStatus502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus502Error1>.Some(value),
            default,
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus503Error1(ApiV1PostCsvImportStatus503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus503Error1>.Some(value),
            default,
            default);

    private static PostCsvGetStatusError AsApiV1PostCsvImportStatus504Error1(ApiV1PostCsvImportStatus504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1PostCsvImportStatus504Error1>.Some(value),
            default);

    private static PostCsvGetStatusError AsFallback(RawError value) =>
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

    public bool TryGetApiV1PostCsvImportStatus400Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus400Error1? value) =>
        _apiV1PostCsvImportStatus400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus401Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus401Error1? value) =>
        _apiV1PostCsvImportStatus401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus403Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus403Error1? value) =>
        _apiV1PostCsvImportStatus403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus404Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus404Error1? value) =>
        _apiV1PostCsvImportStatus404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus429Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus429Error1? value) =>
        _apiV1PostCsvImportStatus429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus500Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus500Error1? value) =>
        _apiV1PostCsvImportStatus500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus502Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus502Error1? value) =>
        _apiV1PostCsvImportStatus502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus503Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus503Error1? value) =>
        _apiV1PostCsvImportStatus503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PostCsvImportStatus504Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus504Error1? value) =>
        _apiV1PostCsvImportStatus504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PostCsvImportStatus400Error1, TResult> onApiV1PostCsvImportStatus400Error1,
        Func<ApiV1PostCsvImportStatus401Error1, TResult> onApiV1PostCsvImportStatus401Error1,
        Func<ApiV1PostCsvImportStatus403Error1, TResult> onApiV1PostCsvImportStatus403Error1,
        Func<ApiV1PostCsvImportStatus404Error1, TResult> onApiV1PostCsvImportStatus404Error1,
        Func<ApiV1PostCsvImportStatus429Error1, TResult> onApiV1PostCsvImportStatus429Error1,
        Func<ApiV1PostCsvImportStatus500Error1, TResult> onApiV1PostCsvImportStatus500Error1,
        Func<ApiV1PostCsvImportStatus502Error1, TResult> onApiV1PostCsvImportStatus502Error1,
        Func<ApiV1PostCsvImportStatus503Error1, TResult> onApiV1PostCsvImportStatus503Error1,
        Func<ApiV1PostCsvImportStatus504Error1, TResult> onApiV1PostCsvImportStatus504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PostCsvImportStatus400Error1(
                out var apiV1PostCsvImportStatus400Error1Value) => onApiV1PostCsvImportStatus400Error1(
                apiV1PostCsvImportStatus400Error1Value),
            _ when TryGetApiV1PostCsvImportStatus401Error1(
                out var apiV1PostCsvImportStatus401Error1Value) => onApiV1PostCsvImportStatus401Error1(
                apiV1PostCsvImportStatus401Error1Value),
            _ when TryGetApiV1PostCsvImportStatus403Error1(
                out var apiV1PostCsvImportStatus403Error1Value) => onApiV1PostCsvImportStatus403Error1(
                apiV1PostCsvImportStatus403Error1Value),
            _ when TryGetApiV1PostCsvImportStatus404Error1(
                out var apiV1PostCsvImportStatus404Error1Value) => onApiV1PostCsvImportStatus404Error1(
                apiV1PostCsvImportStatus404Error1Value),
            _ when TryGetApiV1PostCsvImportStatus429Error1(
                out var apiV1PostCsvImportStatus429Error1Value) => onApiV1PostCsvImportStatus429Error1(
                apiV1PostCsvImportStatus429Error1Value),
            _ when TryGetApiV1PostCsvImportStatus500Error1(
                out var apiV1PostCsvImportStatus500Error1Value) => onApiV1PostCsvImportStatus500Error1(
                apiV1PostCsvImportStatus500Error1Value),
            _ when TryGetApiV1PostCsvImportStatus502Error1(
                out var apiV1PostCsvImportStatus502Error1Value) => onApiV1PostCsvImportStatus502Error1(
                apiV1PostCsvImportStatus502Error1Value),
            _ when TryGetApiV1PostCsvImportStatus503Error1(
                out var apiV1PostCsvImportStatus503Error1Value) => onApiV1PostCsvImportStatus503Error1(
                apiV1PostCsvImportStatus503Error1Value),
            _ when TryGetApiV1PostCsvImportStatus504Error1(
                out var apiV1PostCsvImportStatus504Error1Value) => onApiV1PostCsvImportStatus504Error1(
                apiV1PostCsvImportStatus504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostCsvGetStatusError)} holds no value.")
        };

    public void Match(Action<ApiV1PostCsvImportStatus400Error1> onApiV1PostCsvImportStatus400Error1,
        Action<ApiV1PostCsvImportStatus401Error1> onApiV1PostCsvImportStatus401Error1,
        Action<ApiV1PostCsvImportStatus403Error1> onApiV1PostCsvImportStatus403Error1,
        Action<ApiV1PostCsvImportStatus404Error1> onApiV1PostCsvImportStatus404Error1,
        Action<ApiV1PostCsvImportStatus429Error1> onApiV1PostCsvImportStatus429Error1,
        Action<ApiV1PostCsvImportStatus500Error1> onApiV1PostCsvImportStatus500Error1,
        Action<ApiV1PostCsvImportStatus502Error1> onApiV1PostCsvImportStatus502Error1,
        Action<ApiV1PostCsvImportStatus503Error1> onApiV1PostCsvImportStatus503Error1,
        Action<ApiV1PostCsvImportStatus504Error1> onApiV1PostCsvImportStatus504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PostCsvImportStatus400Error1(
            out var apiV1PostCsvImportStatus400Error1Value)) onApiV1PostCsvImportStatus400Error1(
            apiV1PostCsvImportStatus400Error1Value);
        else if (TryGetApiV1PostCsvImportStatus401Error1(
            out var apiV1PostCsvImportStatus401Error1Value)) onApiV1PostCsvImportStatus401Error1(
            apiV1PostCsvImportStatus401Error1Value);
        else if (TryGetApiV1PostCsvImportStatus403Error1(
            out var apiV1PostCsvImportStatus403Error1Value)) onApiV1PostCsvImportStatus403Error1(
            apiV1PostCsvImportStatus403Error1Value);
        else if (TryGetApiV1PostCsvImportStatus404Error1(
            out var apiV1PostCsvImportStatus404Error1Value)) onApiV1PostCsvImportStatus404Error1(
            apiV1PostCsvImportStatus404Error1Value);
        else if (TryGetApiV1PostCsvImportStatus429Error1(
            out var apiV1PostCsvImportStatus429Error1Value)) onApiV1PostCsvImportStatus429Error1(
            apiV1PostCsvImportStatus429Error1Value);
        else if (TryGetApiV1PostCsvImportStatus500Error1(
            out var apiV1PostCsvImportStatus500Error1Value)) onApiV1PostCsvImportStatus500Error1(
            apiV1PostCsvImportStatus500Error1Value);
        else if (TryGetApiV1PostCsvImportStatus502Error1(
            out var apiV1PostCsvImportStatus502Error1Value)) onApiV1PostCsvImportStatus502Error1(
            apiV1PostCsvImportStatus502Error1Value);
        else if (TryGetApiV1PostCsvImportStatus503Error1(
            out var apiV1PostCsvImportStatus503Error1Value)) onApiV1PostCsvImportStatus503Error1(
            apiV1PostCsvImportStatus503Error1Value);
        else if (TryGetApiV1PostCsvImportStatus504Error1(
            out var apiV1PostCsvImportStatus504Error1Value)) onApiV1PostCsvImportStatus504Error1(
            apiV1PostCsvImportStatus504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostCsvGetStatusError)} holds no value.");
    }

    private static Task<PostCsvGetStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PostCsvImportStatus400Error1>().As(AsApiV1PostCsvImportStatus400Error1),
            401 => response.Json<ApiV1PostCsvImportStatus401Error1>().As(AsApiV1PostCsvImportStatus401Error1),
            403 => response.Json<ApiV1PostCsvImportStatus403Error1>().As(AsApiV1PostCsvImportStatus403Error1),
            404 => response.Json<ApiV1PostCsvImportStatus404Error1>().As(AsApiV1PostCsvImportStatus404Error1),
            429 => response.Json<ApiV1PostCsvImportStatus429Error1>().As(AsApiV1PostCsvImportStatus429Error1),
            500 => response.Json<ApiV1PostCsvImportStatus500Error1>().As(AsApiV1PostCsvImportStatus500Error1),
            502 => response.Json<ApiV1PostCsvImportStatus502Error1>().As(AsApiV1PostCsvImportStatus502Error1),
            503 => response.Json<ApiV1PostCsvImportStatus503Error1>().As(AsApiV1PostCsvImportStatus503Error1),
            504 => response.Json<ApiV1PostCsvImportStatus504Error1>().As(AsApiV1PostCsvImportStatus504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostCsvGetStatusError> Response { get; } = new(Create);
}
