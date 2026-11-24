using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingDetectLanguageError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private readonly Optional<RateLimited1> _rateLimited1Value;

    private SaplingDetectLanguageError(Optional<Error> errorValue,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RateLimited1> rateLimited1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _paymentRequired1Value = paymentRequired1Value;
        _rateLimited1Value = rateLimited1Value;
    }

    private static SaplingDetectLanguageError AsError(Error value) =>
        new(Optional<Error>.Some(value), default, default, default);

    private static SaplingDetectLanguageError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, Optional<PaymentRequired1>.Some(value), default, default);

    private static SaplingDetectLanguageError AsRateLimited1(RateLimited1 value) =>
        new(default, default, Optional<RateLimited1>.Some(value), default);

    private static SaplingDetectLanguageError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public bool TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value) =>
        _rateLimited1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RateLimited1, TResult> onRateLimited1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRateLimited1(out var rateLimited1Value) => onRateLimited1(rateLimited1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingDetectLanguageError)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RateLimited1> onRateLimited1,
        Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRateLimited1(out var rateLimited1Value)) onRateLimited1(rateLimited1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingDetectLanguageError)} holds no value.");
    }

    private static Task<SaplingDetectLanguageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 500 or 503 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            429 => response.Json<RateLimited1>().As(AsRateLimited1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingDetectLanguageError> Response { get; } = new(Create);
}
