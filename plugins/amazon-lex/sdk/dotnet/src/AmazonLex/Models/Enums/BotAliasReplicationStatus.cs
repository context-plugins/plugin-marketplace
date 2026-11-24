using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The replication statuses for all the alias bot replications.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAliasReplicationStatus>))]
public sealed record BotAliasReplicationStatus : OpenStringEnum<BotAliasReplicationStatus>
{
    private BotAliasReplicationStatus(string value) : base(value)
    {
    }

    public static readonly BotAliasReplicationStatus Creating = new("Creating");

    public static readonly BotAliasReplicationStatus Updating = new("Updating");

    public static readonly BotAliasReplicationStatus Available = new("Available");

    public static readonly BotAliasReplicationStatus Deleting = new("Deleting");

    public static readonly BotAliasReplicationStatus Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onUpdating,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Updating => onUpdating(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onUpdating,
        Action onAvailable,
        Action onDeleting,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Updating) onUpdating();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
