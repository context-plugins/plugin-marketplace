using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The attribute to use to sort the list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Attribute4>))]
public sealed record Attribute4 : OpenStringEnum<Attribute4>
{
    private Attribute4(string value) : base(value)
    {
    }

    public static readonly Attribute4 SlotName = new("SlotName");

    public static readonly Attribute4 LastUpdatedDateTime = new("LastUpdatedDateTime");

    public TResult Match<TResult>(Func<TResult> onSlotName,
        Func<TResult> onLastUpdatedDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SlotName => onSlotName(),
            _ when this == LastUpdatedDateTime => onLastUpdatedDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onSlotName, Action onLastUpdatedDateTime, Action<string> otherwise)
    {
        if (this == SlotName) onSlotName();
        else if (this == LastUpdatedDateTime) onLastUpdatedDateTime();
        else otherwise(Value);
    }
}
