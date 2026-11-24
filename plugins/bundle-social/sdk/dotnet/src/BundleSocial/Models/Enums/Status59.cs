using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status59>))]
public sealed record Status59 : OpenStringEnum<Status59>
{
    private Status59(string value) : base(value)
    {
    }

    public static readonly Status59 Draft = new("DRAFT");

    public static readonly Status59 Synced = new("SYNCED");

    public static readonly Status59 SyncFailed = new("SYNC_FAILED");

    public static readonly Status59 Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onSynced,
        Func<TResult> onSyncFailed,
        Func<TResult> onDisabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Synced => onSynced(),
            _ when this == SyncFailed => onSyncFailed(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onSynced, Action onSyncFailed, Action onDisabled, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Synced) onSynced();
        else if (this == SyncFailed) onSyncFailed();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
