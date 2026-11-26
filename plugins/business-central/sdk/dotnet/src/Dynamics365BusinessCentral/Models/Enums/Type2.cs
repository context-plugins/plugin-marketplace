using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Environment type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Production = new("Production");

    public static readonly Type2 Sandbox = new("Sandbox");

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
