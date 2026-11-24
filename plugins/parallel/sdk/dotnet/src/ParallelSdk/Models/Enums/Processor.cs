using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Processor to use for the monitor. <c>lite</c> is faster and cheaper; <c>base</c> performs more thorough analysis at higher cost and latency. Defaults to <c>lite</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Processor>))]
public sealed record Processor : OpenStringEnum<Processor>
{
    private Processor(string value) : base(value)
    {
    }

    public static readonly Processor Lite = new("lite");

    public static readonly Processor Base = new("base");

    public TResult Match<TResult>(Func<TResult> onLite, Func<TResult> onBase, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Lite => onLite(),
            _ when this == Base => onBase(),
            _ => otherwise(Value)
        };

    public void Match(Action onLite, Action onBase, Action<string> otherwise)
    {
        if (this == Lite) onLite();
        else if (this == Base) onBase();
        else otherwise(Value);
    }
}
