using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match. The Domain and DatasetType that you choose determine the fields that must be present in training data that you import to a dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id, timestamp, and demand fields are present in your data. For more information, see Dataset groups.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Domain>))]
public sealed record Domain : OpenStringEnum<Domain>
{
    private Domain(string value) : base(value)
    {
    }

    public static readonly Domain Retail = new("RETAIL");

    public static readonly Domain Custom = new("CUSTOM");

    public static readonly Domain InventoryPlanning = new("INVENTORY_PLANNING");

    public static readonly Domain Ec2Capacity = new("EC2_CAPACITY");

    public static readonly Domain WorkForce = new("WORK_FORCE");

    public static readonly Domain WebTraffic = new("WEB_TRAFFIC");

    public static readonly Domain Metrics = new("METRICS");

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
