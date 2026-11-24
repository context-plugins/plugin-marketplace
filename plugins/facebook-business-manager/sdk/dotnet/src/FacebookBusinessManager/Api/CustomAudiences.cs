using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.CustomAudiences;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Create and manage custom audiences for ad targeting based on customer data, website visitors, or app users.
/// </summary>
public sealed class CustomAudiences
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomAudiences(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create a custom audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomAudienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences, app activity audiences, and lookalike audiences.
    /// </remarks>
    public Task<CreateResponse> CreateCustomAudience(CreateCustomAudienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/customaudiences"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateCustomAudienceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager List custom audiences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomAudienceList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomAudiencesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate sizes.
    /// </remarks>
    public Task<CustomAudienceList> ListCustomAudiences(ListCustomAudiencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/customaudiences"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [new Param("fields", request.Fields), new Param("limit", request.Limit), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomAudienceList>(),
            ListCustomAudiencesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
