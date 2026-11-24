using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Metadata for the report.
/// </summary>
public record ResponseMetaData2
{
    /// <summary>
    /// Describes the schema restrictions actively enforced in creating this report. To learn more, see <see href="https://support.google.com/analytics/answer/10851388">Access and data-restriction management</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaRestrictionResponse")]
    public SchemaRestrictionResponse2? SchemaRestrictionResponse { get; init; }

    /// <summary>
    /// The currency code used in this report. Intended to be used in formatting currency metrics like <c>purchaseRevenue</c> for visualization. If currency_code was specified in the request, this response parameter will echo the request parameter; otherwise, this response parameter is the property's current currency_code. Currency codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// The property's current timezone. Intended to be used to interpret time-based dimensions like <c>hour</c> and <c>minute</c>. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeZone")]
    public string? TimeZone { get; init; }

    /// <summary>
    /// If empty reason is specified, the report is empty for this reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emptyReason")]
    public string? EmptyReason { get; init; }

    /// <summary>
    /// If this report results is <see href="https://support.google.com/analytics/answer/13331292">sampled</see>, this describes the percentage of events used in this report. One <c>samplingMetadatas</c> is populated for each date range. Each <c>samplingMetadatas</c> corresponds to a date range in order that date ranges were specified in the request. However if the results are not sampled, this field will not be defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingMetadatas")]
    public IReadOnlyList<SamplingMetadata>? SamplingMetadatas { get; init; }

    /// <summary>
    /// If <c>subjectToThresholding</c> is true, this report is subject to thresholding and only returns data that meets the minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data is absent from the report, and this happens when all data is above the thresholds. To learn more, see <see href="https://support.google.com/analytics/answer/9383630">Data thresholds</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subjectToThresholding")]
    public bool? SubjectToThresholding { get; init; }

    /// <summary>
    /// If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table used in the report. The parameter will be accurately populated regardless of the filters and limits in the report. For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource = google. This parameter will still be populated if data loss from other row was present in the input aggregate data used to generate this report. To learn more, see <see href="https://support.google.com/analytics/answer/13208658#reports">About the (other) row and data sampling</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataLossFromOtherRow")]
    public bool? DataLossFromOtherRow { get; init; }

    /// <summary>
    /// If set, indicate there is data truncation in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTruncationReasons")]
    public IReadOnlyList<DataTruncationReason>? DataTruncationReasons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
