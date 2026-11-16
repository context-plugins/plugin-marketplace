using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The subtype of the <c>Fee</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeeSubtype>))]
public sealed record FeeSubtype : OpenStringEnum<FeeSubtype>
{
    private FeeSubtype(string value) : base(value)
    {
    }

    public static readonly FeeSubtype Custom = new("CUSTOM");

    public static readonly FeeSubtype ApplicationFee = new("APPLICATION_FEE");

    public static readonly FeeSubtype PlatformFee = new("PLATFORM_FEE");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onApplicationFee,
        Func<TResult> onPlatformFee,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == ApplicationFee => onApplicationFee(),
            _ when this == PlatformFee => onPlatformFee(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom, Action onApplicationFee, Action onPlatformFee, Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == ApplicationFee) onApplicationFee();
        else if (this == PlatformFee) onPlatformFee();
        else otherwise(Value);
    }
}
