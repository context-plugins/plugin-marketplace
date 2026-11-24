using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PostPaymentCaptureError : ApiError
{
    private readonly Optional<Error400PaymentsCapture> _error400PaymentsCaptureValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<Error404NoSuchPayment> _error404NoSuchPaymentValue;

    private readonly Optional<string> _stringValue;

    private PostPaymentCaptureError(Optional<Error400PaymentsCapture> error400PaymentsCaptureValue,
        Optional<Error403> error403Value,
        Optional<Error404NoSuchPayment> error404NoSuchPaymentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400PaymentsCaptureValue = error400PaymentsCaptureValue;
        _error403Value = error403Value;
        _error404NoSuchPaymentValue = error404NoSuchPaymentValue;
        _stringValue = stringValue;
    }

    private static PostPaymentCaptureError AsError400PaymentsCapture(Error400PaymentsCapture value) =>
        new(Optional<Error400PaymentsCapture>.Some(value), default, default, default, default);

    private static PostPaymentCaptureError AsError403(Error403 value) =>
        new(default, Optional<Error403>.Some(value), default, default, default);

    private static PostPaymentCaptureError AsError404NoSuchPayment(Error404NoSuchPayment value) =>
        new(default, default, Optional<Error404NoSuchPayment>.Some(value), default, default);

    private static PostPaymentCaptureError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static PostPaymentCaptureError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400PaymentsCapture([NotNullWhen(true)] out Error400PaymentsCapture? value) =>
        _error400PaymentsCaptureValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value) =>
        _error404NoSuchPaymentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400PaymentsCapture, TResult> onError400PaymentsCapture,
        Func<Error403, TResult> onError403,
        Func<Error404NoSuchPayment, TResult> onError404NoSuchPayment,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400PaymentsCapture(out var error400PaymentsCaptureValue) => onError400PaymentsCapture(
                error400PaymentsCaptureValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue) => onError404NoSuchPayment(
                error404NoSuchPaymentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostPaymentCaptureError)} holds no value.")
        };

    public void Match(Action<Error400PaymentsCapture> onError400PaymentsCapture,
        Action<Error403> onError403,
        Action<Error404NoSuchPayment> onError404NoSuchPayment,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400PaymentsCapture(out var error400PaymentsCaptureValue)) onError400PaymentsCapture(
            error400PaymentsCaptureValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue)) onError404NoSuchPayment(
            error404NoSuchPaymentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostPaymentCaptureError)} holds no value.");
    }

    private static Task<PostPaymentCaptureError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400PaymentsCapture>().As(AsError400PaymentsCapture),
            401 or 403 => response.Json<Error403>().As(AsError403),
            404 => response.Json<Error404NoSuchPayment>().As(AsError404NoSuchPayment),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostPaymentCaptureError> Response { get; } = new(Create);
}
