using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The source type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1ApigeeProjectsApi>))]
public sealed record Type1ApigeeProjectsApi : OpenStringEnum<Type1ApigeeProjectsApi>
{
    private Type1ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly Type1ApigeeProjectsApi TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly Type1ApigeeProjectsApi ApigeeX = new("APIGEE_X");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onApigeeX,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == ApigeeX => onApigeeX(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified, Action onApigeeX, Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == ApigeeX) onApigeeX();
        else otherwise(Value);
    }
}
