using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of entity that initiated the <c>Transfer Attempt</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType6>))]
public sealed record EntityType6 : OpenStringEnum<EntityType6>
{
    private EntityType6(string value) : base(value)
    {
    }

    public static readonly EntityType6 PayoutLink = new("PAYOUT_LINK");

    public TResult Match<TResult>(Func<TResult> onPayoutLink, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayoutLink => onPayoutLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayoutLink, Action<string> otherwise)
    {
        if (this == PayoutLink) onPayoutLink();
        else otherwise(Value);
    }
}
