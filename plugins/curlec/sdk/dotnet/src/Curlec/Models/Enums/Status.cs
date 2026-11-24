using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// open: action required. under_review: evidence submitted, awaiting bank decision. won: resolved in your favour. lost: resolved against you. closed: resolved without chargeback.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Open = new("open");

    public static readonly Status UnderReview = new("under_review");

    public static readonly Status Won = new("won");

    public static readonly Status Lost = new("lost");

    public static readonly Status Closed = new("closed");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onUnderReview,
        Func<TResult> onWon,
        Func<TResult> onLost,
        Func<TResult> onClosed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == UnderReview => onUnderReview(),
            _ when this == Won => onWon(),
            _ when this == Lost => onLost(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onUnderReview,
        Action onWon,
        Action onLost,
        Action onClosed,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == UnderReview) onUnderReview();
        else if (this == Won) onWon();
        else if (this == Lost) onLost();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
