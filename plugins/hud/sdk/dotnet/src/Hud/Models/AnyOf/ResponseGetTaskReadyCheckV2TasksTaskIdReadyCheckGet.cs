using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetConverter))]
public record ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
{
    private readonly Optional<ReadyRequirementsEvaluation> _readyRequirementsEvaluationValue;

    private readonly Optional<ReadyRequirementsNotConfigured> _readyRequirementsNotConfiguredValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet(Optional<ReadyRequirementsEvaluation> readyRequirementsEvaluationValue,
        Optional<ReadyRequirementsNotConfigured> readyRequirementsNotConfiguredValue,
        Optional<UnknownArm> unknownValue)
    {
        _readyRequirementsEvaluationValue = readyRequirementsEvaluationValue;
        _readyRequirementsNotConfiguredValue = readyRequirementsNotConfiguredValue;
        _unknownValue = unknownValue;
    }

    public static ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet ReadyRequirementsEvaluation(ReadyRequirementsEvaluation value) =>
        new(Optional<ReadyRequirementsEvaluation>.Some(value), default, default);

    public static ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet ReadyRequirementsNotConfigured(ReadyRequirementsNotConfigured value) =>
        new(default, Optional<ReadyRequirementsNotConfigured>.Some(value), default);

    internal static ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReadyRequirementsEvaluation([NotNullWhen(true)] out ReadyRequirementsEvaluation? value) =>
        _readyRequirementsEvaluationValue.TryGetValue(out value);

    public bool TryGetReadyRequirementsNotConfigured([NotNullWhen(true)] out ReadyRequirementsNotConfigured? value) =>
        _readyRequirementsNotConfiguredValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet(ReadyRequirementsEvaluation value) =>
        ReadyRequirementsEvaluation(value);

    public static implicit operator ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet(ReadyRequirementsNotConfigured value) =>
        ReadyRequirementsNotConfigured(value);

    public TResult Match<TResult>(Func<ReadyRequirementsEvaluation, TResult> onReadyRequirementsEvaluation,
        Func<ReadyRequirementsNotConfigured, TResult> onReadyRequirementsNotConfigured,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReadyRequirementsEvaluation(
                out var readyRequirementsEvaluationValue) => onReadyRequirementsEvaluation(
                readyRequirementsEvaluationValue),
            _ when TryGetReadyRequirementsNotConfigured(
                out var readyRequirementsNotConfiguredValue) => onReadyRequirementsNotConfigured(
                readyRequirementsNotConfiguredValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet)} holds no value.")
        };

    public void Match(Action<ReadyRequirementsEvaluation> onReadyRequirementsEvaluation,
        Action<ReadyRequirementsNotConfigured> onReadyRequirementsNotConfigured,
        Action<JsonElement> otherwise)
    {
        if (TryGetReadyRequirementsEvaluation(out var readyRequirementsEvaluationValue)) onReadyRequirementsEvaluation(
            readyRequirementsEvaluationValue);
        else if (TryGetReadyRequirementsNotConfigured(
            out var readyRequirementsNotConfiguredValue)) onReadyRequirementsNotConfigured(
            readyRequirementsNotConfiguredValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet)} holds no value.");
    }
}

file sealed class ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetConverter : JsonConverter<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet>
{
    public override ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReadyRequirementsEvaluation>(
            root,
            options,
            out var readyRequirementsEvaluationValue))
        {
            return ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet.ReadyRequirementsEvaluation(
                readyRequirementsEvaluationValue);
        }
        if (JsonSerializer.TryDeserialize<ReadyRequirementsNotConfigured>(
            root,
            options,
            out var readyRequirementsNotConfiguredValue))
        {
            return ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet.ReadyRequirementsNotConfigured(
                readyRequirementsNotConfiguredValue);
        }
        return ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetReadyRequirementsEvaluation(out var readyRequirementsEvaluationValue))
        {
            JsonSerializer.Serialize(writer, readyRequirementsEvaluationValue, options);
        }
        else if (value.TryGetReadyRequirementsNotConfigured(out var readyRequirementsNotConfiguredValue))
        {
            JsonSerializer.Serialize(writer, readyRequirementsNotConfiguredValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet)} contains no valid value to serialize.");
        }
    }
}
