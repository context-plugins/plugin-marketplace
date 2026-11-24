using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Surface>))]
public sealed record Surface : OpenStringEnum<Surface>
{
    private Surface(string value) : base(value)
    {
    }

    public static readonly Surface ProfileGrid = new("PROFILE_GRID");

    public static readonly Surface NonGrid = new("NON_GRID");

    public static readonly Surface Story = new("STORY");

    public static readonly Surface All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onProfileGrid,
        Func<TResult> onNonGrid,
        Func<TResult> onStory,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ProfileGrid => onProfileGrid(),
            _ when this == NonGrid => onNonGrid(),
            _ when this == Story => onStory(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onProfileGrid, Action onNonGrid, Action onStory, Action onAll, Action<string> otherwise)
    {
        if (this == ProfileGrid) onProfileGrid();
        else if (this == NonGrid) onNonGrid();
        else if (this == Story) onStory();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
