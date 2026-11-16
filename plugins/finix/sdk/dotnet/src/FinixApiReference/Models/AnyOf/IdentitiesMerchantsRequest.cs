using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(IdentitiesMerchantsRequestConverter))]
public record IdentitiesMerchantsRequest
{
    private readonly Optional<MerchantMinimalFields> _merchantMinimalFieldsValue;

    private readonly Optional<MerchantAllFields> _merchantAllFieldsValue;

    private readonly Optional<MerchantCardPresentEnabled> _merchantCardPresentEnabledValue;

    private readonly Optional<MerchantDefaultPartialAuthorizationEnabled> _merchantDefaultPartialAuthorizationEnabledValue;

    private readonly Optional<MerchantLoanRepaymentEnabled> _merchantLoanRepaymentEnabledValue;

    private readonly Optional<MerchantRefundsDisabled> _merchantRefundsDisabledValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private IdentitiesMerchantsRequest(Optional<MerchantMinimalFields> merchantMinimalFieldsValue,
        Optional<MerchantAllFields> merchantAllFieldsValue,
        Optional<MerchantCardPresentEnabled> merchantCardPresentEnabledValue,
        Optional<MerchantDefaultPartialAuthorizationEnabled> merchantDefaultPartialAuthorizationEnabledValue,
        Optional<MerchantLoanRepaymentEnabled> merchantLoanRepaymentEnabledValue,
        Optional<MerchantRefundsDisabled> merchantRefundsDisabledValue,
        Optional<UnknownArm> unknownValue)
    {
        _merchantMinimalFieldsValue = merchantMinimalFieldsValue;
        _merchantAllFieldsValue = merchantAllFieldsValue;
        _merchantCardPresentEnabledValue = merchantCardPresentEnabledValue;
        _merchantDefaultPartialAuthorizationEnabledValue = merchantDefaultPartialAuthorizationEnabledValue;
        _merchantLoanRepaymentEnabledValue = merchantLoanRepaymentEnabledValue;
        _merchantRefundsDisabledValue = merchantRefundsDisabledValue;
        _unknownValue = unknownValue;
    }

    public static IdentitiesMerchantsRequest MerchantMinimalFields(MerchantMinimalFields value) =>
        new(Optional<MerchantMinimalFields>.Some(value), default, default, default, default, default, default);

    public static IdentitiesMerchantsRequest MerchantAllFields(MerchantAllFields value) =>
        new(default, Optional<MerchantAllFields>.Some(value), default, default, default, default, default);

    public static IdentitiesMerchantsRequest MerchantCardPresentEnabled(MerchantCardPresentEnabled value) =>
        new(default, default, Optional<MerchantCardPresentEnabled>.Some(value), default, default, default, default);

    public static IdentitiesMerchantsRequest MerchantDefaultPartialAuthorizationEnabled(MerchantDefaultPartialAuthorizationEnabled value) =>
        new(
            default,
            default,
            default,
            Optional<MerchantDefaultPartialAuthorizationEnabled>.Some(value),
            default,
            default,
            default);

    public static IdentitiesMerchantsRequest MerchantLoanRepaymentEnabled(MerchantLoanRepaymentEnabled value) =>
        new(default, default, default, default, Optional<MerchantLoanRepaymentEnabled>.Some(value), default, default);

    public static IdentitiesMerchantsRequest MerchantRefundsDisabled(MerchantRefundsDisabled value) =>
        new(default, default, default, default, default, Optional<MerchantRefundsDisabled>.Some(value), default);

