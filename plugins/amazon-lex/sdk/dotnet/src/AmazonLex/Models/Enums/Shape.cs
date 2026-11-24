using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When the shape value is List, it indicates that the values field contains a list of slot values. When the value is Scalar, it indicates that the value field contains a single value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Shape>))]
public sealed record Shape : OpenStringEnum<Shape>
{
    private Shape(string value) : base(value)
    {
    }

    public static readonly Shape Scalar = new("Scalar");

    public static readonly Shape List = new("List");

    public TResult Match<TResult>(Func<TResult> onScalar, Func<TResult> onList, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scalar => onScalar(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action onScalar, Action onList, Action<string> otherwise)
    {
        if (this == Scalar) onScalar();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
