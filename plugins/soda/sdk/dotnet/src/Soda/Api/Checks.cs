using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Checks;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Check Endpoints
/// </summary>
public sealed class Checks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Checks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1ChecksCheckIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a specific check in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage checks</b> permission (V3 datasets) or <b>Manage contracts</b> permission (V4 datasets) can delete checks. Soda Cloud Admins can delete checks for all datasets. <b>See Manage dataset roles for more information.</b>
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Checks</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task DeleteApiV1ChecksCheckId(DeleteApiV1ChecksCheckIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/checks/{checkId}"),
            [new TemplateParam("checkId", request.CheckId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApiV1ChecksCheckIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiChecksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ChecksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the checks that in exist in your organization's Soda Cloud account, including information about the datasets and agreements with which they are associated and the incidents to which they are linked. .
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>datasetId</c>: Optionally, use this parameter to collect only the information for checks associated with a specific dataset. Find the <c>datasetId</c> in the URL of the dataset page in Soda Cloud.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>dataStandardId</c>: Optionally, use this parameter to collect only the information for checks belonging to a specific data standard. Find the <c>dataStandardId</c> in the URL of the data standard page in Soda Cloud.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>checkIds</c>: Optionally, use this parameter to collect only the information for a specific batch of checks. Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other query parameters like <c>page</c>, <c>datasetId</c>, <c>size</c>.</description></item>
    /// </list>
    /// <para>
    /// If not specified, the query gathers information for all checks in the account and sorts the results by check name in ascending order.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Soda only returns the checks linked to datasets to which the user has <b>View dataset</b> permissions. Soda Cloud Admins have access to all checks.<b>See Manage dataset roles for more information.</b>
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Checks</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiChecksResponse> GetApiV1Checks(GetApiV1ChecksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/checks"),
            [],
            [
                new Param("checkIds", request.CheckIds),
                new Param("dataStandardId", request.DataStandardId),
                new Param("datasetId", request.DatasetId),
                new Param("page", request.Page),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiChecksResponse>(),
            GetApiV1ChecksError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
