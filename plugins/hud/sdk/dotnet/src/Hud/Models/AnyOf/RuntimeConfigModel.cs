using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(RuntimeConfigModelConverter))]
public record RuntimeConfigModel
{
    private readonly Optional<SubmittedRuntimeConfig> _submittedRuntimeConfigValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RuntimeConfigModel(Optional<SubmittedRuntimeConfig> submittedRuntimeConfigValue,
        Optional<UnknownArm> unknownValue)
    {
        _submittedRuntimeConfigValue = submittedRuntimeConfigValue;
        _unknownValue = unknownValue;
    }

    public static RuntimeConfigModel SubmittedRuntimeConfig(SubmittedRuntimeConfig value) =>
        new(Optional<SubmittedRuntimeConfig>.Some(value), default);

    internal static RuntimeConfigModel Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedRuntimeConfig([NotNullWhen(true)] out SubmittedRuntimeConfig? value) =>
        _submittedRuntimeConfigValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RuntimeConfigModel(SubmittedRuntimeConfig value) => SubmittedRuntimeConfig(value);

    public TResult Match<TResult>(Func<SubmittedRuntimeConfig, TResult> onSubmittedRuntimeConfig,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedRuntimeConfig(out var submittedRuntimeConfigValue) => onSubmittedRuntimeConfig(
                submittedRuntimeConfigValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RuntimeConfigModel)} holds no value.")
        };

    public void Match(Action<SubmittedRuntimeConfig> onSubmittedRuntimeConfig, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedRuntimeConfig(out var submittedRuntimeConfigValue)) onSubmittedRuntimeConfig(
            submittedRuntimeConfigValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RuntimeConfigModel)} holds no value.");
    }
}

file sealed class RuntimeConfigModelConverter : JsonConverter<RuntimeConfigModel>
{
    public override RuntimeConfigModel Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedRuntimeConfig>(root, options, out var submittedRuntimeConfigValue))
        {
            return RuntimeConfigModel.SubmittedRuntimeConfig(submittedRuntimeConfigValue);
        }
        return RuntimeConfigModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RuntimeConfigModel value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedRuntimeConfig(out var submittedRuntimeConfigValue))
        {
            JsonSerializer.Serialize(writer, submittedRuntimeConfigValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RuntimeConfigModel)} contains no valid value to serialize.");
        }
    }
}
