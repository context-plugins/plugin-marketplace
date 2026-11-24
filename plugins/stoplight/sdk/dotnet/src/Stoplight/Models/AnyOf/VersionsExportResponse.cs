using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Stoplight.Core.Extensions;
using Stoplight.Core.Models;

namespace Stoplight.Models.AnyOf;

/// <summary>
/// The specification. Returned as a string when YAML, object when JSON.
/// </summary>
[JsonConverter(typeof(VersionsExportResponseConverter))]
public record VersionsExportResponse
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private VersionsExportResponse(Optional<object> anonymousObjectValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static VersionsExportResponse AnonymousObject(object value) =>
        new(Optional<object>.Some(value), default, default);

    public static VersionsExportResponse String(string value) => new(default, Optional<string>.Some(value), default);

    internal static VersionsExportResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator VersionsExportResponse(string value) => String(value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(VersionsExportResponse)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(VersionsExportResponse)} holds no value.");
    }
}

file sealed class VersionsExportResponseConverter : JsonConverter<VersionsExportResponse>
{
    public override VersionsExportResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return VersionsExportResponse.AnonymousObject(anonymousObjectValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return VersionsExportResponse.String(value);
        }
        return VersionsExportResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, VersionsExportResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(VersionsExportResponse)} contains no valid value to serialize.");
        }
    }
}
