using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PoweredByAlignmentDevCycleManagementProjectsApi>))]
public sealed record PoweredByAlignmentDevCycleManagementProjectsApi : OpenStringEnum<PoweredByAlignmentDevCycleManagementProjectsApi>
{
    private PoweredByAlignmentDevCycleManagementProjectsApi(string value) : base(value)
    {
    }

    public static readonly PoweredByAlignmentDevCycleManagementProjectsApi Center = new("center");

    public static readonly PoweredByAlignmentDevCycleManagementProjectsApi Left = new("left");

    public static readonly PoweredByAlignmentDevCycleManagementProjectsApi Right = new("right");

    public static readonly PoweredByAlignmentDevCycleManagementProjectsApi Hidden = new("hidden");

    public TResult Match<TResult>(Func<TResult> onCenter,
        Func<TResult> onLeft,
        Func<TResult> onRight,
        Func<TResult> onHidden,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Center => onCenter(),
            _ when this == Left => onLeft(),
            _ when this == Right => onRight(),
            _ when this == Hidden => onHidden(),
            _ => otherwise(Value)
        };

    public void Match(Action onCenter, Action onLeft, Action onRight, Action onHidden, Action<string> otherwise)
    {
        if (this == Center) onCenter();
        else if (this == Left) onLeft();
        else if (this == Right) onRight();
        else if (this == Hidden) onHidden();
        else otherwise(Value);
    }
}
