using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Soda.Core.ErrorResponse;
using Soda.Core.Models;
using Soda.Models;

namespace Soda.Errors;

public sealed class PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError)} holds no value.");
    }

    private static Task<PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 429 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> Response { get; } = new(
        Create);
}
