using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Component type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Attachment = new("attachment");

    public static readonly Type4 Combiner = new("combiner");

    public static readonly Type4 Element = new("element");

    public static readonly Type4 Group = new("group");

    public static readonly Type4 Link = new("link");

    public static readonly Type4 Node = new("node");

    public static readonly Type4 Note = new("note");

    public TResult Match<TResult>(Func<TResult> onAttachment,
        Func<TResult> onCombiner,
        Func<TResult> onElement,
        Func<TResult> onGroup,
        Func<TResult> onLink,
        Func<TResult> onNode,
        Func<TResult> onNote,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attachment => onAttachment(),
            _ when this == Combiner => onCombiner(),
            _ when this == Element => onElement(),
            _ when this == Group => onGroup(),
            _ when this == Link => onLink(),
            _ when this == Node => onNode(),
            _ when this == Note => onNote(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttachment,
        Action onCombiner,
        Action onElement,
        Action onGroup,
        Action onLink,
        Action onNode,
        Action onNote,
        Action<string> otherwise)
    {
        if (this == Attachment) onAttachment();
        else if (this == Combiner) onCombiner();
        else if (this == Element) onElement();
        else if (this == Group) onGroup();
        else if (this == Link) onLink();
        else if (this == Node) onNode();
        else if (this == Note) onNote();
        else otherwise(Value);
    }
}
