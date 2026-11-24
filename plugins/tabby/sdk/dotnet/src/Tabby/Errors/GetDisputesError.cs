using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetDisputesError : ApiError
{
    private readonly Optional<Error401InvalidSecretKey> _error401InvalidSecretKeyValue;

    private readonly Optional<Error404DisputeNotFound> _error404DisputeNotFoundValue;

    private readonly Optional<string> _stringValue;

    private GetDisputesError(Optional<Error401InvalidSecretKey> error401InvalidSecretKeyValue,
        Optional<Error404DisputeNotFound> error404DisputeNotFoundValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error401InvalidSecretKeyValue = error401InvalidSecretKeyValue;
        _error404DisputeNotFoundValue = error404DisputeNotFoundValue;
        _stringValue = stringValue;
    }

    private static GetDisputesError AsError401InvalidSecretKey(Error401InvalidSecretKey value) =>
        new(Optional<Error401InvalidSecretKey>.Some(value), default, default, default);

    private static GetDisputesError AsError404DisputeNotFound(Error404DisputeNotFound value) =>
        new(default, Optional<Error404DisputeNotFound>.Some(value), default, default);

    private static GetDisputesError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetDisputesError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value) =>
        _error401InvalidSecretKeyValue.TryGetValue(out value);

    public bool TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value) =>
        _error404DisputeNotFoundValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error401InvalidSecretKey, TResult> onError401InvalidSecretKey,
        Func<Error404DisputeNotFound, TResult> onError404DisputeNotFound,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue) => onError401InvalidSecretKey(
                error401InvalidSecretKeyValue),
            _ when TryGetError404DisputeNotFound(out var error404DisputeNotFoundValue) => onError404DisputeNotFound(
                error404DisputeNotFoundValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetDisputesError)} holds no value.")
        };

    public void Match(Action<Error401InvalidSecretKey> onError401InvalidSecretKey,
        Action<Error404DisputeNotFound> onError404DisputeNotFound,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue)) onError401InvalidSecretKey(
            error401InvalidSecretKeyValue);
        else if (TryGetError404DisputeNotFound(out var error404DisputeNotFoundValue)) onError404DisputeNotFound(
            error404DisputeNotFoundValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetDisputesError)} holds no value.");
    }

    private static Task<GetDisputesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error404DisputeNotFound>().As(AsError404DisputeNotFound),
            401 => response.Json<Error401InvalidSecretKey>().As(AsError401InvalidSecretKey),
            404 or 500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetDisputesError> Response { get; } = new(Create);
}
