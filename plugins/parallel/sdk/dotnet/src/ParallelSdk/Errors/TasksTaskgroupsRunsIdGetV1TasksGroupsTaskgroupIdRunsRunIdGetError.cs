using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ParallelSdk.Core.ErrorResponse;
using ParallelSdk.Core.Models;
using ParallelSdk.Models;

namespace ParallelSdk.Errors;

public sealed class TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError AsFallback(RawError value) =>
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
                $"{nameof(TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError)} holds no value.");
    }

    private static Task<TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 or 422 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError> Response { get; } = new(
        Create);
}
