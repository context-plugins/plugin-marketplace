using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// The schema file format along JSON data files.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SchemaFileFormat>))]
public sealed record SchemaFileFormat : OpenStringEnum<SchemaFileFormat>
{
    private SchemaFileFormat(string value) : base(value)
    {
    }

    public static readonly SchemaFileFormat SchemaFileFormatUnspecified = new("SCHEMA_FILE_FORMAT_UNSPECIFIED");

    public static readonly SchemaFileFormat NoSchemaFile = new("NO_SCHEMA_FILE");

    public static readonly SchemaFileFormat AvroSchemaFile = new("AVRO_SCHEMA_FILE");

    public TResult Match<TResult>(Func<TResult> onSchemaFileFormatUnspecified,
        Func<TResult> onNoSchemaFile,
        Func<TResult> onAvroSchemaFile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SchemaFileFormatUnspecified => onSchemaFileFormatUnspecified(),
            _ when this == NoSchemaFile => onNoSchemaFile(),
            _ when this == AvroSchemaFile => onAvroSchemaFile(),
            _ => otherwise(Value)
        };

    public void Match(Action onSchemaFileFormatUnspecified,
        Action onNoSchemaFile,
        Action onAvroSchemaFile,
        Action<string> otherwise)
    {
        if (this == SchemaFileFormatUnspecified) onSchemaFileFormatUnspecified();
        else if (this == NoSchemaFile) onNoSchemaFile();
        else if (this == AvroSchemaFile) onAvroSchemaFile();
        else otherwise(Value);
    }
}
