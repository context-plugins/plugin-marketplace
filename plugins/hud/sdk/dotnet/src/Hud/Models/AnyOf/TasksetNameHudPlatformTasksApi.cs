using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation;

namespace Hud.Models.AnyOf;

/// <summary>
/// The team taskset to upload to, created when absent; required without taskset_id
/// </summary>
[JsonConverter(typeof(TasksetNameHudPlatformTasksApiConverter))]
public record TasksetNameHudPlatformTasksApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TasksetNameHudPlatformTasksApi(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static TasksetNameHudPlatformTasksApi String(string value) => new(Optional<string>.Some(value), default);

    internal static TasksetNameHudPlatformTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TasksetNameHudPlatformTasksApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TasksetNameHudPlatformTasksApi)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TasksetNameHudPlatformTasksApi)} holds no value.");
    }
}

file sealed class TasksetNameHudPlatformTasksApiConverter : JsonConverter<TasksetNameHudPlatformTasksApi>
{
    public override TasksetNameHudPlatformTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMaxLength(255))
            {
                return TasksetNameHudPlatformTasksApi.String(value);
            }
        }
        return TasksetNameHudPlatformTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        TasksetNameHudPlatformTasksApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TasksetNameHudPlatformTasksApi)} contains no valid value to serialize.");
        }
    }
}
