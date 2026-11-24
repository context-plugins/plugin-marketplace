using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class ListAutomationCollaboratorsError : ApiError
{
    private readonly Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> _errorResponseUiPathAutomationHubAppInventoryApiValue;

    private ListAutomationCollaboratorsError(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> errorResponseUiPathAutomationHubAppInventoryApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathAutomationHubAppInventoryApiValue = errorResponseUiPathAutomationHubAppInventoryApiValue;
    }

    private static ListAutomationCollaboratorsError AsErrorResponseUiPathAutomationHubAppInventoryApi(ErrorResponseUiPathAutomationHubAppInventoryApi value) =>
        new(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi>.Some(value), default);

    private static ListAutomationCollaboratorsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value) =>
        _errorResponseUiPathAutomationHubAppInventoryApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseUiPathAutomationHubAppInventoryApi, TResult> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
                out var errorResponseUiPathAutomationHubAppInventoryApiValue) => onErrorResponseUiPathAutomationHubAppInventoryApi(
                errorResponseUiPathAutomationHubAppInventoryApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListAutomationCollaboratorsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathAutomationHubAppInventoryApi> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
            out var errorResponseUiPathAutomationHubAppInventoryApiValue)) onErrorResponseUiPathAutomationHubAppInventoryApi(
            errorResponseUiPathAutomationHubAppInventoryApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListAutomationCollaboratorsError)} holds no value.");
    }

    private static Task<ListAutomationCollaboratorsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ErrorResponseUiPathAutomationHubAppInventoryApi>().As(
                AsErrorResponseUiPathAutomationHubAppInventoryApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListAutomationCollaboratorsError> Response { get; } = new(Create);
}
