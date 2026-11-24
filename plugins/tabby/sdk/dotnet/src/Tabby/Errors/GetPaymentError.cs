using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetPaymentError : ApiError
{
    private readonly Optional<Error400PaymentsGet> _error400PaymentsGetValue;

    private readonly Optional<Error401MissingBearer> _error401MissingBearerValue;

    private readonly Optional<Error404NoSuchPayment> _error404NoSuchPaymentValue;

    private readonly Optional<string> _stringValue;

    private GetPaymentError(Optional<Error400PaymentsGet> error400PaymentsGetValue,
        Optional<Error401MissingBearer> error401MissingBearerValue,
        Optional<Error404NoSuchPayment> error404NoSuchPaymentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400PaymentsGetValue = error400PaymentsGetValue;
        _error401MissingBearerValue = error401MissingBearerValue;
        _error404NoSuchPaymentValue = error404NoSuchPaymentValue;
        _stringValue = stringValue;
    }

    private static GetPaymentError AsError400PaymentsGet(Error400PaymentsGet value) =>
        new(Optional<Error400PaymentsGet>.Some(value), default, default, default, default);

    private static GetPaymentError AsError401MissingBearer(Error401MissingBearer value) =>
        new(default, Optional<Error401MissingBearer>.Some(value), default, default, default);

    private static GetPaymentError AsError404NoSuchPayment(Error404NoSuchPayment value) =>
        new(default, default, Optional<Error404NoSuchPayment>.Some(value), default, default);

    private static GetPaymentError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static GetPaymentError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400PaymentsGet([NotNullWhen(true)] out Error400PaymentsGet? value) =>
        _error400PaymentsGetValue.TryGetValue(out value);

    public bool TryGetError401MissingBearer([NotNullWhen(true)] out Error401MissingBearer? value) =>
        _error401MissingBearerValue.TryGetValue(out value);

    public bool TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value) =>
        _error404NoSuchPaymentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400PaymentsGet, TResult> onError400PaymentsGet,
        Func<Error401MissingBearer, TResult> onError401MissingBearer,
        Func<Error404NoSuchPayment, TResult> onError404NoSuchPayment,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400PaymentsGet(out var error400PaymentsGetValue) => onError400PaymentsGet(
                error400PaymentsGetValue),
            _ when TryGetError401MissingBearer(out var error401MissingBearerValue) => onError401MissingBearer(
                error401MissingBearerValue),
            _ when TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue) => onError404NoSuchPayment(
                error404NoSuchPaymentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPaymentError)} holds no value.")
        };

    public void Match(Action<Error400PaymentsGet> onError400PaymentsGet,
        Action<Error401MissingBearer> onError401MissingBearer,
        Action<Error404NoSuchPayment> onError404NoSuchPayment,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400PaymentsGet(out var error400PaymentsGetValue)) onError400PaymentsGet(
            error400PaymentsGetValue);
        else if (TryGetError401MissingBearer(out var error401MissingBearerValue)) onError401MissingBearer(
            error401MissingBearerValue);
        else if (TryGetError404NoSuchPayment(out var error404NoSuchPaymentValue)) onError404NoSuchPayment(
            error404NoSuchPaymentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPaymentError)} holds no value.");
    }

    private static Task<GetPaymentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400PaymentsGet>().As(AsError400PaymentsGet),
            401 => response.Json<Error401MissingBearer>().As(AsError401MissingBearer),
            404 => response.Json<Error404NoSuchPayment>().As(AsError404NoSuchPayment),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPaymentError> Response { get; } = new(Create);
}
