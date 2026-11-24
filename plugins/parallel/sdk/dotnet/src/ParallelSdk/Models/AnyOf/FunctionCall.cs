using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(FunctionCallConverter))]
public record FunctionCall
{
    private readonly Optional<ChoiceDeltaFunctionCall> _choiceDeltaFunctionCallValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FunctionCall(Optional<ChoiceDeltaFunctionCall> choiceDeltaFunctionCallValue,
        Optional<UnknownArm> unknownValue)
    {
        _choiceDeltaFunctionCallValue = choiceDeltaFunctionCallValue;
        _unknownValue = unknownValue;
    }

    public static FunctionCall ChoiceDeltaFunctionCall(ChoiceDeltaFunctionCall value) =>
        new(Optional<ChoiceDeltaFunctionCall>.Some(value), default);

    internal static FunctionCall Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetChoiceDeltaFunctionCall([NotNullWhen(true)] out ChoiceDeltaFunctionCall? value) =>
        _choiceDeltaFunctionCallValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FunctionCall(ChoiceDeltaFunctionCall value) => ChoiceDeltaFunctionCall(value);

    public TResult Match<TResult>(Func<ChoiceDeltaFunctionCall, TResult> onChoiceDeltaFunctionCall,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetChoiceDeltaFunctionCall(out var choiceDeltaFunctionCallValue) => onChoiceDeltaFunctionCall(
                choiceDeltaFunctionCallValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FunctionCall)} holds no value.")
        };

    public void Match(Action<ChoiceDeltaFunctionCall> onChoiceDeltaFunctionCall, Action<JsonElement> otherwise)
    {
        if (TryGetChoiceDeltaFunctionCall(out var choiceDeltaFunctionCallValue)) onChoiceDeltaFunctionCall(
            choiceDeltaFunctionCallValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FunctionCall)} holds no value.");
    }
}

file sealed class FunctionCallConverter : JsonConverter<FunctionCall>
{
    public override FunctionCall Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ChoiceDeltaFunctionCall>(root, options, out var choiceDeltaFunctionCallValue))
        {
            return FunctionCall.ChoiceDeltaFunctionCall(choiceDeltaFunctionCallValue);
        }
        return FunctionCall.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FunctionCall value, JsonSerializerOptions options)
    {
        if (value.TryGetChoiceDeltaFunctionCall(out var choiceDeltaFunctionCallValue))
        {
            JsonSerializer.Serialize(writer, choiceDeltaFunctionCallValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FunctionCall)} contains no valid value to serialize.");
        }
    }
}
