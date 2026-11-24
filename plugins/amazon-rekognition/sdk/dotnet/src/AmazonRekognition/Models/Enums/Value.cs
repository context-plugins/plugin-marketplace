using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The predicted gender of the face.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Value>))]
public sealed record Value : OpenStringEnum<Value>
{
    private Value(string value) : base(value)
    {
    }

    public static readonly Value Male = new("Male");

    public static readonly Value Female = new("Female");

    public TResult Match<TResult>(Func<TResult> onMale, Func<TResult> onFemale, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Male => onMale(),
            _ when this == Female => onFemale(),
            _ => otherwise(Value)
        };

    public void Match(Action onMale, Action onFemale, Action<string> otherwise)
    {
        if (this == Male) onMale();
        else if (this == Female) onFemale();
        else otherwise(Value);
    }
}
