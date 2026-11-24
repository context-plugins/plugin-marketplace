using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Required. Type of filter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 FilterTypeUnspecified = new("FILTER_TYPE_UNSPECIFIED");

    public static readonly Type1 UnitOnly = new("UNIT_ONLY");

    public static readonly Type1 UnitAndAmount = new("UNIT_AND_AMOUNT");

    public static readonly Type1 AnnualizedBaseAmount = new("ANNUALIZED_BASE_AMOUNT");

    public static readonly Type1 AnnualizedTotalAmount = new("ANNUALIZED_TOTAL_AMOUNT");

    public TResult Match<TResult>(Func<TResult> onFilterTypeUnspecified,
        Func<TResult> onUnitOnly,
        Func<TResult> onUnitAndAmount,
        Func<TResult> onAnnualizedBaseAmount,
        Func<TResult> onAnnualizedTotalAmount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FilterTypeUnspecified => onFilterTypeUnspecified(),
            _ when this == UnitOnly => onUnitOnly(),
            _ when this == UnitAndAmount => onUnitAndAmount(),
            _ when this == AnnualizedBaseAmount => onAnnualizedBaseAmount(),
            _ when this == AnnualizedTotalAmount => onAnnualizedTotalAmount(),
            _ => otherwise(Value)
        };

    public void Match(Action onFilterTypeUnspecified,
        Action onUnitOnly,
        Action onUnitAndAmount,
        Action onAnnualizedBaseAmount,
        Action onAnnualizedTotalAmount,
        Action<string> otherwise)
    {
        if (this == FilterTypeUnspecified) onFilterTypeUnspecified();
        else if (this == UnitOnly) onUnitOnly();
        else if (this == UnitAndAmount) onUnitAndAmount();
        else if (this == AnnualizedBaseAmount) onAnnualizedBaseAmount();
        else if (this == AnnualizedTotalAmount) onAnnualizedTotalAmount();
        else otherwise(Value);
    }
}
