using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the alias. The alias is first put into the Creating state. When the alias is ready to be used, it is put into the Available state. You can use the DescribeBotAlias operation to get the current state of an alias.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotAliasStatus1>))]
public sealed record BotAliasStatus1 : OpenStringEnum<BotAliasStatus1>
{
    private BotAliasStatus1(string value) : base(value)
    {
    }

    public static readonly BotAliasStatus1 Creating = new("Creating");

    public static readonly BotAliasStatus1 Available = new("Available");

    public static readonly BotAliasStatus1 Deleting = new("Deleting");

    public static readonly BotAliasStatus1 Failed = new("Failed");

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
