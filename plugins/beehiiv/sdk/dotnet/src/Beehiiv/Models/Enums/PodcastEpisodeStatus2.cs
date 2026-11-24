using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the episode.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastEpisodeStatus2>))]
public sealed record PodcastEpisodeStatus2 : OpenStringEnum<PodcastEpisodeStatus2>
{
    private PodcastEpisodeStatus2(string value) : base(value)
    {
    }

    public static readonly PodcastEpisodeStatus2 Draft = new("draft");

    public static readonly PodcastEpisodeStatus2 Scheduled = new("scheduled");

    public static readonly PodcastEpisodeStatus2 Published = new("published");

    public static readonly PodcastEpisodeStatus2 Archived = new("archived");

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
