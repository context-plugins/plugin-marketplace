using System;
using System.Text.Json.Serialization;
using CloudKit.Core.Enum;

namespace CloudKit.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EnvironmentEnum>))]
public sealed record EnvironmentEnum : OpenStringEnum<EnvironmentEnum>
{
    private EnvironmentEnum(string value) : base(value)
    {
    }

    public static readonly EnvironmentEnum Development = new("development");

    public static readonly EnvironmentEnum Production = new("production");

    public TResult Match<TResult>(Func<TResult> onDevelopment,
        Func<TResult> onProduction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Development => onDevelopment(),
            _ when this == Production => onProduction(),
            _ => otherwise(Value)
        };

    public void Match(Action onDevelopment, Action onProduction, Action<string> otherwise)
    {
        if (this == Development) onDevelopment();
        else if (this == Production) onProduction();
        else otherwise(Value);
    }
}
