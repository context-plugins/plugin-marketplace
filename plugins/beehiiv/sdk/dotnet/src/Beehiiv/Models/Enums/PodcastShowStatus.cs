using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the podcast.&lt;br&gt;<c>draft</c> - No episodes have been published.&lt;br&gt; <c>live</c> - Published and active.&lt;br&gt;<c>archived</c> - The podcast is no longer active.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastShowStatus>))]
public sealed record PodcastShowStatus : OpenStringEnum<PodcastShowStatus>
{
    private PodcastShowStatus(string value) : base(value)
    {
    }

    public static readonly PodcastShowStatus Draft = new("draft");

    public static readonly PodcastShowStatus Live = new("live");

    public static readonly PodcastShowStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onLive,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Live => onLive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onLive, Action onArchived, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Live) onLive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
