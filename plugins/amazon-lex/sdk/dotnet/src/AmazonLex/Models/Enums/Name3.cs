using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// A category by which the intent analytics were grouped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name3>))]
public sealed record Name3 : OpenStringEnum<Name3>
{
    private Name3(string value) : base(value)
    {
    }

    public static readonly Name3 IntentName = new("IntentName");

    public static readonly Name3 IntentEndState = new("IntentEndState");

    public static readonly Name3 IntentLevel = new("IntentLevel");

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
