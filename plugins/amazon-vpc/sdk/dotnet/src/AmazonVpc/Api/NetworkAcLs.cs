using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonVpc.Core;
using AmazonVpc.Core.Exceptions;
using AmazonVpc.Core.Models;
using AmazonVpc.Core.Request;
using AmazonVpc.Core.Response;
using AmazonVpc.Errors;
using AmazonVpc.Requests.NetworkAcLs;

namespace AmazonVpc.Api;

/// <summary>
/// Operations for managing network access control lists for subnet-level traffic filtering
/// </summary>
public sealed class NetworkAcLs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal NetworkAcLs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Amazon VPC Create a Network ACL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateNetworkAclError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.
    /// </remarks>
    public Task CreateNetworkAcl(CreateNetworkAclRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=CreateNetworkAcl"),
            [],
            [new Param("VpcId", request.VpcId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateNetworkAclError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Amazon VPC Describe Network ACLs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeNetworkAclsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.
    /// </remarks>
    public Task DescribeNetworkAcls(DescribeNetworkAclsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/?Action=DescribeNetworkAcls"),
            [],
            [
                new Param("NetworkAclId", request.NetworkAclId),
                new Param("Filter", request.Filter),
                new Param("MaxResults", request.MaxResults),
                new Param("NextToken", request.NextToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeNetworkAclsError.Response,
            _auth.Sigv4Auth,
            requestOptions,
            cancellationToken);
}
