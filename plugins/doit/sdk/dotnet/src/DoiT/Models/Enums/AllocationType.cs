using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Composition type of allocation (single or group).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AllocationType>))]
public sealed record AllocationType : OpenStringEnum<AllocationType>
{
    private AllocationType(string value) : base(value)
    {
    }

    public static readonly AllocationType Single = new("single");

    public static readonly AllocationType Group = new("group");

    public TResult Match<TResult>(Func<TResult> onSingle, Func<TResult> onGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Single => onSingle(),
            _ when this == Group => onGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingle, Action onGroup, Action<string> otherwise)
    {
        if (this == Single) onSingle();
        else if (this == Group) onGroup();
        else otherwise(Value);
    }
}
