using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the alias. The status is Deleting while the alias is in the process of being deleted. Once the alias is deleted, it will no longer appear in the list of aliases returned by the ListBotAliases operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAliasStatus2>))]
public sealed record BotAliasStatus2 : OpenStringEnum<BotAliasStatus2>
{
    private BotAliasStatus2(string value) : base(value)
    {
    }

    public static readonly BotAliasStatus2 Creating = new("Creating");

    public static readonly BotAliasStatus2 Available = new("Available");

    public static readonly BotAliasStatus2 Deleting = new("Deleting");

    public static readonly BotAliasStatus2 Failed = new("Failed");

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
