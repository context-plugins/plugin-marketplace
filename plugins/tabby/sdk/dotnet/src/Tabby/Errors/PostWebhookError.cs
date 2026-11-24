using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PostWebhookError : ApiError
{
    private readonly Optional<Error401Authorization> _error401AuthorizationValue;

    private readonly Optional<Error401InvalidSecretKey> _error401InvalidSecretKeyValue;

    private readonly Optional<string> _stringValue;

    private PostWebhookError(Optional<Error401Authorization> error401AuthorizationValue,
        Optional<Error401InvalidSecretKey> error401InvalidSecretKeyValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error401AuthorizationValue = error401AuthorizationValue;
        _error401InvalidSecretKeyValue = error401InvalidSecretKeyValue;
        _stringValue = stringValue;
    }

    private static PostWebhookError AsError401Authorization(Error401Authorization value) =>
        new(Optional<Error401Authorization>.Some(value), default, default, default);

    private static PostWebhookError AsError401InvalidSecretKey(Error401InvalidSecretKey value) =>
        new(default, Optional<Error401InvalidSecretKey>.Some(value), default, default);

    private static PostWebhookError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static PostWebhookError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value) =>
        _error401AuthorizationValue.TryGetValue(out value);

    public bool TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value) =>
        _error401InvalidSecretKeyValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error401Authorization, TResult> onError401Authorization,
        Func<Error401InvalidSecretKey, TResult> onError401InvalidSecretKey,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError401Authorization(out var error401AuthorizationValue) => onError401Authorization(
                error401AuthorizationValue),
            _ when TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue) => onError401InvalidSecretKey(
                error401InvalidSecretKeyValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostWebhookError)} holds no value.")
        };

    public void Match(Action<Error401Authorization> onError401Authorization,
        Action<Error401InvalidSecretKey> onError401InvalidSecretKey,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError401Authorization(out var error401AuthorizationValue)) onError401Authorization(
            error401AuthorizationValue);
        else if (TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue)) onError401InvalidSecretKey(
            error401InvalidSecretKeyValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostWebhookError)} holds no value.");
    }

    private static Task<PostWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error401InvalidSecretKey>().As(AsError401InvalidSecretKey),
            401 => response.Json<Error401Authorization>().As(AsError401Authorization),
            404 or 500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostWebhookError> Response { get; } = new(Create);
}
