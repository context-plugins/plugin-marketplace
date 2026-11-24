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
using Asana.Requests.CustomFieldSettings;

namespace Asana.Api;

/// <summary>
/// Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the <c>is_important</c> property determines some possible application-specific handling of that custom field.
/// </summary>
public sealed class CustomFieldSettings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomFieldSettings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a portfolio's custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PortfoliosCustomFieldSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldSettingsForPortfolioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all of the custom fields settings on a portfolio, in compact form.
    /// </remarks>
    public Task<PortfoliosCustomFieldSettingsResponse> GetCustomFieldSettingsForPortfolio(GetCustomFieldSettingsForPortfolioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/portfolios/{portfolio_gid}/custom_field_settings"),
            [new TemplateParam("portfolio_gid", request.PortfolioGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PortfoliosCustomFieldSettingsResponse>(),
            GetCustomFieldSettingsForPortfolioError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project's custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsCustomFieldSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomFieldSettingsForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, <c>opt_fields</c> can be used to include more data than is returned in the compact representation. See the getting started guide on input/output options for more information.
    /// </remarks>
    public Task<ProjectsCustomFieldSettingsResponse> GetCustomFieldSettingsForProject(GetCustomFieldSettingsForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/custom_field_settings"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsCustomFieldSettingsResponse>(),
            GetCustomFieldSettingsForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
