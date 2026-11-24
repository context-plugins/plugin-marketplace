using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialAppApi>))]
public sealed record StatusBundleSocialAppApi : OpenStringEnum<StatusBundleSocialAppApi>
{
    private StatusBundleSocialAppApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialAppApi Operational = new("operational");

    public static readonly StatusBundleSocialAppApi Degraded = new("degraded");

    public static readonly StatusBundleSocialAppApi Outage = new("outage");

    public static readonly StatusBundleSocialAppApi Maintenance = new("maintenance");

    public TResult Match<TResult>(Func<TResult> onOperational,
        Func<TResult> onDegraded,
        Func<TResult> onOutage,
        Func<TResult> onMaintenance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Operational => onOperational(),
            _ when this == Degraded => onDegraded(),
            _ when this == Outage => onOutage(),
            _ when this == Maintenance => onMaintenance(),
            _ => otherwise(Value)
        };

    public void Match(Action onOperational,
        Action onDegraded,
        Action onOutage,
        Action onMaintenance,
        Action<string> otherwise)
    {
        if (this == Operational) onOperational();
        else if (this == Degraded) onDegraded();
        else if (this == Outage) onOutage();
        else if (this == Maintenance) onMaintenance();
        else otherwise(Value);
    }
}
