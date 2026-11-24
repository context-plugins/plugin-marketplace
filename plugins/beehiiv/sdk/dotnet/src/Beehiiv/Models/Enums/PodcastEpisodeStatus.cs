using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the episode.&lt;br&gt;<c>draft</c> - Not yet published.&lt;br&gt;<c>scheduled</c> - Scheduled for future publication.&lt;br&gt;<c>published</c> - Available via web and RSS.&lt;br&gt;<c>archived</c> - No longer available via web or RSS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastEpisodeStatus>))]
public sealed record PodcastEpisodeStatus : OpenStringEnum<PodcastEpisodeStatus>
{
    private PodcastEpisodeStatus(string value) : base(value)
    {
    }

    public static readonly PodcastEpisodeStatus Draft = new("draft");

    public static readonly PodcastEpisodeStatus Scheduled = new("scheduled");

    public static readonly PodcastEpisodeStatus Published = new("published");

    public static readonly PodcastEpisodeStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onScheduled,
        Func<TResult> onPublished,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Published => onPublished(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onScheduled,
        Action onPublished,
        Action onArchived,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Scheduled) onScheduled();
        else if (this == Published) onPublished();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
