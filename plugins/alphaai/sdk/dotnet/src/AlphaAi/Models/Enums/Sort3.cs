using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort3>))]
public sealed record Sort3 : OpenStringEnum<Sort3>
{
    private Sort3(string value) : base(value)
    {
    }

    public static readonly Sort3 Recent = new("recent");

    public static readonly Sort3 Buyers = new("buyers");

    public static readonly Sort3 ValueMember = new("value");

    public TResult Match<TResult>(Func<TResult> onRecent,
        Func<TResult> onBuyers,
        Func<TResult> onValueMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recent => onRecent(),
            _ when this == Buyers => onBuyers(),
            _ when this == ValueMember => onValueMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecent, Action onBuyers, Action onValueMember, Action<string> otherwise)
    {
        if (this == Recent) onRecent();
        else if (this == Buyers) onBuyers();
        else if (this == ValueMember) onValueMember();
        else otherwise(Value);
    }
}
