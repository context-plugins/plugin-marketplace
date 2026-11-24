using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Task = new("task");

    public static readonly Kind Monitor = new("monitor");

    public static readonly Kind Findall = new("findall");

    public TResult Match<TResult>(Func<TResult> onTask,
        Func<TResult> onMonitor,
        Func<TResult> onFindall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Task => onTask(),
            _ when this == Monitor => onMonitor(),
            _ when this == Findall => onFindall(),
            _ => otherwise(Value)
        };

    public void Match(Action onTask, Action onMonitor, Action onFindall, Action<string> otherwise)
    {
        if (this == Task) onTask();
        else if (this == Monitor) onMonitor();
        else if (this == Findall) onFindall();
        else otherwise(Value);
    }
}
