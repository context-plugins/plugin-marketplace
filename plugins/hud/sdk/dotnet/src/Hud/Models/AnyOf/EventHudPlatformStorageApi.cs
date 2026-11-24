using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(EventHudPlatformStorageApiConverter))]
public record EventHudPlatformStorageApi
{
    private readonly Optional<FileSnapshotEvent> _fileSnapshotEventValue;

    private readonly Optional<FileSetupEvent> _fileSetupEventValue;

    private readonly Optional<FileChangeEvent> _fileChangeEventValue;

    private readonly Optional<FileCaptureEvent> _fileCaptureEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventHudPlatformStorageApi(Optional<FileSnapshotEvent> fileSnapshotEventValue,
        Optional<FileSetupEvent> fileSetupEventValue,
        Optional<FileChangeEvent> fileChangeEventValue,
        Optional<FileCaptureEvent> fileCaptureEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _fileSnapshotEventValue = fileSnapshotEventValue;
        _fileSetupEventValue = fileSetupEventValue;
        _fileChangeEventValue = fileChangeEventValue;
        _fileCaptureEventValue = fileCaptureEventValue;
        _unknownValue = unknownValue;
    }

    public static EventHudPlatformStorageApi FileSnapshotEvent(FileSnapshotEvent value) =>
        new(Optional<FileSnapshotEvent>.Some(value), default, default, default, default);

    public static EventHudPlatformStorageApi FileSetupEvent(FileSetupEvent value) =>
        new(default, Optional<FileSetupEvent>.Some(value), default, default, default);

    public static EventHudPlatformStorageApi FileChangeEvent(FileChangeEvent value) =>
        new(default, default, Optional<FileChangeEvent>.Some(value), default, default);

    public static EventHudPlatformStorageApi FileCaptureEvent(FileCaptureEvent value) =>
        new(default, default, default, Optional<FileCaptureEvent>.Some(value), default);

    internal static EventHudPlatformStorageApi Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFileSnapshotEvent([NotNullWhen(true)] out FileSnapshotEvent? value) =>
        _fileSnapshotEventValue.TryGetValue(out value);

    public bool TryGetFileSetupEvent([NotNullWhen(true)] out FileSetupEvent? value) =>
        _fileSetupEventValue.TryGetValue(out value);

    public bool TryGetFileChangeEvent([NotNullWhen(true)] out FileChangeEvent? value) =>
        _fileChangeEventValue.TryGetValue(out value);

    public bool TryGetFileCaptureEvent([NotNullWhen(true)] out FileCaptureEvent? value) =>
        _fileCaptureEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventHudPlatformStorageApi(FileSnapshotEvent value) => FileSnapshotEvent(value);

    public static implicit operator EventHudPlatformStorageApi(FileSetupEvent value) => FileSetupEvent(value);

    public static implicit operator EventHudPlatformStorageApi(FileChangeEvent value) => FileChangeEvent(value);

    public static implicit operator EventHudPlatformStorageApi(FileCaptureEvent value) => FileCaptureEvent(value);

    public TResult Match<TResult>(Func<FileSnapshotEvent, TResult> onFileSnapshotEvent,
        Func<FileSetupEvent, TResult> onFileSetupEvent,
        Func<FileChangeEvent, TResult> onFileChangeEvent,
        Func<FileCaptureEvent, TResult> onFileCaptureEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFileSnapshotEvent(out var fileSnapshotEventValue) => onFileSnapshotEvent(
                fileSnapshotEventValue),
            _ when TryGetFileSetupEvent(out var fileSetupEventValue) => onFileSetupEvent(fileSetupEventValue),
            _ when TryGetFileChangeEvent(out var fileChangeEventValue) => onFileChangeEvent(fileChangeEventValue),
            _ when TryGetFileCaptureEvent(out var fileCaptureEventValue) => onFileCaptureEvent(fileCaptureEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventHudPlatformStorageApi)} holds no value.")
        };

    public void Match(Action<FileSnapshotEvent> onFileSnapshotEvent,
        Action<FileSetupEvent> onFileSetupEvent,
        Action<FileChangeEvent> onFileChangeEvent,
        Action<FileCaptureEvent> onFileCaptureEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetFileSnapshotEvent(out var fileSnapshotEventValue)) onFileSnapshotEvent(fileSnapshotEventValue);
        else if (TryGetFileSetupEvent(out var fileSetupEventValue)) onFileSetupEvent(fileSetupEventValue);
        else if (TryGetFileChangeEvent(out var fileChangeEventValue)) onFileChangeEvent(fileChangeEventValue);
        else if (TryGetFileCaptureEvent(out var fileCaptureEventValue)) onFileCaptureEvent(fileCaptureEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventHudPlatformStorageApi)} holds no value.");
    }
}

file sealed class EventHudPlatformStorageApiConverter : JsonConverter<EventHudPlatformStorageApi>
{
    public override EventHudPlatformStorageApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FileSnapshotEvent>(root, options, out var fileSnapshotEventValue))
        {
            return EventHudPlatformStorageApi.FileSnapshotEvent(fileSnapshotEventValue);
        }
        if (JsonSerializer.TryDeserialize<FileSetupEvent>(root, options, out var fileSetupEventValue))
        {
            return EventHudPlatformStorageApi.FileSetupEvent(fileSetupEventValue);
        }
        if (JsonSerializer.TryDeserialize<FileChangeEvent>(root, options, out var fileChangeEventValue))
        {
            return EventHudPlatformStorageApi.FileChangeEvent(fileChangeEventValue);
        }
        if (JsonSerializer.TryDeserialize<FileCaptureEvent>(root, options, out var fileCaptureEventValue))
        {
            return EventHudPlatformStorageApi.FileCaptureEvent(fileCaptureEventValue);
        }
        return EventHudPlatformStorageApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EventHudPlatformStorageApi value, JsonSerializerOptions options)
    {
        if (value.TryGetFileSnapshotEvent(out var fileSnapshotEventValue))
        {
            JsonSerializer.Serialize(writer, fileSnapshotEventValue, options);
        }
        else if (value.TryGetFileSetupEvent(out var fileSetupEventValue))
        {
            JsonSerializer.Serialize(writer, fileSetupEventValue, options);
        }
        else if (value.TryGetFileChangeEvent(out var fileChangeEventValue))
        {
            JsonSerializer.Serialize(writer, fileChangeEventValue, options);
        }
        else if (value.TryGetFileCaptureEvent(out var fileCaptureEventValue))
        {
            JsonSerializer.Serialize(writer, fileCaptureEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EventHudPlatformStorageApi)} contains no valid value to serialize.");
        }
    }
}
