using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1RendexRenderingWatchApi>))]
public sealed record Status1RendexRenderingWatchApi : OpenStringEnum<Status1RendexRenderingWatchApi>
{
    private Status1RendexRenderingWatchApi(string value) : base(value)
    {
    }

    public static readonly Status1RendexRenderingWatchApi Active = new("active");

    public static readonly Status1RendexRenderingWatchApi Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onPaused, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
