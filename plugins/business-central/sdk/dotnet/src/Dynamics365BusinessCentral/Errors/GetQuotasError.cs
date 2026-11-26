using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.ErrorResponse;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Errors;

public sealed class GetQuotasError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterStorageApi> _errorResponseBusinessCentralAdministrationCenterStorageApiValue;

    private GetQuotasError(Optional<ErrorResponseBusinessCentralAdministrationCenterStorageApi> errorResponseBusinessCentralAdministrationCenterStorageApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterStorageApiValue =
            errorResponseBusinessCentralAdministrationCenterStorageApiValue;
    }

    private static GetQuotasError AsErrorResponseBusinessCentralAdministrationCenterStorageApi(ErrorResponseBusinessCentralAdministrationCenterStorageApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterStorageApi>.Some(value), default);

    private static GetQuotasError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterStorageApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterStorageApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterStorageApi, TResult> onErrorResponseBusinessCentralAdministrationCenterStorageApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi(
                out var errorResponseBusinessCentralAdministrationCenterStorageApiValue) => onErrorResponseBusinessCentralAdministrationCenterStorageApi(
                errorResponseBusinessCentralAdministrationCenterStorageApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetQuotasError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterStorageApi> onErrorResponseBusinessCentralAdministrationCenterStorageApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi(
            out var errorResponseBusinessCentralAdministrationCenterStorageApiValue)) onErrorResponseBusinessCentralAdministrationCenterStorageApi(
            errorResponseBusinessCentralAdministrationCenterStorageApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetQuotasError)} holds no value.");
    }

    private static Task<GetQuotasError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterStorageApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterStorageApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetQuotasError> Response { get; } = new(Create);
}
