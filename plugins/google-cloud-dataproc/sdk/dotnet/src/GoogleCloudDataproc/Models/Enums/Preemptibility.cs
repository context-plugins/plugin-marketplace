using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Preemptibility>))]
public sealed record Preemptibility : OpenStringEnum<Preemptibility>
{
    private Preemptibility(string value) : base(value)
    {
    }

    public static readonly Preemptibility PreemptibilityUnspecified = new("PREEMPTIBILITY_UNSPECIFIED");

    public static readonly Preemptibility NonPreemptible = new("NON_PREEMPTIBLE");

    public static readonly Preemptibility Preemptible = new("PREEMPTIBLE");

    public static readonly Preemptibility Spot = new("SPOT");

    public TResult Match<TResult>(Func<TResult> onPreemptibilityUnspecified,
        Func<TResult> onNonPreemptible,
        Func<TResult> onPreemptible,
        Func<TResult> onSpot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PreemptibilityUnspecified => onPreemptibilityUnspecified(),
            _ when this == NonPreemptible => onNonPreemptible(),
            _ when this == Preemptible => onPreemptible(),
            _ when this == Spot => onSpot(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreemptibilityUnspecified,
        Action onNonPreemptible,
        Action onPreemptible,
        Action onSpot,
        Action<string> otherwise)
    {
        if (this == PreemptibilityUnspecified) onPreemptibilityUnspecified();
        else if (this == NonPreemptible) onNonPreemptible();
        else if (this == Preemptible) onPreemptible();
        else if (this == Spot) onSpot();
        else otherwise(Value);
    }
}
