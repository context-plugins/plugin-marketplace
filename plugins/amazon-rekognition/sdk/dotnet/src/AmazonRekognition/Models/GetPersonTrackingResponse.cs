using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetPersonTrackingResponse
{
    /// <summary>
    /// The current status of the person tracking job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus1? JobStatus { get; init; }

    /// <summary>
    /// If the job fails, StatusMessage provides a descriptive error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessage")]
    public string? StatusMessage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VideoMetadata")]
    public VideoMetadata? VideoMetadata { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// An array of the persons detected in the video and the time(s) their path was tracked throughout the video. An array element will exist for each time a person's path is tracked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Persons")]
    public IReadOnlyList<PersonDetection>? Persons { get; init; }

    /// <summary>
    /// Job identifier for the person tracking operation for which you want to obtain results. The job identifer is returned by an initial call to StartPersonTracking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Video")]
    public Video? Video { get; init; }

    /// <summary>
    /// A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
