using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(GpuConverter))]
public record Gpu
{
    private readonly Optional<SubmittedRuntimeGpu> _submittedRuntimeGpuValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Gpu(Optional<SubmittedRuntimeGpu> submittedRuntimeGpuValue, Optional<UnknownArm> unknownValue)
    {
        _submittedRuntimeGpuValue = submittedRuntimeGpuValue;
        _unknownValue = unknownValue;
    }

    public static Gpu SubmittedRuntimeGpu(SubmittedRuntimeGpu value) =>
        new(Optional<SubmittedRuntimeGpu>.Some(value), default);

    internal static Gpu Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedRuntimeGpu([NotNullWhen(true)] out SubmittedRuntimeGpu? value) =>
        _submittedRuntimeGpuValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Gpu(SubmittedRuntimeGpu value) => SubmittedRuntimeGpu(value);

    public TResult Match<TResult>(Func<SubmittedRuntimeGpu, TResult> onSubmittedRuntimeGpu,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedRuntimeGpu(out var submittedRuntimeGpuValue) => onSubmittedRuntimeGpu(
                submittedRuntimeGpuValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Gpu)} holds no value.")
        };

    public void Match(Action<SubmittedRuntimeGpu> onSubmittedRuntimeGpu, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedRuntimeGpu(out var submittedRuntimeGpuValue)) onSubmittedRuntimeGpu(
            submittedRuntimeGpuValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Gpu)} holds no value.");
    }
}

file sealed class GpuConverter : JsonConverter<Gpu>
{
    public override Gpu Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedRuntimeGpu>(root, options, out var submittedRuntimeGpuValue))
        {
            return Gpu.SubmittedRuntimeGpu(submittedRuntimeGpuValue);
        }
        return Gpu.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Gpu value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedRuntimeGpu(out var submittedRuntimeGpuValue))
        {
            JsonSerializer.Serialize(writer, submittedRuntimeGpuValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Gpu)} contains no valid value to serialize.");
        }
    }
}
