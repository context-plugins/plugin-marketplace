using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmBatchApi>))]
public sealed record ObjectRelmCrmBatchApi : OpenStringEnum<ObjectRelmCrmBatchApi>
{
    private ObjectRelmCrmBatchApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmBatchApi Contact = new("contact");

    public static readonly ObjectRelmCrmBatchApi Company = new("company");

    public static readonly ObjectRelmCrmBatchApi Deal = new("deal");

    public static readonly ObjectRelmCrmBatchApi Activity = new("activity");

    public TResult Match<TResult>(Func<TResult> onContact,
        Func<TResult> onCompany,
        Func<TResult> onDeal,
        Func<TResult> onActivity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contact => onContact(),
            _ when this == Company => onCompany(),
            _ when this == Deal => onDeal(),
            _ when this == Activity => onActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onContact, Action onCompany, Action onDeal, Action onActivity, Action<string> otherwise)
    {
        if (this == Contact) onContact();
        else if (this == Company) onCompany();
        else if (this == Deal) onDeal();
        else if (this == Activity) onActivity();
        else otherwise(Value);
    }
}
