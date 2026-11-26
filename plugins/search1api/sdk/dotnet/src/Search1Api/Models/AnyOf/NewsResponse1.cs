using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Search1Api.Core.Extensions;
using Search1Api.Core.Models;

namespace Search1Api.Models.AnyOf;

[JsonConverter(typeof(NewsResponse1Converter))]
public record NewsResponse1
{
    private readonly Optional<NewsResponse> _newsResponseValue;

    private readonly Optional<NewsBatchResponse> _newsBatchResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private NewsResponse1(Optional<NewsResponse> newsResponseValue,
        Optional<NewsBatchResponse> newsBatchResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _newsResponseValue = newsResponseValue;
        _newsBatchResponseValue = newsBatchResponseValue;
        _unknownValue = unknownValue;
    }

    public static NewsResponse1 NewsResponse(NewsResponse value) =>
        new(Optional<NewsResponse>.Some(value), default, default);

    public static NewsResponse1 NewsBatchResponse(NewsBatchResponse value) =>
        new(default, Optional<NewsBatchResponse>.Some(value), default);

    internal static NewsResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetNewsResponse([NotNullWhen(true)] out NewsResponse? value) =>
        _newsResponseValue.TryGetValue(out value);

    public bool TryGetNewsBatchResponse([NotNullWhen(true)] out NewsBatchResponse? value) =>
        _newsBatchResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator NewsResponse1(NewsResponse value) => NewsResponse(value);

    public static implicit operator NewsResponse1(NewsBatchResponse value) => NewsBatchResponse(value);

    public TResult Match<TResult>(Func<NewsResponse, TResult> onNewsResponse,
        Func<NewsBatchResponse, TResult> onNewsBatchResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNewsResponse(out var newsResponseValue) => onNewsResponse(newsResponseValue),
            _ when TryGetNewsBatchResponse(out var newsBatchResponseValue) => onNewsBatchResponse(
                newsBatchResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(NewsResponse1)} holds no value.")
        };

    public void Match(Action<NewsResponse> onNewsResponse,
        Action<NewsBatchResponse> onNewsBatchResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetNewsResponse(out var newsResponseValue)) onNewsResponse(newsResponseValue);
        else if (TryGetNewsBatchResponse(out var newsBatchResponseValue)) onNewsBatchResponse(newsBatchResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(NewsResponse1)} holds no value.");
    }
}

file sealed class NewsResponse1Converter : JsonConverter<NewsResponse1>
{
    public override NewsResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<NewsResponse>(root, options, out var newsResponseValue))
        {
            return NewsResponse1.NewsResponse(newsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<NewsBatchResponse>(root, options, out var newsBatchResponseValue))
        {
            return NewsResponse1.NewsBatchResponse(newsBatchResponseValue);
        }
        return NewsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, NewsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetNewsResponse(out var newsResponseValue))
        {
            JsonSerializer.Serialize(writer, newsResponseValue, options);
        }
        else if (value.TryGetNewsBatchResponse(out var newsBatchResponseValue))
        {
            JsonSerializer.Serialize(writer, newsBatchResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(NewsResponse1)} contains no valid value to serialize.");
        }
    }
}
