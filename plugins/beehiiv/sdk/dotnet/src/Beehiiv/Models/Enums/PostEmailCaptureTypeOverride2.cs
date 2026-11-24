using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The email capture type to use for this post.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostEmailCaptureTypeOverride2>))]
public sealed record PostEmailCaptureTypeOverride2 : OpenStringEnum<PostEmailCaptureTypeOverride2>
{
    private PostEmailCaptureTypeOverride2(string value) : base(value)
    {
    }

    public static readonly PostEmailCaptureTypeOverride2 None = new("none");

    public static readonly PostEmailCaptureTypeOverride2 Gated = new("gated");

    public static readonly PostEmailCaptureTypeOverride2 Popup = new("popup");

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
