using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The field that episode list results are sorted by. Defaults to <c>displayed_date</c>&lt;br&gt;<c>created</c> - The time in which the episode was first created.&lt;br&gt;<c>updated</c> - The time the episode was last updated.&lt;br&gt;<c>publish_date</c> - The exact time the system published the episode (when it went live), not the scheduled time the user set.&lt;br&gt; <c>displayed_date</c> - The time displayed in place of the <c>publish_date</c>. Uses a custom display date if set, otherwise the scheduled time the user set for publication, otherwise the <c>publish_date</c>, otherwise the creation date. For imported episodes, the original feed's <c>pubDate</c> is stored as the custom display date. This is the same field used to order episodes in the podcast's RSS feed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastEpisodeOrderBy>))]
public sealed record PodcastEpisodeOrderBy : OpenStringEnum<PodcastEpisodeOrderBy>
{
    private PodcastEpisodeOrderBy(string value) : base(value)
    {
    }

    public static readonly PodcastEpisodeOrderBy Created = new("created");

    public static readonly PodcastEpisodeOrderBy Updated = new("updated");

    public static readonly PodcastEpisodeOrderBy PublishDate = new("publish_date");

    public static readonly PodcastEpisodeOrderBy DisplayedDate = new("displayed_date");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onUpdated,
        Func<TResult> onPublishDate,
        Func<TResult> onDisplayedDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Updated => onUpdated(),
            _ when this == PublishDate => onPublishDate(),
            _ when this == DisplayedDate => onDisplayedDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onUpdated,
        Action onPublishDate,
        Action onDisplayedDate,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Updated) onUpdated();
        else if (this == PublishDate) onPublishDate();
        else if (this == DisplayedDate) onDisplayedDate();
        else otherwise(Value);
    }
}
