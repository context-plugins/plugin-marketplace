using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// One field of a 1Password item, resolved only when the agent asks for it.
/// <para>
/// Nothing here is a secret: the quadruple NAMES a credential without carrying
/// it. Creating the binding makes no call to 1Password — a provider outage must
/// not stop a run from being dispatched, and no vault is ever enumerated.
/// </para>
/// <para>
/// A one-time-password field resolves to its current code; its seed is never
/// read, so there is no flag to ask for one.
/// </para>
/// </summary>
public record OnePasswordSecretSource
{
    [JsonPropertyName("type")]
    public string Type { get; } = "onepassword";

    /// <summary>
    /// 1Password integration to resolve through. Must belong to this project.
    /// </summary>
    [JsonPropertyName("integrationId")]
    public required Guid IntegrationId { get; init; }

    [JsonPropertyName("vaultId")]
    [StringLength(64, MinimumLength = 1)]
    public required string VaultId { get; init; }

    [JsonPropertyName("itemId")]
    [StringLength(64, MinimumLength = 1)]
    public required string ItemId { get; init; }

    /// <summary>
    /// Field id from the item-fields endpoint, e.g. "password".
    /// </summary>
    [JsonPropertyName("fieldId")]
    [StringLength(64, MinimumLength = 1)]
    public required string FieldId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
