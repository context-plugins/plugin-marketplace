using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record DistinguishedName
{
    /// <summary>
    /// The common name (CN) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CommonName")]
    public string? CommonName { get; init; }

    /// <summary>
    /// The domain component attributes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainComponents")]
    public IReadOnlyList<string>? DomainComponents { get; init; }

    /// <summary>
    /// The country (C) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Country")]
    public string? Country { get; init; }

    /// <summary>
    /// A list of custom attributes in the distinguished name. Each custom attribute contains an object identifier (OID) and its corresponding value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CustomAttributes")]
    public IReadOnlyList<CustomAttribute>? CustomAttributes { get; init; }

    /// <summary>
    /// The distinguished name qualifier attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DistinguishedNameQualifier")]
    public string? DistinguishedNameQualifier { get; init; }

    /// <summary>
    /// The generation qualifier attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GenerationQualifier")]
    public string? GenerationQualifier { get; init; }

    /// <summary>
    /// The given name attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GivenName")]
    public string? GivenName { get; init; }

    /// <summary>
    /// The initials attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Initials")]
    public string? Initials { get; init; }

    /// <summary>
    /// The locality (L) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Locality")]
    public string? Locality { get; init; }

    /// <summary>
    /// The organization (O) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Organization")]
    public string? Organization { get; init; }

    /// <summary>
    /// The organizational unit (OU) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationalUnit")]
    public string? OrganizationalUnit { get; init; }

    /// <summary>
    /// The pseudonym attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pseudonym")]
    public string? Pseudonym { get; init; }

    /// <summary>
    /// The serial number attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SerialNumber")]
    public string? SerialNumber { get; init; }

    /// <summary>
    /// The state or province (ST) attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("State")]
    public string? State { get; init; }

    /// <summary>
    /// The surname attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Surname")]
    public string? Surname { get; init; }

    /// <summary>
    /// The title attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Title")]
    public string? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
