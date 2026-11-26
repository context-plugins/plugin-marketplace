using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core.ErrorResponse;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Errors;

public sealed class ListAvailableVersionsError : ApiError
{
    private readonly Optional<ErrorResponseBusinessCentralAdministrationCenterAvailable> _errorResponseBusinessCentralAdministrationCenterAvailableValue;

    private ListAvailableVersionsError(Optional<ErrorResponseBusinessCentralAdministrationCenterAvailable> errorResponseBusinessCentralAdministrationCenterAvailableValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBusinessCentralAdministrationCenterAvailableValue =
            errorResponseBusinessCentralAdministrationCenterAvailableValue;
    }

    private static ListAvailableVersionsError AsErrorResponseBusinessCentralAdministrationCenterAvailable(ErrorResponseBusinessCentralAdministrationCenterAvailable value) =>
        new(Optional<ErrorResponseBusinessCentralAdministrationCenterAvailable>.Some(value), default);

    private static ListAvailableVersionsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBusinessCentralAdministrationCenterAvailable([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAvailable? value) =>
        _errorResponseBusinessCentralAdministrationCenterAvailableValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBusinessCentralAdministrationCenterAvailable, TResult> onErrorResponseBusinessCentralAdministrationCenterAvailable,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBusinessCentralAdministrationCenterAvailable(
                out var errorResponseBusinessCentralAdministrationCenterAvailableValue) => onErrorResponseBusinessCentralAdministrationCenterAvailable(
                errorResponseBusinessCentralAdministrationCenterAvailableValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListAvailableVersionsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBusinessCentralAdministrationCenterAvailable> onErrorResponseBusinessCentralAdministrationCenterAvailable,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBusinessCentralAdministrationCenterAvailable(
            out var errorResponseBusinessCentralAdministrationCenterAvailableValue)) onErrorResponseBusinessCentralAdministrationCenterAvailable(
            errorResponseBusinessCentralAdministrationCenterAvailableValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListAvailableVersionsError)} holds no value.");
    }

    private static Task<ListAvailableVersionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseBusinessCentralAdministrationCenterAvailable>().As(
                AsErrorResponseBusinessCentralAdministrationCenterAvailable),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListAvailableVersionsError> Response { get; } = new(Create);
}
