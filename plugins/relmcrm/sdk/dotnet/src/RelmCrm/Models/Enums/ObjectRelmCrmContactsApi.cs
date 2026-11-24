using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmContactsApi>))]
public sealed record ObjectRelmCrmContactsApi : OpenStringEnum<ObjectRelmCrmContactsApi>
{
    private ObjectRelmCrmContactsApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmContactsApi Contact = new("contact");

    public TResult Match<TResult>(Func<TResult> onContact, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contact => onContact(),
            _ => otherwise(Value)
        };

    public void Match(Action onContact, Action<string> otherwise)
    {
        if (this == Contact) onContact();
        else otherwise(Value);
    }
}
