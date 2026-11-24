using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

/// <summary>
/// Available actions that can be performed on a browser session
/// <para>
/// Attributes:
///     STOP: Stop the browser session (cannot be undone)
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BrowserSessionUpdateAction>))]
public sealed record BrowserSessionUpdateAction : OpenStringEnum<BrowserSessionUpdateAction>
{
    private BrowserSessionUpdateAction(string value) : base(value)
    {
    }

    public static readonly BrowserSessionUpdateAction Stop = new("stop");

    public TResult Match<TResult>(Func<TResult> onStop, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stop => onStop(),
            _ => otherwise(Value)
        };

    public void Match(Action onStop, Action<string> otherwise)
    {
        if (this == Stop) onStop();
        else otherwise(Value);
    }
}
