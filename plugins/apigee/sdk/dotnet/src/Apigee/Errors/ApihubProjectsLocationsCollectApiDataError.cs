using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Apigee.Core.ErrorResponse;
using Apigee.Core.Models;
using Apigee.Models;

namespace Apigee.Errors;

public sealed class ApihubProjectsLocationsCollectApiDataError : ApiError
{
    private readonly Optional<GoogleRpcError> _googleRpcErrorValue;

    private ApihubProjectsLocationsCollectApiDataError(Optional<GoogleRpcError> googleRpcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _googleRpcErrorValue = googleRpcErrorValue;
    }

    private static ApihubProjectsLocationsCollectApiDataError AsGoogleRpcError(GoogleRpcError value) =>
        new(Optional<GoogleRpcError>.Some(value), default);

    private static ApihubProjectsLocationsCollectApiDataError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value) =>
        _googleRpcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GoogleRpcError, TResult> onGoogleRpcError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleRpcError(out var googleRpcErrorValue) => onGoogleRpcError(googleRpcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(ApihubProjectsLocationsCollectApiDataError)} holds no value.")
        };

    public void Match(Action<GoogleRpcError> onGoogleRpcError, Action<RawError> otherwise)
    {
        if (TryGetGoogleRpcError(out var googleRpcErrorValue)) onGoogleRpcError(googleRpcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(ApihubProjectsLocationsCollectApiDataError)} holds no value.");
    }

    private static Task<ApihubProjectsLocationsCollectApiDataError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<GoogleRpcError>().As(AsGoogleRpcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ApihubProjectsLocationsCollectApiDataError> Response { get; } = new(Create);
}
