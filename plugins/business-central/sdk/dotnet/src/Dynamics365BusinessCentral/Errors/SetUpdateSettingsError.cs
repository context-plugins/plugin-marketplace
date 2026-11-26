using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.ErrorResponse;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Errors;

public sealed class SetUpdateSettingsError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi> _errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue;

    private SetUpdateSettingsError(Optional<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi> errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue =
            errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue;
    }

    private static SetUpdateSettingsError AsErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi>.Some(value), default);

    private static SetUpdateSettingsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi, TResult> onErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(
                out var errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue) => onErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(
                errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SetUpdateSettingsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi> onErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(
            out var errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue)) onErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(
            errorResponseBusinessCentralAdministrationCenterUpdateManagementApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SetUpdateSettingsError)} holds no value.");
    }

    private static Task<SetUpdateSettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SetUpdateSettingsError> Response { get; } = new(Create);
}
