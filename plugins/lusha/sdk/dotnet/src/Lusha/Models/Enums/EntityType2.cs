using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Default entity type for all subscriptions
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType2>))]
public sealed record EntityType2 : OpenStringEnum<EntityType2>
{
    private EntityType2(string value) : base(value)
    {
    }

    public static readonly EntityType2 Contact = new("contact");

    public static readonly EntityType2 Company = new("company");

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
