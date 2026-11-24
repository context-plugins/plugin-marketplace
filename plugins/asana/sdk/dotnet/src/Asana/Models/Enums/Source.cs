using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The component of the Asana product the user used to trigger the story.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Web = new("web");

    public static readonly Source Email = new("email");

    public static readonly Source Mobile = new("mobile");

    public static readonly Source Api = new("api");

    public static readonly Source Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onEmail,
        Func<TResult> onMobile,
        Func<TResult> onApi,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Email => onEmail(),
            _ when this == Mobile => onMobile(),
            _ when this == Api => onApi(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb,
        Action onEmail,
        Action onMobile,
        Action onApi,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Email) onEmail();
        else if (this == Mobile) onMobile();
        else if (this == Api) onApi();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
