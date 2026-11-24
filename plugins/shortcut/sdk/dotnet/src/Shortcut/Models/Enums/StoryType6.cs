using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The type of Stories that you want returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StoryType6>))]
public sealed record StoryType6 : OpenStringEnum<StoryType6>
{
    private StoryType6(string value) : base(value)
    {
    }

    public static readonly StoryType6 Feature = new("feature");

    public static readonly StoryType6 Chore = new("chore");

    public static readonly StoryType6 Bug = new("bug");

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
