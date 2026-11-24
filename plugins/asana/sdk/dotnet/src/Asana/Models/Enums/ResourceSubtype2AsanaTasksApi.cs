using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceSubtype2AsanaTasksApi>))]
public sealed record ResourceSubtype2AsanaTasksApi : OpenStringEnum<ResourceSubtype2AsanaTasksApi>
{
    private ResourceSubtype2AsanaTasksApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtype2AsanaTasksApi DefaultTask = new("default_task");

    public static readonly ResourceSubtype2AsanaTasksApi Milestone = new("milestone");

    public TResult Match<TResult>(Func<TResult> onDefaultTask,
        Func<TResult> onMilestone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DefaultTask => onDefaultTask(),
            _ when this == Milestone => onMilestone(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefaultTask, Action onMilestone, Action<string> otherwise)
    {
        if (this == DefaultTask) onDefaultTask();
        else if (this == Milestone) onMilestone();
        else otherwise(Value);
    }
}
