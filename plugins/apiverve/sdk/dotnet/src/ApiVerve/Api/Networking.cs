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
using ApiVerve.Requests.Networking;

namespace ApiVerve.Api;

public sealed class Networking
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Networking(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bluetooth Company Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BluetoothlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BluetoothlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup Bluetooth company/manufacturer by company ID
    /// </remarks>
    public Task<V1BluetoothlookupResponse> Bluetoothlookup(BluetoothlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bluetoothlookup"),
            [],
            [new Param("companyid", request.Companyid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BluetoothlookupResponse>(),
            BluetoothlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bot Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BotdetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BotdetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed information about the bot type and category.
    /// </remarks>
    public Task<V1BotdetectorResponse> Botdetector(BotdetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/botdetector"),
            [],
            [new Param("ua", request.Ua), new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BotdetectorResponse>(),
            BotdetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Content Filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ContentfilterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContentfilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult content, and social media.
    /// </remarks>
    public Task<V1ContentfilterResponse> Contentfilter(ContentfilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contentfilter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ContentfilterResponse>(),
            ContentfilterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Blacklist Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IpblacklistlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IpblacklistlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and returns threat level assessment with geolocation details.
    /// </remarks>
    public Task<V1IpblacklistlookupResponse> Ipblacklistlookup(IpblacklistlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ipblacklistlookup"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IpblacklistlookupResponse>(),
            IpblacklistlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IplookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IplookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the details and location of an IP address
    /// </remarks>
    public Task<V1IplookupResponse> Iplookup(IplookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/iplookup"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IplookupResponse>(),
            IplookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MAC Address Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MacaddresslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MacaddresslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup MAC address data based on the MAC address
    /// </remarks>
    public Task<V1MacaddresslookupResponse> Macaddresslookup(MacaddresslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/macaddresslookup"),
            [],
            [new Param("mac", request.Mac)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MacaddresslookupResponse>(),
            MacaddresslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Nameservers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NameserversResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NameserversError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the authoritative nameservers for a domain including IP addresses and owner information.
    /// </remarks>
    public Task<V1NameserversResponse> Nameservers(NameserversRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nameservers"),
            [],
            [new Param("domain", request.Domain)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NameserversResponse>(),
            NameserversError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Phishing Domain Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PhishingcheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PhishingcheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks whether a domain is in the active phishing database
    /// </remarks>
    public Task<V1PhishingcheckResponse> Phishingcheck(PhishingcheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/phishingcheck"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1PhishingcheckResponse>(),
            PhishingcheckError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Domain and IP Pinger
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PingerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PingerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is up or not.
    /// </remarks>
    public Task<V1PingerResponse> Pinger(PingerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pinger"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1PingerResponse>(),
            PingerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// TLD Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TldlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TldlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the type and sponsoring organization for a given top-level domain.
    /// </remarks>
    public Task<V1TldlookupResponse> Tldlookup(TldlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tldlookup"),
            [],
            [new Param("tld", request.Tld)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TldlookupResponse>(),
            TldlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// TLS Checker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TlscheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TlscheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It reports supported protocols, cipher suites, and potential vulnerabilities.
    /// </remarks>
    public Task<V1TlscheckResponse> Tlscheck(TlscheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tlscheck"),
            [],
            [new Param("domain", request.Domain), new Param("port", request.Port)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TlscheckResponse>(),
            TlscheckError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tor Node Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TordetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TordetectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for security, access control, and analytics.
    /// </remarks>
    public Task<V1TordetectResponse> Tordetect(TordetectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tordetect"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TordetectResponse>(),
            TordetectError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// USB Vendor Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UsbvendorlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UsbvendorlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup USB vendor and optionally product information by ID
    /// </remarks>
    public Task<V1UsbvendorlookupResponse> Usbvendorlookup(UsbvendorlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/usbvendorlookup"),
            [],
            [new Param("vendorid", request.Vendorid), new Param("productid", request.Productid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UsbvendorlookupResponse>(),
            UsbvendorlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// VPN Proxy Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VpndetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VpndetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP address is using a VPN or not.
    /// </remarks>
    public Task<V1VpndetectorResponse> Vpndetector(VpndetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vpndetector"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1VpndetectorResponse>(),
            VpndetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
