using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Type of experience — SEGMENTED for rule-based or AB_TEST for split testing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Segmented = new("SEGMENTED");

    public static readonly TypeEnum AbTest = new("AB_TEST");

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
