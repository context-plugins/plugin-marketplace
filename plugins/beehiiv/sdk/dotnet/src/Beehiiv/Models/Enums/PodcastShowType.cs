using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of the podcast.&lt;br&gt;<c>episodic</c> - Episodes can be consumed in any order.&lt;br&gt;<c>serial</c> - Episodes are intended to be consumed in order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PodcastShowType>))]
public sealed record PodcastShowType : OpenStringEnum<PodcastShowType>
{
    private PodcastShowType(string value) : base(value)
    {
    }

    public static readonly PodcastShowType Episodic = new("episodic");

    public static readonly PodcastShowType Serial = new("serial");

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
