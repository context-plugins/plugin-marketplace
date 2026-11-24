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
using Beehiiv.Requests.ReferralProgram;

namespace Beehiiv.Api;

public sealed class ReferralProgram
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ReferralProgram(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get referral program OAuth Scope: referral_program:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReferralProgramGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show14Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details about the publication's referral program, including milestones and rewards.
    /// </remarks>
    public Task<ReferralProgramGetResponse> Show14(Show14Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/referral_program"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("limit", request.Limit), new Param("page", request.Page)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReferralProgramGetResponse>(),
            Show14Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
