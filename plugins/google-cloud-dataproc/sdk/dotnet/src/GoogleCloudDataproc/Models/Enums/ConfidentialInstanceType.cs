using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Defines the type of Confidential Compute technology to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConfidentialInstanceType>))]
public sealed record ConfidentialInstanceType : OpenStringEnum<ConfidentialInstanceType>
{
    private ConfidentialInstanceType(string value) : base(value)
    {
    }

    public static readonly ConfidentialInstanceType ConfidentialInstanceTypeUnspecified = new(
        "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED");

    public static readonly ConfidentialInstanceType Sev = new("SEV");

    public static readonly ConfidentialInstanceType SevSnp = new("SEV_SNP");

    public static readonly ConfidentialInstanceType Tdx = new("TDX");

    public TResult Match<TResult>(Func<TResult> onConfidentialInstanceTypeUnspecified,
        Func<TResult> onSev,
        Func<TResult> onSevSnp,
        Func<TResult> onTdx,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConfidentialInstanceTypeUnspecified => onConfidentialInstanceTypeUnspecified(),
            _ when this == Sev => onSev(),
            _ when this == SevSnp => onSevSnp(),
            _ when this == Tdx => onTdx(),
            _ => otherwise(Value)
        };

    public void Match(Action onConfidentialInstanceTypeUnspecified,
        Action onSev,
        Action onSevSnp,
        Action onTdx,
        Action<string> otherwise)
    {
        if (this == ConfidentialInstanceTypeUnspecified) onConfidentialInstanceTypeUnspecified();
        else if (this == Sev) onSev();
        else if (this == SevSnp) onSevSnp();
        else if (this == Tdx) onTdx();
        else otherwise(Value);
    }
}
