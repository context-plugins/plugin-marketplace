using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostPlatformFilter>))]
public sealed record PostPlatformFilter : OpenStringEnum<PostPlatformFilter>
{
    private PostPlatformFilter(string value) : base(value)
    {
    }

    public static readonly PostPlatformFilter Web = new("web");

    public static readonly PostPlatformFilter Email = new("email");

    public static readonly PostPlatformFilter Both = new("both");

    public static readonly PostPlatformFilter All = new("all");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onEmail,
        Func<TResult> onBoth,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Email => onEmail(),
            _ when this == Both => onBoth(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb, Action onEmail, Action onBoth, Action onAll, Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Email) onEmail();
        else if (this == Both) onBoth();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
