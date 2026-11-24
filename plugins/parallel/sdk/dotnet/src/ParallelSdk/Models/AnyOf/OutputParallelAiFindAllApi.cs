using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Results of the match condition evaluations for this candidate. This object contains the structured output that determines whether the candidate matches the overall FindAll objective.
/// </summary>
[JsonConverter(typeof(OutputParallelAiFindAllApiConverter))]
public record OutputParallelAiFindAllApi
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OutputParallelAiFindAllApi(Optional<object> anonymousObjectValue, Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static OutputParallelAiFindAllApi AnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    internal static OutputParallelAiFindAllApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OutputParallelAiFindAllApi)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OutputParallelAiFindAllApi)} holds no value.");
    }
}

file sealed class OutputParallelAiFindAllApiConverter : JsonConverter<OutputParallelAiFindAllApi>
{
    public override OutputParallelAiFindAllApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return OutputParallelAiFindAllApi.AnonymousObject(anonymousObjectValue);
        }
        return OutputParallelAiFindAllApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OutputParallelAiFindAllApi value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OutputParallelAiFindAllApi)} contains no valid value to serialize.");
        }
    }
}
