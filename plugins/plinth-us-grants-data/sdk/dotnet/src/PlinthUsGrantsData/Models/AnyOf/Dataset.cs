using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(DatasetConverter))]
public record Dataset
{
    private readonly Optional<DatasetStamp> _datasetStampValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Dataset(Optional<DatasetStamp> datasetStampValue, Optional<UnknownArm> unknownValue)
    {
        _datasetStampValue = datasetStampValue;
        _unknownValue = unknownValue;
    }

    public static Dataset DatasetStamp(DatasetStamp value) => new(Optional<DatasetStamp>.Some(value), default);

    internal static Dataset Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDatasetStamp([NotNullWhen(true)] out DatasetStamp? value) =>
        _datasetStampValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Dataset(DatasetStamp value) => DatasetStamp(value);

    public TResult Match<TResult>(Func<DatasetStamp, TResult> onDatasetStamp, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDatasetStamp(out var datasetStampValue) => onDatasetStamp(datasetStampValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Dataset)} holds no value.")
        };

    public void Match(Action<DatasetStamp> onDatasetStamp, Action<JsonElement> otherwise)
    {
        if (TryGetDatasetStamp(out var datasetStampValue)) onDatasetStamp(datasetStampValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Dataset)} holds no value.");
    }
}

file sealed class DatasetConverter : JsonConverter<Dataset>
{
    public override Dataset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DatasetStamp>(root, options, out var datasetStampValue))
        {
            return Dataset.DatasetStamp(datasetStampValue);
        }
        return Dataset.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Dataset value, JsonSerializerOptions options)
    {
        if (value.TryGetDatasetStamp(out var datasetStampValue))
        {
            JsonSerializer.Serialize(writer, datasetStampValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Dataset)} contains no valid value to serialize.");
        }
    }
}
