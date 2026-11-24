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
using Asana.Requests.Rules;

namespace Asana.Api;

/// <summary>
/// Trigger rules via incoming web requests.
/// </summary>
public sealed class Rules
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Rules(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Asana Trigger a rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RuleTriggersRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerRuleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a rule which uses an incoming web request trigger.
    /// </remarks>
    public Task<RuleTriggersRunResponse> TriggerRule(TriggerRuleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rule_triggers/{rule_trigger_gid}/run"),
            [new TemplateParam("rule_trigger_gid", request.RuleTriggerGid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RuleTriggersRunResponse>(),
            TriggerRuleError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
