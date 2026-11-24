using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The status of a Variable. Must be one of [active | archived]
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDevCycleManagementVariablesApi>))]
public sealed record StatusDevCycleManagementVariablesApi : OpenStringEnum<StatusDevCycleManagementVariablesApi>
{
    private StatusDevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly StatusDevCycleManagementVariablesApi Active = new("active");

    public static readonly StatusDevCycleManagementVariablesApi Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
