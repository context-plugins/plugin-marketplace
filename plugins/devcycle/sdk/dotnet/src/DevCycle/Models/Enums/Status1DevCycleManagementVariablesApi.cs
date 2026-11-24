using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Status field indicating whether a variable is actively being used, or is archived.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DevCycleManagementVariablesApi>))]
public sealed record Status1DevCycleManagementVariablesApi : OpenStringEnum<Status1DevCycleManagementVariablesApi>
{
    private Status1DevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly Status1DevCycleManagementVariablesApi Active = new("active");

    public static readonly Status1DevCycleManagementVariablesApi Archived = new("archived");

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
