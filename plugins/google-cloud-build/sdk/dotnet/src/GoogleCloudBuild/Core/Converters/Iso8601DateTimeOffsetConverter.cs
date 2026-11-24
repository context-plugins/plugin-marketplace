using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Extensions;

namespace GoogleCloudBuild.Core.Converters;

internal sealed class Iso8601DateTimeOffsetConverter : JsonConverter<DateTimeOffset>
{
    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        DateTimeOffset.FromIso8601(reader.GetString()!);

    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options) =>
        writer.WriteStringValue(value.ToIso8601());
}
