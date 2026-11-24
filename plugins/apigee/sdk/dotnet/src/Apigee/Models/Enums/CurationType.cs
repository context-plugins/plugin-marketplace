using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The curation type for this plugin instance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CurationType>))]
public sealed record CurationType : OpenStringEnum<CurationType>
{
    private CurationType(string value) : base(value)
    {
    }

    public static readonly CurationType CurationTypeUnspecified = new("CURATION_TYPE_UNSPECIFIED");

    public static readonly CurationType DefaultCurationForApiMetadata = new("DEFAULT_CURATION_FOR_API_METADATA");

    public static readonly CurationType CustomCurationForApiMetadata = new("CUSTOM_CURATION_FOR_API_METADATA");

    public TResult Match<TResult>(Func<TResult> onCurationTypeUnspecified,
        Func<TResult> onDefaultCurationForApiMetadata,
        Func<TResult> onCustomCurationForApiMetadata,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CurationTypeUnspecified => onCurationTypeUnspecified(),
            _ when this == DefaultCurationForApiMetadata => onDefaultCurationForApiMetadata(),
            _ when this == CustomCurationForApiMetadata => onCustomCurationForApiMetadata(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurationTypeUnspecified,
        Action onDefaultCurationForApiMetadata,
        Action onCustomCurationForApiMetadata,
        Action<string> otherwise)
    {
        if (this == CurationTypeUnspecified) onCurationTypeUnspecified();
        else if (this == DefaultCurationForApiMetadata) onDefaultCurationForApiMetadata();
        else if (this == CustomCurationForApiMetadata) onCustomCurationForApiMetadata();
        else otherwise(Value);
    }
}
