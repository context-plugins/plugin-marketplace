using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingToneError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<PayloadTooLarge1> _payloadTooLarge1Value;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private readonly Optional<RateLimited1> _rateLimited1Value;

    private SaplingToneError(Optional<Error> errorValue,
        Optional<PayloadTooLarge1> payloadTooLarge1Value,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RateLimited1> rateLimited1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _payloadTooLarge1Value = payloadTooLarge1Value;
        _paymentRequired1Value = paymentRequired1Value;
        _rateLimited1Value = rateLimited1Value;
    }

    private static SaplingToneError AsError(Error value) =>
        new(Optional<Error>.Some(value), default, default, default, default);

    private static SaplingToneError AsPayloadTooLarge1(PayloadTooLarge1 value) =>
        new(default, Optional<PayloadTooLarge1>.Some(value), default, default, default);

    private static SaplingToneError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, Optional<PaymentRequired1>.Some(value), default, default);

    private static SaplingToneError AsRateLimited1(RateLimited1 value) =>
        new(default, default, default, Optional<RateLimited1>.Some(value), default);

    private static SaplingToneError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value) =>
        _payloadTooLarge1Value.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public bool TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value) =>
        _rateLimited1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<PayloadTooLarge1, TResult> onPayloadTooLarge1,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RateLimited1, TResult> onRateLimited1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPayloadTooLarge1(out var payloadTooLarge1Value) => onPayloadTooLarge1(payloadTooLarge1Value),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRateLimited1(out var rateLimited1Value) => onRateLimited1(rateLimited1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingToneError)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<PayloadTooLarge1> onPayloadTooLarge1,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RateLimited1> onRateLimited1,
        Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPayloadTooLarge1(out var payloadTooLarge1Value)) onPayloadTooLarge1(payloadTooLarge1Value);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRateLimited1(out var rateLimited1Value)) onRateLimited1(rateLimited1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingToneError)} holds no value.");
    }

    private static Task<SaplingToneError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 500 or 503 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<PayloadTooLarge1>().As(AsPayloadTooLarge1),
            429 => response.Json<RateLimited1>().As(AsRateLimited1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingToneError> Response { get; } = new(Create);
}
