using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Discriminates plain text ads (<c>RESULT</c>) from shopping-style sponsored cards (<c>SHOPPING_CARD</c>). Shopping cards appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and the top-of-page sponsored shopping-card carousels (vehicles, products, hotels, …).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Result = new("RESULT");

    public static readonly Type1 ShoppingCard = new("SHOPPING_CARD");

    public TResult Match<TResult>(Func<TResult> onResult,
        Func<TResult> onShoppingCard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Result => onResult(),
            _ when this == ShoppingCard => onShoppingCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onResult, Action onShoppingCard, Action<string> otherwise)
    {
        if (this == Result) onResult();
        else if (this == ShoppingCard) onShoppingCard();
        else otherwise(Value);
    }
}
