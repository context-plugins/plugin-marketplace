using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the bot alias. When the status is Available the alias is ready for use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAliasStatus4>))]
public sealed record BotAliasStatus4 : OpenStringEnum<BotAliasStatus4>
{
    private BotAliasStatus4(string value) : base(value)
    {
    }

    public static readonly BotAliasStatus4 Creating = new("Creating");

    public static readonly BotAliasStatus4 Available = new("Available");

    public static readonly BotAliasStatus4 Deleting = new("Deleting");

    public static readonly BotAliasStatus4 Failed = new("Failed");

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
