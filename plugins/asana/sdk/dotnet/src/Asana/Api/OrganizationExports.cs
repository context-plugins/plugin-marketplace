using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.OrganizationExports;

namespace Asana.Api;

/// <summary>
/// An <c>organization_export</c> object represents a request to export the complete data of an organization in JSON format.
/// <para>
/// To export an organization using this API:
/// </para>
/// <para>
/// * Create an <c>organization_export</c>
/// request
/// and store the ID that is returned.
/// * Request the <c>organization_export</c> every few minutes, until the
/// <c>state</c> field contains ‘finished’.
/// * Download the file located at the URL in the <c>download_url</c> field. * Exports can take a long time, from several minutes to a few hours
/// for large organizations.
/// </para>
/// <para>
/// *Note: These endpoints are only available to Service Accounts of an Enterprise organization.*
/// </para>
/// </summary>
public sealed class OrganizationExports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OrganizationExports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an organization export request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationExportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrganizationExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
    /// </remarks>
    public Task<OrganizationExportsResponse> CreateOrganizationExport(CreateOrganizationExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization_exports"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationExportsResponse>(),
            CreateOrganizationExportError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get details on an org export request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationExportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details of a previously-requested Organization export.
    /// </remarks>
    public Task<OrganizationExportsResponse> GetOrganizationExport(GetOrganizationExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization_exports/{organization_export_gid}"),
            [new TemplateParam("organization_export_gid", request.OrganizationExportGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationExportsResponse>(),
            GetOrganizationExportError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
