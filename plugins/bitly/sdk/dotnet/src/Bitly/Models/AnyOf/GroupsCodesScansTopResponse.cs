using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitly.Core.Extensions;
using Bitly.Core.Models;

namespace Bitly.Models.AnyOf;

[JsonConverter(typeof(GroupsCodesScansTopResponseConverter))]
public record GroupsCodesScansTopResponse
{
    private readonly Optional<SortedLinks> _sortedLinksValue;

    private readonly Optional<TopLinksAndQrCodes> _topLinksAndQrCodesValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private GroupsCodesScansTopResponse(Optional<SortedLinks> sortedLinksValue,
        Optional<TopLinksAndQrCodes> topLinksAndQrCodesValue,
        Optional<UnknownArm> unknownValue)
    {
        _sortedLinksValue = sortedLinksValue;
        _topLinksAndQrCodesValue = topLinksAndQrCodesValue;
        _unknownValue = unknownValue;
    }

    public static GroupsCodesScansTopResponse SortedLinks(SortedLinks value) =>
        new(Optional<SortedLinks>.Some(value), default, default);

    public static GroupsCodesScansTopResponse TopLinksAndQrCodes(TopLinksAndQrCodes value) =>
        new(default, Optional<TopLinksAndQrCodes>.Some(value), default);

    internal static GroupsCodesScansTopResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSortedLinks([NotNullWhen(true)] out SortedLinks? value) =>
        _sortedLinksValue.TryGetValue(out value);

    public bool TryGetTopLinksAndQrCodes([NotNullWhen(true)] out TopLinksAndQrCodes? value) =>
        _topLinksAndQrCodesValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GroupsCodesScansTopResponse(SortedLinks value) => SortedLinks(value);

    public static implicit operator GroupsCodesScansTopResponse(TopLinksAndQrCodes value) => TopLinksAndQrCodes(value);

    public TResult Match<TResult>(Func<SortedLinks, TResult> onSortedLinks,
        Func<TopLinksAndQrCodes, TResult> onTopLinksAndQrCodes,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSortedLinks(out var sortedLinksValue) => onSortedLinks(sortedLinksValue),
            _ when TryGetTopLinksAndQrCodes(out var topLinksAndQrCodesValue) => onTopLinksAndQrCodes(
                topLinksAndQrCodesValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GroupsCodesScansTopResponse)} holds no value.")
        };

    public void Match(Action<SortedLinks> onSortedLinks,
        Action<TopLinksAndQrCodes> onTopLinksAndQrCodes,
        Action<JsonElement> otherwise)
    {
        if (TryGetSortedLinks(out var sortedLinksValue)) onSortedLinks(sortedLinksValue);
        else if (TryGetTopLinksAndQrCodes(out var topLinksAndQrCodesValue)) onTopLinksAndQrCodes(
            topLinksAndQrCodesValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GroupsCodesScansTopResponse)} holds no value.");
    }
}

file sealed class GroupsCodesScansTopResponseConverter : JsonConverter<GroupsCodesScansTopResponse>
{
    public override GroupsCodesScansTopResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SortedLinks>(root, options, out var sortedLinksValue))
        {
            return GroupsCodesScansTopResponse.SortedLinks(sortedLinksValue);
        }
        if (JsonSerializer.TryDeserialize<TopLinksAndQrCodes>(root, options, out var topLinksAndQrCodesValue))
        {
            return GroupsCodesScansTopResponse.TopLinksAndQrCodes(topLinksAndQrCodesValue);
        }
        return GroupsCodesScansTopResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GroupsCodesScansTopResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetSortedLinks(out var sortedLinksValue))
        {
            JsonSerializer.Serialize(writer, sortedLinksValue, options);
        }
        else if (value.TryGetTopLinksAndQrCodes(out var topLinksAndQrCodesValue))
        {
            JsonSerializer.Serialize(writer, topLinksAndQrCodesValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GroupsCodesScansTopResponse)} contains no valid value to serialize.");
        }
    }
}
