using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Error for the run, present only if status is 'failed'.
/// </summary>
[JsonConverter(typeof(ErrorParallelAiTasksApiConverter))]
public record ErrorParallelAiTasksApi
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ErrorParallelAiTasksApi(Optional<Error> errorValue, Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _unknownValue = unknownValue;
    }

    public static ErrorParallelAiTasksApi Error(Error value) => new(Optional<Error>.Some(value), default);

    internal static ErrorParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ErrorParallelAiTasksApi(Error value) => Error(value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ErrorParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ErrorParallelAiTasksApi)} holds no value.");
    }
}

file sealed class ErrorParallelAiTasksApiConverter : JsonConverter<ErrorParallelAiTasksApi>
{
    public override ErrorParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ErrorParallelAiTasksApi.Error(errorValue);
        }
        return ErrorParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ErrorParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ErrorParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
