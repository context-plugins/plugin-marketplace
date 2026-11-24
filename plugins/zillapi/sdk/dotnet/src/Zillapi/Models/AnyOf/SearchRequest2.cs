using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Zillapi.Core.Extensions;
using Zillapi.Core.Models;

namespace Zillapi.Models.AnyOf;

/// <summary>
/// A search request MUST supply either <c>filters</c> containing a <c>bbox</c>, OR a <c>searchUrls</c> array. A free-text location alone is not supported and is rejected with 400 invalid_filters.
/// </summary>
[JsonConverter(typeof(SearchRequest2Converter))]
public record SearchRequest2
{
    private readonly Optional<SearchRequest> _searchRequestValue;

    private readonly Optional<SearchRequest1> _searchRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private SearchRequest2(Optional<SearchRequest> searchRequestValue,
        Optional<SearchRequest1> searchRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _searchRequestValue = searchRequestValue;
        _searchRequest1Value = searchRequest1Value;
        _unknownValue = unknownValue;
    }

    public static SearchRequest2 SearchRequest(SearchRequest value) =>
        new(Optional<SearchRequest>.Some(value), default, default);

    public static SearchRequest2 SearchRequest1(SearchRequest1 value) =>
        new(default, Optional<SearchRequest1>.Some(value), default);

    internal static SearchRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSearchRequest([NotNullWhen(true)] out SearchRequest? value) =>
        _searchRequestValue.TryGetValue(out value);

    public bool TryGetSearchRequest1([NotNullWhen(true)] out SearchRequest1? value) =>
        _searchRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SearchRequest2(SearchRequest value) => SearchRequest(value);

    public static implicit operator SearchRequest2(SearchRequest1 value) => SearchRequest1(value);

    public TResult Match<TResult>(Func<SearchRequest, TResult> onSearchRequest,
        Func<SearchRequest1, TResult> onSearchRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSearchRequest(out var searchRequestValue) => onSearchRequest(searchRequestValue),
            _ when TryGetSearchRequest1(out var searchRequest1Value) => onSearchRequest1(searchRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SearchRequest2)} holds no value.")
        };

    public void Match(Action<SearchRequest> onSearchRequest,
        Action<SearchRequest1> onSearchRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetSearchRequest(out var searchRequestValue)) onSearchRequest(searchRequestValue);
        else if (TryGetSearchRequest1(out var searchRequest1Value)) onSearchRequest1(searchRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SearchRequest2)} holds no value.");
    }
}

file sealed class SearchRequest2Converter : JsonConverter<SearchRequest2>
{
    public override SearchRequest2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SearchRequest>(root, options, out var searchRequestValue))
        {
            return SearchRequest2.SearchRequest(searchRequestValue);
        }
        if (JsonSerializer.TryDeserialize<SearchRequest1>(root, options, out var searchRequest1Value))
        {
            return SearchRequest2.SearchRequest1(searchRequest1Value);
        }
        return SearchRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SearchRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetSearchRequest(out var searchRequestValue))
        {
            JsonSerializer.Serialize(writer, searchRequestValue, options);
        }
        else if (value.TryGetSearchRequest1(out var searchRequest1Value))
        {
            JsonSerializer.Serialize(writer, searchRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SearchRequest2)} contains no valid value to serialize.");
        }
    }
}
