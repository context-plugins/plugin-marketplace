using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MessageType>))]
public sealed record MessageType : OpenStringEnum<MessageType>
{
    private MessageType(string value) : base(value)
    {
    }

    public static readonly MessageType NewInsight = new("NEW_INSIGHT");

    public static readonly MessageType ClosedInsight = new("CLOSED_INSIGHT");

    public static readonly MessageType NewAssociation = new("NEW_ASSOCIATION");

    public static readonly MessageType SeverityUpgraded = new("SEVERITY_UPGRADED");

    public static readonly MessageType NewRecommendation = new("NEW_RECOMMENDATION");

    public TResult Match<TResult>(Func<TResult> onNewInsight,
        Func<TResult> onClosedInsight,
        Func<TResult> onNewAssociation,
        Func<TResult> onSeverityUpgraded,
        Func<TResult> onNewRecommendation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NewInsight => onNewInsight(),
            _ when this == ClosedInsight => onClosedInsight(),
            _ when this == NewAssociation => onNewAssociation(),
            _ when this == SeverityUpgraded => onSeverityUpgraded(),
            _ when this == NewRecommendation => onNewRecommendation(),
            _ => otherwise(Value)
        };

    public void Match(Action onNewInsight,
        Action onClosedInsight,
        Action onNewAssociation,
        Action onSeverityUpgraded,
        Action onNewRecommendation,
        Action<string> otherwise)
    {
        if (this == NewInsight) onNewInsight();
        else if (this == ClosedInsight) onClosedInsight();
        else if (this == NewAssociation) onNewAssociation();
        else if (this == SeverityUpgraded) onSeverityUpgraded();
        else if (this == NewRecommendation) onNewRecommendation();
        else otherwise(Value);
    }
}
