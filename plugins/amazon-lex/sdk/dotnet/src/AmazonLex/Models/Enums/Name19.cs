using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The category by which the utterance analytics were grouped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name19>))]
public sealed record Name19 : OpenStringEnum<Name19>
{
    private Name19(string value) : base(value)
    {
    }

    public static readonly Name19 UtteranceText = new("UtteranceText");

    public static readonly Name19 UtteranceState = new("UtteranceState");

    public TResult Match<TResult>(Func<TResult> onUtteranceText,
        Func<TResult> onUtteranceState,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UtteranceText => onUtteranceText(),
            _ when this == UtteranceState => onUtteranceState(),
            _ => otherwise(Value)
        };

    public void Match(Action onUtteranceText, Action onUtteranceState, Action<string> otherwise)
    {
        if (this == UtteranceText) onUtteranceText();
        else if (this == UtteranceState) onUtteranceState();
        else otherwise(Value);
    }
}
