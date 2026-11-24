using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The type of the spec content.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpecContentType>))]
public sealed record SpecContentType : OpenStringEnum<SpecContentType>
{
    private SpecContentType(string value) : base(value)
    {
    }

    public static readonly SpecContentType SpecContentTypeUnspecified = new("SPEC_CONTENT_TYPE_UNSPECIFIED");

    public static readonly SpecContentType BoostedSpecContent = new("BOOSTED_SPEC_CONTENT");

    public static readonly SpecContentType GatewayOpenApiSpec = new("GATEWAY_OPEN_API_SPEC");

    public TResult Match<TResult>(Func<TResult> onSpecContentTypeUnspecified,
        Func<TResult> onBoostedSpecContent,
        Func<TResult> onGatewayOpenApiSpec,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SpecContentTypeUnspecified => onSpecContentTypeUnspecified(),
            _ when this == BoostedSpecContent => onBoostedSpecContent(),
            _ when this == GatewayOpenApiSpec => onGatewayOpenApiSpec(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpecContentTypeUnspecified,
        Action onBoostedSpecContent,
        Action onGatewayOpenApiSpec,
        Action<string> otherwise)
    {
        if (this == SpecContentTypeUnspecified) onSpecContentTypeUnspecified();
        else if (this == BoostedSpecContent) onBoostedSpecContent();
        else if (this == GatewayOpenApiSpec) onGatewayOpenApiSpec();
        else otherwise(Value);
    }
}
