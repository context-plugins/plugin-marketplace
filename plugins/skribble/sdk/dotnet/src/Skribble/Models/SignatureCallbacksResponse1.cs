using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record SignatureCallbacksResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sid")]
    public Guid? Sid { get; init; }

    /// <summary>
    /// The state of a signature.
    /// <para>
    /// Possible values:
    ///   - <b>OPEN</b> Waiting for the user to sign a signature.
    ///   - <b>WAITING</b> The signer is waiting for a preceding signer in the sequence to complete.
    ///   - <b>DECLINED</b> The user declined to sign.
    ///   - <b>WITHDRAWN</b> The owner has withdrawn the signature request.
    ///   - <b>SIGNED</b> The user signed the document.
    ///   - <b>ERROR</b> A technical error occurred.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_code")]
    public SignatureStatusCode1? StatusCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_email")]
    [Format(FormatKind.Email)]
    public string? AccountEmail { get; init; }

    /// <summary>
    /// Signer identity information returned as part of the SignatureRequest response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signer_identity_data")]
    public SignerIdentityDataInResponse? SignerIdentityData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sequence")]
    public int? Sequence { get; init; }

    /// <summary>
    /// Whether Skribble sends notification emails to this signer. When set to <c>false</c> together with
    /// <c>signer_identity_data.identity_reference</c>, the TAN-based email validation for No-Account-Signers (SES) is skipped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify")]
    public bool? Notify { get; init; }

    /// <summary>
    /// A personalized signing URL for this specific signer, distinct from the top-level signing_url of the SignatureRequest.
    /// It points to the Skribble web application and will directly open the document for signing
    /// provided that the user is known to Skribble and is logged in.
    /// Otherwise, the user must login or register first to be able to see the document.
    /// <para>
    /// When the user visits this URL, they will be forwarded to a special preview page of the PDF document and can start the signature process as usual.
    /// </para>
    /// <para>
    /// You can add the following query parameters to this signing_url. Skribble will respect these parameters and redirect the user to the provided URLs once the signature process is finished.
    /// </para>
    /// <para>
    /// Example: <c>https://my.skribble.com/view/4f43614a-de50-bfe1-2df3-4c881fc7840e/cd16bd0802d146fd94ff736d7d7bf551?exitURL=https%3A%2F%2Fmy-app.com%2Fsigned&amp;redirectTimeout=10</c>
    /// </para>
    /// <para>
    /// | Parameter | Type | Description |
    /// | --- | --- | --- |
    /// | <c>exitURL</c> | string (URL-encoded) | Optional URL to redirect after the signature process finished. Example: <c>https%3A%2F%2Fgoogle.com</c> |
    /// | <c>errorURL</c> | string (URL-encoded) | Optional URL to redirect in case of an error. Defaults to <c>exitURL</c>. Ignored if <c>exitURL</c> is not set. Example: <c>https%3A%2F%2Fbing.com</c> |
    /// | <c>declineURL</c> | string (URL-encoded) | Optional URL to redirect when the user declines. Defaults to <c>exitURL</c>. Ignored if <c>exitURL</c> is not set. |
    /// | <c>hidedownload</c> | boolean | Optional flag to hide the download button on the success screen. Requires <c>exitURL</c> to be set. Example: <c>true</c> |
    /// | <c>redirectTimeout</c> | integer | Optional seconds before auto-redirect after signing. Min 0 (instant), max 90. Default: 45. Example: <c>20</c> |
    /// | <c>lang</c> | string | Optional language code to display the signing page in a specific language. Supported values: <c>en</c> (default), <c>de</c>, <c>fr</c>. Example: <c>lang=fr</c> |
    /// | <c>overlay</c> | boolean | Optional flag to show or hide the Skribble overlay on the signing page. |
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signing_url")]
    [Format(FormatKind.Uri)]
    public string? SigningUrl { get; init; }

    /// <summary>
    /// The message provided by the signer when declining the signature request. Only present if the signer declined and provided a message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decline_message")]
    public string? DeclineMessage { get; init; }

    /// <summary>
    /// Timestamp when this signer signed the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signed_at")]
    public DateTimeOffset? SignedAt { get; init; }

    /// <summary>
    /// The legislation under which this signer's signature was created. Only present after signing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signed_legislation")]
    public SignatureLegislation2? SignedLegislation { get; init; }

    /// <summary>
    /// The actual quality of this signer's signature. Only present after signing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signed_quality")]
    public SignatureQuality2? SignedQuality { get; init; }

    /// <summary>
    /// Timestamp when this signer last viewed the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_viewed_at")]
    public DateTimeOffset? LastViewedAt { get; init; }

    /// <summary>
    /// Language preference for this signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public string? Language { get; init; }

    /// <summary>
    /// Visual signature placement information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_signature")]
    public VisualSignatureResponse? VisualSignature { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
