using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(Resource1Converter))]
public record Resource1
{
    private readonly Optional<TransactionResource2> _transactionResource2Value;

    private readonly Optional<Resource> _resourceValue;

    private readonly Optional<RecurringPlanResource> _recurringPlanResourceValue;

    private readonly Optional<TicketResource> _ticketResourceValue;

    private readonly Optional<MessageResource> _messageResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Resource1(Optional<TransactionResource2> transactionResource2Value,
        Optional<Resource> resourceValue,
        Optional<RecurringPlanResource> recurringPlanResourceValue,
        Optional<TicketResource> ticketResourceValue,
        Optional<MessageResource> messageResourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _transactionResource2Value = transactionResource2Value;
        _resourceValue = resourceValue;
        _recurringPlanResourceValue = recurringPlanResourceValue;
        _ticketResourceValue = ticketResourceValue;
        _messageResourceValue = messageResourceValue;
        _unknownValue = unknownValue;
    }

    public static Resource1 TransactionResource2(TransactionResource2 value) =>
        new(Optional<TransactionResource2>.Some(value), default, default, default, default, default);

    public static Resource1 Resource(Resource value) =>
        new(default, Optional<Resource>.Some(value), default, default, default, default);

    public static Resource1 RecurringPlanResource(RecurringPlanResource value) =>
        new(default, default, Optional<RecurringPlanResource>.Some(value), default, default, default);

    public static Resource1 TicketResource(TicketResource value) =>
        new(default, default, default, Optional<TicketResource>.Some(value), default, default);

    public static Resource1 MessageResource(MessageResource value) =>
        new(default, default, default, default, Optional<MessageResource>.Some(value), default);

    internal static Resource1 Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTransactionResource2([NotNullWhen(true)] out TransactionResource2? value) =>
        _transactionResource2Value.TryGetValue(out value);

    public bool TryGetResource([NotNullWhen(true)] out Resource? value) => _resourceValue.TryGetValue(out value);

    public bool TryGetRecurringPlanResource([NotNullWhen(true)] out RecurringPlanResource? value) =>
        _recurringPlanResourceValue.TryGetValue(out value);

    public bool TryGetTicketResource([NotNullWhen(true)] out TicketResource? value) =>
        _ticketResourceValue.TryGetValue(out value);

    public bool TryGetMessageResource([NotNullWhen(true)] out MessageResource? value) =>
        _messageResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Resource1(TransactionResource2 value) => TransactionResource2(value);

    public static implicit operator Resource1(Resource value) => Resource(value);

    public static implicit operator Resource1(RecurringPlanResource value) => RecurringPlanResource(value);

    public static implicit operator Resource1(TicketResource value) => TicketResource(value);

    public static implicit operator Resource1(MessageResource value) => MessageResource(value);

    public TResult Match<TResult>(Func<TransactionResource2, TResult> onTransactionResource2,
        Func<Resource, TResult> onResource,
        Func<RecurringPlanResource, TResult> onRecurringPlanResource,
        Func<TicketResource, TResult> onTicketResource,
        Func<MessageResource, TResult> onMessageResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTransactionResource2(out var transactionResource2Value) => onTransactionResource2(
                transactionResource2Value),
            _ when TryGetResource(out var resourceValue) => onResource(resourceValue),
            _ when TryGetRecurringPlanResource(out var recurringPlanResourceValue) => onRecurringPlanResource(
                recurringPlanResourceValue),
            _ when TryGetTicketResource(out var ticketResourceValue) => onTicketResource(ticketResourceValue),
            _ when TryGetMessageResource(out var messageResourceValue) => onMessageResource(messageResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Resource1)} holds no value.")
        };

    public void Match(Action<TransactionResource2> onTransactionResource2,
        Action<Resource> onResource,
        Action<RecurringPlanResource> onRecurringPlanResource,
        Action<TicketResource> onTicketResource,
        Action<MessageResource> onMessageResource,
        Action<JsonElement> otherwise)
    {
        if (TryGetTransactionResource2(out var transactionResource2Value)) onTransactionResource2(
            transactionResource2Value);
        else if (TryGetResource(out var resourceValue)) onResource(resourceValue);
        else if (TryGetRecurringPlanResource(out var recurringPlanResourceValue)) onRecurringPlanResource(
            recurringPlanResourceValue);
        else if (TryGetTicketResource(out var ticketResourceValue)) onTicketResource(ticketResourceValue);
        else if (TryGetMessageResource(out var messageResourceValue)) onMessageResource(messageResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Resource1)} holds no value.");
    }
}

file sealed class Resource1Converter : JsonConverter<Resource1>
{
    public override Resource1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TransactionResource2>(root, options, out var transactionResource2Value))
        {
            return Resource1.TransactionResource2(transactionResource2Value);
        }
        if (JsonSerializer.TryDeserialize<Resource>(root, options, out var resourceValue))
        {
            return Resource1.Resource(resourceValue);
        }
        if (JsonSerializer.TryDeserialize<RecurringPlanResource>(root, options, out var recurringPlanResourceValue))
        {
            return Resource1.RecurringPlanResource(recurringPlanResourceValue);
        }
        if (JsonSerializer.TryDeserialize<TicketResource>(root, options, out var ticketResourceValue))
        {
            return Resource1.TicketResource(ticketResourceValue);
        }
        if (JsonSerializer.TryDeserialize<MessageResource>(root, options, out var messageResourceValue))
        {
            return Resource1.MessageResource(messageResourceValue);
        }
        return Resource1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Resource1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTransactionResource2(out var transactionResource2Value))
        {
            JsonSerializer.Serialize(writer, transactionResource2Value, options);
        }
        else if (value.TryGetResource(out var resourceValue))
        {
            JsonSerializer.Serialize(writer, resourceValue, options);
        }
        else if (value.TryGetRecurringPlanResource(out var recurringPlanResourceValue))
        {
            JsonSerializer.Serialize(writer, recurringPlanResourceValue, options);
        }
        else if (value.TryGetTicketResource(out var ticketResourceValue))
        {
            JsonSerializer.Serialize(writer, ticketResourceValue, options);
        }
        else if (value.TryGetMessageResource(out var messageResourceValue))
        {
            JsonSerializer.Serialize(writer, messageResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Resource1)} contains no valid value to serialize.");
        }
    }
}
