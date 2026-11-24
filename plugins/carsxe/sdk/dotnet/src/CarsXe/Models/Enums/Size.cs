using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Size>))]
public sealed record Size : OpenStringEnum<Size>
{
    private Size(string value) : base(value)
    {
    }

    public static readonly Size Small = new("Small");

    public static readonly Size Medium = new("Medium");

    public static readonly Size Large = new("Large");

    public static readonly Size Wallpaper = new("Wallpaper");

    public static readonly Size All = new("All");

    public TResult Match<TResult>(Func<TResult> onSmall,
        Func<TResult> onMedium,
        Func<TResult> onLarge,
        Func<TResult> onWallpaper,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Small => onSmall(),
            _ when this == Medium => onMedium(),
            _ when this == Large => onLarge(),
            _ when this == Wallpaper => onWallpaper(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onSmall,
        Action onMedium,
        Action onLarge,
        Action onWallpaper,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == Small) onSmall();
        else if (this == Medium) onMedium();
        else if (this == Large) onLarge();
        else if (this == Wallpaper) onWallpaper();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
