using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for different ways to do mfa setup.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MfaSetupType>))]
public sealed record MfaSetupType : OpenStringEnum<MfaSetupType>
{
    private MfaSetupType(string value) : base(value)
    {
    }

    public static readonly MfaSetupType Voice = new("VOICE");

    public static readonly MfaSetupType Text = new("TEXT");

    public TResult Match<TResult>(Func<TResult> onVoice, Func<TResult> onText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Voice => onVoice(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onVoice, Action onText, Action<string> otherwise)
    {
        if (this == Voice) onVoice();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
