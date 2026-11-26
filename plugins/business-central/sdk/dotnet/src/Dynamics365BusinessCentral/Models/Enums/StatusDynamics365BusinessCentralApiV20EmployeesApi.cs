using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDynamics365BusinessCentralApiV20EmployeesApi>))]
public sealed record StatusDynamics365BusinessCentralApiV20EmployeesApi : OpenStringEnum<StatusDynamics365BusinessCentralApiV20EmployeesApi>
{
    private StatusDynamics365BusinessCentralApiV20EmployeesApi(string value) : base(value)
    {
    }

    public static readonly StatusDynamics365BusinessCentralApiV20EmployeesApi Active = new("Active");

    public static readonly StatusDynamics365BusinessCentralApiV20EmployeesApi Inactive = new("Inactive");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onInactive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
