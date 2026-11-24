using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class BulkUpsertAppInventoryError : ApiError
{
    private readonly Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> _errorResponseUiPathAutomationHubAppInventoryApiValue;

    private BulkUpsertAppInventoryError(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> errorResponseUiPathAutomationHubAppInventoryApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathAutomationHubAppInventoryApiValue = errorResponseUiPathAutomationHubAppInventoryApiValue;
    }

    private static BulkUpsertAppInventoryError AsErrorResponseUiPathAutomationHubAppInventoryApi(ErrorResponseUiPathAutomationHubAppInventoryApi value) =>
        new(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi>.Some(value), default);

    private static BulkUpsertAppInventoryError AsFallback(RawError value) =>
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
            _ => throw new InvalidOperationException($"{nameof(BulkUpsertAppInventoryError)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathAutomationHubAppInventoryApi> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
            out var errorResponseUiPathAutomationHubAppInventoryApiValue)) onErrorResponseUiPathAutomationHubAppInventoryApi(
            errorResponseUiPathAutomationHubAppInventoryApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(BulkUpsertAppInventoryError)} holds no value.");
    }

    private static Task<BulkUpsertAppInventoryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<ErrorResponseUiPathAutomationHubAppInventoryApi>().As(
                AsErrorResponseUiPathAutomationHubAppInventoryApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<BulkUpsertAppInventoryError> Response { get; } = new(Create);
}
