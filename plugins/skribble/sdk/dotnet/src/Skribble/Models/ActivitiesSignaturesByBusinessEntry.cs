using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record ActivitiesSignaturesByBusinessEntry
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_id")]
    public string? Id { get; init; }

    /// <summary>
    /// Action performed on the signature request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    /// <summary>
    /// ID of the related signature request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature_request_id")]
    public string? SignatureRequestId { get; init; }

    /// <summary>
    /// Optional cost center
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_center")]
    public string? CostCenter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initiator")]
    public ActivitiesSignaturesUser? Initiator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signer")]
    public ActivitiesSignaturesUser? Signer { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
