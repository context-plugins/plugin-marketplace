using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationTriggerTypeDto>))]
public sealed record NotificationTriggerTypeDto : OpenStringEnum<NotificationTriggerTypeDto>
{
    private NotificationTriggerTypeDto(string value) : base(value)
    {
    }

    public static readonly NotificationTriggerTypeDto TestResultLevel = new("testResultLevel");

    public static readonly NotificationTriggerTypeDto ScanState = new("scanState");

    public TResult Match<TResult>(Func<TResult> onTestResultLevel,
        Func<TResult> onScanState,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TestResultLevel => onTestResultLevel(),
            _ when this == ScanState => onScanState(),
            _ => otherwise(Value)
        };

    public void Match(Action onTestResultLevel, Action onScanState, Action<string> otherwise)
    {
        if (this == TestResultLevel) onTestResultLevel();
        else if (this == ScanState) onScanState();
        else otherwise(Value);
    }
}
