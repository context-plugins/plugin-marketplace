using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Model for the parallel-beta header.
/// </summary>
[JsonConverter(typeof(ParallelBeta1ModelConverter))]
public record ParallelBeta1Model
{
    private readonly Optional<ParallelBeta> _parallelBetaValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ParallelBeta1Model(Optional<ParallelBeta> parallelBetaValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _parallelBetaValue = parallelBetaValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static ParallelBeta1Model ParallelBeta(ParallelBeta value) =>
        new(Optional<ParallelBeta>.Some(value), default, default);

    public static ParallelBeta1Model String(string value) => new(default, Optional<string>.Some(value), default);

    internal static ParallelBeta1Model Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetParallelBeta([NotNullWhen(true)] out ParallelBeta? value) =>
        _parallelBetaValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ParallelBeta1Model(ParallelBeta value) => ParallelBeta(value);

    public static implicit operator ParallelBeta1Model(string value) => String(value);

    public TResult Match<TResult>(Func<ParallelBeta, TResult> onParallelBeta,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetParallelBeta(out var parallelBetaValue) => onParallelBeta(parallelBetaValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ParallelBeta1Model)} holds no value.")
        };

    public void Match(Action<ParallelBeta> onParallelBeta, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetParallelBeta(out var parallelBetaValue)) onParallelBeta(parallelBetaValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ParallelBeta1Model)} holds no value.");
    }
}

file sealed class ParallelBeta1ModelConverter : JsonConverter<ParallelBeta1Model>
{
    public override ParallelBeta1Model Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ParallelBeta>(root, options, out var parallelBetaValue))
        {
            return ParallelBeta1Model.ParallelBeta(parallelBetaValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return ParallelBeta1Model.String(value);
        }
        return ParallelBeta1Model.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ParallelBeta1Model value, JsonSerializerOptions options)
    {
        if (value.TryGetParallelBeta(out var parallelBetaValue))
        {
            JsonSerializer.Serialize(writer, parallelBetaValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ParallelBeta1Model)} contains no valid value to serialize.");
        }
    }
}
