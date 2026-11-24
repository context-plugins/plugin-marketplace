using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Edges = new("edges");

    public static readonly Kind GroupMembers = new("group_members");

    public static readonly Kind Both = new("both");

    public TResult Match<TResult>(Func<TResult> onEdges,
        Func<TResult> onGroupMembers,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Edges => onEdges(),
            _ when this == GroupMembers => onGroupMembers(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onEdges, Action onGroupMembers, Action onBoth, Action<string> otherwise)
    {
        if (this == Edges) onEdges();
        else if (this == GroupMembers) onGroupMembers();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
