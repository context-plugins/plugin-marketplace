using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InstanceSize>))]
public sealed record InstanceSize : OpenStringEnum<InstanceSize>
{
    private InstanceSize(string value) : base(value)
    {
    }

    public static readonly InstanceSize InstanceSizeUnspecified = new("INSTANCE_SIZE_UNSPECIFIED");

    public static readonly InstanceSize ExtraSmall = new("EXTRA_SMALL");

    public static readonly InstanceSize Small = new("SMALL");

    public static readonly InstanceSize Medium = new("MEDIUM");

    public static readonly InstanceSize Large = new("LARGE");

    public static readonly InstanceSize ExtraLarge = new("EXTRA_LARGE");

    public TResult Match<TResult>(Func<TResult> onInstanceSizeUnspecified,
        Func<TResult> onExtraSmall,
        Func<TResult> onSmall,
        Func<TResult> onMedium,
        Func<TResult> onLarge,
        Func<TResult> onExtraLarge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InstanceSizeUnspecified => onInstanceSizeUnspecified(),
            _ when this == ExtraSmall => onExtraSmall(),
            _ when this == Small => onSmall(),
            _ when this == Medium => onMedium(),
            _ when this == Large => onLarge(),
            _ when this == ExtraLarge => onExtraLarge(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstanceSizeUnspecified,
        Action onExtraSmall,
        Action onSmall,
        Action onMedium,
        Action onLarge,
        Action onExtraLarge,
        Action<string> otherwise)
    {
        if (this == InstanceSizeUnspecified) onInstanceSizeUnspecified();
        else if (this == ExtraSmall) onExtraSmall();
        else if (this == Small) onSmall();
        else if (this == Medium) onMedium();
        else if (this == Large) onLarge();
        else if (this == ExtraLarge) onExtraLarge();
        else otherwise(Value);
    }
}
