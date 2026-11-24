using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Poshmark department filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DepartmentCompSniperMarketplaceAndShippingPoshmarkApi>))]
public sealed record DepartmentCompSniperMarketplaceAndShippingPoshmarkApi : OpenStringEnum<DepartmentCompSniperMarketplaceAndShippingPoshmarkApi>
{
    private DepartmentCompSniperMarketplaceAndShippingPoshmarkApi(string value) : base(value)
    {
    }

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi All = new("all");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Women = new("women");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Men = new("men");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Kids = new("kids");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Home = new("home");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Pets = new("pets");

    public static readonly DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Electronics = new("electronics");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onWomen,
        Func<TResult> onMen,
        Func<TResult> onKids,
        Func<TResult> onHome,
        Func<TResult> onPets,
        Func<TResult> onElectronics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Women => onWomen(),
            _ when this == Men => onMen(),
            _ when this == Kids => onKids(),
            _ when this == Home => onHome(),
            _ when this == Pets => onPets(),
            _ when this == Electronics => onElectronics(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onWomen,
        Action onMen,
        Action onKids,
        Action onHome,
        Action onPets,
        Action onElectronics,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Women) onWomen();
        else if (this == Men) onMen();
        else if (this == Kids) onKids();
        else if (this == Home) onHome();
        else if (this == Pets) onPets();
        else if (this == Electronics) onElectronics();
        else otherwise(Value);
    }
}
