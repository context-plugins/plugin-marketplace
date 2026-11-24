using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort Revenue = new("revenue");

    public static readonly Sort ProfitNet = new("profit_net");

    public static readonly Sort EstimatedValue = new("estimated_value");

    public static readonly Sort TotalAssets = new("total_assets");

    public static readonly Sort OperatingCostsTotal = new("operating_costs_total");

    public static readonly Sort FixedAssets = new("fixed_assets");

    public static readonly Sort CurrentAssets = new("current_assets");

    public static readonly Sort Equity = new("equity");

    public static readonly Sort LiabilitiesAndProvisions = new("liabilities_and_provisions");

    public static readonly Sort Capital = new("capital");

    public static readonly Sort RegistrationDate = new("registration_date");

    public static readonly Sort RevenueGrowth = new("revenue_growth");

    public static readonly Sort Name = new("name");

    public static readonly Sort Nip = new("nip");

    public static readonly Sort Regon = new("regon");

    public static readonly Sort City = new("city");

    public static readonly Sort Region = new("region");

    public static readonly Sort PostalCode = new("postal_code");

    public TResult Match<TResult>(Func<TResult> onRevenue,
        Func<TResult> onProfitNet,
        Func<TResult> onEstimatedValue,
        Func<TResult> onTotalAssets,
        Func<TResult> onOperatingCostsTotal,
        Func<TResult> onFixedAssets,
        Func<TResult> onCurrentAssets,
        Func<TResult> onEquity,
        Func<TResult> onLiabilitiesAndProvisions,
        Func<TResult> onCapital,
        Func<TResult> onRegistrationDate,
        Func<TResult> onRevenueGrowth,
        Func<TResult> onName,
        Func<TResult> onNip,
        Func<TResult> onRegon,
        Func<TResult> onCity,
        Func<TResult> onRegion,
        Func<TResult> onPostalCode,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Revenue => onRevenue(),
            _ when this == ProfitNet => onProfitNet(),
            _ when this == EstimatedValue => onEstimatedValue(),
            _ when this == TotalAssets => onTotalAssets(),
            _ when this == OperatingCostsTotal => onOperatingCostsTotal(),
            _ when this == FixedAssets => onFixedAssets(),
            _ when this == CurrentAssets => onCurrentAssets(),
            _ when this == Equity => onEquity(),
            _ when this == LiabilitiesAndProvisions => onLiabilitiesAndProvisions(),
            _ when this == Capital => onCapital(),
            _ when this == RegistrationDate => onRegistrationDate(),
            _ when this == RevenueGrowth => onRevenueGrowth(),
            _ when this == Name => onName(),
            _ when this == Nip => onNip(),
            _ when this == Regon => onRegon(),
            _ when this == City => onCity(),
            _ when this == Region => onRegion(),
            _ when this == PostalCode => onPostalCode(),
            _ => otherwise(Value)
        };

    public void Match(Action onRevenue,
        Action onProfitNet,
        Action onEstimatedValue,
        Action onTotalAssets,
        Action onOperatingCostsTotal,
        Action onFixedAssets,
        Action onCurrentAssets,
        Action onEquity,
        Action onLiabilitiesAndProvisions,
        Action onCapital,
        Action onRegistrationDate,
        Action onRevenueGrowth,
        Action onName,
        Action onNip,
        Action onRegon,
        Action onCity,
        Action onRegion,
        Action onPostalCode,
        Action<string> otherwise)
    {
        if (this == Revenue) onRevenue();
        else if (this == ProfitNet) onProfitNet();
        else if (this == EstimatedValue) onEstimatedValue();
        else if (this == TotalAssets) onTotalAssets();
        else if (this == OperatingCostsTotal) onOperatingCostsTotal();
        else if (this == FixedAssets) onFixedAssets();
        else if (this == CurrentAssets) onCurrentAssets();
        else if (this == Equity) onEquity();
        else if (this == LiabilitiesAndProvisions) onLiabilitiesAndProvisions();
        else if (this == Capital) onCapital();
        else if (this == RegistrationDate) onRegistrationDate();
        else if (this == RevenueGrowth) onRevenueGrowth();
        else if (this == Name) onName();
        else if (this == Nip) onNip();
        else if (this == Regon) onRegon();
        else if (this == City) onCity();
        else if (this == Region) onRegion();
        else if (this == PostalCode) onPostalCode();
        else otherwise(Value);
    }
}
