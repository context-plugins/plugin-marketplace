using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
/// The resource_subtype <c>milestone</c> represent a single moment in time. This means tasks with this subtype cannot have a start_date.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtype1AsanaProjectsApi>))]
public sealed record ResourceSubtype1AsanaProjectsApi : OpenStringEnum<ResourceSubtype1AsanaProjectsApi>
{
    private ResourceSubtype1AsanaProjectsApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtype1AsanaProjectsApi DefaultTask = new("default_task");

    public static readonly ResourceSubtype1AsanaProjectsApi Milestone = new("milestone");

    public static readonly ResourceSubtype1AsanaProjectsApi Section = new("section");

    public static readonly ResourceSubtype1AsanaProjectsApi Approval = new("approval");

    public TResult Match<TResult>(Func<TResult> onDefaultTask,
        Func<TResult> onMilestone,
        Func<TResult> onSection,
        Func<TResult> onApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DefaultTask => onDefaultTask(),
            _ when this == Milestone => onMilestone(),
            _ when this == Section => onSection(),
            _ when this == Approval => onApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefaultTask,
        Action onMilestone,
        Action onSection,
        Action onApproval,
        Action<string> otherwise)
    {
        if (this == DefaultTask) onDefaultTask();
        else if (this == Milestone) onMilestone();
        else if (this == Section) onSection();
        else if (this == Approval) onApproval();
        else otherwise(Value);
    }
}
