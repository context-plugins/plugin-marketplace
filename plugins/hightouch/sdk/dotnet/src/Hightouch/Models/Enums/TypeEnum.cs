using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// The event's type. One of track, identify, page, screen, or group. Required.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Track = new("track");

    public static readonly TypeEnum Identify = new("identify");

    public static readonly TypeEnum Page = new("page");

    public static readonly TypeEnum Screen = new("screen");

    public static readonly TypeEnum Group = new("group");

    public TResult Match<TResult>(Func<TResult> onTrack,
        Func<TResult> onIdentify,
        Func<TResult> onPage,
        Func<TResult> onScreen,
        Func<TResult> onGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Track => onTrack(),
            _ when this == Identify => onIdentify(),
            _ when this == Page => onPage(),
            _ when this == Screen => onScreen(),
            _ when this == Group => onGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrack,
        Action onIdentify,
        Action onPage,
        Action onScreen,
        Action onGroup,
        Action<string> otherwise)
    {
        if (this == Track) onTrack();
        else if (this == Identify) onIdentify();
        else if (this == Page) onPage();
        else if (this == Screen) onScreen();
        else if (this == Group) onGroup();
        else otherwise(Value);
    }
}
