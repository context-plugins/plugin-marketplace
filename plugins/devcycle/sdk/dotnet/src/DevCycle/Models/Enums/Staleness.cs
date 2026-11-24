using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Staleness>))]
public sealed record Staleness : OpenStringEnum<Staleness>
{
    private Staleness(string value) : base(value)
    {
    }

    public static readonly Staleness All = new("all");

    public static readonly Staleness Unused = new("unused");

    public static readonly Staleness Released = new("released");

    public static readonly Staleness Unmodified = new("unmodified");

    public static readonly Staleness NotStale = new("notStale");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onUnused,
        Func<TResult> onReleased,
        Func<TResult> onUnmodified,
        Func<TResult> onNotStale,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Unused => onUnused(),
            _ when this == Released => onReleased(),
            _ when this == Unmodified => onUnmodified(),
            _ when this == NotStale => onNotStale(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onUnused,
        Action onReleased,
        Action onUnmodified,
        Action onNotStale,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Unused) onUnused();
        else if (this == Released) onReleased();
        else if (this == Unmodified) onUnmodified();
        else if (this == NotStale) onNotStale();
        else otherwise(Value);
    }
}
