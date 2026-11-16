using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(FilesExternalLinksRequestConverter))]
public record FilesExternalLinksRequest
{
    private readonly Optional<CreateExternalLink> _createExternalLinkValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FilesExternalLinksRequest(Optional<CreateExternalLink> createExternalLinkValue,
        Optional<UnknownArm> unknownValue)
    {
        _createExternalLinkValue = createExternalLinkValue;
        _unknownValue = unknownValue;
    }

    public static FilesExternalLinksRequest CreateExternalLink(CreateExternalLink value) =>
        new(Optional<CreateExternalLink>.Some(value), default);

    internal static FilesExternalLinksRequest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateExternalLink([NotNullWhen(true)] out CreateExternalLink? value) =>
        _createExternalLinkValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FilesExternalLinksRequest(CreateExternalLink value) => CreateExternalLink(value);

    public TResult Match<TResult>(Func<CreateExternalLink, TResult> onCreateExternalLink,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateExternalLink(out var createExternalLinkValue) => onCreateExternalLink(
                createExternalLinkValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FilesExternalLinksRequest)} holds no value.")
        };

    public void Match(Action<CreateExternalLink> onCreateExternalLink, Action<JsonElement> otherwise)
    {
        if (TryGetCreateExternalLink(out var createExternalLinkValue)) onCreateExternalLink(createExternalLinkValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FilesExternalLinksRequest)} holds no value.");
    }
}

file sealed class FilesExternalLinksRequestConverter : JsonConverter<FilesExternalLinksRequest>
{
    public override FilesExternalLinksRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateExternalLink>(root, options, out var createExternalLinkValue))
        {
            return FilesExternalLinksRequest.CreateExternalLink(createExternalLinkValue);
        }
        return FilesExternalLinksRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FilesExternalLinksRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateExternalLink(out var createExternalLinkValue))
        {
            JsonSerializer.Serialize(writer, createExternalLinkValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FilesExternalLinksRequest)} contains no valid value to serialize.");
        }
    }
}
