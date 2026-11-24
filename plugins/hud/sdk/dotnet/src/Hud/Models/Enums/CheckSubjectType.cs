using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Platform resources supported by the check framework.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckSubjectType>))]
public sealed record CheckSubjectType : OpenStringEnum<CheckSubjectType>
{
    private CheckSubjectType(string value) : base(value)
    {
    }

    public static readonly CheckSubjectType Environment = new("environment");

    public static readonly CheckSubjectType Taskset = new("taskset");

    public static readonly CheckSubjectType Task = new("task");

    public static readonly CheckSubjectType Trace = new("trace");

    public TResult Match<TResult>(Func<TResult> onEnvironment,
        Func<TResult> onTaskset,
        Func<TResult> onTask,
        Func<TResult> onTrace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Environment => onEnvironment(),
            _ when this == Taskset => onTaskset(),
            _ when this == Task => onTask(),
            _ when this == Trace => onTrace(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnvironment, Action onTaskset, Action onTask, Action onTrace, Action<string> otherwise)
    {
        if (this == Environment) onEnvironment();
        else if (this == Taskset) onTaskset();
        else if (this == Task) onTask();
        else if (this == Trace) onTrace();
        else otherwise(Value);
    }
}
