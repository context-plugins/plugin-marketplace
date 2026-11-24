using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.DomainData;

namespace ApiVerve.Api;

public sealed class DomainData
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DomainData(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// BIMI Record Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BimivalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BimivalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to display verified logos in supported email clients.
    /// </remarks>
    public Task<V1BimivalidatorResponse> Bimivalidator(BimivalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bimivalidator"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BimivalidatorResponse>(),
            BimivalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DKIM Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DkimvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DkimvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are present and correctly formatted.
    /// </remarks>
    public Task<V1DkimvalidatorResponse> Dkimvalidator(DkimvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dkimvalidator"),
            [],
            [new Param("domain", request.Domain), new Param("selector", request.Selector)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DkimvalidatorResponse>(),
            DkimvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DMARC Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DmarcvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DmarcvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for a domain to ensure it is correctly configured.
    /// </remarks>
    public Task<V1DmarcvalidatorResponse> Dmarcvalidator(DmarcvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dmarcvalidator"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DmarcvalidatorResponse>(),
            DmarcvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DnslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the DNS records of a domain
    /// </remarks>
    public Task<V1DnslookupResponse> Dnslookup(DnslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dnslookup"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DnslookupResponse>(),
            DnslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DNS Propagation Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DnspropagationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnspropagationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check DNS propagation for a domain across global DNS servers
    /// </remarks>
    public Task<V1DnspropagationResponse> Dnspropagation(DnspropagationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dnspropagation"),
            [],
            [new Param("domain", request.Domain), new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DnspropagationResponse>(),
            DnspropagationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DNSSEC Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DnsseccheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsseccheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate DNSSEC configuration for a domain
    /// </remarks>
    public Task<V1DnsseccheckResponse> Dnsseccheck(DnsseccheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dnsseccheck"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DnsseccheckResponse>(),
            DnsseccheckError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Domain Availability
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DomainavailabilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DomainavailabilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if a domain is available
    /// </remarks>
    public Task<V1DomainavailabilityResponse> Domainavailability(DomainavailabilityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainavailability"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DomainavailabilityResponse>(),
            DomainavailabilityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Domain Expiration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DomainexpirationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DomainexpirationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the expiration date of a domain
    /// </remarks>
    public Task<V1DomainexpirationResponse> Domainexpiration(DomainexpirationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainexpiration"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DomainexpirationResponse>(),
            DomainexpirationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fully Qualified Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FullyqualifieddomainResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FullyqualifieddomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the fully qualified domain name of an ip
    /// </remarks>
    public Task<V1FullyqualifieddomainResponse> Fullyqualifieddomain(FullyqualifieddomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/fullyqualifieddomain"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FullyqualifieddomainResponse>(),
            FullyqualifieddomainError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MX Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MxlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MxlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given domain.
    /// </remarks>
    public Task<V1MxlookupResponse> Mxlookup(MxlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mxlookup"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MxlookupResponse>(),
            MxlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ReversednslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReversednslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the hostname associated with an IP address
    /// </remarks>
    public Task<V1ReversednslookupResponse> Reversednslookup(ReversednslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reversednslookup"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ReversednslookupResponse>(),
            ReversednslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SPF Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SpfvalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpfvalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and optionally whether a given IP address is authorized to send emails for that domain.
    /// </remarks>
    public Task<V1SpfvalidatorResponse> Spfvalidator(SpfvalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/spfvalidator"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SpfvalidatorResponse>(),
            SpfvalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SSL Certificate Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SslcheckerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SslcheckerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the SSL certificate of a domain
    /// </remarks>
    public Task<V1SslcheckerResponse> Sslchecker(SslcheckerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sslchecker"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SslcheckerResponse>(),
            SslcheckerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Subdomain Finder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SubdomainfinderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubdomainfinderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a list of all the available subdomains for the given domain.
    /// </remarks>
    public Task<V1SubdomainfinderResponse> Subdomainfinder(SubdomainfinderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/subdomainfinder"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("limit", request.Limit),
                new Param("deepScan", request.DeepScan),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SubdomainfinderResponse>(),
            SubdomainfinderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// URL Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UrllookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UrllookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the location of a URL
    /// </remarks>
    public Task<V1UrllookupResponse> Urllookup(UrllookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urllookup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UrllookupResponse>(),
            UrllookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// URL Title
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UrltitleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UrltitleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the title of a web page based on the URL
    /// </remarks>
    public Task<V1UrltitleResponse> Urltitle(UrltitleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urltitle"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UrltitleResponse>(),
            UrltitleError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// URL Unshortener
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UrlunshortenerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UrlunshortenerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unshorten a shortened URL
    /// </remarks>
    public Task<V1UrlunshortenerResponse> Urlunshortener(UrlunshortenerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urlunshortener"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UrlunshortenerResponse>(),
            UrlunshortenerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// WHOIS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WhoislookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WhoislookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup domain registration data based on the domain name
    /// </remarks>
    public Task<V1WhoislookupResponse> Whoislookup(WhoislookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/whoislookup"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WhoislookupResponse>(),
            WhoislookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