    internal static IdentitiesMerchantsRequest Unknown(JsonElement value) =>
        new(default, default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMerchantMinimalFields([NotNullWhen(true)] out MerchantMinimalFields? value) =>
        _merchantMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetMerchantAllFields([NotNullWhen(true)] out MerchantAllFields? value) =>
        _merchantAllFieldsValue.TryGetValue(out value);

    public bool TryGetMerchantCardPresentEnabled([NotNullWhen(true)] out MerchantCardPresentEnabled? value) =>
        _merchantCardPresentEnabledValue.TryGetValue(out value);

    public bool TryGetMerchantDefaultPartialAuthorizationEnabled([NotNullWhen(true)] out MerchantDefaultPartialAuthorizationEnabled? value) =>
        _merchantDefaultPartialAuthorizationEnabledValue.TryGetValue(out value);

    public bool TryGetMerchantLoanRepaymentEnabled([NotNullWhen(true)] out MerchantLoanRepaymentEnabled? value) =>
        _merchantLoanRepaymentEnabledValue.TryGetValue(out value);

    public bool TryGetMerchantRefundsDisabled([NotNullWhen(true)] out MerchantRefundsDisabled? value) =>
        _merchantRefundsDisabledValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantMinimalFields value) =>
        MerchantMinimalFields(value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantAllFields value) => MerchantAllFields(value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantCardPresentEnabled value) =>
        MerchantCardPresentEnabled(value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantDefaultPartialAuthorizationEnabled value) =>
        MerchantDefaultPartialAuthorizationEnabled(value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantLoanRepaymentEnabled value) =>
        MerchantLoanRepaymentEnabled(value);

    public static implicit operator IdentitiesMerchantsRequest(MerchantRefundsDisabled value) =>
        MerchantRefundsDisabled(value);

    public TResult Match<TResult>(Func<MerchantMinimalFields, TResult> onMerchantMinimalFields,
        Func<MerchantAllFields, TResult> onMerchantAllFields,
        Func<MerchantCardPresentEnabled, TResult> onMerchantCardPresentEnabled,
        Func<MerchantDefaultPartialAuthorizationEnabled, TResult> onMerchantDefaultPartialAuthorizationEnabled,
        Func<MerchantLoanRepaymentEnabled, TResult> onMerchantLoanRepaymentEnabled,
        Func<MerchantRefundsDisabled, TResult> onMerchantRefundsDisabled,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMerchantMinimalFields(out var merchantMinimalFieldsValue) => onMerchantMinimalFields(
                merchantMinimalFieldsValue),
            _ when TryGetMerchantAllFields(out var merchantAllFieldsValue) => onMerchantAllFields(
                merchantAllFieldsValue),
            _ when TryGetMerchantCardPresentEnabled(
                out var merchantCardPresentEnabledValue) => onMerchantCardPresentEnabled(
                merchantCardPresentEnabledValue),
            _ when TryGetMerchantDefaultPartialAuthorizationEnabled(
                out var merchantDefaultPartialAuthorizationEnabledValue) => onMerchantDefaultPartialAuthorizationEnabled(
                merchantDefaultPartialAuthorizationEnabledValue),
            _ when TryGetMerchantLoanRepaymentEnabled(
                out var merchantLoanRepaymentEnabledValue) => onMerchantLoanRepaymentEnabled(
                merchantLoanRepaymentEnabledValue),
            _ when TryGetMerchantRefundsDisabled(out var merchantRefundsDisabledValue) => onMerchantRefundsDisabled(
                merchantRefundsDisabledValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IdentitiesMerchantsRequest)} holds no value.")
        };

    public void Match(Action<MerchantMinimalFields> onMerchantMinimalFields,
        Action<MerchantAllFields> onMerchantAllFields,
        Action<MerchantCardPresentEnabled> onMerchantCardPresentEnabled,
        Action<MerchantDefaultPartialAuthorizationEnabled> onMerchantDefaultPartialAuthorizationEnabled,
        Action<MerchantLoanRepaymentEnabled> onMerchantLoanRepaymentEnabled,
        Action<MerchantRefundsDisabled> onMerchantRefundsDisabled,
        Action<JsonElement> otherwise)
    {
        if (TryGetMerchantMinimalFields(out var merchantMinimalFieldsValue)) onMerchantMinimalFields(
            merchantMinimalFieldsValue);
        else if (TryGetMerchantAllFields(out var merchantAllFieldsValue)) onMerchantAllFields(merchantAllFieldsValue);
        else if (TryGetMerchantCardPresentEnabled(
            out var merchantCardPresentEnabledValue)) onMerchantCardPresentEnabled(merchantCardPresentEnabledValue);
        else if (TryGetMerchantDefaultPartialAuthorizationEnabled(
            out var merchantDefaultPartialAuthorizationEnabledValue)) onMerchantDefaultPartialAuthorizationEnabled(
            merchantDefaultPartialAuthorizationEnabledValue);
        else if (TryGetMerchantLoanRepaymentEnabled(
            out var merchantLoanRepaymentEnabledValue)) onMerchantLoanRepaymentEnabled(
            merchantLoanRepaymentEnabledValue);
        else if (TryGetMerchantRefundsDisabled(out var merchantRefundsDisabledValue)) onMerchantRefundsDisabled(
            merchantRefundsDisabledValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IdentitiesMerchantsRequest)} holds no value.");
    }
}

