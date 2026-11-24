using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of identifier.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypePlatformPayeesApi>))]
public sealed record TypePlatformPayeesApi : OpenStringEnum<TypePlatformPayeesApi>
{
    private TypePlatformPayeesApi(string value) : base(value)
    {
    }

    public static readonly TypePlatformPayeesApi Email = new("EMAIL");

    public static readonly TypePlatformPayeesApi Phone = new("PHONE");

    public static readonly TypePlatformPayeesApi ContactName = new("CONTACT_NAME");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onPhone,
        Func<TResult> onContactName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Phone => onPhone(),
            _ when this == ContactName => onContactName(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onPhone, Action onContactName, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Phone) onPhone();
        else if (this == ContactName) onContactName();
        else otherwise(Value);
    }
}
