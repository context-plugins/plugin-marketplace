using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event WorkflowCompleted = new("workflow-completed");

    public static readonly Event JobCompleted = new("job-completed");

    public TResult Match<TResult>(Func<TResult> onWorkflowCompleted,
        Func<TResult> onJobCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WorkflowCompleted => onWorkflowCompleted(),
            _ when this == JobCompleted => onJobCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onWorkflowCompleted, Action onJobCompleted, Action<string> otherwise)
    {
        if (this == WorkflowCompleted) onWorkflowCompleted();
        else if (this == JobCompleted) onJobCompleted();
        else otherwise(Value);
    }
}
