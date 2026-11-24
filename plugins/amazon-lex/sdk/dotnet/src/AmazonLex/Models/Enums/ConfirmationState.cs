using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether the intent has been Confirmed, Denied, or None if the confirmation stage has not yet been reached.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConfirmationState>))]
public sealed record ConfirmationState : OpenStringEnum<ConfirmationState>
{
    private ConfirmationState(string value) : base(value)
    {
    }

    public static readonly ConfirmationState Confirmed = new("Confirmed");

    public static readonly ConfirmationState Denied = new("Denied");

    public static readonly ConfirmationState None = new("None");

    public TResult Match<TResult>(Func<TResult> onConfirmed,
        Func<TResult> onDenied,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Confirmed => onConfirmed(),
            _ when this == Denied => onDenied(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onConfirmed, Action onDenied, Action onNone, Action<string> otherwise)
    {
        if (this == Confirmed) onConfirmed();
        else if (this == Denied) onDenied();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
