using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.ErrorResponse;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Errors;

public sealed class UpdateAppError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> _errorResponseBusinessCentralAdministrationCenterAppManagementApiValue;

    private UpdateAppError(Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> errorResponseBusinessCentralAdministrationCenterAppManagementApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterAppManagementApiValue =
            errorResponseBusinessCentralAdministrationCenterAppManagementApiValue;
    }

    private static UpdateAppError AsErrorResponseBusinessCentralAdministrationCenterAppManagementApi(ErrorResponseBusinessCentralAdministrationCenterAppManagementApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi>.Some(value), default);

    private static UpdateAppError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAppManagementApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterAppManagementApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi, TResult> onErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
                out var errorResponseBusinessCentralAdministrationCenterAppManagementApiValue) => onErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
                errorResponseBusinessCentralAdministrationCenterAppManagementApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateAppError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> onErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
            out var errorResponseBusinessCentralAdministrationCenterAppManagementApiValue)) onErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
            errorResponseBusinessCentralAdministrationCenterAppManagementApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateAppError)} holds no value.");
    }

    private static Task<UpdateAppError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterAppManagementApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateAppError> Response { get; } = new(Create);
}
