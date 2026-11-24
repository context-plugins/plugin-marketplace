using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The reason for the feedback.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason ReasonUnspecified = new("REASON_UNSPECIFIED");

    public static readonly Reason InternalSystem = new("INTERNAL_SYSTEM");

    public static readonly Reason NonRiskClient = new("NON_RISK_CLIENT");

    public static readonly Reason Nat = new("NAT");

    public static readonly Reason PenetrationTest = new("PENETRATION_TEST");

    public static readonly Reason Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onReasonUnspecified,
        Func<TResult> onInternalSystem,
        Func<TResult> onNonRiskClient,
        Func<TResult> onNat,
        Func<TResult> onPenetrationTest,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReasonUnspecified => onReasonUnspecified(),
            _ when this == InternalSystem => onInternalSystem(),
            _ when this == NonRiskClient => onNonRiskClient(),
            _ when this == Nat => onNat(),
            _ when this == PenetrationTest => onPenetrationTest(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onReasonUnspecified,
        Action onInternalSystem,
        Action onNonRiskClient,
        Action onNat,
        Action onPenetrationTest,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == ReasonUnspecified) onReasonUnspecified();
        else if (this == InternalSystem) onInternalSystem();
        else if (this == NonRiskClient) onNonRiskClient();
        else if (this == Nat) onNat();
        else if (this == PenetrationTest) onPenetrationTest();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
