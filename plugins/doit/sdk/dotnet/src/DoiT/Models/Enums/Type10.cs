using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type10>))]
public sealed record Type10 : OpenStringEnum<Type10>
{
    private Type10(string value) : base(value)
    {
    }

    public static readonly Type10 Application = new("application");

    public static readonly Type10 Infrastructure = new("infrastructure");

    public static readonly Type10 Network = new("network");

    public static readonly Type10 Template = new("template");

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
