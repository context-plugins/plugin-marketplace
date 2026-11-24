using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Extensions;

namespace AmazonComprehend.Core.Converters;

internal sealed class DateOnlyDateTimeOffsetConverter : JsonConverter<DateTimeOffset>
{
    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        DateTimeOffset.FromDate(reader.GetString()!);

    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options) =>
        writer.WriteStringValue(value.ToDate());
}
