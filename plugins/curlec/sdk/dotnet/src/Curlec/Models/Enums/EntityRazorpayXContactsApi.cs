using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXContactsApi>))]
public sealed record EntityRazorpayXContactsApi : OpenStringEnum<EntityRazorpayXContactsApi>
{
    private EntityRazorpayXContactsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXContactsApi Contact = new("contact");

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
