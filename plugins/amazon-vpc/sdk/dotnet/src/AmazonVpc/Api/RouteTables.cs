using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.RouteTables;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for managing route tables and routes within a VPC
/// </summary>
public sealed class RouteTables
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RouteTables(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Associate a Route Table with a Subnet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateRouteTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This association causes traffic from the subnet to be routed according to the routes in the route table.
    /// </remarks>
    public Task AssociateRouteTable(AssociateRouteTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=AssociateRouteTable"),
            [],
            [
                new Param("RouteTableId", request.RouteTableId),
                new Param("SubnetId", request.SubnetId),
                new Param("GatewayId", request.GatewayId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssociateRouteTableError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Create a Route in a Route Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRouteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the targets.
    /// </remarks>
    public Task CreateRoute(CreateRouteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateRoute"),
            [],
            [
                new Param("RouteTableId", request.RouteTableId),
                new Param("DestinationCidrBlock", request.DestinationCidrBlock),
                new Param("GatewayId", request.GatewayId),
                new Param("NatGatewayId", request.NatGatewayId),
                new Param("NetworkInterfaceId", request.NetworkInterfaceId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateRouteError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Create a Route Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRouteTableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.
    /// </remarks>
    public Task CreateRouteTable(CreateRouteTableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateRouteTable"),
            [],
            [new Param("VpcId", request.VpcId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateRouteTableError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Describe Route Tables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeRouteTablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table, which controls the routing for the subnet.
    /// </remarks>
    public Task DescribeRouteTables(DescribeRouteTablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DescribeRouteTables"),
            [],
            [
                new Param("RouteTableId", request.RouteTableId),
                new Param("Filter", request.Filter),
                new Param("MaxResults", request.MaxResults),
                new Param("NextToken", request.NextToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeRouteTablesError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
