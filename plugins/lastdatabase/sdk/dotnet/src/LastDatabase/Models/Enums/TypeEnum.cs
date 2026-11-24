using System;
using System.Text.Json.Serialization;
using LastDatabase.Core.Enum;

namespace LastDatabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Email = new("email");

    public static readonly TypeEnum Phone = new("phone");

    public static readonly TypeEnum Fax = new("fax");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onPhone,
        Func<TResult> onFax,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Phone => onPhone(),
            _ when this == Fax => onFax(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onPhone, Action onFax, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Phone) onPhone();
        else if (this == Fax) onFax();
        else otherwise(Value);
    }
}
