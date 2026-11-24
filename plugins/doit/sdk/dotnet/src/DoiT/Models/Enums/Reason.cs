using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Feedback reason; must belong to the given <c>resolution</c>. <c>ANOMALY_CONFIRMED</c> accepts <c>SECURITY_BREACH</c>, <c>MISCONFIGURATION</c>, <c>UNINTENTIONAL_PROVISIONING</c>, <c>EXPECTED_COST_SPIKE</c>, <c>ANOMALOUS_OTHER</c>; <c>NOT_ANOMALY</c> accepts <c>FAULTY_ANOMALY_DETECTION_MODEL</c>, <c>INCORRECT_DATA</c>, <c>LOW_IMPACT</c>, <c>NON_ANOMALOUS_OTHER</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason FaultyAnomalyDetectionModel = new("FAULTY_ANOMALY_DETECTION_MODEL");

    public static readonly Reason IncorrectData = new("INCORRECT_DATA");

    public static readonly Reason ExpectedCostSpike = new("EXPECTED_COST_SPIKE");

    public static readonly Reason LowImpact = new("LOW_IMPACT");

    public static readonly Reason NonAnomalousOther = new("NON_ANOMALOUS_OTHER");

    public static readonly Reason SecurityBreach = new("SECURITY_BREACH");

    public static readonly Reason Misconfiguration = new("MISCONFIGURATION");

    public static readonly Reason UnintentionalProvisioning = new("UNINTENTIONAL_PROVISIONING");

    public static readonly Reason AnomalousOther = new("ANOMALOUS_OTHER");

    public TResult Match<TResult>(Func<TResult> onFaultyAnomalyDetectionModel,
        Func<TResult> onIncorrectData,
        Func<TResult> onExpectedCostSpike,
        Func<TResult> onLowImpact,
        Func<TResult> onNonAnomalousOther,
        Func<TResult> onSecurityBreach,
        Func<TResult> onMisconfiguration,
        Func<TResult> onUnintentionalProvisioning,
        Func<TResult> onAnomalousOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaultyAnomalyDetectionModel => onFaultyAnomalyDetectionModel(),
            _ when this == IncorrectData => onIncorrectData(),
            _ when this == ExpectedCostSpike => onExpectedCostSpike(),
            _ when this == LowImpact => onLowImpact(),
            _ when this == NonAnomalousOther => onNonAnomalousOther(),
            _ when this == SecurityBreach => onSecurityBreach(),
            _ when this == Misconfiguration => onMisconfiguration(),
            _ when this == UnintentionalProvisioning => onUnintentionalProvisioning(),
            _ when this == AnomalousOther => onAnomalousOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaultyAnomalyDetectionModel,
        Action onIncorrectData,
        Action onExpectedCostSpike,
        Action onLowImpact,
        Action onNonAnomalousOther,
        Action onSecurityBreach,
        Action onMisconfiguration,
        Action onUnintentionalProvisioning,
        Action onAnomalousOther,
        Action<string> otherwise)
    {
        if (this == FaultyAnomalyDetectionModel) onFaultyAnomalyDetectionModel();
        else if (this == IncorrectData) onIncorrectData();
        else if (this == ExpectedCostSpike) onExpectedCostSpike();
        else if (this == LowImpact) onLowImpact();
        else if (this == NonAnomalousOther) onNonAnomalousOther();
        else if (this == SecurityBreach) onSecurityBreach();
        else if (this == Misconfiguration) onMisconfiguration();
        else if (this == UnintentionalProvisioning) onUnintentionalProvisioning();
        else if (this == AnomalousOther) onAnomalousOther();
        else otherwise(Value);
    }
}
