using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Du = new("DU");

    public static readonly TypeEnum Gu = new("GU");

    public static readonly TypeEnum Site = new("SITE");

    public static readonly TypeEnum Parent = new("PARENT");

    public static readonly TypeEnum Hq = new("HQ");

    public static readonly TypeEnum Su = new("SU");

    public TResult Match<TResult>(Func<TResult> onDu,
        Func<TResult> onGu,
        Func<TResult> onSite,
        Func<TResult> onParent,
        Func<TResult> onHq,
        Func<TResult> onSu,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Du => onDu(),
            _ when this == Gu => onGu(),
            _ when this == Site => onSite(),
            _ when this == Parent => onParent(),
            _ when this == Hq => onHq(),
            _ when this == Su => onSu(),
            _ => otherwise(Value)
        };

    public void Match(Action onDu,
        Action onGu,
        Action onSite,
        Action onParent,
        Action onHq,
        Action onSu,
        Action<string> otherwise)
    {
        if (this == Du) onDu();
        else if (this == Gu) onGu();
        else if (this == Site) onSite();
        else if (this == Parent) onParent();
        else if (this == Hq) onHq();
        else if (this == Su) onSu();
        else otherwise(Value);
    }
}
