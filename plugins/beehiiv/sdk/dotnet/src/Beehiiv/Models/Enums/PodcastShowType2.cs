using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of the podcast.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastShowType2>))]
public sealed record PodcastShowType2 : OpenStringEnum<PodcastShowType2>
{
    private PodcastShowType2(string value) : base(value)
    {
    }

    public static readonly PodcastShowType2 Episodic = new("episodic");

    public static readonly PodcastShowType2 Serial = new("serial");

    public TResult Match<TResult>(Func<TResult> onEpisodic, Func<TResult> onSerial, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Episodic => onEpisodic(),
            _ when this == Serial => onSerial(),
            _ => otherwise(Value)
        };

    public void Match(Action onEpisodic, Action onSerial, Action<string> otherwise)
    {
        if (this == Episodic) onEpisodic();
        else if (this == Serial) onSerial();
        else otherwise(Value);
    }
}
