using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Delete card reason
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserDeletedReasonType>))]
public sealed record UserDeletedReasonType : OpenStringEnum<UserDeletedReasonType>
{
    private UserDeletedReasonType(string value) : base(value)
    {
    }

    public static readonly UserDeletedReasonType Cancelled = new("CANCELLED");

    public static readonly UserDeletedReasonType Lost = new("LOST");

    public static readonly UserDeletedReasonType Stolen = new("STOLEN");

    public static readonly UserDeletedReasonType Misplaced = new("MISPLACED");

    public TResult Match<TResult>(Func<TResult> onCancelled,
        Func<TResult> onLost,
        Func<TResult> onStolen,
        Func<TResult> onMisplaced,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cancelled => onCancelled(),
            _ when this == Lost => onLost(),
            _ when this == Stolen => onStolen(),
            _ when this == Misplaced => onMisplaced(),
            _ => otherwise(Value)
        };

    public void Match(Action onCancelled, Action onLost, Action onStolen, Action onMisplaced, Action<string> otherwise)
    {
        if (this == Cancelled) onCancelled();
        else if (this == Lost) onLost();
        else if (this == Stolen) onStolen();
        else if (this == Misplaced) onMisplaced();
        else otherwise(Value);
    }
}
