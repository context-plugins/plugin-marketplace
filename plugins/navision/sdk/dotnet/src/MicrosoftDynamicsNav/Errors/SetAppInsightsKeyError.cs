using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class SetAppInsightsKeyError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings> _errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue;

    private SetAppInsightsKeyError(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings> errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue =
            errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue;
    }

    private static SetAppInsightsKeyError AsErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings>.Some(value), default);

    private static SetAppInsightsKeyError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings? value) =>
        _errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings, TResult> onErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(
                out var errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue) => onErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(
                errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SetAppInsightsKeyError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings> onErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(
            out var errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue)) onErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(
            errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SetAppInsightsKeyError)} holds no value.");
    }

    private static Task<SetAppInsightsKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings>().As(
                AsErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SetAppInsightsKeyError> Response { get; } = new(Create);
}
