using System;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;

namespace Ortto.Core.Models;

[DebuggerDisplay("{GetDebuggerDisplay(),nq}")]
internal readonly record struct Optional<TValue>
{
    [DebuggerBrowsable(DebuggerBrowsableState.Never)]
    private readonly bool _hasValue;
    [DebuggerBrowsable(DebuggerBrowsableState.Never)]
    private readonly TValue? _value;

    private Optional(TValue? value, bool hasValue)
    {
        _value = value;
        _hasValue = hasValue;
    }

    public static Optional<TValue> Some(TValue value) => new(value, true);

    public bool TryGetValue([MaybeNullWhen(false)] out TValue value)
    {
        value = _value;
        return _hasValue;
    }

    private string GetDebuggerDisplay() => _hasValue ? $"Some({_value})" : "None";
}

internal readonly struct UnknownArm(JsonElement value) : IEquatable<UnknownArm>
{
    public JsonElement Value { get; } = value.Clone();

    public bool Equals(UnknownArm other) =>
        Value.ValueKind is JsonValueKind.Undefined || other.Value.ValueKind is JsonValueKind.Undefined
            ? Value.ValueKind == other.Value.ValueKind
            : JsonElement.DeepEquals(Value, other.Value);

    public override bool Equals(object? obj) => obj is UnknownArm other && Equals(other);

    public override int GetHashCode() => (int)Value.ValueKind;

    public override string ToString() => Value.ToString();
}

internal static class UnknownArmExtensions
{
    extension(Optional<UnknownArm> optional)
    {
        public bool TryGetValue(out JsonElement value)
        {
            var found = optional.TryGetValue(out var arm);
            value = arm.Value;
            return found;
        }
    }

    extension(UnknownArm)
    {
        public static JsonElement Capture(ref Utf8JsonReader reader)
        {
            using var doc = JsonDocument.ParseValue(ref reader);
            return doc.RootElement.Clone();
        }
    }
}
