using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;
using Sapling.Models.AnyOf;

namespace Sapling.Errors;

public sealed class SaplingGrammarCheckError : ApiError
{
    private readonly Optional<ApiV1EditsResponse11> _apiV1EditsResponse11Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<PayloadTooLarge1> _payloadTooLarge1Value;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private readonly Optional<RateLimited1> _rateLimited1Value;

    private SaplingGrammarCheckError(Optional<ApiV1EditsResponse11> apiV1EditsResponse11Value,
        Optional<Error> errorValue,
        Optional<PayloadTooLarge1> payloadTooLarge1Value,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RateLimited1> rateLimited1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1EditsResponse11Value = apiV1EditsResponse11Value;
        _errorValue = errorValue;
        _payloadTooLarge1Value = payloadTooLarge1Value;
        _paymentRequired1Value = paymentRequired1Value;
        _rateLimited1Value = rateLimited1Value;
    }

    private static SaplingGrammarCheckError AsApiV1EditsResponse11(ApiV1EditsResponse11 value) =>
        new(Optional<ApiV1EditsResponse11>.Some(value), default, default, default, default, default);

    private static SaplingGrammarCheckError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default, default, default, default);

    private static SaplingGrammarCheckError AsPayloadTooLarge1(PayloadTooLarge1 value) =>
        new(default, default, Optional<PayloadTooLarge1>.Some(value), default, default, default);

    private static SaplingGrammarCheckError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, default, Optional<PaymentRequired1>.Some(value), default, default);

    private static SaplingGrammarCheckError AsRateLimited1(RateLimited1 value) =>
        new(default, default, default, default, Optional<RateLimited1>.Some(value), default);

    private static SaplingGrammarCheckError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1EditsResponse11([NotNullWhen(true)] out ApiV1EditsResponse11? value) =>
        _apiV1EditsResponse11Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value) =>
        _payloadTooLarge1Value.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public bool TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value) =>
        _rateLimited1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1EditsResponse11, TResult> onApiV1EditsResponse11,
        Func<Error, TResult> onError,
        Func<PayloadTooLarge1, TResult> onPayloadTooLarge1,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RateLimited1, TResult> onRateLimited1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1EditsResponse11(out var apiV1EditsResponse11Value) => onApiV1EditsResponse11(
                apiV1EditsResponse11Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPayloadTooLarge1(out var payloadTooLarge1Value) => onPayloadTooLarge1(payloadTooLarge1Value),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRateLimited1(out var rateLimited1Value) => onRateLimited1(rateLimited1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingGrammarCheckError)} holds no value.")
        };

    public void Match(Action<ApiV1EditsResponse11> onApiV1EditsResponse11,
        Action<Error> onError,
        Action<PayloadTooLarge1> onPayloadTooLarge1,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RateLimited1> onRateLimited1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1EditsResponse11(out var apiV1EditsResponse11Value)) onApiV1EditsResponse11(
            apiV1EditsResponse11Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPayloadTooLarge1(out var payloadTooLarge1Value)) onPayloadTooLarge1(payloadTooLarge1Value);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRateLimited1(out var rateLimited1Value)) onRateLimited1(rateLimited1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingGrammarCheckError)} holds no value.");
    }

    private static Task<SaplingGrammarCheckError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1EditsResponse11>().As(AsApiV1EditsResponse11),
            401 or 403 or 500 or 503 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<PayloadTooLarge1>().As(AsPayloadTooLarge1),
            429 => response.Json<RateLimited1>().As(AsRateLimited1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingGrammarCheckError> Response { get; } = new(Create);
}
