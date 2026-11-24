using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class GetSupportSettingsError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi> _errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue;

    private GetSupportSettingsError(Optional<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi> errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue =
            errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue;
    }

    private static GetSupportSettingsError AsErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi>.Some(value), default);

    private static GetSupportSettingsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi, TResult> onErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(
                out var errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue) => onErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(
                errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSupportSettingsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi> onErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(
            out var errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue)) onErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(
            errorResponseBusinessCentralAdministrationCenterSupportSettingsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSupportSettingsError)} holds no value.");
    }

    private static Task<GetSupportSettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSupportSettingsError> Response { get; } = new(Create);
}
