using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RelmCrm.Core;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.ErrorResponse;
using RelmCrm.Core.Exceptions;
using RelmCrm.Core.Models;
using RelmCrm.Core.Request;
using RelmCrm.Core.Response;
using RelmCrm.Models;
using RelmCrm.Requests.Companies;

namespace RelmCrm.Api;

public sealed class Companies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Companies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a company (name required)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Company> CreateCompany(CreateCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Company>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Soft-delete a company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deleted> DeleteCompany(DeleteCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Deleted>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Company> GetCompany(GetCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Company>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<CompanyList> ListCompanies(ListCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("include_deleted", request.IncludeDeleted),
                new Param("q", request.Q),
                new Param("domain", request.Domain),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyList>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore a company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Company> RestoreCompany(RestoreCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Company>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Company> UpdateCompany(UpdateCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Company>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
