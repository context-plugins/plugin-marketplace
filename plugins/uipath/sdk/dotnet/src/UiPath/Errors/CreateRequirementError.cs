using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class CreateRequirementError : ApiError
{
    private readonly Optional<ErrorResponseUiPathTestManagerProjectsApi> _errorResponseUiPathTestManagerProjectsApiValue;

    private CreateRequirementError(Optional<ErrorResponseUiPathTestManagerProjectsApi> errorResponseUiPathTestManagerProjectsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathTestManagerProjectsApiValue = errorResponseUiPathTestManagerProjectsApiValue;
    }

    private static CreateRequirementError AsErrorResponseUiPathTestManagerProjectsApi(ErrorResponseUiPathTestManagerProjectsApi value) =>
        new(Optional<ErrorResponseUiPathTestManagerProjectsApi>.Some(value), default);

    private static CreateRequirementError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value) =>
        _errorResponseUiPathTestManagerProjectsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseUiPathTestManagerProjectsApi, TResult> onErrorResponseUiPathTestManagerProjectsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseUiPathTestManagerProjectsApi(
                out var errorResponseUiPathTestManagerProjectsApiValue) => onErrorResponseUiPathTestManagerProjectsApi(
                errorResponseUiPathTestManagerProjectsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateRequirementError)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathTestManagerProjectsApi> onErrorResponseUiPathTestManagerProjectsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathTestManagerProjectsApi(
            out var errorResponseUiPathTestManagerProjectsApiValue)) onErrorResponseUiPathTestManagerProjectsApi(
            errorResponseUiPathTestManagerProjectsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateRequirementError)} holds no value.");
    }

    private static Task<CreateRequirementError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<ErrorResponseUiPathTestManagerProjectsApi>().As(
                AsErrorResponseUiPathTestManagerProjectsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateRequirementError> Response { get; } = new(Create);
}
