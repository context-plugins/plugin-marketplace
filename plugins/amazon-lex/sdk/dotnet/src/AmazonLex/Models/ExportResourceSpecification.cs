using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ExportResourceSpecification
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botExportSpecification")]
    public BotExportSpecification? BotExportSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleExportSpecification")]
    public BotLocaleExportSpecification? BotLocaleExportSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customVocabularyExportSpecification")]
    public CustomVocabularyExportSpecification? CustomVocabularyExportSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetExportSpecification")]
    public TestSetExportSpecification? TestSetExportSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
