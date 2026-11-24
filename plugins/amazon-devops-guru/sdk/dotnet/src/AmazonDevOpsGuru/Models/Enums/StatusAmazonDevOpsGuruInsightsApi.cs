using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of the proactive insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonDevOpsGuruInsightsApi>))]
public sealed record StatusAmazonDevOpsGuruInsightsApi : OpenStringEnum<StatusAmazonDevOpsGuruInsightsApi>
{
    private StatusAmazonDevOpsGuruInsightsApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonDevOpsGuruInsightsApi Ongoing = new("ONGOING");

    public static readonly StatusAmazonDevOpsGuruInsightsApi Closed = new("CLOSED");

    public TResult Match<TResult>(Func<TResult> onOngoing, Func<TResult> onClosed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ongoing => onOngoing(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOngoing, Action onClosed, Action<string> otherwise)
    {
        if (this == Ongoing) onOngoing();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
