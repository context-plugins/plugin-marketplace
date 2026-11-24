using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Maintenance channel to specify relative scheduling for maintenance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MaintenanceChannel>))]
public sealed record MaintenanceChannel : OpenStringEnum<MaintenanceChannel>
{
    private MaintenanceChannel(string value) : base(value)
    {
    }

    public static readonly MaintenanceChannel MaintenanceChannelUnspecified = new("MAINTENANCE_CHANNEL_UNSPECIFIED");

    public static readonly MaintenanceChannel Week1 = new("WEEK1");

    public static readonly MaintenanceChannel Week2 = new("WEEK2");

    public TResult Match<TResult>(Func<TResult> onMaintenanceChannelUnspecified,
        Func<TResult> onWeek1,
        Func<TResult> onWeek2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MaintenanceChannelUnspecified => onMaintenanceChannelUnspecified(),
            _ when this == Week1 => onWeek1(),
            _ when this == Week2 => onWeek2(),
            _ => otherwise(Value)
        };

    public void Match(Action onMaintenanceChannelUnspecified, Action onWeek1, Action onWeek2, Action<string> otherwise)
    {
        if (this == MaintenanceChannelUnspecified) onMaintenanceChannelUnspecified();
        else if (this == Week1) onWeek1();
        else if (this == Week2) onWeek2();
        else otherwise(Value);
    }
}
