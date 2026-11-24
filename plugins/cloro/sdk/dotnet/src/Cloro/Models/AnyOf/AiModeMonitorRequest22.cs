using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

[JsonConverter(typeof(AiModeMonitorRequest22Converter))]
public record AiModeMonitorRequest22
{
    private readonly Optional<AiModeMonitorRequest2Model> _aiModeMonitorRequest2ModelValue;

    private readonly Optional<AiModeMonitorRequest21> _aiModeMonitorRequest21Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private AiModeMonitorRequest22(Optional<AiModeMonitorRequest2Model> aiModeMonitorRequest2ModelValue,
        Optional<AiModeMonitorRequest21> aiModeMonitorRequest21Value,
        Optional<UnknownArm> unknownValue)
    {
        _aiModeMonitorRequest2ModelValue = aiModeMonitorRequest2ModelValue;
        _aiModeMonitorRequest21Value = aiModeMonitorRequest21Value;
        _unknownValue = unknownValue;
    }

    public static AiModeMonitorRequest22 AiModeMonitorRequest2Model(AiModeMonitorRequest2Model value) =>
        new(Optional<AiModeMonitorRequest2Model>.Some(value), default, default);

    public static AiModeMonitorRequest22 AiModeMonitorRequest21(AiModeMonitorRequest21 value) =>
        new(default, Optional<AiModeMonitorRequest21>.Some(value), default);

    internal static AiModeMonitorRequest22 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAiModeMonitorRequest2Model([NotNullWhen(true)] out AiModeMonitorRequest2Model? value) =>
        _aiModeMonitorRequest2ModelValue.TryGetValue(out value);

    public bool TryGetAiModeMonitorRequest21([NotNullWhen(true)] out AiModeMonitorRequest21? value) =>
        _aiModeMonitorRequest21Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AiModeMonitorRequest22(AiModeMonitorRequest2Model value) =>
        AiModeMonitorRequest2Model(value);

    public static implicit operator AiModeMonitorRequest22(AiModeMonitorRequest21 value) =>
        AiModeMonitorRequest21(value);

    public TResult Match<TResult>(Func<AiModeMonitorRequest2Model, TResult> onAiModeMonitorRequest2Model,
        Func<AiModeMonitorRequest21, TResult> onAiModeMonitorRequest21,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAiModeMonitorRequest2Model(
                out var aiModeMonitorRequest2ModelValue) => onAiModeMonitorRequest2Model(
                aiModeMonitorRequest2ModelValue),
            _ when TryGetAiModeMonitorRequest21(out var aiModeMonitorRequest21Value) => onAiModeMonitorRequest21(
                aiModeMonitorRequest21Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AiModeMonitorRequest22)} holds no value.")
        };

    public void Match(Action<AiModeMonitorRequest2Model> onAiModeMonitorRequest2Model,
        Action<AiModeMonitorRequest21> onAiModeMonitorRequest21,
        Action<JsonElement> otherwise)
    {
        if (TryGetAiModeMonitorRequest2Model(out var aiModeMonitorRequest2ModelValue)) onAiModeMonitorRequest2Model(
            aiModeMonitorRequest2ModelValue);
        else if (TryGetAiModeMonitorRequest21(out var aiModeMonitorRequest21Value)) onAiModeMonitorRequest21(
            aiModeMonitorRequest21Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AiModeMonitorRequest22)} holds no value.");
    }
}

file sealed class AiModeMonitorRequest22Converter : JsonConverter<AiModeMonitorRequest22>
{
    public override AiModeMonitorRequest22 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AiModeMonitorRequest2Model>(
            root,
            options,
            out var aiModeMonitorRequest2ModelValue))
        {
            return AiModeMonitorRequest22.AiModeMonitorRequest2Model(aiModeMonitorRequest2ModelValue);
        }
        if (JsonSerializer.TryDeserialize<AiModeMonitorRequest21>(root, options, out var aiModeMonitorRequest21Value))
        {
            return AiModeMonitorRequest22.AiModeMonitorRequest21(aiModeMonitorRequest21Value);
        }
        return AiModeMonitorRequest22.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AiModeMonitorRequest22 value, JsonSerializerOptions options)
    {
        if (value.TryGetAiModeMonitorRequest2Model(out var aiModeMonitorRequest2ModelValue))
        {
            JsonSerializer.Serialize(writer, aiModeMonitorRequest2ModelValue, options);
        }
        else if (value.TryGetAiModeMonitorRequest21(out var aiModeMonitorRequest21Value))
        {
            JsonSerializer.Serialize(writer, aiModeMonitorRequest21Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AiModeMonitorRequest22)} contains no valid value to serialize.");
        }
    }
}
