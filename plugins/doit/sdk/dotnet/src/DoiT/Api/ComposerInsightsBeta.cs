using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.ComposerInsightsBeta;

namespace DoiT.Api;

/// <summary>
/// Beta. Read-only access to Composer recipes and their results. A recipe evaluates your cloud resources against a set of conditions; each result is a finding on one affected resource, and published recipes surface as proprietary Insights in the Console.
/// </summary>
public sealed class ComposerInsightsBeta
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ComposerInsightsBeta(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Composer recipe results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComposerRecipeResultList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListComposerRecipeResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the results of one Composer recipe: one finding per affected resource, with the resource's account, region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe all return <c>200</c> with an empty <c>items</c> list and <c>rowCount: 0</c>.
    /// <para>
    /// By default (<c>last_scan_only:true</c>) only results reported by the most recent scan of each recently scanned account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default; add <c>last_scan_only:false</c> to include them and results from earlier scans. <c>rowCount</c> can therefore be lower than the recipe's <c>totalResultsCount</c>. Results are sorted by <c>detection_time</c>, descending, by default. Ties break by <c>id</c>.
    /// </para>
    /// <para>
    /// <c>filter</c> is one string of <c>key:value</c> clauses: <c>,</c> separates alternative values for one key (OR) and <c>|</c> separates keys (AND), for example <c>region:us-east-1,us-west-2|status:active</c>. Because <c>,</c> and <c>|</c> are separators, a value itself can't contain them. Supported keys:
    /// - <c>account_id</c>: one or more cloud account IDs, matched exactly.
    /// - <c>region</c>: one or more cloud regions, matched exactly.
    /// - <c>issued_resource_name</c>: one or more names of the affected resource, matched exactly.
    /// - <c>related_resource_name</c>: one or more names of related resources (for example an attached IAM policy), each matched as a substring anywhere in the result's related-resource details.
    /// - <c>status</c>: exactly one of <c>active</c> (not resolved and not snoozed), <c>snoozed</c>, <c>resolved</c> or <c>all</c>. Omitting it is the same as <c>all</c>. Combine <c>resolved</c> with <c>last_scan_only:false</c>; with the default it usually returns nothing.
    /// - <c>last_scan_only</c>: exactly one of <c>true</c> or <c>false</c>. Defaults to <c>true</c>, which returns only results reported by each recently scanned account's most recent scan, and so rarely includes resolved results. <c>false</c> returns results from every scan and account, including resolved ones.
    /// - <c>allocation</c>: up to 10 distinct allocation IDs from <c>GET /analytics/v1/allocations</c>. Returns only results on resources in any of those allocations. An allocation you can't view returns <c>404</c>; if access can't be checked, the request returns <c>503</c> rather than unfiltered data.
    /// </para>
    /// <para>
    /// Requests are always served for the customer your API token belongs to.
    /// </para>
    /// </remarks>
    public Task<ComposerRecipeResultList> ListComposerRecipeResults(ListComposerRecipeResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v2/recipes/{recipeId}/results"),
            [new TemplateParam("recipeId", request.RecipeId)],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("filter", request.Filter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComposerRecipeResultList>(),
            ListComposerRecipeResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Composer recipes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComposerRecipeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListComposerRecipesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes are listed with <c>status: dismissed</c> and every count set to 0.
    /// <para>
    /// Recipes are sorted by <c>severity</c>, descending, by default. Ties break by title (case-insensitive), then by <c>id</c>.
    /// </para>
    /// <para>
    /// <c>filter</c> is one string of <c>key:value</c> clauses: <c>,</c> separates alternative values for one key (OR) and <c>|</c> separates keys (AND), for example <c>severity:critical,high|provider:aws,gcp</c>. Because <c>,</c> and <c>|</c> are separators, a value itself can't contain them. Supported keys:
    /// - <c>provider</c>: one or more of <c>aws</c>, <c>azure</c>, <c>azure_ad</c>, <c>gcp</c>, <c>general</c>, <c>google_cloud_source</c>, <c>google_workspace</c>, <c>k8s</c>, <c>oci</c>, <c>vmware</c>.
    /// - <c>severity</c>: one or more of <c>critical</c>, <c>high</c>, <c>medium</c>, <c>low</c>.
    /// - <c>pillar</c>: one or more of <c>cost</c>, <c>operations</c>, <c>performance</c>, <c>security</c>, <c>compliance</c>. <c>compliance</c> matches recipes tagged with at least one compliance standard.
    /// - <c>has_active_results</c>: exactly one of <c>true</c> or <c>false</c>.
    /// - <c>allocation</c>: up to 10 distinct allocation IDs from <c>GET /analytics/v1/allocations</c>. Lists only recipes with results on resources in any of those allocations; counts, savings and <c>rowCount</c> then cover only those resources. An allocation you can't view returns <c>404</c>; if access can't be checked, the request returns <c>503</c> rather than unfiltered data.
    /// </para>
    /// <para>
    /// Requests are always served for the customer your API token belongs to. To list the results of one recipe, use its <c>id</c> with <c>GET /insights/v2/recipes/{recipeId}/results</c>.
    /// </para>
    /// </remarks>
    public Task<ComposerRecipeList> ListComposerRecipes(ListComposerRecipesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v2/recipes"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("filter", request.Filter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComposerRecipeList>(),
            ListComposerRecipesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
