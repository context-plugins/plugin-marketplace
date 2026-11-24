using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AutomationStatus>))]
public sealed record AutomationStatus : OpenStringEnum<AutomationStatus>
{
    private AutomationStatus(string value) : base(value)
    {
    }

    public static readonly AutomationStatus Running = new("running");

    public static readonly AutomationStatus Finishing = new("finishing");

    public static readonly AutomationStatus Inactive = new("inactive");

    public static readonly AutomationStatus Live = new("live");

    public static readonly AutomationStatus Draft = new("draft");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onFinishing,
        Func<TResult> onInactive,
        Func<TResult> onLive,
        Func<TResult> onDraft,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Finishing => onFinishing(),
            _ when this == Inactive => onInactive(),
            _ when this == Live => onLive(),
            _ when this == Draft => onDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning,
        Action onFinishing,
        Action onInactive,
        Action onLive,
        Action onDraft,
        Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Finishing) onFinishing();
        else if (this == Inactive) onInactive();
        else if (this == Live) onLive();
        else if (this == Draft) onDraft();
        else otherwise(Value);
    }
}
