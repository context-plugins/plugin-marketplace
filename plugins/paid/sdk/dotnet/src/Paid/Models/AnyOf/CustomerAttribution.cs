using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Paid.Core.Extensions;
using Paid.Core.Models;

namespace Paid.Models.AnyOf;

[JsonConverter(typeof(CustomerAttributionConverter))]
public record CustomerAttribution
{
    private readonly Optional<CustomerById> _customerByIdValue;

    private readonly Optional<CustomerByExternalId> _customerByExternalIdValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CustomerAttribution(Optional<CustomerById> customerByIdValue,
        Optional<CustomerByExternalId> customerByExternalIdValue,
        Optional<UnknownArm> unknownValue)
    {
        _customerByIdValue = customerByIdValue;
        _customerByExternalIdValue = customerByExternalIdValue;
        _unknownValue = unknownValue;
    }

    public static CustomerAttribution CustomerById(CustomerById value) =>
        new(Optional<CustomerById>.Some(value), default, default);

    public static CustomerAttribution CustomerByExternalId(CustomerByExternalId value) =>
        new(default, Optional<CustomerByExternalId>.Some(value), default);

    internal static CustomerAttribution Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCustomerById([NotNullWhen(true)] out CustomerById? value) =>
        _customerByIdValue.TryGetValue(out value);

    public bool TryGetCustomerByExternalId([NotNullWhen(true)] out CustomerByExternalId? value) =>
        _customerByExternalIdValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CustomerAttribution(CustomerById value) => CustomerById(value);

    public static implicit operator CustomerAttribution(CustomerByExternalId value) => CustomerByExternalId(value);

    public TResult Match<TResult>(Func<CustomerById, TResult> onCustomerById,
        Func<CustomerByExternalId, TResult> onCustomerByExternalId,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCustomerById(out var customerByIdValue) => onCustomerById(customerByIdValue),
            _ when TryGetCustomerByExternalId(out var customerByExternalIdValue) => onCustomerByExternalId(
                customerByExternalIdValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CustomerAttribution)} holds no value.")
        };

    public void Match(Action<CustomerById> onCustomerById,
        Action<CustomerByExternalId> onCustomerByExternalId,
        Action<JsonElement> otherwise)
    {
        if (TryGetCustomerById(out var customerByIdValue)) onCustomerById(customerByIdValue);
        else if (TryGetCustomerByExternalId(out var customerByExternalIdValue)) onCustomerByExternalId(
            customerByExternalIdValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CustomerAttribution)} holds no value.");
    }
}

file sealed class CustomerAttributionConverter : JsonConverter<CustomerAttribution>
{
    public override CustomerAttribution Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CustomerById>(root, options, out var customerByIdValue))
        {
            return CustomerAttribution.CustomerById(customerByIdValue);
        }
        if (JsonSerializer.TryDeserialize<CustomerByExternalId>(root, options, out var customerByExternalIdValue))
        {
            return CustomerAttribution.CustomerByExternalId(customerByExternalIdValue);
        }
        return CustomerAttribution.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CustomerAttribution value, JsonSerializerOptions options)
    {
        if (value.TryGetCustomerById(out var customerByIdValue))
        {
            JsonSerializer.Serialize(writer, customerByIdValue, options);
        }
        else if (value.TryGetCustomerByExternalId(out var customerByExternalIdValue))
        {
            JsonSerializer.Serialize(writer, customerByExternalIdValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CustomerAttribution)} contains no valid value to serialize.");
        }
    }
}
