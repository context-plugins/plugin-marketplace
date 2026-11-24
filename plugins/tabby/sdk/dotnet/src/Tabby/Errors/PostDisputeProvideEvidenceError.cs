using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PostDisputeProvideEvidenceError : ApiError
{
    private readonly Optional<Error400> _error400Value;

    private readonly Optional<Error401InvalidSecretKey> _error401InvalidSecretKeyValue;

    private readonly Optional<Error404DisputeNotFound> _error404DisputeNotFoundValue;

    private readonly Optional<string> _stringValue;

    private PostDisputeProvideEvidenceError(Optional<Error400> error400Value,
        Optional<Error401InvalidSecretKey> error401InvalidSecretKeyValue,
        Optional<Error404DisputeNotFound> error404DisputeNotFoundValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400Value = error400Value;
        _error401InvalidSecretKeyValue = error401InvalidSecretKeyValue;
        _error404DisputeNotFoundValue = error404DisputeNotFoundValue;
        _stringValue = stringValue;
    }

    private static PostDisputeProvideEvidenceError AsError400(Error400 value) =>
        new(Optional<Error400>.Some(value), default, default, default, default);

    private static PostDisputeProvideEvidenceError AsError401InvalidSecretKey(Error401InvalidSecretKey value) =>
        new(default, Optional<Error401InvalidSecretKey>.Some(value), default, default, default);

    private static PostDisputeProvideEvidenceError AsError404DisputeNotFound(Error404DisputeNotFound value) =>
        new(default, default, Optional<Error404DisputeNotFound>.Some(value), default, default);

    private static PostDisputeProvideEvidenceError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static PostDisputeProvideEvidenceError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400([NotNullWhen(true)] out Error400? value) => _error400Value.TryGetValue(out value);

    public bool TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value) =>
        _error401InvalidSecretKeyValue.TryGetValue(out value);

    public bool TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value) =>
        _error404DisputeNotFoundValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400, TResult> onError400,
        Func<Error401InvalidSecretKey, TResult> onError401InvalidSecretKey,
        Func<Error404DisputeNotFound, TResult> onError404DisputeNotFound,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400(out var error400Value) => onError400(error400Value),
            _ when TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue) => onError401InvalidSecretKey(
                error401InvalidSecretKeyValue),
            _ when TryGetError404DisputeNotFound(out var error404DisputeNotFoundValue) => onError404DisputeNotFound(
                error404DisputeNotFoundValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostDisputeProvideEvidenceError)} holds no value.")
        };

    public void Match(Action<Error400> onError400,
        Action<Error401InvalidSecretKey> onError401InvalidSecretKey,
        Action<Error404DisputeNotFound> onError404DisputeNotFound,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400(out var error400Value)) onError400(error400Value);
        else if (TryGetError401InvalidSecretKey(out var error401InvalidSecretKeyValue)) onError401InvalidSecretKey(
            error401InvalidSecretKeyValue);
        else if (TryGetError404DisputeNotFound(out var error404DisputeNotFoundValue)) onError404DisputeNotFound(
            error404DisputeNotFoundValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostDisputeProvideEvidenceError)} holds no value.");
    }

    private static Task<PostDisputeProvideEvidenceError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 => response.Json<Error404DisputeNotFound>().As(AsError404DisputeNotFound),
            401 => response.Json<Error401InvalidSecretKey>().As(AsError401InvalidSecretKey),
            409 => response.Json<Error400>().As(AsError400),
            500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostDisputeProvideEvidenceError> Response { get; } = new(Create);
}
