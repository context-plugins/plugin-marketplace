using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Exceptions;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Core.Request;
using Dynamics365BusinessCentral.Core.Response;
using Dynamics365BusinessCentral.Errors;
using Dynamics365BusinessCentral.Models;
using Dynamics365BusinessCentral.Requests.PaymentMethods;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage payment methods
/// </summary>
public sealed class PaymentMethods
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentMethods(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Payment Methods
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiPaymentMethodsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentMethodsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of payment method objects.
    /// </remarks>
    public Task<CompaniesApiPaymentMethodsResponse> ListPaymentMethods(ListPaymentMethodsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/paymentMethods"),
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
            JsonResponse.Create<CompaniesApiPaymentMethodsResponse>(),
            ListPaymentMethodsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
