using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// <c>official</c>: the date is printed on the agency's own schedule page. <c>inferred</c>: derived from the documented publication cadence — weekly jobless claims (DOL publishes no forward schedule) and FOMC minutes dates the Fed has not printed yet (three weeks after the meeting). Inferred dates flip to official once the agency lists them.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScheduleBasis>))]
public sealed record ScheduleBasis : OpenStringEnum<ScheduleBasis>
{
    private ScheduleBasis(string value) : base(value)
    {
    }

    public static readonly ScheduleBasis Official = new("official");

    public static readonly ScheduleBasis Inferred = new("inferred");

    public TResult Match<TResult>(Func<TResult> onOfficial,
        Func<TResult> onInferred,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Official => onOfficial(),
            _ when this == Inferred => onInferred(),
            _ => otherwise(Value)
        };

    public void Match(Action onOfficial, Action onInferred, Action<string> otherwise)
    {
        if (this == Official) onOfficial();
        else if (this == Inferred) onInferred();
        else otherwise(Value);
    }
}
