using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The feedback provided by the customer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Feedback>))]
public sealed record Feedback : OpenStringEnum<Feedback>
{
    private Feedback(string value) : base(value)
    {
    }

    public static readonly Feedback ValidCollection = new("VALID_COLLECTION");

    public static readonly Feedback RecommendationUseful = new("RECOMMENDATION_USEFUL");

    public static readonly Feedback AlertTooSensitive = new("ALERT_TOO_SENSITIVE");

    public static readonly Feedback DataNoisyAnomaly = new("DATA_NOISY_ANOMALY");

    public static readonly Feedback DataIncorrect = new("DATA_INCORRECT");

    public TResult Match<TResult>(Func<TResult> onValidCollection,
        Func<TResult> onRecommendationUseful,
        Func<TResult> onAlertTooSensitive,
        Func<TResult> onDataNoisyAnomaly,
        Func<TResult> onDataIncorrect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidCollection => onValidCollection(),
            _ when this == RecommendationUseful => onRecommendationUseful(),
            _ when this == AlertTooSensitive => onAlertTooSensitive(),
            _ when this == DataNoisyAnomaly => onDataNoisyAnomaly(),
            _ when this == DataIncorrect => onDataIncorrect(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidCollection,
        Action onRecommendationUseful,
        Action onAlertTooSensitive,
        Action onDataNoisyAnomaly,
        Action onDataIncorrect,
        Action<string> otherwise)
    {
        if (this == ValidCollection) onValidCollection();
        else if (this == RecommendationUseful) onRecommendationUseful();
        else if (this == AlertTooSensitive) onAlertTooSensitive();
        else if (this == DataNoisyAnomaly) onDataNoisyAnomaly();
        else if (this == DataIncorrect) onDataIncorrect();
        else otherwise(Value);
    }
}
