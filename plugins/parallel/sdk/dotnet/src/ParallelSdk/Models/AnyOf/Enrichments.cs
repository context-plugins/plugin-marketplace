using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// List of enrichment inputs for the FindAll run.
/// </summary>
[JsonConverter(typeof(EnrichmentsConverter))]
public record Enrichments
{
    private readonly Optional<IReadOnlyList<FindAllEnrichInput>> _listOfFindAllEnrichInputValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Enrichments(Optional<IReadOnlyList<FindAllEnrichInput>> listOfFindAllEnrichInputValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfFindAllEnrichInputValue = listOfFindAllEnrichInputValue;
        _unknownValue = unknownValue;
    }

    public static Enrichments ListOfFindAllEnrichInput(IReadOnlyList<FindAllEnrichInput> value) =>
        new(Optional<IReadOnlyList<FindAllEnrichInput>>.Some(value), default);

    internal static Enrichments Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfFindAllEnrichInput([NotNullWhen(true)] out IReadOnlyList<FindAllEnrichInput>? value) =>
        _listOfFindAllEnrichInputValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<FindAllEnrichInput>, TResult> onListOfFindAllEnrichInput,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfFindAllEnrichInput(out var listOfFindAllEnrichInputValue) => onListOfFindAllEnrichInput(
                listOfFindAllEnrichInputValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Enrichments)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<FindAllEnrichInput>> onListOfFindAllEnrichInput,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfFindAllEnrichInput(out var listOfFindAllEnrichInputValue)) onListOfFindAllEnrichInput(
            listOfFindAllEnrichInputValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Enrichments)} holds no value.");
    }
}

file sealed class EnrichmentsConverter : JsonConverter<Enrichments>
{
    public override Enrichments Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<FindAllEnrichInput>>(
            root,
            options,
            out var listOfFindAllEnrichInputValue))
        {
            return Enrichments.ListOfFindAllEnrichInput(listOfFindAllEnrichInputValue);
        }
        return Enrichments.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Enrichments value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfFindAllEnrichInput(out var listOfFindAllEnrichInputValue))
        {
            JsonSerializer.Serialize(writer, listOfFindAllEnrichInputValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Enrichments)} contains no valid value to serialize.");
        }
    }
}
