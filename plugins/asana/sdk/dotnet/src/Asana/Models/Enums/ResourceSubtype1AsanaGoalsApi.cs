using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
/// The <c>resource_subtype</c>s for <c>status</c> objects represent the type of their parent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtype1AsanaGoalsApi>))]
public sealed record ResourceSubtype1AsanaGoalsApi : OpenStringEnum<ResourceSubtype1AsanaGoalsApi>
{
    private ResourceSubtype1AsanaGoalsApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtype1AsanaGoalsApi ProjectStatusUpdate = new("project_status_update");

    public static readonly ResourceSubtype1AsanaGoalsApi PortfolioStatusUpdate = new("portfolio_status_update");

    public static readonly ResourceSubtype1AsanaGoalsApi GoalStatusUpdate = new("goal_status_update");

    public TResult Match<TResult>(Func<TResult> onProjectStatusUpdate,
        Func<TResult> onPortfolioStatusUpdate,
        Func<TResult> onGoalStatusUpdate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ProjectStatusUpdate => onProjectStatusUpdate(),
            _ when this == PortfolioStatusUpdate => onPortfolioStatusUpdate(),
            _ when this == GoalStatusUpdate => onGoalStatusUpdate(),
            _ => otherwise(Value)
        };

    public void Match(Action onProjectStatusUpdate,
        Action onPortfolioStatusUpdate,
        Action onGoalStatusUpdate,
        Action<string> otherwise)
    {
        if (this == ProjectStatusUpdate) onProjectStatusUpdate();
        else if (this == PortfolioStatusUpdate) onPortfolioStatusUpdate();
        else if (this == GoalStatusUpdate) onGoalStatusUpdate();
        else otherwise(Value);
    }
}
