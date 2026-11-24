using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Collection>))]
public sealed record Collection : OpenStringEnum<Collection>
{
    private Collection(string value) : base(value)
    {
    }

    public static readonly Collection Free = new("Free");

    public static readonly Collection Grossing = new("Grossing");

    public static readonly Collection Paid = new("Paid");

    public static readonly Collection TopsellingFree = new("topselling_free");

    public static readonly Collection Topgrossing = new("topgrossing");

    public static readonly Collection TopsellingPaid = new("topselling_paid");

    public static readonly Collection TopsellingNewFree = new("topselling_new_free");

    public static readonly Collection TopsellingNewPaid = new("topselling_new_paid");

    public static readonly Collection MoversShakers = new("movers_shakers");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onGrossing,
        Func<TResult> onPaid,
        Func<TResult> onTopsellingFree,
        Func<TResult> onTopgrossing,
        Func<TResult> onTopsellingPaid,
        Func<TResult> onTopsellingNewFree,
        Func<TResult> onTopsellingNewPaid,
        Func<TResult> onMoversShakers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Grossing => onGrossing(),
            _ when this == Paid => onPaid(),
            _ when this == TopsellingFree => onTopsellingFree(),
            _ when this == Topgrossing => onTopgrossing(),
            _ when this == TopsellingPaid => onTopsellingPaid(),
            _ when this == TopsellingNewFree => onTopsellingNewFree(),
            _ when this == TopsellingNewPaid => onTopsellingNewPaid(),
            _ when this == MoversShakers => onMoversShakers(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree,
        Action onGrossing,
        Action onPaid,
        Action onTopsellingFree,
        Action onTopgrossing,
        Action onTopsellingPaid,
        Action onTopsellingNewFree,
        Action onTopsellingNewPaid,
        Action onMoversShakers,
        Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Grossing) onGrossing();
        else if (this == Paid) onPaid();
        else if (this == TopsellingFree) onTopsellingFree();
        else if (this == Topgrossing) onTopgrossing();
        else if (this == TopsellingPaid) onTopsellingPaid();
        else if (this == TopsellingNewFree) onTopsellingNewFree();
        else if (this == TopsellingNewPaid) onTopsellingNewPaid();
        else if (this == MoversShakers) onMoversShakers();
        else otherwise(Value);
    }
}
