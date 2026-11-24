using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type2RazorpayPartnerDocumentsApi>))]
public sealed record Type2RazorpayPartnerDocumentsApi : OpenStringEnum<Type2RazorpayPartnerDocumentsApi>
{
    private Type2RazorpayPartnerDocumentsApi(string value) : base(value)
    {
    }

    public static readonly Type2RazorpayPartnerDocumentsApi PersonalPan = new("personal_pan");

    public TResult Match<TResult>(Func<TResult> onPersonalPan, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PersonalPan => onPersonalPan(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonalPan, Action<string> otherwise)
    {
        if (this == PersonalPan) onPersonalPan();
        else otherwise(Value);
    }
}
