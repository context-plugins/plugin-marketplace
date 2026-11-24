using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Shortcut.Core.Extensions;
using Shortcut.Core.Models;

namespace Shortcut.Models.AnyOf;

[JsonConverter(typeof(SubTaskConverter))]
public record SubTask
{
    private readonly Optional<LinkSubTaskParams> _linkSubTaskParamsValue;

    private readonly Optional<CreateSubTaskParams> _createSubTaskParamsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubTask(Optional<LinkSubTaskParams> linkSubTaskParamsValue,
        Optional<CreateSubTaskParams> createSubTaskParamsValue,
        Optional<UnknownArm> unknownValue)
    {
        _linkSubTaskParamsValue = linkSubTaskParamsValue;
        _createSubTaskParamsValue = createSubTaskParamsValue;
        _unknownValue = unknownValue;
    }

    public static SubTask LinkSubTaskParams(LinkSubTaskParams value) =>
        new(Optional<LinkSubTaskParams>.Some(value), default, default);

    public static SubTask CreateSubTaskParams(CreateSubTaskParams value) =>
        new(default, Optional<CreateSubTaskParams>.Some(value), default);

    internal static SubTask Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLinkSubTaskParams([NotNullWhen(true)] out LinkSubTaskParams? value) =>
        _linkSubTaskParamsValue.TryGetValue(out value);

    public bool TryGetCreateSubTaskParams([NotNullWhen(true)] out CreateSubTaskParams? value) =>
        _createSubTaskParamsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubTask(LinkSubTaskParams value) => LinkSubTaskParams(value);

    public static implicit operator SubTask(CreateSubTaskParams value) => CreateSubTaskParams(value);

    public TResult Match<TResult>(Func<LinkSubTaskParams, TResult> onLinkSubTaskParams,
        Func<CreateSubTaskParams, TResult> onCreateSubTaskParams,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLinkSubTaskParams(out var linkSubTaskParamsValue) => onLinkSubTaskParams(
                linkSubTaskParamsValue),
            _ when TryGetCreateSubTaskParams(out var createSubTaskParamsValue) => onCreateSubTaskParams(
                createSubTaskParamsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubTask)} holds no value.")
        };

    public void Match(Action<LinkSubTaskParams> onLinkSubTaskParams,
        Action<CreateSubTaskParams> onCreateSubTaskParams,
        Action<JsonElement> otherwise)
    {
        if (TryGetLinkSubTaskParams(out var linkSubTaskParamsValue)) onLinkSubTaskParams(linkSubTaskParamsValue);
        else if (TryGetCreateSubTaskParams(out var createSubTaskParamsValue)) onCreateSubTaskParams(
            createSubTaskParamsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubTask)} holds no value.");
    }
}

file sealed class SubTaskConverter : JsonConverter<SubTask>
{
    public override SubTask Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<LinkSubTaskParams>(root, options, out var linkSubTaskParamsValue))
        {
            return SubTask.LinkSubTaskParams(linkSubTaskParamsValue);
        }
        if (JsonSerializer.TryDeserialize<CreateSubTaskParams>(root, options, out var createSubTaskParamsValue))
        {
            return SubTask.CreateSubTaskParams(createSubTaskParamsValue);
        }
        return SubTask.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubTask value, JsonSerializerOptions options)
    {
        if (value.TryGetLinkSubTaskParams(out var linkSubTaskParamsValue))
        {
            JsonSerializer.Serialize(writer, linkSubTaskParamsValue, options);
        }
        else if (value.TryGetCreateSubTaskParams(out var createSubTaskParamsValue))
        {
            JsonSerializer.Serialize(writer, createSubTaskParamsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubTask)} contains no valid value to serialize.");
        }
    }
}
