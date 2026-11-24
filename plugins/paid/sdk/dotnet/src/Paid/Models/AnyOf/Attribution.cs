using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Paid.Core.Extensions;
using Paid.Core.Models;

namespace Paid.Models.AnyOf;

[JsonConverter(typeof(AttributionConverter))]
public record Attribution
{
    private readonly Optional<ProductById> _productByIdValue;

    private readonly Optional<ProductByExternalId> _productByExternalIdValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Attribution(Optional<ProductById> productByIdValue,
        Optional<ProductByExternalId> productByExternalIdValue,
        Optional<UnknownArm> unknownValue)
    {
        _productByIdValue = productByIdValue;
        _productByExternalIdValue = productByExternalIdValue;
        _unknownValue = unknownValue;
    }

    public static Attribution ProductById(ProductById value) =>
        new(Optional<ProductById>.Some(value), default, default);

    public static Attribution ProductByExternalId(ProductByExternalId value) =>
        new(default, Optional<ProductByExternalId>.Some(value), default);

    internal static Attribution Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetProductById([NotNullWhen(true)] out ProductById? value) =>
        _productByIdValue.TryGetValue(out value);

    public bool TryGetProductByExternalId([NotNullWhen(true)] out ProductByExternalId? value) =>
        _productByExternalIdValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Attribution(ProductById value) => ProductById(value);

    public static implicit operator Attribution(ProductByExternalId value) => ProductByExternalId(value);

    public TResult Match<TResult>(Func<ProductById, TResult> onProductById,
        Func<ProductByExternalId, TResult> onProductByExternalId,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProductById(out var productByIdValue) => onProductById(productByIdValue),
            _ when TryGetProductByExternalId(out var productByExternalIdValue) => onProductByExternalId(
                productByExternalIdValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Attribution)} holds no value.")
        };

    public void Match(Action<ProductById> onProductById,
        Action<ProductByExternalId> onProductByExternalId,
        Action<JsonElement> otherwise)
    {
        if (TryGetProductById(out var productByIdValue)) onProductById(productByIdValue);
        else if (TryGetProductByExternalId(out var productByExternalIdValue)) onProductByExternalId(
            productByExternalIdValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Attribution)} holds no value.");
    }
}

file sealed class AttributionConverter : JsonConverter<Attribution>
{
    public override Attribution Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ProductById>(root, options, out var productByIdValue))
        {
            return Attribution.ProductById(productByIdValue);
        }
        if (JsonSerializer.TryDeserialize<ProductByExternalId>(root, options, out var productByExternalIdValue))
        {
            return Attribution.ProductByExternalId(productByExternalIdValue);
        }
        return Attribution.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Attribution value, JsonSerializerOptions options)
    {
        if (value.TryGetProductById(out var productByIdValue))
        {
            JsonSerializer.Serialize(writer, productByIdValue, options);
        }
        else if (value.TryGetProductByExternalId(out var productByExternalIdValue))
        {
            JsonSerializer.Serialize(writer, productByExternalIdValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Attribution)} contains no valid value to serialize.");
        }
    }
}
