using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(BackgroundConverter))]
public record Background
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Background(Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static Background Bool(bool value) => new(Optional<bool>.Some(value), default);

    internal static Background Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Background(bool value) => Bool(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Background)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Background)} holds no value.");
    }
}

file sealed class BackgroundConverter : JsonConverter<Background>
{
    public override Background Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Background.Bool(boolValue);
        }
        return Background.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Background value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Background)} contains no valid value to serialize.");
        }
    }
}
