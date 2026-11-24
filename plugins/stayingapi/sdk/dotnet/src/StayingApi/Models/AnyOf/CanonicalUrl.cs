using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;

namespace StayingApi.Models.AnyOf;

/// <summary>
/// The exact fetched listing URL. It may include locale/occupancy/tracking query params (e.g. booking <c>…/casa-de-alba.en-gb.html?selected_currency=USD&amp;group_adults=2…</c>), so it is NOT safe for naive string-equality or de-duplication — compare on resolvedId instead. Treat it as a navigable link, not an identity key.
/// </summary>
[JsonConverter(typeof(CanonicalUrlConverter))]
public record CanonicalUrl
{
    private readonly Optional<string> _uriStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CanonicalUrl(Optional<string> uriStringValue, Optional<UnknownArm> unknownValue)
    {
        _uriStringValue = uriStringValue;
        _unknownValue = unknownValue;
    }

    public static CanonicalUrl UriString(string value) => new(Optional<string>.Some(value), default);

    internal static CanonicalUrl Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUriString([NotNullWhen(true)] out string? value) => _uriStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CanonicalUrl(string value) => UriString(value);

    public TResult Match<TResult>(Func<string, TResult> onUriString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUriString(out var uriStringValue) => onUriString(uriStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CanonicalUrl)} holds no value.")
        };

    public void Match(Action<string> onUriString, Action<JsonElement> otherwise)
    {
        if (TryGetUriString(out var uriStringValue)) onUriString(uriStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CanonicalUrl)} holds no value.");
    }
}

file sealed class CanonicalUrlConverter : JsonConverter<CanonicalUrl>
{
    public override CanonicalUrl Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasFormat(FormatKind.Uri))
            {
                return CanonicalUrl.UriString(value);
            }
        }
        return CanonicalUrl.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CanonicalUrl value, JsonSerializerOptions options)
    {
        if (value.TryGetUriString(out var uriStringValue))
        {
            JsonSerializer.Serialize(writer, uriStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CanonicalUrl)} contains no valid value to serialize.");
        }
    }
}
