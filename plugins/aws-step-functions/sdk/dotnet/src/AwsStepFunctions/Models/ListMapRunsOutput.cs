using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record ListMapRunsOutput
{
    /// <summary>
    /// An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of the Map Run and the ARN of the state machine that started the Map Run.
    /// </summary>
    [JsonPropertyName("mapRuns")]
    public required IReadOnlyList<MapRunListItem> MapRuns { get; init; }

    /// <summary>
    /// If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
