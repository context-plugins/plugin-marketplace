using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowImportFlowsRequest
{
    /// <summary>
    /// Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant identifiers, schedules, or execution state; tenant-scoped references are declared under <c>requirements</c> and appear inside node parameters as <c>$req:&lt;section&gt;/&lt;key&gt;</c> tokens (subflow references as <c>$bundle:flows/&lt;flowKey&gt;</c>).
    /// </summary>
    [JsonPropertyName("bundle")]
    public required CloudflowFlowBundle Bundle { get; init; }

    /// <summary>
    /// Requirement key → target-tenant resource ID. Keys must be declared in the bundle's requirements. Run with <c>?dryRun=true</c> first to list required keys and candidate IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bindings")]
    public Bindings? Bindings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public Options? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
