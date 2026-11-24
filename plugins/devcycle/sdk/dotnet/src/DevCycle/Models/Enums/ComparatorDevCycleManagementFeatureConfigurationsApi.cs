using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Comparator to use
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComparatorDevCycleManagementFeatureConfigurationsApi>))]
public sealed record ComparatorDevCycleManagementFeatureConfigurationsApi : OpenStringEnum<ComparatorDevCycleManagementFeatureConfigurationsApi>
{
    private ComparatorDevCycleManagementFeatureConfigurationsApi(string value) : base(value)
    {
    }

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U003D = new("=");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U0021U003D = new("!=");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U003E = new(">");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U003EU003D = new(">=");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U003C = new("<");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi U003CU003D = new("<=");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi Exist = new("exist");

    public static readonly ComparatorDevCycleManagementFeatureConfigurationsApi Exist2 = new("!exist");

    public TResult Match<TResult>(Func<TResult> onU003D,
        Func<TResult> onU0021U003D,
        Func<TResult> onU003E,
        Func<TResult> onU003EU003D,
        Func<TResult> onU003C,
        Func<TResult> onU003CU003D,
        Func<TResult> onExist,
        Func<TResult> onExist2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == U003D => onU003D(),
            _ when this == U0021U003D => onU0021U003D(),
            _ when this == U003E => onU003E(),
            _ when this == U003EU003D => onU003EU003D(),
            _ when this == U003C => onU003C(),
            _ when this == U003CU003D => onU003CU003D(),
            _ when this == Exist => onExist(),
            _ when this == Exist2 => onExist2(),
            _ => otherwise(Value)
        };

    public void Match(Action onU003D,
        Action onU0021U003D,
        Action onU003E,
        Action onU003EU003D,
        Action onU003C,
        Action onU003CU003D,
        Action onExist,
        Action onExist2,
        Action<string> otherwise)
    {
        if (this == U003D) onU003D();
        else if (this == U0021U003D) onU0021U003D();
        else if (this == U003E) onU003E();
        else if (this == U003EU003D) onU003EU003D();
        else if (this == U003C) onU003C();
        else if (this == U003CU003D) onU003CU003D();
        else if (this == Exist) onExist();
        else if (this == Exist2) onExist2();
        else otherwise(Value);
    }
}
