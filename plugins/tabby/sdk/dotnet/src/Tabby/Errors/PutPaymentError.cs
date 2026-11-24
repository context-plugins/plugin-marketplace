using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PutPaymentError : ApiError
{
    private readonly Optional<Error400PaymentsGet> _error400PaymentsGetValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<Error404NoSuchPayment> _error404NoSuchPaymentValue;

    private readonly Optional<string> _stringValue;

    private PutPaymentError(Optional<Error400PaymentsGet> error400PaymentsGetValue,
        Optional<Error403> error403Value,
        Optional<Error404NoSuchPayment> error404NoSuchPaymentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400PaymentsGetValue = error400PaymentsGetValue;
        _error403Value = error403Value;
        _error404NoSuchPaymentValue = error404NoSuchPaymentValue;
        _stringValue = stringValue;
    }

    private static PutPaymentError AsError400PaymentsGet(Error400PaymentsGet value) =>
        new(Optional<Error400PaymentsGet>.Some(value), default, default, default, default);

    private static PutPaymentError AsError403(Error403 value) =>
        new(default, Optional<Error403>.Some(value), default, default, default);

    private static PutPaymentError AsError404NoSuchPayment(Error404NoSuchPayment value) =>
        new(default, default, Optional<Error404NoSuchPayment>.Some(value), default, default);

    private static PutPaymentError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static PutPaymentError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400PaymentsGet([NotNullWhen(true)] out Error400PaymentsGet? value) =>
        _error400PaymentsGetValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value) =>
        _error404NoSuchPaymentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400PaymentsGet, TResult> onError400PaymentsGet,
        Func<Error403, TResult> onError403,
        Func<Error404NoSuchPayment, TResult> onError404NoSuchPayment,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400PaymentsGet(out var error400PaymentsGetValue) => onError400PaymentsGet(
                error400PaymentsGetValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue) => onError404NoSuchPayment(
                error404NoSuchPaymentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PutPaymentError)} holds no value.")
        };

    public void Match(Action<Error400PaymentsGet> onError400PaymentsGet,
        Action<Error403> onError403,
        Action<Error404NoSuchPayment> onError404NoSuchPayment,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400PaymentsGet(out var error400PaymentsGetValue)) onError400PaymentsGet(
            error400PaymentsGetValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue)) onError404NoSuchPayment(
            error404NoSuchPaymentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutPaymentError)} holds no value.");
    }

    private static Task<PutPaymentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400PaymentsGet>().As(AsError400PaymentsGet),
            401 or 403 => response.Json<Error403>().As(AsError403),
            404 => response.Json<Error404NoSuchPayment>().As(AsError404NoSuchPayment),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutPaymentError> Response { get; } = new(Create);
}
