using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// Type of environment to create
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EnvironmentType>))]
public sealed record EnvironmentType : OpenStringEnum<EnvironmentType>
{
    private EnvironmentType(string value) : base(value)
    {
    }

    public static readonly EnvironmentType Production = new("Production");

    public static readonly EnvironmentType Sandbox = new("Sandbox");

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
