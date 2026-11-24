using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace AwsCertificateManager.Core.Enum;

internal sealed class StringEnumConverter<TEnum> : JsonConverter<TEnum> where TEnum : StringEnum<TEnum>
{
    public override TEnum? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType is JsonTokenType.Null)
            return null;

        if (reader.TokenType is not JsonTokenType.String)
            throw new JsonException($"Unexpected token {reader.TokenType} when parsing {typeToConvert.Name}. Expected String.");

        return StringEnum<TEnum>.FromValueCore(reader.GetString() ?? string.Empty);
    }

    public override void Write(Utf8JsonWriter writer, TEnum? value, JsonSerializerOptions options)
    {
        if (value is null)
        {
            writer.WriteNullValue();
            return;
        }

        writer.WriteStringValue(value.Value);
    }

    public override TEnum ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        StringEnum<TEnum>.FromValueCore(reader.GetString() ?? string.Empty);

    public override void WriteAsPropertyName(Utf8JsonWriter writer, TEnum value, JsonSerializerOptions options) =>
        writer.WritePropertyName(value.Value);
}
