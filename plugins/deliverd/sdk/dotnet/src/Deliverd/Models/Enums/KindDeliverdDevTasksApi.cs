using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevTasksApi>))]
public sealed record KindDeliverdDevTasksApi : OpenStringEnum<KindDeliverdDevTasksApi>
{
    private KindDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevTasksApi Objective = new("objective");

    public static readonly KindDeliverdDevTasksApi SideTask = new("side_task");

    public static readonly KindDeliverdDevTasksApi Investigation = new("investigation");

    public static readonly KindDeliverdDevTasksApi Research = new("research");

    public static readonly KindDeliverdDevTasksApi Debug = new("debug");

    public static readonly KindDeliverdDevTasksApi Decision = new("decision");

    public TResult Match<TResult>(Func<TResult> onObjective,
        Func<TResult> onSideTask,
        Func<TResult> onInvestigation,
        Func<TResult> onResearch,
        Func<TResult> onDebug,
        Func<TResult> onDecision,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Objective => onObjective(),
            _ when this == SideTask => onSideTask(),
            _ when this == Investigation => onInvestigation(),
            _ when this == Research => onResearch(),
            _ when this == Debug => onDebug(),
            _ when this == Decision => onDecision(),
            _ => otherwise(Value)
        };

    public void Match(Action onObjective,
        Action onSideTask,
        Action onInvestigation,
        Action onResearch,
        Action onDebug,
        Action onDecision,
        Action<string> otherwise)
    {
        if (this == Objective) onObjective();
        else if (this == SideTask) onSideTask();
        else if (this == Investigation) onInvestigation();
        else if (this == Research) onResearch();
        else if (this == Debug) onDebug();
        else if (this == Decision) onDecision();
        else otherwise(Value);
    }
}
