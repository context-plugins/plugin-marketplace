using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope System = new("System");

    public static readonly Scope Tenant = new("Tenant");

    public TResult Match<TResult>(Func<TResult> onSystem, Func<TResult> onTenant, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == System => onSystem(),
            _ when this == Tenant => onTenant(),
            _ => otherwise(Value)
        };

    public void Match(Action onSystem, Action onTenant, Action<string> otherwise)
    {
        if (this == System) onSystem();
        else if (this == Tenant) onTenant();
        else otherwise(Value);
    }
}
