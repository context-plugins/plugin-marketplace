using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenewalEligibility>))]
public sealed record RenewalEligibility : OpenStringEnum<RenewalEligibility>
{
    private RenewalEligibility(string value) : base(value)
    {
    }

    public static readonly RenewalEligibility Eligible = new("ELIGIBLE");

    public static readonly RenewalEligibility Ineligible = new("INELIGIBLE");

    public TResult Match<TResult>(Func<TResult> onEligible,
        Func<TResult> onIneligible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eligible => onEligible(),
            _ when this == Ineligible => onIneligible(),
            _ => otherwise(Value)
        };

    public void Match(Action onEligible, Action onIneligible, Action<string> otherwise)
    {
        if (this == Eligible) onEligible();
        else if (this == Ineligible) onIneligible();
        else otherwise(Value);
    }
}
