using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(ReasoningConverter))]
public record Reasoning
{
    private readonly Optional<ResponseReasoningConfig> _responseReasoningConfigValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Reasoning(Optional<ResponseReasoningConfig> responseReasoningConfigValue, Optional<UnknownArm> unknownValue)
    {
        _responseReasoningConfigValue = responseReasoningConfigValue;
        _unknownValue = unknownValue;
    }

    public static Reasoning ResponseReasoningConfig(ResponseReasoningConfig value) =>
        new(Optional<ResponseReasoningConfig>.Some(value), default);

    internal static Reasoning Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseReasoningConfig([NotNullWhen(true)] out ResponseReasoningConfig? value) =>
        _responseReasoningConfigValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Reasoning(ResponseReasoningConfig value) => ResponseReasoningConfig(value);

    public TResult Match<TResult>(Func<ResponseReasoningConfig, TResult> onResponseReasoningConfig,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseReasoningConfig(out var responseReasoningConfigValue) => onResponseReasoningConfig(
                responseReasoningConfigValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Reasoning)} holds no value.")
        };

    public void Match(Action<ResponseReasoningConfig> onResponseReasoningConfig, Action<JsonElement> otherwise)
    {
        if (TryGetResponseReasoningConfig(out var responseReasoningConfigValue)) onResponseReasoningConfig(
            responseReasoningConfigValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Reasoning)} holds no value.");
    }
}

file sealed class ReasoningConverter : JsonConverter<Reasoning>
{
    public override Reasoning Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseReasoningConfig>(root, options, out var responseReasoningConfigValue))
        {
            return Reasoning.ResponseReasoningConfig(responseReasoningConfigValue);
        }
        return Reasoning.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Reasoning value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseReasoningConfig(out var responseReasoningConfigValue))
        {
            JsonSerializer.Serialize(writer, responseReasoningConfigValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Reasoning)} contains no valid value to serialize.");
        }
    }
}
