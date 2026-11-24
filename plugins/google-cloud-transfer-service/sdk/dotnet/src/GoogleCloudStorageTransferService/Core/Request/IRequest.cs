using System.Net.Http;

namespace GoogleCloudStorageTransferService.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
