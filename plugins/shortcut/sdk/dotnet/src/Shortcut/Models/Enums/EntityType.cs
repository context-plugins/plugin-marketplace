using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityType>))]
public sealed record EntityType : OpenStringEnum<EntityType>
{
    private EntityType(string value) : base(value)
    {
    }

    public static readonly EntityType Story = new("story");

    public static readonly EntityType Milestone = new("milestone");

    public static readonly EntityType Epic = new("epic");

    public static readonly EntityType Iteration = new("iteration");

    public static readonly EntityType Objective = new("objective");

    public TResult Match<TResult>(Func<TResult> onStory,
        Func<TResult> onMilestone,
        Func<TResult> onEpic,
        Func<TResult> onIteration,
        Func<TResult> onObjective,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Story => onStory(),
            _ when this == Milestone => onMilestone(),
            _ when this == Epic => onEpic(),
            _ when this == Iteration => onIteration(),
            _ when this == Objective => onObjective(),
            _ => otherwise(Value)
        };

    public void Match(Action onStory,
        Action onMilestone,
        Action onEpic,
        Action onIteration,
        Action onObjective,
        Action<string> otherwise)
    {
        if (this == Story) onStory();
        else if (this == Milestone) onMilestone();
        else if (this == Epic) onEpic();
        else if (this == Iteration) onIteration();
        else if (this == Objective) onObjective();
        else otherwise(Value);
    }
}
