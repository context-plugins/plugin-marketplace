namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationSyncProviderSetting operation.
/// </summary>
public sealed record AutomationSyncProviderSettingRequest
{
    public required string Id { get; init; }
}
