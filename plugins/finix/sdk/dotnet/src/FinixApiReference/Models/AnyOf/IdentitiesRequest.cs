using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(IdentitiesRequestConverter))]
public record IdentitiesRequest
{
    private readonly Optional<SellerUsa> _sellerUsaValue;

    private readonly Optional<SellerCan> _sellerCanValue;

    private readonly Optional<RecipientBusiness> _recipientBusinessValue;

    private readonly Optional<RecipientPersonal> _recipientPersonalValue;

    private readonly Optional<Buyer> _buyerValue;

    private readonly Optional<SenderRecipientPersonal> _senderRecipientPersonalValue;

    private readonly Optional<SenderRecipientBusiness> _senderRecipientBusinessValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private IdentitiesRequest(Optional<SellerUsa> sellerUsaValue,
        Optional<SellerCan> sellerCanValue,
        Optional<RecipientBusiness> recipientBusinessValue,
        Optional<RecipientPersonal> recipientPersonalValue,
        Optional<Buyer> buyerValue,
        Optional<SenderRecipientPersonal> senderRecipientPersonalValue,
        Optional<SenderRecipientBusiness> senderRecipientBusinessValue,
        Optional<UnknownArm> unknownValue)
    {
        _sellerUsaValue = sellerUsaValue;
        _sellerCanValue = sellerCanValue;
        _recipientBusinessValue = recipientBusinessValue;
        _recipientPersonalValue = recipientPersonalValue;
        _buyerValue = buyerValue;
        _senderRecipientPersonalValue = senderRecipientPersonalValue;
        _senderRecipientBusinessValue = senderRecipientBusinessValue;
        _unknownValue = unknownValue;
    }

    public static IdentitiesRequest SellerUsa(SellerUsa value) =>
        new(Optional<SellerUsa>.Some(value), default, default, default, default, default, default, default);

    public static IdentitiesRequest SellerCan(SellerCan value) =>
        new(default, Optional<SellerCan>.Some(value), default, default, default, default, default, default);

    public static IdentitiesRequest RecipientBusiness(RecipientBusiness value) =>
        new(default, default, Optional<RecipientBusiness>.Some(value), default, default, default, default, default);

    public static IdentitiesRequest RecipientPersonal(RecipientPersonal value) =>
        new(default, default, default, Optional<RecipientPersonal>.Some(value), default, default, default, default);

    public static IdentitiesRequest Buyer(Buyer value) =>
        new(default, default, default, default, Optional<Buyer>.Some(value), default, default, default);

    public static IdentitiesRequest SenderRecipientPersonal(SenderRecipientPersonal value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<SenderRecipientPersonal>.Some(value),
            default,
            default);

    public static IdentitiesRequest SenderRecipientBusiness(SenderRecipientBusiness value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<SenderRecipientBusiness>.Some(value),
            default);

    internal static IdentitiesRequest Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSellerUsa([NotNullWhen(true)] out SellerUsa? value) => _sellerUsaValue.TryGetValue(out value);

    public bool TryGetSellerCan([NotNullWhen(true)] out SellerCan? value) => _sellerCanValue.TryGetValue(out value);

    public bool TryGetRecipientBusiness([NotNullWhen(true)] out RecipientBusiness? value) =>
        _recipientBusinessValue.TryGetValue(out value);

    public bool TryGetRecipientPersonal([NotNullWhen(true)] out RecipientPersonal? value) =>
        _recipientPersonalValue.TryGetValue(out value);

    public bool TryGetBuyer([NotNullWhen(true)] out Buyer? value) => _buyerValue.TryGetValue(out value);

    public bool TryGetSenderRecipientPersonal([NotNullWhen(true)] out SenderRecipientPersonal? value) =>
        _senderRecipientPersonalValue.TryGetValue(out value);

    public bool TryGetSenderRecipientBusiness([NotNullWhen(true)] out SenderRecipientBusiness? value) =>
        _senderRecipientBusinessValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IdentitiesRequest(SellerUsa value) => SellerUsa(value);

    public static implicit operator IdentitiesRequest(SellerCan value) => SellerCan(value);

    public static implicit operator IdentitiesRequest(RecipientBusiness value) => RecipientBusiness(value);

    public static implicit operator IdentitiesRequest(RecipientPersonal value) => RecipientPersonal(value);

    public static implicit operator IdentitiesRequest(Buyer value) => Buyer(value);

    public static implicit operator IdentitiesRequest(SenderRecipientPersonal value) => SenderRecipientPersonal(value);

    public static implicit operator IdentitiesRequest(SenderRecipientBusiness value) => SenderRecipientBusiness(value);