file sealed class IdentitiesMerchantsRequestConverter : JsonConverter<IdentitiesMerchantsRequest>
{
    public override IdentitiesMerchantsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MerchantMinimalFields>(root, options, out var merchantMinimalFieldsValue))
        {
            return IdentitiesMerchantsRequest.MerchantMinimalFields(merchantMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantAllFields>(root, options, out var merchantAllFieldsValue))
        {
            return IdentitiesMerchantsRequest.MerchantAllFields(merchantAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantCardPresentEnabled>(
            root,
            options,
            out var merchantCardPresentEnabledValue))
        {
            return IdentitiesMerchantsRequest.MerchantCardPresentEnabled(merchantCardPresentEnabledValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantDefaultPartialAuthorizationEnabled>(
            root,
            options,
            out var merchantDefaultPartialAuthorizationEnabledValue))
        {
            return IdentitiesMerchantsRequest.MerchantDefaultPartialAuthorizationEnabled(
                merchantDefaultPartialAuthorizationEnabledValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantLoanRepaymentEnabled>(
            root,
            options,
            out var merchantLoanRepaymentEnabledValue))
        {
            return IdentitiesMerchantsRequest.MerchantLoanRepaymentEnabled(merchantLoanRepaymentEnabledValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantRefundsDisabled>(root, options, out var merchantRefundsDisabledValue))
        {
            return IdentitiesMerchantsRequest.MerchantRefundsDisabled(merchantRefundsDisabledValue);
        }
        return IdentitiesMerchantsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IdentitiesMerchantsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetMerchantMinimalFields(out var merchantMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, merchantMinimalFieldsValue, options);
        }
        else if (value.TryGetMerchantAllFields(out var merchantAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, merchantAllFieldsValue, options);
        }
        else if (value.TryGetMerchantCardPresentEnabled(out var merchantCardPresentEnabledValue))
        {
            JsonSerializer.Serialize(writer, merchantCardPresentEnabledValue, options);
        }
        else if (value.TryGetMerchantDefaultPartialAuthorizationEnabled(
            out var merchantDefaultPartialAuthorizationEnabledValue))
        {
            JsonSerializer.Serialize(writer, merchantDefaultPartialAuthorizationEnabledValue, options);
        }
        else if (value.TryGetMerchantLoanRepaymentEnabled(out var merchantLoanRepaymentEnabledValue))
        {
            JsonSerializer.Serialize(writer, merchantLoanRepaymentEnabledValue, options);
        }
        else if (value.TryGetMerchantRefundsDisabled(out var merchantRefundsDisabledValue))
        {
            JsonSerializer.Serialize(writer, merchantRefundsDisabledValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IdentitiesMerchantsRequest)} contains no valid value to serialize.");
        }
    }
}
