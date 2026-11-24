using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record UpdateCallAnalyticsCategoryRequest
{
    /// <summary>
    /// The name of the Call Analytics category you want to update. Category names are case sensitive.
    /// </summary>
    [JsonPropertyName("CategoryName")]
    public required string CategoryName { get; init; }

    /// <summary>
    /// The rules used for the updated Call Analytics category. The rules you provide in this field replace the ones that are currently being used in the specified category.
    /// </summary>
    [JsonPropertyName("Rules")]
    public required IReadOnlyList<Rule> Rules { get; init; }

    /// <summary>
    /// Choose whether you want to update a real-time or a post-call category. The input type you specify must match the input type specified when the category was created. For example, if you created a category with the POST_CALL input type, you must use POST_CALL as the input type when updating this category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputType")]
    public InputType2? InputType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