    public TResult Match<TResult>(Func<SellerUsa, TResult> onSellerUsa,
        Func<SellerCan, TResult> onSellerCan,
        Func<RecipientBusiness, TResult> onRecipientBusiness,
        Func<RecipientPersonal, TResult> onRecipientPersonal,
        Func<Buyer, TResult> onBuyer,
        Func<SenderRecipientPersonal, TResult> onSenderRecipientPersonal,
        Func<SenderRecipientBusiness, TResult> onSenderRecipientBusiness,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSellerUsa(out var sellerUsaValue) => onSellerUsa(sellerUsaValue),
            _ when TryGetSellerCan(out var sellerCanValue) => onSellerCan(sellerCanValue),
            _ when TryGetRecipientBusiness(out var recipientBusinessValue) => onRecipientBusiness(
                recipientBusinessValue),
            _ when TryGetRecipientPersonal(out var recipientPersonalValue) => onRecipientPersonal(
                recipientPersonalValue),
            _ when TryGetBuyer(out var buyerValue) => onBuyer(buyerValue),
            _ when TryGetSenderRecipientPersonal(out var senderRecipientPersonalValue) => onSenderRecipientPersonal(
                senderRecipientPersonalValue),
            _ when TryGetSenderRecipientBusiness(out var senderRecipientBusinessValue) => onSenderRecipientBusiness(
                senderRecipientBusinessValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IdentitiesRequest)} holds no value.")
        };

    public void Match(Action<SellerUsa> onSellerUsa,
        Action<SellerCan> onSellerCan,
        Action<RecipientBusiness> onRecipientBusiness,
        Action<RecipientPersonal> onRecipientPersonal,
        Action<Buyer> onBuyer,
        Action<SenderRecipientPersonal> onSenderRecipientPersonal,
        Action<SenderRecipientBusiness> onSenderRecipientBusiness,
        Action<JsonElement> otherwise)
    {
        if (TryGetSellerUsa(out var sellerUsaValue)) onSellerUsa(sellerUsaValue);
        else if (TryGetSellerCan(out var sellerCanValue)) onSellerCan(sellerCanValue);
        else if (TryGetRecipientBusiness(out var recipientBusinessValue)) onRecipientBusiness(recipientBusinessValue);
        else if (TryGetRecipientPersonal(out var recipientPersonalValue)) onRecipientPersonal(recipientPersonalValue);
        else if (TryGetBuyer(out var buyerValue)) onBuyer(buyerValue);
        else if (TryGetSenderRecipientPersonal(out var senderRecipientPersonalValue)) onSenderRecipientPersonal(
            senderRecipientPersonalValue);
        else if (TryGetSenderRecipientBusiness(out var senderRecipientBusinessValue)) onSenderRecipientBusiness(
            senderRecipientBusinessValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IdentitiesRequest)} holds no value.");
    }
}

file sealed class IdentitiesRequestConverter : JsonConverter<IdentitiesRequest>
{
    public override IdentitiesRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SellerUsa>(root, options, out var sellerUsaValue))
        {
            return IdentitiesRequest.SellerUsa(sellerUsaValue);
        }
        if (JsonSerializer.TryDeserialize<SellerCan>(root, options, out var sellerCanValue))
        {
            return IdentitiesRequest.SellerCan(sellerCanValue);
        }
        if (JsonSerializer.TryDeserialize<RecipientBusiness>(root, options, out var recipientBusinessValue))
        {
            return IdentitiesRequest.RecipientBusiness(recipientBusinessValue);
        }
        if (JsonSerializer.TryDeserialize<RecipientPersonal>(root, options, out var recipientPersonalValue))
        {
            return IdentitiesRequest.RecipientPersonal(recipientPersonalValue);
        }
        if (JsonSerializer.TryDeserialize<Buyer>(root, options, out var buyerValue))
        {
            return IdentitiesRequest.Buyer(buyerValue);
        }
        if (JsonSerializer.TryDeserialize<SenderRecipientPersonal>(root, options, out var senderRecipientPersonalValue))
        {
            return IdentitiesRequest.SenderRecipientPersonal(senderRecipientPersonalValue);
        }
        if (JsonSerializer.TryDeserialize<SenderRecipientBusiness>(root, options, out var senderRecipientBusinessValue))
        {
            return IdentitiesRequest.SenderRecipientBusiness(senderRecipientBusinessValue);
        }
        return IdentitiesRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IdentitiesRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetSellerUsa(out var sellerUsaValue))
        {
            JsonSerializer.Serialize(writer, sellerUsaValue, options);
        }
        else if (value.TryGetSellerCan(out var sellerCanValue))
        {
            JsonSerializer.Serialize(writer, sellerCanValue, options);
        }
        else if (value.TryGetRecipientBusiness(out var recipientBusinessValue))
        {
            JsonSerializer.Serialize(writer, recipientBusinessValue, options);
        }
        else if (value.TryGetRecipientPersonal(out var recipientPersonalValue))
        {
            JsonSerializer.Serialize(writer, recipientPersonalValue, options);
        }
        else if (value.TryGetBuyer(out var buyerValue))
        {
            JsonSerializer.Serialize(writer, buyerValue, options);
        }
        else if (value.TryGetSenderRecipientPersonal(out var senderRecipientPersonalValue))
        {
            JsonSerializer.Serialize(writer, senderRecipientPersonalValue, options);
        }
        else if (value.TryGetSenderRecipientBusiness(out var senderRecipientBusinessValue))
        {
            JsonSerializer.Serialize(writer, senderRecipientBusinessValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IdentitiesRequest)} contains no valid value to serialize.");
        }
    }
}
