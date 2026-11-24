using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models.OneOf;

/// <summary>
/// A campaign setting. The <c>name</c> field determines the expected shape of <c>value</c>.
/// </summary>
[JsonConverter(typeof(SettingConverter))]
public record Setting
{
    private readonly Optional<UnknownArm> _unknownValue;

    private Setting(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static Setting Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Setting)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Setting)} holds no value.");
    }
}

file sealed class SettingConverter : JsonConverter<Setting>
{
    public override Setting Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("name", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'name' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => Setting.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Setting value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Setting)} contains no valid value to serialize.");
        }
    }
}
