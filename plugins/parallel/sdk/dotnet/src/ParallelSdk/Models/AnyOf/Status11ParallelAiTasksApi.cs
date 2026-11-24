using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Status11ParallelAiTasksApiConverter))]
public record Status11ParallelAiTasksApi
{
    private readonly Optional<Status1ParallelAiTasksApi> _status1ParallelAiTasksApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Status11ParallelAiTasksApi(Optional<Status1ParallelAiTasksApi> status1ParallelAiTasksApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _status1ParallelAiTasksApiValue = status1ParallelAiTasksApiValue;
        _unknownValue = unknownValue;
    }

    public static Status11ParallelAiTasksApi Status1ParallelAiTasksApi(Status1ParallelAiTasksApi value) =>
        new(Optional<Status1ParallelAiTasksApi>.Some(value), default);

    internal static Status11ParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStatus1ParallelAiTasksApi([NotNullWhen(true)] out Status1ParallelAiTasksApi? value) =>
        _status1ParallelAiTasksApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Status11ParallelAiTasksApi(Status1ParallelAiTasksApi value) =>
        Status1ParallelAiTasksApi(value);

    public TResult Match<TResult>(Func<Status1ParallelAiTasksApi, TResult> onStatus1ParallelAiTasksApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStatus1ParallelAiTasksApi(
                out var status1ParallelAiTasksApiValue) => onStatus1ParallelAiTasksApi(status1ParallelAiTasksApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Status11ParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<Status1ParallelAiTasksApi> onStatus1ParallelAiTasksApi, Action<JsonElement> otherwise)
    {
        if (TryGetStatus1ParallelAiTasksApi(out var status1ParallelAiTasksApiValue)) onStatus1ParallelAiTasksApi(
            status1ParallelAiTasksApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Status11ParallelAiTasksApi)} holds no value.");
    }
}

file sealed class Status11ParallelAiTasksApiConverter : JsonConverter<Status11ParallelAiTasksApi>
{
    public override Status11ParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Status1ParallelAiTasksApi>(
            root,
            options,
            out var status1ParallelAiTasksApiValue))
        {
            return Status11ParallelAiTasksApi.Status1ParallelAiTasksApi(status1ParallelAiTasksApiValue);
        }
        return Status11ParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Status11ParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetStatus1ParallelAiTasksApi(out var status1ParallelAiTasksApiValue))
        {
            JsonSerializer.Serialize(writer, status1ParallelAiTasksApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Status11ParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
