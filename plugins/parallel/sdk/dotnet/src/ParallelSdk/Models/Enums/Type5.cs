using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Event type; always starts with 'task_run.progress_msg'.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 TaskRunProgressMsgPlan = new("task_run.progress_msg.plan");

    public static readonly Type5 TaskRunProgressMsgSearch = new("task_run.progress_msg.search");

    public static readonly Type5 TaskRunProgressMsgResult = new("task_run.progress_msg.result");

    public static readonly Type5 TaskRunProgressMsgToolCall = new("task_run.progress_msg.tool_call");

    public static readonly Type5 TaskRunProgressMsgExecStatus = new("task_run.progress_msg.exec_status");

    public TResult Match<TResult>(Func<TResult> onTaskRunProgressMsgPlan,
        Func<TResult> onTaskRunProgressMsgSearch,
        Func<TResult> onTaskRunProgressMsgResult,
        Func<TResult> onTaskRunProgressMsgToolCall,
        Func<TResult> onTaskRunProgressMsgExecStatus,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TaskRunProgressMsgPlan => onTaskRunProgressMsgPlan(),
            _ when this == TaskRunProgressMsgSearch => onTaskRunProgressMsgSearch(),
            _ when this == TaskRunProgressMsgResult => onTaskRunProgressMsgResult(),
            _ when this == TaskRunProgressMsgToolCall => onTaskRunProgressMsgToolCall(),
            _ when this == TaskRunProgressMsgExecStatus => onTaskRunProgressMsgExecStatus(),
            _ => otherwise(Value)
        };

    public void Match(Action onTaskRunProgressMsgPlan,
        Action onTaskRunProgressMsgSearch,
        Action onTaskRunProgressMsgResult,
        Action onTaskRunProgressMsgToolCall,
        Action onTaskRunProgressMsgExecStatus,
        Action<string> otherwise)
    {
        if (this == TaskRunProgressMsgPlan) onTaskRunProgressMsgPlan();
        else if (this == TaskRunProgressMsgSearch) onTaskRunProgressMsgSearch();
        else if (this == TaskRunProgressMsgResult) onTaskRunProgressMsgResult();
        else if (this == TaskRunProgressMsgToolCall) onTaskRunProgressMsgToolCall();
        else if (this == TaskRunProgressMsgExecStatus) onTaskRunProgressMsgExecStatus();
        else otherwise(Value);
    }
}
