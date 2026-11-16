using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record DisputeEvidence
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// The ID of the <c>Dispute</c> associated with the evidence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispute")]
    public string? Dispute { get; init; }

    /// <summary>
    /// The result after uploading evidence.
    /// - <c>PENDING</c>: The evidence file has not yet been validated. No user action is required.
    /// - <c>SUCCEEDED</c>: The evidence file has passed validation and can be submitted to the card networks.
    /// - <c>CANCELED</c>: The evidence file upload was not completed due to user action.
    /// - <c>FAILED</c>: The evidence file could not be processed. Check <c>failure_code</c> for the specific reason and <c>failure_message</c> for a user-safe description of the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State5? State { get; init; }

    /// <summary>
    /// The reason the evidence file failed processing. Populated when <c>state</c> is <c>FAILED</c>; <c>null</c> otherwise.
    /// - <c>MALWARE_DETECTED</c>: The file was flagged for suspicious content and cannot be accepted.
    /// - <c>GENERIC_FAILURE</c>: An unexpected error occurred. Contact support for details.
    /// - <c>FILE_SIZE_LIMIT_EXCEEDED</c>: The file exceeds the maximum allowed file size.
    /// - <c>TOTAL_COMBINED_FILE_SIZE_LIMIT_EXCEEDED</c>: The total size of all uploaded evidence exceeds the maximum combined file size limit.
    /// - <c>TOTAL_PAGE_COUNT_LIMIT_EXCEEDED</c>: The total number of pages across all uploaded evidence exceeds the maximum allowed page count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public FailureCode1? FailureCode { get; init; }

    /// <summary>
    /// A human-readable message explaining why the evidence file failed processing. Populated when <c>state</c> is <c>FAILED</c>; <c>null</c> otherwise. Safe to surface directly in a UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// The ID of the seller's <c>Identity</c> resource. This is the <c>Identity</c> resource that was used to create the seller's <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// The ID of the seller's <c>Merchant</c> resource. This is the <c>Merchant</c> account the <c>Dispute</c> was filed against.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// The MIME type of the uploaded evidence file (e.g. <c>application/pdf</c>, <c>image/jpeg</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    /// <summary>
    /// The file extension, a suffix at the end of a <c>file_name</c> (letters following last period).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extension")]
    public string? Extension { get; init; }

    /// <summary>
    /// The name of the uploaded evidence file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_name")]
    public string? FileName { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links9? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
