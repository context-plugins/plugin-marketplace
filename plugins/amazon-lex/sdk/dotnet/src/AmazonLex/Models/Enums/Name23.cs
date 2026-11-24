using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name23>))]
public sealed record Name23 : OpenStringEnum<Name23>
{
    private Name23(string value) : base(value)
    {
    }

    public static readonly Name23 IntentId = new("IntentId");

    public static readonly Name23 SlotTypeId = new("SlotTypeId");

    public TResult Match<TResult>(Func<TResult> onIntentId,
        Func<TResult> onSlotTypeId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IntentId => onIntentId(),
            _ when this == SlotTypeId => onSlotTypeId(),
            _ => otherwise(Value)
        };

    public void Match(Action onIntentId, Action onSlotTypeId, Action<string> otherwise)
    {
        if (this == IntentId) onIntentId();
        else if (this == SlotTypeId) onSlotTypeId();
        else otherwise(Value);
    }
}
