using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectType>))]
public sealed record ObjectType : OpenStringEnum<ObjectType>
{
    private ObjectType(string value) : base(value)
    {
    }

    public static readonly ObjectType Contact = new("contact");

    public static readonly ObjectType Company = new("company");

    public TResult Match<TResult>(Func<TResult> onContact, Func<TResult> onCompany, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contact => onContact(),
            _ when this == Company => onCompany(),
            _ => otherwise(Value)
        };

    public void Match(Action onContact, Action onCompany, Action<string> otherwise)
    {
        if (this == Contact) onContact();
        else if (this == Company) onCompany();
        else otherwise(Value);
    }
}
