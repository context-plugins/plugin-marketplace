using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.CustomerPortals;

namespace Paid.Api;

public sealed class CustomerPortals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomerPortals(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a customer portal session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerPortal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerPortalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a portal session for the customer. Returns a short-lived URL to the customer portal.
    /// </remarks>
    public Task<CustomerPortal> CreateCustomerPortal(CreateCustomerPortalOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-portals/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerPortal>(),
            CreateCustomerPortalError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
