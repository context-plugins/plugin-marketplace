using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(AgentConverter))]
public record Agent
{
    private readonly Optional<JobImportAgent> _jobImportAgentValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Agent(Optional<JobImportAgent> jobImportAgentValue, Optional<UnknownArm> unknownValue)
    {
        _jobImportAgentValue = jobImportAgentValue;
        _unknownValue = unknownValue;
    }

    public static Agent JobImportAgent(JobImportAgent value) => new(Optional<JobImportAgent>.Some(value), default);

    internal static Agent Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJobImportAgent([NotNullWhen(true)] out JobImportAgent? value) =>
        _jobImportAgentValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Agent(JobImportAgent value) => JobImportAgent(value);

    public TResult Match<TResult>(Func<JobImportAgent, TResult> onJobImportAgent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJobImportAgent(out var jobImportAgentValue) => onJobImportAgent(jobImportAgentValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Agent)} holds no value.")
        };

    public void Match(Action<JobImportAgent> onJobImportAgent, Action<JsonElement> otherwise)
    {
        if (TryGetJobImportAgent(out var jobImportAgentValue)) onJobImportAgent(jobImportAgentValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Agent)} holds no value.");
    }
}

file sealed class AgentConverter : JsonConverter<Agent>
{
    public override Agent Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JobImportAgent>(root, options, out var jobImportAgentValue))
        {
            return Agent.JobImportAgent(jobImportAgentValue);
        }
        return Agent.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Agent value, JsonSerializerOptions options)
    {
        if (value.TryGetJobImportAgent(out var jobImportAgentValue))
        {
            JsonSerializer.Serialize(writer, jobImportAgentValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Agent)} contains no valid value to serialize.");
        }
    }
}
