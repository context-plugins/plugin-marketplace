using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to group the intent stages by their name or the intent to which the session was switched.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name9>))]
public sealed record Name9 : OpenStringEnum<Name9>
{
    private Name9(string value) : base(value)
    {
    }

    public static readonly Name9 IntentStageName = new("IntentStageName");

    public static readonly Name9 SwitchedToIntent = new("SwitchedToIntent");

    public TResult Match<TResult>(Func<TResult> onIntentStageName,
        Func<TResult> onSwitchedToIntent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IntentStageName => onIntentStageName(),
            _ when this == SwitchedToIntent => onSwitchedToIntent(),
            _ => otherwise(Value)
        };

    public void Match(Action onIntentStageName, Action onSwitchedToIntent, Action<string> otherwise)
    {
        if (this == IntentStageName) onIntentStageName();
        else if (this == SwitchedToIntent) onSwitchedToIntent();
        else otherwise(Value);
    }
}
