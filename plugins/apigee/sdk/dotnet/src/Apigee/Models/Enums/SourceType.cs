using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the source.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceType>))]
public sealed record SourceType : OpenStringEnum<SourceType>
{
    private SourceType(string value) : base(value)
    {
    }

    public static readonly SourceType SourceTypeUnspecified = new("SOURCE_TYPE_UNSPECIFIED");

    public static readonly SourceType Plugin = new("PLUGIN");

    public TResult Match<TResult>(Func<TResult> onSourceTypeUnspecified,
        Func<TResult> onPlugin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SourceTypeUnspecified => onSourceTypeUnspecified(),
            _ when this == Plugin => onPlugin(),
            _ => otherwise(Value)
        };

    public void Match(Action onSourceTypeUnspecified, Action onPlugin, Action<string> otherwise)
    {
        if (this == SourceTypeUnspecified) onSourceTypeUnspecified();
        else if (this == Plugin) onPlugin();
        else otherwise(Value);
    }
}
