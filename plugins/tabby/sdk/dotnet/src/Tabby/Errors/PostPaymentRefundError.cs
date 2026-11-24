using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PostPaymentRefundError : ApiError
{
    private readonly Optional<Error400> _error400Value;

    private readonly Optional<Error400PaymentsRefund> _error400PaymentsRefundValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<Error404NoSuchPayment> _error404NoSuchPaymentValue;

    private readonly Optional<string> _stringValue;

    private PostPaymentRefundError(Optional<Error400> error400Value,
        Optional<Error400PaymentsRefund> error400PaymentsRefundValue,
        Optional<Error403> error403Value,
        Optional<Error404NoSuchPayment> error404NoSuchPaymentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400Value = error400Value;
        _error400PaymentsRefundValue = error400PaymentsRefundValue;
        _error403Value = error403Value;
        _error404NoSuchPaymentValue = error404NoSuchPaymentValue;
        _stringValue = stringValue;
    }

    private static PostPaymentRefundError AsError400(Error400 value) =>
        new(Optional<Error400>.Some(value), default, default, default, default, default);

    private static PostPaymentRefundError AsError400PaymentsRefund(Error400PaymentsRefund value) =>
        new(default, Optional<Error400PaymentsRefund>.Some(value), default, default, default, default);

    private static PostPaymentRefundError AsError403(Error403 value) =>
        new(default, default, Optional<Error403>.Some(value), default, default, default);

    private static PostPaymentRefundError AsError404NoSuchPayment(Error404NoSuchPayment value) =>
        new(default, default, default, Optional<Error404NoSuchPayment>.Some(value), default, default);

    private static PostPaymentRefundError AsString(string value) =>
        new(default, default, default, default, Optional<string>.Some(value), default);

    private static PostPaymentRefundError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400([NotNullWhen(true)] out Error400? value) => _error400Value.TryGetValue(out value);

    public bool TryGetError400PaymentsRefund([NotNullWhen(true)] out Error400PaymentsRefund? value) =>
        _error400PaymentsRefundValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value) =>
        _error404NoSuchPaymentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400, TResult> onError400,
        Func<Error400PaymentsRefund, TResult> onError400PaymentsRefund,
        Func<Error403, TResult> onError403,
        Func<Error404NoSuchPayment, TResult> onError404NoSuchPayment,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400(out var error400Value) => onError400(error400Value),
            _ when TryGetError400PaymentsRefund(out var error400PaymentsRefundValue) => onError400PaymentsRefund(
                error400PaymentsRefundValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue) => onError404NoSuchPayment(
                error404NoSuchPaymentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostPaymentRefundError)} holds no value.")
        };

    public void Match(Action<Error400> onError400,
        Action<Error400PaymentsRefund> onError400PaymentsRefund,
        Action<Error403> onError403,
        Action<Error404NoSuchPayment> onError404NoSuchPayment,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400(out var error400Value)) onError400(error400Value);
        else if (TryGetError400PaymentsRefund(out var error400PaymentsRefundValue)) onError400PaymentsRefund(
            error400PaymentsRefundValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue)) onError404NoSuchPayment(
            error404NoSuchPaymentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostPaymentRefundError)} holds no value.");
    }

    private static Task<PostPaymentRefundError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400PaymentsRefund>().As(AsError400PaymentsRefund),
            401 or 403 => response.Json<Error403>().As(AsError403),
            404 => response.Json<Error404NoSuchPayment>().As(AsError404NoSuchPayment),
            409 => response.Json<Error400>().As(AsError400),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostPaymentRefundError> Response { get; } = new(Create);
}
