using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record SignRequestDetailed
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusJuriSignSignRequestsApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signing_order_type")]
    public SigningOrderType1? SigningOrderType { get; init; }

    /// <summary>
    /// True if your organization's commercial contract includes the extended archiving option (10 years). Informational only — reflects the billed option, not a distinct technical purge policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extended_retention")]
    public bool? ExtendedRetention { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("progress")]
    public ProgressModel? Progress { get; init; }

    /// <summary>
    /// URL shown to the signer as an explicit "return to &lt;domain&gt;" button on the success page. Must use https and match the domain declared for your organization (contact support to register it).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// Present only when a payment was requested on this sign request (see the <c>payment</c> field on creation). The signer is invited to pay only after signing ("sign then pay") — <c>checkout_url</c> is null until the sign request is fully signed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment")]
    public Payment1? Payment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sent_at")]
    public DateTimeOffset? SentAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("document")]
    public DocumentJuriSignSignRequestsApi? Document { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public CreatedBy? CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signers")]
    public IReadOnlyList<Signer1>? Signers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads")]
    public Downloads? Downloads { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
