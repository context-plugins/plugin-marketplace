using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operational status of the replicated bot generated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotReplicaStatus1>))]
public sealed record BotReplicaStatus1 : OpenStringEnum<BotReplicaStatus1>
{
    private BotReplicaStatus1(string value) : base(value)
    {
    }

    public static readonly BotReplicaStatus1 Enabling = new("Enabling");

    public static readonly BotReplicaStatus1 Enabled = new("Enabled");

    public static readonly BotReplicaStatus1 Deleting = new("Deleting");

    public static readonly BotReplicaStatus1 Failed = new("Failed");

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
