using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using S1.Core.Extensions;
using S1.Core.Models;

namespace S1.Models.AnyOf;

[JsonConverter(typeof(SearchResponse1Converter))]
public record SearchResponse1
{
    private readonly Optional<SearchResponse> _searchResponseValue;

    private readonly Optional<SearchBatchResponse> _searchBatchResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SearchResponse1(Optional<SearchResponse> searchResponseValue,
        Optional<SearchBatchResponse> searchBatchResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _searchResponseValue = searchResponseValue;
        _searchBatchResponseValue = searchBatchResponseValue;
        _unknownValue = unknownValue;
    }

    public static SearchResponse1 SearchResponse(SearchResponse value) =>
        new(Optional<SearchResponse>.Some(value), default, default);

    public static SearchResponse1 SearchBatchResponse(SearchBatchResponse value) =>
        new(default, Optional<SearchBatchResponse>.Some(value), default);

    internal static SearchResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSearchResponse([NotNullWhen(true)] out SearchResponse? value) =>
        _searchResponseValue.TryGetValue(out value);

    public bool TryGetSearchBatchResponse([NotNullWhen(true)] out SearchBatchResponse? value) =>
        _searchBatchResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SearchResponse1(SearchResponse value) => SearchResponse(value);

    public static implicit operator SearchResponse1(SearchBatchResponse value) => SearchBatchResponse(value);

    public TResult Match<TResult>(Func<SearchResponse, TResult> onSearchResponse,
        Func<SearchBatchResponse, TResult> onSearchBatchResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSearchResponse(out var searchResponseValue) => onSearchResponse(searchResponseValue),
            _ when TryGetSearchBatchResponse(out var searchBatchResponseValue) => onSearchBatchResponse(
                searchBatchResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SearchResponse1)} holds no value.")
        };

    public void Match(Action<SearchResponse> onSearchResponse,
        Action<SearchBatchResponse> onSearchBatchResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetSearchResponse(out var searchResponseValue)) onSearchResponse(searchResponseValue);
        else if (TryGetSearchBatchResponse(out var searchBatchResponseValue)) onSearchBatchResponse(
            searchBatchResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SearchResponse1)} holds no value.");
    }
}

file sealed class SearchResponse1Converter : JsonConverter<SearchResponse1>
{
    public override SearchResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SearchResponse>(root, options, out var searchResponseValue))
        {
            return SearchResponse1.SearchResponse(searchResponseValue);
        }
        if (JsonSerializer.TryDeserialize<SearchBatchResponse>(root, options, out var searchBatchResponseValue))
        {
            return SearchResponse1.SearchBatchResponse(searchBatchResponseValue);
        }
        return SearchResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SearchResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSearchResponse(out var searchResponseValue))
        {
            JsonSerializer.Serialize(writer, searchResponseValue, options);
        }
        else if (value.TryGetSearchBatchResponse(out var searchBatchResponseValue))
        {
            JsonSerializer.Serialize(writer, searchBatchResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SearchResponse1)} contains no valid value to serialize.");
        }
    }
}
