using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// How the recipient EIN was arrived at, with the measured precision each carries in <c>match_prob</c>. Ordered strongest first; the resolver applies them in this order and a later rule only ever sees what the earlier ones declined. <c>filed</c> (0.995) the filer stated it on the return. <c>override_human</c> (0.99) an adjudicated correction. <c>override_keyerror</c> (0.98) a filer-stated EIN that exists in no register and is one identifiable keying slip from the EIN of the organisation the name resolves to — a correction of the filer, not of us. <c>name</c> (0.970) exact normalised name, unique within state. <c>registry-dominant</c> (0.970) an ambiguous alias where one EIN holds &gt;=90% of the distinct funders who file that name. <c>fuzzy</c> (0.961) one edit from a registered name, with the ZIP agreeing. <c>override_llm</c> (0.95) an LLM adjudication of an ambiguous string. <c>registry</c> (0.944) the Schedule I alias registry, gated at 2+ distinct funders. <c>address</c> (0.944) address-as-key with a 2-edit name gate. <c>zip</c> (0.934) same name, disambiguated by recipient ZIP. <c>street</c> (0.834) same name, disambiguated by street — the weakest rule; exclude it if precision matters more than reach. <c>model</c> a per-row calibrated posterior, see <c>match_prob</c>. <c>null</c>: no recipient EIN, or provenance predating this field. Filter to <c>filed</c> for anything load-bearing.
/// </summary>
[JsonConverter(typeof(EinSourceConverter))]
public record EinSource
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EinSource(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static EinSource String(string value) => new(Optional<string>.Some(value), default);

    internal static EinSource Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EinSource(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EinSource)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EinSource)} holds no value.");
    }
}

file sealed class EinSourceConverter : JsonConverter<EinSource>
{
    public override EinSource Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return EinSource.String(value);
        }
        return EinSource.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EinSource value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EinSource)} contains no valid value to serialize.");
        }
    }
}
