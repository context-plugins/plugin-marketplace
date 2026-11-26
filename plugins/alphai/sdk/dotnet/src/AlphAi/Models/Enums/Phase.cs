using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Phase>))]
public sealed record Phase : OpenStringEnum<Phase>
{
    private Phase(string value) : base(value)
    {
    }

    public static readonly Phase Upcoming = new("upcoming");

    public static readonly Phase Elapsed = new("elapsed");

    public TResult Match<TResult>(Func<TResult> onUpcoming, Func<TResult> onElapsed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Upcoming => onUpcoming(),
            _ when this == Elapsed => onElapsed(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpcoming, Action onElapsed, Action<string> otherwise)
    {
        if (this == Upcoming) onUpcoming();
        else if (this == Elapsed) onElapsed();
        else otherwise(Value);
    }
}
