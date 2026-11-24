using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Usage metrics for the search request.
/// </summary>
[JsonConverter(typeof(UsageParallelAiSearchApiConverter))]
public record UsageParallelAiSearchApi
{
    private readonly Optional<IReadOnlyList<UsageItem>> _listOfUsageItemValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private UsageParallelAiSearchApi(Optional<IReadOnlyList<UsageItem>> listOfUsageItemValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfUsageItemValue = listOfUsageItemValue;
        _unknownValue = unknownValue;
    }

    public static UsageParallelAiSearchApi ListOfUsageItem(IReadOnlyList<UsageItem> value) =>
        new(Optional<IReadOnlyList<UsageItem>>.Some(value), default);

    internal static UsageParallelAiSearchApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfUsageItem([NotNullWhen(true)] out IReadOnlyList<UsageItem>? value) =>
        _listOfUsageItemValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<UsageItem>, TResult> onListOfUsageItem,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfUsageItem(out var listOfUsageItemValue) => onListOfUsageItem(listOfUsageItemValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UsageParallelAiSearchApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<UsageItem>> onListOfUsageItem, Action<JsonElement> otherwise)
    {
        if (TryGetListOfUsageItem(out var listOfUsageItemValue)) onListOfUsageItem(listOfUsageItemValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UsageParallelAiSearchApi)} holds no value.");
    }
}

file sealed class UsageParallelAiSearchApiConverter : JsonConverter<UsageParallelAiSearchApi>
{
    public override UsageParallelAiSearchApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<UsageItem>>(root, options, out var listOfUsageItemValue))
        {
            return UsageParallelAiSearchApi.ListOfUsageItem(listOfUsageItemValue);
        }
        return UsageParallelAiSearchApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, UsageParallelAiSearchApi value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfUsageItem(out var listOfUsageItemValue))
        {
            JsonSerializer.Serialize(writer, listOfUsageItemValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(UsageParallelAiSearchApi)} contains no valid value to serialize.");
        }
    }
}
