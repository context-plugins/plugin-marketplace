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
using Jid.Requests.Screen;

namespace Jid.Api;

/// <summary>
/// Engage or not: a fast, deterministic answer for a lead, sender, vendor or website
/// </summary>
public sealed class Screen
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Screen(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Is this e-mail really from who it says? (raw headers in, checks and read out)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EmailCheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether the From domain or a business display name imitates a known company's registered domain. Returns checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no AI.
    /// </remarks>
    public Task<object> EmailCheck(EmailCheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/email-check"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            EmailCheckError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Should you engage? A fast, deterministic engage-or-not answer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScreenResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScreenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url, email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence, subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version 2026-10-05.2: https://jid.com/screen-rules
    /// </remarks>
    public Task<ScreenResult> ScreenInvoke(ScreenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screen"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScreenResult>(),
            ScreenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Should you engage? (query parameters)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScreenResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScreenGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Same as POST /v1/screen, with the fields as query parameters.
    /// </remarks>
    public Task<ScreenResult> ScreenGet(ScreenGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screen"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("url", request.Url),
                new Param("email", request.Email),
                new Param("phone", request.Phone),
                new Param("company_name", request.CompanyName),
                new Param("name", request.Name),
                new Param("context", request.Context),
                new Param("policy", request.Policy),
                new Param("amount", request.Amount),
                new Param("country", request.Country),
                new Param("ip_country", request.IpCountry),
                new Param("ip_region", request.IpRegion),
                new Param("ip_asn", request.IpAsn),
                new Param("browser_timezone", request.BrowserTimezone),
                new Param("stated_country", request.StatedCountry),
                new Param("signal", request.Signal),
                new Param("site", request.Site),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScreenResult>(),
            ScreenGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
