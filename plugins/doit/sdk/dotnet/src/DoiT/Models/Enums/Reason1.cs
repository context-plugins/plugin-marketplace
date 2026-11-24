using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 FaultyAnomalyDetectionModel = new("FAULTY_ANOMALY_DETECTION_MODEL");

    public static readonly Reason1 IncorrectData = new("INCORRECT_DATA");

    public static readonly Reason1 ExpectedCostSpike = new("EXPECTED_COST_SPIKE");

    public static readonly Reason1 LowImpact = new("LOW_IMPACT");

    public static readonly Reason1 NonAnomalousOther = new("NON_ANOMALOUS_OTHER");

    public static readonly Reason1 SecurityBreach = new("SECURITY_BREACH");

    public static readonly Reason1 Misconfiguration = new("MISCONFIGURATION");

    public static readonly Reason1 UnintentionalProvisioning = new("UNINTENTIONAL_PROVISIONING");

    public static readonly Reason1 AnomalousOther = new("ANOMALOUS_OTHER");

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
