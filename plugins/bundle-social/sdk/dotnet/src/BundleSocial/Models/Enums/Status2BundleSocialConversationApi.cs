using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2BundleSocialConversationApi>))]
public sealed record Status2BundleSocialConversationApi : OpenStringEnum<Status2BundleSocialConversationApi>
{
    private Status2BundleSocialConversationApi(string value) : base(value)
    {
    }

    public static readonly Status2BundleSocialConversationApi Synced = new("SYNCED");

    public static readonly Status2BundleSocialConversationApi SyncFailed = new("SYNC_FAILED");

    public static readonly Status2BundleSocialConversationApi Unsupported = new("UNSUPPORTED");

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
