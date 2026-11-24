using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiDatasourceTypeDto>))]
public sealed record PublicApiDatasourceTypeDto : OpenStringEnum<PublicApiDatasourceTypeDto>
{
    private PublicApiDatasourceTypeDto(string value) : base(value)
    {
    }

    public static readonly PublicApiDatasourceTypeDto Bigquery = new("bigquery");

    public static readonly PublicApiDatasourceTypeDto Mysql = new("mysql");

    public static readonly PublicApiDatasourceTypeDto Postgres = new("postgres");

    public static readonly PublicApiDatasourceTypeDto Snowflake = new("snowflake");

    public static readonly PublicApiDatasourceTypeDto Dask = new("dask");

    public static readonly PublicApiDatasourceTypeDto Spark = new("spark");

    public static readonly PublicApiDatasourceTypeDto Sparkdf = new("sparkdf");

    public static readonly PublicApiDatasourceTypeDto Redshift = new("redshift");

    public static readonly PublicApiDatasourceTypeDto Duckdb = new("duckdb");

    public static readonly PublicApiDatasourceTypeDto Presto = new("presto");

    public static readonly PublicApiDatasourceTypeDto Oracle = new("oracle");

    public static readonly PublicApiDatasourceTypeDto Athena = new("athena");

    public static readonly PublicApiDatasourceTypeDto Trino = new("trino");

    public static readonly PublicApiDatasourceTypeDto Dremio = new("dremio");

    public static readonly PublicApiDatasourceTypeDto Vertica = new("vertica");

    public static readonly PublicApiDatasourceTypeDto Denodo = new("denodo");

    public static readonly PublicApiDatasourceTypeDto Db2 = new("db2");

    public static readonly PublicApiDatasourceTypeDto Db2Z = new("db2z");

    public static readonly PublicApiDatasourceTypeDto Sqlserver = new("sqlserver");

    public static readonly PublicApiDatasourceTypeDto Databricks = new("databricks");

    public static readonly PublicApiDatasourceTypeDto Synapse = new("synapse");

    public static readonly PublicApiDatasourceTypeDto Fabric = new("fabric");

    public static readonly PublicApiDatasourceTypeDto Salesforce = new("salesforce");

    public TResult Match<TResult>(Func<TResult> onBigquery,
        Func<TResult> onMysql,
        Func<TResult> onPostgres,
        Func<TResult> onSnowflake,
        Func<TResult> onDask,
        Func<TResult> onSpark,
        Func<TResult> onSparkdf,
        Func<TResult> onRedshift,
        Func<TResult> onDuckdb,
        Func<TResult> onPresto,
        Func<TResult> onOracle,
        Func<TResult> onAthena,
        Func<TResult> onTrino,
        Func<TResult> onDremio,
        Func<TResult> onVertica,
        Func<TResult> onDenodo,
        Func<TResult> onDb2,
        Func<TResult> onDb2Z,
        Func<TResult> onSqlserver,
        Func<TResult> onDatabricks,
        Func<TResult> onSynapse,
        Func<TResult> onFabric,
        Func<TResult> onSalesforce,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bigquery => onBigquery(),
            _ when this == Mysql => onMysql(),
            _ when this == Postgres => onPostgres(),
            _ when this == Snowflake => onSnowflake(),
            _ when this == Dask => onDask(),
            _ when this == Spark => onSpark(),
            _ when this == Sparkdf => onSparkdf(),
            _ when this == Redshift => onRedshift(),
            _ when this == Duckdb => onDuckdb(),
            _ when this == Presto => onPresto(),
            _ when this == Oracle => onOracle(),
            _ when this == Athena => onAthena(),
            _ when this == Trino => onTrino(),
            _ when this == Dremio => onDremio(),
            _ when this == Vertica => onVertica(),
            _ when this == Denodo => onDenodo(),
            _ when this == Db2 => onDb2(),
            _ when this == Db2Z => onDb2Z(),
            _ when this == Sqlserver => onSqlserver(),
            _ when this == Databricks => onDatabricks(),
            _ when this == Synapse => onSynapse(),
            _ when this == Fabric => onFabric(),
            _ when this == Salesforce => onSalesforce(),
            _ => otherwise(Value)
        };

    public void Match(Action onBigquery,
        Action onMysql,
        Action onPostgres,
        Action onSnowflake,
        Action onDask,
        Action onSpark,
        Action onSparkdf,
        Action onRedshift,
        Action onDuckdb,
        Action onPresto,
        Action onOracle,
        Action onAthena,
        Action onTrino,
        Action onDremio,
        Action onVertica,
        Action onDenodo,
        Action onDb2,
        Action onDb2Z,
        Action onSqlserver,
        Action onDatabricks,
        Action onSynapse,
        Action onFabric,
        Action onSalesforce,
        Action<string> otherwise)
    {
        if (this == Bigquery) onBigquery();
        else if (this == Mysql) onMysql();
        else if (this == Postgres) onPostgres();
        else if (this == Snowflake) onSnowflake();
        else if (this == Dask) onDask();
        else if (this == Spark) onSpark();
        else if (this == Sparkdf) onSparkdf();
        else if (this == Redshift) onRedshift();
        else if (this == Duckdb) onDuckdb();
        else if (this == Presto) onPresto();
        else if (this == Oracle) onOracle();
        else if (this == Athena) onAthena();
        else if (this == Trino) onTrino();
        else if (this == Dremio) onDremio();
        else if (this == Vertica) onVertica();
        else if (this == Denodo) onDenodo();
        else if (this == Db2) onDb2();
        else if (this == Db2Z) onDb2Z();
        else if (this == Sqlserver) onSqlserver();
        else if (this == Databricks) onDatabricks();
        else if (this == Synapse) onSynapse();
        else if (this == Fabric) onFabric();
        else if (this == Salesforce) onSalesforce();
        else otherwise(Value);
    }
}
