using System.Net.Http;

namespace GoogleCloudTasks.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
