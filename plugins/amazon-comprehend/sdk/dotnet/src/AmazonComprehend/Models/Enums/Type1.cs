using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The type of the entity. Amazon Comprehend supports a variety of entity types.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Person = new("PERSON");

    public static readonly Type1 Location = new("LOCATION");

    public static readonly Type1 Organization = new("ORGANIZATION");

    public static readonly Type1 Facility = new("FACILITY");

    public static readonly Type1 Brand = new("BRAND");

    public static readonly Type1 CommercialItem = new("COMMERCIAL_ITEM");

    public static readonly Type1 Movie = new("MOVIE");

    public static readonly Type1 Music = new("MUSIC");

    public static readonly Type1 Book = new("BOOK");

    public static readonly Type1 Software = new("SOFTWARE");

    public static readonly Type1 Game = new("GAME");

    public static readonly Type1 PersonalTitle = new("PERSONAL_TITLE");

    public static readonly Type1 Event = new("EVENT");

    public static readonly Type1 Date = new("DATE");

    public static readonly Type1 Quantity = new("QUANTITY");

    public static readonly Type1 Attribute = new("ATTRIBUTE");

    public static readonly Type1 Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onPerson,
        Func<TResult> onLocation,
        Func<TResult> onOrganization,
        Func<TResult> onFacility,
        Func<TResult> onBrand,
        Func<TResult> onCommercialItem,
        Func<TResult> onMovie,
        Func<TResult> onMusic,
        Func<TResult> onBook,
        Func<TResult> onSoftware,
        Func<TResult> onGame,
        Func<TResult> onPersonalTitle,
        Func<TResult> onEvent,
        Func<TResult> onDate,
        Func<TResult> onQuantity,
        Func<TResult> onAttribute,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Person => onPerson(),
            _ when this == Location => onLocation(),
            _ when this == Organization => onOrganization(),
            _ when this == Facility => onFacility(),
            _ when this == Brand => onBrand(),
            _ when this == CommercialItem => onCommercialItem(),
            _ when this == Movie => onMovie(),
            _ when this == Music => onMusic(),
            _ when this == Book => onBook(),
            _ when this == Software => onSoftware(),
            _ when this == Game => onGame(),
            _ when this == PersonalTitle => onPersonalTitle(),
            _ when this == Event => onEvent(),
            _ when this == Date => onDate(),
            _ when this == Quantity => onQuantity(),
            _ when this == Attribute => onAttribute(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerson,
        Action onLocation,
        Action onOrganization,
        Action onFacility,
        Action onBrand,
        Action onCommercialItem,
        Action onMovie,
        Action onMusic,
        Action onBook,
        Action onSoftware,
        Action onGame,
        Action onPersonalTitle,
        Action onEvent,
        Action onDate,
        Action onQuantity,
        Action onAttribute,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Person) onPerson();
        else if (this == Location) onLocation();
        else if (this == Organization) onOrganization();
        else if (this == Facility) onFacility();
        else if (this == Brand) onBrand();
        else if (this == CommercialItem) onCommercialItem();
        else if (this == Movie) onMovie();
        else if (this == Music) onMusic();
        else if (this == Book) onBook();
        else if (this == Software) onSoftware();
        else if (this == Game) onGame();
        else if (this == PersonalTitle) onPersonalTitle();
        else if (this == Event) onEvent();
        else if (this == Date) onDate();
        else if (this == Quantity) onQuantity();
        else if (this == Attribute) onAttribute();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
