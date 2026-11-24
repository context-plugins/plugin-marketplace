using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of creating this cost estimate. If it's still in progress, the status ONGOING is returned. If it is finished, the status COMPLETED is returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonDevOpsGuruCostEstimationApi>))]
public sealed record StatusAmazonDevOpsGuruCostEstimationApi : OpenStringEnum<StatusAmazonDevOpsGuruCostEstimationApi>
{
    private StatusAmazonDevOpsGuruCostEstimationApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonDevOpsGuruCostEstimationApi Ongoing = new("ONGOING");

    public static readonly StatusAmazonDevOpsGuruCostEstimationApi Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onOngoing,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ongoing => onOngoing(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onOngoing, Action onCompleted, Action<string> otherwise)
    {
        if (this == Ongoing) onOngoing();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
