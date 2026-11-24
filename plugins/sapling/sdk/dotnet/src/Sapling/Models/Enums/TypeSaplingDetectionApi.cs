using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeSaplingDetectionApi>))]
public sealed record TypeSaplingDetectionApi : OpenStringEnum<TypeSaplingDetectionApi>
{
    private TypeSaplingDetectionApi(string value) : base(value)
    {
    }

    public static readonly TypeSaplingDetectionApi Person = new("person");

    public static readonly TypeSaplingDetectionApi Organization = new("organization");

    public static readonly TypeSaplingDetectionApi Location = new("location");

    public static readonly TypeSaplingDetectionApi Date = new("date");

    public static readonly TypeSaplingDetectionApi Time = new("time");

    public static readonly TypeSaplingDetectionApi Money = new("money");

    public static readonly TypeSaplingDetectionApi Percent = new("percent");

    public static readonly TypeSaplingDetectionApi Quantity = new("quantity");

    public static readonly TypeSaplingDetectionApi Product = new("product");

    public static readonly TypeSaplingDetectionApi Event = new("event");

    public TResult Match<TResult>(Func<TResult> onPerson,
        Func<TResult> onOrganization,
        Func<TResult> onLocation,
        Func<TResult> onDate,
        Func<TResult> onTime,
        Func<TResult> onMoney,
        Func<TResult> onPercent,
        Func<TResult> onQuantity,
        Func<TResult> onProduct,
        Func<TResult> onEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Person => onPerson(),
            _ when this == Organization => onOrganization(),
            _ when this == Location => onLocation(),
            _ when this == Date => onDate(),
            _ when this == Time => onTime(),
            _ when this == Money => onMoney(),
            _ when this == Percent => onPercent(),
            _ when this == Quantity => onQuantity(),
            _ when this == Product => onProduct(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerson,
        Action onOrganization,
        Action onLocation,
        Action onDate,
        Action onTime,
        Action onMoney,
        Action onPercent,
        Action onQuantity,
        Action onProduct,
        Action onEvent,
        Action<string> otherwise)
    {
        if (this == Person) onPerson();
        else if (this == Organization) onOrganization();
        else if (this == Location) onLocation();
        else if (this == Date) onDate();
        else if (this == Time) onTime();
        else if (this == Money) onMoney();
        else if (this == Percent) onPercent();
        else if (this == Quantity) onQuantity();
        else if (this == Product) onProduct();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
