using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.Subnets;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for creating and managing subnets within a VPC
/// </summary>
public sealed class Subnets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Subnets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Create a Subnet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubnetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR block. You can optionally specify an Availability Zone in which to create the subnet.
    /// </remarks>
    public Task CreateSubnet(CreateSubnetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateSubnet"),
            [],
            [
                new Param("VpcId", request.VpcId),
                new Param("CidrBlock", request.CidrBlock),
                new Param("AvailabilityZone", request.AvailabilityZone),
                new Param("Ipv6CidrBlock", request.Ipv6CidrBlock),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateSubnetError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Delete a Subnet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSubnetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.
    /// </remarks>
    public Task DeleteSubnet(DeleteSubnetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DeleteSubnet"),
            [],
            [new Param("SubnetId", request.SubnetId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSubnetError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Describe Subnets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSubnetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes one or more of your subnets. Returns information about the subnet including the CIDR block, Availability Zone, VPC, and state.
    /// </remarks>
    public Task DescribeSubnets(DescribeSubnetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DescribeSubnets"),
            [],
            [
                new Param("SubnetId", request.SubnetId),
                new Param("Filter", request.Filter),
                new Param("MaxResults", request.MaxResults),
                new Param("NextToken", request.NextToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeSubnetsError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
