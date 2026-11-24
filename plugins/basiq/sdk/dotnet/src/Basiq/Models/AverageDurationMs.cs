using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// AverageDurationMs average connector duration in milliseconds per segments.
/// When durations are not known for institution this field will be <c>null</c>.
/// </summary>
public record AverageDurationMs
{
    /// <summary>
    /// Connector average duration in milliseconds of &lt;b&gt;fetch accounts&lt;/b&gt; step for institution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retrieveAccounts")]
    public long? RetrieveAccounts { get; init; }

    /// <summary>
    /// Connector average duration in milliseconds of &lt;b&gt;fetch metadata&lt;/b&gt; step for institution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retrieveMeta")]
    public long? RetrieveMeta { get; init; }

    /// <summary>
    /// Connector average duration in milliseconds of &lt;b&gt;fetch transactions&lt;/b&gt; step for institution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retrieveTransactions")]
    public long? RetrieveTransactions { get; init; }

    /// <summary>
    /// Total connector average duration in milliseconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public long? Total { get; init; }

    /// <summary>
    /// Connector average duration in milliseconds of &lt;b&gt;verifiy credentials&lt;/b&gt; step for institution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifyCredentials")]
    public long? VerifyCredentials { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
