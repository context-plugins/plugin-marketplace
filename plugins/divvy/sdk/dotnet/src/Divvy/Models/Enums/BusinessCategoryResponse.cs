using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Business Category.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessCategoryResponse>))]
public sealed record BusinessCategoryResponse : OpenStringEnum<BusinessCategoryResponse>
{
    private BusinessCategoryResponse(string value) : base(value)
    {
    }

    public static readonly BusinessCategoryResponse Undefined = new("UNDEFINED");

    public static readonly BusinessCategoryResponse Corporation = new("CORPORATION");

    public static readonly BusinessCategoryResponse Llc = new("LLC");

    public static readonly BusinessCategoryResponse NonProfit = new("NON_PROFIT");

    public static readonly BusinessCategoryResponse Government = new("GOVERNMENT");

    public static readonly BusinessCategoryResponse SoleProprietor = new("SOLE_PROPRIETOR");

    public static readonly BusinessCategoryResponse Individual = new("INDIVIDUAL");

    public static readonly BusinessCategoryResponse Trust = new("TRUST");

    public static readonly BusinessCategoryResponse Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onUndefined,
        Func<TResult> onCorporation,
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
            _ when this == Undefined => onUndefined(),
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

    public void Match(Action onUndefined,
        Action onCorporation,
        Action onLlc,
        Action onNonProfit,
        Action onGovernment,
        Action onSoleProprietor,
        Action onIndividual,
        Action onTrust,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Undefined) onUndefined();
        else if (this == Corporation) onCorporation();
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
