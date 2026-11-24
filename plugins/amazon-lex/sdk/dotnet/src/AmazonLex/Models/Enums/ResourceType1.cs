using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of the exported resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceType1>))]
public sealed record ResourceType1 : OpenStringEnum<ResourceType1>
{
    private ResourceType1(string value) : base(value)
    {
    }

    public static readonly ResourceType1 Bot = new("BOT");

    public static readonly ResourceType1 Intent = new("INTENT");

    public static readonly ResourceType1 SlotType = new("SLOT_TYPE");

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
