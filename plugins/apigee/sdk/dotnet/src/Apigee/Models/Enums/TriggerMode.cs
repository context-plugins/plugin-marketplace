using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The trigger mode supported by the action.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TriggerMode>))]
public sealed record TriggerMode : OpenStringEnum<TriggerMode>
{
    private TriggerMode(string value) : base(value)
    {
    }

    public static readonly TriggerMode TriggerModeUnspecified = new("TRIGGER_MODE_UNSPECIFIED");

    public static readonly TriggerMode ApiHubOnDemandTrigger = new("API_HUB_ON_DEMAND_TRIGGER");

    public static readonly TriggerMode ApiHubScheduleTrigger = new("API_HUB_SCHEDULE_TRIGGER");

    public static readonly TriggerMode NonApiHubManaged = new("NON_API_HUB_MANAGED");

    public TResult Match<TResult>(Func<TResult> onTriggerModeUnspecified,
        Func<TResult> onApiHubOnDemandTrigger,
        Func<TResult> onApiHubScheduleTrigger,
        Func<TResult> onNonApiHubManaged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TriggerModeUnspecified => onTriggerModeUnspecified(),
            _ when this == ApiHubOnDemandTrigger => onApiHubOnDemandTrigger(),
            _ when this == ApiHubScheduleTrigger => onApiHubScheduleTrigger(),
            _ when this == NonApiHubManaged => onNonApiHubManaged(),
            _ => otherwise(Value)
        };

    public void Match(Action onTriggerModeUnspecified,
        Action onApiHubOnDemandTrigger,
        Action onApiHubScheduleTrigger,
        Action onNonApiHubManaged,
        Action<string> otherwise)
    {
        if (this == TriggerModeUnspecified) onTriggerModeUnspecified();
        else if (this == ApiHubOnDemandTrigger) onApiHubOnDemandTrigger();
        else if (this == ApiHubScheduleTrigger) onApiHubScheduleTrigger();
        else if (this == NonApiHubManaged) onNonApiHubManaged();
        else otherwise(Value);
    }
}
