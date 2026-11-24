using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetCheckoutSessionError : ApiError
{
    private readonly Optional<Error400> _error400Value;

    private readonly Optional<Error401KeyDoesntExist> _error401KeyDoesntExistValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<string> _stringValue;

    private GetCheckoutSessionError(Optional<Error400> error400Value,
        Optional<Error401KeyDoesntExist> error401KeyDoesntExistValue,
        Optional<Error403> error403Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400Value = error400Value;
        _error401KeyDoesntExistValue = error401KeyDoesntExistValue;
        _error403Value = error403Value;
        _stringValue = stringValue;
    }

    private static GetCheckoutSessionError AsError400(Error400 value) =>
        new(Optional<Error400>.Some(value), default, default, default, default);

    private static GetCheckoutSessionError AsError401KeyDoesntExist(Error401KeyDoesntExist value) =>
        new(default, Optional<Error401KeyDoesntExist>.Some(value), default, default, default);

    private static GetCheckoutSessionError AsError403(Error403 value) =>
        new(default, default, Optional<Error403>.Some(value), default, default);

    private static GetCheckoutSessionError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static GetCheckoutSessionError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400([NotNullWhen(true)] out Error400? value) => _error400Value.TryGetValue(out value);

    public bool TryGetError401KeyDoesntExist([NotNullWhen(true)] out Error401KeyDoesntExist? value) =>
        _error401KeyDoesntExistValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400, TResult> onError400,
        Func<Error401KeyDoesntExist, TResult> onError401KeyDoesntExist,
        Func<Error403, TResult> onError403,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400(out var error400Value) => onError400(error400Value),
            _ when TryGetError401KeyDoesntExist(out var error401KeyDoesntExistValue) => onError401KeyDoesntExist(
                error401KeyDoesntExistValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCheckoutSessionError)} holds no value.")
        };

    public void Match(Action<Error400> onError400,
        Action<Error401KeyDoesntExist> onError401KeyDoesntExist,
        Action<Error403> onError403,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400(out var error400Value)) onError400(error400Value);
        else if (TryGetError401KeyDoesntExist(out var error401KeyDoesntExistValue)) onError401KeyDoesntExist(
            error401KeyDoesntExistValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCheckoutSessionError)} holds no value.");
    }

    private static Task<GetCheckoutSessionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400>().As(AsError400),
            401 => response.Json<Error401KeyDoesntExist>().As(AsError401KeyDoesntExist),
            403 => response.Json<Error403>().As(AsError403),
            404 or 500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCheckoutSessionError> Response { get; } = new(Create);
}
