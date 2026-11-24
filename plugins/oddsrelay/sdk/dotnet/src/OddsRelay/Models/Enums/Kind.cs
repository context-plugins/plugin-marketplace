using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Server = new("server");

    public static readonly Kind Browser = new("browser");

    public static readonly Kind Dashboard = new("dashboard");

    public TResult Match<TResult>(Func<TResult> onServer,
        Func<TResult> onBrowser,
        Func<TResult> onDashboard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Server => onServer(),
            _ when this == Browser => onBrowser(),
            _ when this == Dashboard => onDashboard(),
            _ => otherwise(Value)
        };

    public void Match(Action onServer, Action onBrowser, Action onDashboard, Action<string> otherwise)
    {
        if (this == Server) onServer();
        else if (this == Browser) onBrowser();
        else if (this == Dashboard) onDashboard();
        else otherwise(Value);
    }
}
