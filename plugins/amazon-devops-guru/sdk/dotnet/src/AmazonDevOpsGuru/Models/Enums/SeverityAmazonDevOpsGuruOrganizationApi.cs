using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// An array of severity values used to search for insights. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SeverityAmazonDevOpsGuruOrganizationApi>))]
public sealed record SeverityAmazonDevOpsGuruOrganizationApi : OpenStringEnum<SeverityAmazonDevOpsGuruOrganizationApi>
{
    private SeverityAmazonDevOpsGuruOrganizationApi(string value) : base(value)
    {
    }

    public static readonly SeverityAmazonDevOpsGuruOrganizationApi Low = new("LOW");

    public static readonly SeverityAmazonDevOpsGuruOrganizationApi Medium = new("MEDIUM");

    public static readonly SeverityAmazonDevOpsGuruOrganizationApi High = new("HIGH");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onMedium, Action onHigh, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
