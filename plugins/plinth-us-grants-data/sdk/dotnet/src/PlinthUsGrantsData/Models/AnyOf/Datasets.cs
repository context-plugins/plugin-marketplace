using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// Every corpus this response could have drawn on, each with its own licence terms. /sql only: you write the query, so which corpus answered is not knowable per response — honour every licence listed.
/// </summary>
[JsonConverter(typeof(DatasetsConverter))]
public record Datasets
{
    private readonly Optional<IReadOnlyList<DatasetStamp>> _listOfDatasetStampValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Datasets(Optional<IReadOnlyList<DatasetStamp>> listOfDatasetStampValue, Optional<UnknownArm> unknownValue)
    {
        _listOfDatasetStampValue = listOfDatasetStampValue;
        _unknownValue = unknownValue;
    }

    public static Datasets ListOfDatasetStamp(IReadOnlyList<DatasetStamp> value) =>
        new(Optional<IReadOnlyList<DatasetStamp>>.Some(value), default);

    internal static Datasets Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfDatasetStamp([NotNullWhen(true)] out IReadOnlyList<DatasetStamp>? value) =>
        _listOfDatasetStampValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<DatasetStamp>, TResult> onListOfDatasetStamp,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfDatasetStamp(out var listOfDatasetStampValue) => onListOfDatasetStamp(
                listOfDatasetStampValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Datasets)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<DatasetStamp>> onListOfDatasetStamp, Action<JsonElement> otherwise)
    {
        if (TryGetListOfDatasetStamp(out var listOfDatasetStampValue)) onListOfDatasetStamp(listOfDatasetStampValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Datasets)} holds no value.");
    }
}

file sealed class DatasetsConverter : JsonConverter<Datasets>
{
    public override Datasets Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<DatasetStamp>>(root, options, out var listOfDatasetStampValue))
        {
            return Datasets.ListOfDatasetStamp(listOfDatasetStampValue);
        }
        return Datasets.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Datasets value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfDatasetStamp(out var listOfDatasetStampValue))
        {
            JsonSerializer.Serialize(writer, listOfDatasetStampValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Datasets)} contains no valid value to serialize.");
        }
    }
}
