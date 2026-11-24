using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(UsageParallelAiResponsesApiConverter))]
public record UsageParallelAiResponsesApi
{
    private readonly Optional<ResponseUsage> _responseUsageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private UsageParallelAiResponsesApi(Optional<ResponseUsage> responseUsageValue, Optional<UnknownArm> unknownValue)
    {
        _responseUsageValue = responseUsageValue;
        _unknownValue = unknownValue;
    }

    public static UsageParallelAiResponsesApi ResponseUsage(ResponseUsage value) =>
        new(Optional<ResponseUsage>.Some(value), default);

    internal static UsageParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseUsage([NotNullWhen(true)] out ResponseUsage? value) =>
        _responseUsageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator UsageParallelAiResponsesApi(ResponseUsage value) => ResponseUsage(value);

    public TResult Match<TResult>(Func<ResponseUsage, TResult> onResponseUsage, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseUsage(out var responseUsageValue) => onResponseUsage(responseUsageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UsageParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<ResponseUsage> onResponseUsage, Action<JsonElement> otherwise)
    {
        if (TryGetResponseUsage(out var responseUsageValue)) onResponseUsage(responseUsageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UsageParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class UsageParallelAiResponsesApiConverter : JsonConverter<UsageParallelAiResponsesApi>
{
    public override UsageParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseUsage>(root, options, out var responseUsageValue))
        {
            return UsageParallelAiResponsesApi.ResponseUsage(responseUsageValue);
        }
        return UsageParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, UsageParallelAiResponsesApi value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseUsage(out var responseUsageValue))
        {
            JsonSerializer.Serialize(writer, responseUsageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(UsageParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
