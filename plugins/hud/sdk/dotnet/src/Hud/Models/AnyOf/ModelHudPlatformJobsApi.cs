using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ModelHudPlatformJobsApiConverter))]
public record ModelHudPlatformJobsApi
{
    private readonly Optional<JobEntityRef> _jobEntityRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ModelHudPlatformJobsApi(Optional<JobEntityRef> jobEntityRefValue, Optional<UnknownArm> unknownValue)
    {
        _jobEntityRefValue = jobEntityRefValue;
        _unknownValue = unknownValue;
    }

    public static ModelHudPlatformJobsApi JobEntityRef(JobEntityRef value) =>
        new(Optional<JobEntityRef>.Some(value), default);

    internal static ModelHudPlatformJobsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJobEntityRef([NotNullWhen(true)] out JobEntityRef? value) =>
        _jobEntityRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ModelHudPlatformJobsApi(JobEntityRef value) => JobEntityRef(value);

    public TResult Match<TResult>(Func<JobEntityRef, TResult> onJobEntityRef, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobEntityRef(out var jobEntityRefValue) => onJobEntityRef(jobEntityRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ModelHudPlatformJobsApi)} holds no value.")
        };

    public void Match(Action<JobEntityRef> onJobEntityRef, Action<JsonElement> otherwise)
    {
        if (TryGetJobEntityRef(out var jobEntityRefValue)) onJobEntityRef(jobEntityRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ModelHudPlatformJobsApi)} holds no value.");
    }
}

file sealed class ModelHudPlatformJobsApiConverter : JsonConverter<ModelHudPlatformJobsApi>
{
    public override ModelHudPlatformJobsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JobEntityRef>(root, options, out var jobEntityRefValue))
        {
            return ModelHudPlatformJobsApi.JobEntityRef(jobEntityRefValue);
        }
        return ModelHudPlatformJobsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ModelHudPlatformJobsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetJobEntityRef(out var jobEntityRefValue))
        {
            JsonSerializer.Serialize(writer, jobEntityRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ModelHudPlatformJobsApi)} contains no valid value to serialize.");
        }
    }
}
