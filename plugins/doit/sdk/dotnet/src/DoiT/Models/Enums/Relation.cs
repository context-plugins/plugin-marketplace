using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// How the resource is related to the anchor. <c>downstream</c> / <c>upstream</c> are edge
/// relations (anchor is the edge origin / destination respectively).
/// <c>group_member</c> means the related resource is contained in the anchor (anchor is
/// a group); <c>group_parent</c> means the related resource is a group that contains
/// the anchor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Relation>))]
public sealed record Relation : OpenStringEnum<Relation>
{
    private Relation(string value) : base(value)
    {
    }

    public static readonly Relation Downstream = new("downstream");

    public static readonly Relation Upstream = new("upstream");

    public static readonly Relation GroupMember = new("group_member");

    public static readonly Relation GroupParent = new("group_parent");

    public TResult Match<TResult>(Func<TResult> onDownstream,
        Func<TResult> onUpstream,
        Func<TResult> onGroupMember,
        Func<TResult> onGroupParent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Downstream => onDownstream(),
            _ when this == Upstream => onUpstream(),
            _ when this == GroupMember => onGroupMember(),
            _ when this == GroupParent => onGroupParent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDownstream,
        Action onUpstream,
        Action onGroupMember,
        Action onGroupParent,
        Action<string> otherwise)
    {
        if (this == Downstream) onDownstream();
        else if (this == Upstream) onUpstream();
        else if (this == GroupMember) onGroupMember();
        else if (this == GroupParent) onGroupParent();
        else otherwise(Value);
    }
}
