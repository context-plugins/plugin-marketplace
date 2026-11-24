using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Sub-type discriminator. TEXT ads carry <c>domain</c> + <c>description</c>; SHOPPING ads carry <c>price</c> + <c>store</c> (+ optional <c>old_price</c>). Always present.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Text = new("TEXT");

    public static readonly Type2 Shopping = new("SHOPPING");

    public TResult Match<TResult>(Func<TResult> onText, Func<TResult> onShopping, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Shopping => onShopping(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onShopping, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Shopping) onShopping();
        else otherwise(Value);
    }
}
