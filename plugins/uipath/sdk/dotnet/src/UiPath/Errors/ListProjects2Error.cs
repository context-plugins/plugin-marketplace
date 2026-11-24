using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using UiPath.Core.ErrorResponse;
using UiPath.Core.Models;
using UiPath.Models;

namespace UiPath.Errors;

public sealed class ListProjects2Error : ApiError
{
    private readonly Optional<ErrorResponseUiPathTestManagerProjectsApi> _errorResponseUiPathTestManagerProjectsApiValue;

    private ListProjects2Error(Optional<ErrorResponseUiPathTestManagerProjectsApi> errorResponseUiPathTestManagerProjectsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseUiPathTestManagerProjectsApiValue = errorResponseUiPathTestManagerProjectsApiValue;
    }

    private static ListProjects2Error AsErrorResponseUiPathTestManagerProjectsApi(ErrorResponseUiPathTestManagerProjectsApi value) =>
        new(Optional<ErrorResponseUiPathTestManagerProjectsApi>.Some(value), default);

    private static ListProjects2Error AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(ListProjects2Error)} holds no value.")
        };

    public void Match(Action<ErrorResponseUiPathTestManagerProjectsApi> onErrorResponseUiPathTestManagerProjectsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseUiPathTestManagerProjectsApi(
            out var errorResponseUiPathTestManagerProjectsApiValue)) onErrorResponseUiPathTestManagerProjectsApi(
            errorResponseUiPathTestManagerProjectsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListProjects2Error)} holds no value.");
    }

    private static Task<ListProjects2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.Json<ErrorResponseUiPathTestManagerProjectsApi>().As(
                AsErrorResponseUiPathTestManagerProjectsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListProjects2Error> Response { get; } = new(Create);
}
