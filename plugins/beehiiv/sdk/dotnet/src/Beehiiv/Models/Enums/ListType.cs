using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of list (e.g., ordered, unordered).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ListType>))]
public sealed record ListType : OpenStringEnum<ListType>
{
    private ListType(string value) : base(value)
    {
    }

    public static readonly ListType Ordered = new("ordered");

    public static readonly ListType Unordered = new("unordered");

    public TResult Match<TResult>(Func<TResult> onOrdered,
        Func<TResult> onUnordered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ordered => onOrdered(),
            _ when this == Unordered => onUnordered(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrdered, Action onUnordered, Action<string> otherwise)
    {
        if (this == Ordered) onOrdered();
        else if (this == Unordered) onUnordered();
        else otherwise(Value);
    }
}
