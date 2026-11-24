using Skribble.Servers;

namespace Skribble;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultSkribbleAdditionalInformationApiOptions DefaultSkribbleAdditionalInformationApi { get; set; } = new();
    public DefaultSkribbleDocumentApiOptions DefaultSkribbleDocumentApi { get; set; } = new();
    public DefaultSkribbleIdentificationApiOptions DefaultSkribbleIdentificationApi { get; set; } = new();
    public DefaultSkribbleMonitoringApiOptions DefaultSkribbleMonitoringApi { get; set; } = new();
    public DefaultSkribbleReportApiOptions DefaultSkribbleReportApi { get; set; } = new();
    public DefaultSkribbleSealApiOptions DefaultSkribbleSealApi { get; set; } = new();
    public DefaultSkribbleSendToApiOptions DefaultSkribbleSendToApi { get; set; } = new();
    public DefaultSkribbleSignatureApiOptions DefaultSkribbleSignatureApi { get; set; } = new();
    public DefaultSkribbleSignatureAttachmentApiOptions DefaultSkribbleSignatureAttachmentApi { get; set; } = new();
    public DefaultSkribbleSignatureHandlingApiOptions DefaultSkribbleSignatureHandlingApi { get; set; } = new();
    public DefaultSkribbleSignatureSignerApiOptions DefaultSkribbleSignatureSignerApi { get; set; } = new();
    public DefaultSkribbleUserApiOptions DefaultSkribbleUserApi { get; set; } = new();
}
