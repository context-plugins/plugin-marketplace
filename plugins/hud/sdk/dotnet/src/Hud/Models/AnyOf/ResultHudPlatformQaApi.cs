using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ResultHudPlatformQaApiConverter))]
public record ResultHudPlatformQaApi
{
    private readonly Optional<QaCheckResultV1> _qaCheckResultV1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResultHudPlatformQaApi(Optional<QaCheckResultV1> qaCheckResultV1Value, Optional<UnknownArm> unknownValue)
    {
        _qaCheckResultV1Value = qaCheckResultV1Value;
        _unknownValue = unknownValue;
    }

    public static ResultHudPlatformQaApi QaCheckResultV1(QaCheckResultV1 value) =>
        new(Optional<QaCheckResultV1>.Some(value), default);

    internal static ResultHudPlatformQaApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetQaCheckResultV1([NotNullWhen(true)] out QaCheckResultV1? value) =>
        _qaCheckResultV1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResultHudPlatformQaApi(QaCheckResultV1 value) => QaCheckResultV1(value);

    public TResult Match<TResult>(Func<QaCheckResultV1, TResult> onQaCheckResultV1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetQaCheckResultV1(out var qaCheckResultV1Value) => onQaCheckResultV1(qaCheckResultV1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ResultHudPlatformQaApi)} holds no value.")
        };

    public void Match(Action<QaCheckResultV1> onQaCheckResultV1, Action<JsonElement> otherwise)
    {
        if (TryGetQaCheckResultV1(out var qaCheckResultV1Value)) onQaCheckResultV1(qaCheckResultV1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ResultHudPlatformQaApi)} holds no value.");
    }
}

file sealed class ResultHudPlatformQaApiConverter : JsonConverter<ResultHudPlatformQaApi>
{
    public override ResultHudPlatformQaApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<QaCheckResultV1>(root, options, out var qaCheckResultV1Value))
        {
            return ResultHudPlatformQaApi.QaCheckResultV1(qaCheckResultV1Value);
        }
        return ResultHudPlatformQaApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ResultHudPlatformQaApi value, JsonSerializerOptions options)
    {
        if (value.TryGetQaCheckResultV1(out var qaCheckResultV1Value))
        {
            JsonSerializer.Serialize(writer, qaCheckResultV1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ResultHudPlatformQaApi)} contains no valid value to serialize.");
        }
    }
}
