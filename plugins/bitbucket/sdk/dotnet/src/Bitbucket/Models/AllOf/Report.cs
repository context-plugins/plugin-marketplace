using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, report.
/// </summary>
[JsonConverter(typeof(ReportConverter))]
public record Report
{
    public required ObjectModel ObjectModel { get; init; }

    public required ReportProperties ReportProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ReportProperties reportProperties)
    {
        objectModel = ObjectModel;
        reportProperties = ReportProperties;
    }

    public static implicit operator ObjectModel(Report value) => value.ObjectModel;

    public static implicit operator ReportProperties(Report value) => value.ReportProperties;
}

file class ReportConverter : JsonConverter<Report>
{
    public override Report Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var reportProperties = root.Deserialize<ReportProperties>(options) ??
            throw new JsonException("Failed to deserialize ReportProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, reportProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        reportProperties.AdditionalProperties.Clear();
        return new Report
        {
            ObjectModel = objectModel,
            ReportProperties = reportProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Report value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ReportProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
