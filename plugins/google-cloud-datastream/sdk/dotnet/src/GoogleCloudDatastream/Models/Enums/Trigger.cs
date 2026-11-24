using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Backfill job's triggering reason.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Trigger>))]
public sealed record Trigger : OpenStringEnum<Trigger>
{
    private Trigger(string value) : base(value)
    {
    }

    public static readonly Trigger TriggerUnspecified = new("TRIGGER_UNSPECIFIED");

    public static readonly Trigger Automatic = new("AUTOMATIC");

    public static readonly Trigger Manual = new("MANUAL");

    public TResult Match<TResult>(Func<TResult> onTriggerUnspecified,
        Func<TResult> onAutomatic,
        Func<TResult> onManual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TriggerUnspecified => onTriggerUnspecified(),
            _ when this == Automatic => onAutomatic(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onTriggerUnspecified, Action onAutomatic, Action onManual, Action<string> otherwise)
    {
        if (this == TriggerUnspecified) onTriggerUnspecified();
        else if (this == Automatic) onAutomatic();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
