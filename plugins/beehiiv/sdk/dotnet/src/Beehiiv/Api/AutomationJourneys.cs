using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.AutomationJourneys;

namespace Beehiiv.Api;

public sealed class AutomationJourneys
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AutomationJourneys(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Add subscription to an automation OAuth Scope: automations:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationJourneysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API* trigger. The specified <c>email</c> or <c>subscription_id</c> will be matched against your existing subscribers. If an existing subscriber is found, they will be enrolled immediately.
    /// Looking to enroll new subscribers? Use the <b>Create Subscription</b> endpoint instead and specify the <c>automation_ids</c> param.
    /// </remarks>
    public Task<AutomationJourneysResponse> Create2(Create2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations/{automationId}/journeys"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("automationId", request.AutomationId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutomationJourneysResponse>(),
            Create2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List automation journeys OAuth Scope: automations:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationJourneysIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index5Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of automation journeys that have occurred within a specific automation.
    /// </remarks>
    public Task<AutomationJourneysIndexResponse> Index5(Index5Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations/{automationId}/journeys"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("automationId", request.AutomationId),
            ],
            [new Param("status", request.Status), new Param("limit", request.Limit), new Param("page", request.Page)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationJourneysIndexResponse>(),
            Index5Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get automation journey OAuth Scope: automations:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationJourneysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single automation journey by ID.
    /// </remarks>
    public Task<AutomationJourneysResponse> Show2(Show2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("automationId", request.AutomationId),
                new TemplateParam("automationJourneyId", request.AutomationJourneyId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationJourneysResponse>(),
            Show2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
