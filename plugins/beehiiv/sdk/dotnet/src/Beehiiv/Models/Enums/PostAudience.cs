using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The audience that the post is available to on the web. Only applicable if the platform is <c>web</c> or <c>both</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostAudience>))]
public sealed record PostAudience : OpenStringEnum<PostAudience>
{
    private PostAudience(string value) : base(value)
    {
    }

    public static readonly PostAudience Free = new("free");

    public static readonly PostAudience Premium = new("premium");

    public static readonly PostAudience Both = new("both");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onPremium,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Premium => onPremium(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onPremium, Action onBoth, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Premium) onPremium();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
