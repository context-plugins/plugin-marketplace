using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Overrides default entityType
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType3>))]
public sealed record EntityType3 : OpenStringEnum<EntityType3>
{
    private EntityType3(string value) : base(value)
    {
    }

    public static readonly EntityType3 Contact = new("contact");

    public static readonly EntityType3 Company = new("company");

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
