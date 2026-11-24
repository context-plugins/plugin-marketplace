using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to group the intent stages by their name or their end state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name4>))]
public sealed record Name4 : OpenStringEnum<Name4>
{
    private Name4(string value) : base(value)
    {
    }

    public static readonly Name4 IntentName = new("IntentName");

    public static readonly Name4 IntentEndState = new("IntentEndState");

    public static readonly Name4 IntentLevel = new("IntentLevel");

    public TResult Match<TResult>(Func<TResult> onIntentName,
        Func<TResult> onIntentEndState,
        Func<TResult> onIntentLevel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IntentName => onIntentName(),
            _ when this == IntentEndState => onIntentEndState(),
            _ when this == IntentLevel => onIntentLevel(),
            _ => otherwise(Value)
        };

    public void Match(Action onIntentName, Action onIntentEndState, Action onIntentLevel, Action<string> otherwise)
    {
        if (this == IntentName) onIntentName();
        else if (this == IntentEndState) onIntentEndState();
        else if (this == IntentLevel) onIntentLevel();
        else otherwise(Value);
    }
}
