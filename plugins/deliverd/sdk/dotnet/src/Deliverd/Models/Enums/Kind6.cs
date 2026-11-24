using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// side_task, investigation, research, debug or decision; side_task when omitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind6>))]
public sealed record Kind6 : OpenStringEnum<Kind6>
{
    private Kind6(string value) : base(value)
    {
    }

    public static readonly Kind6 SideTask = new("side_task");

    public static readonly Kind6 Investigation = new("investigation");

    public static readonly Kind6 Research = new("research");

    public static readonly Kind6 Debug = new("debug");

    public static readonly Kind6 Decision = new("decision");

    public TResult Match<TResult>(Func<TResult> onSideTask,
        Func<TResult> onInvestigation,
        Func<TResult> onResearch,
        Func<TResult> onDebug,
        Func<TResult> onDecision,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SideTask => onSideTask(),
            _ when this == Investigation => onInvestigation(),
            _ when this == Research => onResearch(),
            _ when this == Debug => onDebug(),
            _ when this == Decision => onDecision(),
            _ => otherwise(Value)
        };

    public void Match(Action onSideTask,
        Action onInvestigation,
        Action onResearch,
        Action onDebug,
        Action onDecision,
        Action<string> otherwise)
    {
        if (this == SideTask) onSideTask();
        else if (this == Investigation) onInvestigation();
        else if (this == Research) onResearch();
        else if (this == Debug) onDebug();
        else if (this == Decision) onDecision();
        else otherwise(Value);
    }
}
