using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(ExternalIdConverter))]
public record ExternalId
{
    private readonly Optional<ExternalIdResource> _externalIdResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ExternalId(Optional<ExternalIdResource> externalIdResourceValue, Optional<UnknownArm> unknownValue)
    {
        _externalIdResourceValue = externalIdResourceValue;
        _unknownValue = unknownValue;
    }

    public static ExternalId ExternalIdResource(ExternalIdResource value) =>
        new(Optional<ExternalIdResource>.Some(value), default);

    internal static ExternalId Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetExternalIdResource([NotNullWhen(true)] out ExternalIdResource? value) =>
        _externalIdResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ExternalId(ExternalIdResource value) => ExternalIdResource(value);

    public TResult Match<TResult>(Func<ExternalIdResource, TResult> onExternalIdResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetExternalIdResource(out var externalIdResourceValue) => onExternalIdResource(
                externalIdResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ExternalId)} holds no value.")
        };

    public void Match(Action<ExternalIdResource> onExternalIdResource, Action<JsonElement> otherwise)
    {
        if (TryGetExternalIdResource(out var externalIdResourceValue)) onExternalIdResource(externalIdResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ExternalId)} holds no value.");
    }
}

file sealed class ExternalIdConverter : JsonConverter<ExternalId>
{
    public override ExternalId Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ExternalIdResource>(root, options, out var externalIdResourceValue))
        {
            return ExternalId.ExternalIdResource(externalIdResourceValue);
        }
        return ExternalId.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ExternalId value, JsonSerializerOptions options)
    {
        if (value.TryGetExternalIdResource(out var externalIdResourceValue))
        {
            JsonSerializer.Serialize(writer, externalIdResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ExternalId)} contains no valid value to serialize.");
        }
    }
}
