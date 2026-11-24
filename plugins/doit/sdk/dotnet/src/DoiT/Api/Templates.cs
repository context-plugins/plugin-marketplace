using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Templates;

namespace DoiT.Api;

/// <summary>
/// Browse the catalogue of read-only CloudFlow templates (blueprints) used to create flows.
/// </summary>
public sealed class Templates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Templates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudflowTemplate2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single CloudFlow template by ID.
    /// </remarks>
    public Task<CloudflowTemplate> GetCloudflowTemplate2(GetCloudflowTemplate2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/templates/{templateId}"),
            [new TemplateParam("templateId", request.TemplateId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowTemplate>(),
            GetCloudflowTemplate2Error.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowTemplateListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudflowTemplates2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the catalogue of available CloudFlow templates (blueprints). Templates are
    /// read-only. To create a flow from a template, use <c>POST /flows</c> with a <c>templateId</c>.
    /// </remarks>
    public Task<CloudflowTemplateListResponse> ListCloudflowTemplates2(ListCloudflowTemplates2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/templates"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowTemplateListResponse>(),
            ListCloudflowTemplates2Error.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
