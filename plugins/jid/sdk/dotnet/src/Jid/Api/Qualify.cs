using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Jid.Core;
using Jid.Core.Authentication;
using Jid.Core.Exceptions;
using Jid.Core.Models;
using Jid.Core.Request;
using Jid.Core.Response;
using Jid.Errors;
using Jid.Models;
using Jid.Requests.Qualify;

namespace Jid.Api;

/// <summary>
/// B2B lead and counterparty qualification
/// </summary>
public sealed class Qualify
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Qualify(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The read, checks and latest outcome of qualifications this key ran
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResultsError"/> when the server returns an error response.</exception>
    public Task<V1ResultsResponse> GetResults(GetResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/results"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ResultsResponse>(),
            GetResultsError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Qualify a business lead or counterparty from a form submission or outreach
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Qualification"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QualifyCounterpartyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons), a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only: personal webmail, a disposable address or no confident business match returns assessment individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing decisions about individuals.
    /// </remarks>
    public Task<Qualification> QualifyCounterparty(QualifyCounterpartyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/qualify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Qualification>(),
            QualifyCounterpartyError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record what you decided about a screen or qualify result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1OutcomesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecordOutcomeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link. Free. Stored without personal data for 13 months; outcomes tune the published rules.
    /// </remarks>
    public Task<V1OutcomesResponse> RecordOutcome(RecordOutcomeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/outcomes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1OutcomesResponse>(),
            RecordOutcomeError.Response,
            _auth.Bearer.OrAnonymous(),
            requestOptions,
            cancellationToken);
}
