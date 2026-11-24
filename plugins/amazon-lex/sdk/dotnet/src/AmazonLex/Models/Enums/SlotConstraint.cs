using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the slot is required or optional.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotConstraint>))]
public sealed record SlotConstraint : OpenStringEnum<SlotConstraint>
{
    private SlotConstraint(string value) : base(value)
    {
    }

    public static readonly SlotConstraint Required = new("Required");

    public static readonly SlotConstraint Optional = new("Optional");

    public TResult Match<TResult>(Func<TResult> onRequired,
        Func<TResult> onOptional,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Required => onRequired(),
            _ when this == Optional => onOptional(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequired, Action onOptional, Action<string> otherwise)
    {
        if (this == Required) onRequired();
        else if (this == Optional) onOptional();
        else otherwise(Value);
    }
}
