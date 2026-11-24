using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Immutable. The database type that the Metastore service stores its data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatabaseType>))]
public sealed record DatabaseType : OpenStringEnum<DatabaseType>
{
    private DatabaseType(string value) : base(value)
    {
    }

    public static readonly DatabaseType DatabaseTypeUnspecified = new("DATABASE_TYPE_UNSPECIFIED");

    public static readonly DatabaseType Mysql = new("MYSQL");

    public static readonly DatabaseType Spanner = new("SPANNER");

    public TResult Match<TResult>(Func<TResult> onDatabaseTypeUnspecified,
        Func<TResult> onMysql,
        Func<TResult> onSpanner,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DatabaseTypeUnspecified => onDatabaseTypeUnspecified(),
            _ when this == Mysql => onMysql(),
            _ when this == Spanner => onSpanner(),
            _ => otherwise(Value)
        };

    public void Match(Action onDatabaseTypeUnspecified, Action onMysql, Action onSpanner, Action<string> otherwise)
    {
        if (this == DatabaseTypeUnspecified) onDatabaseTypeUnspecified();
        else if (this == Mysql) onMysql();
        else if (this == Spanner) onSpanner();
        else otherwise(Value);
    }
}
