using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of allocation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Single = new("single");

    public static readonly Type1 Group = new("group");

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
