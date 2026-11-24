using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MfaStatus>))]
public sealed record MfaStatus : OpenStringEnum<MfaStatus>
{
    private MfaStatus(string value) : base(value)
    {
    }

    public static readonly MfaStatus Disabled = new("DISABLED");

    public static readonly MfaStatus Setup = new("SETUP");

    public static readonly MfaStatus Challenge = new("CHALLENGE");

    public static readonly MfaStatus Complete = new("COMPLETE");

    public static readonly MfaStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onSetup,
        Func<TResult> onChallenge,
        Func<TResult> onComplete,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == Setup => onSetup(),
            _ when this == Challenge => onChallenge(),
            _ when this == Complete => onComplete(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled,
        Action onSetup,
        Action onChallenge,
        Action onComplete,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == Setup) onSetup();
        else if (this == Challenge) onChallenge();
        else if (this == Complete) onComplete();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
