using Skribble.Core.Models;
using Skribble.Servers;

namespace Skribble;

public class Server
{
    private readonly ServerEnvironment _environment;
    private readonly ServerOptions _options;

    internal Server(ServerEnvironment environment, ServerOptions options)
    {
        _environment = environment;
        _options = options;
    }

    internal UrlTemplate Default(string path) => _options.Default.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleAdditionalInformationApi(string path) =>
        _options.DefaultSkribbleAdditionalInformationApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleDocumentApi(string path) =>
        _options.DefaultSkribbleDocumentApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleIdentificationApi(string path) =>
        _options.DefaultSkribbleIdentificationApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleMonitoringApi(string path) =>
        _options.DefaultSkribbleMonitoringApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleReportApi(string path) =>
        _options.DefaultSkribbleReportApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSealApi(string path) =>
        _options.DefaultSkribbleSealApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSendToApi(string path) =>
        _options.DefaultSkribbleSendToApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSignatureApi(string path) =>
        _options.DefaultSkribbleSignatureApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSignatureAttachmentApi(string path) =>
        _options.DefaultSkribbleSignatureAttachmentApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSignatureHandlingApi(string path) =>
        _options.DefaultSkribbleSignatureHandlingApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleSignatureSignerApi(string path) =>
        _options.DefaultSkribbleSignatureSignerApi.Resolve(_environment, path);
    internal UrlTemplate DefaultSkribbleUserApi(string path) =>
        _options.DefaultSkribbleUserApi.Resolve(_environment, path);
}
