using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DecisionDeliverdDevGatesApi>))]
public sealed record DecisionDeliverdDevGatesApi : OpenStringEnum<DecisionDeliverdDevGatesApi>
{
    private DecisionDeliverdDevGatesApi(string value) : base(value)
    {
    }

    public static readonly DecisionDeliverdDevGatesApi Allow = new("ALLOW");

    public static readonly DecisionDeliverdDevGatesApi ApprovalRequired = new("APPROVAL_REQUIRED");

    public static readonly DecisionDeliverdDevGatesApi ReviewRequired = new("REVIEW_REQUIRED");

    public static readonly DecisionDeliverdDevGatesApi Deny = new("DENY");

    public TResult Match<TResult>(Func<TResult> onAllow,
        Func<TResult> onApprovalRequired,
        Func<TResult> onReviewRequired,
        Func<TResult> onDeny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == ApprovalRequired => onApprovalRequired(),
            _ when this == ReviewRequired => onReviewRequired(),
            _ when this == Deny => onDeny(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow,
        Action onApprovalRequired,
        Action onReviewRequired,
        Action onDeny,
        Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == ApprovalRequired) onApprovalRequired();
        else if (this == ReviewRequired) onReviewRequired();
        else if (this == Deny) onDeny();
        else otherwise(Value);
    }
}
