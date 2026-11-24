using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using GoogleCloudDataproc.Core.ErrorResponse;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Errors;

public sealed class DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError : ApiError
{
    private readonly Optional<GoogleRpcError> _googleRpcErrorValue;

    private DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError(Optional<GoogleRpcError> googleRpcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _googleRpcErrorValue = googleRpcErrorValue;
    }

    private static DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError AsGoogleRpcError(GoogleRpcError value) =>
        new(Optional<GoogleRpcError>.Some(value), default);

    private static DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value) =>
        _googleRpcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GoogleRpcError, TResult> onGoogleRpcError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleRpcError(out var googleRpcErrorValue) => onGoogleRpcError(googleRpcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError)} holds no value.")
        };

    public void Match(Action<GoogleRpcError> onGoogleRpcError, Action<RawError> otherwise)
    {
        if (TryGetGoogleRpcError(out var googleRpcErrorValue)) onGoogleRpcError(googleRpcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError)} holds no value.");
    }

    private static Task<DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<GoogleRpcError>().As(AsGoogleRpcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError> Response { get; } = new(
        Create);
}
