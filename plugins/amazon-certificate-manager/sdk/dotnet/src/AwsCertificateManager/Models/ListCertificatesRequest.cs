using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record ListCertificatesRequest
{
    /// <summary>
    /// Filter the certificate list by status value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateStatuses")]
    public IReadOnlyList<CertificateStatus>? CertificateStatuses { get; init; }

    /// <summary>
    /// Filter the certificate list by certificate key pair origin. Specify one or more CertificateKeyPairOrigin values. Default filtering returns only certificates with key pair origin of AWS_MANAGED and CUSTOMER_PROVIDED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateKeyPairOrigins")]
    public IReadOnlyList<CertificateKeyPairOrigin4>? CertificateKeyPairOrigins { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Includes")]
    public Filters? Includes { get; init; }

    /// <summary>
    /// Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxItems")]
    public int? MaxItems { get; init; }

    /// <summary>
    /// Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SortBy")]
    public SortBy? SortBy { get; init; }

    /// <summary>
    /// Specifies the order of sorted results. If you specify SortOrder, you must also specify SortBy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SortOrder")]
    public SortOrder? SortOrder { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
