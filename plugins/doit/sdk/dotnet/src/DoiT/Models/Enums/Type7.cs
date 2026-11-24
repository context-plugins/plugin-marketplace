using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of the diagram.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type7>))]
public sealed record Type7 : OpenStringEnum<Type7>
{
    private Type7(string value) : base(value)
    {
    }

    public static readonly Type7 Application = new("application");

    public static readonly Type7 Infrastructure = new("infrastructure");

    public static readonly Type7 Network = new("network");

    public static readonly Type7 Template = new("template");

    public TResult Match<TResult>(Func<TResult> onApplication,
        Func<TResult> onInfrastructure,
        Func<TResult> onNetwork,
        Func<TResult> onTemplate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Application => onApplication(),
            _ when this == Infrastructure => onInfrastructure(),
            _ when this == Network => onNetwork(),
            _ when this == Template => onTemplate(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplication,
        Action onInfrastructure,
        Action onNetwork,
        Action onTemplate,
        Action<string> otherwise)
    {
        if (this == Application) onApplication();
        else if (this == Infrastructure) onInfrastructure();
        else if (this == Network) onNetwork();
        else if (this == Template) onTemplate();
        else otherwise(Value);
    }
}
