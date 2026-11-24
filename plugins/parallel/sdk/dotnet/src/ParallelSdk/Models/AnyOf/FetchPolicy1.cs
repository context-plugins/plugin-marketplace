using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Fetch policy: determines when to return cached content from the index (faster) vs fetching live content (fresher). Default is to use a dynamic policy based on the search objective and url. Note: enabling live fetch significantly increases extract latency because it requires fetching content from source websites., Fetch policy: determines when to return cached content from the index (faster) vs fetching live content (fresher). Default is to disable live fetch and return cached content from the index. Note: enabling live fetch significantly increases search latency because it requires fetching content from source websites.
/// </summary>
[JsonConverter(typeof(FetchPolicy1Converter))]
public record FetchPolicy1
{
    private readonly Optional<FetchPolicy> _fetchPolicyValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FetchPolicy1(Optional<FetchPolicy> fetchPolicyValue, Optional<UnknownArm> unknownValue)
    {
        _fetchPolicyValue = fetchPolicyValue;
        _unknownValue = unknownValue;
    }

    public static FetchPolicy1 FetchPolicy(FetchPolicy value) => new(Optional<FetchPolicy>.Some(value), default);

    internal static FetchPolicy1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFetchPolicy([NotNullWhen(true)] out FetchPolicy? value) =>
        _fetchPolicyValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FetchPolicy1(FetchPolicy value) => FetchPolicy(value);

    public TResult Match<TResult>(Func<FetchPolicy, TResult> onFetchPolicy, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFetchPolicy(out var fetchPolicyValue) => onFetchPolicy(fetchPolicyValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FetchPolicy1)} holds no value.")
        };

    public void Match(Action<FetchPolicy> onFetchPolicy, Action<JsonElement> otherwise)
    {
        if (TryGetFetchPolicy(out var fetchPolicyValue)) onFetchPolicy(fetchPolicyValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FetchPolicy1)} holds no value.");
    }
}

file sealed class FetchPolicy1Converter : JsonConverter<FetchPolicy1>
{
    public override FetchPolicy1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FetchPolicy>(root, options, out var fetchPolicyValue))
        {
            return FetchPolicy1.FetchPolicy(fetchPolicyValue);
        }
        return FetchPolicy1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FetchPolicy1 value, JsonSerializerOptions options)
    {
        if (value.TryGetFetchPolicy(out var fetchPolicyValue))
        {
            JsonSerializer.Serialize(writer, fetchPolicyValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FetchPolicy1)} contains no valid value to serialize.");
        }
    }
}
