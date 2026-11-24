using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Immutable. The release channel of the service. If unspecified, defaults to STABLE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReleaseChannel>))]
public sealed record ReleaseChannel : OpenStringEnum<ReleaseChannel>
{
    private ReleaseChannel(string value) : base(value)
    {
    }

    public static readonly ReleaseChannel ReleaseChannelUnspecified = new("RELEASE_CHANNEL_UNSPECIFIED");

    public static readonly ReleaseChannel Canary = new("CANARY");

    public static readonly ReleaseChannel Stable = new("STABLE");

    public TResult Match<TResult>(Func<TResult> onReleaseChannelUnspecified,
        Func<TResult> onCanary,
        Func<TResult> onStable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReleaseChannelUnspecified => onReleaseChannelUnspecified(),
            _ when this == Canary => onCanary(),
            _ when this == Stable => onStable(),
            _ => otherwise(Value)
        };

    public void Match(Action onReleaseChannelUnspecified, Action onCanary, Action onStable, Action<string> otherwise)
    {
        if (this == ReleaseChannelUnspecified) onReleaseChannelUnspecified();
        else if (this == Canary) onCanary();
        else if (this == Stable) onStable();
        else otherwise(Value);
    }
}
