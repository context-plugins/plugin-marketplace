using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Reports;

namespace Bill.Api;

public sealed class Reports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Reports(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get audit trail details for a vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="AuditTrailEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVendorAuditTrailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get audit trail details about changes made to a vendor object. The audit trail lists records for each create and edit operation.
    /// <para>
    /// See Get audit trail details in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<AuditTrailEntry>> GetVendorAuditTrail(GetVendorAuditTrailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/reports/audit-trail/vendor/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [
                new Param("includeArchived", request.IncludeArchived),
                new Param("start", request.Start),
                new Param("max", request.Max),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<AuditTrailEntry>>(),
            GetVendorAuditTrailError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
