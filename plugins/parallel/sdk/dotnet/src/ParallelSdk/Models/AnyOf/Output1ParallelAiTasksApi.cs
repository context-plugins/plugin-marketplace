using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Output from the run; included only if requested and if status == <c>completed</c>.
/// </summary>
[JsonConverter(typeof(Output1ParallelAiTasksApiConverter))]
public record Output1ParallelAiTasksApi
{
    private readonly Optional<Output2> _output2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Output1ParallelAiTasksApi(Optional<Output2> output2Value, Optional<UnknownArm> unknownValue)
    {
        _output2Value = output2Value;
        _unknownValue = unknownValue;
    }

    public static Output1ParallelAiTasksApi Output2(Output2 value) => new(Optional<Output2>.Some(value), default);

    internal static Output1ParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetOutput2([NotNullWhen(true)] out Output2? value) => _output2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Output1ParallelAiTasksApi(Output2 value) => Output2(value);

    public TResult Match<TResult>(Func<Output2, TResult> onOutput2, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOutput2(out var output2Value) => onOutput2(output2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Output1ParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<Output2> onOutput2, Action<JsonElement> otherwise)
    {
        if (TryGetOutput2(out var output2Value)) onOutput2(output2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Output1ParallelAiTasksApi)} holds no value.");
    }
}

file sealed class Output1ParallelAiTasksApiConverter : JsonConverter<Output1ParallelAiTasksApi>
{
    public override Output1ParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Output2>(root, options, out var output2Value))
        {
            return Output1ParallelAiTasksApi.Output2(output2Value);
        }
        return Output1ParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Output1ParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetOutput2(out var output2Value))
        {
            JsonSerializer.Serialize(writer, output2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Output1ParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
