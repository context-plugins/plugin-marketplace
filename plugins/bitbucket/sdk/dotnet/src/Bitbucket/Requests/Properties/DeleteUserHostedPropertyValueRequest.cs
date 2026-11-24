namespace Bitbucket.Requests.Properties;

/// <summary>
/// The inputs of the DeleteUserHostedPropertyValue operation.
/// </summary>
public sealed record DeleteUserHostedPropertyValueRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The key of the Connect app.
    /// </summary>
    public required string AppKey { get; init; }

    /// <summary>
    /// The name of the property.
    /// </summary>
    public required string PropertyName { get; init; }
}
