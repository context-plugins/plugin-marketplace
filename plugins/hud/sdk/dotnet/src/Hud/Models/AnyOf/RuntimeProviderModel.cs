using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(RuntimeProviderModelConverter))]
public record RuntimeProviderModel
{
    private readonly Optional<RuntimeProviderName> _runtimeProviderNameValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RuntimeProviderModel(Optional<RuntimeProviderName> runtimeProviderNameValue,
        Optional<UnknownArm> unknownValue)
    {
        _runtimeProviderNameValue = runtimeProviderNameValue;
        _unknownValue = unknownValue;
    }

    public static RuntimeProviderModel RuntimeProviderName(RuntimeProviderName value) =>
        new(Optional<RuntimeProviderName>.Some(value), default);

    internal static RuntimeProviderModel Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRuntimeProviderName([NotNullWhen(true)] out RuntimeProviderName? value) =>
        _runtimeProviderNameValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RuntimeProviderModel(RuntimeProviderName value) => RuntimeProviderName(value);

    public TResult Match<TResult>(Func<RuntimeProviderName, TResult> onRuntimeProviderName,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRuntimeProviderName(out var runtimeProviderNameValue) => onRuntimeProviderName(
                runtimeProviderNameValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RuntimeProviderModel)} holds no value.")
        };

    public void Match(Action<RuntimeProviderName> onRuntimeProviderName, Action<JsonElement> otherwise)
    {
        if (TryGetRuntimeProviderName(out var runtimeProviderNameValue)) onRuntimeProviderName(
            runtimeProviderNameValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RuntimeProviderModel)} holds no value.");
    }
}

file sealed class RuntimeProviderModelConverter : JsonConverter<RuntimeProviderModel>
{
    public override RuntimeProviderModel Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RuntimeProviderName>(root, options, out var runtimeProviderNameValue))
        {
            return RuntimeProviderModel.RuntimeProviderName(runtimeProviderNameValue);
        }
        return RuntimeProviderModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RuntimeProviderModel value, JsonSerializerOptions options)
    {
        if (value.TryGetRuntimeProviderName(out var runtimeProviderNameValue))
        {
            JsonSerializer.Serialize(writer, runtimeProviderNameValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RuntimeProviderModel)} contains no valid value to serialize.");
        }
    }
}
