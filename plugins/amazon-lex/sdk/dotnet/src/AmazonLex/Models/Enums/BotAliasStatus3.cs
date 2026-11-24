using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the alias. When the alias is Available, the alias is ready for use with your bot.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAliasStatus3>))]
public sealed record BotAliasStatus3 : OpenStringEnum<BotAliasStatus3>
{
    private BotAliasStatus3(string value) : base(value)
    {
    }

    public static readonly BotAliasStatus3 Creating = new("Creating");

    public static readonly BotAliasStatus3 Available = new("Available");

    public static readonly BotAliasStatus3 Deleting = new("Deleting");

    public static readonly BotAliasStatus3 Failed = new("Failed");

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
