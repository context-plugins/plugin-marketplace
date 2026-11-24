using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Fault = new("FAULT");

    public TResult Match<TResult>(Func<TResult> onFault, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fault => onFault(),
            _ => otherwise(Value)
        };

    public void Match(Action onFault, Action<string> otherwise)
    {
        if (this == Fault) onFault();
        else otherwise(Value);
    }
}
