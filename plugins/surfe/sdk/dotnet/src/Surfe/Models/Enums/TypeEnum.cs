using System;
using System.Text.Json.Serialization;
using Surfe.Core.Enum;

namespace Surfe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Professional = new("professional");

    public static readonly TypeEnum Personal = new("personal");

    public TResult Match<TResult>(Func<TResult> onProfessional,
        Func<TResult> onPersonal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Professional => onProfessional(),
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onProfessional, Action onPersonal, Action<string> otherwise)
    {
        if (this == Professional) onProfessional();
        else if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
