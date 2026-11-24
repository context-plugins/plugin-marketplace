using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Extensions;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models.AnyOf;

[JsonConverter(typeof(CompassV1MetricsRequestConverter))]
public record CompassV1MetricsRequest
{
    private readonly Optional<InsertMetricByMetricDefinitionRequestDto> _insertMetricByMetricDefinitionRequestDtoValue;

    private readonly Optional<InsertMetricByMetricSourceRequestDto> _insertMetricByMetricSourceRequestDtoValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CompassV1MetricsRequest(Optional<InsertMetricByMetricDefinitionRequestDto> insertMetricByMetricDefinitionRequestDtoValue,
        Optional<InsertMetricByMetricSourceRequestDto> insertMetricByMetricSourceRequestDtoValue,
        Optional<UnknownArm> unknownValue)
    {
        _insertMetricByMetricDefinitionRequestDtoValue = insertMetricByMetricDefinitionRequestDtoValue;
        _insertMetricByMetricSourceRequestDtoValue = insertMetricByMetricSourceRequestDtoValue;
        _unknownValue = unknownValue;
    }

    public static CompassV1MetricsRequest InsertMetricByMetricDefinitionRequestDto(InsertMetricByMetricDefinitionRequestDto value) =>
        new(Optional<InsertMetricByMetricDefinitionRequestDto>.Some(value), default, default);

    public static CompassV1MetricsRequest InsertMetricByMetricSourceRequestDto(InsertMetricByMetricSourceRequestDto value) =>
        new(default, Optional<InsertMetricByMetricSourceRequestDto>.Some(value), default);

    internal static CompassV1MetricsRequest Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInsertMetricByMetricDefinitionRequestDto([NotNullWhen(true)] out InsertMetricByMetricDefinitionRequestDto? value) =>
        _insertMetricByMetricDefinitionRequestDtoValue.TryGetValue(out value);

    public bool TryGetInsertMetricByMetricSourceRequestDto([NotNullWhen(true)] out InsertMetricByMetricSourceRequestDto? value) =>
        _insertMetricByMetricSourceRequestDtoValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CompassV1MetricsRequest(InsertMetricByMetricDefinitionRequestDto value) =>
        InsertMetricByMetricDefinitionRequestDto(value);

    public static implicit operator CompassV1MetricsRequest(InsertMetricByMetricSourceRequestDto value) =>
        InsertMetricByMetricSourceRequestDto(value);

    public TResult Match<TResult>(Func<InsertMetricByMetricDefinitionRequestDto, TResult> onInsertMetricByMetricDefinitionRequestDto,
        Func<InsertMetricByMetricSourceRequestDto, TResult> onInsertMetricByMetricSourceRequestDto,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInsertMetricByMetricDefinitionRequestDto(
                out var insertMetricByMetricDefinitionRequestDtoValue) => onInsertMetricByMetricDefinitionRequestDto(
                insertMetricByMetricDefinitionRequestDtoValue),
            _ when TryGetInsertMetricByMetricSourceRequestDto(
                out var insertMetricByMetricSourceRequestDtoValue) => onInsertMetricByMetricSourceRequestDto(
                insertMetricByMetricSourceRequestDtoValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CompassV1MetricsRequest)} holds no value.")
        };

    public void Match(Action<InsertMetricByMetricDefinitionRequestDto> onInsertMetricByMetricDefinitionRequestDto,
        Action<InsertMetricByMetricSourceRequestDto> onInsertMetricByMetricSourceRequestDto,
        Action<JsonElement> otherwise)
    {
        if (TryGetInsertMetricByMetricDefinitionRequestDto(
            out var insertMetricByMetricDefinitionRequestDtoValue)) onInsertMetricByMetricDefinitionRequestDto(
            insertMetricByMetricDefinitionRequestDtoValue);
        else if (TryGetInsertMetricByMetricSourceRequestDto(
            out var insertMetricByMetricSourceRequestDtoValue)) onInsertMetricByMetricSourceRequestDto(
            insertMetricByMetricSourceRequestDtoValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CompassV1MetricsRequest)} holds no value.");
    }
}

file sealed class CompassV1MetricsRequestConverter : JsonConverter<CompassV1MetricsRequest>
{
    public override CompassV1MetricsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<InsertMetricByMetricDefinitionRequestDto>(
            root,
            options,
            out var insertMetricByMetricDefinitionRequestDtoValue))
        {
            return CompassV1MetricsRequest.InsertMetricByMetricDefinitionRequestDto(
                insertMetricByMetricDefinitionRequestDtoValue);
        }
        if (JsonSerializer.TryDeserialize<InsertMetricByMetricSourceRequestDto>(
            root,
            options,
            out var insertMetricByMetricSourceRequestDtoValue))
        {
            return CompassV1MetricsRequest.InsertMetricByMetricSourceRequestDto(
                insertMetricByMetricSourceRequestDtoValue);
        }
        return CompassV1MetricsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CompassV1MetricsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetInsertMetricByMetricDefinitionRequestDto(out var insertMetricByMetricDefinitionRequestDtoValue))
        {
            JsonSerializer.Serialize(writer, insertMetricByMetricDefinitionRequestDtoValue, options);
        }
        else if (value.TryGetInsertMetricByMetricSourceRequestDto(out var insertMetricByMetricSourceRequestDtoValue))
        {
            JsonSerializer.Serialize(writer, insertMetricByMetricSourceRequestDtoValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CompassV1MetricsRequest)} contains no valid value to serialize.");
        }
    }
}
