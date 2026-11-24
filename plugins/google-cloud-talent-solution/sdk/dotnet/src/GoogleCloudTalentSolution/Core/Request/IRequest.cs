using System.Net.Http;

namespace GoogleCloudTalentSolution.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
