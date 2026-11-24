using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// DDL configuration for change tables.
/// </summary>
public record SqlServerDdlConfig
{
    /// <summary>
    /// Optional. If set to true, Datastream will automatically delete the old capture instance after creating a new one to support a DDL change. The default is false and means that the customer has to delete the old capture instance manually.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoDeleteOldCaptureInstance")]
    public bool? AutoDeleteOldCaptureInstance { get; init; }

    /// <summary>
    /// Optional. If set to true, Datastream will automatically create a new capture instance when DDL is detected on a table.The customer will be responsible for deleting it so that the next set of DDLs can be handled. The default is false and it means that DDL's will not be handled .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoCreateNewCaptureInstanceOnDdl")]
    public bool? AutoCreateNewCaptureInstanceOnDdl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
