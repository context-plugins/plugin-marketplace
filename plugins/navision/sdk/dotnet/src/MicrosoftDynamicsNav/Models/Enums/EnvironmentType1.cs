using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// Type of the new environment
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EnvironmentType1>))]
public sealed record EnvironmentType1 : OpenStringEnum<EnvironmentType1>
{
    private EnvironmentType1(string value) : base(value)
    {
    }

    public static readonly EnvironmentType1 Production = new("Production");

    public static readonly EnvironmentType1 Sandbox = new("Sandbox");

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
