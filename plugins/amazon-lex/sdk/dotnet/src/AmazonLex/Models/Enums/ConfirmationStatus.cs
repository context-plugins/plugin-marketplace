using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the intent after the user responds to the confirmation prompt. If the user confirms the intent, Amazon Lex sets this field to Confirmed. If the user denies the intent, Amazon Lex sets this value to Denied. The possible values are: Confirmed - The user has responded "Yes" to the confirmation prompt, confirming that the intent is complete and that it is ready to be fulfilled. Denied - The user has responded "No" to the confirmation prompt. None - The user has never been prompted for confirmation; or, the user was prompted but did not confirm or deny the prompt.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConfirmationStatus>))]
public sealed record ConfirmationStatus : OpenStringEnum<ConfirmationStatus>
{
    private ConfirmationStatus(string value) : base(value)
    {
    }

    public static readonly ConfirmationStatus None = new("None");

    public static readonly ConfirmationStatus Confirmed = new("Confirmed");

    public static readonly ConfirmationStatus Denied = new("Denied");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onConfirmed,
        Func<TResult> onDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Confirmed => onConfirmed(),
            _ when this == Denied => onDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onConfirmed, Action onDenied, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Confirmed) onConfirmed();
        else if (this == Denied) onDenied();
        else otherwise(Value);
    }
}
