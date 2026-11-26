using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Type of environment to create
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1BusinessCentralAdministrationCenterEnvironmentsApi>))]
public sealed record Type1BusinessCentralAdministrationCenterEnvironmentsApi : OpenStringEnum<Type1BusinessCentralAdministrationCenterEnvironmentsApi>
{
    private Type1BusinessCentralAdministrationCenterEnvironmentsApi(string value) : base(value)
    {
    }

    public static readonly Type1BusinessCentralAdministrationCenterEnvironmentsApi Production = new("Production");

    public static readonly Type1BusinessCentralAdministrationCenterEnvironmentsApi Sandbox = new("Sandbox");

    public TResult Match<TResult>(Func<TResult> onProduction,
        Func<TResult> onSandbox,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Sandbox => onSandbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onProduction, Action onSandbox, Action<string> otherwise)
    {
        if (this == Production) onProduction();
        else if (this == Sandbox) onSandbox();
        else otherwise(Value);
    }
}
