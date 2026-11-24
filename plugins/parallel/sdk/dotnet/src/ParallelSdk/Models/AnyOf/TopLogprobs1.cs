using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(TopLogprobs1Converter))]
public record TopLogprobs1
{
    private readonly Optional<IReadOnlyList<LogprobTopLogprob1>> _listOfLogprobTopLogprob1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private TopLogprobs1(Optional<IReadOnlyList<LogprobTopLogprob1>> listOfLogprobTopLogprob1Value,
        Optional<UnknownArm> unknownValue)
    {
        _listOfLogprobTopLogprob1Value = listOfLogprobTopLogprob1Value;
        _unknownValue = unknownValue;
    }

    public static TopLogprobs1 ListOfLogprobTopLogprob1(IReadOnlyList<LogprobTopLogprob1> value) =>
        new(Optional<IReadOnlyList<LogprobTopLogprob1>>.Some(value), default);

    internal static TopLogprobs1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfLogprobTopLogprob1([NotNullWhen(true)] out IReadOnlyList<LogprobTopLogprob1>? value) =>
        _listOfLogprobTopLogprob1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<LogprobTopLogprob1>, TResult> onListOfLogprobTopLogprob1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfLogprobTopLogprob1(out var listOfLogprobTopLogprob1Value) => onListOfLogprobTopLogprob1(
                listOfLogprobTopLogprob1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TopLogprobs1)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<LogprobTopLogprob1>> onListOfLogprobTopLogprob1,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfLogprobTopLogprob1(out var listOfLogprobTopLogprob1Value)) onListOfLogprobTopLogprob1(
            listOfLogprobTopLogprob1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TopLogprobs1)} holds no value.");
    }
}

file sealed class TopLogprobs1Converter : JsonConverter<TopLogprobs1>
{
    public override TopLogprobs1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<LogprobTopLogprob1>>(
            root,
            options,
            out var listOfLogprobTopLogprob1Value))
        {
            return TopLogprobs1.ListOfLogprobTopLogprob1(listOfLogprobTopLogprob1Value);
        }
        return TopLogprobs1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TopLogprobs1 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfLogprobTopLogprob1(out var listOfLogprobTopLogprob1Value))
        {
            JsonSerializer.Serialize(writer, listOfLogprobTopLogprob1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TopLogprobs1)} contains no valid value to serialize.");
        }
    }
}
