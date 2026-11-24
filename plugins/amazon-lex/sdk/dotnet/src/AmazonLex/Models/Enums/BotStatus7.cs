using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the bot. When the status is Available, the bot version is ready for use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotStatus7>))]
public sealed record BotStatus7 : OpenStringEnum<BotStatus7>
{
    private BotStatus7(string value) : base(value)
    {
    }

    public static readonly BotStatus7 Creating = new("Creating");

    public static readonly BotStatus7 Available = new("Available");

    public static readonly BotStatus7 Inactive = new("Inactive");

    public static readonly BotStatus7 Deleting = new("Deleting");

    public static readonly BotStatus7 Failed = new("Failed");

    public static readonly BotStatus7 Versioning = new("Versioning");

    public static readonly BotStatus7 Importing = new("Importing");

    public static readonly BotStatus7 Updating = new("Updating");

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
