using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// applied (the default) carries the result into the parent; kept records it as reference only; discarded records that it was not used
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Outcome8>))]
public sealed record Outcome8 : OpenStringEnum<Outcome8>
{
    private Outcome8(string value) : base(value)
    {
    }

    public static readonly Outcome8 Applied = new("applied");

    public static readonly Outcome8 Kept = new("kept");

    public static readonly Outcome8 Discarded = new("discarded");

    public TResult Match<TResult>(Func<TResult> onApplied,
        Func<TResult> onKept,
        Func<TResult> onDiscarded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Applied => onApplied(),
            _ when this == Kept => onKept(),
            _ when this == Discarded => onDiscarded(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplied, Action onKept, Action onDiscarded, Action<string> otherwise)
    {
        if (this == Applied) onApplied();
        else if (this == Kept) onKept();
        else if (this == Discarded) onDiscarded();
        else otherwise(Value);
    }
}
