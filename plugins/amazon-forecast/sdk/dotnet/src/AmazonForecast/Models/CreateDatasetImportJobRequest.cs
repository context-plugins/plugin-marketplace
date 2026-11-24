using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record CreateDatasetImportJobRequest
{
    /// <summary>
    /// The name for the dataset import job. We recommend including the current timestamp in the name, for example, 20190721DatasetImport. This can help you avoid getting a ResourceAlreadyExistsException exception.
    /// </summary>
    [JsonPropertyName("DatasetImportJobName")]
    public required string DatasetImportJobName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    [JsonPropertyName("DataSource")]
    public required DataSource DataSource { get; init; }

    /// <summary>
    /// The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D If the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimestampFormat")]
    public string? TimestampFormat { get; init; }

    /// <summary>
    /// A single time zone for every item in your dataset. This option is ideal for datasets with all timestamps within a single time zone, or if all timestamps are normalized to a single time zone. Refer to the Joda-Time API for a complete list of valid time zone names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeZone")]
    public string? TimeZone { get; init; }

    /// <summary>
    /// Automatically derive time zone information from the geolocation attribute. This option is ideal for datasets that contain timestamps in multiple time zones and those timestamps are expressed in local time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UseGeolocationForTimeZone")]
    public bool? UseGeolocationForTimeZone { get; init; }

    /// <summary>
    /// The format of the geolocation attribute. The geolocation attribute can be formatted in one of two ways: LAT_LONG - the latitude and longitude in decimal format (Example: 47.61_-122.33). CC_POSTALCODE (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GeolocationFormat")]
    public string? GeolocationFormat { get; init; }

    /// <summary>
    /// The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allo
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The format of the imported data, CSV or PARQUET. The default value is CSV.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    /// <summary>
    /// Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import replaces all of the existing data with the newly imported data. An INCREMENTAL import appends the imported data to the existing data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImportMode")]
    public ImportMode? ImportMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
