using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.VpCs;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for creating and managing Virtual Private Clouds
/// </summary>
public sealed class VpCs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VpCs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Create a VPC
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVpcError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one or more subnets.
    /// </remarks>
    public Task CreateVpc(CreateVpcRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateVpc"),
            [],
            [
                new Param("CidrBlock", request.CidrBlock),
                new Param("AmazonProvidedIpv6CidrBlock", request.AmazonProvidedIpv6CidrBlock),
                new Param("InstanceTenancy", request.InstanceTenancy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateVpcError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Delete a VPC
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVpcError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. You must also delete all subnets associated with the VPC.
    /// </remarks>
    public Task DeleteVpc(DeleteVpcRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DeleteVpc"),
            [],
            [new Param("VpcId", request.VpcId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVpcError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Describe VPCs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeVpcsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options set, state, and tags.
    /// </remarks>
    public Task DescribeVpcs(DescribeVpcsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DescribeVpcs"),
            [],
            [
                new Param("VpcId", request.VpcId),
                new Param("Filter", request.Filter),
                new Param("MaxResults", request.MaxResults),
                new Param("NextToken", request.NextToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeVpcsError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Modify a VPC Attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModifyVpcAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname attributes.
    /// </remarks>
    public Task ModifyVpcAttribute(ModifyVpcAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=ModifyVpcAttribute"),
            [],
            [
                new Param("VpcId", request.VpcId),
                new Param("EnableDnsSupport.Value", request.EnableDnsSupportValue),
                new Param("EnableDnsHostnames.Value", request.EnableDnsHostnamesValue),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ModifyVpcAttributeError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
