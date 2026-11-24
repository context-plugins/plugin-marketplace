using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(TransactionResource2Converter))]
public record TransactionResource2
{
    private readonly Optional<TransactionResource> _transactionResourceValue;

    private readonly Optional<TransactionResource1> _transactionResource1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private TransactionResource2(Optional<TransactionResource> transactionResourceValue,
        Optional<TransactionResource1> transactionResource1Value,
        Optional<UnknownArm> unknownValue)
    {
        _transactionResourceValue = transactionResourceValue;
        _transactionResource1Value = transactionResource1Value;
        _unknownValue = unknownValue;
    }

    public static TransactionResource2 TransactionResource(TransactionResource value) =>
        new(Optional<TransactionResource>.Some(value), default, default);

    public static TransactionResource2 TransactionResource1(TransactionResource1 value) =>
        new(default, Optional<TransactionResource1>.Some(value), default);

    internal static TransactionResource2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTransactionResource([NotNullWhen(true)] out TransactionResource? value) =>
        _transactionResourceValue.TryGetValue(out value);

    public bool TryGetTransactionResource1([NotNullWhen(true)] out TransactionResource1? value) =>
        _transactionResource1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TransactionResource2(TransactionResource value) => TransactionResource(value);

    public static implicit operator TransactionResource2(TransactionResource1 value) => TransactionResource1(value);

    public TResult Match<TResult>(Func<TransactionResource, TResult> onTransactionResource,
        Func<TransactionResource1, TResult> onTransactionResource1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTransactionResource(out var transactionResourceValue) => onTransactionResource(
                transactionResourceValue),
            _ when TryGetTransactionResource1(out var transactionResource1Value) => onTransactionResource1(
                transactionResource1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TransactionResource2)} holds no value.")
        };

    public void Match(Action<TransactionResource> onTransactionResource,
        Action<TransactionResource1> onTransactionResource1,
        Action<JsonElement> otherwise)
    {
        if (TryGetTransactionResource(out var transactionResourceValue)) onTransactionResource(
            transactionResourceValue);
        else if (TryGetTransactionResource1(out var transactionResource1Value)) onTransactionResource1(
            transactionResource1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TransactionResource2)} holds no value.");
    }
}

file sealed class TransactionResource2Converter : JsonConverter<TransactionResource2>
{
    public override TransactionResource2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TransactionResource>(root, options, out var transactionResourceValue))
        {
            return TransactionResource2.TransactionResource(transactionResourceValue);
        }
        if (JsonSerializer.TryDeserialize<TransactionResource1>(root, options, out var transactionResource1Value))
        {
            return TransactionResource2.TransactionResource1(transactionResource1Value);
        }
        return TransactionResource2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TransactionResource2 value, JsonSerializerOptions options)
    {
        if (value.TryGetTransactionResource(out var transactionResourceValue))
        {
            JsonSerializer.Serialize(writer, transactionResourceValue, options);
        }
        else if (value.TryGetTransactionResource1(out var transactionResource1Value))
        {
            JsonSerializer.Serialize(writer, transactionResource1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TransactionResource2)} contains no valid value to serialize.");
        }
    }
}
