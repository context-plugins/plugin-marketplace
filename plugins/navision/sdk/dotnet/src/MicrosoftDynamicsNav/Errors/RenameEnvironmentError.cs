using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class RenameEnvironmentError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> _errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue;

    private RenameEnvironmentError(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue =
            errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue;
    }

    private static RenameEnvironmentError AsErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi>.Some(value), default);

    private static RenameEnvironmentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value) =>
        _errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi, TResult> onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
                out var errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue) => onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
                errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RenameEnvironmentError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
            out var errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue)) onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
            errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RenameEnvironmentError)} holds no value.");
    }

    private static Task<RenameEnvironmentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RenameEnvironmentError> Response { get; } = new(Create);
}
