using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Lang>))]
public sealed record Lang : OpenStringEnum<Lang>
{
    private Lang(string value) : base(value)
    {
    }

    public static readonly Lang En = new("en");

    public static readonly Lang De = new("de");

    public static readonly Lang Fr = new("fr");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onDe,
        Func<TResult> onFr,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == De => onDe(),
            _ when this == Fr => onFr(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn, Action onDe, Action onFr, Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == De) onDe();
        else if (this == Fr) onFr();
        else otherwise(Value);
    }
}
