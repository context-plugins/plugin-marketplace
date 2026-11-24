using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The type of the database dump. If unspecified, defaults to MYSQL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatabaseDumpType1>))]
public sealed record DatabaseDumpType1 : OpenStringEnum<DatabaseDumpType1>
{
    private DatabaseDumpType1(string value) : base(value)
    {
    }

    public static readonly DatabaseDumpType1 TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly DatabaseDumpType1 Mysql = new("MYSQL");

    public static readonly DatabaseDumpType1 Avro = new("AVRO");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onMysql,
        Func<TResult> onAvro,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == Mysql => onMysql(),
            _ when this == Avro => onAvro(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified, Action onMysql, Action onAvro, Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == Mysql) onMysql();
        else if (this == Avro) onAvro();
        else otherwise(Value);
    }
}
