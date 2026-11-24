using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The entity type. For entity detection using the built-in model, this field contains one of the standard entity types listed below. For custom entity detection, this field contains one of the entity types that you specified when you trained your custom model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2AmazonComprehendOperationsApi>))]
public sealed record Type2AmazonComprehendOperationsApi : OpenStringEnum<Type2AmazonComprehendOperationsApi>
{
    private Type2AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly Type2AmazonComprehendOperationsApi Person = new("PERSON");

    public static readonly Type2AmazonComprehendOperationsApi Location = new("LOCATION");

    public static readonly Type2AmazonComprehendOperationsApi Organization = new("ORGANIZATION");

    public static readonly Type2AmazonComprehendOperationsApi CommercialItem = new("COMMERCIAL_ITEM");

    public static readonly Type2AmazonComprehendOperationsApi Event = new("EVENT");

    public static readonly Type2AmazonComprehendOperationsApi Date = new("DATE");

    public static readonly Type2AmazonComprehendOperationsApi Quantity = new("QUANTITY");

    public static readonly Type2AmazonComprehendOperationsApi Title = new("TITLE");

    public static readonly Type2AmazonComprehendOperationsApi Other = new("OTHER");

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
