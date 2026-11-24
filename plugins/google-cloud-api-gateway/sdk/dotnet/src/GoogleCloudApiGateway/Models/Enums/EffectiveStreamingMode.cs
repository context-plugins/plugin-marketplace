using System;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Enum;

namespace GoogleCloudApiGateway.Models.Enums;

/// <summary>
/// Output only. The streaming mode this gateway is actually served with, which the service resolves at creation from <c>streaming_mode</c>, the referenced API Config, and the platform default at the time. Read this rather than <c>streaming_mode</c> to determine whether a gateway supports streaming.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EffectiveStreamingMode>))]
public sealed record EffectiveStreamingMode : OpenStringEnum<EffectiveStreamingMode>
{
    private EffectiveStreamingMode(string value) : base(value)
    {
    }

    public static readonly EffectiveStreamingMode EffectiveStreamingModeUnspecified = new(
        "EFFECTIVE_STREAMING_MODE_UNSPECIFIED");

    public static readonly EffectiveStreamingMode EffectiveStreamingModeDisabled = new(
        "EFFECTIVE_STREAMING_MODE_DISABLED");

    public static readonly EffectiveStreamingMode EffectiveStreamingModeEnabled = new(
        "EFFECTIVE_STREAMING_MODE_ENABLED");

    public TResult Match<TResult>(Func<TResult> onEffectiveStreamingModeUnspecified,
        Func<TResult> onEffectiveStreamingModeDisabled,
        Func<TResult> onEffectiveStreamingModeEnabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EffectiveStreamingModeUnspecified => onEffectiveStreamingModeUnspecified(),
            _ when this == EffectiveStreamingModeDisabled => onEffectiveStreamingModeDisabled(),
            _ when this == EffectiveStreamingModeEnabled => onEffectiveStreamingModeEnabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onEffectiveStreamingModeUnspecified,
        Action onEffectiveStreamingModeDisabled,
        Action onEffectiveStreamingModeEnabled,
        Action<string> otherwise)
    {
        if (this == EffectiveStreamingModeUnspecified) onEffectiveStreamingModeUnspecified();
        else if (this == EffectiveStreamingModeDisabled) onEffectiveStreamingModeDisabled();
        else if (this == EffectiveStreamingModeEnabled) onEffectiveStreamingModeEnabled();
        else otherwise(Value);
    }
}
