using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using GoogleCloudTasks.Core.ErrorResponse;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Errors;

public sealed class CloudtasksProjectsLocationsQueuesTasksBatchDeleteError : ApiError
{
    private readonly Optional<GoogleRpcError> _googleRpcErrorValue;

    private CloudtasksProjectsLocationsQueuesTasksBatchDeleteError(Optional<GoogleRpcError> googleRpcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _googleRpcErrorValue = googleRpcErrorValue;
    }

    private static CloudtasksProjectsLocationsQueuesTasksBatchDeleteError AsGoogleRpcError(GoogleRpcError value) =>
        new(Optional<GoogleRpcError>.Some(value), default);

    private static CloudtasksProjectsLocationsQueuesTasksBatchDeleteError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value) =>
        _googleRpcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GoogleRpcError, TResult> onGoogleRpcError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleRpcError(out var googleRpcErrorValue) => onGoogleRpcError(googleRpcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(CloudtasksProjectsLocationsQueuesTasksBatchDeleteError)} holds no value.")
        };

    public void Match(Action<GoogleRpcError> onGoogleRpcError, Action<RawError> otherwise)
    {
        if (TryGetGoogleRpcError(out var googleRpcErrorValue)) onGoogleRpcError(googleRpcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(CloudtasksProjectsLocationsQueuesTasksBatchDeleteError)} holds no value.");
    }

    private static Task<CloudtasksProjectsLocationsQueuesTasksBatchDeleteError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<GoogleRpcError>().As(AsGoogleRpcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CloudtasksProjectsLocationsQueuesTasksBatchDeleteError> Response { get; } = new(
        Create);
}
