using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Returns whether or not the tier has any active prices.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionTierInfoStatus>))]
public sealed record SubscriptionTierInfoStatus : OpenStringEnum<SubscriptionTierInfoStatus>
{
    private SubscriptionTierInfoStatus(string value) : base(value)
    {
    }

    public static readonly SubscriptionTierInfoStatus Active = new("active");

    public static readonly SubscriptionTierInfoStatus Archived = new("archived");

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
