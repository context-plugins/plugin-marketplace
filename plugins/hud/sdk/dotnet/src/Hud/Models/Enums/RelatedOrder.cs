using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RelatedOrder>))]
public sealed record RelatedOrder : OpenStringEnum<RelatedOrder>
{
    private RelatedOrder(string value) : base(value)
    {
    }

    public static readonly RelatedOrder Asc = new("asc");

    public static readonly RelatedOrder Desc = new("desc");

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
