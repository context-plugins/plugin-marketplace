using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Search1Api.Core.Extensions;
using Search1Api.Core.Models;

namespace Search1Api.Models.AnyOf;

[JsonConverter(typeof(CrawlRequest1Converter))]
public record CrawlRequest1
{
    private readonly Optional<CrawlRequest> _crawlRequestValue;

    private readonly Optional<IReadOnlyList<CrawlRequest>> _listOfCrawlRequestValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CrawlRequest1(Optional<CrawlRequest> crawlRequestValue,
        Optional<IReadOnlyList<CrawlRequest>> listOfCrawlRequestValue,
        Optional<UnknownArm> unknownValue)
    {
        _crawlRequestValue = crawlRequestValue;
        _listOfCrawlRequestValue = listOfCrawlRequestValue;
        _unknownValue = unknownValue;
    }

    public static CrawlRequest1 CrawlRequest(CrawlRequest value) =>
        new(Optional<CrawlRequest>.Some(value), default, default);

    public static CrawlRequest1 ListOfCrawlRequest(IReadOnlyList<CrawlRequest> value) =>
        new(default, Optional<IReadOnlyList<CrawlRequest>>.Some(value), default);

    internal static CrawlRequest1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCrawlRequest([NotNullWhen(true)] out CrawlRequest? value) =>
        _crawlRequestValue.TryGetValue(out value);

    public bool TryGetListOfCrawlRequest([NotNullWhen(true)] out IReadOnlyList<CrawlRequest>? value) =>
        _listOfCrawlRequestValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CrawlRequest1(CrawlRequest value) => CrawlRequest(value);

    public TResult Match<TResult>(Func<CrawlRequest, TResult> onCrawlRequest,
        Func<IReadOnlyList<CrawlRequest>, TResult> onListOfCrawlRequest,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCrawlRequest(out var crawlRequestValue) => onCrawlRequest(crawlRequestValue),
            _ when TryGetListOfCrawlRequest(out var listOfCrawlRequestValue) => onListOfCrawlRequest(
                listOfCrawlRequestValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CrawlRequest1)} holds no value.")
        };

    public void Match(Action<CrawlRequest> onCrawlRequest,
        Action<IReadOnlyList<CrawlRequest>> onListOfCrawlRequest,
        Action<JsonElement> otherwise)
    {
        if (TryGetCrawlRequest(out var crawlRequestValue)) onCrawlRequest(crawlRequestValue);
        else if (TryGetListOfCrawlRequest(out var listOfCrawlRequestValue)) onListOfCrawlRequest(
            listOfCrawlRequestValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CrawlRequest1)} holds no value.");
    }
}

file sealed class CrawlRequest1Converter : JsonConverter<CrawlRequest1>
{
    public override CrawlRequest1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CrawlRequest>(root, options, out var crawlRequestValue))
        {
            return CrawlRequest1.CrawlRequest(crawlRequestValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<CrawlRequest>>(root, options, out var listOfCrawlRequestValue))
        {
            return CrawlRequest1.ListOfCrawlRequest(listOfCrawlRequestValue);
        }
        return CrawlRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CrawlRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCrawlRequest(out var crawlRequestValue))
        {
            JsonSerializer.Serialize(writer, crawlRequestValue, options);
        }
        else if (value.TryGetListOfCrawlRequest(out var listOfCrawlRequestValue))
        {
            JsonSerializer.Serialize(writer, listOfCrawlRequestValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CrawlRequest1)} contains no valid value to serialize.");
        }
    }
}
