using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindHudPlatformQaAgentsApi>))]
public sealed record KindHudPlatformQaAgentsApi : OpenStringEnum<KindHudPlatformQaAgentsApi>
{
    private KindHudPlatformQaAgentsApi(string value) : base(value)
    {
    }

    public static readonly KindHudPlatformQaAgentsApi ScenarioSetup = new("scenario_setup");

    public static readonly KindHudPlatformQaAgentsApi ScenarioEvaluate = new("scenario_evaluate");

    public TResult Match<TResult>(Func<TResult> onScenarioSetup,
        Func<TResult> onScenarioEvaluate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ScenarioSetup => onScenarioSetup(),
            _ when this == ScenarioEvaluate => onScenarioEvaluate(),
            _ => otherwise(Value)
        };

    public void Match(Action onScenarioSetup, Action onScenarioEvaluate, Action<string> otherwise)
    {
        if (this == ScenarioSetup) onScenarioSetup();
        else if (this == ScenarioEvaluate) onScenarioEvaluate();
        else otherwise(Value);
    }
}
