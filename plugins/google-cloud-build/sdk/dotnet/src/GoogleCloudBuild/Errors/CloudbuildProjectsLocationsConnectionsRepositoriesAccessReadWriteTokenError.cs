using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using GoogleCloudBuild.Core.ErrorResponse;
using GoogleCloudBuild.Core.Models;
using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Errors;

public sealed class CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError : ApiError
{
    private readonly Optional<GoogleRpcError> _googleRpcErrorValue;

    private CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError(Optional<GoogleRpcError> googleRpcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _googleRpcErrorValue = googleRpcErrorValue;
    }

    private static CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError AsGoogleRpcError(GoogleRpcError value) =>
        new(Optional<GoogleRpcError>.Some(value), default);

    private static CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value) =>
        _googleRpcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GoogleRpcError, TResult> onGoogleRpcError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleRpcError(out var googleRpcErrorValue) => onGoogleRpcError(googleRpcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError)} holds no value.")
        };

    public void Match(Action<GoogleRpcError> onGoogleRpcError, Action<RawError> otherwise)
    {
        if (TryGetGoogleRpcError(out var googleRpcErrorValue)) onGoogleRpcError(googleRpcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError)} holds no value.");
    }

    private static Task<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<GoogleRpcError>().As(AsGoogleRpcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError> Response { get; } = new(
        Create);
}
