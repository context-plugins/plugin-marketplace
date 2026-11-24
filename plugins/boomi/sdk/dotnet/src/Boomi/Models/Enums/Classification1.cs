using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Whether this is a production or test environment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Classification1>))]
public sealed record Classification1 : OpenStringEnum<Classification1>
{
    private Classification1(string value) : base(value)
    {
    }

    public static readonly Classification1 Production = new("PRODUCTION");

    public static readonly Classification1 Test = new("TEST");

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
