using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The email capture type to use for this post. If not provided, the default value will be used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostEmailCaptureTypeOverride1>))]
public sealed record PostEmailCaptureTypeOverride1 : OpenStringEnum<PostEmailCaptureTypeOverride1>
{
    private PostEmailCaptureTypeOverride1(string value) : base(value)
    {
    }

    public static readonly PostEmailCaptureTypeOverride1 None = new("none");

    public static readonly PostEmailCaptureTypeOverride1 Gated = new("gated");

    public static readonly PostEmailCaptureTypeOverride1 Popup = new("popup");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onGated,
        Func<TResult> onPopup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Gated => onGated(),
            _ when this == Popup => onPopup(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onGated, Action onPopup, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Gated) onGated();
        else if (this == Popup) onPopup();
        else otherwise(Value);
    }
}
