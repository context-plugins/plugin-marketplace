using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class GetUserError : ApiError
{
    private readonly Optional<ErrorResponse3> _errorResponse3Value;

    private readonly Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> _errorResponseUiPathAutomationHubAppInventoryApiValue;

    private GetUserError(Optional<ErrorResponse3> errorResponse3Value,
        Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> errorResponseUiPathAutomationHubAppInventoryApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponse3Value = errorResponse3Value;
        _errorResponseUiPathAutomationHubAppInventoryApiValue = errorResponseUiPathAutomationHubAppInventoryApiValue;
    }

    private static GetUserError AsErrorResponse3(ErrorResponse3 value) =>
        new(Optional<ErrorResponse3>.Some(value), default, default);

    private static GetUserError AsErrorResponseUiPathAutomationHubAppInventoryApi(ErrorResponseUiPathAutomationHubAppInventoryApi value) =>
        new(default, Optional<ErrorResponseUiPathAutomationHubAppInventoryApi>.Some(value), default);

    private static GetUserError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponse3([NotNullWhen(true)] out ErrorResponse3? value) =>
        _errorResponse3Value.TryGetValue(out value);

    public bool TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value) =>
        _errorResponseUiPathAutomationHubAppInventoryApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponse3, TResult> onErrorResponse3,
        Func<ErrorResponseUiPathAutomationHubAppInventoryApi, TResult> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponse3(out var errorResponse3Value) => onErrorResponse3(errorResponse3Value),
            _ when TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
                out var errorResponseUiPathAutomationHubAppInventoryApiValue) => onErrorResponseUiPathAutomationHubAppInventoryApi(
                errorResponseUiPathAutomationHubAppInventoryApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetUserError)} holds no value.")
        };

    public void Match(Action<ErrorResponse3> onErrorResponse3,
        Action<ErrorResponseUiPathAutomationHubAppInventoryApi> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponse3(out var errorResponse3Value)) onErrorResponse3(errorResponse3Value);
        else if (TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
            out var errorResponseUiPathAutomationHubAppInventoryApiValue)) onErrorResponseUiPathAutomationHubAppInventoryApi(
            errorResponseUiPathAutomationHubAppInventoryApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetUserError)} holds no value.");
    }

    private static Task<GetUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseUiPathAutomationHubAppInventoryApi>().As(
                AsErrorResponseUiPathAutomationHubAppInventoryApi),
            404 => response.Json<ErrorResponse3>().As(AsErrorResponse3),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetUserError> Response { get; } = new(Create);
}
