using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class DeleteCloudflowConnectionError : ApiError
{
    private readonly Optional<CloudflowV1Connections409Error1> _cloudflowV1Connections409Error1Value;

    private readonly Optional<Error> _errorValue;

    private DeleteCloudflowConnectionError(Optional<CloudflowV1Connections409Error1> cloudflowV1Connections409Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _cloudflowV1Connections409Error1Value = cloudflowV1Connections409Error1Value;
        _errorValue = errorValue;
    }

    private static DeleteCloudflowConnectionError AsCloudflowV1Connections409Error1(CloudflowV1Connections409Error1 value) =>
        new(Optional<CloudflowV1Connections409Error1>.Some(value), default, default);

    private static DeleteCloudflowConnectionError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default);

    private static DeleteCloudflowConnectionError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetCloudflowV1Connections409Error1([NotNullWhen(true)] out CloudflowV1Connections409Error1? value) =>
        _cloudflowV1Connections409Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<CloudflowV1Connections409Error1, TResult> onCloudflowV1Connections409Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCloudflowV1Connections409Error1(
                out var cloudflowV1Connections409Error1Value) => onCloudflowV1Connections409Error1(
                cloudflowV1Connections409Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteCloudflowConnectionError)} holds no value.")
        };

    public void Match(Action<CloudflowV1Connections409Error1> onCloudflowV1Connections409Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetCloudflowV1Connections409Error1(
            out var cloudflowV1Connections409Error1Value)) onCloudflowV1Connections409Error1(
            cloudflowV1Connections409Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteCloudflowConnectionError)} holds no value.");
    }

    private static Task<DeleteCloudflowConnectionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 500 => response.Json<Error>().As(AsError),
            409 => response.Json<CloudflowV1Connections409Error1>().As(AsCloudflowV1Connections409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteCloudflowConnectionError> Response { get; } = new(Create);
}
