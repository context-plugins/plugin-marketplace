using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more information).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetricSource>))]
public sealed record MetricSource : OpenStringEnum<MetricSource>
{
    private MetricSource(string value) : base(value)
    {
    }

    public static readonly MetricSource MetricSourceUnspecified = new("METRIC_SOURCE_UNSPECIFIED");

    public static readonly MetricSource MonitoringAgentDefaults = new("MONITORING_AGENT_DEFAULTS");

    public static readonly MetricSource Hdfs = new("HDFS");

    public static readonly MetricSource Spark = new("SPARK");

    public static readonly MetricSource Yarn = new("YARN");

    public static readonly MetricSource SparkHistoryServer = new("SPARK_HISTORY_SERVER");

    public static readonly MetricSource Hiveserver2 = new("HIVESERVER2");

    public static readonly MetricSource Hivemetastore = new("HIVEMETASTORE");

    public static readonly MetricSource Flink = new("FLINK");

    public TResult Match<TResult>(Func<TResult> onMetricSourceUnspecified,
        Func<TResult> onMonitoringAgentDefaults,
        Func<TResult> onHdfs,
        Func<TResult> onSpark,
        Func<TResult> onYarn,
        Func<TResult> onSparkHistoryServer,
        Func<TResult> onHiveserver2,
        Func<TResult> onHivemetastore,
        Func<TResult> onFlink,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MetricSourceUnspecified => onMetricSourceUnspecified(),
            _ when this == MonitoringAgentDefaults => onMonitoringAgentDefaults(),
            _ when this == Hdfs => onHdfs(),
            _ when this == Spark => onSpark(),
            _ when this == Yarn => onYarn(),
            _ when this == SparkHistoryServer => onSparkHistoryServer(),
            _ when this == Hiveserver2 => onHiveserver2(),
            _ when this == Hivemetastore => onHivemetastore(),
            _ when this == Flink => onFlink(),
            _ => otherwise(Value)
        };

    public void Match(Action onMetricSourceUnspecified,
        Action onMonitoringAgentDefaults,
        Action onHdfs,
        Action onSpark,
        Action onYarn,
        Action onSparkHistoryServer,
        Action onHiveserver2,
        Action onHivemetastore,
        Action onFlink,
        Action<string> otherwise)
    {
        if (this == MetricSourceUnspecified) onMetricSourceUnspecified();
        else if (this == MonitoringAgentDefaults) onMonitoringAgentDefaults();
        else if (this == Hdfs) onHdfs();
        else if (this == Spark) onSpark();
        else if (this == Yarn) onYarn();
        else if (this == SparkHistoryServer) onSparkHistoryServer();
        else if (this == Hiveserver2) onHiveserver2();
        else if (this == Hivemetastore) onHivemetastore();
        else if (this == Flink) onFlink();
        else otherwise(Value);
    }
}
