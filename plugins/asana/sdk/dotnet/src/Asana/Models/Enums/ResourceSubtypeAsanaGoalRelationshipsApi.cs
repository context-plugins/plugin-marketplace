using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtypeAsanaGoalRelationshipsApi>))]
public sealed record ResourceSubtypeAsanaGoalRelationshipsApi : OpenStringEnum<ResourceSubtypeAsanaGoalRelationshipsApi>
{
    private ResourceSubtypeAsanaGoalRelationshipsApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtypeAsanaGoalRelationshipsApi Subgoal = new("subgoal");

    public static readonly ResourceSubtypeAsanaGoalRelationshipsApi SupportingWork = new("supporting_work");

    public TResult Match<TResult>(Func<TResult> onSubgoal,
        Func<TResult> onSupportingWork,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Subgoal => onSubgoal(),
            _ when this == SupportingWork => onSupportingWork(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubgoal, Action onSupportingWork, Action<string> otherwise)
    {
        if (this == Subgoal) onSubgoal();
        else if (this == SupportingWork) onSupportingWork();
        else otherwise(Value);
    }
}
