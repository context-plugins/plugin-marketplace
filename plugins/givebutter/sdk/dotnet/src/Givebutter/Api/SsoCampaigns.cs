using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.SsoCampaigns;

namespace Givebutter.Api;

public sealed class SsoCampaigns
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SsoCampaigns(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Sso campaigns show
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SsoCampaignsShowError"/> when the server returns an error response.</exception>
    public Task<CampaignResource> SsoCampaignsShow(SsoCampaignsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sso/v1/campaigns/{campaign}"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignResource>(),
            SsoCampaignsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
