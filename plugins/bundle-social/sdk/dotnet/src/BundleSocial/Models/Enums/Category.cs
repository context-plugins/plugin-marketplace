using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category CategoryUnspecified = new("CATEGORY_UNSPECIFIED");

    public static readonly Category Cover = new("COVER");

    public static readonly Category Profile = new("PROFILE");

    public static readonly Category Logo = new("LOGO");

    public static readonly Category Exterior = new("EXTERIOR");

    public static readonly Category Interior = new("INTERIOR");

    public static readonly Category Product = new("PRODUCT");

    public static readonly Category AtWork = new("AT_WORK");

    public static readonly Category FoodAndDrink = new("FOOD_AND_DRINK");

    public static readonly Category Menu = new("MENU");

    public static readonly Category CommonArea = new("COMMON_AREA");

    public static readonly Category Rooms = new("ROOMS");

    public static readonly Category Teams = new("TEAMS");

    public static readonly Category Additional = new("ADDITIONAL");

    public TResult Match<TResult>(Func<TResult> onCategoryUnspecified,
        Func<TResult> onCover,
        Func<TResult> onProfile,
        Func<TResult> onLogo,
        Func<TResult> onExterior,
        Func<TResult> onInterior,
        Func<TResult> onProduct,
        Func<TResult> onAtWork,
        Func<TResult> onFoodAndDrink,
        Func<TResult> onMenu,
        Func<TResult> onCommonArea,
        Func<TResult> onRooms,
        Func<TResult> onTeams,
        Func<TResult> onAdditional,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CategoryUnspecified => onCategoryUnspecified(),
            _ when this == Cover => onCover(),
            _ when this == Profile => onProfile(),
            _ when this == Logo => onLogo(),
            _ when this == Exterior => onExterior(),
            _ when this == Interior => onInterior(),
            _ when this == Product => onProduct(),
            _ when this == AtWork => onAtWork(),
            _ when this == FoodAndDrink => onFoodAndDrink(),
            _ when this == Menu => onMenu(),
            _ when this == CommonArea => onCommonArea(),
            _ when this == Rooms => onRooms(),
            _ when this == Teams => onTeams(),
            _ when this == Additional => onAdditional(),
            _ => otherwise(Value)
        };

    public void Match(Action onCategoryUnspecified,
        Action onCover,
        Action onProfile,
        Action onLogo,
        Action onExterior,
        Action onInterior,
        Action onProduct,
        Action onAtWork,
        Action onFoodAndDrink,
        Action onMenu,
        Action onCommonArea,
        Action onRooms,
        Action onTeams,
        Action onAdditional,
        Action<string> otherwise)
    {
        if (this == CategoryUnspecified) onCategoryUnspecified();
        else if (this == Cover) onCover();
        else if (this == Profile) onProfile();
        else if (this == Logo) onLogo();
        else if (this == Exterior) onExterior();
        else if (this == Interior) onInterior();
        else if (this == Product) onProduct();
        else if (this == AtWork) onAtWork();
        else if (this == FoodAndDrink) onFoodAndDrink();
        else if (this == Menu) onMenu();
        else if (this == CommonArea) onCommonArea();
        else if (this == Rooms) onRooms();
        else if (this == Teams) onTeams();
        else if (this == Additional) onAdditional();
        else otherwise(Value);
    }
}
