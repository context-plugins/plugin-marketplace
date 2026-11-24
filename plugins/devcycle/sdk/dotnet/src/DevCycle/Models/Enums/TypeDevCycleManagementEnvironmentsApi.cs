using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The environment type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDevCycleManagementEnvironmentsApi>))]
public sealed record TypeDevCycleManagementEnvironmentsApi : OpenStringEnum<TypeDevCycleManagementEnvironmentsApi>
{
    private TypeDevCycleManagementEnvironmentsApi(string value) : base(value)
    {
    }

    public static readonly TypeDevCycleManagementEnvironmentsApi Development = new("development");

    public static readonly TypeDevCycleManagementEnvironmentsApi Staging = new("staging");

    public static readonly TypeDevCycleManagementEnvironmentsApi Production = new("production");

    public static readonly TypeDevCycleManagementEnvironmentsApi DisasterRecovery = new("disaster_recovery");

    public TResult Match<TResult>(Func<TResult> onDevelopment,
        Func<TResult> onStaging,
        Func<TResult> onProduction,
        Func<TResult> onDisasterRecovery,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Development => onDevelopment(),
            _ when this == Staging => onStaging(),
            _ when this == Production => onProduction(),
            _ when this == DisasterRecovery => onDisasterRecovery(),
            _ => otherwise(Value)
        };

    public void Match(Action onDevelopment,
        Action onStaging,
        Action onProduction,
        Action onDisasterRecovery,
        Action<string> otherwise)
    {
        if (this == Development) onDevelopment();
        else if (this == Staging) onStaging();
        else if (this == Production) onProduction();
        else if (this == DisasterRecovery) onDisasterRecovery();
        else otherwise(Value);
    }
}
