using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using LastDatabase.Core.Extensions;
using LastDatabase.Core.Models;

namespace LastDatabase.Models.AnyOf;

[JsonConverter(typeof(DatumConverter))]
public record Datum
{
    private readonly Optional<EmailLead> _emailLeadValue;

    private readonly Optional<PhoneLead> _phoneLeadValue;

    private readonly Optional<FaxLead> _faxLeadValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Datum(Optional<EmailLead> emailLeadValue,
        Optional<PhoneLead> phoneLeadValue,
        Optional<FaxLead> faxLeadValue,
        Optional<UnknownArm> unknownValue)
    {
        _emailLeadValue = emailLeadValue;
        _phoneLeadValue = phoneLeadValue;
        _faxLeadValue = faxLeadValue;
        _unknownValue = unknownValue;
    }

    public static Datum EmailLead(EmailLead value) => new(Optional<EmailLead>.Some(value), default, default, default);

    public static Datum PhoneLead(PhoneLead value) => new(default, Optional<PhoneLead>.Some(value), default, default);

    public static Datum FaxLead(FaxLead value) => new(default, default, Optional<FaxLead>.Some(value), default);

    internal static Datum Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEmailLead([NotNullWhen(true)] out EmailLead? value) => _emailLeadValue.TryGetValue(out value);

    public bool TryGetPhoneLead([NotNullWhen(true)] out PhoneLead? value) => _phoneLeadValue.TryGetValue(out value);

    public bool TryGetFaxLead([NotNullWhen(true)] out FaxLead? value) => _faxLeadValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Datum(EmailLead value) => EmailLead(value);

    public static implicit operator Datum(PhoneLead value) => PhoneLead(value);

    public static implicit operator Datum(FaxLead value) => FaxLead(value);

    public TResult Match<TResult>(Func<EmailLead, TResult> onEmailLead,
        Func<PhoneLead, TResult> onPhoneLead,
        Func<FaxLead, TResult> onFaxLead,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEmailLead(out var emailLeadValue) => onEmailLead(emailLeadValue),
            _ when TryGetPhoneLead(out var phoneLeadValue) => onPhoneLead(phoneLeadValue),
            _ when TryGetFaxLead(out var faxLeadValue) => onFaxLead(faxLeadValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Datum)} holds no value.")
        };

    public void Match(Action<EmailLead> onEmailLead,
        Action<PhoneLead> onPhoneLead,
        Action<FaxLead> onFaxLead,
        Action<JsonElement> otherwise)
    {
        if (TryGetEmailLead(out var emailLeadValue)) onEmailLead(emailLeadValue);
        else if (TryGetPhoneLead(out var phoneLeadValue)) onPhoneLead(phoneLeadValue);
        else if (TryGetFaxLead(out var faxLeadValue)) onFaxLead(faxLeadValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Datum)} holds no value.");
    }
}

file sealed class DatumConverter : JsonConverter<Datum>
{
    public override Datum Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EmailLead>(root, options, out var emailLeadValue))
        {
            return Datum.EmailLead(emailLeadValue);
        }
        if (JsonSerializer.TryDeserialize<PhoneLead>(root, options, out var phoneLeadValue))
        {
            return Datum.PhoneLead(phoneLeadValue);
        }
        if (JsonSerializer.TryDeserialize<FaxLead>(root, options, out var faxLeadValue))
        {
            return Datum.FaxLead(faxLeadValue);
        }
        return Datum.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Datum value, JsonSerializerOptions options)
    {
        if (value.TryGetEmailLead(out var emailLeadValue))
        {
            JsonSerializer.Serialize(writer, emailLeadValue, options);
        }
        else if (value.TryGetPhoneLead(out var phoneLeadValue))
        {
            JsonSerializer.Serialize(writer, phoneLeadValue, options);
        }
        else if (value.TryGetFaxLead(out var faxLeadValue))
        {
            JsonSerializer.Serialize(writer, faxLeadValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Datum)} contains no valid value to serialize.");
        }
    }
}
