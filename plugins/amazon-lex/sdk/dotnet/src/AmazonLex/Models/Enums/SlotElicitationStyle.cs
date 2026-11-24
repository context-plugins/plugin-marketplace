using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can spell out their input to make it clear to your bot. Spell by letter - "b" "o" "b" Spell by word - "b as in boy" "o as in oscar" "b as in boy" For more information, see Using spelling to enter slot values .
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotElicitationStyle>))]
public sealed record SlotElicitationStyle : OpenStringEnum<SlotElicitationStyle>
{
    private SlotElicitationStyle(string value) : base(value)
    {
    }

    public static readonly SlotElicitationStyle Default = new("Default");

    public static readonly SlotElicitationStyle SpellByLetter = new("SpellByLetter");

    public static readonly SlotElicitationStyle SpellByWord = new("SpellByWord");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onSpellByLetter,
        Func<TResult> onSpellByWord,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == SpellByLetter => onSpellByLetter(),
            _ when this == SpellByWord => onSpellByWord(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault, Action onSpellByLetter, Action onSpellByWord, Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == SpellByLetter) onSpellByLetter();
        else if (this == SpellByWord) onSpellByWord();
        else otherwise(Value);
    }
}
