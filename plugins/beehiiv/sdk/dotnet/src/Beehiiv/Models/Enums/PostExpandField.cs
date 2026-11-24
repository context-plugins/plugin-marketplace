using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostExpandField>))]
public sealed record PostExpandField : OpenStringEnum<PostExpandField>
{
    private PostExpandField(string value) : base(value)
    {
    }

    public static readonly PostExpandField Stats = new("stats");

    public static readonly PostExpandField FreeWebContent = new("free_web_content");

    public static readonly PostExpandField FreeEmailContent = new("free_email_content");

    public static readonly PostExpandField FreeRssContent = new("free_rss_content");

    public static readonly PostExpandField PremiumWebContent = new("premium_web_content");

    public static readonly PostExpandField PremiumEmailContent = new("premium_email_content");

    public static readonly PostExpandField Recipients = new("recipients");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onFreeWebContent,
        Func<TResult> onFreeEmailContent,
        Func<TResult> onFreeRssContent,
        Func<TResult> onPremiumWebContent,
        Func<TResult> onPremiumEmailContent,
        Func<TResult> onRecipients,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == FreeWebContent => onFreeWebContent(),
            _ when this == FreeEmailContent => onFreeEmailContent(),
            _ when this == FreeRssContent => onFreeRssContent(),
            _ when this == PremiumWebContent => onPremiumWebContent(),
            _ when this == PremiumEmailContent => onPremiumEmailContent(),
            _ when this == Recipients => onRecipients(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats,
        Action onFreeWebContent,
        Action onFreeEmailContent,
        Action onFreeRssContent,
        Action onPremiumWebContent,
        Action onPremiumEmailContent,
        Action onRecipients,
        Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == FreeWebContent) onFreeWebContent();
        else if (this == FreeEmailContent) onFreeEmailContent();
        else if (this == FreeRssContent) onFreeRssContent();
        else if (this == PremiumWebContent) onPremiumWebContent();
        else if (this == PremiumEmailContent) onPremiumEmailContent();
        else if (this == Recipients) onRecipients();
        else otherwise(Value);
    }
}
