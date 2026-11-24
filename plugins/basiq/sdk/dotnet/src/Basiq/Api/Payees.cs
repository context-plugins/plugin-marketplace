using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Payees;

namespace Basiq.Api;

public sealed class Payees
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Payees(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Payee Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayeeDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPayeeDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves detailed information for a specific payee. The response includes type-specific details based on the payee type (domestic, biller, international, or digitalWallet).
    /// </remarks>
    public Task<PayeeDetailsResponse> GetPayeeDetails(GetPayeeDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/payees/{payeeId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("payeeId", request.PayeeId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PayeeDetailsResponse>(),
            GetPayeeDetailsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Payees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayeesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPayeesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID, and creation date.
    /// </remarks>
    public Task<PayeesListResponse> GetPayees(GetPayeesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/payees"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("limit", request.Limit), new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PayeesListResponse>(),
            GetPayeesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
