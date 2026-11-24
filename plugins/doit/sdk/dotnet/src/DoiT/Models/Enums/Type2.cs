using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Component bucket the related resource lives in.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Node = new("node");

    public static readonly Type2 Element = new("element");

    public static readonly Type2 Group = new("group");

    public TResult Match<TResult>(Func<TResult> onNode,
        Func<TResult> onElement,
        Func<TResult> onGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Node => onNode(),
            _ when this == Element => onElement(),
            _ when this == Group => onGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onNode, Action onElement, Action onGroup, Action<string> otherwise)
    {
        if (this == Node) onNode();
        else if (this == Element) onElement();
        else if (this == Group) onGroup();
        else otherwise(Value);
    }
}
