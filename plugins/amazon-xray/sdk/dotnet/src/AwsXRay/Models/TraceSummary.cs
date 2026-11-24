using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TraceSummary
{
    /// <summary>
    /// The unique identifier for the request that generated the trace's segments and subsegments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The start time of a trace, based on the earliest trace segment start time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Duration")]
    public double? Duration { get; init; }

    /// <summary>
    /// The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResponseTime")]
    public double? ResponseTime { get; init; }

    /// <summary>
    /// The root segment document has a 500 series error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HasFault")]
    public bool? HasFault { get; init; }

    /// <summary>
    /// The root segment document has a 400 series error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HasError")]
    public bool? HasError { get; init; }

    /// <summary>
    /// One or more of the segment documents has a 429 throttling error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HasThrottle")]
    public bool? HasThrottle { get; init; }

    /// <summary>
    /// One or more of the segment documents is in progress.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsPartial")]
    public bool? IsPartial { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Http")]
    public Http? Http { get; init; }

    /// <summary>
    /// Annotations from the trace's segment documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Annotations")]
    public IReadOnlyDictionary<string, object>? Annotations { get; init; }

    /// <summary>
    /// Users from the trace's segment documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Users")]
    public IReadOnlyList<TraceUser>? Users { get; init; }

    /// <summary>
    /// Service IDs from the trace's segment documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceIds")]
    public IReadOnlyList<ServiceId>? ServiceIds { get; init; }

    /// <summary>
    /// A list of resource ARNs for any resource corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceARNs")]
    public IReadOnlyList<ResourceArnDetail>? ResourceArNs { get; init; }

    /// <summary>
    /// A list of EC2 instance IDs for any instance corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InstanceIds")]
    public IReadOnlyList<InstanceIdDetail>? InstanceIds { get; init; }

    /// <summary>
    /// A list of Availability Zones for any zone corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AvailabilityZones")]
    public IReadOnlyList<AvailabilityZoneDetail>? AvailabilityZones { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntryPoint")]
    public ServiceId? EntryPoint { get; init; }

    /// <summary>
    /// A collection of FaultRootCause structures corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaultRootCauses")]
    public IReadOnlyList<FaultRootCause>? FaultRootCauses { get; init; }

    /// <summary>
    /// A collection of ErrorRootCause structures corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ErrorRootCauses")]
    public IReadOnlyList<ErrorRootCause>? ErrorRootCauses { get; init; }

    /// <summary>
    /// A collection of ResponseTimeRootCause structures corresponding to the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResponseTimeRootCauses")]
    public IReadOnlyList<ResponseTimeRootCause>? ResponseTimeRootCauses { get; init; }

    /// <summary>
    /// The revision number of a trace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Revision")]
    public int? Revision { get; init; }

    /// <summary>
    /// The matched time stamp of a defined event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MatchedEventTime")]
    public DateTimeOffset? MatchedEventTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
