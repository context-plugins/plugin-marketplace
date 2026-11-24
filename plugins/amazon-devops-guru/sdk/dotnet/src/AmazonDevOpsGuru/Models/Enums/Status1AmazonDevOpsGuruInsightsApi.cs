using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of a reactive insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AmazonDevOpsGuruInsightsApi>))]
public sealed record Status1AmazonDevOpsGuruInsightsApi : OpenStringEnum<Status1AmazonDevOpsGuruInsightsApi>
{
    private Status1AmazonDevOpsGuruInsightsApi(string value) : base(value)
    {
    }

    public static readonly Status1AmazonDevOpsGuruInsightsApi Ongoing = new("ONGOING");

    public static readonly Status1AmazonDevOpsGuruInsightsApi Closed = new("CLOSED");

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
