using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingPdfToTextError : ApiError
{
    private readonly Optional<ApiV1IngestPdfToText400Error1> _apiV1IngestPdfToText400Error1Value;

    private readonly Optional<ApiV1IngestPdfToText413Error1> _apiV1IngestPdfToText413Error1Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private SaplingPdfToTextError(Optional<ApiV1IngestPdfToText400Error1> apiV1IngestPdfToText400Error1Value,
        Optional<ApiV1IngestPdfToText413Error1> apiV1IngestPdfToText413Error1Value,
        Optional<Error> errorValue,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1IngestPdfToText400Error1Value = apiV1IngestPdfToText400Error1Value;
        _apiV1IngestPdfToText413Error1Value = apiV1IngestPdfToText413Error1Value;
        _errorValue = errorValue;
        _paymentRequired1Value = paymentRequired1Value;
    }

    private static SaplingPdfToTextError AsApiV1IngestPdfToText400Error1(ApiV1IngestPdfToText400Error1 value) =>
        new(Optional<ApiV1IngestPdfToText400Error1>.Some(value), default, default, default, default);

    private static SaplingPdfToTextError AsApiV1IngestPdfToText413Error1(ApiV1IngestPdfToText413Error1 value) =>
        new(default, Optional<ApiV1IngestPdfToText413Error1>.Some(value), default, default, default);

    private static SaplingPdfToTextError AsError(Error value) =>
        new(default, default, Optional<Error>.Some(value), default, default);

    private static SaplingPdfToTextError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, default, Optional<PaymentRequired1>.Some(value), default);

    private static SaplingPdfToTextError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1IngestPdfToText400Error1([NotNullWhen(true)] out ApiV1IngestPdfToText400Error1? value) =>
        _apiV1IngestPdfToText400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1IngestPdfToText413Error1([NotNullWhen(true)] out ApiV1IngestPdfToText413Error1? value) =>
        _apiV1IngestPdfToText413Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1IngestPdfToText400Error1, TResult> onApiV1IngestPdfToText400Error1,
        Func<ApiV1IngestPdfToText413Error1, TResult> onApiV1IngestPdfToText413Error1,
        Func<Error, TResult> onError,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1IngestPdfToText400Error1(
                out var apiV1IngestPdfToText400Error1Value) => onApiV1IngestPdfToText400Error1(
                apiV1IngestPdfToText400Error1Value),
            _ when TryGetApiV1IngestPdfToText413Error1(
                out var apiV1IngestPdfToText413Error1Value) => onApiV1IngestPdfToText413Error1(
                apiV1IngestPdfToText413Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingPdfToTextError)} holds no value.")
        };

    public void Match(Action<ApiV1IngestPdfToText400Error1> onApiV1IngestPdfToText400Error1,
        Action<ApiV1IngestPdfToText413Error1> onApiV1IngestPdfToText413Error1,
        Action<Error> onError,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1IngestPdfToText400Error1(
            out var apiV1IngestPdfToText400Error1Value)) onApiV1IngestPdfToText400Error1(
            apiV1IngestPdfToText400Error1Value);
        else if (TryGetApiV1IngestPdfToText413Error1(
            out var apiV1IngestPdfToText413Error1Value)) onApiV1IngestPdfToText413Error1(
            apiV1IngestPdfToText413Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingPdfToTextError)} holds no value.");
    }

    private static Task<SaplingPdfToTextError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1IngestPdfToText400Error1>().As(AsApiV1IngestPdfToText400Error1),
            401 or 403 or 429 or 500 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<ApiV1IngestPdfToText413Error1>().As(AsApiV1IngestPdfToText413Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingPdfToTextError> Response { get; } = new(Create);
}
