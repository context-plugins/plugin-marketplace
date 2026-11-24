using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Canonical task workflow state.
/// <para>
/// Lives in the kernel so both the DB layer (orm.py pg enum) and the decision
/// core (tasks.state) depend downward on it.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaskState>))]
public sealed record TaskState : OpenStringEnum<TaskState>
{
    private TaskState(string value) : base(value)
    {
    }

    public static readonly TaskState Draft = new("draft");

    public static readonly TaskState Pending = new("pending");

    public static readonly TaskState Ready = new("ready");

    public static readonly TaskState Verified = new("verified");

    public static readonly TaskState Revision = new("revision");

    public static readonly TaskState Rejected = new("rejected");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPending,
        Func<TResult> onReady,
        Func<TResult> onVerified,
        Func<TResult> onRevision,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Pending => onPending(),
            _ when this == Ready => onReady(),
            _ when this == Verified => onVerified(),
            _ when this == Revision => onRevision(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onPending,
        Action onReady,
        Action onVerified,
        Action onRevision,
        Action onRejected,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Pending) onPending();
        else if (this == Ready) onReady();
        else if (this == Verified) onVerified();
        else if (this == Revision) onRevision();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
