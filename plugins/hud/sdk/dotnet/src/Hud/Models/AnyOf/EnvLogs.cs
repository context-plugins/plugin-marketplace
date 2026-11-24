using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(EnvLogsConverter))]
public record EnvLogs
{
    private readonly Optional<IReadOnlyList<EnvLogEntry>> _listOfEnvLogEntryValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EnvLogs(Optional<IReadOnlyList<EnvLogEntry>> listOfEnvLogEntryValue, Optional<UnknownArm> unknownValue)
    {
        _listOfEnvLogEntryValue = listOfEnvLogEntryValue;
        _unknownValue = unknownValue;
    }

    public static EnvLogs ListOfEnvLogEntry(IReadOnlyList<EnvLogEntry> value) =>
        new(Optional<IReadOnlyList<EnvLogEntry>>.Some(value), default);

    internal static EnvLogs Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfEnvLogEntry([NotNullWhen(true)] out IReadOnlyList<EnvLogEntry>? value) =>
        _listOfEnvLogEntryValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<EnvLogEntry>, TResult> onListOfEnvLogEntry,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfEnvLogEntry(out var listOfEnvLogEntryValue) => onListOfEnvLogEntry(
                listOfEnvLogEntryValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EnvLogs)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<EnvLogEntry>> onListOfEnvLogEntry, Action<JsonElement> otherwise)
    {
        if (TryGetListOfEnvLogEntry(out var listOfEnvLogEntryValue)) onListOfEnvLogEntry(listOfEnvLogEntryValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EnvLogs)} holds no value.");
    }
}

file sealed class EnvLogsConverter : JsonConverter<EnvLogs>
{
    public override EnvLogs Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<EnvLogEntry>>(root, options, out var listOfEnvLogEntryValue))
        {
            return EnvLogs.ListOfEnvLogEntry(listOfEnvLogEntryValue);
        }
        return EnvLogs.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EnvLogs value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfEnvLogEntry(out var listOfEnvLogEntryValue))
        {
            JsonSerializer.Serialize(writer, listOfEnvLogEntryValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EnvLogs)} contains no valid value to serialize.");
        }
    }
}
