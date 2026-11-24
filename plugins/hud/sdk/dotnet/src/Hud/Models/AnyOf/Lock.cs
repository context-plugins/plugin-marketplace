using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(LockConverter))]
public record Lock
{
    private readonly Optional<McpLock> _mcpLockValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Lock(Optional<McpLock> mcpLockValue, Optional<UnknownArm> unknownValue)
    {
        _mcpLockValue = mcpLockValue;
        _unknownValue = unknownValue;
    }

    public static Lock McpLock(McpLock value) => new(Optional<McpLock>.Some(value), default);

    internal static Lock Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMcpLock([NotNullWhen(true)] out McpLock? value) => _mcpLockValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Lock(McpLock value) => McpLock(value);

    public TResult Match<TResult>(Func<McpLock, TResult> onMcpLock, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMcpLock(out var mcpLockValue) => onMcpLock(mcpLockValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Lock)} holds no value.")
        };

    public void Match(Action<McpLock> onMcpLock, Action<JsonElement> otherwise)
    {
        if (TryGetMcpLock(out var mcpLockValue)) onMcpLock(mcpLockValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Lock)} holds no value.");
    }
}

file sealed class LockConverter : JsonConverter<Lock>
{
    public override Lock Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<McpLock>(root, options, out var mcpLockValue))
        {
            return Lock.McpLock(mcpLockValue);
        }
        return Lock.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Lock value, JsonSerializerOptions options)
    {
        if (value.TryGetMcpLock(out var mcpLockValue))
        {
            JsonSerializer.Serialize(writer, mcpLockValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Lock)} contains no valid value to serialize.");
        }
    }
}
