using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pullrequest_Bitbucket Workspaces API.
/// </summary>
[JsonConverter(typeof(PullrequestBitbucketWorkspacesApiConverter))]
public record PullrequestBitbucketWorkspacesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required PullrequestBitbucketWorkspacesApiProperties PullrequestBitbucketWorkspacesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PullrequestBitbucketWorkspacesApiProperties pullrequestBitbucketWorkspacesApiProperties)
    {
        objectModel = ObjectModel;
        pullrequestBitbucketWorkspacesApiProperties = PullrequestBitbucketWorkspacesApiProperties;
    }

    public static implicit operator ObjectModel(PullrequestBitbucketWorkspacesApi value) => value.ObjectModel;

    public static implicit operator PullrequestBitbucketWorkspacesApiProperties(PullrequestBitbucketWorkspacesApi value) =>
        value.PullrequestBitbucketWorkspacesApiProperties;
}

file class PullrequestBitbucketWorkspacesApiConverter : JsonConverter<PullrequestBitbucketWorkspacesApi>
{
    public override PullrequestBitbucketWorkspacesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pullrequestBitbucketWorkspacesApiProperties = root.Deserialize<PullrequestBitbucketWorkspacesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize PullrequestBitbucketWorkspacesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pullrequestBitbucketWorkspacesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pullrequestBitbucketWorkspacesApiProperties.AdditionalProperties.Clear();
        return new PullrequestBitbucketWorkspacesApi
        {
            ObjectModel = objectModel,
            PullrequestBitbucketWorkspacesApiProperties = pullrequestBitbucketWorkspacesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        PullrequestBitbucketWorkspacesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PullrequestBitbucketWorkspacesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
