using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Whether subscriptions created from this plan will have a fixed term or will continue until canceled. If <c>default_total_billing_intervals</c> is set, this plan's <c>duration_type</c> is automatically set to <c>FIXED_TERM</c>. Otherwise, the <c>duration_type</c> is set to <c>EVERGREEN</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DurationType>))]
public sealed record DurationType : OpenStringEnum<DurationType>
{
    private DurationType(string value) : base(value)
    {
    }

    public static readonly DurationType FixedTerm = new("FIXED_TERM");

    public static readonly DurationType Evergreen = new("EVERGREEN");

    public TResult Match<TResult>(Func<TResult> onFixedTerm,
        Func<TResult> onEvergreen,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FixedTerm => onFixedTerm(),
            _ when this == Evergreen => onEvergreen(),
            _ => otherwise(Value)
        };

    public void Match(Action onFixedTerm, Action onEvergreen, Action<string> otherwise)
    {
        if (this == FixedTerm) onFixedTerm();
        else if (this == Evergreen) onEvergreen();
        else otherwise(Value);
    }
}
