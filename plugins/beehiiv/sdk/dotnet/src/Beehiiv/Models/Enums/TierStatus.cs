using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Returns whether or not the tier has any active prices.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TierStatus>))]
public sealed record TierStatus : OpenStringEnum<TierStatus>
{
    private TierStatus(string value) : base(value)
    {
    }

    public static readonly TierStatus Active = new("active");

    public static readonly TierStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
