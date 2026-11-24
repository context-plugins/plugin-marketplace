using UiPath.Servers;

namespace UiPath;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultUiPathAutomationHubAppInventoryApiOptions DefaultUiPathAutomationHubAppInventoryApi { get; set; } = new();
    public DefaultUiPathPlatformManagementAuditLogsApiOptions DefaultUiPathPlatformManagementAuditLogsApi { get; set; } = new();
    public DefaultUiPathDocumentUnderstandingClassificationApiOptions DefaultUiPathDocumentUnderstandingClassificationApi { get; set; } = new();
    public DefaultUiPathDataServiceEntitiesApiOptions DefaultUiPathDataServiceEntitiesApi { get; set; } = new();
    public DefaultUiPathTestManagerProjectsApiOptions DefaultUiPathTestManagerProjectsApi { get; set; } = new();
}
