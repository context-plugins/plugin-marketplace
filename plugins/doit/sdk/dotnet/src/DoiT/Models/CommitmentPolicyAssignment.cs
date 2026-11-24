using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// One account × product-line scope a policy is explicitly assigned to, on either cloud.
/// </summary>
public record CommitmentPolicyAssignment
{
    /// <summary>
    /// Cloud the scope belongs to.
    /// </summary>
    [JsonPropertyName("cloud")]
    public required Cloud Cloud { get; init; }

    /// <summary>
    /// AWS management account id or GCP billing account id, matching <c>managementAccountId</c> / <c>billingAccountId</c> elsewhere in this API.
    /// </summary>
    [JsonPropertyName("accountId")]
    public required string AccountId { get; init; }

    /// <summary>
    /// Product line the policy applies to. <c>compute</c> and <c>database</c> are AWS Savings Plan lines (GCP also has <c>compute</c>); <c>cloud_sql</c> is GCP only.
    /// </summary>
    [JsonPropertyName("service")]
    public required ServiceDoiTPerfectScaleForCommitmentsGeneralApi Service { get; init; }

    /// <summary>
    /// Region scope in <c>lower_snake_case</c> wire form (for example <c>us_east1</c>) for product lines assigned per region (GCP <c>cloud_sql</c>). <c>null</c> for every scope assigned per account (all AWS scopes, GCP <c>compute</c>); the settings endpoints report the same scope as <c>global</c>.
    /// </summary>
    [JsonPropertyName("region")]
    [RegularExpression("^(global|[a-z]+(_[a-z0-9]+)+)$")]
    public required string? Region { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
