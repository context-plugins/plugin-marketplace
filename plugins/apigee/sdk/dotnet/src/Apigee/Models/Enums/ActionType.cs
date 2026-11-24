using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the action.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionType>))]
public sealed record ActionType : OpenStringEnum<ActionType>
{
    private ActionType(string value) : base(value)
    {
    }

    public static readonly ActionType ActionTypeUnspecified = new("ACTION_TYPE_UNSPECIFIED");

    public static readonly ActionType SyncMetadata = new("SYNC_METADATA");

    public static readonly ActionType SyncRuntimeData = new("SYNC_RUNTIME_DATA");

    public TResult Match<TResult>(Func<TResult> onActionTypeUnspecified,
        Func<TResult> onSyncMetadata,
        Func<TResult> onSyncRuntimeData,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActionTypeUnspecified => onActionTypeUnspecified(),
            _ when this == SyncMetadata => onSyncMetadata(),
            _ when this == SyncRuntimeData => onSyncRuntimeData(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionTypeUnspecified,
        Action onSyncMetadata,
        Action onSyncRuntimeData,
        Action<string> otherwise)
    {
        if (this == ActionTypeUnspecified) onActionTypeUnspecified();
        else if (this == SyncMetadata) onSyncMetadata();
        else if (this == SyncRuntimeData) onSyncRuntimeData();
        else otherwise(Value);
    }
}
