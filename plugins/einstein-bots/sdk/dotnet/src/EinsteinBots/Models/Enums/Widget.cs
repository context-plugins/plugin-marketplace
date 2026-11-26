using System;
using System.Text.Json.Serialization;
using EinsteinBots.Core.Enum;

namespace EinsteinBots.Models.Enums;

/// <summary>
/// "Widget type of how answers appear in the client.
/// <list type="bullet">
///   <item><description><c>buttons</c>—Answers appear in clickable pill boxes.</description></item>
///   <item><description><c>menu</c>—Answers appear in clickable boxes vertically stacked."</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Widget>))]
public sealed record Widget : OpenStringEnum<Widget>
{
    private Widget(string value) : base(value)
    {
    }

    public static readonly Widget Buttons = new("buttons");

    public static readonly Widget Menu = new("menu");

    public TResult Match<TResult>(Func<TResult> onButtons, Func<TResult> onMenu, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buttons => onButtons(),
            _ when this == Menu => onMenu(),
            _ => otherwise(Value)
        };

    public void Match(Action onButtons, Action onMenu, Action<string> otherwise)
    {
        if (this == Buttons) onButtons();
        else if (this == Menu) onMenu();
        else otherwise(Value);
    }
}
