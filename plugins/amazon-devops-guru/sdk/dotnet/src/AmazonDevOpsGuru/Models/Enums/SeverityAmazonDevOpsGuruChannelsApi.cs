using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SeverityAmazonDevOpsGuruChannelsApi>))]
public sealed record SeverityAmazonDevOpsGuruChannelsApi : OpenStringEnum<SeverityAmazonDevOpsGuruChannelsApi>
{
    private SeverityAmazonDevOpsGuruChannelsApi(string value) : base(value)
    {
    }

    public static readonly SeverityAmazonDevOpsGuruChannelsApi Low = new("LOW");

    public static readonly SeverityAmazonDevOpsGuruChannelsApi Medium = new("MEDIUM");

    public static readonly SeverityAmazonDevOpsGuruChannelsApi High = new("HIGH");

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
