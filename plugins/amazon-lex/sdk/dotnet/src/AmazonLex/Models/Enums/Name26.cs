using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The name of the field to use for filtering.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name26>))]
public sealed record Name26 : OpenStringEnum<Name26>
{
    private Name26(string value) : base(value)
    {
    }

    public static readonly Name26 SlotTypeName = new("SlotTypeName");

    public static readonly Name26 ExternalSourceType = new("ExternalSourceType");

    public TResult Match<TResult>(Func<TResult> onSlotTypeName,
        Func<TResult> onExternalSourceType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SlotTypeName => onSlotTypeName(),
            _ when this == ExternalSourceType => onExternalSourceType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSlotTypeName, Action onExternalSourceType, Action<string> otherwise)
    {
        if (this == SlotTypeName) onSlotTypeName();
        else if (this == ExternalSourceType) onExternalSourceType();
        else otherwise(Value);
    }
}
