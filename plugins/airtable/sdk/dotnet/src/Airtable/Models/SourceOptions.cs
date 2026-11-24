using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record SourceOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formSubmission")]
    public FormSubmission? FormSubmission { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formPageSubmission")]
    public FormPageSubmission? FormPageSubmission { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
