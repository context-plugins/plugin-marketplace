using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlanType>))]
public sealed record PlanType : OpenStringEnum<PlanType>
{
    private PlanType(string value) : base(value)
    {
    }

    public static readonly PlanType Flat = new("flat");

    public static readonly PlanType Usage = new("usage");

    public static readonly PlanType Credit = new("credit");

    public TResult Match<TResult>(Func<TResult> onFlat,
        Func<TResult> onUsage,
        Func<TResult> onCredit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Flat => onFlat(),
            _ when this == Usage => onUsage(),
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onFlat, Action onUsage, Action onCredit, Action<string> otherwise)
    {
        if (this == Flat) onFlat();
        else if (this == Usage) onUsage();
        else if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
