using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class ListAllEnvironmentOperationsError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironment> _errorResponseBusinessCentralAdministrationCenterEnvironmentValue;

    private ListAllEnvironmentOperationsError(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironment> errorResponseBusinessCentralAdministrationCenterEnvironmentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterEnvironmentValue =
            errorResponseBusinessCentralAdministrationCenterEnvironmentValue;
    }

    private static ListAllEnvironmentOperationsError AsErrorResponseBusinessCentralAdministrationCenterEnvironment(ErrorResponseBusinessCentralAdministrationCenterEnvironment value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironment>.Some(value), default);

    private static ListAllEnvironmentOperationsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironment? value) =>
        _errorResponseBusinessCentralAdministrationCenterEnvironmentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterEnvironment, TResult> onErrorResponseBusinessCentralAdministrationCenterEnvironment,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment(
                out var errorResponseBusinessCentralAdministrationCenterEnvironmentValue) => onErrorResponseBusinessCentralAdministrationCenterEnvironment(
                errorResponseBusinessCentralAdministrationCenterEnvironmentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListAllEnvironmentOperationsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterEnvironment> onErrorResponseBusinessCentralAdministrationCenterEnvironment,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment(
            out var errorResponseBusinessCentralAdministrationCenterEnvironmentValue)) onErrorResponseBusinessCentralAdministrationCenterEnvironment(
            errorResponseBusinessCentralAdministrationCenterEnvironmentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListAllEnvironmentOperationsError)} holds no value.");
    }

    private static Task<ListAllEnvironmentOperationsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterEnvironment>().As(
                AsErrorResponseBusinessCentralAdministrationCenterEnvironment),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListAllEnvironmentOperationsError> Response { get; } = new(Create);
}
