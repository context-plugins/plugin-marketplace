using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Status11HudPlatformTasksApiConverter))]
public record Status11HudPlatformTasksApi
{
    private readonly Optional<Status1HudPlatformTasksApi> _status1HudPlatformTasksApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Status11HudPlatformTasksApi(Optional<Status1HudPlatformTasksApi> status1HudPlatformTasksApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _status1HudPlatformTasksApiValue = status1HudPlatformTasksApiValue;
        _unknownValue = unknownValue;
    }

    public static Status11HudPlatformTasksApi Status1HudPlatformTasksApi(Status1HudPlatformTasksApi value) =>
        new(Optional<Status1HudPlatformTasksApi>.Some(value), default);

    internal static Status11HudPlatformTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStatus1HudPlatformTasksApi([NotNullWhen(true)] out Status1HudPlatformTasksApi? value) =>
        _status1HudPlatformTasksApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Status11HudPlatformTasksApi(Status1HudPlatformTasksApi value) =>
        Status1HudPlatformTasksApi(value);

    public TResult Match<TResult>(Func<Status1HudPlatformTasksApi, TResult> onStatus1HudPlatformTasksApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStatus1HudPlatformTasksApi(
                out var status1HudPlatformTasksApiValue) => onStatus1HudPlatformTasksApi(
                status1HudPlatformTasksApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Status11HudPlatformTasksApi)} holds no value.")
        };

    public void Match(Action<Status1HudPlatformTasksApi> onStatus1HudPlatformTasksApi, Action<JsonElement> otherwise)
    {
        if (TryGetStatus1HudPlatformTasksApi(out var status1HudPlatformTasksApiValue)) onStatus1HudPlatformTasksApi(
            status1HudPlatformTasksApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Status11HudPlatformTasksApi)} holds no value.");
    }
}

file sealed class Status11HudPlatformTasksApiConverter : JsonConverter<Status11HudPlatformTasksApi>
{
    public override Status11HudPlatformTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Status1HudPlatformTasksApi>(
            root,
            options,
            out var status1HudPlatformTasksApiValue))
        {
            return Status11HudPlatformTasksApi.Status1HudPlatformTasksApi(status1HudPlatformTasksApiValue);
        }
        return Status11HudPlatformTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Status11HudPlatformTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetStatus1HudPlatformTasksApi(out var status1HudPlatformTasksApiValue))
        {
            JsonSerializer.Serialize(writer, status1HudPlatformTasksApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Status11HudPlatformTasksApi)} contains no valid value to serialize.");
        }
    }
}
