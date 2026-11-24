using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class GetWebhookError : ApiError
{
    private readonly Optional<Error401InvalidSecretKey> _error401InvalidSecretKeyValue;

    private readonly Optional<Error404NoSuchWebhook> _error404NoSuchWebhookValue;

    private readonly Optional<string> _stringValue;

    private GetWebhookError(Optional<Error401InvalidSecretKey> error401InvalidSecretKeyValue,
        Optional<Error404NoSuchWebhook> error404NoSuchWebhookValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error401InvalidSecretKeyValue = error401InvalidSecretKeyValue;
        _error404NoSuchWebhookValue = error404NoSuchWebhookValue;
        _stringValue = stringValue;
    }

    private static GetWebhookError AsError401InvalidSecretKey(Error401InvalidSecretKey value) =>
        new(Optional<Error401InvalidSecretKey>.Some(value), default, default, default);

    private static GetWebhookError AsError404NoSuchWebhook(Error404NoSuchWebhook value) =>
        new(default, Optional<Error404NoSuchWebhook>.Some(value), default, default);

    private static GetWebhookError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetWebhookError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value) =>
        _error401InvalidSecretKeyValue.TryGetValue(out value);

    public bool TryGetError404NoSuchWebhook([NotNullWhen(true)] out Error404NoSuchWebhook? value) =>
        _error404NoSuchWebhookValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error401InvalidSecretKey, TResult> onError401InvalidSecretKey,
        Func<Error404NoSuchWebhook, TResult> onError404NoSuchWebhook,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue) => onError401InvalidSecretKey(
                error401InvalidSecretKeyValue),
            _ when TryGetError404NoSuchWebhook(out var error404NoSuchWebhookValue) => onError404NoSuchWebhook(
                error404NoSuchWebhookValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetWebhookError)} holds no value.")
        };

    public void Match(Action<Error401InvalidSecretKey> onError401InvalidSecretKey,
        Action<Error404NoSuchWebhook> onError404NoSuchWebhook,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue)) onError401InvalidSecretKey(
            error401InvalidSecretKeyValue);
        else if (TryGetError404NoSuchWebhook(out var error404NoSuchWebhookValue)) onError404NoSuchWebhook(
            error404NoSuchWebhookValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetWebhookError)} holds no value.");
    }

    private static Task<GetWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error401InvalidSecretKey>().As(AsError401InvalidSecretKey),
            404 => response.Json<Error404NoSuchWebhook>().As(AsError404NoSuchWebhook),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetWebhookError> Response { get; } = new(Create);
}
