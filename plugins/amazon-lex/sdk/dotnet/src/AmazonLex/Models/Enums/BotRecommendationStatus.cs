using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BotRecommendationStatus>))]
public sealed record BotRecommendationStatus : OpenStringEnum<BotRecommendationStatus>
{
    private BotRecommendationStatus(string value) : base(value)
    {
    }

    public static readonly BotRecommendationStatus Processing = new("Processing");

    public static readonly BotRecommendationStatus Deleting = new("Deleting");

    public static readonly BotRecommendationStatus Deleted = new("Deleted");

    public static readonly BotRecommendationStatus Downloading = new("Downloading");

    public static readonly BotRecommendationStatus Updating = new("Updating");

    public static readonly BotRecommendationStatus Available = new("Available");

    public static readonly BotRecommendationStatus Failed = new("Failed");

    public static readonly BotRecommendationStatus Stopping = new("Stopping");

    public static readonly BotRecommendationStatus Stopped = new("Stopped");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<TResult> onDownloading,
        Func<TResult> onUpdating,
        Func<TResult> onAvailable,
        Func<TResult> onFailed,
        Func<TResult> onStopping,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ when this == Downloading => onDownloading(),
            _ when this == Updating => onUpdating(),
            _ when this == Available => onAvailable(),
            _ when this == Failed => onFailed(),
            _ when this == Stopping => onStopping(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing,
        Action onDeleting,
        Action onDeleted,
        Action onDownloading,
        Action onUpdating,
        Action onAvailable,
        Action onFailed,
        Action onStopping,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else if (this == Downloading) onDownloading();
        else if (this == Updating) onUpdating();
        else if (this == Available) onAvailable();
        else if (this == Failed) onFailed();
        else if (this == Stopping) onStopping();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
