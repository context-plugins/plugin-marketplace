using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details of the card payment method used to process the transaction.
/// <para>
/// The possible enums are:
/// </para>
/// <list type="bullet">
///   <item><description>UNKNOWN - The method by which the payment card was used is unknown.</description></item>
///   <item><description>SWIPED - The card was swiped through a POS terminal.</description></item>
///   <item><description>CONTACTLESS - The payment was made by tapping a card on a POS terminal.</description></item>
///   <item><description>CHIP_ENTRY - The payment card was inserted into a card reader.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntryMode>))]
public sealed record EntryMode : OpenStringEnum<EntryMode>
{
    private EntryMode(string value) : base(value)
    {
    }

    public static readonly EntryMode Unknown = new("UNKNOWN");

    public static readonly EntryMode Swiped = new("SWIPED");

    public static readonly EntryMode Contactless = new("CONTACTLESS");

    public static readonly EntryMode ChipEntry = new("CHIP_ENTRY");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onSwiped,
        Func<TResult> onContactless,
        Func<TResult> onChipEntry,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == Swiped => onSwiped(),
            _ when this == Contactless => onContactless(),
            _ when this == ChipEntry => onChipEntry(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onSwiped,
        Action onContactless,
        Action onChipEntry,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == Swiped) onSwiped();
        else if (this == Contactless) onContactless();
        else if (this == ChipEntry) onChipEntry();
        else otherwise(Value);
    }
}
