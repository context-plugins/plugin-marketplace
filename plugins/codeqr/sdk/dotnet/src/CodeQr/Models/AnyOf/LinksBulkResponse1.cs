using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;

namespace CodeQr.Models.AnyOf;

[JsonConverter(typeof(LinksBulkResponse1Converter))]
public record LinksBulkResponse1
{
    private readonly Optional<LinkCodeqrIoLinksApi> _linkCodeqrIoLinksApiValue;

    private readonly Optional<LinkError> _linkErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LinksBulkResponse1(Optional<LinkCodeqrIoLinksApi> linkCodeqrIoLinksApiValue,
        Optional<LinkError> linkErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _linkCodeqrIoLinksApiValue = linkCodeqrIoLinksApiValue;
        _linkErrorValue = linkErrorValue;
        _unknownValue = unknownValue;
    }

    public static LinksBulkResponse1 LinkCodeqrIoLinksApi(LinkCodeqrIoLinksApi value) =>
        new(Optional<LinkCodeqrIoLinksApi>.Some(value), default, default);

    public static LinksBulkResponse1 LinkError(LinkError value) =>
        new(default, Optional<LinkError>.Some(value), default);

    internal static LinksBulkResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLinkCodeqrIoLinksApi([NotNullWhen(true)] out LinkCodeqrIoLinksApi? value) =>
        _linkCodeqrIoLinksApiValue.TryGetValue(out value);

    public bool TryGetLinkError([NotNullWhen(true)] out LinkError? value) => _linkErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LinksBulkResponse1(LinkCodeqrIoLinksApi value) => LinkCodeqrIoLinksApi(value);

    public static implicit operator LinksBulkResponse1(LinkError value) => LinkError(value);

    public TResult Match<TResult>(Func<LinkCodeqrIoLinksApi, TResult> onLinkCodeqrIoLinksApi,
        Func<LinkError, TResult> onLinkError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLinkCodeqrIoLinksApi(out var linkCodeqrIoLinksApiValue) => onLinkCodeqrIoLinksApi(
                linkCodeqrIoLinksApiValue),
            _ when TryGetLinkError(out var linkErrorValue) => onLinkError(linkErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LinksBulkResponse1)} holds no value.")
        };

    public void Match(Action<LinkCodeqrIoLinksApi> onLinkCodeqrIoLinksApi,
        Action<LinkError> onLinkError,
        Action<JsonElement> otherwise)
    {
        if (TryGetLinkCodeqrIoLinksApi(out var linkCodeqrIoLinksApiValue)) onLinkCodeqrIoLinksApi(
            linkCodeqrIoLinksApiValue);
        else if (TryGetLinkError(out var linkErrorValue)) onLinkError(linkErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LinksBulkResponse1)} holds no value.");
    }
}

file sealed class LinksBulkResponse1Converter : JsonConverter<LinksBulkResponse1>
{
    public override LinksBulkResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<LinkCodeqrIoLinksApi>(root, options, out var linkCodeqrIoLinksApiValue))
        {
            return LinksBulkResponse1.LinkCodeqrIoLinksApi(linkCodeqrIoLinksApiValue);
        }
        if (JsonSerializer.TryDeserialize<LinkError>(root, options, out var linkErrorValue))
        {
            return LinksBulkResponse1.LinkError(linkErrorValue);
        }
        return LinksBulkResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LinksBulkResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetLinkCodeqrIoLinksApi(out var linkCodeqrIoLinksApiValue))
        {
            JsonSerializer.Serialize(writer, linkCodeqrIoLinksApiValue, options);
        }
        else if (value.TryGetLinkError(out var linkErrorValue))
        {
            JsonSerializer.Serialize(writer, linkErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LinksBulkResponse1)} contains no valid value to serialize.");
        }
    }
}
