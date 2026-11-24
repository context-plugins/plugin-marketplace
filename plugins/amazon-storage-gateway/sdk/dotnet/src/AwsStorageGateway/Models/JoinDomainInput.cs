using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record JoinDomainInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    /// </summary>
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The name of the domain that you want the gateway to join.
    /// </summary>
    [JsonPropertyName("DomainName")]
    public required string DomainName { get; init; }

    /// <summary>
    /// The organizational unit (OU) is a container in an Active Directory that can hold users, groups, computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationalUnit")]
    public string? OrganizationalUnit { get; init; }

    /// <summary>
    /// List of IP addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number include it after the colon (“:”). For example, mydc.mydomain.com:389. S3 File Gateway supports IPv6 addresses in addition to IPv4 and other existing formats. FSx File Gateway does not support IPv6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainControllers")]
    public IReadOnlyList<string>? DomainControllers { get; init; }

    /// <summary>
    /// Specifies the time in seconds, in which the JoinDomain operation must complete. The default is 20 seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeoutInSeconds")]
    public int? TimeoutInSeconds { get; init; }

    /// <summary>
    /// Sets the user name of user who has permission to add the gateway to the Active Directory domain. The domain user account should be enabled to join computers to the domain. For example, you can use the domain administrator account or an account with delegated permissions to join computers to the domain.
    /// </summary>
    [JsonPropertyName("UserName")]
    public required string UserName { get; init; }

    /// <summary>
    /// Sets the password of the user who has permission to add the gateway to the Active Directory domain.
    /// </summary>
    [JsonPropertyName("Password")]
    public required string Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
