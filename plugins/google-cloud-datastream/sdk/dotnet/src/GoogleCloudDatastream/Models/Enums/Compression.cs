using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Compression of the loaded JSON file.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Compression>))]
public sealed record Compression : OpenStringEnum<Compression>
{
    private Compression(string value) : base(value)
    {
    }

    public static readonly Compression JsonCompressionUnspecified = new("JSON_COMPRESSION_UNSPECIFIED");

    public static readonly Compression NoCompression = new("NO_COMPRESSION");

    public static readonly Compression Gzip = new("GZIP");

    public TResult Match<TResult>(Func<TResult> onJsonCompressionUnspecified,
        Func<TResult> onNoCompression,
        Func<TResult> onGzip,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JsonCompressionUnspecified => onJsonCompressionUnspecified(),
            _ when this == NoCompression => onNoCompression(),
            _ when this == Gzip => onGzip(),
            _ => otherwise(Value)
        };

    public void Match(Action onJsonCompressionUnspecified,
        Action onNoCompression,
        Action onGzip,
        Action<string> otherwise)
    {
        if (this == JsonCompressionUnspecified) onJsonCompressionUnspecified();
        else if (this == NoCompression) onNoCompression();
        else if (this == Gzip) onGzip();
        else otherwise(Value);
    }
}
