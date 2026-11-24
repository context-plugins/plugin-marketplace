using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// What a check judges: a completed evaluation trace, or a task's current version.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QaSubjectType>))]
public sealed record QaSubjectType : OpenStringEnum<QaSubjectType>
{
    private QaSubjectType(string value) : base(value)
    {
    }

    public static readonly QaSubjectType Trace = new("trace");

    public static readonly QaSubjectType Task = new("task");

    public TResult Match<TResult>(Func<TResult> onTrace, Func<TResult> onTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trace => onTrace(),
            _ when this == Task => onTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrace, Action onTask, Action<string> otherwise)
    {
        if (this == Trace) onTrace();
        else if (this == Task) onTask();
        else otherwise(Value);
    }
}
