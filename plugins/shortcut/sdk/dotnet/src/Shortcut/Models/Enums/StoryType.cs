using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The type of story (feature, bug, chore).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StoryType>))]
public sealed record StoryType : OpenStringEnum<StoryType>
{
    private StoryType(string value) : base(value)
    {
    }

    public static readonly StoryType Feature = new("feature");

    public static readonly StoryType Chore = new("chore");

    public static readonly StoryType Bug = new("bug");

    public TResult Match<TResult>(Func<TResult> onFeature,
        Func<TResult> onChore,
        Func<TResult> onBug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Feature => onFeature(),
            _ when this == Chore => onChore(),
            _ when this == Bug => onBug(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeature, Action onChore, Action onBug, Action<string> otherwise)
    {
        if (this == Feature) onFeature();
        else if (this == Chore) onChore();
        else if (this == Bug) onBug();
        else otherwise(Value);
    }
}
