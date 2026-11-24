using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The version replication status for all the replicated bots.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotVersionReplicationStatus>))]
public sealed record BotVersionReplicationStatus : OpenStringEnum<BotVersionReplicationStatus>
{
    private BotVersionReplicationStatus(string value) : base(value)
    {
    }

    public static readonly BotVersionReplicationStatus Creating = new("Creating");

    public static readonly BotVersionReplicationStatus Available = new("Available");

    public static readonly BotVersionReplicationStatus Deleting = new("Deleting");

    public static readonly BotVersionReplicationStatus Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onAvailable,
        Action onDeleting,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
