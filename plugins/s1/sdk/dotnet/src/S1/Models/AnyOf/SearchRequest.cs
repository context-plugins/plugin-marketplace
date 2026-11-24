using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using S1.Core.Extensions;
using S1.Core.Models;

namespace S1.Models.AnyOf;

[JsonConverter(typeof(SearchRequestConverter))]
public record SearchRequest
{
    private readonly Optional<SearchParameters> _searchParametersValue;

    private readonly Optional<IReadOnlyList<SearchParameters>> _listOfSearchParametersValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SearchRequest(Optional<SearchParameters> searchParametersValue,
        Optional<IReadOnlyList<SearchParameters>> listOfSearchParametersValue,
        Optional<UnknownArm> unknownValue)
    {
        _searchParametersValue = searchParametersValue;
        _listOfSearchParametersValue = listOfSearchParametersValue;
        _unknownValue = unknownValue;
    }

    public static SearchRequest SearchParameters(SearchParameters value) =>
        new(Optional<SearchParameters>.Some(value), default, default);

    public static SearchRequest ListOfSearchParameters(IReadOnlyList<SearchParameters> value) =>
        new(default, Optional<IReadOnlyList<SearchParameters>>.Some(value), default);

    internal static SearchRequest Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSearchParameters([NotNullWhen(true)] out SearchParameters? value) =>
        _searchParametersValue.TryGetValue(out value);

    public bool TryGetListOfSearchParameters([NotNullWhen(true)] out IReadOnlyList<SearchParameters>? value) =>
        _listOfSearchParametersValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SearchRequest(SearchParameters value) => SearchParameters(value);

    public TResult Match<TResult>(Func<SearchParameters, TResult> onSearchParameters,
        Func<IReadOnlyList<SearchParameters>, TResult> onListOfSearchParameters,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSearchParameters(out var searchParametersValue) => onSearchParameters(searchParametersValue),
            _ when TryGetListOfSearchParameters(out var listOfSearchParametersValue) => onListOfSearchParameters(
                listOfSearchParametersValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SearchRequest)} holds no value.")
        };

    public void Match(Action<SearchParameters> onSearchParameters,
        Action<IReadOnlyList<SearchParameters>> onListOfSearchParameters,
        Action<JsonElement> otherwise)
    {
        if (TryGetSearchParameters(out var searchParametersValue)) onSearchParameters(searchParametersValue);
        else if (TryGetListOfSearchParameters(out var listOfSearchParametersValue)) onListOfSearchParameters(
            listOfSearchParametersValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SearchRequest)} holds no value.");
    }
}

file sealed class SearchRequestConverter : JsonConverter<SearchRequest>
{
    public override SearchRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SearchParameters>(root, options, out var searchParametersValue))
        {
            return SearchRequest.SearchParameters(searchParametersValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<SearchParameters>>(
            root,
            options,
            out var listOfSearchParametersValue))
        {
            return SearchRequest.ListOfSearchParameters(listOfSearchParametersValue);
        }
        return SearchRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SearchRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetSearchParameters(out var searchParametersValue))
        {
            JsonSerializer.Serialize(writer, searchParametersValue, options);
        }
        else if (value.TryGetListOfSearchParameters(out var listOfSearchParametersValue))
        {
            JsonSerializer.Serialize(writer, listOfSearchParametersValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SearchRequest)} contains no valid value to serialize.");
        }
    }
}
