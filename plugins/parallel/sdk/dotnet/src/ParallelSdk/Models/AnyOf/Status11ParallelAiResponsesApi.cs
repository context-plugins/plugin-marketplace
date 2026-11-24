using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Status11ParallelAiResponsesApiConverter))]
public record Status11ParallelAiResponsesApi
{
    private readonly Optional<Status1ParallelAiResponsesApi> _status1ParallelAiResponsesApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Status11ParallelAiResponsesApi(Optional<Status1ParallelAiResponsesApi> status1ParallelAiResponsesApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _status1ParallelAiResponsesApiValue = status1ParallelAiResponsesApiValue;
        _unknownValue = unknownValue;
    }

    public static Status11ParallelAiResponsesApi Status1ParallelAiResponsesApi(Status1ParallelAiResponsesApi value) =>
        new(Optional<Status1ParallelAiResponsesApi>.Some(value), default);

    internal static Status11ParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStatus1ParallelAiResponsesApi([NotNullWhen(true)] out Status1ParallelAiResponsesApi? value) =>
        _status1ParallelAiResponsesApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Status11ParallelAiResponsesApi(Status1ParallelAiResponsesApi value) =>
        Status1ParallelAiResponsesApi(value);

    public TResult Match<TResult>(Func<Status1ParallelAiResponsesApi, TResult> onStatus1ParallelAiResponsesApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStatus1ParallelAiResponsesApi(
                out var status1ParallelAiResponsesApiValue) => onStatus1ParallelAiResponsesApi(
                status1ParallelAiResponsesApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Status11ParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<Status1ParallelAiResponsesApi> onStatus1ParallelAiResponsesApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetStatus1ParallelAiResponsesApi(
            out var status1ParallelAiResponsesApiValue)) onStatus1ParallelAiResponsesApi(
            status1ParallelAiResponsesApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Status11ParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class Status11ParallelAiResponsesApiConverter : JsonConverter<Status11ParallelAiResponsesApi>
{
    public override Status11ParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Status1ParallelAiResponsesApi>(
            root,
            options,
            out var status1ParallelAiResponsesApiValue))
        {
            return Status11ParallelAiResponsesApi.Status1ParallelAiResponsesApi(status1ParallelAiResponsesApiValue);
        }
        return Status11ParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Status11ParallelAiResponsesApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetStatus1ParallelAiResponsesApi(out var status1ParallelAiResponsesApiValue))
        {
            JsonSerializer.Serialize(writer, status1ParallelAiResponsesApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Status11ParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
