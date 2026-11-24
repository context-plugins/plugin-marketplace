using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;

namespace CompSniper.Models.AnyOf;

[JsonConverter(typeof(ItemCompSniperMarketplaceAndShippingScrapeApiConverter))]
public record ItemCompSniperMarketplaceAndShippingScrapeApi
{
    private readonly Optional<SoldItem> _soldItemValue;

    private readonly Optional<ActiveItem> _activeItemValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ItemCompSniperMarketplaceAndShippingScrapeApi(Optional<SoldItem> soldItemValue,
        Optional<ActiveItem> activeItemValue,
        Optional<UnknownArm> unknownValue)
    {
        _soldItemValue = soldItemValue;
        _activeItemValue = activeItemValue;
        _unknownValue = unknownValue;
    }

    public static ItemCompSniperMarketplaceAndShippingScrapeApi SoldItem(SoldItem value) =>
        new(Optional<SoldItem>.Some(value), default, default);

    public static ItemCompSniperMarketplaceAndShippingScrapeApi ActiveItem(ActiveItem value) =>
        new(default, Optional<ActiveItem>.Some(value), default);

    internal static ItemCompSniperMarketplaceAndShippingScrapeApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSoldItem([NotNullWhen(true)] out SoldItem? value) => _soldItemValue.TryGetValue(out value);

    public bool TryGetActiveItem([NotNullWhen(true)] out ActiveItem? value) => _activeItemValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ItemCompSniperMarketplaceAndShippingScrapeApi(SoldItem value) => SoldItem(value);

    public static implicit operator ItemCompSniperMarketplaceAndShippingScrapeApi(ActiveItem value) =>
        ActiveItem(value);

    public TResult Match<TResult>(Func<SoldItem, TResult> onSoldItem,
        Func<ActiveItem, TResult> onActiveItem,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSoldItem(out var soldItemValue) => onSoldItem(soldItemValue),
            _ when TryGetActiveItem(out var activeItemValue) => onActiveItem(activeItemValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(ItemCompSniperMarketplaceAndShippingScrapeApi)} holds no value.")
        };

    public void Match(Action<SoldItem> onSoldItem, Action<ActiveItem> onActiveItem, Action<JsonElement> otherwise)
    {
        if (TryGetSoldItem(out var soldItemValue)) onSoldItem(soldItemValue);
        else if (TryGetActiveItem(out var activeItemValue)) onActiveItem(activeItemValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(ItemCompSniperMarketplaceAndShippingScrapeApi)} holds no value.");
    }
}

file sealed class ItemCompSniperMarketplaceAndShippingScrapeApiConverter : JsonConverter<ItemCompSniperMarketplaceAndShippingScrapeApi>
{
    public override ItemCompSniperMarketplaceAndShippingScrapeApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SoldItem>(root, options, out var soldItemValue))
        {
            return ItemCompSniperMarketplaceAndShippingScrapeApi.SoldItem(soldItemValue);
        }
        if (JsonSerializer.TryDeserialize<ActiveItem>(root, options, out var activeItemValue))
        {
            return ItemCompSniperMarketplaceAndShippingScrapeApi.ActiveItem(activeItemValue);
        }
        return ItemCompSniperMarketplaceAndShippingScrapeApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ItemCompSniperMarketplaceAndShippingScrapeApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetSoldItem(out var soldItemValue))
        {
            JsonSerializer.Serialize(writer, soldItemValue, options);
        }
        else if (value.TryGetActiveItem(out var activeItemValue))
        {
            JsonSerializer.Serialize(writer, activeItemValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ItemCompSniperMarketplaceAndShippingScrapeApi)} contains no valid value to serialize.");
        }
    }
}
