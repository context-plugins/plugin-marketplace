using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ParallelSdk.Core.ErrorResponse;
using ParallelSdk.Core.Models;
using ParallelSdk.Models;

namespace ParallelSdk.Errors;

public sealed class TasksTaskgroupsPostV1TasksGroupsPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private TasksTaskgroupsPostV1TasksGroupsPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static TasksTaskgroupsPostV1TasksGroupsPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default);

    private static TasksTaskgroupsPostV1TasksGroupsPostError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(TasksTaskgroupsPostV1TasksGroupsPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError, Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(TasksTaskgroupsPostV1TasksGroupsPostError)} holds no value.");
    }

    private static Task<TasksTaskgroupsPostV1TasksGroupsPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TasksTaskgroupsPostV1TasksGroupsPostError> Response { get; } = new(Create);
}
