using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingAidetectDocxError : ApiError
{
    private readonly Optional<ApiV1DocxAidetect400Error1> _apiV1DocxAidetect400Error1Value;

    private readonly Optional<ApiV1DocxAidetect413Error1> _apiV1DocxAidetect413Error1Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private SaplingAidetectDocxError(Optional<ApiV1DocxAidetect400Error1> apiV1DocxAidetect400Error1Value,
        Optional<ApiV1DocxAidetect413Error1> apiV1DocxAidetect413Error1Value,
        Optional<Error> errorValue,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1DocxAidetect400Error1Value = apiV1DocxAidetect400Error1Value;
        _apiV1DocxAidetect413Error1Value = apiV1DocxAidetect413Error1Value;
        _errorValue = errorValue;
        _paymentRequired1Value = paymentRequired1Value;
    }

    private static SaplingAidetectDocxError AsApiV1DocxAidetect400Error1(ApiV1DocxAidetect400Error1 value) =>
        new(Optional<ApiV1DocxAidetect400Error1>.Some(value), default, default, default, default);

    private static SaplingAidetectDocxError AsApiV1DocxAidetect413Error1(ApiV1DocxAidetect413Error1 value) =>
        new(default, Optional<ApiV1DocxAidetect413Error1>.Some(value), default, default, default);

    private static SaplingAidetectDocxError AsError(Error value) =>
        new(default, default, Optional<Error>.Some(value), default, default);

    private static SaplingAidetectDocxError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, default, Optional<PaymentRequired1>.Some(value), default);

    private static SaplingAidetectDocxError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1DocxAidetect400Error1([NotNullWhen(true)] out ApiV1DocxAidetect400Error1? value) =>
        _apiV1DocxAidetect400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1DocxAidetect413Error1([NotNullWhen(true)] out ApiV1DocxAidetect413Error1? value) =>
        _apiV1DocxAidetect413Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1DocxAidetect400Error1, TResult> onApiV1DocxAidetect400Error1,
        Func<ApiV1DocxAidetect413Error1, TResult> onApiV1DocxAidetect413Error1,
        Func<Error, TResult> onError,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1DocxAidetect400Error1(
                out var apiV1DocxAidetect400Error1Value) => onApiV1DocxAidetect400Error1(
                apiV1DocxAidetect400Error1Value),
            _ when TryGetApiV1DocxAidetect413Error1(
                out var apiV1DocxAidetect413Error1Value) => onApiV1DocxAidetect413Error1(
                apiV1DocxAidetect413Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingAidetectDocxError)} holds no value.")
        };

    public void Match(Action<ApiV1DocxAidetect400Error1> onApiV1DocxAidetect400Error1,
        Action<ApiV1DocxAidetect413Error1> onApiV1DocxAidetect413Error1,
        Action<Error> onError,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1DocxAidetect400Error1(out var apiV1DocxAidetect400Error1Value)) onApiV1DocxAidetect400Error1(
            apiV1DocxAidetect400Error1Value);
        else if (TryGetApiV1DocxAidetect413Error1(
            out var apiV1DocxAidetect413Error1Value)) onApiV1DocxAidetect413Error1(apiV1DocxAidetect413Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingAidetectDocxError)} holds no value.");
    }

    private static Task<SaplingAidetectDocxError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1DocxAidetect400Error1>().As(AsApiV1DocxAidetect400Error1),
            401 or 403 or 429 or 500 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<ApiV1DocxAidetect413Error1>().As(AsApiV1DocxAidetect413Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingAidetectDocxError> Response { get; } = new(Create);
}
