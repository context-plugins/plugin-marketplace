using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The updated replacement status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReplacementStatusInstacartConnectPostCheckoutReplacementsApi>))]
public sealed record ReplacementStatusInstacartConnectPostCheckoutReplacementsApi : OpenStringEnum<ReplacementStatusInstacartConnectPostCheckoutReplacementsApi>
{
    private ReplacementStatusInstacartConnectPostCheckoutReplacementsApi(string value) : base(value)
    {
    }

    public static readonly ReplacementStatusInstacartConnectPostCheckoutReplacementsApi Approved = new("APPROVED");

    public static readonly ReplacementStatusInstacartConnectPostCheckoutReplacementsApi Rejected = new("REJECTED");

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
