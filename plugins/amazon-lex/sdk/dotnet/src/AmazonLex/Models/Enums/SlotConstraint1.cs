using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Whether the slot is required or optional. An intent is complete when all required slots are filled.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotConstraint1>))]
public sealed record SlotConstraint1 : OpenStringEnum<SlotConstraint1>
{
    private SlotConstraint1(string value) : base(value)
    {
    }

    public static readonly SlotConstraint1 Required = new("Required");

    public static readonly SlotConstraint1 Optional = new("Optional");

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
