using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// MFA status of the organization.
/// * <c>DISABLED</c>: MFA is disabled for the organization.
/// * <c>SETUP</c>: MFA setup is incomplete. Validate phone to complete MFA setup.
/// * <c>CHALLENGE</c>: MFA setup is complete. MFA challenge is required for MFA sign in.
/// * <c>COMPLETE</c>: Both MFA setup and MFA sign in steps are complete. The API session is MFA trusted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MfaStatus2>))]
public sealed record MfaStatus2 : OpenStringEnum<MfaStatus2>
{
    private MfaStatus2(string value) : base(value)
    {
    }

    public static readonly MfaStatus2 Disabled = new("DISABLED");

    public static readonly MfaStatus2 Setup = new("SETUP");

    public static readonly MfaStatus2 Challenge = new("CHALLENGE");

    public static readonly MfaStatus2 Complete = new("COMPLETE");

    public static readonly MfaStatus2 Undefined = new("UNDEFINED");

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
