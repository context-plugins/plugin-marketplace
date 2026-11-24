using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Preferred or actual commitment term length for Savings Plans and related settings.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CommitmentTerm>))]
public sealed record CommitmentTerm : OpenStringEnum<CommitmentTerm>
{
    private CommitmentTerm(string value) : base(value)
    {
    }

    public static readonly CommitmentTerm OneYear = new("one_year");

    public static readonly CommitmentTerm ThreeYear = new("three_year");

    public TResult Match<TResult>(Func<TResult> onOneYear,
        Func<TResult> onThreeYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneYear => onOneYear(),
            _ when this == ThreeYear => onThreeYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneYear, Action onThreeYear, Action<string> otherwise)
    {
        if (this == OneYear) onOneYear();
        else if (this == ThreeYear) onThreeYear();
        else otherwise(Value);
    }
}
