using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OptionalComponent>))]
public sealed record OptionalComponent : OpenStringEnum<OptionalComponent>
{
    private OptionalComponent(string value) : base(value)
    {
    }

    public static readonly OptionalComponent ComponentUnspecified = new("COMPONENT_UNSPECIFIED");

    public static readonly OptionalComponent AlloydbConnector = new("ALLOYDB_CONNECTOR");

    public static readonly OptionalComponent Anaconda = new("ANACONDA");

    public static readonly OptionalComponent Delta = new("DELTA");

    public static readonly OptionalComponent Docker = new("DOCKER");

    public static readonly OptionalComponent Druid = new("DRUID");

    public static readonly OptionalComponent Flink = new("FLINK");

    public static readonly OptionalComponent Hbase = new("HBASE");

    public static readonly OptionalComponent HiveWebhcat = new("HIVE_WEBHCAT");

    public static readonly OptionalComponent Hudi = new("HUDI");

    public static readonly OptionalComponent Iceberg = new("ICEBERG");

    public static readonly OptionalComponent Jupyter = new("JUPYTER");

    public static readonly OptionalComponent Pig = new("PIG");

    public static readonly OptionalComponent Presto = new("PRESTO");

    public static readonly OptionalComponent Trino = new("TRINO");

    public static readonly OptionalComponent Ranger = new("RANGER");

    public static readonly OptionalComponent Solr = new("SOLR");

    public static readonly OptionalComponent Zeppelin = new("ZEPPELIN");

    public static readonly OptionalComponent Zookeeper = new("ZOOKEEPER");

    public static readonly OptionalComponent JupyterKernelGateway = new("JUPYTER_KERNEL_GATEWAY");

    public TResult Match<TResult>(Func<TResult> onComponentUnspecified,
        Func<TResult> onAlloydbConnector,
        Func<TResult> onAnaconda,
        Func<TResult> onDelta,
        Func<TResult> onDocker,
        Func<TResult> onDruid,
        Func<TResult> onFlink,
        Func<TResult> onHbase,
        Func<TResult> onHiveWebhcat,
        Func<TResult> onHudi,
        Func<TResult> onIceberg,
        Func<TResult> onJupyter,
        Func<TResult> onPig,
        Func<TResult> onPresto,
        Func<TResult> onTrino,
        Func<TResult> onRanger,
        Func<TResult> onSolr,
        Func<TResult> onZeppelin,
        Func<TResult> onZookeeper,
        Func<TResult> onJupyterKernelGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ComponentUnspecified => onComponentUnspecified(),
            _ when this == AlloydbConnector => onAlloydbConnector(),
            _ when this == Anaconda => onAnaconda(),
            _ when this == Delta => onDelta(),
            _ when this == Docker => onDocker(),
            _ when this == Druid => onDruid(),
            _ when this == Flink => onFlink(),
            _ when this == Hbase => onHbase(),
            _ when this == HiveWebhcat => onHiveWebhcat(),
            _ when this == Hudi => onHudi(),
            _ when this == Iceberg => onIceberg(),
            _ when this == Jupyter => onJupyter(),
            _ when this == Pig => onPig(),
            _ when this == Presto => onPresto(),
            _ when this == Trino => onTrino(),
            _ when this == Ranger => onRanger(),
            _ when this == Solr => onSolr(),
            _ when this == Zeppelin => onZeppelin(),
            _ when this == Zookeeper => onZookeeper(),
            _ when this == JupyterKernelGateway => onJupyterKernelGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onComponentUnspecified,
        Action onAlloydbConnector,
        Action onAnaconda,
        Action onDelta,
        Action onDocker,
        Action onDruid,
        Action onFlink,
        Action onHbase,
        Action onHiveWebhcat,
        Action onHudi,
        Action onIceberg,
        Action onJupyter,
        Action onPig,
        Action onPresto,
        Action onTrino,
        Action onRanger,
        Action onSolr,
        Action onZeppelin,
        Action onZookeeper,
        Action onJupyterKernelGateway,
        Action<string> otherwise)
    {
        if (this == ComponentUnspecified) onComponentUnspecified();
        else if (this == AlloydbConnector) onAlloydbConnector();
        else if (this == Anaconda) onAnaconda();
        else if (this == Delta) onDelta();
        else if (this == Docker) onDocker();
        else if (this == Druid) onDruid();
        else if (this == Flink) onFlink();
        else if (this == Hbase) onHbase();
        else if (this == HiveWebhcat) onHiveWebhcat();
        else if (this == Hudi) onHudi();
        else if (this == Iceberg) onIceberg();
        else if (this == Jupyter) onJupyter();
        else if (this == Pig) onPig();
        else if (this == Presto) onPresto();
        else if (this == Trino) onTrino();
        else if (this == Ranger) onRanger();
        else if (this == Solr) onSolr();
        else if (this == Zeppelin) onZeppelin();
        else if (this == Zookeeper) onZookeeper();
        else if (this == JupyterKernelGateway) onJupyterKernelGateway();
        else otherwise(Value);
    }
}
