using System.Net.Http;

namespace AwsCertificateManager.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
