using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models.AnyOf;

/// <summary>
/// The field to group the QR codes.
/// </summary>
[JsonConverter(typeof(GroupBy4CodeqrIoQrCodesApiConverter))]
public record GroupBy4CodeqrIoQrCodesApi
{
    private readonly Optional<GroupByCodeqrIoLinksApi> _groupByCodeqrIoLinksApiValue;

    private readonly Optional<GroupBy1> _groupBy1Value;

    private readonly Optional<GroupBy2> _groupBy2Value;

    private readonly Optional<GroupBy3> _groupBy3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private GroupBy4CodeqrIoQrCodesApi(Optional<GroupByCodeqrIoLinksApi> groupByCodeqrIoLinksApiValue,
        Optional<GroupBy1> groupBy1Value,
        Optional<GroupBy2> groupBy2Value,
        Optional<GroupBy3> groupBy3Value,
        Optional<UnknownArm> unknownValue)
    {
        _groupByCodeqrIoLinksApiValue = groupByCodeqrIoLinksApiValue;
        _groupBy1Value = groupBy1Value;
        _groupBy2Value = groupBy2Value;
        _groupBy3Value = groupBy3Value;
        _unknownValue = unknownValue;
    }

    public static GroupBy4CodeqrIoQrCodesApi GroupByCodeqrIoLinksApi(GroupByCodeqrIoLinksApi value) =>
        new(Optional<GroupByCodeqrIoLinksApi>.Some(value), default, default, default, default);

    public static GroupBy4CodeqrIoQrCodesApi GroupBy1(GroupBy1 value) =>
        new(default, Optional<GroupBy1>.Some(value), default, default, default);

    public static GroupBy4CodeqrIoQrCodesApi GroupBy2(GroupBy2 value) =>
        new(default, default, Optional<GroupBy2>.Some(value), default, default);

    public static GroupBy4CodeqrIoQrCodesApi GroupBy3(GroupBy3 value) =>
        new(default, default, default, Optional<GroupBy3>.Some(value), default);

    internal static GroupBy4CodeqrIoQrCodesApi Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGroupByCodeqrIoLinksApi([NotNullWhen(true)] out GroupByCodeqrIoLinksApi? value) =>
        _groupByCodeqrIoLinksApiValue.TryGetValue(out value);

    public bool TryGetGroupBy1([NotNullWhen(true)] out GroupBy1? value) => _groupBy1Value.TryGetValue(out value);

    public bool TryGetGroupBy2([NotNullWhen(true)] out GroupBy2? value) => _groupBy2Value.TryGetValue(out value);

    public bool TryGetGroupBy3([NotNullWhen(true)] out GroupBy3? value) => _groupBy3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GroupBy4CodeqrIoQrCodesApi(GroupByCodeqrIoLinksApi value) =>
        GroupByCodeqrIoLinksApi(value);

    public static implicit operator GroupBy4CodeqrIoQrCodesApi(GroupBy1 value) => GroupBy1(value);

    public static implicit operator GroupBy4CodeqrIoQrCodesApi(GroupBy2 value) => GroupBy2(value);

    public static implicit operator GroupBy4CodeqrIoQrCodesApi(GroupBy3 value) => GroupBy3(value);

    public TResult Match<TResult>(Func<GroupByCodeqrIoLinksApi, TResult> onGroupByCodeqrIoLinksApi,
        Func<GroupBy1, TResult> onGroupBy1,
        Func<GroupBy2, TResult> onGroupBy2,
        Func<GroupBy3, TResult> onGroupBy3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGroupByCodeqrIoLinksApi(out var groupByCodeqrIoLinksApiValue) => onGroupByCodeqrIoLinksApi(
                groupByCodeqrIoLinksApiValue),
            _ when TryGetGroupBy1(out var groupBy1Value) => onGroupBy1(groupBy1Value),
            _ when TryGetGroupBy2(out var groupBy2Value) => onGroupBy2(groupBy2Value),
            _ when TryGetGroupBy3(out var groupBy3Value) => onGroupBy3(groupBy3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GroupBy4CodeqrIoQrCodesApi)} holds no value.")
        };

    public void Match(Action<GroupByCodeqrIoLinksApi> onGroupByCodeqrIoLinksApi,
        Action<GroupBy1> onGroupBy1,
        Action<GroupBy2> onGroupBy2,
        Action<GroupBy3> onGroupBy3,
        Action<JsonElement> otherwise)
    {
        if (TryGetGroupByCodeqrIoLinksApi(out var groupByCodeqrIoLinksApiValue)) onGroupByCodeqrIoLinksApi(
            groupByCodeqrIoLinksApiValue);
        else if (TryGetGroupBy1(out var groupBy1Value)) onGroupBy1(groupBy1Value);
        else if (TryGetGroupBy2(out var groupBy2Value)) onGroupBy2(groupBy2Value);
        else if (TryGetGroupBy3(out var groupBy3Value)) onGroupBy3(groupBy3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GroupBy4CodeqrIoQrCodesApi)} holds no value.");
    }
}

file sealed class GroupBy4CodeqrIoQrCodesApiConverter : JsonConverter<GroupBy4CodeqrIoQrCodesApi>
{
    public override GroupBy4CodeqrIoQrCodesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GroupByCodeqrIoLinksApi>(root, options, out var groupByCodeqrIoLinksApiValue))
        {
            return GroupBy4CodeqrIoQrCodesApi.GroupByCodeqrIoLinksApi(groupByCodeqrIoLinksApiValue);
        }
        if (JsonSerializer.TryDeserialize<GroupBy1>(root, options, out var groupBy1Value))
        {
            return GroupBy4CodeqrIoQrCodesApi.GroupBy1(groupBy1Value);
        }
        if (JsonSerializer.TryDeserialize<GroupBy2>(root, options, out var groupBy2Value))
        {
            return GroupBy4CodeqrIoQrCodesApi.GroupBy2(groupBy2Value);
        }
        if (JsonSerializer.TryDeserialize<GroupBy3>(root, options, out var groupBy3Value))
        {
            return GroupBy4CodeqrIoQrCodesApi.GroupBy3(groupBy3Value);
        }
        return GroupBy4CodeqrIoQrCodesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GroupBy4CodeqrIoQrCodesApi value, JsonSerializerOptions options)
    {
        if (value.TryGetGroupByCodeqrIoLinksApi(out var groupByCodeqrIoLinksApiValue))
        {
            JsonSerializer.Serialize(writer, groupByCodeqrIoLinksApiValue, options);
        }
        else if (value.TryGetGroupBy1(out var groupBy1Value))
        {
            JsonSerializer.Serialize(writer, groupBy1Value, options);
        }
        else if (value.TryGetGroupBy2(out var groupBy2Value))
        {
            JsonSerializer.Serialize(writer, groupBy2Value, options);
        }
        else if (value.TryGetGroupBy3(out var groupBy3Value))
        {
            JsonSerializer.Serialize(writer, groupBy3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GroupBy4CodeqrIoQrCodesApi)} contains no valid value to serialize.");
        }
    }
}
