using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GoogleCloudStorageTransferService.Core.Enum;

internal sealed class IntEnumConverter<TEnum> : JsonConverter<TEnum>
    where TEnum : IntEnum<TEnum>
{
    public override TEnum? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType is JsonTokenType.Null)
            return null;

        if (reader.TokenType is not JsonTokenType.Number)
            throw new JsonException($"Unexpected token {reader.TokenType} when parsing {typeToConvert.Name}. Expected Number.");

        if (!reader.TryGetInt64(out var value))
            throw new JsonException($"Number is not an integer when parsing {typeToConvert.Name}.");

        return IntEnum<TEnum>.FromValueCore(value);
    }

    public override void Write(Utf8JsonWriter writer, TEnum? value, JsonSerializerOptions options)
    {
        if (value is null)
        {
            writer.WriteNullValue();
            return;
        }

        writer.WriteNumberValue(value.Value);
    }

    public override TEnum ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) =>
        long.TryParse(reader.GetString(), NumberStyles.AllowLeadingSign, CultureInfo.InvariantCulture, out var value)
            ? IntEnum<TEnum>.FromValueCore(value)
            : throw new JsonException($"Property name is not an integer when parsing {typeToConvert.Name}.");

    public override void WriteAsPropertyName(Utf8JsonWriter writer, TEnum value, JsonSerializerOptions options) =>
        writer.WritePropertyName(value.Value.ToString(CultureInfo.InvariantCulture));
}
