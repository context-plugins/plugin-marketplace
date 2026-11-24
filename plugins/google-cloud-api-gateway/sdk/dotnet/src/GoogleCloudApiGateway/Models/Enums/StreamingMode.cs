using System;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Enum;

namespace GoogleCloudApiGateway.Models.Enums;

/// <summary>
/// Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is rejected. If unset, the service selects the mode. This field records only what was requested and is never modified by the service; read <c>effective_streaming_mode</c> for the mode the gateway is served with.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StreamingMode>))]
public sealed record StreamingMode : OpenStringEnum<StreamingMode>
{
    private StreamingMode(string value) : base(value)
    {
    }

    public static readonly StreamingMode StreamingModeUnspecified = new("STREAMING_MODE_UNSPECIFIED");

    public static readonly StreamingMode StreamingModeEnabled = new("STREAMING_MODE_ENABLED");

    public TResult Match<TResult>(Func<TResult> onStreamingModeUnspecified,
        Func<TResult> onStreamingModeEnabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StreamingModeUnspecified => onStreamingModeUnspecified(),
            _ when this == StreamingModeEnabled => onStreamingModeEnabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onStreamingModeUnspecified, Action onStreamingModeEnabled, Action<string> otherwise)
    {
        if (this == StreamingModeUnspecified) onStreamingModeUnspecified();
        else if (this == StreamingModeEnabled) onStreamingModeEnabled();
        else otherwise(Value);
    }
}
