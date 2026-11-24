using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Orientation>))]
public sealed record Orientation : OpenStringEnum<Orientation>
{
    private Orientation(string value) : base(value)
    {
    }

    public static readonly Orientation Portrait = new("portrait");

    public static readonly Orientation Landscape = new("landscape");

    public TResult Match<TResult>(Func<TResult> onPortrait,
        Func<TResult> onLandscape,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Portrait => onPortrait(),
            _ when this == Landscape => onLandscape(),
            _ => otherwise(Value)
        };

    public void Match(Action onPortrait, Action onLandscape, Action<string> otherwise)
    {
        if (this == Portrait) onPortrait();
        else if (this == Landscape) onLandscape();
        else otherwise(Value);
    }
}
