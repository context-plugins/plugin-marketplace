using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Length>))]
public sealed record Length : OpenStringEnum<Length>
{
    private Length(string value) : base(value)
    {
    }

    public static readonly Length Short = new("short");

    public static readonly Length Medium = new("medium");

    public static readonly Length Long = new("long");

    public TResult Match<TResult>(Func<TResult> onShort,
        Func<TResult> onMedium,
        Func<TResult> onLong,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Short => onShort(),
            _ when this == Medium => onMedium(),
            _ when this == Long => onLong(),
            _ => otherwise(Value)
        };

    public void Match(Action onShort, Action onMedium, Action onLong, Action<string> otherwise)
    {
        if (this == Short) onShort();
        else if (this == Medium) onMedium();
        else if (this == Long) onLong();
        else otherwise(Value);
    }
}
