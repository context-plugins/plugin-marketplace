using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2DevCycleManagementVariablesApi>))]
public sealed record Status2DevCycleManagementVariablesApi : OpenStringEnum<Status2DevCycleManagementVariablesApi>
{
    private Status2DevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly Status2DevCycleManagementVariablesApi Active = new("active");

    public static readonly Status2DevCycleManagementVariablesApi Archived = new("archived");

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
