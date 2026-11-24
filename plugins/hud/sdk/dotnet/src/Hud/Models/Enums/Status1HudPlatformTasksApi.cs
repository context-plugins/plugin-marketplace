using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1HudPlatformTasksApi>))]
public sealed record Status1HudPlatformTasksApi : OpenStringEnum<Status1HudPlatformTasksApi>
{
    private Status1HudPlatformTasksApi(string value) : base(value)
    {
    }

    public static readonly Status1HudPlatformTasksApi Pending = new("pending");

    public static readonly Status1HudPlatformTasksApi Ready = new("ready");

    public static readonly Status1HudPlatformTasksApi Verified = new("verified");

    public static readonly Status1HudPlatformTasksApi Revision = new("revision");

    public static readonly Status1HudPlatformTasksApi Rejected = new("rejected");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onReady,
        Func<TResult> onVerified,
        Func<TResult> onRevision,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Ready => onReady(),
            _ when this == Verified => onVerified(),
            _ when this == Revision => onRevision(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onReady,
        Action onVerified,
        Action onRevision,
        Action onRejected,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Ready) onReady();
        else if (this == Verified) onVerified();
        else if (this == Revision) onRevision();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
