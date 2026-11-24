using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Text1Converter))]
public record Text1
{
    private readonly Optional<ResponseTextConfig> _responseTextConfigValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Text1(Optional<ResponseTextConfig> responseTextConfigValue, Optional<UnknownArm> unknownValue)
    {
        _responseTextConfigValue = responseTextConfigValue;
        _unknownValue = unknownValue;
    }

    public static Text1 ResponseTextConfig(ResponseTextConfig value) =>
        new(Optional<ResponseTextConfig>.Some(value), default);

    internal static Text1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseTextConfig([NotNullWhen(true)] out ResponseTextConfig? value) =>
        _responseTextConfigValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Text1(ResponseTextConfig value) => ResponseTextConfig(value);

    public TResult Match<TResult>(Func<ResponseTextConfig, TResult> onResponseTextConfig,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseTextConfig(out var responseTextConfigValue) => onResponseTextConfig(
                responseTextConfigValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Text1)} holds no value.")
        };

    public void Match(Action<ResponseTextConfig> onResponseTextConfig, Action<JsonElement> otherwise)
    {
        if (TryGetResponseTextConfig(out var responseTextConfigValue)) onResponseTextConfig(responseTextConfigValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Text1)} holds no value.");
    }
}

file sealed class Text1Converter : JsonConverter<Text1>
{
    public override Text1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseTextConfig>(root, options, out var responseTextConfigValue))
        {
            return Text1.ResponseTextConfig(responseTextConfigValue);
        }
        return Text1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Text1 value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseTextConfig(out var responseTextConfigValue))
        {
            JsonSerializer.Serialize(writer, responseTextConfigValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Text1)} contains no valid value to serialize.");
        }
    }
}
