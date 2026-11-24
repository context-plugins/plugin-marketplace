using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FlowAccount.Core;
using FlowAccount.Core.ErrorResponse;
using FlowAccount.Core.Exceptions;
using FlowAccount.Core.Models;
using FlowAccount.Core.Request;
using FlowAccount.Core.Response;
using FlowAccount.Requests.CompanyCurrency;

namespace FlowAccount.Api;

public sealed class CompanyCurrency
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CompanyCurrency(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get company currencies except selected list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> CompanyCurrencyGetCompanyCurrencies(CompanyCurrencyGetCompanyCurrenciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/company-currency/currency"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all currency which user selected for multi-currency
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> CompanyCurrencyGetList(CompanyCurrencyGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/company-currency"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
