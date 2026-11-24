using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, report_Bitbucket Reports API.
/// </summary>
[JsonConverter(typeof(ReportBitbucketReportsApiConverter))]
public record ReportBitbucketReportsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required ReportBitbucketReportsApiProperties ReportBitbucketReportsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ReportBitbucketReportsApiProperties reportBitbucketReportsApiProperties)
    {
        objectModel = ObjectModel;
        reportBitbucketReportsApiProperties = ReportBitbucketReportsApiProperties;
    }

    public static implicit operator ObjectModel(ReportBitbucketReportsApi value) => value.ObjectModel;

    public static implicit operator ReportBitbucketReportsApiProperties(ReportBitbucketReportsApi value) =>
        value.ReportBitbucketReportsApiProperties;
}

file class ReportBitbucketReportsApiConverter : JsonConverter<ReportBitbucketReportsApi>
{
    public override ReportBitbucketReportsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var reportBitbucketReportsApiProperties = root.Deserialize<ReportBitbucketReportsApiProperties>(options) ??
            throw new JsonException("Failed to deserialize ReportBitbucketReportsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                reportBitbucketReportsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        reportBitbucketReportsApiProperties.AdditionalProperties.Clear();
        return new ReportBitbucketReportsApi
        {
            ObjectModel = objectModel,
            ReportBitbucketReportsApiProperties = reportBitbucketReportsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, ReportBitbucketReportsApi value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ReportBitbucketReportsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
