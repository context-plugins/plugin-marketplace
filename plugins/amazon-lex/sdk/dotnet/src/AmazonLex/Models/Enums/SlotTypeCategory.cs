using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates the type of the slot type. Custom - A slot type that you created using custom values. For more information, see Creating custom slot types. Extended - A slot type created by extending the AMAZON.AlphaNumeric built-in slot type. For more information, see AMAZON.AlphaNumeric . ExternalGrammar - A slot type using a custom GRXML grammar to define values. For more information, see Using a custom grammar slot type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotTypeCategory>))]
public sealed record SlotTypeCategory : OpenStringEnum<SlotTypeCategory>
{
    private SlotTypeCategory(string value) : base(value)
    {
    }

    public static readonly SlotTypeCategory Custom = new("Custom");

    public static readonly SlotTypeCategory Extended = new("Extended");

    public static readonly SlotTypeCategory ExternalGrammar = new("ExternalGrammar");

    public static readonly SlotTypeCategory Composite = new("Composite");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onExtended,
        Func<TResult> onExternalGrammar,
        Func<TResult> onComposite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == Extended => onExtended(),
            _ when this == ExternalGrammar => onExternalGrammar(),
            _ when this == Composite => onComposite(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom,
        Action onExtended,
        Action onExternalGrammar,
        Action onComposite,
        Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == Extended) onExtended();
        else if (this == ExternalGrammar) onExternalGrammar();
        else if (this == Composite) onComposite();
        else otherwise(Value);
    }
}
