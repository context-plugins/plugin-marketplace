using System;
using System.Text.Json.Serialization;
using MrScraper.Core.Enum;

namespace MrScraper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TaskBrowserType>))]
public sealed record TaskBrowserType : OpenStringEnum<TaskBrowserType>
{
    private TaskBrowserType(string value) : base(value)
    {
    }

    public static readonly TaskBrowserType BrowserChrome = new("CHROME");

    public static readonly TaskBrowserType BrowserFirefox = new("FIREFOX");

    public static readonly TaskBrowserType BrowserSafari = new("SAFARI");

    public TResult Match<TResult>(Func<TResult> onBrowserChrome,
        Func<TResult> onBrowserFirefox,
        Func<TResult> onBrowserSafari,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BrowserChrome => onBrowserChrome(),
            _ when this == BrowserFirefox => onBrowserFirefox(),
            _ when this == BrowserSafari => onBrowserSafari(),
            _ => otherwise(Value)
        };

    public void Match(Action onBrowserChrome, Action onBrowserFirefox, Action onBrowserSafari, Action<string> otherwise)
    {
        if (this == BrowserChrome) onBrowserChrome();
        else if (this == BrowserFirefox) onBrowserFirefox();
        else if (this == BrowserSafari) onBrowserSafari();
        else otherwise(Value);
    }
}
