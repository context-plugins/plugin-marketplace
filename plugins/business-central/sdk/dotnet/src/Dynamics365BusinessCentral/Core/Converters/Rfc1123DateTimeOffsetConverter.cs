using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Extensions;

namespace Dynamics365BusinessCentral.Core.Converters;

internal sealed class Rfc1123DateTimeOffsetConverter : JsonConverter<DateTimeOffset>
{
    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        DateTimeOffset.FromRfc1123(reader.GetString()!);

    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options) =>
        writer.WriteStringValue(value.ToRfc1123());
}
