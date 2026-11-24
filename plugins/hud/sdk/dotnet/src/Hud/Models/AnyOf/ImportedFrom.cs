using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ImportedFromConverter))]
public record ImportedFrom
{
    private readonly Optional<ExternalOrigin> _externalOriginValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ImportedFrom(Optional<ExternalOrigin> externalOriginValue, Optional<UnknownArm> unknownValue)
    {
        _externalOriginValue = externalOriginValue;
        _unknownValue = unknownValue;
    }

    public static ImportedFrom ExternalOrigin(ExternalOrigin value) =>
        new(Optional<ExternalOrigin>.Some(value), default);

    internal static ImportedFrom Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetExternalOrigin([NotNullWhen(true)] out ExternalOrigin? value) =>
        _externalOriginValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ImportedFrom(ExternalOrigin value) => ExternalOrigin(value);

    public TResult Match<TResult>(Func<ExternalOrigin, TResult> onExternalOrigin,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetExternalOrigin(out var externalOriginValue) => onExternalOrigin(externalOriginValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ImportedFrom)} holds no value.")
        };

    public void Match(Action<ExternalOrigin> onExternalOrigin, Action<JsonElement> otherwise)
    {
        if (TryGetExternalOrigin(out var externalOriginValue)) onExternalOrigin(externalOriginValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ImportedFrom)} holds no value.");
    }
}

file sealed class ImportedFromConverter : JsonConverter<ImportedFrom>
{
    public override ImportedFrom Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ExternalOrigin>(root, options, out var externalOriginValue))
        {
            return ImportedFrom.ExternalOrigin(externalOriginValue);
        }
        return ImportedFrom.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ImportedFrom value, JsonSerializerOptions options)
    {
        if (value.TryGetExternalOrigin(out var externalOriginValue))
        {
            JsonSerializer.Serialize(writer, externalOriginValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ImportedFrom)} contains no valid value to serialize.");
        }
    }
}
