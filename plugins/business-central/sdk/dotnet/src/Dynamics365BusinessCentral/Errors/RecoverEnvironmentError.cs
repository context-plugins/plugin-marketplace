using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.ErrorResponse;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Errors;

public sealed class RecoverEnvironmentError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> _errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue;

    private RecoverEnvironmentError(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue =
            errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue;
    }

    private static RecoverEnvironmentError AsErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi>.Some(value), default);

    private static RecoverEnvironmentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(RecoverEnvironmentError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi> onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
            out var errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue)) onErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(
            errorResponseBusinessCentralAdministrationCenterEnvironmentsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RecoverEnvironmentError)} holds no value.");
    }

    private static Task<RecoverEnvironmentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi>().As(
                AsErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RecoverEnvironmentError> Response { get; } = new(Create);
}
