using Contentstack.Servers;

namespace Contentstack;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultContentstackAutomateManagementAccountsApiOptions DefaultContentstackAutomateManagementAccountsApi { get; set; } = new();
    public DefaultContentstackAssetsApiOptions DefaultContentstackAssetsApi { get; set; } = new();
    public DefaultContentstackPersonalizeManagementAttributesApiOptions DefaultContentstackPersonalizeManagementAttributesApi { get; set; } = new();
    public DefaultContentstackBrandKitManagementBrandKitsApiOptions DefaultContentstackBrandKitManagementBrandKitsApi { get; set; } = new();
    public DefaultContentstackEnvironmentsApiOptions DefaultContentstackEnvironmentsApi { get; set; } = new();
    public DefaultContentstackEventsApiOptions DefaultContentstackEventsApi { get; set; } = new();
    public DefaultContentstackProjectsApiOptions DefaultContentstackProjectsApi { get; set; } = new();
    public DefaultContentstackScimScimGroupsApiOptions DefaultContentstackScimScimGroupsApi { get; set; } = new();
}
