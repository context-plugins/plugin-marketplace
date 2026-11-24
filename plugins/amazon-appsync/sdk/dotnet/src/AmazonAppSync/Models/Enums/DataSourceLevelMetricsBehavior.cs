using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sourc
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSourceLevelMetricsBehavior>))]
public sealed record DataSourceLevelMetricsBehavior : OpenStringEnum<DataSourceLevelMetricsBehavior>
{
    private DataSourceLevelMetricsBehavior(string value) : base(value)
    {
    }

    public static readonly DataSourceLevelMetricsBehavior FullRequestDataSourceMetrics = new(
        "FULL_REQUEST_DATA_SOURCE_METRICS");

    public static readonly DataSourceLevelMetricsBehavior PerDataSourceMetrics = new("PER_DATA_SOURCE_METRICS");

    public TResult Match<TResult>(Func<TResult> onFullRequestDataSourceMetrics,
        Func<TResult> onPerDataSourceMetrics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullRequestDataSourceMetrics => onFullRequestDataSourceMetrics(),
            _ when this == PerDataSourceMetrics => onPerDataSourceMetrics(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullRequestDataSourceMetrics, Action onPerDataSourceMetrics, Action<string> otherwise)
    {
        if (this == FullRequestDataSourceMetrics) onFullRequestDataSourceMetrics();
        else if (this == PerDataSourceMetrics) onPerDataSourceMetrics();
        else otherwise(Value);
    }
}
