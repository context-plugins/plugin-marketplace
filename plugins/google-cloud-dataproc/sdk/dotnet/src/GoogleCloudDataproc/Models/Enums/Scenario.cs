using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scenario>))]
public sealed record Scenario : OpenStringEnum<Scenario>
{
    private Scenario(string value) : base(value)
    {
    }

    public static readonly Scenario ScenarioUnspecified = new("SCENARIO_UNSPECIFIED");

    public static readonly Scenario Scaling = new("SCALING");

    public static readonly Scenario BroadcastHashJoin = new("BROADCAST_HASH_JOIN");

    public static readonly Scenario Memory = new("MEMORY");

    public static readonly Scenario None = new("NONE");

    public static readonly Scenario Auto = new("AUTO");

    public TResult Match<TResult>(Func<TResult> onScenarioUnspecified,
        Func<TResult> onScaling,
        Func<TResult> onBroadcastHashJoin,
        Func<TResult> onMemory,
        Func<TResult> onNone,
        Func<TResult> onAuto,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ScenarioUnspecified => onScenarioUnspecified(),
            _ when this == Scaling => onScaling(),
            _ when this == BroadcastHashJoin => onBroadcastHashJoin(),
            _ when this == Memory => onMemory(),
            _ when this == None => onNone(),
            _ when this == Auto => onAuto(),
            _ => otherwise(Value)
        };

    public void Match(Action onScenarioUnspecified,
        Action onScaling,
        Action onBroadcastHashJoin,
        Action onMemory,
        Action onNone,
        Action onAuto,
        Action<string> otherwise)
    {
        if (this == ScenarioUnspecified) onScenarioUnspecified();
        else if (this == Scaling) onScaling();
        else if (this == BroadcastHashJoin) onBroadcastHashJoin();
        else if (this == Memory) onMemory();
        else if (this == None) onNone();
        else if (this == Auto) onAuto();
        else otherwise(Value);
    }
}
