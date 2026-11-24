using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// The type of the database.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatabaseType1>))]
public sealed record DatabaseType1 : OpenStringEnum<DatabaseType1>
{
    private DatabaseType1(string value) : base(value)
    {
    }

    public static readonly DatabaseType1 DatabaseTypeUnspecified = new("DATABASE_TYPE_UNSPECIFIED");

    public static readonly DatabaseType1 Mysql = new("MYSQL");

    public TResult Match<TResult>(Func<TResult> onDatabaseTypeUnspecified,
        Func<TResult> onMysql,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DatabaseTypeUnspecified => onDatabaseTypeUnspecified(),
            _ when this == Mysql => onMysql(),
            _ => otherwise(Value)
        };

    public void Match(Action onDatabaseTypeUnspecified, Action onMysql, Action<string> otherwise)
    {
        if (this == DatabaseTypeUnspecified) onDatabaseTypeUnspecified();
        else if (this == Mysql) onMysql();
        else otherwise(Value);
    }
}
