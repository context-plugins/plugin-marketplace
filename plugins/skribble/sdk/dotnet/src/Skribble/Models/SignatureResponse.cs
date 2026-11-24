using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record SignatureResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("document_id")]
    public Guid? DocumentId { get; init; }

    /// <summary>
    /// Legislation under which the signatures are created. Required when <c>quality</c> is <c>QES</c> or <c>AES_MINIMAL</c>.
    /// <para>
    /// | Legislation | Description |
    /// | --- | --- |
    /// | <b>ZERTES</b> | QES according to Swiss law. This is the <b>default</b>. |
    /// | <b>EIDAS</b> | QES according to EU law. |
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legislation")]
    public SignatureLegislation? Legislation { get; init; }

    /// <summary>
    /// Minimal quality of the signatures for this signature request.
    /// <para>
    /// | Quality | Description |
    /// | --- | --- |
    /// | <b>QES</b> | Every signer must use QES. This is the <b>default</b> quality. Requires a <c>legislation</c> parameter. |
    /// | <b>AES_MINIMAL</b> | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a <c>legislation</c> parameter. |
    /// | <b>AES</b> | Every signer uses AES. |
    /// | <b>SES</b> | Every signer uses SES. |
    /// | <b>DEMO</b> | Every signer uses a DEMO signature with <b>no legal binding</b>. API demo users (<c>api_demo_example_*</c>) get this quality by default. |
    /// | <b>PART11</b> | Signers use a signature compliant with 21 CFR Part 11 regulations. |
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quality")]
    public SignatureQuality? Quality { get; init; }

    /// <summary>
    /// The URL for the SignatureRequest owner to view and manage the request in the Skribble web application. This URL is not intended for signers — each signer has their own dedicated signing_url within the signatures array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signing_url")]
    [Format(FormatKind.Uri)]
    public string? SigningUrl { get; init; }

    /// <summary>
    /// Overall signing status of the document.
    /// <para>
    /// Possible values:
    ///   - <b>OPEN</b> At least one user has not signed or declined their signature yet.
    ///   - <b>DECLINED</b> At least one user declined to sign. The signature request failed.
    ///   - <b>WITHDRAWN</b> The owner has withdrawn the signature request.
    ///   - <b>SIGNED</b> All users signed the document. The signature request was successfully completed.
    ///   - <b>EXPIRED</b> The owner-set <c>expires_at</c> date has passed before all signers signed. Terminal status.
    ///   - <b>ERROR</b> A technical error occurred. The signature request cannot be completed.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_overall")]
    public SignatureStatusOverall1? StatusOverall { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business")]
    public string? Business { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signatures")]
    public IReadOnlyList<SignatureCallbacksResponse1>? Signatures { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cc_email_addresses")]
    public IReadOnlyList<string>? CcEmailAddresses { get; init; }

    /// <summary>
    /// Server-managed date on which this signature request and its related documents are automatically
    /// deleted in line with the owning business's retention policy. Not directly settable by API clients.
    /// May be absent or <c>null</c> when no retention policy applies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auto_delete_at")]
    public DateTimeOffset? AutoDeleteAt { get; init; }

    /// <summary>
    /// Owner-set expiry date for this signature request. When this date passes, the request
    /// transitions to <c>status_overall=EXPIRED</c>. Set via <c>expires_at</c> at create time.
    /// Absent or <c>null</c> when no owner-set expiry has been configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    public IReadOnlyList<SignatureAttachment>? Attachments { get; init; }

    /// <summary>
    /// When a SignatureRequest has been signed by all signers, all signers and all observers are notified by email.
    /// Skribble provides the option to attach two types of attachments automatically to this email:
    ///   - the signed document and
    ///   - the signature protocol.
    /// <para>
    /// This can be configured via the business settings, which can be used to define that these documents should generally
    /// be attached for all SignatureRequests created by business members.
    /// </para>
    /// <para>
    /// Alternatively it is possible to define the attachments on demand per SignatureRequest by using this field.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attach_on_success")]
    public IReadOnlyList<AttachmentWhenSigned>? AttachOnSuccess { get; init; }

    /// <summary>
    /// Custom field for storing application-specific data related to this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public string? Custom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    /// <summary>
    /// Users or API keys with read access to this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("read_access")]
    public IReadOnlyList<string>? ReadAccess { get; init; }

    /// <summary>
    /// Users or API keys with write access to this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("write_access")]
    public IReadOnlyList<string>? WriteAccess { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Callback URL called on overall success. See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_success_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackSuccessUrl { get; init; }

    /// <summary>
    /// Callback URL called when a signer declines or the request is withdrawn. See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackErrorUrl { get; init; }

    /// <summary>
    /// Callback URL called on any update (e.g. one signer signed). See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_update_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackUpdateUrl { get; init; }

    /// <summary>
    /// Callback URL called when a signer starts the signature process (only for Express QES). See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_start_sign_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackStartSignUrl { get; init; }

    /// <summary>
    /// Callback URL called when the identification of a signer requires manual review. See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_pending_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentPendingUrl { get; init; }

    /// <summary>
    /// Callback URL called when the identification of a signer ends in an error. See the request schema for supported placeholders and retry behaviour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentErrorUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
