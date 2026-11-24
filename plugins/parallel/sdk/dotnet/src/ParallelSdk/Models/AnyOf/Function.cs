using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(FunctionConverter))]
public record Function
{
    private readonly Optional<ChoiceDeltaToolCallFunction> _choiceDeltaToolCallFunctionValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Function(Optional<ChoiceDeltaToolCallFunction> choiceDeltaToolCallFunctionValue,
        Optional<UnknownArm> unknownValue)
    {
        _choiceDeltaToolCallFunctionValue = choiceDeltaToolCallFunctionValue;
        _unknownValue = unknownValue;
    }

    public static Function ChoiceDeltaToolCallFunction(ChoiceDeltaToolCallFunction value) =>
        new(Optional<ChoiceDeltaToolCallFunction>.Some(value), default);

    internal static Function Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetChoiceDeltaToolCallFunction([NotNullWhen(true)] out ChoiceDeltaToolCallFunction? value) =>
        _choiceDeltaToolCallFunctionValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Function(ChoiceDeltaToolCallFunction value) => ChoiceDeltaToolCallFunction(value);

    public TResult Match<TResult>(Func<ChoiceDeltaToolCallFunction, TResult> onChoiceDeltaToolCallFunction,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetChoiceDeltaToolCallFunction(
                out var choiceDeltaToolCallFunctionValue) => onChoiceDeltaToolCallFunction(
                choiceDeltaToolCallFunctionValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Function)} holds no value.")
        };

    public void Match(Action<ChoiceDeltaToolCallFunction> onChoiceDeltaToolCallFunction, Action<JsonElement> otherwise)
    {
        if (TryGetChoiceDeltaToolCallFunction(out var choiceDeltaToolCallFunctionValue)) onChoiceDeltaToolCallFunction(
            choiceDeltaToolCallFunctionValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Function)} holds no value.");
    }
}

file sealed class FunctionConverter : JsonConverter<Function>
{
    public override Function Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ChoiceDeltaToolCallFunction>(
            root,
            options,
            out var choiceDeltaToolCallFunctionValue))
        {
            return Function.ChoiceDeltaToolCallFunction(choiceDeltaToolCallFunctionValue);
        }
        return Function.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Function value, JsonSerializerOptions options)
    {
        if (value.TryGetChoiceDeltaToolCallFunction(out var choiceDeltaToolCallFunctionValue))
        {
            JsonSerializer.Serialize(writer, choiceDeltaToolCallFunctionValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Function)} contains no valid value to serialize.");
        }
    }
}
