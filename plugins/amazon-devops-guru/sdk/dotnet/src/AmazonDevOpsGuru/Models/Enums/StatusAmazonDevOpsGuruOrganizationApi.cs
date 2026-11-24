using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// An array of status values used to search for insights.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonDevOpsGuruOrganizationApi>))]
public sealed record StatusAmazonDevOpsGuruOrganizationApi : OpenStringEnum<StatusAmazonDevOpsGuruOrganizationApi>
{
    private StatusAmazonDevOpsGuruOrganizationApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonDevOpsGuruOrganizationApi Ongoing = new("ONGOING");

    public static readonly StatusAmazonDevOpsGuruOrganizationApi Closed = new("CLOSED");

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
