using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// A string value of the KnownGender info about the Celebrity.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Male = new("Male");

    public static readonly Type2 Female = new("Female");

    public static readonly Type2 Nonbinary = new("Nonbinary");

    public static readonly Type2 Unlisted = new("Unlisted");

    public TResult Match<TResult>(Func<TResult> onMale,
        Func<TResult> onFemale,
        Func<TResult> onNonbinary,
        Func<TResult> onUnlisted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Male => onMale(),
            _ when this == Female => onFemale(),
            _ when this == Nonbinary => onNonbinary(),
            _ when this == Unlisted => onUnlisted(),
            _ => otherwise(Value)
        };

    public void Match(Action onMale, Action onFemale, Action onNonbinary, Action onUnlisted, Action<string> otherwise)
    {
        if (this == Male) onMale();
        else if (this == Female) onFemale();
        else if (this == Nonbinary) onNonbinary();
        else if (this == Unlisted) onUnlisted();
        else otherwise(Value);
    }
}
