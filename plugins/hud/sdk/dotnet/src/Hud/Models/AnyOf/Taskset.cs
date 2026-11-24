using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(TasksetConverter))]
public record Taskset
{
    private readonly Optional<JobEnrichmentTaskset> _jobEnrichmentTasksetValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Taskset(Optional<JobEnrichmentTaskset> jobEnrichmentTasksetValue, Optional<UnknownArm> unknownValue)
    {
        _jobEnrichmentTasksetValue = jobEnrichmentTasksetValue;
        _unknownValue = unknownValue;
    }

    public static Taskset JobEnrichmentTaskset(JobEnrichmentTaskset value) =>
        new(Optional<JobEnrichmentTaskset>.Some(value), default);

    internal static Taskset Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJobEnrichmentTaskset([NotNullWhen(true)] out JobEnrichmentTaskset? value) =>
        _jobEnrichmentTasksetValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Taskset(JobEnrichmentTaskset value) => JobEnrichmentTaskset(value);

    public TResult Match<TResult>(Func<JobEnrichmentTaskset, TResult> onJobEnrichmentTaskset,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobEnrichmentTaskset(out var jobEnrichmentTasksetValue) => onJobEnrichmentTaskset(
                jobEnrichmentTasksetValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Taskset)} holds no value.")
        };

    public void Match(Action<JobEnrichmentTaskset> onJobEnrichmentTaskset, Action<JsonElement> otherwise)
    {
        if (TryGetJobEnrichmentTaskset(out var jobEnrichmentTasksetValue)) onJobEnrichmentTaskset(
            jobEnrichmentTasksetValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Taskset)} holds no value.");
    }
}

file sealed class TasksetConverter : JsonConverter<Taskset>
{
    public override Taskset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JobEnrichmentTaskset>(root, options, out var jobEnrichmentTasksetValue))
        {
            return Taskset.JobEnrichmentTaskset(jobEnrichmentTasksetValue);
        }
        return Taskset.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Taskset value, JsonSerializerOptions options)
    {
        if (value.TryGetJobEnrichmentTaskset(out var jobEnrichmentTasksetValue))
        {
            JsonSerializer.Serialize(writer, jobEnrichmentTasksetValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Taskset)} contains no valid value to serialize.");
        }
    }
}
