using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using S1.Core.Extensions;
using S1.Core.Models;

namespace S1.Models.AnyOf;

[JsonConverter(typeof(NewsRequestConverter))]
public record NewsRequest
{
    private readonly Optional<NewsParameters> _newsParametersValue;

    private readonly Optional<IReadOnlyList<NewsParameters>> _listOfNewsParametersValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private NewsRequest(Optional<NewsParameters> newsParametersValue,
        Optional<IReadOnlyList<NewsParameters>> listOfNewsParametersValue,
        Optional<UnknownArm> unknownValue)
    {
        _newsParametersValue = newsParametersValue;
        _listOfNewsParametersValue = listOfNewsParametersValue;
        _unknownValue = unknownValue;
    }

    public static NewsRequest NewsParameters(NewsParameters value) =>
        new(Optional<NewsParameters>.Some(value), default, default);

    public static NewsRequest ListOfNewsParameters(IReadOnlyList<NewsParameters> value) =>
        new(default, Optional<IReadOnlyList<NewsParameters>>.Some(value), default);

    internal static NewsRequest Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetNewsParameters([NotNullWhen(true)] out NewsParameters? value) =>
        _newsParametersValue.TryGetValue(out value);

    public bool TryGetListOfNewsParameters([NotNullWhen(true)] out IReadOnlyList<NewsParameters>? value) =>
        _listOfNewsParametersValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator NewsRequest(NewsParameters value) => NewsParameters(value);

    public TResult Match<TResult>(Func<NewsParameters, TResult> onNewsParameters,
        Func<IReadOnlyList<NewsParameters>, TResult> onListOfNewsParameters,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNewsParameters(out var newsParametersValue) => onNewsParameters(newsParametersValue),
            _ when TryGetListOfNewsParameters(out var listOfNewsParametersValue) => onListOfNewsParameters(
                listOfNewsParametersValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(NewsRequest)} holds no value.")
        };

    public void Match(Action<NewsParameters> onNewsParameters,
        Action<IReadOnlyList<NewsParameters>> onListOfNewsParameters,
        Action<JsonElement> otherwise)
    {
        if (TryGetNewsParameters(out var newsParametersValue)) onNewsParameters(newsParametersValue);
        else if (TryGetListOfNewsParameters(out var listOfNewsParametersValue)) onListOfNewsParameters(
            listOfNewsParametersValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(NewsRequest)} holds no value.");
    }
}

file sealed class NewsRequestConverter : JsonConverter<NewsRequest>
{
    public override NewsRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<NewsParameters>(root, options, out var newsParametersValue))
        {
            return NewsRequest.NewsParameters(newsParametersValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<NewsParameters>>(
            root,
            options,
            out var listOfNewsParametersValue))
        {
            return NewsRequest.ListOfNewsParameters(listOfNewsParametersValue);
        }
        return NewsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, NewsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetNewsParameters(out var newsParametersValue))
        {
            JsonSerializer.Serialize(writer, newsParametersValue, options);
        }
        else if (value.TryGetListOfNewsParameters(out var listOfNewsParametersValue))
        {
            JsonSerializer.Serialize(writer, listOfNewsParametersValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(NewsRequest)} contains no valid value to serialize.");
        }
    }
}
