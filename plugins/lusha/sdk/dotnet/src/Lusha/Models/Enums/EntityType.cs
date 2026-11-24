using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityType>))]
public sealed record EntityType : OpenStringEnum<EntityType>
{
    private EntityType(string value) : base(value)
    {
    }

    public static readonly EntityType Contacts = new("contacts");

    public static readonly EntityType Companies = new("companies");

    public TResult Match<TResult>(Func<TResult> onContacts,
        Func<TResult> onCompanies,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contacts => onContacts(),
            _ when this == Companies => onCompanies(),
            _ => otherwise(Value)
        };

    public void Match(Action onContacts, Action onCompanies, Action<string> otherwise)
    {
        if (this == Contacts) onContacts();
        else if (this == Companies) onCompanies();
        else otherwise(Value);
    }
}
