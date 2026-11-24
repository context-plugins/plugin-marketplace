using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Models.AnyOf;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

public record RunCreateRequest
{
    [JsonPropertyName("task")]
    [MinLength(1)]
    public required string Task { get; init; }

    /// <summary>
    /// Optional JSON Schema for the final output (API runs only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputSchema")]
    public Outputschema1? OutputSchema { get; init; }

    /// <summary>
    /// bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are rejected for projects without access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model? Model { get; init; } = Model.Gpt6Luna;

    /// <summary>
    /// Optional provider-native request parameters for the selected model, written with the provider's own field names and values and forwarded unchanged (e.g. {"reasoning": {"effort": "high"}} for OpenAI, {"thinking": {"type": "adaptive"}} for Anthropic, {"thinkingConfig": {"thinkingLevel": "high"}} for Google). Supported paths and values are per-model; an unsupported path, value, or a model that accepts no parameters at all is rejected with 422. Omitting this field applies the model's default parameters (gpt-6-luna defaults to {"reasoning": {"effort": "high"}}); passing {} opts out of that default and leaves the provider's own defaults in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelParams")]
    public Modelparams1? ModelParams { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public Sessionid? SessionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceId")]
    public Workspaceid? WorkspaceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browserSettings")]
    public BrowserSettings? BrowserSettings { get; init; }

    /// <summary>
    /// Seconds the session's browser stays open after its last run, so a follow-up run reuses the same page, never past the browser's 4 h lifetime. Default 120. Follow-up runs inherit the session's value; send a new value to change it or null to restore the default. Kept time is billed as browser time. Ignored (always 120) for free-tier and Zero Data Retention projects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keepAlive")]
    public Keepalive? KeepAlive { get; init; }

    /// <summary>
    /// If true, provisions a persistent temporary email inbox (via AgentMail) for the run workspace. The agent receives the email address in its context and can send, receive, read, and reply to email. Set false to disable AgentMail for this run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentmail")]
    public bool? Agentmail { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentcardWalletId")]
    public Agentcardwalletid? AgentcardWalletId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stripeLinkConnectionId")]
    public Stripelinkconnectionid? StripeLinkConnectionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agenticAutofillGrantId")]
    public Agenticautofillgrantid? AgenticAutofillGrantId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachedFileIds")]
    public Attachedfileids? AttachedFileIds { get; init; }

    /// <summary>
    /// Credentials this run may use without ever seeing them. The agent can ask the server to type a binding by alias on one of its allowed domains; it cannot read the value. Bindings are not persisted past the run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretBindings")]
    public Secretbindings? SecretBindings { get; init; }

    /// <summary>
    /// A 1Password vault id whose items become typed secrets for this run. The project's connected 1Password integration is resolved server-side; no per-item ids are needed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("opVaultId")]
    public Opvaultid? OpVaultId { get; init; }

    /// <summary>
    /// Hosts every credential from opVaultId may be typed into, e.g. ["amazon.com"]. Omit to derive each item's hosts from its own 1Password website entries; items with no website are then skipped and reported in skippedVaultItems. A host covers its subdomains, so 1Password's ExactDomain autofill setting is not honored either way.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("opVaultAllowedDomains")]
    public Opvaultalloweddomains? OpVaultAllowedDomains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("judge")]
    public Judge? Judge { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxCostUsd")]
    public Maxcostusd? MaxCostUsd { get; init; }
}
