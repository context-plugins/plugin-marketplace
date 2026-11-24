using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ExecutionErrorConverter))]
public record ExecutionError
{
    private readonly Optional<QaExecutionError> _qaExecutionErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ExecutionError(Optional<QaExecutionError> qaExecutionErrorValue, Optional<UnknownArm> unknownValue)
    {
        _qaExecutionErrorValue = qaExecutionErrorValue;
        _unknownValue = unknownValue;
    }

    public static ExecutionError QaExecutionError(QaExecutionError value) =>
        new(Optional<QaExecutionError>.Some(value), default);

    internal static ExecutionError Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetQaExecutionError([NotNullWhen(true)] out QaExecutionError? value) =>
        _qaExecutionErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ExecutionError(QaExecutionError value) => QaExecutionError(value);

    public TResult Match<TResult>(Func<QaExecutionError, TResult> onQaExecutionError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetQaExecutionError(out var qaExecutionErrorValue) => onQaExecutionError(qaExecutionErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ExecutionError)} holds no value.")
        };

    public void Match(Action<QaExecutionError> onQaExecutionError, Action<JsonElement> otherwise)
    {
        if (TryGetQaExecutionError(out var qaExecutionErrorValue)) onQaExecutionError(qaExecutionErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ExecutionError)} holds no value.");
    }
}

file sealed class ExecutionErrorConverter : JsonConverter<ExecutionError>
{
    public override ExecutionError Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<QaExecutionError>(root, options, out var qaExecutionErrorValue))
        {
            return ExecutionError.QaExecutionError(qaExecutionErrorValue);
        }
        return ExecutionError.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ExecutionError value, JsonSerializerOptions options)
    {
        if (value.TryGetQaExecutionError(out var qaExecutionErrorValue))
        {
            JsonSerializer.Serialize(writer, qaExecutionErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ExecutionError)} contains no valid value to serialize.");
        }
    }
}
