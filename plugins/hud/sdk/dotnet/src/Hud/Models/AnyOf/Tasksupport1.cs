using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Tasksupport1Converter))]
public record Tasksupport1
{
    private readonly Optional<Tasksupport> _tasksupportValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Tasksupport1(Optional<Tasksupport> tasksupportValue, Optional<UnknownArm> unknownValue)
    {
        _tasksupportValue = tasksupportValue;
        _unknownValue = unknownValue;
    }

    public static Tasksupport1 Tasksupport(Tasksupport value) => new(Optional<Tasksupport>.Some(value), default);

    internal static Tasksupport1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTasksupport([NotNullWhen(true)] out Tasksupport? value) =>
        _tasksupportValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Tasksupport1(Tasksupport value) => Tasksupport(value);

    public TResult Match<TResult>(Func<Tasksupport, TResult> onTasksupport, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTasksupport(out var tasksupportValue) => onTasksupport(tasksupportValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Tasksupport1)} holds no value.")
        };

    public void Match(Action<Tasksupport> onTasksupport, Action<JsonElement> otherwise)
    {
        if (TryGetTasksupport(out var tasksupportValue)) onTasksupport(tasksupportValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Tasksupport1)} holds no value.");
    }
}

file sealed class Tasksupport1Converter : JsonConverter<Tasksupport1>
{
    public override Tasksupport1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Tasksupport>(root, options, out var tasksupportValue))
        {
            return Tasksupport1.Tasksupport(tasksupportValue);
        }
        return Tasksupport1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Tasksupport1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTasksupport(out var tasksupportValue))
        {
            JsonSerializer.Serialize(writer, tasksupportValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Tasksupport1)} contains no valid value to serialize.");
        }
    }
}
