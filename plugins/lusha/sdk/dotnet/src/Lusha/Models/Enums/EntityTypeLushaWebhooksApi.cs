using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityTypeLushaWebhooksApi>))]
public sealed record EntityTypeLushaWebhooksApi : OpenStringEnum<EntityTypeLushaWebhooksApi>
{
    private EntityTypeLushaWebhooksApi(string value) : base(value)
    {
    }

    public static readonly EntityTypeLushaWebhooksApi Contact = new("contact");

    public static readonly EntityTypeLushaWebhooksApi Company = new("company");

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
