using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;
using Sapling.Models.AnyOf;

namespace Sapling.Errors;

public sealed class SaplingAcceptCompletionError : ApiError
{
    private readonly Optional<ApiV1CompleteAcceptResponse11> _apiV1CompleteAcceptResponse11Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<PayloadTooLarge1> _payloadTooLarge1Value;

    private readonly Optional<PaymentRequired1> _paymentRequired1Value;

    private SaplingAcceptCompletionError(Optional<ApiV1CompleteAcceptResponse11> apiV1CompleteAcceptResponse11Value,
        Optional<Error> errorValue,
        Optional<PayloadTooLarge1> payloadTooLarge1Value,
        Optional<PaymentRequired1> paymentRequired1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CompleteAcceptResponse11Value = apiV1CompleteAcceptResponse11Value;
        _errorValue = errorValue;
        _payloadTooLarge1Value = payloadTooLarge1Value;
        _paymentRequired1Value = paymentRequired1Value;
    }

    private static SaplingAcceptCompletionError AsApiV1CompleteAcceptResponse11(ApiV1CompleteAcceptResponse11 value) =>
        new(Optional<ApiV1CompleteAcceptResponse11>.Some(value), default, default, default, default);

    private static SaplingAcceptCompletionError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default, default, default);

    private static SaplingAcceptCompletionError AsPayloadTooLarge1(PayloadTooLarge1 value) =>
        new(default, default, Optional<PayloadTooLarge1>.Some(value), default, default);

    private static SaplingAcceptCompletionError AsPaymentRequired1(PaymentRequired1 value) =>
        new(default, default, default, Optional<PaymentRequired1>.Some(value), default);

    private static SaplingAcceptCompletionError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1CompleteAcceptResponse11([NotNullWhen(true)] out ApiV1CompleteAcceptResponse11? value) =>
        _apiV1CompleteAcceptResponse11Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value) =>
        _payloadTooLarge1Value.TryGetValue(out value);

    public bool TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value) =>
        _paymentRequired1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CompleteAcceptResponse11, TResult> onApiV1CompleteAcceptResponse11,
        Func<Error, TResult> onError,
        Func<PayloadTooLarge1, TResult> onPayloadTooLarge1,
        Func<PaymentRequired1, TResult> onPaymentRequired1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CompleteAcceptResponse11(
                out var apiV1CompleteAcceptResponse11Value) => onApiV1CompleteAcceptResponse11(
                apiV1CompleteAcceptResponse11Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetPayloadTooLarge1(out var payloadTooLarge1Value) => onPayloadTooLarge1(payloadTooLarge1Value),
            _ when TryGetPaymentRequired1(out var paymentRequired1Value) => onPaymentRequired1(paymentRequired1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingAcceptCompletionError)} holds no value.")
        };

    public void Match(Action<ApiV1CompleteAcceptResponse11> onApiV1CompleteAcceptResponse11,
        Action<Error> onError,
        Action<PayloadTooLarge1> onPayloadTooLarge1,
        Action<PaymentRequired1> onPaymentRequired1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CompleteAcceptResponse11(
            out var apiV1CompleteAcceptResponse11Value)) onApiV1CompleteAcceptResponse11(
            apiV1CompleteAcceptResponse11Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetPayloadTooLarge1(out var payloadTooLarge1Value)) onPayloadTooLarge1(payloadTooLarge1Value);
        else if (TryGetPaymentRequired1(out var paymentRequired1Value)) onPaymentRequired1(paymentRequired1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingAcceptCompletionError)} holds no value.");
    }

    private static Task<SaplingAcceptCompletionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1CompleteAcceptResponse11>().As(AsApiV1CompleteAcceptResponse11),
            401 or 403 or 500 => response.Json<Error>().As(AsError),
            402 => response.Json<PaymentRequired1>().As(AsPaymentRequired1),
            413 => response.Json<PayloadTooLarge1>().As(AsPayloadTooLarge1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingAcceptCompletionError> Response { get; } = new(Create);
}
