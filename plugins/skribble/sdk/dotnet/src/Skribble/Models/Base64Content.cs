using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

/// <summary>
/// Provide the document as Base64-encoded content.
/// </summary>
public record Base64Content
{
    /// <summary>
    /// Base64 encoded bytes of the document. Maximum document size is <b>112.5 MB</b> unencoded (<b>150 MB</b> Base64-encoded).
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Content type of bytes sent in content. Currently, only application/pdf is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    /// <summary>
    /// Title of the signature request.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

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

    /// <summary>
    /// List of recipients required to sign the document.
    /// <para>
    /// It is possible to create a SignatureRequest where one or more invited participants won't need a
    /// Skribble account to sign the SignatureRequest. Those signers are called No-Account-Signers (NAS).
    /// </para>
    /// <para>
    /// To invite a No-Account-Signer (NAS), include an entry in the signatures array without an
    /// <c>account_email</c> and provide the signer's details using <c>signer_identity_data</c> instead.
    /// </para>
    /// <para>
    /// Each entry in the signatures array will be treated as a distinct identity. This means two entries
    /// with the same <c>signer_identity_data</c> are treated as two different identities and require that this
    /// person signs the document twice.
    /// </para>
    /// <para>
    /// Optionally you can combine <c>signer_identity_data</c> and <c>account_email</c> in your requests. In this case,
    /// the system checks first if there is a Skribble account with the specified e-mail address.
    /// If one is found the existing Skribble user will be invited to sign the document. Otherwise, the
    /// specified user in <c>signer_identity_data</c> will be invited to sign.
    /// </para>
    /// <para>
    /// &gt; <b>Good to know</b>
    /// &gt; We recommend combining <c>signer_identity_data</c> and <c>account_email</c> if you are unsure whether the
    /// &gt; user has a Skribble account.
    /// &gt; The benefit is that an existing Skribble user will afterwards find the SignatureRequest in the
    /// &gt; "To sign" section of their account on my.skribble.com.
    /// &gt; Conversely, if you invite them using only <c>signer_identity_data</c>, the document will not appear in
    /// &gt; their Skribble account, even if they have one. Instead, they will have to access the document
    /// &gt; using the specific link provided in their signature invitation email.
    /// </para>
    /// <para>
    /// Missing fields like first name and last name can easily be adjusted by the signer through the
    /// Skribble web client.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signatures")]
    public IReadOnlyList<SignatureRecipient>? Signatures { get; init; }

    /// <summary>
    /// Observer email addresses of users who are granted read access and to whom notifications are sent.
    /// Any email address is accepted, regardless of whether the recipient already has a Skribble account.
    /// If the observer does not yet have an account, they will need to create one to access the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cc_email_addresses")]
    public IReadOnlyList<string>? CcEmailAddresses { get; init; }

    /// <summary>
    /// Callback URL called via POST when all signers have signed (overall success).
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the final signed document ID
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_success_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackSuccessUrl { get; init; }

    /// <summary>
    /// Callback URL called via POST when a signer declines or the SignatureRequest is withdrawn.
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the most recent document ID
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackErrorUrl { get; init; }

    /// <summary>
    /// Callback URL called via POST on any change to the SignatureRequest (e.g. one signer has signed).
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the most recent document ID
    /// - <c>SKRIBBLE_SIGNATURE_ID</c> — the Signature ID (SID) of the signature just made
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_update_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackUpdateUrl { get; init; }

    /// <summary>
    /// Callback URL called via POST when a signer starts the signature process (only for Express QES).
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the most recent document ID
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_start_sign_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackStartSignUrl { get; init; }

    /// <summary>
    /// Callback URL called via POST when the identification of a signer requires manual review.
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the most recent document ID
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_pending_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentPendingUrl { get; init; }

    /// <summary>
    /// Callback URL called via POST when the identification of a signer ends in an error.
    /// <para>
    /// The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    /// - <c>SKRIBBLE_SIGNATURE_REQUEST_ID</c> — the SignatureRequest ID
    /// - <c>SKRIBBLE_DOCUMENT_ID</c> — the most recent document ID
    /// </para>
    /// <para>
    /// <b>Retry:</b> If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
    /// The endpoint can return a <c>Retry-After</c> header (seconds) to control the retry interval.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_ident_error_url")]
    [Format(FormatKind.Uri)]
    public string? CallbackIdentErrorUrl { get; init; }

    /// <summary>
    /// Custom field for storing application-specific data related to this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public string? Custom { get; init; }

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
    /// <b>Constraints</b>
    /// </para>
    /// <para>
    /// - Must be today or later.
    /// - Must be at most 6 months in the future.
    /// - If the owning business has a retention policy configured, <c>expires_at</c> must be at most
    ///   one day before the configured retention deletion date.
    /// </para>
    /// <para>
    /// Omit or send <c>null</c> to leave the request without an owner-set expiry.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

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
    /// Set a business member as the owner of this signature request, in addition to the API user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creator")]
    [Format(FormatKind.Email)]
    public string? Creator { get; init; }

    /// <summary>
    /// Users or API keys with write access to this signature request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("write_access")]
    public IReadOnlyList<string>? WriteAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
