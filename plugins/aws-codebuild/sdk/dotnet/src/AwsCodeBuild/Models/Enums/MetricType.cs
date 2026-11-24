using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The metric type to determine auto-scaling.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetricType>))]
public sealed record MetricType : OpenStringEnum<MetricType>
{
    private MetricType(string value) : base(value)
    {
    }

    public static readonly MetricType FleetUtilizationRate = new("FLEET_UTILIZATION_RATE");

    public TResult Match<TResult>(Func<TResult> onFleetUtilizationRate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FleetUtilizationRate => onFleetUtilizationRate(),
            _ => otherwise(Value)
        };

    public void Match(Action onFleetUtilizationRate, Action<string> otherwise)
    {
        if (this == FleetUtilizationRate) onFleetUtilizationRate();
        else otherwise(Value);
    }
}
