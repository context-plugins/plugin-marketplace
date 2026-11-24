using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, report_annotation_Bitbucket Reports API.
/// </summary>
[JsonConverter(typeof(ReportAnnotationBitbucketReportsApiConverter))]
public record ReportAnnotationBitbucketReportsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required ReportAnnotationBitbucketReportsApiProperties ReportAnnotationBitbucketReportsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ReportAnnotationBitbucketReportsApiProperties reportAnnotationBitbucketReportsApiProperties)
    {
        objectModel = ObjectModel;
        reportAnnotationBitbucketReportsApiProperties = ReportAnnotationBitbucketReportsApiProperties;
    }

    public static implicit operator ObjectModel(ReportAnnotationBitbucketReportsApi value) => value.ObjectModel;

    public static implicit operator ReportAnnotationBitbucketReportsApiProperties(ReportAnnotationBitbucketReportsApi value) =>
        value.ReportAnnotationBitbucketReportsApiProperties;
}

file class ReportAnnotationBitbucketReportsApiConverter : JsonConverter<ReportAnnotationBitbucketReportsApi>
{
    public override ReportAnnotationBitbucketReportsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var reportAnnotationBitbucketReportsApiProperties = root.Deserialize<ReportAnnotationBitbucketReportsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize ReportAnnotationBitbucketReportsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                reportAnnotationBitbucketReportsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        reportAnnotationBitbucketReportsApiProperties.AdditionalProperties.Clear();
        return new ReportAnnotationBitbucketReportsApi
        {
            ObjectModel = objectModel,
            ReportAnnotationBitbucketReportsApiProperties = reportAnnotationBitbucketReportsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        ReportAnnotationBitbucketReportsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ReportAnnotationBitbucketReportsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
