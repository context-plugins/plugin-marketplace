using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type51>))]
public sealed record Type51 : OpenStringEnum<Type51>
{
    private Type51(string value) : base(value)
    {
    }

    public static readonly Type51 Business = new("BUSINESS");

    public static readonly Type51 Personal = new("PERSONAL");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onPersonal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness, Action onPersonal, Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
