using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayLinkedAccountsApi>))]
public sealed record EntityRazorpayLinkedAccountsApi : OpenStringEnum<EntityRazorpayLinkedAccountsApi>
{
    private EntityRazorpayLinkedAccountsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayLinkedAccountsApi Stakeholder = new("stakeholder");

    public TResult Match<TResult>(Func<TResult> onStakeholder, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stakeholder => onStakeholder(),
            _ => otherwise(Value)
        };

    public void Match(Action onStakeholder, Action<string> otherwise)
    {
        if (this == Stakeholder) onStakeholder();
        else otherwise(Value);
    }
}
