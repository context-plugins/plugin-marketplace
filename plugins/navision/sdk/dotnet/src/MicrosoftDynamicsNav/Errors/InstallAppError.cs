using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class InstallAppError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> _errorResponseBusinessCentralAdministrationCenterAppManagementApiValue;

    private InstallAppError(Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> errorResponseBusinessCentralAdministrationCenterAppManagementApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterAppManagementApiValue =
            errorResponseBusinessCentralAdministrationCenterAppManagementApiValue;
    }

    private static InstallAppError AsErrorResponseBusinessCentralAdministrationCenterAppManagementApi(ErrorResponseBusinessCentralAdministrationCenterAppManagementApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi>.Some(value), default);

    private static InstallAppError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(InstallAppError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi> onErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
            out var errorResponseBusinessCentralAdministrationCenterAppManagementApiValue)) onErrorResponseBusinessCentralAdministrationCenterAppManagementApi(
            errorResponseBusinessCentralAdministrationCenterAppManagementApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(InstallAppError)} holds no value.");
    }

    private static Task<InstallAppError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterAppManagementApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterAppManagementApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<InstallAppError> Response { get; } = new(Create);
}
