using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, participant.
/// </summary>
[JsonConverter(typeof(ParticipantConverter))]
public record Participant
{
    public required ObjectModel ObjectModel { get; init; }

    public required ParticipantProperties ParticipantProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ParticipantProperties participantProperties)
    {
        objectModel = ObjectModel;
        participantProperties = ParticipantProperties;
    }

    public static implicit operator ObjectModel(Participant value) => value.ObjectModel;

    public static implicit operator ParticipantProperties(Participant value) => value.ParticipantProperties;
}

file class ParticipantConverter : JsonConverter<Participant>
{
    public override Participant Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var participantProperties = root.Deserialize<ParticipantProperties>(options) ??
            throw new JsonException("Failed to deserialize ParticipantProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, participantProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        participantProperties.AdditionalProperties.Clear();
        return new Participant
        {
            ObjectModel = objectModel,
            ParticipantProperties = participantProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Participant value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ParticipantProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
