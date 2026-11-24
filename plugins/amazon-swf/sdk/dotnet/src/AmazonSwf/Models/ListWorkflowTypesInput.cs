using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record ListWorkflowTypesInput
{
    /// <summary>
    /// The name of the domain in which the workflow types have been registered.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// If specified, lists the workflow type with this name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Specifies the registration status of the workflow types to list.
    /// </summary>
    [JsonPropertyName("registrationStatus")]
    public required RegistrationStatus2 RegistrationStatus { get; init; }

    /// <summary>
    /// If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many results can be returned in a single call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumPageSize")]
    public int? MaximumPageSize { get; init; }

    /// <summary>
    /// When set to true, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the name of the workflow types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reverseOrder")]
    public bool? ReverseOrder { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
