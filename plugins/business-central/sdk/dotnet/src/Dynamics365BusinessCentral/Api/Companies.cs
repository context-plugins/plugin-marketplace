using System;
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
using Dynamics365BusinessCentral.Requests.Companies;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage automation companies
/// </summary>
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
    /// Create a Company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAutomationCompanyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new company in the Business Central tenant.
    /// </remarks>
    public Task<AutomationCompany> CreateAutomationCompany(CreateAutomationCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies({company_id})/automationCompanies"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutomationCompany>(),
            CreateAutomationCompanyError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Automation Company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAutomationCompanyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a company from the tenant.
    /// </remarks>
    public Task DeleteAutomationCompany(DeleteAutomationCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/automationCompanies({automationCompany_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("automationCompany_id", request.AutomationCompanyId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAutomationCompanyError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Automation Company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAutomationCompanyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific automation company by ID.
    /// </remarks>
    public Task<AutomationCompany> GetAutomationCompany(GetAutomationCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/automationCompanies({automationCompany_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("automationCompany_id", request.AutomationCompanyId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationCompany>(),
            GetAutomationCompanyError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Automation Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiAutomationCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAutomationCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of automation company objects.
    /// </remarks>
    public Task<CompaniesApiAutomationCompaniesResponse> ListAutomationCompanies(ListAutomationCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies({company_id})/automationCompanies"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiAutomationCompaniesResponse>(),
            ListAutomationCompaniesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of companies available for automation.
    /// </remarks>
    public Task<CompaniesResponse> ListCompanies(ListCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies"),
            [],
            [new Param("$filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesResponse>(),
            ListCompaniesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Automation Company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationCompany"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAutomationCompanyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates properties of an automation company (e.g., rename).
    /// </remarks>
    public Task<AutomationCompany> UpdateAutomationCompany(UpdateAutomationCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/automationCompanies({automationCompany_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("automationCompany_id", request.AutomationCompanyId),
            ],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutomationCompany>(),
            UpdateAutomationCompanyError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
