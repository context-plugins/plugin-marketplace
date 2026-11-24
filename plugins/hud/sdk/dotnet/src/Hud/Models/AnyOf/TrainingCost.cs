using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(TrainingCostConverter))]
public record TrainingCost
{
    private readonly Optional<TrainingCostInfo> _trainingCostInfoValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TrainingCost(Optional<TrainingCostInfo> trainingCostInfoValue, Optional<UnknownArm> unknownValue)
    {
        _trainingCostInfoValue = trainingCostInfoValue;
        _unknownValue = unknownValue;
    }

    public static TrainingCost TrainingCostInfo(TrainingCostInfo value) =>
        new(Optional<TrainingCostInfo>.Some(value), default);

    internal static TrainingCost Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTrainingCostInfo([NotNullWhen(true)] out TrainingCostInfo? value) =>
        _trainingCostInfoValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TrainingCost(TrainingCostInfo value) => TrainingCostInfo(value);

    public TResult Match<TResult>(Func<TrainingCostInfo, TResult> onTrainingCostInfo,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTrainingCostInfo(out var trainingCostInfoValue) => onTrainingCostInfo(trainingCostInfoValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TrainingCost)} holds no value.")
        };

    public void Match(Action<TrainingCostInfo> onTrainingCostInfo, Action<JsonElement> otherwise)
    {
        if (TryGetTrainingCostInfo(out var trainingCostInfoValue)) onTrainingCostInfo(trainingCostInfoValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TrainingCost)} holds no value.");
    }
}

file sealed class TrainingCostConverter : JsonConverter<TrainingCost>
{
    public override TrainingCost Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TrainingCostInfo>(root, options, out var trainingCostInfoValue))
        {
            return TrainingCost.TrainingCostInfo(trainingCostInfoValue);
        }
        return TrainingCost.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TrainingCost value, JsonSerializerOptions options)
    {
        if (value.TryGetTrainingCostInfo(out var trainingCostInfoValue))
        {
            JsonSerializer.Serialize(writer, trainingCostInfoValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TrainingCost)} contains no valid value to serialize.");
        }
    }
}
