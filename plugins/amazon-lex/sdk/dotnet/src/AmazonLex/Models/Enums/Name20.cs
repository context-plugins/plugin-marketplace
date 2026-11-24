using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to group the utterances by their text or their state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name20>))]
public sealed record Name20 : OpenStringEnum<Name20>
{
    private Name20(string value) : base(value)
    {
    }

    public static readonly Name20 UtteranceText = new("UtteranceText");

    public static readonly Name20 UtteranceState = new("UtteranceState");

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
