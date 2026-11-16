using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType AppBackgrounded = new("APP_BACKGROUNDED");

    public static readonly EventType AppOpened = new("APP_OPENED");

    public static readonly EventType ChargeStatus = new("CHARGE_STATUS");

    public static readonly EventType ScheduledInterval = new("SCHEDULED_INTERVAL");

    public static readonly EventType ServerConnected = new("SERVER_CONNECTED");

    public static readonly EventType UserInitiated = new("USER_INITIATED");

    public TResult Match<TResult>(Func<TResult> onAppBackgrounded,
        Func<TResult> onAppOpened,
        Func<TResult> onChargeStatus,
        Func<TResult> onScheduledInterval,
        Func<TResult> onServerConnected,
        Func<TResult> onUserInitiated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AppBackgrounded => onAppBackgrounded(),
            _ when this == AppOpened => onAppOpened(),
            _ when this == ChargeStatus => onChargeStatus(),
            _ when this == ScheduledInterval => onScheduledInterval(),
            _ when this == ServerConnected => onServerConnected(),
            _ when this == UserInitiated => onUserInitiated(),
            _ => otherwise(Value)
        };

    public void Match(Action onAppBackgrounded,
        Action onAppOpened,
        Action onChargeStatus,
        Action onScheduledInterval,
        Action onServerConnected,
        Action onUserInitiated,
        Action<string> otherwise)
    {
        if (this == AppBackgrounded) onAppBackgrounded();
        else if (this == AppOpened) onAppOpened();
        else if (this == ChargeStatus) onChargeStatus();
        else if (this == ScheduledInterval) onScheduledInterval();
        else if (this == ServerConnected) onServerConnected();
        else if (this == UserInitiated) onUserInitiated();
        else otherwise(Value);
    }
}
