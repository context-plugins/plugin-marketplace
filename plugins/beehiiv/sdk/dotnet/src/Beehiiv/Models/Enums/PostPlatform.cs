using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The platform that the post is or will be published to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostPlatform>))]
public sealed record PostPlatform : OpenStringEnum<PostPlatform>
{
    private PostPlatform(string value) : base(value)
    {
    }

    public static readonly PostPlatform Web = new("web");

    public static readonly PostPlatform Email = new("email");

    public static readonly PostPlatform Both = new("both");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onEmail,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Email => onEmail(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb, Action onEmail, Action onBoth, Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Email) onEmail();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
