using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevFlowsApi>))]
public sealed record KindDeliverdDevFlowsApi : OpenStringEnum<KindDeliverdDevFlowsApi>
{
    private KindDeliverdDevFlowsApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevFlowsApi Approval = new("approval");

    public static readonly KindDeliverdDevFlowsApi Review = new("review");

    public static readonly KindDeliverdDevFlowsApi Collection = new("collection");

    public static readonly KindDeliverdDevFlowsApi Report = new("report");

    public TResult Match<TResult>(Func<TResult> onApproval,
        Func<TResult> onReview,
        Func<TResult> onCollection,
        Func<TResult> onReport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approval => onApproval(),
            _ when this == Review => onReview(),
            _ when this == Collection => onCollection(),
            _ when this == Report => onReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproval,
        Action onReview,
        Action onCollection,
        Action onReport,
        Action<string> otherwise)
    {
        if (this == Approval) onApproval();
        else if (this == Review) onReview();
        else if (this == Collection) onCollection();
        else if (this == Report) onReport();
        else otherwise(Value);
    }
}
