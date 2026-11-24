using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// A category by which the intent stage analytics were grouped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name8>))]
public sealed record Name8 : OpenStringEnum<Name8>
{
    private Name8(string value) : base(value)
    {
    }

    public static readonly Name8 IntentStageName = new("IntentStageName");

    public static readonly Name8 SwitchedToIntent = new("SwitchedToIntent");

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
