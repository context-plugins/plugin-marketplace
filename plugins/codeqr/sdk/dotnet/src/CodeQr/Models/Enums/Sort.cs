using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The field to sort the links by. The default is <c>createdAt</c>, and sort order is always descending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort CreatedAt = new("createdAt");

    public static readonly Sort Clicks = new("clicks");

    public static readonly Sort LastClicked = new("lastClicked");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onClicks,
        Func<TResult> onLastClicked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == Clicks => onClicks(),
            _ when this == LastClicked => onLastClicked(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onClicks, Action onLastClicked, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == Clicks) onClicks();
        else if (this == LastClicked) onLastClicked();
        else otherwise(Value);
    }
}
