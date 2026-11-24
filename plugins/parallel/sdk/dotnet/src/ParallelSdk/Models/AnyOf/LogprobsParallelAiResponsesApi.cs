using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(LogprobsParallelAiResponsesApiConverter))]
public record LogprobsParallelAiResponsesApi
{
    private readonly Optional<IReadOnlyList<Logprob>> _listOfLogprobValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LogprobsParallelAiResponsesApi(Optional<IReadOnlyList<Logprob>> listOfLogprobValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfLogprobValue = listOfLogprobValue;
        _unknownValue = unknownValue;
    }

    public static LogprobsParallelAiResponsesApi ListOfLogprob(IReadOnlyList<Logprob> value) =>
        new(Optional<IReadOnlyList<Logprob>>.Some(value), default);

    internal static LogprobsParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfLogprob([NotNullWhen(true)] out IReadOnlyList<Logprob>? value) =>
        _listOfLogprobValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Logprob>, TResult> onListOfLogprob,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfLogprob(out var listOfLogprobValue) => onListOfLogprob(listOfLogprobValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LogprobsParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Logprob>> onListOfLogprob, Action<JsonElement> otherwise)
    {
        if (TryGetListOfLogprob(out var listOfLogprobValue)) onListOfLogprob(listOfLogprobValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LogprobsParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class LogprobsParallelAiResponsesApiConverter : JsonConverter<LogprobsParallelAiResponsesApi>
{
    public override LogprobsParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Logprob>>(root, options, out var listOfLogprobValue))
        {
            return LogprobsParallelAiResponsesApi.ListOfLogprob(listOfLogprobValue);
        }
        return LogprobsParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        LogprobsParallelAiResponsesApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetListOfLogprob(out var listOfLogprobValue))
        {
            JsonSerializer.Serialize(writer, listOfLogprobValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LogprobsParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
