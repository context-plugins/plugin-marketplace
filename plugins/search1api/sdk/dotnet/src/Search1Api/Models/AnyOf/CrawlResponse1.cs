using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Search1Api.Core.Extensions;
using Search1Api.Core.Models;

namespace Search1Api.Models.AnyOf;

[JsonConverter(typeof(CrawlResponse1Converter))]
public record CrawlResponse1
{
    private readonly Optional<CrawlResponse> _crawlResponseValue;

    private readonly Optional<IReadOnlyList<CrawlResponse>> _listOfCrawlResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CrawlResponse1(Optional<CrawlResponse> crawlResponseValue,
        Optional<IReadOnlyList<CrawlResponse>> listOfCrawlResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _crawlResponseValue = crawlResponseValue;
        _listOfCrawlResponseValue = listOfCrawlResponseValue;
        _unknownValue = unknownValue;
    }

    public static CrawlResponse1 CrawlResponse(CrawlResponse value) =>
        new(Optional<CrawlResponse>.Some(value), default, default);

    public static CrawlResponse1 ListOfCrawlResponse(IReadOnlyList<CrawlResponse> value) =>
        new(default, Optional<IReadOnlyList<CrawlResponse>>.Some(value), default);

    internal static CrawlResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCrawlResponse([NotNullWhen(true)] out CrawlResponse? value) =>
        _crawlResponseValue.TryGetValue(out value);

    public bool TryGetListOfCrawlResponse([NotNullWhen(true)] out IReadOnlyList<CrawlResponse>? value) =>
        _listOfCrawlResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CrawlResponse1(CrawlResponse value) => CrawlResponse(value);

    public TResult Match<TResult>(Func<CrawlResponse, TResult> onCrawlResponse,
        Func<IReadOnlyList<CrawlResponse>, TResult> onListOfCrawlResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCrawlResponse(out var crawlResponseValue) => onCrawlResponse(crawlResponseValue),
            _ when TryGetListOfCrawlResponse(out var listOfCrawlResponseValue) => onListOfCrawlResponse(
                listOfCrawlResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CrawlResponse1)} holds no value.")
        };

    public void Match(Action<CrawlResponse> onCrawlResponse,
        Action<IReadOnlyList<CrawlResponse>> onListOfCrawlResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetCrawlResponse(out var crawlResponseValue)) onCrawlResponse(crawlResponseValue);
        else if (TryGetListOfCrawlResponse(out var listOfCrawlResponseValue)) onListOfCrawlResponse(
            listOfCrawlResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CrawlResponse1)} holds no value.");
    }
}

file sealed class CrawlResponse1Converter : JsonConverter<CrawlResponse1>
{
    public override CrawlResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CrawlResponse>(root, options, out var crawlResponseValue))
        {
            return CrawlResponse1.CrawlResponse(crawlResponseValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<CrawlResponse>>(
            root,
            options,
            out var listOfCrawlResponseValue))
        {
            return CrawlResponse1.ListOfCrawlResponse(listOfCrawlResponseValue);
        }
        return CrawlResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CrawlResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCrawlResponse(out var crawlResponseValue))
        {
            JsonSerializer.Serialize(writer, crawlResponseValue, options);
        }
        else if (value.TryGetListOfCrawlResponse(out var listOfCrawlResponseValue))
        {
            JsonSerializer.Serialize(writer, listOfCrawlResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CrawlResponse1)} contains no valid value to serialize.");
        }
    }
}
