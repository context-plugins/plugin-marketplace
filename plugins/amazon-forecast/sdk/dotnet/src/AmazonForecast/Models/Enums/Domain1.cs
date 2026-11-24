using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The domain associated with the dataset group.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Domain1>))]
public sealed record Domain1 : OpenStringEnum<Domain1>
{
    private Domain1(string value) : base(value)
    {
    }

    public static readonly Domain1 Retail = new("RETAIL");

    public static readonly Domain1 Custom = new("CUSTOM");

    public static readonly Domain1 InventoryPlanning = new("INVENTORY_PLANNING");

    public static readonly Domain1 Ec2Capacity = new("EC2_CAPACITY");

    public static readonly Domain1 WorkForce = new("WORK_FORCE");

    public static readonly Domain1 WebTraffic = new("WEB_TRAFFIC");

    public static readonly Domain1 Metrics = new("METRICS");

    public TResult Match<TResult>(Func<TResult> onRetail,
        Func<TResult> onCustom,
        Func<TResult> onInventoryPlanning,
        Func<TResult> onEc2Capacity,
        Func<TResult> onWorkForce,
        Func<TResult> onWebTraffic,
        Func<TResult> onMetrics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Retail => onRetail(),
            _ when this == Custom => onCustom(),
            _ when this == InventoryPlanning => onInventoryPlanning(),
            _ when this == Ec2Capacity => onEc2Capacity(),
            _ when this == WorkForce => onWorkForce(),
            _ when this == WebTraffic => onWebTraffic(),
            _ when this == Metrics => onMetrics(),
            _ => otherwise(Value)
        };

    public void Match(Action onRetail,
        Action onCustom,
        Action onInventoryPlanning,
        Action onEc2Capacity,
        Action onWorkForce,
        Action onWebTraffic,
        Action onMetrics,
        Action<string> otherwise)
    {
        if (this == Retail) onRetail();
        else if (this == Custom) onCustom();
        else if (this == InventoryPlanning) onInventoryPlanning();
        else if (this == Ec2Capacity) onEc2Capacity();
        else if (this == WorkForce) onWorkForce();
        else if (this == WebTraffic) onWebTraffic();
        else if (this == Metrics) onMetrics();
        else otherwise(Value);
    }
}
