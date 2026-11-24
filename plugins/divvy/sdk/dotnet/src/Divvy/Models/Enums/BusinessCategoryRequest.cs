using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Business Category.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessCategoryRequest>))]
public sealed record BusinessCategoryRequest : OpenStringEnum<BusinessCategoryRequest>
{
    private BusinessCategoryRequest(string value) : base(value)
    {
    }

    public static readonly BusinessCategoryRequest Corporation = new("CORPORATION");

    public static readonly BusinessCategoryRequest Llc = new("LLC");

    public static readonly BusinessCategoryRequest NonProfit = new("NON_PROFIT");

    public static readonly BusinessCategoryRequest Government = new("GOVERNMENT");

    public static readonly BusinessCategoryRequest SoleProprietor = new("SOLE_PROPRIETOR");

    public static readonly BusinessCategoryRequest Individual = new("INDIVIDUAL");

    public static readonly BusinessCategoryRequest Trust = new("TRUST");

    public static readonly BusinessCategoryRequest Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onCorporation,
        Func<TResult> onLlc,
        Func<TResult> onNonProfit,
        Func<TResult> onGovernment,
        Func<TResult> onSoleProprietor,
        Func<TResult> onIndividual,
        Func<TResult> onTrust,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Corporation => onCorporation(),
            _ when this == Llc => onLlc(),
            _ when this == NonProfit => onNonProfit(),
            _ when this == Government => onGovernment(),
            _ when this == SoleProprietor => onSoleProprietor(),
            _ when this == Individual => onIndividual(),
            _ when this == Trust => onTrust(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onCorporation,
        Action onLlc,
        Action onNonProfit,
        Action onGovernment,
        Action onSoleProprietor,
        Action onIndividual,
        Action onTrust,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Corporation) onCorporation();
        else if (this == Llc) onLlc();
        else if (this == NonProfit) onNonProfit();
        else if (this == Government) onGovernment();
        else if (this == SoleProprietor) onSoleProprietor();
        else if (this == Individual) onIndividual();
        else if (this == Trust) onTrust();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
