using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class CreateUserError : ApiError
{
    private readonly Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> _errorResponseUiPathAutomationHubAppInventoryApiValue;

    private CreateUserError(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi> errorResponseUiPathAutomationHubAppInventoryApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathAutomationHubAppInventoryApiValue = errorResponseUiPathAutomationHubAppInventoryApiValue;
    }

    private static CreateUserError AsErrorResponseUiPathAutomationHubAppInventoryApi(ErrorResponseUiPathAutomationHubAppInventoryApi value) =>
        new(Optional<ErrorResponseUiPathAutomationHubAppInventoryApi>.Some(value), default);

    private static CreateUserError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(CreateUserError)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathAutomationHubAppInventoryApi> onErrorResponseUiPathAutomationHubAppInventoryApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathAutomationHubAppInventoryApi(
            out var errorResponseUiPathAutomationHubAppInventoryApiValue)) onErrorResponseUiPathAutomationHubAppInventoryApi(
            errorResponseUiPathAutomationHubAppInventoryApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateUserError)} holds no value.");
    }

    private static Task<CreateUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<ErrorResponseUiPathAutomationHubAppInventoryApi>().As(
                AsErrorResponseUiPathAutomationHubAppInventoryApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateUserError> Response { get; } = new(Create);
}
