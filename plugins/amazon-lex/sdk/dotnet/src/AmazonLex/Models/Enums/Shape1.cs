using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// When the shape value is List, it indicates that the values field contains a list of slot values. When the value is Scalar, it indicates that the value field contains a single value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Shape1>))]
public sealed record Shape1 : OpenStringEnum<Shape1>
{
    private Shape1(string value) : base(value)
    {
    }

    public static readonly Shape1 Scalar = new("Scalar");

    public static readonly Shape1 List = new("List");

    public static readonly Shape1 Composite = new("Composite");

    public TResult Match<TResult>(Func<TResult> onScalar,
        Func<TResult> onList,
        Func<TResult> onComposite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scalar => onScalar(),
            _ when this == List => onList(),
            _ when this == Composite => onComposite(),
            _ => otherwise(Value)
        };

    public void Match(Action onScalar, Action onList, Action onComposite, Action<string> otherwise)
    {
        if (this == Scalar) onScalar();
        else if (this == List) onList();
        else if (this == Composite) onComposite();
        else otherwise(Value);
    }
}
