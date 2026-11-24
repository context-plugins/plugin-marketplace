using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Environment classification.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Classification>))]
public sealed record Classification : OpenStringEnum<Classification>
{
    private Classification(string value) : base(value)
    {
    }

    public static readonly Classification Production = new("PRODUCTION");

    public static readonly Classification Test = new("TEST");

    public TResult Match<TResult>(Func<TResult> onProduction, Func<TResult> onTest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Test => onTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onProduction, Action onTest, Action<string> otherwise)
    {
        if (this == Production) onProduction();
        else if (this == Test) onTest();
        else otherwise(Value);
    }
}
