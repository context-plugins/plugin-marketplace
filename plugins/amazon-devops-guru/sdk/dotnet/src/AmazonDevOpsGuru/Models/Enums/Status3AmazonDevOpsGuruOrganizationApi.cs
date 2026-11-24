using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of a reactive insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3AmazonDevOpsGuruOrganizationApi>))]
public sealed record Status3AmazonDevOpsGuruOrganizationApi : OpenStringEnum<Status3AmazonDevOpsGuruOrganizationApi>
{
    private Status3AmazonDevOpsGuruOrganizationApi(string value) : base(value)
    {
    }

    public static readonly Status3AmazonDevOpsGuruOrganizationApi Ongoing = new("ONGOING");

    public static readonly Status3AmazonDevOpsGuruOrganizationApi Closed = new("CLOSED");

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
