using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BusinessType>))]
public sealed record BusinessType : OpenStringEnum<BusinessType>
{
    private BusinessType(string value) : base(value)
    {
    }

    public static readonly BusinessType Ecommerce = new("ecommerce");

    public static readonly BusinessType Retail = new("retail");

    public static readonly BusinessType FoodAndBeverage = new("food_and_beverage");

    public static readonly BusinessType Events = new("events");

    public TResult Match<TResult>(Func<TResult> onEcommerce,
        Func<TResult> onRetail,
        Func<TResult> onFoodAndBeverage,
        Func<TResult> onEvents,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ecommerce => onEcommerce(),
            _ when this == Retail => onRetail(),
            _ when this == FoodAndBeverage => onFoodAndBeverage(),
            _ when this == Events => onEvents(),
            _ => otherwise(Value)
        };

    public void Match(Action onEcommerce,
        Action onRetail,
        Action onFoodAndBeverage,
        Action onEvents,
        Action<string> otherwise)
    {
        if (this == Ecommerce) onEcommerce();
        else if (this == Retail) onRetail();
        else if (this == FoodAndBeverage) onFoodAndBeverage();
        else if (this == Events) onEvents();
        else otherwise(Value);
    }
}
