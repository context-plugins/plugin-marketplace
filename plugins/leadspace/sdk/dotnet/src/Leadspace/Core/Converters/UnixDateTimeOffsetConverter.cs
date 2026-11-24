using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Leadspace.Core.Converters;

internal sealed class UnixDateTimeOffsetConverter : JsonConverter<DateTimeOffset>
{
    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        DateTimeOffset.FromUnixTimeSeconds(reader.TokenType switch
        {
            JsonTokenType.Number => reader.GetInt64(),
            JsonTokenType.String => long.Parse(reader.GetString()!, NumberStyles.Integer, CultureInfo.InvariantCulture),
            _ => throw new JsonException($"Expected Number or String for Unix timestamp, got {reader.TokenType}."),
        });

    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options) =>
        writer.WriteNumberValue(value.ToUnixTimeSeconds());
}
