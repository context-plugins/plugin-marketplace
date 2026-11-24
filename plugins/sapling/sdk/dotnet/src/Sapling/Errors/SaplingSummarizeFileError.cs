using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingSummarizeFileError : ApiError
{
    private readonly Optional<ApiV1FileSummarize400Error1> _apiV1FileSummarize400Error1Value;

    private readonly Optional<ApiV1FileSummarize413Error1> _apiV1FileSummarize413Error1Value;

    private readonly Optional<ApiV1FileSummarize429Error1> _apiV1FileSummarize429Error1Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private SaplingSummarizeFileError(Optional<ApiV1FileSummarize400Error1> apiV1FileSummarize400Error1Value,
        Optional<ApiV1FileSummarize413Error1> apiV1FileSummarize413Error1Value,
        Optional<ApiV1FileSummarize429Error1> apiV1FileSummarize429Error1Value,
        Optional<Error> errorValue,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1FileSummarize400Error1Value = apiV1FileSummarize400Error1Value;
        _apiV1FileSummarize413Error1Value = apiV1FileSummarize413Error1Value;
        _apiV1FileSummarize429Error1Value = apiV1FileSummarize429Error1Value;
        _errorValue = errorValue;
        _paymentRequired1Value = paymentRequired1Value;
    }

    private static SaplingSummarizeFileError AsApiV1FileSummarize400Error1(ApiV1FileSummarize400Error1 value) =>
        new(Optional<ApiV1FileSummarize400Error1>.Some(value), default, default, default, default, default);

    private static SaplingSummarizeFileError AsApiV1FileSummarize413Error1(ApiV1FileSummarize413Error1 value) =>
        new(default, Optional<ApiV1FileSummarize413Error1>.Some(value), default, default, default, default);

    private static SaplingSummarizeFileError AsApiV1FileSummarize429Error1(ApiV1FileSummarize429Error1 value) =>
        new(default, default, Optional<ApiV1FileSummarize429Error1>.Some(value), default, default, default);

    private static SaplingSummarizeFileError AsError(Error value) =>
        new(default, default, default, Optional<Error>.Some(value), default, default);

    private static SaplingSummarizeFileError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, default, default, Optional<PaymentRequired1>.Some(value), default);

    private static SaplingSummarizeFileError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1FileSummarize400Error1([NotNullWhen(true)] out ApiV1FileSummarize400Error1? value) =>
        _apiV1FileSummarize400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1FileSummarize413Error1([NotNullWhen(true)] out ApiV1FileSummarize413Error1? value) =>
        _apiV1FileSummarize413Error1Value.TryGetValue(out value);

    public bool TryGetApiV1FileSummarize429Error1([NotNullWhen(true)] out ApiV1FileSummarize429Error1? value) =>
        _apiV1FileSummarize429Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1FileSummarize400Error1, TResult> onApiV1FileSummarize400Error1,
        Func<ApiV1FileSummarize413Error1, TResult> onApiV1FileSummarize413Error1,
        Func<ApiV1FileSummarize429Error1, TResult> onApiV1FileSummarize429Error1,
        Func<Error, TResult> onError,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1FileSummarize400Error1(
                out var apiV1FileSummarize400Error1Value) => onApiV1FileSummarize400Error1(
                apiV1FileSummarize400Error1Value),
            _ when TryGetApiV1FileSummarize413Error1(
                out var apiV1FileSummarize413Error1Value) => onApiV1FileSummarize413Error1(
                apiV1FileSummarize413Error1Value),
            _ when TryGetApiV1FileSummarize429Error1(
                out var apiV1FileSummarize429Error1Value) => onApiV1FileSummarize429Error1(
                apiV1FileSummarize429Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingSummarizeFileError)} holds no value.")
        };

    public void Match(Action<ApiV1FileSummarize400Error1> onApiV1FileSummarize400Error1,
        Action<ApiV1FileSummarize413Error1> onApiV1FileSummarize413Error1,
        Action<ApiV1FileSummarize429Error1> onApiV1FileSummarize429Error1,
        Action<Error> onError,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1FileSummarize400Error1(out var apiV1FileSummarize400Error1Value)) onApiV1FileSummarize400Error1(
            apiV1FileSummarize400Error1Value);
        else if (TryGetApiV1FileSummarize413Error1(
            out var apiV1FileSummarize413Error1Value)) onApiV1FileSummarize413Error1(apiV1FileSummarize413Error1Value);
        else if (TryGetApiV1FileSummarize429Error1(
            out var apiV1FileSummarize429Error1Value)) onApiV1FileSummarize429Error1(apiV1FileSummarize429Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingSummarizeFileError)} holds no value.");
    }

    private static Task<SaplingSummarizeFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1FileSummarize400Error1>().As(AsApiV1FileSummarize400Error1),
            401 or 403 or 500 or 502 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<ApiV1FileSummarize413Error1>().As(AsApiV1FileSummarize413Error1),
            429 => response.Json<ApiV1FileSummarize429Error1>().As(AsApiV1FileSummarize429Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingSummarizeFileError> Response { get; } = new(Create);
}
