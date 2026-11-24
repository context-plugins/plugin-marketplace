using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines the replacement and triggers an automatic refund.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusInstacartConnectPostCheckoutReplacementsApi>))]
public sealed record StatusInstacartConnectPostCheckoutReplacementsApi : OpenStringEnum<StatusInstacartConnectPostCheckoutReplacementsApi>
{
    private StatusInstacartConnectPostCheckoutReplacementsApi(string value) : base(value)
    {
    }

    public static readonly StatusInstacartConnectPostCheckoutReplacementsApi Approved = new("APPROVED");

    public static readonly StatusInstacartConnectPostCheckoutReplacementsApi Rejected = new("REJECTED");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onRejected, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
