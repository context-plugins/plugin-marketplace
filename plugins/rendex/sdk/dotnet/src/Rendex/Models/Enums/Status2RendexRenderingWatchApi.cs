using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2RendexRenderingWatchApi>))]
public sealed record Status2RendexRenderingWatchApi : OpenStringEnum<Status2RendexRenderingWatchApi>
{
    private Status2RendexRenderingWatchApi(string value) : base(value)
    {
    }

    public static readonly Status2RendexRenderingWatchApi Active = new("active");

    public static readonly Status2RendexRenderingWatchApi Paused = new("paused");

    public static readonly Status2RendexRenderingWatchApi All = new("all");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action onAll, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
