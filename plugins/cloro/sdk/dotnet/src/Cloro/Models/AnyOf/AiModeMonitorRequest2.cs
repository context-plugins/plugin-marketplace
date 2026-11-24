using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

[JsonConverter(typeof(AiModeMonitorRequest2Converter))]
public record AiModeMonitorRequest2
{
    private readonly Optional<AiModeMonitorRequest> _aiModeMonitorRequestValue;

    private readonly Optional<AiModeMonitorRequest1> _aiModeMonitorRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private AiModeMonitorRequest2(Optional<AiModeMonitorRequest> aiModeMonitorRequestValue,
        Optional<AiModeMonitorRequest1> aiModeMonitorRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _aiModeMonitorRequestValue = aiModeMonitorRequestValue;
        _aiModeMonitorRequest1Value = aiModeMonitorRequest1Value;
        _unknownValue = unknownValue;
    }

    public static AiModeMonitorRequest2 AiModeMonitorRequest(AiModeMonitorRequest value) =>
        new(Optional<AiModeMonitorRequest>.Some(value), default, default);

    public static AiModeMonitorRequest2 AiModeMonitorRequest1(AiModeMonitorRequest1 value) =>
        new(default, Optional<AiModeMonitorRequest1>.Some(value), default);

    internal static AiModeMonitorRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAiModeMonitorRequest([NotNullWhen(true)] out AiModeMonitorRequest? value) =>
        _aiModeMonitorRequestValue.TryGetValue(out value);

    public bool TryGetAiModeMonitorRequest1([NotNullWhen(true)] out AiModeMonitorRequest1? value) =>
        _aiModeMonitorRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AiModeMonitorRequest2(AiModeMonitorRequest value) => AiModeMonitorRequest(value);

    public static implicit operator AiModeMonitorRequest2(AiModeMonitorRequest1 value) => AiModeMonitorRequest1(value);

    public TResult Match<TResult>(Func<AiModeMonitorRequest, TResult> onAiModeMonitorRequest,
        Func<AiModeMonitorRequest1, TResult> onAiModeMonitorRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAiModeMonitorRequest(out var aiModeMonitorRequestValue) => onAiModeMonitorRequest(
                aiModeMonitorRequestValue),
            _ when TryGetAiModeMonitorRequest1(out var aiModeMonitorRequest1Value) => onAiModeMonitorRequest1(
                aiModeMonitorRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AiModeMonitorRequest2)} holds no value.")
        };

    public void Match(Action<AiModeMonitorRequest> onAiModeMonitorRequest,
        Action<AiModeMonitorRequest1> onAiModeMonitorRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetAiModeMonitorRequest(out var aiModeMonitorRequestValue)) onAiModeMonitorRequest(
            aiModeMonitorRequestValue);
        else if (TryGetAiModeMonitorRequest1(out var aiModeMonitorRequest1Value)) onAiModeMonitorRequest1(
            aiModeMonitorRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AiModeMonitorRequest2)} holds no value.");
    }
}

file sealed class AiModeMonitorRequest2Converter : JsonConverter<AiModeMonitorRequest2>
{
    public override AiModeMonitorRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AiModeMonitorRequest>(root, options, out var aiModeMonitorRequestValue))
        {
            return AiModeMonitorRequest2.AiModeMonitorRequest(aiModeMonitorRequestValue);
        }
        if (JsonSerializer.TryDeserialize<AiModeMonitorRequest1>(root, options, out var aiModeMonitorRequest1Value))
        {
            return AiModeMonitorRequest2.AiModeMonitorRequest1(aiModeMonitorRequest1Value);
        }
        return AiModeMonitorRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AiModeMonitorRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetAiModeMonitorRequest(out var aiModeMonitorRequestValue))
        {
            JsonSerializer.Serialize(writer, aiModeMonitorRequestValue, options);
        }
        else if (value.TryGetAiModeMonitorRequest1(out var aiModeMonitorRequest1Value))
        {
            JsonSerializer.Serialize(writer, aiModeMonitorRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AiModeMonitorRequest2)} contains no valid value to serialize.");
        }
    }
}
