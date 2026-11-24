using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// Use to filter for either REACTIVE or PROACTIVE insights.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonDevOpsGuruInsightsApi>))]
public sealed record TypeAmazonDevOpsGuruInsightsApi : OpenStringEnum<TypeAmazonDevOpsGuruInsightsApi>
{
    private TypeAmazonDevOpsGuruInsightsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonDevOpsGuruInsightsApi Reactive = new("REACTIVE");

    public static readonly TypeAmazonDevOpsGuruInsightsApi Proactive = new("PROACTIVE");

    public TResult Match<TResult>(Func<TResult> onReactive,
        Func<TResult> onProactive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reactive => onReactive(),
            _ when this == Proactive => onProactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onReactive, Action onProactive, Action<string> otherwise)
    {
        if (this == Reactive) onReactive();
        else if (this == Proactive) onProactive();
        else otherwise(Value);
    }
}
