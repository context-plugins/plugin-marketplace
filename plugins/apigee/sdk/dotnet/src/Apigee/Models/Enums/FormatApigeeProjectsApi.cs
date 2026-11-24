using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The format of the spec.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FormatApigeeProjectsApi>))]
public sealed record FormatApigeeProjectsApi : OpenStringEnum<FormatApigeeProjectsApi>
{
    private FormatApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly FormatApigeeProjectsApi FormatUnspecified = new("FORMAT_UNSPECIFIED");

    public static readonly FormatApigeeProjectsApi OpenApiSpec20 = new("OPEN_API_SPEC_2_0");

    public static readonly FormatApigeeProjectsApi OpenApiSpec30 = new("OPEN_API_SPEC_3_0");

    public static readonly FormatApigeeProjectsApi OpenApiSpec31 = new("OPEN_API_SPEC_3_1");

    public TResult Match<TResult>(Func<TResult> onFormatUnspecified,
        Func<TResult> onOpenApiSpec20,
        Func<TResult> onOpenApiSpec30,
        Func<TResult> onOpenApiSpec31,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FormatUnspecified => onFormatUnspecified(),
            _ when this == OpenApiSpec20 => onOpenApiSpec20(),
            _ when this == OpenApiSpec30 => onOpenApiSpec30(),
            _ when this == OpenApiSpec31 => onOpenApiSpec31(),
            _ => otherwise(Value)
        };

    public void Match(Action onFormatUnspecified,
        Action onOpenApiSpec20,
        Action onOpenApiSpec30,
        Action onOpenApiSpec31,
        Action<string> otherwise)
    {
        if (this == FormatUnspecified) onFormatUnspecified();
        else if (this == OpenApiSpec20) onOpenApiSpec20();
        else if (this == OpenApiSpec30) onOpenApiSpec30();
        else if (this == OpenApiSpec31) onOpenApiSpec31();
        else otherwise(Value);
    }
}
