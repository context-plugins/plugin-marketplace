using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.InternetGateways;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for managing internet gateways that connect VPCs to the internet
/// </summary>
public sealed class InternetGateways
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal InternetGateways(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Attach an Internet Gateway to a VPC
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AttachInternetGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC.
    /// </remarks>
    public Task AttachInternetGateway(AttachInternetGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=AttachInternetGateway"),
            [],
            [new Param("InternetGatewayId", request.InternetGatewayId), new Param("VpcId", request.VpcId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AttachInternetGatewayError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Create an Internet Gateway
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInternetGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using AttachInternetGateway.
    /// </remarks>
    public Task CreateInternetGateway(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateInternetGateway"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateInternetGatewayError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
