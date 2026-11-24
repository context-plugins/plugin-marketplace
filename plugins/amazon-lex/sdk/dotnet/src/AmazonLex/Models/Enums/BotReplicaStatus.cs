using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operation status for the replicated bot applicable.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotReplicaStatus>))]
public sealed record BotReplicaStatus : OpenStringEnum<BotReplicaStatus>
{
    private BotReplicaStatus(string value) : base(value)
    {
    }

    public static readonly BotReplicaStatus Enabling = new("Enabling");

    public static readonly BotReplicaStatus Enabled = new("Enabled");

    public static readonly BotReplicaStatus Deleting = new("Deleting");

    public static readonly BotReplicaStatus Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onEnabling,
        Func<TResult> onEnabled,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enabling => onEnabling(),
            _ when this == Enabled => onEnabled(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnabling, Action onEnabled, Action onDeleting, Action onFailed, Action<string> otherwise)
    {
        if (this == Enabling) onEnabling();
        else if (this == Enabled) onEnabled();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
