using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 Story = new("STORY");

    public static readonly Type5 Spotlight = new("SPOTLIGHT");

    public static readonly Type5 SavedStory = new("SAVED_STORY");

    public TResult Match<TResult>(Func<TResult> onStory,
        Func<TResult> onSpotlight,
        Func<TResult> onSavedStory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Story => onStory(),
            _ when this == Spotlight => onSpotlight(),
            _ when this == SavedStory => onSavedStory(),
            _ => otherwise(Value)
        };

    public void Match(Action onStory, Action onSpotlight, Action onSavedStory, Action<string> otherwise)
    {
        if (this == Story) onStory();
        else if (this == Spotlight) onSpotlight();
        else if (this == SavedStory) onSavedStory();
        else otherwise(Value);
    }
}
