using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When you send a request to create or update a bot, Amazon Lex sets the status response element to Creating. After Amazon Lex builds the bot, it sets status to Available. If Amazon Lex can't build the bot, it sets status to Failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotStatus3>))]
public sealed record BotStatus3 : OpenStringEnum<BotStatus3>
{
    private BotStatus3(string value) : base(value)
    {
    }

    public static readonly BotStatus3 Creating = new("Creating");

    public static readonly BotStatus3 Available = new("Available");

    public static readonly BotStatus3 Inactive = new("Inactive");

    public static readonly BotStatus3 Deleting = new("Deleting");

    public static readonly BotStatus3 Failed = new("Failed");

    public static readonly BotStatus3 Versioning = new("Versioning");

    public static readonly BotStatus3 Importing = new("Importing");

    public static readonly BotStatus3 Updating = new("Updating");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onAvailable,
        Func<TResult> onInactive,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<TResult> onVersioning,
        Func<TResult> onImporting,
        Func<TResult> onUpdating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Available => onAvailable(),
            _ when this == Inactive => onInactive(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ when this == Versioning => onVersioning(),
            _ when this == Importing => onImporting(),
            _ when this == Updating => onUpdating(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onAvailable,
        Action onInactive,
        Action onDeleting,
        Action onFailed,
        Action onVersioning,
        Action onImporting,
        Action onUpdating,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Available) onAvailable();
        else if (this == Inactive) onInactive();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else if (this == Versioning) onVersioning();
        else if (this == Importing) onImporting();
        else if (this == Updating) onUpdating();
        else otherwise(Value);
    }
}
