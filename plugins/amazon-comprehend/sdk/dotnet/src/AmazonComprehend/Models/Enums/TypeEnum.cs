using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The entity type. For entity detection using the built-in model, this field contains one of the standard entity types listed below. For custom entity detection, this field contains one of the entity types that you specified when you trained your custom model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Person = new("PERSON");

    public static readonly TypeEnum Location = new("LOCATION");

    public static readonly TypeEnum Organization = new("ORGANIZATION");

    public static readonly TypeEnum CommercialItem = new("COMMERCIAL_ITEM");

    public static readonly TypeEnum Event = new("EVENT");

    public static readonly TypeEnum Date = new("DATE");

    public static readonly TypeEnum Quantity = new("QUANTITY");

    public static readonly TypeEnum Title = new("TITLE");

    public static readonly TypeEnum Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onPerson,
        Func<TResult> onLocation,
        Func<TResult> onOrganization,
        Func<TResult> onCommercialItem,
        Func<TResult> onEvent,
        Func<TResult> onDate,
        Func<TResult> onQuantity,
        Func<TResult> onTitle,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Person => onPerson(),
            _ when this == Location => onLocation(),
            _ when this == Organization => onOrganization(),
            _ when this == CommercialItem => onCommercialItem(),
            _ when this == Event => onEvent(),
            _ when this == Date => onDate(),
            _ when this == Quantity => onQuantity(),
            _ when this == Title => onTitle(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerson,
        Action onLocation,
        Action onOrganization,
        Action onCommercialItem,
        Action onEvent,
        Action onDate,
        Action onQuantity,
        Action onTitle,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Person) onPerson();
        else if (this == Location) onLocation();
        else if (this == Organization) onOrganization();
        else if (this == CommercialItem) onCommercialItem();
        else if (this == Event) onEvent();
        else if (this == Date) onDate();
        else if (this == Quantity) onQuantity();
        else if (this == Title) onTitle();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
