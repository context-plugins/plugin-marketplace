using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the podcast.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastShowStatus2>))]
public sealed record PodcastShowStatus2 : OpenStringEnum<PodcastShowStatus2>
{
    private PodcastShowStatus2(string value) : base(value)
    {
    }

    public static readonly PodcastShowStatus2 Draft = new("draft");

    public static readonly PodcastShowStatus2 Live = new("live");

    public static readonly PodcastShowStatus2 Archived = new("archived");

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
