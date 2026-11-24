using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// List of entity names/IDs to exclude from results. At most 10,000 entries are allowed.
/// </summary>
[JsonConverter(typeof(ExcludeListConverter))]
public record ExcludeList
{
    private readonly Optional<IReadOnlyList<ExcludeCandidate>> _listOfExcludeCandidateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ExcludeList(Optional<IReadOnlyList<ExcludeCandidate>> listOfExcludeCandidateValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfExcludeCandidateValue = listOfExcludeCandidateValue;
        _unknownValue = unknownValue;
    }

    public static ExcludeList ListOfExcludeCandidate(IReadOnlyList<ExcludeCandidate> value) =>
        new(Optional<IReadOnlyList<ExcludeCandidate>>.Some(value), default);

    internal static ExcludeList Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfExcludeCandidate([NotNullWhen(true)] out IReadOnlyList<ExcludeCandidate>? value) =>
        _listOfExcludeCandidateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<ExcludeCandidate>, TResult> onListOfExcludeCandidate,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfExcludeCandidate(out var listOfExcludeCandidateValue) => onListOfExcludeCandidate(
                listOfExcludeCandidateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ExcludeList)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ExcludeCandidate>> onListOfExcludeCandidate, Action<JsonElement> otherwise)
    {
        if (TryGetListOfExcludeCandidate(out var listOfExcludeCandidateValue)) onListOfExcludeCandidate(
            listOfExcludeCandidateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ExcludeList)} holds no value.");
    }
}

file sealed class ExcludeListConverter : JsonConverter<ExcludeList>
{
    public override ExcludeList Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ExcludeCandidate>>(
            root,
            options,
            out var listOfExcludeCandidateValue))
        {
            return ExcludeList.ListOfExcludeCandidate(listOfExcludeCandidateValue);
        }
        return ExcludeList.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ExcludeList value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfExcludeCandidate(out var listOfExcludeCandidateValue))
        {
            JsonSerializer.Serialize(writer, listOfExcludeCandidateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ExcludeList)} contains no valid value to serialize.");
        }
    }
}
