using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Target summary size: "short" (1-2 sentences), "medium" (one paragraph, the default) or "long" (a few short paragraphs).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Length1>))]
public sealed record Length1 : OpenStringEnum<Length1>
{
    private Length1(string value) : base(value)
    {
    }

    public static readonly Length1 Short = new("short");

    public static readonly Length1 Medium = new("medium");

    public static readonly Length1 Long = new("long");

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
