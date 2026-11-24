using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant identifiers, schedules, or execution state; tenant-scoped references are declared under <c>requirements</c> and appear inside node parameters as <c>$req:&lt;section&gt;/&lt;key&gt;</c> tokens (subflow references as <c>$bundle:flows/&lt;flowKey&gt;</c>).
/// </summary>
public record CloudflowFlowBundle
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "cloudflow.doit.com/FlowBundle";

    /// <summary>
    /// Bundle format version. The server exports the newest version and accepts every version it has ever shipped.
    /// </summary>
    [JsonPropertyName("schemaVersion")]
    public int SchemaVersion { get; } = 1;

    /// <summary>
    /// Informational export timestamp; ignored on import.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportedAt")]
    public DateTimeOffset? ExportedAt { get; init; }

    /// <summary>
    /// Key (into <c>flows</c>) of the flow that was exported; the rest are its subflows.
    /// </summary>
    [JsonPropertyName("rootFlow")]
    public required string RootFlow { get; init; }

    [JsonPropertyName("flows")]
    [MaxLength(20)]
    public required IReadOnlyList<CloudflowBundleFlow> Flows { get; init; }

    /// <summary>
    /// Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requirements")]
    public CloudflowBundleRequirements? Requirements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
