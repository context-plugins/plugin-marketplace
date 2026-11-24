using System.Collections.Generic;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsCompleteQuery operation.
/// </summary>
public sealed record JobsProjectsTenantsCompleteQueryRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    /// <summary>
    /// If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see <see href="https://tools.ietf.org/html/bcp47">Tags for Identifying Languages</see>. The maximum number of allowed characters is 255.
    /// </summary>
    public IReadOnlyList<string>? LanguageCodes { get; init; }

    /// <summary>
    /// Required. Completion result count. The maximum allowed page size is 10.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
    /// </summary>
    public string? Query { get; init; }

    /// <summary>
    /// The scope of the completion. The defaults is CompletionScope.PUBLIC.
    /// </summary>
    public Scope? Scope { get; init; }

    /// <summary>
    /// The completion topic. The default is CompletionType.COMBINED.
    /// </summary>
    public Type4? Type { get; init; }
}
