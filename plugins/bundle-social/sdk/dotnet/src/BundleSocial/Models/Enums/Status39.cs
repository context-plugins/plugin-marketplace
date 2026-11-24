using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status39>))]
public sealed record Status39 : OpenStringEnum<Status39>
{
    private Status39(string value) : base(value)
    {
    }

    public static readonly Status39 Synced = new("SYNCED");

    public static readonly Status39 SyncFailed = new("SYNC_FAILED");

    public static readonly Status39 Unsupported = new("UNSUPPORTED");

    public TResult Match<TResult>(Func<TResult> onSynced,
        Func<TResult> onSyncFailed,
        Func<TResult> onUnsupported,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Synced => onSynced(),
            _ when this == SyncFailed => onSyncFailed(),
            _ when this == Unsupported => onUnsupported(),
            _ => otherwise(Value)
        };

    public void Match(Action onSynced, Action onSyncFailed, Action onUnsupported, Action<string> otherwise)
    {
        if (this == Synced) onSynced();
        else if (this == SyncFailed) onSyncFailed();
        else if (this == Unsupported) onUnsupported();
        else otherwise(Value);
    }
}
