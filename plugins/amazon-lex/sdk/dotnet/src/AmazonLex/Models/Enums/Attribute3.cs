using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The attribute to use to sort the list of slot types.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Attribute3>))]
public sealed record Attribute3 : OpenStringEnum<Attribute3>
{
    private Attribute3(string value) : base(value)
    {
    }

    public static readonly Attribute3 SlotTypeName = new("SlotTypeName");

    public static readonly Attribute3 LastUpdatedDateTime = new("LastUpdatedDateTime");

    public TResult Match<TResult>(Func<TResult> onSlotTypeName,
        Func<TResult> onLastUpdatedDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SlotTypeName => onSlotTypeName(),
            _ when this == LastUpdatedDateTime => onLastUpdatedDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onSlotTypeName, Action onLastUpdatedDateTime, Action<string> otherwise)
    {
        if (this == SlotTypeName) onSlotTypeName();
        else if (this == LastUpdatedDateTime) onLastUpdatedDateTime();
        else otherwise(Value);
    }
}
