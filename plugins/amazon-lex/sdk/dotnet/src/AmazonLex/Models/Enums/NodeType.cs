using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the node is the end of a path (Exit) or not (Inner).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NodeType>))]
public sealed record NodeType : OpenStringEnum<NodeType>
{
    private NodeType(string value) : base(value)
    {
    }

    public static readonly NodeType Inner = new("Inner");

    public static readonly NodeType Exit = new("Exit");

    public TResult Match<TResult>(Func<TResult> onInner, Func<TResult> onExit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inner => onInner(),
            _ when this == Exit => onExit(),
            _ => otherwise(Value)
        };

    public void Match(Action onInner, Action onExit, Action<string> otherwise)
    {
        if (this == Inner) onInner();
        else if (this == Exit) onExit();
        else otherwise(Value);
    }
}
