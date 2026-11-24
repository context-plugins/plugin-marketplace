using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(UsageConverter))]
public record Usage
{
    private readonly Optional<CompletionUsage> _completionUsageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Usage(Optional<CompletionUsage> completionUsageValue, Optional<UnknownArm> unknownValue)
    {
        _completionUsageValue = completionUsageValue;
        _unknownValue = unknownValue;
    }

    public static Usage CompletionUsage(CompletionUsage value) => new(Optional<CompletionUsage>.Some(value), default);

    internal static Usage Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCompletionUsage([NotNullWhen(true)] out CompletionUsage? value) =>
        _completionUsageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Usage(CompletionUsage value) => CompletionUsage(value);

    public TResult Match<TResult>(Func<CompletionUsage, TResult> onCompletionUsage,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCompletionUsage(out var completionUsageValue) => onCompletionUsage(completionUsageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Usage)} holds no value.")
        };

    public void Match(Action<CompletionUsage> onCompletionUsage, Action<JsonElement> otherwise)
    {
        if (TryGetCompletionUsage(out var completionUsageValue)) onCompletionUsage(completionUsageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Usage)} holds no value.");
    }
}

file sealed class UsageConverter : JsonConverter<Usage>
{
    public override Usage Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CompletionUsage>(root, options, out var completionUsageValue))
        {
            return Usage.CompletionUsage(completionUsageValue);
        }
        return Usage.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Usage value, JsonSerializerOptions options)
    {
        if (value.TryGetCompletionUsage(out var completionUsageValue))
        {
            JsonSerializer.Serialize(writer, completionUsageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Usage)} contains no valid value to serialize.");
        }
    }
}
