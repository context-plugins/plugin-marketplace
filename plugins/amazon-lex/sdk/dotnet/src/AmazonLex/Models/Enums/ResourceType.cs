using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of resource to export.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceType>))]
public sealed record ResourceType : OpenStringEnum<ResourceType>
{
    private ResourceType(string value) : base(value)
    {
    }

    public static readonly ResourceType Bot = new("BOT");

    public static readonly ResourceType Intent = new("INTENT");

    public static readonly ResourceType SlotType = new("SLOT_TYPE");

    public TResult Match<TResult>(Func<TResult> onBot,
        Func<TResult> onIntent,
        Func<TResult> onSlotType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bot => onBot(),
            _ when this == Intent => onIntent(),
            _ when this == SlotType => onSlotType(),
            _ => otherwise(Value)
        };

    public void Match(Action onBot, Action onIntent, Action onSlotType, Action<string> otherwise)
    {
        if (this == Bot) onBot();
        else if (this == Intent) onIntent();
        else if (this == SlotType) onSlotType();
        else otherwise(Value);
    }
}
