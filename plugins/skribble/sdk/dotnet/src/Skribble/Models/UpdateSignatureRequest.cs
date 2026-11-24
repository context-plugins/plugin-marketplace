using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record UpdateSignatureRequest
{
    /// <summary>
    /// Unique ID of the signature request.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Title of the signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Message sent to the other participants along with this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signatures")]
    public IReadOnlyList<object>? Signatures { get; init; }

    /// <summary>
    /// Callback-URL which is called on overall success.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_success_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackSuccessUrl { get; init; }

    /// <summary>
    /// Callback-URL which is called in case of an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackErrorUrl { get; init; }

    /// <summary>
    /// Callback-URL which is called in case of an update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_update_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackUpdateUrl { get; init; }

    /// <summary>
    /// Callback-URL which is called when a signer starts the signature process (only for Express QES).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_start_sign_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackStartSignUrl { get; init; }

    /// <summary>
    /// Callback-URL which is called when the identification of a signer requires manual review.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_pending_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentPendingUrl { get; init; }

    /// <summary>
    /// Callback-URL which is called when the identification of a signer ends in an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentErrorUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attach_on_success")]
    public IReadOnlyList<AttachmentWhenSigned>? AttachOnSuccess { get; init; }

    /// <summary>
    /// <b>Early access.</b> This field is available to opted-in businesses only. To request
    /// access, contact <see href="mailto:support@skribble.com">support@skribble.com</see>.
    /// <para>
    /// Setting <c>expires_at</c> requires the signature-request expiry feature to be enabled
    /// for the business. If it is not, the request fails with <c>403 Forbidden</c>
    /// (problem type <c>feature-not-enabled</c>).
    /// </para>
    /// <para>
    /// Owner-set expiry date for this signature request (ISO 8601 date, e.g. <c>2026-12-31</c>).
    /// </para>
    /// <para>
    /// When set, the <c>SignatureRequest</c> transitions to <c>status_overall=EXPIRED</c> at the end of the
    /// given day if it has not been completed. <c>EXPIRED</c> is a terminal status.
    /// </para>
    /// <para>
    /// To clear an existing expiry date, call <c>DELETE /signature-requests/{SR_ID}/expires-at</c>.
    /// </para>
    /// <para>
    /// <b>Constraints</b>
    /// </para>
    /// <para>
    /// - Must be today or later.
    /// - Must be at most 6 months in the future.
    /// - If the owning business has a retention policy configured, <c>expires_at</c> must be at most
    ///   one day before the configured retention deletion date.
    /// - Mutable on <c>status_overall=DRAFT</c> only. Updating on a non-<c>DRAFT</c> request returns
    ///   <c>400 Bad Request</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("write_access")]
    public IReadOnlyList<string>? WriteAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
