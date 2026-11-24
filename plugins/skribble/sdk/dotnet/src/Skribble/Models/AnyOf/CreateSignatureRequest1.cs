using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Extensions;
using Skribble.Core.Models;

namespace Skribble.Models.AnyOf;

[JsonConverter(typeof(CreateSignatureRequest1Converter))]
public record CreateSignatureRequest1
{
    private readonly Optional<Base64Content> _base64ContentValue;

    private readonly Optional<FileUrl> _fileUrlValue;

    private readonly Optional<DocumentId> _documentIdValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CreateSignatureRequest1(Optional<Base64Content> base64ContentValue,
        Optional<FileUrl> fileUrlValue,
        Optional<DocumentId> documentIdValue,
        Optional<UnknownArm> unknownValue)
    {
        _base64ContentValue = base64ContentValue;
        _fileUrlValue = fileUrlValue;
        _documentIdValue = documentIdValue;
        _unknownValue = unknownValue;
    }

    public static CreateSignatureRequest1 Base64Content(Base64Content value) =>
        new(Optional<Base64Content>.Some(value), default, default, default);

    public static CreateSignatureRequest1 FileUrl(FileUrl value) =>
        new(default, Optional<FileUrl>.Some(value), default, default);

    public static CreateSignatureRequest1 DocumentId(DocumentId value) =>
        new(default, default, Optional<DocumentId>.Some(value), default);

    internal static CreateSignatureRequest1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBase64Content([NotNullWhen(true)] out Base64Content? value) =>
        _base64ContentValue.TryGetValue(out value);

    public bool TryGetFileUrl([NotNullWhen(true)] out FileUrl? value) => _fileUrlValue.TryGetValue(out value);

    public bool TryGetDocumentId([NotNullWhen(true)] out DocumentId? value) => _documentIdValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CreateSignatureRequest1(Base64Content value) => Base64Content(value);

    public static implicit operator CreateSignatureRequest1(FileUrl value) => FileUrl(value);

    public static implicit operator CreateSignatureRequest1(DocumentId value) => DocumentId(value);

    public TResult Match<TResult>(Func<Base64Content, TResult> onBase64Content,
        Func<FileUrl, TResult> onFileUrl,
        Func<DocumentId, TResult> onDocumentId,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBase64Content(out var base64ContentValue) => onBase64Content(base64ContentValue),
            _ when TryGetFileUrl(out var fileUrlValue) => onFileUrl(fileUrlValue),
            _ when TryGetDocumentId(out var documentIdValue) => onDocumentId(documentIdValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CreateSignatureRequest1)} holds no value.")
        };

    public void Match(Action<Base64Content> onBase64Content,
        Action<FileUrl> onFileUrl,
        Action<DocumentId> onDocumentId,
        Action<JsonElement> otherwise)
    {
        if (TryGetBase64Content(out var base64ContentValue)) onBase64Content(base64ContentValue);
        else if (TryGetFileUrl(out var fileUrlValue)) onFileUrl(fileUrlValue);
        else if (TryGetDocumentId(out var documentIdValue)) onDocumentId(documentIdValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CreateSignatureRequest1)} holds no value.");
    }
}

file sealed class CreateSignatureRequest1Converter : JsonConverter<CreateSignatureRequest1>
{
    public override CreateSignatureRequest1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Base64Content>(root, options, out var base64ContentValue))
        {
            return CreateSignatureRequest1.Base64Content(base64ContentValue);
        }
        if (JsonSerializer.TryDeserialize<FileUrl>(root, options, out var fileUrlValue))
        {
            return CreateSignatureRequest1.FileUrl(fileUrlValue);
        }
        if (JsonSerializer.TryDeserialize<DocumentId>(root, options, out var documentIdValue))
        {
            return CreateSignatureRequest1.DocumentId(documentIdValue);
        }
        return CreateSignatureRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CreateSignatureRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetBase64Content(out var base64ContentValue))
        {
            JsonSerializer.Serialize(writer, base64ContentValue, options);
        }
        else if (value.TryGetFileUrl(out var fileUrlValue))
        {
            JsonSerializer.Serialize(writer, fileUrlValue, options);
        }
        else if (value.TryGetDocumentId(out var documentIdValue))
        {
            JsonSerializer.Serialize(writer, documentIdValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CreateSignatureRequest1)} contains no valid value to serialize.");
        }
    }
}
