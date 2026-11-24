using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Canonical resources a QA agent can analyze.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QaAgentSubjectType>))]
public sealed record QaAgentSubjectType : OpenStringEnum<QaAgentSubjectType>
{
    private QaAgentSubjectType(string value) : base(value)
    {
    }

    public static readonly QaAgentSubjectType Trace = new("trace");

    public static readonly QaAgentSubjectType Environment = new("environment");

    public static readonly QaAgentSubjectType Taskset = new("taskset");

    public static readonly QaAgentSubjectType Task = new("task");

    public TResult Match<TResult>(Func<TResult> onTrace,
        Func<TResult> onEnvironment,
        Func<TResult> onTaskset,
        Func<TResult> onTask,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trace => onTrace(),
            _ when this == Environment => onEnvironment(),
            _ when this == Taskset => onTaskset(),
            _ when this == Task => onTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrace, Action onEnvironment, Action onTaskset, Action onTask, Action<string> otherwise)
    {
        if (this == Trace) onTrace();
        else if (this == Environment) onEnvironment();
        else if (this == Taskset) onTaskset();
        else if (this == Task) onTask();
        else otherwise(Value);
    }
}
