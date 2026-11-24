using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

[JsonConverter(typeof(JobsResponse3Converter))]
public record JobsResponse3
{
    private readonly Optional<JobsResponse> _jobsResponseValue;

    private readonly Optional<JobsResponse1> _jobsResponse1Value;

    private readonly Optional<JobsResponse2> _jobsResponse2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private JobsResponse3(Optional<JobsResponse> jobsResponseValue,
        Optional<JobsResponse1> jobsResponse1Value,
        Optional<JobsResponse2> jobsResponse2Value,
        Optional<UnknownArm> unknownValue)
    {
        _jobsResponseValue = jobsResponseValue;
        _jobsResponse1Value = jobsResponse1Value;
        _jobsResponse2Value = jobsResponse2Value;
        _unknownValue = unknownValue;
    }

    public static JobsResponse3 JobsResponse(JobsResponse value) =>
        new(Optional<JobsResponse>.Some(value), default, default, default);

    public static JobsResponse3 JobsResponse1(JobsResponse1 value) =>
        new(default, Optional<JobsResponse1>.Some(value), default, default);

    public static JobsResponse3 JobsResponse2(JobsResponse2 value) =>
        new(default, default, Optional<JobsResponse2>.Some(value), default);

    internal static JobsResponse3 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJobsResponse([NotNullWhen(true)] out JobsResponse? value) =>
        _jobsResponseValue.TryGetValue(out value);

    public bool TryGetJobsResponse1([NotNullWhen(true)] out JobsResponse1? value) =>
        _jobsResponse1Value.TryGetValue(out value);

    public bool TryGetJobsResponse2([NotNullWhen(true)] out JobsResponse2? value) =>
        _jobsResponse2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator JobsResponse3(JobsResponse value) => JobsResponse(value);

    public static implicit operator JobsResponse3(JobsResponse1 value) => JobsResponse1(value);

    public static implicit operator JobsResponse3(JobsResponse2 value) => JobsResponse2(value);

    public TResult Match<TResult>(Func<JobsResponse, TResult> onJobsResponse,
        Func<JobsResponse1, TResult> onJobsResponse1,
        Func<JobsResponse2, TResult> onJobsResponse2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobsResponse(out var jobsResponseValue) => onJobsResponse(jobsResponseValue),
            _ when TryGetJobsResponse1(out var jobsResponse1Value) => onJobsResponse1(jobsResponse1Value),
            _ when TryGetJobsResponse2(out var jobsResponse2Value) => onJobsResponse2(jobsResponse2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(JobsResponse3)} holds no value.")
        };

    public void Match(Action<JobsResponse> onJobsResponse,
        Action<JobsResponse1> onJobsResponse1,
        Action<JobsResponse2> onJobsResponse2,
        Action<JsonElement> otherwise)
    {
        if (TryGetJobsResponse(out var jobsResponseValue)) onJobsResponse(jobsResponseValue);
        else if (TryGetJobsResponse1(out var jobsResponse1Value)) onJobsResponse1(jobsResponse1Value);
        else if (TryGetJobsResponse2(out var jobsResponse2Value)) onJobsResponse2(jobsResponse2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(JobsResponse3)} holds no value.");
    }
}

file sealed class JobsResponse3Converter : JsonConverter<JobsResponse3>
{
    public override JobsResponse3 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JobsResponse>(root, options, out var jobsResponseValue))
        {
            return JobsResponse3.JobsResponse(jobsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JobsResponse1>(root, options, out var jobsResponse1Value))
        {
            return JobsResponse3.JobsResponse1(jobsResponse1Value);
        }
        if (JsonSerializer.TryDeserialize<JobsResponse2>(root, options, out var jobsResponse2Value))
        {
            return JobsResponse3.JobsResponse2(jobsResponse2Value);
        }
        return JobsResponse3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, JobsResponse3 value, JsonSerializerOptions options)
    {
        if (value.TryGetJobsResponse(out var jobsResponseValue))
        {
            JsonSerializer.Serialize(writer, jobsResponseValue, options);
        }
        else if (value.TryGetJobsResponse1(out var jobsResponse1Value))
        {
            JsonSerializer.Serialize(writer, jobsResponse1Value, options);
        }
        else if (value.TryGetJobsResponse2(out var jobsResponse2Value))
        {
            JsonSerializer.Serialize(writer, jobsResponse2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(JobsResponse3)} contains no valid value to serialize.");
        }
    }
}
