using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetPaymentsError : ApiError
{
    private readonly Optional<Error400Failed> _error400FailedValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<string> _stringValue;

    private GetPaymentsError(Optional<Error400Failed> error400FailedValue,
        Optional<Error403> error403Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400FailedValue = error400FailedValue;
        _error403Value = error403Value;
        _stringValue = stringValue;
    }

    private static GetPaymentsError AsError400Failed(Error400Failed value) =>
        new(Optional<Error400Failed>.Some(value), default, default, default);

    private static GetPaymentsError AsError403(Error403 value) =>
        new(default, Optional<Error403>.Some(value), default, default);

    private static GetPaymentsError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetPaymentsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400Failed([NotNullWhen(true)] out Error400Failed? value) =>
        _error400FailedValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400Failed, TResult> onError400Failed,
        Func<Error403, TResult> onError403,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400Failed(out var error400FailedValue) => onError400Failed(error400FailedValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPaymentsError)} holds no value.")
        };

    public void Match(Action<Error400Failed> onError400Failed,
        Action<Error403> onError403,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400Failed(out var error400FailedValue)) onError400Failed(error400FailedValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPaymentsError)} holds no value.");
    }

    private static Task<GetPaymentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400Failed>().As(AsError400Failed),
            401 => response.Json<Error403>().As(AsError403),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPaymentsError> Response { get; } = new(Create);
}
