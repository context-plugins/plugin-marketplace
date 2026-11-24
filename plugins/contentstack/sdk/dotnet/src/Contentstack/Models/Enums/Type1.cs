using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Experience type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Segmented = new("SEGMENTED");

    public static readonly Type1 AbTest = new("AB_TEST");

    public TResult Match<TResult>(Func<TResult> onSegmented, Func<TResult> onAbTest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Segmented => onSegmented(),
            _ when this == AbTest => onAbTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onSegmented, Action onAbTest, Action<string> otherwise)
    {
        if (this == Segmented) onSegmented();
        else if (this == AbTest) onAbTest();
        else otherwise(Value);
    }
}
