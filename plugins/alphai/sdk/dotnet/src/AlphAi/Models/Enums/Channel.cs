using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Channel>))]
public sealed record Channel : OpenStringEnum<Channel>
{
    private Channel(string value) : base(value)
    {
    }

    public static readonly Channel Gkg = new("gkg");

    public static readonly Channel Rss = new("rss");

    public TResult Match<TResult>(Func<TResult> onGkg, Func<TResult> onRss, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gkg => onGkg(),
            _ when this == Rss => onRss(),
            _ => otherwise(Value)
        };

    public void Match(Action onGkg, Action onRss, Action<string> otherwise)
    {
        if (this == Gkg) onGkg();
        else if (this == Rss) onRss();
        else otherwise(Value);
    }
}
