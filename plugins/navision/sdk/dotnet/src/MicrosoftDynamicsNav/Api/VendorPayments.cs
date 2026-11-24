using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.VendorPayments;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage vendor payment journals
/// </summary>
public sealed class VendorPayments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VendorPayments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Vendor Payment Journals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiVendorPaymentJournalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVendorPaymentJournalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of vendor payment journal objects.
    /// </remarks>
    public Task<CompaniesApiVendorPaymentJournalsResponse> ListVendorPaymentJournals(ListVendorPaymentJournalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/vendorPaymentJournals"),
            [new TemplateParam("company_id", request.CompanyId)],
            [
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$filter", request.Filter),
                new Param("$select", request.Select),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiVendorPaymentJournalsResponse>(),
            ListVendorPaymentJournalsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
