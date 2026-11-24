using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Extensions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.Report;

namespace Skribble.Api;

/// <summary>
/// Endpoints for signature activity reporting.
/// </summary>
public sealed class Report
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Report(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get signature activities by business
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActivitiesSignaturesByBusinessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetActivitiesSignaturesByBusinessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed signature <c>activities</c> for your business and its members within a specified date range.
    /// <para>
    /// Use these parameters to filter for a specific time range.
    /// </para>
    /// <para>
    /// | <b>Parameter</b> | <b>Description</b> | <b>Mandatory</b> |
    /// | --- | --- | --- |
    /// | <c>start_date</c> | The start date of the range to fetch the signature <c>activities</c>. Format: <c>yyyy-MM-dd.</c> | yes |
    /// | <c>end_date</c> | The end date of the range to fetch the signature <c>activities</c>. Format: <c>yyyy-MM-dd.</c> | yes |
    /// </para>
    /// <para>
    /// ### <b>Pagination</b>
    /// </para>
    /// <para>
    /// The result set can be controlled using the optional pagination parameters <c>page</c> and <c>size</c>
    /// </para>
    /// <para>
    /// | <b>Parameter</b> | <b>Description</b> | <b>Mandatory</b> |
    /// | --- | --- | --- |
    /// | <c>page</c> | The page number to fetch the signature <c>activities</c>. Must be a positive integer. Default: 1 | no |
    /// | <c>size</c> | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25 Maximum: 100 | no |
    /// | <c>sort</c> | The sort order of the signature activities. Can be <c>asc</c> or <c>desc</c>. Default is <c>desc</c>. | no |
    /// </para>
    /// <para>
    /// ### <b>Response</b>
    /// </para>
    /// <para>
    /// The response contains the following information.
    /// </para>
    /// <para>
    /// <b>General</b>
    /// </para>
    /// <para>
    /// | <b>Field</b> | <b>Description</b> |
    /// | --- | --- |
    /// | <c>activities</c> | Array of <c>activities</c>. See the following subchapter _Activities_. |
    /// | <c>total_items</c> | Total items to fetch when paginating through all the pages. |
    /// | <c>total_pages</c> | Total pages to fetch when paginating through all the pages. |
    /// | <c>current_page</c> | Current page number. |
    /// | <c>size</c> | Size of the page. |
    /// </para>
    /// <para>
    /// <b>Activities</b>
    /// </para>
    /// <para>
    /// | <b>Field</b> | <b>Description</b> |
    /// | --- | --- |
    /// | <c>id</c> | The ID of the signature <c>activity</c>. |
    /// | <c>action</c> | The action type of a signature activity. Can be <c>signed</c> or <c>sealed</c>. |
    /// | <c>timestamp</c> | The timestamp of the signature activity. |
    /// | <c>signature_request_id</c> | The signature request ID. |
    /// | <c>cost_center</c> | The cost center of the signature paying party. This information might not necessarily be present. |
    /// | <c>initiator</c> | The initiator <c>user</c> of the signature <c>activity</c>. See the following subchapter _User_. |
    /// | <c>signer</c> | The signer <c>user</c> of the signature <c>activity</c>. See the following subchapter _User_. |
    /// </para>
    /// <para>
    /// <b>User</b>
    /// </para>
    /// <para>
    /// | <b>Field</b> | <b>Description</b> |
    /// | --- | --- |
    /// | <c>email</c> | The email of the <c>user</c>. |
    /// | <c>first_name</c> | The first name of the <c>user</c>. |
    /// | <c>last_name</c> | The last name of the <c>user</c>. |
    /// | <c>type</c> | The membership status of the <c>user</c> in relation to the business. Can be <c>api</c>, <c>external</c>, <c>member</c> or <c>unknown</c>. |
    /// | <c>mobile</c> | The mobile number of the user. |
    /// </para>
    /// </remarks>
    public Task<ActivitiesSignaturesByBusinessResponse> GetActivitiesSignaturesByBusiness(GetActivitiesSignaturesByBusinessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleReportApi("/activities/signatures"),
            [],
            [
                new Param("start_date", request.StartDate.ToDate()),
                new Param("end_date", request.EndDate.ToDate()),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ActivitiesSignaturesByBusinessResponse>(),
            GetActivitiesSignaturesByBusinessError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
