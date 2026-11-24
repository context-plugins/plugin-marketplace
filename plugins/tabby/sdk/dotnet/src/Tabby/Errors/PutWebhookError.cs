using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PutWebhookError : ApiError
{
    private readonly Optional<Error401Authorization> _error401AuthorizationValue;

    private readonly Optional<Error401InvalidSecretKey> _error401InvalidSecretKeyValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<Error404NoSuchWebhook> _error404NoSuchWebhookValue;

    private readonly Optional<string> _stringValue;

    private PutWebhookError(Optional<Error401Authorization> error401AuthorizationValue,
        Optional<Error401InvalidSecretKey> error401InvalidSecretKeyValue,
        Optional<Error403> error403Value,
        Optional<Error404NoSuchWebhook> error404NoSuchWebhookValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error401AuthorizationValue = error401AuthorizationValue;
        _error401InvalidSecretKeyValue = error401InvalidSecretKeyValue;
        _error403Value = error403Value;
        _error404NoSuchWebhookValue = error404NoSuchWebhookValue;
        _stringValue = stringValue;
    }

    private static PutWebhookError AsError401Authorization(Error401Authorization value) =>
        new(Optional<Error401Authorization>.Some(value), default, default, default, default, default);

    private static PutWebhookError AsError401InvalidSecretKey(Error401InvalidSecretKey value) =>
        new(default, Optional<Error401InvalidSecretKey>.Some(value), default, default, default, default);

    private static PutWebhookError AsError403(Error403 value) =>
        new(default, default, Optional<Error403>.Some(value), default, default, default);

    private static PutWebhookError AsError404NoSuchWebhook(Error404NoSuchWebhook value) =>
        new(default, default, default, Optional<Error404NoSuchWebhook>.Some(value), default, default);

    private static PutWebhookError AsString(string value) =>
        new(default, default, default, default, Optional<string>.Some(value), default);

    private static PutWebhookError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value) =>
        _error401AuthorizationValue.TryGetValue(out value);

    public bool TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value) =>
        _error401InvalidSecretKeyValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetError404NoSuchWebhook([NotNullWhen(true)] out Error404NoSuchWebhook? value) =>
        _error404NoSuchWebhookValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error401Authorization, TResult> onError401Authorization,
        Func<Error401InvalidSecretKey, TResult> onError401InvalidSecretKey,
        Func<Error403, TResult> onError403,
        Func<Error404NoSuchWebhook, TResult> onError404NoSuchWebhook,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError401Authorization(out var error401AuthorizationValue) => onError401Authorization(
                error401AuthorizationValue),
            _ when TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue) => onError401InvalidSecretKey(
                error401InvalidSecretKeyValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetError404NoSuchWebhook(out var error404NoSuchWebhookValue) => onError404NoSuchWebhook(
                error404NoSuchWebhookValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PutWebhookError)} holds no value.")
        };

    public void Match(Action<Error401Authorization> onError401Authorization,
        Action<Error401InvalidSecretKey> onError401InvalidSecretKey,
        Action<Error403> onError403,
        Action<Error404NoSuchWebhook> onError404NoSuchWebhook,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError401Authorization(out var error401AuthorizationValue)) onError401Authorization(
            error401AuthorizationValue);
        else if (TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue)) onError401InvalidSecretKey(
            error401InvalidSecretKeyValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetError404NoSuchWebhook(out var error404NoSuchWebhookValue)) onError404NoSuchWebhook(
            error404NoSuchWebhookValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutWebhookError)} holds no value.");
    }

    private static Task<PutWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error401InvalidSecretKey>().As(AsError401InvalidSecretKey),
            401 => response.Json<Error401Authorization>().As(AsError401Authorization),
            403 => response.Json<Error403>().As(AsError403),
            404 => response.Json<Error404NoSuchWebhook>().As(AsError404NoSuchWebhook),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutWebhookError> Response { get; } = new(Create);
}
