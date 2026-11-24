using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostAudienceFilter>))]
public sealed record PostAudienceFilter : OpenStringEnum<PostAudienceFilter>
{
    private PostAudienceFilter(string value) : base(value)
    {
    }

    public static readonly PostAudienceFilter Free = new("free");

    public static readonly PostAudienceFilter Premium = new("premium");

    public static readonly PostAudienceFilter All = new("all");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onPremium,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Premium => onPremium(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onPremium, Action onAll, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Premium) onPremium();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
