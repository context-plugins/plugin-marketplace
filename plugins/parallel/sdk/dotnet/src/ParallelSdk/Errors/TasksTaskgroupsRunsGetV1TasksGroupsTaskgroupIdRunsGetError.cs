using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ParallelSdk.Core.ErrorResponse;
using ParallelSdk.Core.Models;
using ParallelSdk.Models;

namespace ParallelSdk.Errors;

public sealed class TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default, default);

    private static TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError AsHttpValidationError(HttpValidationError value) =>
        new(default, Optional<HttpValidationError>.Some(value), default);

    private static TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel,
        Action<HttpValidationError> onHttpValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError)} holds no value.");
    }

    private static Task<TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError> Response { get; } = new(
        Create);
}
