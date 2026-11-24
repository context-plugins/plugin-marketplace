using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(CanonicalResultConverter))]
public record CanonicalResult
{
    private readonly Optional<QaAgentResultV1> _qaAgentResultV1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private CanonicalResult(Optional<QaAgentResultV1> qaAgentResultV1Value, Optional<UnknownArm> unknownValue)
    {
        _qaAgentResultV1Value = qaAgentResultV1Value;
        _unknownValue = unknownValue;
    }

    public static CanonicalResult QaAgentResultV1(QaAgentResultV1 value) =>
        new(Optional<QaAgentResultV1>.Some(value), default);

    internal static CanonicalResult Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetQaAgentResultV1([NotNullWhen(true)] out QaAgentResultV1? value) =>
        _qaAgentResultV1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CanonicalResult(QaAgentResultV1 value) => QaAgentResultV1(value);

    public TResult Match<TResult>(Func<QaAgentResultV1, TResult> onQaAgentResultV1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetQaAgentResultV1(out var qaAgentResultV1Value) => onQaAgentResultV1(qaAgentResultV1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CanonicalResult)} holds no value.")
        };

    public void Match(Action<QaAgentResultV1> onQaAgentResultV1, Action<JsonElement> otherwise)
    {
        if (TryGetQaAgentResultV1(out var qaAgentResultV1Value)) onQaAgentResultV1(qaAgentResultV1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CanonicalResult)} holds no value.");
    }
}

file sealed class CanonicalResultConverter : JsonConverter<CanonicalResult>
{
    public override CanonicalResult Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<QaAgentResultV1>(root, options, out var qaAgentResultV1Value))
        {
            return CanonicalResult.QaAgentResultV1(qaAgentResultV1Value);
        }
        return CanonicalResult.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CanonicalResult value, JsonSerializerOptions options)
    {
        if (value.TryGetQaAgentResultV1(out var qaAgentResultV1Value))
        {
            JsonSerializer.Serialize(writer, qaAgentResultV1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CanonicalResult)} contains no valid value to serialize.");
        }
    }
}
