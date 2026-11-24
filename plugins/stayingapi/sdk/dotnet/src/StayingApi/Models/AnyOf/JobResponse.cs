using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Extensions;
using StayingApi.Core.Models;

namespace StayingApi.Models.AnyOf;

[JsonConverter(typeof(JobResponseConverter))]
public record JobResponse
{
    private readonly Optional<JobInProgress> _jobInProgressValue;

    private readonly Optional<JobCompleted> _jobCompletedValue;

    private readonly Optional<JobFailed> _jobFailedValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private JobResponse(Optional<JobInProgress> jobInProgressValue,
        Optional<JobCompleted> jobCompletedValue,
        Optional<JobFailed> jobFailedValue,
        Optional<UnknownArm> unknownValue)
    {
        _jobInProgressValue = jobInProgressValue;
        _jobCompletedValue = jobCompletedValue;
        _jobFailedValue = jobFailedValue;
        _unknownValue = unknownValue;
    }

    public static JobResponse JobInProgress(JobInProgress value) =>
        new(Optional<JobInProgress>.Some(value), default, default, default);

    public static JobResponse JobCompleted(JobCompleted value) =>
        new(default, Optional<JobCompleted>.Some(value), default, default);

    public static JobResponse JobFailed(JobFailed value) =>
        new(default, default, Optional<JobFailed>.Some(value), default);

    internal static JobResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJobInProgress([NotNullWhen(true)] out JobInProgress? value) =>
        _jobInProgressValue.TryGetValue(out value);

    public bool TryGetJobCompleted([NotNullWhen(true)] out JobCompleted? value) =>
        _jobCompletedValue.TryGetValue(out value);

    public bool TryGetJobFailed([NotNullWhen(true)] out JobFailed? value) => _jobFailedValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator JobResponse(JobInProgress value) => JobInProgress(value);

    public static implicit operator JobResponse(JobCompleted value) => JobCompleted(value);

    public static implicit operator JobResponse(JobFailed value) => JobFailed(value);

    public TResult Match<TResult>(Func<JobInProgress, TResult> onJobInProgress,
        Func<JobCompleted, TResult> onJobCompleted,
        Func<JobFailed, TResult> onJobFailed,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobInProgress(out var jobInProgressValue) => onJobInProgress(jobInProgressValue),
            _ when TryGetJobCompleted(out var jobCompletedValue) => onJobCompleted(jobCompletedValue),
            _ when TryGetJobFailed(out var jobFailedValue) => onJobFailed(jobFailedValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(JobResponse)} holds no value.")
        };

    public void Match(Action<JobInProgress> onJobInProgress,
        Action<JobCompleted> onJobCompleted,
        Action<JobFailed> onJobFailed,
        Action<JsonElement> otherwise)
    {
        if (TryGetJobInProgress(out var jobInProgressValue)) onJobInProgress(jobInProgressValue);
        else if (TryGetJobCompleted(out var jobCompletedValue)) onJobCompleted(jobCompletedValue);
        else if (TryGetJobFailed(out var jobFailedValue)) onJobFailed(jobFailedValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(JobResponse)} holds no value.");
    }
}

file sealed class JobResponseConverter : JsonConverter<JobResponse>
{
    public override JobResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JobInProgress>(root, options, out var jobInProgressValue))
        {
            return JobResponse.JobInProgress(jobInProgressValue);
        }
        if (JsonSerializer.TryDeserialize<JobCompleted>(root, options, out var jobCompletedValue))
        {
            return JobResponse.JobCompleted(jobCompletedValue);
        }
        if (JsonSerializer.TryDeserialize<JobFailed>(root, options, out var jobFailedValue))
        {
            return JobResponse.JobFailed(jobFailedValue);
        }
        return JobResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, JobResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetJobInProgress(out var jobInProgressValue))
        {
            JsonSerializer.Serialize(writer, jobInProgressValue, options);
        }
        else if (value.TryGetJobCompleted(out var jobCompletedValue))
        {
            JsonSerializer.Serialize(writer, jobCompletedValue, options);
        }
        else if (value.TryGetJobFailed(out var jobFailedValue))
        {
            JsonSerializer.Serialize(writer, jobFailedValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(JobResponse)} contains no valid value to serialize.");
        }
    }
}
