using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, report_annotation.
/// </summary>
[JsonConverter(typeof(ReportAnnotationConverter))]
public record ReportAnnotation
{
    public required ObjectModel ObjectModel { get; init; }

    public required ReportAnnotationProperties ReportAnnotationProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ReportAnnotationProperties reportAnnotationProperties)
    {
        objectModel = ObjectModel;
        reportAnnotationProperties = ReportAnnotationProperties;
    }

    public static implicit operator ObjectModel(ReportAnnotation value) => value.ObjectModel;

    public static implicit operator ReportAnnotationProperties(ReportAnnotation value) =>
        value.ReportAnnotationProperties;
}

file class ReportAnnotationConverter : JsonConverter<ReportAnnotation>
{
    public override ReportAnnotation Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var reportAnnotationProperties = root.Deserialize<ReportAnnotationProperties>(options) ??
            throw new JsonException("Failed to deserialize ReportAnnotationProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                reportAnnotationProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        reportAnnotationProperties.AdditionalProperties.Clear();
        return new ReportAnnotation
        {
            ObjectModel = objectModel,
            ReportAnnotationProperties = reportAnnotationProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, ReportAnnotation value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ReportAnnotationProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
