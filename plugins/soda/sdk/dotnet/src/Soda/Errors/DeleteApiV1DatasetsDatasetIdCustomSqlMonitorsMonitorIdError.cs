using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Soda.Core.ErrorResponse;
using Soda.Core.Models;
using Soda.Models;

namespace Soda.Errors;

public sealed class DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError AsFallback(RawError value) =>
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
                $"{nameof(DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError)} holds no value.");
    }

    private static Task<DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 429 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> Response { get; } = new(
        Create);
}
