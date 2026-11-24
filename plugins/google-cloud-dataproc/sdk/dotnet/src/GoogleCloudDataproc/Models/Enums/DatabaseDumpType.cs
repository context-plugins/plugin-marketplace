using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The type of the database dump.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatabaseDumpType>))]
public sealed record DatabaseDumpType : OpenStringEnum<DatabaseDumpType>
{
    private DatabaseDumpType(string value) : base(value)
    {
    }

    public static readonly DatabaseDumpType TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly DatabaseDumpType Mysql = new("MYSQL");

    public static readonly DatabaseDumpType Avro = new("AVRO");

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
