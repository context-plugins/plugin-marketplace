using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Execution mechanisms supported by a check definition.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckExecutorType>))]
public sealed record CheckExecutorType : OpenStringEnum<CheckExecutorType>
{
    private CheckExecutorType(string value) : base(value)
    {
    }

    public static readonly CheckExecutorType Deterministic = new("deterministic");

    public static readonly CheckExecutorType ScenarioAgent = new("scenario_agent");

    public TResult Match<TResult>(Func<TResult> onDeterministic,
        Func<TResult> onScenarioAgent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Deterministic => onDeterministic(),
            _ when this == ScenarioAgent => onScenarioAgent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeterministic, Action onScenarioAgent, Action<string> otherwise)
    {
        if (this == Deterministic) onDeterministic();
        else if (this == ScenarioAgent) onScenarioAgent();
        else otherwise(Value);
    }
}
