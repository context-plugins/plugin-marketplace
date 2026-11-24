using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Sort by created_at.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RelatedOrder1>))]
public sealed record RelatedOrder1 : OpenStringEnum<RelatedOrder1>
{
    private RelatedOrder1(string value) : base(value)
    {
    }

    public static readonly RelatedOrder1 Asc = new("asc");

    public static readonly RelatedOrder1 Desc = new("desc");

    public TResult Match<TResult>(Func<TResult> onAsc, Func<TResult> onDesc, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Asc => onAsc(),
            _ when this == Desc => onDesc(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsc, Action onDesc, Action<string> otherwise)
    {
        if (this == Asc) onAsc();
        else if (this == Desc) onDesc();
        else otherwise(Value);
    }
}
