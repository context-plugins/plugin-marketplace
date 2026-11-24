using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.NatGateways;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for managing NAT gateways for outbound internet access from private subnets
/// </summary>
public sealed class NatGateways
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal NatGateways(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Create a NAT Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateNatGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.
    /// </remarks>
    public Task CreateNatGateway(CreateNatGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateNatGateway"),
            [],
            [
                new Param("SubnetId", request.SubnetId),
                new Param("AllocationId", request.AllocationId),
                new Param("ConnectivityType", request.ConnectivityType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateNatGatewayError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Describe NAT Gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeNatGatewaysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state, subnet, and associated Elastic IP address.
    /// </remarks>
    public Task DescribeNatGateways(DescribeNatGatewaysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DescribeNatGateways"),
            [],
            [
                new Param("NatGatewayId", request.NatGatewayId),
                new Param("Filter", request.Filter),
                new Param("MaxResults", request.MaxResults),
                new Param("NextToken", request.NextToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeNatGatewaysError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
