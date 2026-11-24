using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

/// <summary>
/// Enumeration of possible browser session states
/// <para>
/// Attributes:
///     ACTIVE: Session is currently active and running (browser is running)
///     STOPPED: Session has been stopped and is no longer active (browser is stopped)
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BrowserSessionStatus>))]
public sealed record BrowserSessionStatus : OpenStringEnum<BrowserSessionStatus>
{
    private BrowserSessionStatus(string value) : base(value)
    {
    }

    public static readonly BrowserSessionStatus Active = new("active");

    public static readonly BrowserSessionStatus Stopped = new("stopped");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onStopped, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onStopped, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
